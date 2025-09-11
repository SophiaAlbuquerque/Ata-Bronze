import { Link } from 'react-router-dom';
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer text-white">
      {/* Top Section */}
      <div className="px-4 py-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Store Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ata Bronze</h4>
            <p className="text-sm mb-4 text-gray-200">
              Sua loja especializada em produtos de bronze de alta qualidade.
            </p>
            <div className="space-y-2 text-sm text-gray-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rua das Flores, 123 - Centro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@atabronze.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/categorias" className="hover:text-white transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="/ofertas" className="hover:text-white transition-colors">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/ajuda" className="hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/devolucoes" className="hover:text-white transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link to="/frete" className="hover:text-white transition-colors">
                  Frete e Entrega
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link to="/categoria/decoracao" className="hover:text-white transition-colors">
                  Decoração
                </Link>
              </li>
              <li>
                <Link to="/categoria/utensílios" className="hover:text-white transition-colors">
                  Utensílios
                </Link>
              </li>
              <li>
                <Link to="/categoria/joias" className="hover:text-white transition-colors">
                  Joias
                </Link>
              </li>
              <li>
                <Link to="/categoria/arte" className="hover:text-white transition-colors">
                  Arte e Artesanato
                </Link>
              </li>
              <li>
                <Link to="/categoria/presentes" className="hover:text-white transition-colors">
                  Presentes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white">
        <div className="px-4 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Social Media */}
            <div className="mb-4 md:mb-0">
              <h4 className="text-gray-900 font-semibold mb-3">Junte-se a nós!</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Ata Bronze. Todos os direitos reservados.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Desenvolvido com ❤️ para você
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
