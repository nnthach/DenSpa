import type { Locale } from '@/lib/translations';

export type ShampooId =
  | 'grapefruit'
  | 'herbal'
  | 'collagen'
  | 'ginger'
  | 'rice-green-tea'
  | 'avocado-grapefruit'
  | 'perfume';

export type ShampooProduct = {
  id: ShampooId;
  name: string;
  volume: string;
  price: number;
  includes: { shampoo: number; conditioner: number };
};

export const SHAMPOO_PRODUCT_IDS: ShampooId[] = [
  'grapefruit',
  'herbal',
  'collagen',
  'ginger',
  'rice-green-tea',
  'avocado-grapefruit',
  'perfume',
];

export const SHAMPOO_IMAGES: Record<ShampooId, string> = {
  grapefruit: '/images/shampoos/buoi.jpeg',
  herbal: '/images/shampoos/thao_moc.jpeg',
  collagen: '/images/shampoos/colagen.jpeg',
  ginger: '/images/shampoos/gung.jpeg',
  'rice-green-tea': '/images/shampoos/tra_xanh.jpeg',
  'avocado-grapefruit': '/images/shampoos/bo_buoi.jpeg',
  perfume: '/images/shampoos/nuoc_hoa.jpeg',
};

export const SHAMPOO_PRODUCTS: Record<Locale, ShampooProduct[]> = {
  vi: [
    {
      id: 'grapefruit',
      name: 'Bưởi',
      volume: '2000ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'herbal',
      name: 'Thảo mộc',
      volume: '2000ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'collagen',
      name: 'Collagen',
      volume: '2000ml',
      price: 420000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'ginger',
      name: 'Gừng',
      volume: '2000ml',
      price: 500000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'rice-green-tea',
      name: 'Men gạo trà xanh trắc bá diệp',
      volume: '500ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'avocado-grapefruit',
      name: 'Bơ bưởi',
      volume: '500ml',
      price: 420000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'perfume',
      name: 'Nước hoa',
      volume: '2000ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
  ],
  en: [
    {
      id: 'grapefruit',
      name: 'Grapefruit',
      volume: '2000ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'herbal',
      name: 'Herbal',
      volume: '2000ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'collagen',
      name: 'Collagen',
      volume: '2000ml',
      price: 420000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'ginger',
      name: 'Ginger',
      volume: '2000ml',
      price: 500000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'rice-green-tea',
      name: 'Rice Ferment, Green Tea & Thuja Leaf',
      volume: '500ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'avocado-grapefruit',
      name: 'Avocado Grapefruit',
      volume: '500ml',
      price: 420000,
      includes: { shampoo: 1, conditioner: 1 },
    },
    {
      id: 'perfume',
      name: 'Perfume',
      volume: '2000ml',
      price: 450000,
      includes: { shampoo: 1, conditioner: 1 },
    },
  ],
};
