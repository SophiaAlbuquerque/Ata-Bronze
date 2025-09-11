import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Vaso Decorativo Bronze Clássico',
    description: 'Lindo vaso decorativo feito em bronze com acabamento premium. Ideal para decoração de ambientes sofisticados.',
    price: 299.90,
    originalPrice: 399.90,
    category: 'decoracao',
    subcategory: 'vasos',
    brand: 'Ata Bronze',
    material: 'Bronze',
    weight: 1.5,
    dimensions: {
      length: 20,
      width: 20,
      height: 30
    },
    images: [
      '/images/vaso-bronze-1.jpg',
      '/images/vaso-bronze-2.jpg',
      '/images/vaso-bronze-3.jpg'
    ],
    mainImage: '/images/vaso-bronze-1.jpg',
    rating: 4.8,
    reviewCount: 24,
    stock: 15,
    isActive: true,
    isFeatured: true,
    discount: 25,
    freeShipping: true,
    tags: ['decoracao', 'bronze', 'vaso', 'classico'],
    specifications: {
      'Material': 'Bronze fundido',
      'Acabamento': 'Polido',
      'Peso': '1.5kg',
      'Altura': '30cm'
    },
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Conjunto de Utensílios de Cozinha Bronze',
    description: 'Set completo com 5 utensílios de bronze para cozinha. Resistentes e elegantes.',
    price: 189.90,
    category: 'utensilios',
    subcategory: 'cozinha',
    brand: 'Ata Bronze',
    material: 'Bronze',
    weight: 2.0,
    images: [
      '/images/utensilios-bronze-1.jpg',
      '/images/utensilios-bronze-2.jpg'
    ],
    mainImage: '/images/utensilios-bronze-1.jpg',
    rating: 4.5,
    reviewCount: 18,
    stock: 8,
    isActive: true,
    isFeatured: true,
    freeShipping: true,
    tags: ['utensilios', 'cozinha', 'bronze', 'conjunto'],
    specifications: {
      'Material': 'Bronze fundido',
      'Itens': '5 peças',
      'Peso total': '2.0kg'
    },
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Escultura Bronze Abstrata',
    description: 'Peça artística em bronze com design moderno e abstrato. Perfeita para decoração.',
    price: 599.90,
    originalPrice: 799.90,
    category: 'arte',
    subcategory: 'esculturas',
    brand: 'Ata Bronze',
    material: 'Bronze',
    weight: 3.5,
    dimensions: {
      length: 15,
      width: 15,
      height: 40
    },
    images: [
      '/images/escultura-bronze-1.jpg',
      '/images/escultura-bronze-2.jpg',
      '/images/escultura-bronze-3.jpg'
    ],
    mainImage: '/images/escultura-bronze-1.jpg',
    rating: 4.9,
    reviewCount: 12,
    stock: 5,
    isActive: true,
    isFeatured: true,
    discount: 25,
    freeShipping: true,
    tags: ['arte', 'escultura', 'bronze', 'abstrato', 'moderno'],
    specifications: {
      'Material': 'Bronze patinado',
      'Estilo': 'Abstrato moderno',
      'Peso': '3.5kg',
      'Altura': '40cm'
    },
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Brincos Bronze Artesanais',
    description: 'Elegantes brincos feitos à mão em bronze com detalhes únicos.',
    price: 89.90,
    category: 'joias',
    subcategory: 'brincos',
    brand: 'Ata Bronze',
    material: 'Bronze',
    weight: 0.1,
    images: [
      '/images/brincos-bronze-1.jpg',
      '/images/brincos-bronze-2.jpg'
    ],
    mainImage: '/images/brincos-bronze-1.jpg',
    rating: 4.7,
    reviewCount: 35,
    stock: 20,
    isActive: true,
    isFeatured: false,
    freeShipping: false,
    tags: ['joias', 'brincos', 'bronze', 'artesanal'],
    specifications: {
      'Material': 'Bronze hipoalergênico',
      'Peso': '10g',
      'Tamanho': 'Médio'
    },
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Luminária Bronze Vintage',
    description: 'Luminária de mesa em bronze com design vintage. Inclui lâmpada LED.',
    price: 249.90,
    category: 'decoracao',
    subcategory: 'iluminacao',
    brand: 'Ata Bronze',
    material: 'Bronze',
    weight: 2.2,
    dimensions: {
      length: 25,
      width: 25,
      height: 35
    },
    images: [
      '/images/luminaria-bronze-1.jpg',
      '/images/luminaria-bronze-2.jpg'
    ],
    mainImage: '/images/luminaria-bronze-1.jpg',
    rating: 4.6,
    reviewCount: 22,
    stock: 12,
    isActive: true,
    isFeatured: true,
    freeShipping: true,
    tags: ['decoracao', 'luminaria', 'bronze', 'vintage'],
    specifications: {
      'Material': 'Bronze envelhecido',
      'Tensão': 'Bivolt',
      'Lâmpada': 'LED inclusa',
      'Altura': '35cm'
    },
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Porta-Joias Bronze Ornamentado',
    description: 'Elegante porta-joias em bronze com compartimentos organizados e espelho.',
    price: 159.90,
    category: 'decoracao',
    subcategory: 'organizadores',
    brand: 'Ata Bronze',
    material: 'Bronze',
    weight: 1.0,
    images: [
      '/images/porta-joias-bronze-1.jpg'
    ],
    mainImage: '/images/porta-joias-bronze-1.jpg',
    rating: 4.4,
    reviewCount: 16,
    stock: 18,
    isActive: true,
    isFeatured: false,
    freeShipping: false,
    tags: ['decoracao', 'organizador', 'bronze', 'joias'],
    specifications: {
      'Material': 'Bronze polido',
      'Compartimentos': '6 divisões',
      'Espelho': 'Incluído',
      'Peso': '1.0kg'
    },
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const mockCategories = [
  'decoracao',
  'utensilios',
  'arte',
  'joias'
];
