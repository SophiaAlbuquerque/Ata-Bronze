import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Coleção Bronze Premium',
    subtitle: 'Descubra peças únicas em bronze de alta qualidade',
    image: '/hero-bronze-1.jpg',
    buttonText: 'Ver Coleção',
    buttonLink: '/produtos',
    gradient: 'from-primary to-primary-light',
  },
  {
    id: 2,
    title: 'Arte em Bronze Artesanal',
    subtitle: 'Peças exclusivas feitas pelos melhores artesãos',
    image: '/hero-bronze-2.jpg',
    buttonText: 'Explorar Arte',
    buttonLink: '/categoria/arte',
    gradient: 'from-primary-dark to-primary-darker',
  },
  {
    id: 3,
    title: 'Decoração Sofisticada',
    subtitle: 'Transforme seu ambiente com elegância',
    image: '/hero-bronze-3.jpg',
    buttonText: 'Ver Decoração',
    buttonLink: '/categoria/decoracao',
    gradient: 'from-bronze to-gold',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="relative h-96 lg:h-[400px] overflow-hidden">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full flex-shrink-0 relative bg-gradient-to-r ${slide.gradient}`}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="text-white">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg lg:text-xl mb-6 text-gray-100">
                      {slide.subtitle}
                    </p>
                    <Link to={slide.buttonLink}>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div className="hidden lg:block">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-72 object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
