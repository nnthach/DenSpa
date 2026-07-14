// Hằng số dùng chung toàn app. Không hardcode rải rác trong code.
export const SITE_NAME = 'Den Spa';
export const SITE_TAGLINE = 'Thư giãn – Chăm sóc – Phục hồi';

export const PHONE_DISPLAY = '0905 650 414';
export const PHONE_TEL = 'tel:0905650414';
export const ZALO_URL = 'https://zalo.me/0905650414';
export const MESSENGER_URL = '#';
export const FACEBOOK_URL = '#';
export const TIKTOK_URL = '#';

export const ADDRESS = 'Hồng An Apartment, Huỳnh Lâm, Ngũ Hành Sơn, Đà Nẵng';
export const WORKING_HOURS = [
  { days: 'Thứ 2 – Thứ 7', hours: '09:00 – 22:00' },
  { days: 'Chủ nhật', hours: '08:30 – 20:00' },
] as const;

export const NAV_LINKS = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Dịch vụ', href: '#dich-vu' },
  { label: 'Bảng giá', href: '#dich-vu' },
  { label: 'Review', href: '#review' },
  { label: 'Về chúng tôi', href: '#ve-chung-toi' },
  { label: 'Liên hệ', href: '#lien-he' },
] as const;
