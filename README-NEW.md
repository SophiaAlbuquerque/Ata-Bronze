# 🏆 AtaBronze Frontend

Um e-commerce moderno e responsivo especializado em produtos de bronze e metais de alta qualidade, desenvolvido com React 18, TypeScript, TailwindCSS e integração completa com backend.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com tema bronze/metal
- 📱 **Totalmente Responsivo**: Mobile-first approach
- ⚡ **Performance Otimizada**: Bundle otimizado e lazy loading
- 🔐 **Autenticação Completa**: Login, registro e gestão de perfil
- 🛒 **E-commerce Completo**: Carrinho, checkout e pagamentos
- 📦 **Gestão de Produtos**: Catálogo com filtros e busca
- 🚚 **Integração de Frete**: Cálculo automático via Correios
- 💳 **Pagamentos Seguros**: Integração com Asaas
- 🔄 **Sincronização Bling**: Gestão automática de produtos

## 🛠️ Stack Tecnológica

- **React 18+** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS utilitário
- **React Router DOM v6** - Navegação e roteamento
- **Zustand** - Gerenciamento de estado global
- **Axios** - Cliente HTTP para API
- **React Hook Form** - Gestão de formulários
- **React Hot Toast** - Notificações
- **Lucide React** - Ícones modernos

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/SophiaAlbuquerque/Ata-Bronze.git
cd Ata-Bronze

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute o projeto
npm run dev
```

## ⚙️ Scripts Disponíveis

```bash
npm run dev         # Servidor de desenvolvimento
npm run build       # Build para produção
npm run preview     # Preview do build
npm run lint        # ESLint
npm run type-check  # Verificação TypeScript
```

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
│   ├── layout/    # Header, Footer, Layout
│   └── ui/        # Button, Input, Card, Modal
├── pages/         # Páginas da aplicação
├── store/         # Zustand stores
├── services/      # Serviços de API
├── types/         # Definições TypeScript
├── utils/         # Utilitários e helpers
└── styles/        # Estilos globais
```

## 🎯 Funcionalidades Implementadas

- ✅ Homepage com produtos em destaque
- ✅ Catálogo de produtos com filtros avançados
- ✅ Sistema de autenticação (Login/Registro)
- ✅ Carrinho de compras persistente
- ✅ Design responsivo e mobile-first
- ✅ Integração com API backend
- ✅ Gerenciamento de estado global
- ✅ Validação de formulários
- ✅ Sistema de notificações
- ✅ Componentes de UI reutilizáveis

## 🔌 API Integration

O frontend se conecta com:
- **Production**: `https://atabronzeback-production.up.railway.app/api`
- **Development**: `http://localhost:3001/api`

### Principais Endpoints:
- `POST /users/login` - Autenticação
- `POST /users/register` - Registro
- `GET /products` - Lista de produtos
- `POST /orders` - Criar pedido
- `POST /shipping/calculate` - Calcular frete

## 🎨 Design System

### Paleta de Cores (Bronze Theme)
```css
--primary: #CD7F32      /* Bronze principal */
--primary-dark: #B8860B /* Bronze escuro */
--secondary: #DAA520    /* Dourado */
--accent: #8B4513       /* Marrom bronze */
```

### Componentes UI
- **Button**: Variantes primary, secondary, outline, ghost
- **Input**: Com validação e estados de erro
- **Card**: Container flexível com hover effects
- **Modal**: Overlay responsivo
- **Loading**: Indicadores de carregamento

## 🗄️ Estado Global (Zustand)

### AuthStore
- Gerenciamento de autenticação
- Persistência de sessão
- Login/logout automático

### CartStore
- Carrinho de compras
- Cálculo de totais
- Persistência local

### ProductsStore
- Catálogo de produtos
- Filtros e busca
- Paginação

## 📱 Responsividade

O projeto utiliza abordagem mobile-first com breakpoints:
- **SM**: 640px (Mobile)
- **MD**: 768px (Tablet)
- **LG**: 1024px (Desktop)
- **XL**: 1280px (Large Desktop)

## 🚀 Deploy

### Build para Produção
```bash
npm run build
```

### Plataformas Recomendadas
- **Vercel** (Recomendado)
- **Netlify**
- **Railway**

## 📞 Suporte

- **Email**: contato@atabronze.com.br
- **Telefone**: (11) 9999-9999

---

<div align="center">
  <strong>🏆 AtaBronze - Qualidade em Bronze que você pode confiar</strong>
</div>
