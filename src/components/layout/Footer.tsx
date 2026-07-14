import { Clock, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

import { FacebookIcon, MessengerIcon, TikTokIcon, ZaloIcon } from '@/components/ui/social-icons';
import {
  ADDRESS,
  FACEBOOK_URL,
  MESSENGER_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
  SITE_TAGLINE,
  TIKTOK_URL,
  WORKING_HOURS,
  ZALO_URL,
} from '@/config/constants';

const SOCIAL_LINKS = [
  { href: FACEBOOK_URL, label: 'Facebook', Icon: FacebookIcon },
  { href: ZALO_URL, label: 'Zalo', Icon: ZaloIcon },
  { href: MESSENGER_URL, label: 'Messenger', Icon: MessengerIcon },
  { href: TIKTOK_URL, label: 'TikTok', Icon: TikTokIcon },
];

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-olive text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/images/logo.jpg"
                alt={SITE_NAME}
                fill
                sizes="44px"
                className="scale-[1.9] object-cover object-[50%_28%]"
              />
            </span>
            <span className="font-serif text-lg font-semibold tracking-wide">
              {SITE_NAME.toUpperCase()}
            </span>
          </div>
          <p className="text-cream/70 mt-4 text-sm">{SITE_TAGLINE}</p>
          <div className="mt-5 flex gap-3">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:bg-cream/20 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Thông tin liên hệ</h3>
          <ul className="text-cream/80 mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{ADDRESS}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={PHONE_TEL} className="hover:text-cream">
                Zalo / Gọi ngay: {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Giờ hoạt động</h3>
          <ul className="text-cream/80 mt-4 space-y-3 text-sm">
            {WORKING_HOURS.map(({ days, hours }) => (
              <li key={days} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {days}: {hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Bản đồ</h3>
          <div className="border-cream/20 mt-4 h-40 overflow-hidden rounded-lg border">
            <iframe
              title="Bản đồ Den Spa"
              src={MAP_SRC}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-cream/10 border-t py-5">
        <p className="text-cream/60 text-center text-xs">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
