import { create } from 'zustand';
import { ProductsStore, ProductFilters } from '../types/product';
import { productsService } from '../services/productsServiceMock';
import toast from 'react-hot-toast';

export const useProductsStore = create<ProductsStore>((set, get) => ({
  products: [],
  featuredProducts: [],
  categories: [],
  loading: false,
  filters: {
    page: 1,
    limit: 12,
    sortBy: 'createdAt',
    sortOrder: 'desc',
  },
  pagination: {
    page: 1,
    totalPages: 1,
    total: 0,
  },

  fetchProducts: async (filters?: ProductFilters) => {
    try {
      set({ loading: true });
      const currentFilters = { ...get().filters, ...filters };
      const response = await productsService.getProducts(currentFilters);
      
      set({
        products: response.products,
        pagination: {
          page: response.page,
          totalPages: response.totalPages,
          total: response.total,
        },
        filters: currentFilters,
        loading: false,
      });
    } catch (error: any) {
      set({ loading: false });
      const message = error.response?.data?.message || 'Erro ao carregar produtos';
      toast.error(message);
      throw error;
    }
  },

  fetchFeaturedProducts: async () => {
    try {
      const products = await productsService.getFeaturedProducts();
      set({ featuredProducts: products });
    } catch (error: any) {
      const message = error.response?.data?.message || 'Erro ao carregar produtos em destaque';
      toast.error(message);
    }
  },

  fetchProductById: async (id: string) => {
    try {
      const product = await productsService.getProductById(id);
      return product;
    } catch (error: any) {
      const message = error.response?.data?.message || 'Produto não encontrado';
      toast.error(message);
      throw error;
    }
  },

  searchProducts: async (query: string) => {
    try {
      set({ loading: true });
      const filters = { ...get().filters, search: query, page: 1 };
      await get().fetchProducts(filters);
    } catch (error) {
      set({ loading: false });
    }
  },

  setFilters: (newFilters: Partial<ProductFilters>) => {
    const currentFilters = get().filters;
    const updatedFilters = { ...currentFilters, ...newFilters };
    
    // Reset page when changing filters (except for pagination)
    if (!newFilters.page) {
      updatedFilters.page = 1;
    }
    
    set({ filters: updatedFilters });
    get().fetchProducts(updatedFilters);
  },

  clearFilters: () => {
    const defaultFilters: ProductFilters = {
      page: 1,
      limit: 12,
      sortBy: 'createdAt',
      sortOrder: 'desc',
    };
    set({ filters: defaultFilters });
    get().fetchProducts(defaultFilters);
  },

  syncWithBling: async () => {
    try {
      set({ loading: true });
      await productsService.syncWithBling();
      toast.success('Sincronização com Bling realizada com sucesso!');
      await get().fetchProducts();
    } catch (error: any) {
      set({ loading: false });
      const message = error.response?.data?.message || 'Erro ao sincronizar com Bling';
      toast.error(message);
      throw error;
    }
  },
}));
