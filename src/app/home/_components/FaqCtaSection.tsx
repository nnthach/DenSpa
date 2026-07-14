import Image from 'next/image';

import { buttonVariants } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { PHONE_DISPLAY, PHONE_TEL, ZALO_URL } from '@/config/constants';

import { FaqAccordion } from './FaqAccordion';

export function FaqCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <div>
          <SectionHeading title="Câu hỏi thường gặp" align="left" />
          <div className="mt-6">
            <FaqAccordion />
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/banner.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="bg-brown/85 relative flex h-full flex-col justify-center gap-5 p-8 sm:p-10">
            <h3 className="text-cream font-serif text-2xl font-semibold sm:text-3xl">
              Bạn xứng đáng có một giờ để nghỉ ngơi
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              Đặt lịch ngay hôm nay để cơ thể được chăm sóc và tâm trí được thư giãn.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={ZALO_URL} className={buttonVariants({ variant: 'secondary' })}>
                Đặt lịch qua Zalo
              </a>
              <a
                href={PHONE_TEL}
                className="text-cream border-cream/50 hover:bg-cream/10 inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
              >
                Gọi ngay: {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
