import { Leaf, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

import { buttonVariants } from '@/components/ui/button';

const TRUST_BADGES = [
  { Icon: Users, title: 'Chỉ 1 khách/lần', desc: 'Riêng tư tuyệt đối' },
  { Icon: Sparkles, title: 'Liệu trình bài bản', desc: 'Kỹ thuật chuyên sâu' },
  { Icon: Leaf, title: 'Thảo mộc tự nhiên', desc: 'An toàn, lành tính' },
];

export function HeroSection() {
  return (
    <section id="trang-chu" className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 bg-red-200">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-olive font-serif text-lg italic">Thư giãn – Chăm sóc – Phục hồi</p>
          <h1 className="text-brown mt-2 font-serif text-5xl font-bold tracking-wide sm:text-6xl">
            DEN SPA
          </h1>
          <p className="text-brown/70 mt-5 max-w-md text-base leading-relaxed">
            Một không gian riêng tư, nơi bạn có thể dành một giờ để chăm sóc chính mình.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#lien-he" className={buttonVariants('primary')}>
              Đặt lịch ngay
            </a>
            <a href="#dich-vu" className={buttonVariants('outline')}>
              Xem dịch vụ
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TRUST_BADGES.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon className="text-olive mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.5} />
                <div>
                  <dt className="text-brown text-sm font-semibold">{title}</dt>
                  <dd className="text-brown/60 text-xs">{desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/banner.webp"
            alt="Trị liệu thư giãn tại Den Spa"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
