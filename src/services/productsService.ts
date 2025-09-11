import api from './api';
import { Product, ProductFilters, ProductsResponse } from '../types/product';

export const productsService = {
  async getProducts(filters?: ProductFilters): Promise<ProductsResponse> {
    const params = new URLSearchParams();
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, value.toString());
        }
      });
    }
    
    const response = await api.get(`/products?${params.toString()}`);
    return response.data;
  },

  async getProductById(id: string): Promise<Product> {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  async getFeaturedProducts(): Promise<Product[]> {
    const response = await api.get('/products?isFeatured=true&limit=8');
    return response.data.products;
  },

  async getCategories(): Promise<string[]> {
    const response = await api.get('/products/categories');
    return response.data;
  },

  async searchProducts(query: string): Promise<Product[]> {
    const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
    return response.data.products;
  },

  async syncWithBling(): Promise<void> {
    await api.post('/products/sync-bling');
  },

  async getRelatedProducts(productId: string): Promise<Product[]> {
    const response = await api.get(`/products/${productId}/related`);
    return response.data;
  },
};
