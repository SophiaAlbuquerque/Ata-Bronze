import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingCart } from 'lucide-react';

interface SimpleLayoutProps {
  children: ReactNode;
}

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Simples */}
      <header className="bg-dark text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              AtaBronze
            </Link>

            {/* Navegação */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <Link to="/produtos" className="hover:text-primary">Produtos</Link>
              <Link to="/contato" className="hover:text-primary">Contato</Link>
            </nav>

            {/* Ações */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hover:text-primary">
                <User className="w-6 h-6" />
              </Link>
              <Link to="/carrinho" className="hover:text-primary">
                <ShoppingCart className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer Simples */}
      <footer className="bg-footer text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">AtaBronze</h3>
            <p>Sua loja especializada em produtos de bronze</p>
          </div>
          <div className="text-sm text-gray-200">
            © 2024 AtaBronze. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleLayout;
