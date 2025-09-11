import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types/product';
import ProductCard from '../product/ProductCard';

interface ProductCarouselProps {
  title: string;
  products: Product[];
  className?: string;
}

const ProductCarousel = ({ title, products, className = '' }: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
    large: 5,
  };

  const getItemsPerView = () => {
    if (typeof window === 'undefined') return itemsPerView.desktop;
    
    if (window.innerWidth < 640) return itemsPerView.mobile;
    if (window.innerWidth < 768) return itemsPerView.tablet;
    if (window.innerWidth < 1024) return itemsPerView.desktop;
    return itemsPerView.large;
  };

  const maxIndex = Math.max(0, products.length - getItemsPerView());

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  if (!products.length) {
    return null;
  }

  return (
    <div className={`py-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        
        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            className={`p-2 rounded-full border-2 transition-all duration-200 ${
              canGoPrevious
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className={`p-2 rounded-full border-2 transition-all duration-200 ${
              canGoNext
                ? 'border-primary text-primary hover:bg-primary hover:text-white'
                : 'border-gray-300 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / getItemsPerView())}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0"
              style={{
                width: `calc(${100 / getItemsPerView()}% - ${(getItemsPerView() - 1) * 1}rem / ${getItemsPerView()})`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {maxIndex > 0 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? 'bg-primary w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
