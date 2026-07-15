'use client';

import { ArrowRight, CalendarCheck, Leaf, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';

const TRUST_BADGES = [
  { id: 'singleGuest', Icon: Users },
  { id: 'structuredTherapy', Icon: Sparkles },
  { id: 'naturalHerbs', Icon: Leaf },
] as const;

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="trang-chu" className="relative min-h-dvh w-full overflow-hidden">
      <div className="animate-imageFade absolute inset-0 h-full w-full">
        <Image
          src="/images/banner_new.png"
          alt="Trị liệu thư giãn tại Den Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="from-cream via-cream/50 to-cream/10 absolute inset-0 h-full w-full bg-linear-to-r" />
      </div>
      <div className="relative z-10 flex h-full min-h-dvh w-full items-center justify-center py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-olive animate-fadeInUp font-handwriting text-lg sm:text-2xl">
                {t('hero.eyebrow')}
              </p>
              <h1
                className="animate-fadeInUp mt-1 bg-gradient-to-b from-[#66623d] via-[#8B5E3C] to-[#4A2E1B] bg-clip-text font-serif text-4xl font-extrabold tracking-normal text-transparent select-none sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  animationDelay: '150ms',
                  filter: 'drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.25))',
                  WebkitTextStroke: '0.3px rgba(255, 255, 255, 0.1)',
                }}
              >
                DEN SPA
              </h1>
              <p
                className="text-olive animate-fadeInUp mt-3 max-w-md text-xs sm:mt-5 sm:text-sm"
                style={{ animationDelay: '300ms' }}
              >
                {t('hero.subtitle')}
              </p>

              <div
                className="animate-fadeInUp mt-5 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-4"
                style={{ animationDelay: '450ms' }}
              >
                <Link href={'#lien-he'}>
                  <Button size="sm" className="bg-brown/80 sm:h-12 sm:px-6 sm:py-2">
                    <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                    {t('common.bookNow')}
                  </Button>
                </Link>

                <Link href={'#dich-vu'}>
                  <Button
                    variant="cream"
                    size="sm"
                    className="sm:text-md hover:bg-[#f8eee3] sm:h-12 sm:px-6 sm:py-2"
                  >
                    {t('common.viewServices')}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>

              {/* 
            - Giảm mt-14 xuống mt-8 trên mobile để tối ưu không gian đứng.
            - Trên mobile rất nhỏ (xs), danh sách badge có thể dài, nên dùng gap-6 thay vì gap-16.
          */}
              <dl className="mt-8 flex flex-row flex-wrap gap-6 sm:mt-14 sm:gap-16">
                {TRUST_BADGES.map(({ id, Icon }, index) => (
                  <div
                    key={id}
                    className="animate-fadeInUp flex w-full items-start gap-3 sm:w-auto sm:flex-col sm:gap-4"
                    style={{ animationDelay: `${600 + index * 120}ms` }}
                  >
                    <Icon
                      className="text-brown mt-0.5 h-5 w-5 shrink-0 sm:mt-0 sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                    />
                    <div>
                      <dt className="text-brown text-xs font-semibold tracking-wide uppercase sm:text-base">
                        {t(`hero.trustBadges.${id}.title`)}
                      </dt>
                      <dd className="text-olive mt-0.5 text-xs leading-relaxed sm:mt-1.5 sm:text-sm">
                        {t(`hero.trustBadges.${id}.desc`)}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
