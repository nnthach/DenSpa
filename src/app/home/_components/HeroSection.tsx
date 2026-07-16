'use client';

import { ArrowRight, Leaf, Play, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';

const TRUST_BADGES = [
  { id: 'structuredTherapy', Icon: Sparkles },
  { id: 'naturalHerbs', Icon: Leaf },
  { id: 'dedicatedTherapists', Icon: UserCheck },
  { id: 'singleGuest', Icon: ShieldCheck },
] as const;

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="trang-chu" className="relative min-h-dvh w-full overflow-hidden">
      <div className="animate-imageFade absolute inset-0 h-full w-full">
        <Image
          src="/images/final_banner.jpeg"
          alt="Trị liệu thư giãn tại Den Spa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[18%_center] sm:object-[28%_center] lg:object-center"
        />
      </div>

      <div className="relative z-10 flex h-full min-h-dvh w-full flex-col justify-between pt-10 sm:pt-16">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 sm:px-10 lg:px-8">
          <div className="animate-fadeInUp flex items-center gap-3">
            <p className="text-gold text-[11px] font-medium tracking-[0.3em] uppercase sm:text-xs">
              {t('hero.eyebrow')}
            </p>
          </div>

          <h1
            className="animate-fadeInUp font-cormorant bg-gradient-to-r from-white to-amber-300 bg-clip-text text-4xl font-medium tracking-wide text-transparent select-none sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              animationDelay: '150ms',
              filter: 'drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.5))',
            }}
          >
            DEN SPA
          </h1>

          <p
            className="animate-fadeInUp mt-2 bg-gradient-to-r from-white to-amber-300 bg-clip-text font-serif text-lg text-transparent italic sm:text-xl"
            style={{ animationDelay: '250ms' }}
          >
            {t('hero.tagline')}
          </p>

          <p
            className="text-cream/80 animate-fadeInUp mt-3 max-w-md text-xs sm:mt-5 sm:text-sm"
            style={{ animationDelay: '350ms' }}
          >
            {t('hero.subtitle')}
          </p>

          <div
            className="animate-fadeInUp mt-8 flex flex-wrap items-center gap-5 sm:mt-12 sm:gap-8"
            style={{ animationDelay: '500ms' }}
          >
            <Link href={'#lien-he'}>
              <Button
                size="sm"
                className="bg-gold text-brown hover:bg-gold/90 sm:h-12 sm:px-7 sm:py-2 sm:text-sm"
              >
                {t('common.bookNow')}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1 sm:h-5 sm:w-5" />
              </Button>
            </Link>

            <Link href={'#dich-vu'} className="group flex items-center gap-3">
              <span className="border-cream/50 text-cream group-hover:bg-cream/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors sm:h-10 sm:w-10">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="text-cream text-xs font-semibold tracking-wide uppercase sm:text-xs">
                {t('hero.exploreCta')}
              </span>
            </Link>
          </div>
        </div>

        {/*badge */}
        <div className="border-brown/10 w-full border-b bg-black/80">
          <dl
            className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-6 py-4 sm:gap-x-10 sm:gap-y-10 sm:px-10 lg:grid-cols-5 lg:items-center lg:gap-x-0 lg:px-8 lg:py-6" // lg:items-center giúp toàn bộ các cột căn giữa theo chiều dọc
          >
            {/* Phần chỉ số thống kê (Stats) */}
            <div
              className="animate-fadeInUp relative col-span-2 flex w-full shrink-0 flex-col items-center justify-center text-center lg:col-span-1 lg:min-h-[50px] lg:items-start lg:text-left"
              style={{ animationDelay: '650ms' }}
            >
              <dt className="text-gold font-serif text-2xl font-bold sm:text-3xl">
                {t('hero.stats.value')}
              </dt>
              <dd className="text-cream/60 mt-1 text-[11px] leading-relaxed sm:text-xs">
                {t('hero.stats.title')}
                <br />
                {t('hero.stats.desc')}
              </dd>

              <div className="bg-cream/15 absolute top-1/2 right-0 hidden h-8 w-[1px] -translate-y-1/2 lg:block" />
            </div>

            {TRUST_BADGES.map(({ id, Icon }, index) => {
              const isLast = index === TRUST_BADGES.length - 1;
              return (
                <div
                  key={id}
                  className="animate-fadeInUp relative flex w-full items-start justify-center lg:min-h-[50px] lg:items-center lg:px-6"
                  style={{ animationDelay: `${650 + (index + 1) * 120}ms` }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="border-gold/40 text-gold flex h-9 w-9 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <dt className="text-gold text-[12px] font-semibold tracking-wide uppercase">
                        {t(`hero.trustBadges.${id}.title`)}
                      </dt>
                      <dd className="text-cream/60 mt-1 text-[10px] leading-relaxed">
                        {t(`hero.trustBadges.${id}.desc`)}
                      </dd>
                    </div>
                  </div>

                  {!isLast && (
                    <div className="bg-cream/15 absolute top-1/2 right-0 hidden h-8 w-[1px] -translate-y-1/2 lg:block" />
                  )}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
