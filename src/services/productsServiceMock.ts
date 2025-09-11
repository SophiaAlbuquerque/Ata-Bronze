import { Product, ProductFilters, ProductsResponse } from '../types/product';
import { mockProducts, mockCategories } from '../data/mockProducts';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const productsService = {
  async getProducts(filters?: ProductFilters): Promise<ProductsResponse> {
    await delay(300); // Simulate network delay
    
    let filteredProducts = [...mockProducts];
    
    if (filters) {
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
      }
      
      if (filters.category) {
        filteredProducts = filteredProducts.filter(product =>
          product.category === filters.category
        );
      }
      
      if (filters.minPrice) {
        filteredProducts = filteredProducts.filter(product =>
          product.price >= filters.minPrice!
        );
      }
      
      if (filters.maxPrice) {
        filteredProducts = filteredProducts.filter(product =>
          product.price <= filters.maxPrice!
        );
      }
      
      if (filters.inStock) {
        filteredProducts = filteredProducts.filter(product =>
          product.stock > 0
        );
      }
      
      if (filters.freeShipping) {
        filteredProducts = filteredProducts.filter(product =>
          product.freeShipping
        );
      }
    }
    
    // Apply sorting
    if (filters?.sortBy) {
      filteredProducts.sort((a, b) => {
        const order = filters.sortOrder === 'desc' ? -1 : 1;
        
        switch (filters.sortBy) {
          case 'name':
            return order * a.name.localeCompare(b.name);
          case 'price':
            return order * (a.price - b.price);
          case 'createdAt':
            return order * (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
          default:
            return 0;
        }
      });
    }
    
    // Apply pagination
    const page = filters?.page || 1;
    const limit = filters?.limit || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    const totalPages = Math.ceil(filteredProducts.length / limit);
    
    return {
      products: paginatedProducts,
      total: filteredProducts.length,
      page,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    };
  },

  async getProductById(id: string): Promise<Product> {
    await delay(200);
    const product = mockProducts.find(p => p.id === id);
    if (!product) {
      throw new Error('Produto não encontrado');
    }
    return product;
  },

  async getFeaturedProducts(): Promise<Product[]> {
    await delay(200);
    return mockProducts.filter(product => product.isFeatured);
  },

  async getCategories(): Promise<string[]> {
    await delay(100);
    return mockCategories;
  },

  async searchProducts(query: string): Promise<Product[]> {
    await delay(200);
    const searchTerm = query.toLowerCase();
    return mockProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  },

  async syncWithBling(): Promise<void> {
    await delay(1000);
    // Mock implementation
  },

  async getRelatedProducts(productId: string): Promise<Product[]> {
    await delay(200);
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return [];
    
    // Return products from the same category
    return mockProducts
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, 4);
  },
};
