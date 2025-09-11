import { Product } from './product';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
}

export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  loading: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
  getTotal: () => number;
  setShipping: (amount: number) => void;
}

export interface ShippingOption {
  service: string;
  name: string;
  price: number;
  deliveryTime: string;
  company: 'correios' | 'melhor-envio';
}

export interface ShippingCalculation {
  zipCode: string;
  options: ShippingOption[];
}
