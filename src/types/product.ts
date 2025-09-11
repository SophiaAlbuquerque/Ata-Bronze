export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  brand?: string;
  material: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  images: string[];
  mainImage: string;
  image?: string; // Backward compatibility
  rating?: number; // Product rating (0-5)
  reviewCount?: number; // Number of reviews
  stock: number;
  isActive: boolean;
  isFeatured: boolean;
  discount?: number;
  freeShipping: boolean;
  tags: string[];
  specifications: Record<string, string>;
  blingId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  material?: string;
  brand?: string;
  inStock?: boolean;
  freeShipping?: boolean;
  sortBy?: 'name' | 'price' | 'createdAt' | 'popularity';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface ProductsStore {
  products: Product[];
  featuredProducts: Product[];
  categories: string[];
  loading: boolean;
  filters: ProductFilters;
  pagination: {
    page: number;
    totalPages: number;
    total: number;
  };
  fetchProducts: (filters?: ProductFilters) => Promise<void>;
  fetchFeaturedProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<Product>;
  searchProducts: (query: string) => Promise<void>;
  setFilters: (filters: Partial<ProductFilters>) => void;
  clearFilters: () => void;
  syncWithBling: () => Promise<void>;
}
