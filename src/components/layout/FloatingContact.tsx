import ScrollToTopButton from '@/app/home/_components/ScrollToTopButton';
import { MessengerIcon, ZaloIcon } from '@/components/ui/social-icons';
import { MESSENGER_URL, ZALO_URL } from '@/config/constants';

const ITEMS = [
  {
    href: MESSENGER_URL,
    label: 'Chat Messenger',
    Icon: MessengerIcon,
    className: 'bg-brown text-cream',
  },
  { href: ZALO_URL, label: 'Chat Zalo', Icon: ZaloIcon, className: 'bg-olive text-cream' },
];

export function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-6 z-40 flex flex-col gap-3 sm:right-6">
      <ScrollToTopButton />
      {ITEMS.map(({ href, label, Icon, className }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 ${className}`}
        >
          <Icon className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
}
