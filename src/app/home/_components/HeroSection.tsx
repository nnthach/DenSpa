import { Leaf, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const TRUST_BADGES = [
  { Icon: Users, title: 'Chỉ 1 khách/lần', desc: 'Riêng tư tuyệt đối' },
  { Icon: Sparkles, title: 'Liệu trình bài bản', desc: 'Kỹ thuật chuyên sâu' },
  { Icon: Leaf, title: 'Thảo mộc tự nhiên', desc: 'An toàn, lành tính' },
];

export function HeroSection() {
  return (
    <section id="trang-chu" className="relative h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid h-full w-full grid-cols-10">
        <div className="bg-cream col-span-4 h-full" />

        <div className="relative col-span-6 h-full w-full">
          <Image
            src="/images/banner.webp"
            alt="Trị liệu thư giãn tại Den Spa"
            fill
            priority
            sizes="60vw"
            className="object-cover"
          />
          <div className="from-cream via-cream/50 absolute inset-0 h-full w-[40%] bg-gradient-to-r to-transparent" />
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="max-w-xl md:max-w-2xl lg:max-w-[45%]">
            <p className="text-olive font-serif text-lg italic">
              Gội đầu dưỡng sinh - Massage thư giản
            </p>
            <h1 className="text-brown mt-2 font-serif text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl">
              DEN SPA
            </h1>
            <p className="text-brown/70 mt-5 max-w-md text-base leading-relaxed">
              Một không gian riêng tư, nơi bạn có thể dành một giờ để chăm sóc chính mình.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Đặt lịch ngay</Button>
              <Button variant="cream">Xem dịch vụ</Button>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {TRUST_BADGES.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="border-brown flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <Icon className="text-brown mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.5} />
                  </div>
                  <div>
                    <dt className="text-brown text-sm font-semibold whitespace-nowrap">{title}</dt>
                    <dd className="mt-0.5 text-xs text-black">{desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
