import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCartStore } from '../../store/cartStore';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const { items } = useCartStore();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Categorias', href: '/categorias' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="bg-dark text-white font-sans">
      {/* Top Bar */}
      <div className="px-4 py-3 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/logo.svg" 
              alt="Ata Bronze" 
              className="h-16 lg:h-90 w-auto"
            />
          </Link>

          {/* Search Bar - Prominent on desktop */}
          <form 
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-3xl mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produtos em bronze..."
                className="w-full h-14 pl-6 pr-16 text-gray-900 bg-white rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-12 px-6 bg-primary text-white rounded-full hover:bg-secondary transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* User Icon */}
            <div className="hidden md:flex">
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Olá, {user.name}</span>
                  <button
                    onClick={logout}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <User className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <User className="w-6 h-6" />
                </Link>
              )}
            </div>

            {/* Cart Icon */}
            <Link
              to="/carrinho"
              className="relative p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <form 
          onSubmit={handleSearch}
          className="md:hidden mt-4"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos em bronze..."
              className="w-full h-12 pl-4 pr-14 text-gray-900 bg-white rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 h-10 px-4 bg-primary text-white rounded-full hover:bg-secondary transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Bar */}
      <nav className={`border-t border-gray-600 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-8 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 md:py-0 text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile User Section */}
            {user ? (
              <div className="md:hidden border-t border-gray-600 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span>Olá, {user.name}</span>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="text-primary hover:text-primary-light"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="md:hidden block py-2 text-primary hover:text-primary-light border-t border-gray-600 pt-4 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar / Cadastrar
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
