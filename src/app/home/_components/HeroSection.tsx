'use client';

import { Leaf, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

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
    <section id="trang-chu" className="relative h-screen w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 h-full w-full lg:grid lg:grid-cols-10">
        <div className="bg-cream hidden h-full lg:col-span-4 lg:block" />

        <div className="animate-imageFade relative h-full w-full lg:col-span-6">
          <Image
            src="/images/banner.webp"
            alt="Trị liệu thư giãn tại Den Spa"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
          <div className="from-cream via-cream/70 to-cream/90 absolute inset-0 h-full w-full bg-gradient-to-b lg:hidden" />
          <div className="from-cream via-cream/50 absolute inset-0 hidden h-full w-[40%] bg-gradient-to-r to-transparent lg:block" />
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="">
            <p className="text-olive animate-fadeInUp font-serif text-lg italic">
              {t('hero.eyebrow')}
            </p>
            <h1
              className="text-brown animate-fadeInUp mt-2 font-serif text-5xl font-bold tracking-wide sm:text-6xl md:text-7xl"
              style={{ animationDelay: '150ms' }}
            >
              DEN SPA
            </h1>
            <p
              className="text-brown/70 animate-fadeInUp mt-5 max-w-md text-base leading-relaxed"
              style={{ animationDelay: '300ms' }}
            >
              {t('hero.subtitle')}
            </p>

            <div
              className="animate-fadeInUp mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: '450ms' }}
            >
              <Button>{t('common.bookNow')}</Button>
              <Button variant="cream" className="hover:bg-[#f8eee3]">
                {t('common.viewServices')}
              </Button>
            </div>

            <dl className="mt-12 flex flex-col gap-8 sm:flex-row">
              {TRUST_BADGES.map(({ id, Icon }, index) => (
                <div
                  key={id}
                  className="animate-fadeInUp flex items-center gap-3"
                  style={{ animationDelay: `${600 + index * 120}ms` }}
                >
                  <div className="border-brown flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <Icon className="text-brown mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.5} />
                  </div>

                  <div>
                    <dt className="text-brown text-sm font-semibold whitespace-nowrap">
                      {t(`hero.trustBadges.${id}.title`)}
                    </dt>
                    <dd className="mt-0.5 text-xs text-black">
                      {t(`hero.trustBadges.${id}.desc`)}
                    </dd>
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
