import { useEffect } from 'react';
import { useProductsStore } from '../store/productsStore';
import Layout from '../components/layout/Layout';
import HeroCarousel from '../components/home/HeroCarousel';
import ProductCarousel from '../components/home/ProductCarousel';
import { Loading } from '../components/ui';

const Home = () => {
  const { products, loading, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 8);
  const newProducts = products.filter(product => {
    const createdDate = new Date(product.createdAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return createdDate > thirtyDaysAgo;
  }).slice(0, 8);
  const saleProducts = products.filter(product => product.originalPrice && product.originalPrice > product.price).slice(0, 8);

  if (loading && products.length === 0) {
    return (
      <Layout>
        <Loading fullScreen text="Carregando produtos..." />
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <ProductCarousel
            title="Produtos em Destaque"
            products={featuredProducts}
            className="mb-12"
          />
        )}

        {/* New Products */}
        {newProducts.length > 0 && (
          <ProductCarousel
            title="Novidades"
            products={newProducts}
            className="mb-12"
          />
        )}

        {/* Sale Products */}
        {saleProducts.length > 0 && (
          <ProductCarousel
            title="Ofertas Especiais"
            products={saleProducts}
            className="mb-12"
          />
        )}

        {/* All Products Fallback */}
        {featuredProducts.length === 0 && newProducts.length === 0 && saleProducts.length === 0 && products.length > 0 && (
          <ProductCarousel
            title="Nossos Produtos"
            products={products.slice(0, 8)}
            className="mb-12"
          />
        )}

        {/* Categories Section */}
        <section className="py-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Explore Nossas Categorias
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Decoração', image: '/category-decoracao.jpg', link: '/categoria/decoracao' },
              { name: 'Utensílios', image: '/category-utensilios.jpg', link: '/categoria/utensilios' },
              { name: 'Joias', image: '/category-joias.jpg', link: '/categoria/joias' },
              { name: 'Arte', image: '/category-arte.jpg', link: '/categoria/arte' },
            ].map((category) => (
              <a
                key={category.name}
                href={category.link}
                className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-square hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-lg text-center">
                    {category.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gray-50 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Por que escolher a Ata Bronze?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos produtos de bronze da mais alta qualidade com o melhor atendimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Qualidade Premium',
                description: 'Produtos feitos com bronze de alta qualidade e acabamento impecável',
                icon: '✨',
              },
              {
                title: 'Entrega Rápida',
                description: 'Frete grátis para todo o Brasil e entrega em até 7 dias úteis',
                icon: '🚚',
              },
              {
                title: 'Atendimento Especializado',
                description: 'Nossa equipe está sempre pronta para ajudar você',
                icon: '💬',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
