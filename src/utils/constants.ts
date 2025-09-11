// URLs da API
export const API_URLS = {
  PRODUCTION: 'https://atabronzeback-production.up.railway.app/api',
  DEVELOPMENT: 'http://localhost:3001/api',
};

// Configurações de paginação
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// Configurações de upload
export const UPLOAD = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
};

// Configurações de busca
export const SEARCH = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
};

// Configurações de cache
export const CACHE = {
  PRODUCTS_TTL: 5 * 60 * 1000, // 5 minutos
  CATEGORIES_TTL: 30 * 60 * 1000, // 30 minutos
};

// Mensagens de erro padrão
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erro de conexão. Verifique sua internet.',
  UNAUTHORIZED: 'Acesso não autorizado. Faça login novamente.',
  FORBIDDEN: 'Você não tem permissão para realizar esta ação.',
  NOT_FOUND: 'Recurso não encontrado.',
  SERVER_ERROR: 'Erro interno do servidor. Tente novamente mais tarde.',
  VALIDATION_ERROR: 'Dados inválidos. Verifique os campos.',
};

// Mensagens de sucesso padrão
export const SUCCESS_MESSAGES = {
  LOGIN: 'Login realizado com sucesso!',
  REGISTER: 'Conta criada com sucesso!',
  UPDATE_PROFILE: 'Perfil atualizado com sucesso!',
  ADD_TO_CART: 'Produto adicionado ao carrinho!',
  REMOVE_FROM_CART: 'Produto removido do carrinho!',
  ORDER_CREATED: 'Pedido criado com sucesso!',
  PAYMENT_SUCCESS: 'Pagamento processado com sucesso!',
};

// Status de pedidos
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
  RETURNED: 'returned',
};

// Status de pagamentos
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  APPROVED: 'approved',
  DECLINED: 'declined',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
};

// Métodos de pagamento
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  DEBIT_CARD: 'debit_card',
  PIX: 'pix',
  BOLETO: 'boleto',
  BANK_TRANSFER: 'bank_transfer',
};

// Breakpoints de tela
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Configurações de SEO
export const SEO = {
  DEFAULT_TITLE: 'AtaBronze - Produtos de Bronze e Metais de Qualidade',
  DEFAULT_DESCRIPTION: 'Descubra nossa coleção exclusiva de produtos em bronze e metais de alta qualidade. Tradição e excelência em cada peça.',
  DEFAULT_KEYWORDS: 'bronze, metais, decoração, utilitários, arte, qualidade',
};
