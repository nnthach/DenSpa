import { MessengerIcon, PhoneIcon, ZaloIcon } from '@/components/ui/social-icons';
import { MESSENGER_URL, PHONE_TEL, ZALO_URL } from '@/config/constants';

const ITEMS = [
  { href: ZALO_URL, label: 'Chat Zalo', Icon: ZaloIcon, className: 'bg-[#0068ff] text-white' },
  {
    href: MESSENGER_URL,
    label: 'Chat Messenger',
    Icon: MessengerIcon,
    className: 'bg-brown text-cream',
  },
  { href: PHONE_TEL, label: 'Gọi ngay', Icon: PhoneIcon, className: 'bg-olive text-cream' },
];

// Nút liên hệ nhanh, cố định theo viewport để luôn thao tác được khi cuộn trang.
export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3 sm:right-6">
      {ITEMS.map(({ href, label, Icon, className }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 ${className}`}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
