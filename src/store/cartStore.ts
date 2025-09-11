import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore, CartItem } from '../types/cart';
import { Product } from '../types/product';
import toast from 'react-hot-toast';

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      loading: false,

      addItem: (product: Product, quantity = 1) => {
        const items = get().items;
        const existingItem = items.find(item => item.product.id === product.id);

        if (existingItem) {
          // Update quantity if item already exists
          const updatedItems = items.map(item =>
            item.product.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  totalPrice: (item.quantity + quantity) * item.unitPrice
                }
              : item
          );
          set({ items: updatedItems });
          toast.success(`${product.name} atualizado no carrinho`);
        } else {
          // Add new item
          const newItem: CartItem = {
            id: `${product.id}-${Date.now()}`,
            product,
            quantity,
            unitPrice: product.price,
            totalPrice: product.price * quantity
          };
          set({ items: [...items, newItem] });
          toast.success(`${product.name} adicionado ao carrinho`);
        }
      },

      removeItem: (productId: string) => {
        const items = get().items;
        const item = items.find(item => item.product.id === productId);
        const updatedItems = items.filter(item => item.product.id !== productId);
        
        set({ items: updatedItems });
        if (item) {
          toast.success(`${item.product.name} removido do carrinho`);
        }
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        const items = get().items;
        const updatedItems = items.map(item =>
          item.product.id === productId
            ? {
                ...item,
                quantity,
                totalPrice: quantity * item.unitPrice
              }
            : item
        );
        set({ items: updatedItems });
      },

      clearCart: () => {
        set({ items: [] });
        toast.success('Carrinho limpo');
      },

      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.totalPrice, 0);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },

      getTotal: () => {
        // For now, return subtotal. Shipping will be calculated in checkout
        return get().getSubtotal();
      },

      setShipping: (amount: number) => {
        // This can be implemented when shipping calculation is integrated
        console.log('Shipping amount:', amount);
      },
    }),
    {
      name: 'atabronze-cart',
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
