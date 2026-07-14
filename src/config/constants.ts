// Hằng số dùng chung toàn app. Không hardcode rải rác trong code.
export const SITE_NAME = 'Den Spa';
export const SITE_TAGLINE = 'Gội đầu dưỡng sinh - Massage thư giản';

export const PHONE_DISPLAY = '0905 650 414';
export const PHONE_TEL = 'tel:0905650414';
export const ZALO_URL = 'https://zalo.me/0905650414';
export const MESSENGER_URL = '#';
export const FACEBOOK_URL = '#';
export const TIKTOK_URL = '#';

export const ADDRESS = 'Hồng An Apartment, Huỳnh Lâm, Ngũ Hành Sơn, Đà Nẵng';
export const WORKING_HOURS = [
  { id: 'weekday', hours: '09:00 – 22:00' },
  { id: 'sunday', hours: '08:30 – 20:00' },
] as const;

export const NAV_LINKS = [
  { id: 'home', href: '#trang-chu' },
  { id: 'services', href: '#dich-vu' },
  { id: 'pricing', href: '#dich-vu' },
  { id: 'reviews', href: '#review' },
  { id: 'about', href: '#ve-chung-toi' },
  { id: 'contact', href: '#lien-he' },
] as const;
