import type { Locale } from '@/lib/translations';

export type ComboId = 'relax' | 'wellness' | 'fullCare' | 'vip';

export type ComboItem = { name: string; duration: string };

export type ComboContent = {
  title: string;
  subtitle: string;
  items: ComboItem[];
  price: string;
  isVip?: boolean;
};

export const COMBO_IDS: ComboId[] = ['relax', 'wellness', 'fullCare', 'vip'];

export const COMBO_IMAGES: Record<ComboId, string> = {
  relax: '/images/combo/combo_one.png',
  wellness: '/images/combo/combo_two.png',
  fullCare: '/images/combo/combo_three.png',
  vip: '/images/combo/combo_vip.png',
};

export const COMBOS_DATA: Record<Locale, Record<ComboId, ComboContent>> = {
  vi: {
    relax: {
      title: 'Gói 1',
      subtitle: 'Thư giãn nhẹ nhàng – Xua tan mệt mỏi',
      items: [
        { name: 'Gội dưỡng sinh', duration: "60'" },
        { name: 'Massage chân', duration: "60'" },
      ],
      price: '298K',
    },
    wellness: {
      title: 'Gói 2',
      subtitle: 'Phục hồi - Thư giản',
      items: [
        { name: 'Gội dưỡng sinh', duration: "60'" },
        { name: 'Massage cổ vai gáy', duration: "60'" },
      ],
      price: '299K',
    },
    fullCare: {
      title: 'Gói 3',
      subtitle: 'Chăm sóc toàn diện – Cơ thể nhẹ nhàng',
      items: [
        { name: 'Gội dưỡng sinh', duration: "60'" },
        { name: 'Massage body', duration: "60'" },
      ],
      price: '319K',
    },
    vip: {
      title: 'Gói VIP',
      subtitle: 'Trải nghiệm đẳng cấp',
      items: [
        { name: 'Gội dưỡng sinh', duration: "60'" },
        { name: 'Massage body', duration: "120'" },
      ],
      price: '479K',
      isVip: true,
    },
  },
  en: {
    relax: {
      title: 'Combo 1',
      subtitle: 'Gentle relaxation – Melt away fatigue',
      items: [
        { name: 'Therapeutic hair wash', duration: "60'" },
        { name: 'Neck & shoulder massage', duration: "60'" },
      ],
      price: '299K',
    },
    wellness: {
      title: 'Combo 2',
      subtitle: 'Restore - Relax',
      items: [
        { name: 'Therapeutic hair wash', duration: "60'" },
        { name: 'Body massage', duration: "60'" },
      ],
      price: '329K',
    },
    fullCare: {
      title: 'Combo 3',
      subtitle: 'Complete care – Total body relief',
      items: [
        { name: 'Therapeutic hair wash', duration: "60'" },
        { name: 'Body massage', duration: "60'" },
      ],
      price: '399K',
    },
    vip: {
      title: 'VIP Combo',
      subtitle: 'A premium experience – Total relaxation',
      items: [
        { name: 'Therapeutic hair wash', duration: "60'" },
        { name: 'Body massage', duration: "120'" },
      ],
      price: '479K',
      isVip: true,
    },
  },
};
