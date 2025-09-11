import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../../types/product';
import { useCartStore } from '../../store/cartStore';
import Button from '../ui/Button';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem(product, 1);
    
    toast.success('Produto adicionado ao carrinho!');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <Link to={`/produto/${product.id}`} className="block">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-discount text-white px-2 py-1 rounded text-xs font-semibold">
              -{discountPercentage}%
            </div>
          )}
          
          {/* Quick Actions */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-col space-y-1">
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                <Eye className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Out of Stock Overlay */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Esgotado</span>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {/* Price */}
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
          
          {/* Free Shipping Badge */}
          {product.freeShipping && (
            <div className="mb-3">
              <span className="inline-block bg-freeShipping-bg text-freeShipping-text text-xs px-2 py-1 rounded">
                Frete grátis
              </span>
            </div>
          )}
          
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating!) ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">
                ({product.reviewCount || 0})
              </span>
            </div>
          )}
        </div>
      </Link>
      
      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          fullWidth
          className="group-hover:bg-primary-light"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.stock === 0 ? 'Esgotado' : 'Adicionar'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
