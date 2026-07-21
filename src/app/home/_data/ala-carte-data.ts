import type { Locale } from '@/lib/translations';

export type AlaCarteItem = { id: string; name: string; price: string; image: string };

export const ALA_CARTE_ITEMS: Record<Locale, AlaCarteItem[]> = {
  vi: [
    {
      id: 'faceScrub',
      name: 'Tẩy tế bào chết da mặt',
      price: '+30K',
      image: '/images/sub-services/face-exfoliation.png',
    },
    {
      id: 'scalpScrub',
      name: 'Tẩy tế bào chết da đầu',
      price: '+30K',
      image: '/images/sub-services/scalp-exfoliation.png',
    },
    {
      id: 'footSoak',
      name: 'Ngâm chân thảo mộc',
      price: '+30K',
      image: '/images/sub-services/foot-bath.png',
    },
    {
      id: 'cupping',
      name: 'Giác hơi',
      price: '+50K',
      image: '/images/sub-services/cupping.png',
    },
    {
      id: 'herbalMask',
      name: 'Mặt nạ bột thiên nhiên',
      price: '+20K',
      image: '/images/sub-services/natural-mask.png',
    },
    {
      id: 'sheetMask',
      name: 'Mặt nạ giấy',
      price: '+20K',
      image: '/images/sub-services/facial-mask.png',
    },
    {
      id: 'faceWash',
      name: 'Rửa mặt',
      price: '+10K',
      image: '/images/sub-services/wash-face.png',
    },
    {
      id: 'faceMassage',
      name: 'Massage mặt',
      price: '+30K',
      image: '/images/sub-services/facial-massage.png',
    },
  ],
  en: [
    {
      id: 'faceScrub',
      name: 'Face exfoliation',
      price: '+30K',
      image: '/images/sub-services/face-exfoliation.png',
    },
    {
      id: 'scalpScrub',
      name: 'Scalp exfoliation',
      price: '+30K',
      image: '/images/sub-services/scalp-exfoliation.png',
    },
    {
      id: 'footSoak',
      name: 'Herbal foot soak',
      price: '+30K',
      image: '/images/sub-services/foot-bath.png',
    },
    {
      id: 'cupping',
      name: 'Cupping therapy',
      price: '+50K',
      image: '/images/sub-services/cupping.png',
    },
    {
      id: 'herbalMask',
      name: 'Natural herbal mask',
      price: '+20K',
      image: '/images/sub-services/natural-mask.png',
    },
    {
      id: 'sheetMask',
      name: 'Sheet mask',
      price: '+20K',
      image: '/images/sub-services/facial-mask.png',
    },
    {
      id: 'faceWash',
      name: 'Face cleansing',
      price: '+10K',
      image: '/images/sub-services/wash-face.png',
    },
    {
      id: 'faceMassage',
      name: 'Face massage',
      price: '+30K',
      image: '/images/sub-services/facial-massage.png',
    },
  ],
};
