import SimpleLayout from '../components/layout/SimpleLayout';

const Home = () => {
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Bem-vindo à Ata Bronze
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Sua loja especializada em produtos de bronze de alta qualidade
        </p>
        
        {/* Hero Section Simples */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white p-12 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Coleção Premium</h2>
            <p className="text-xl mb-6">Descubra peças únicas em bronze</p>
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Ver Produtos
            </button>
          </div>
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { name: 'Decoração', icon: '🏺' },
            { name: 'Utensílios', icon: '🍽️' },
            { name: 'Joias', icon: '💍' },
            { name: 'Arte', icon: '🎨' },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Qualidade Premium',
              description: 'Produtos de bronze de alta qualidade',
              icon: '✨',
            },
            {
              title: 'Entrega Rápida',
              description: 'Frete grátis para todo o Brasil',
              icon: '🚚',
            },
            {
              title: 'Atendimento',
              description: 'Suporte especializado',
              icon: '💬',
            },
          ].map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Home;
