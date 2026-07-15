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
    <section id="trang-chu" className="relative h-screen w-full overflow-hidden">
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

      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-8">
          <div className="pt-6">
            <p className="text-olive animate-fadeInUp font-handwriting text-2xl">
              {t('hero.eyebrow')}
            </p>
            <h1
              className="animate-fadeInUp mt-2 bg-gradient-to-b from-[#66623d] via-[#8B5E3C] to-[#4A2E1B] bg-clip-text font-serif text-5xl font-extrabold tracking-normal text-transparent select-none sm:text-6xl md:text-8xl"
              style={{
                animationDelay: '150ms',
                filter: 'drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.25))',
                WebkitTextStroke: '0.3px rgba(255, 255, 255, 0.1)',
              }}
            >
              DEN SPA
            </h1>
            <p
              className="text-olive animate-fadeInUp mt-5 max-w-md text-sm"
              style={{ animationDelay: '300ms' }}
            >
              {t('hero.subtitle')}
            </p>

            <div
              className="animate-fadeInUp mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: '450ms' }}
            >
              <Link href={'#lien-he'}>
                <Button className={'bg-brown/80'}>
                  <CalendarCheck />
                  {t('common.bookNow')}
                </Button>
              </Link>
              <Link href={'#dich-vu'}>
                <Button variant="cream" className="hover:bg-[#f8eee3]">
                  {t('common.viewServices')}
                  <ArrowRight className="transition-transform duration-200 group-hover/button:translate-x-1" />
                </Button>
              </Link>
            </div>

            <dl className="mt-14 flex flex-col gap-16 sm:flex-row sm:flex-wrap">
              {TRUST_BADGES.map(({ id, Icon }, index) => (
                <div
                  key={id}
                  className="animate-fadeInUp flex flex-col gap-4"
                  style={{ animationDelay: `${600 + index * 120}ms` }}
                >
                  <Icon className="text-brown h-7 w-7 shrink-0" strokeWidth={1.5} />
                  <div>
                    <dt className="text-brown text-sm font-semibold tracking-wide uppercase">
                      {t(`hero.trustBadges.${id}.title`)}
                    </dt>
                    <dd className="text-olive mt-1.5 text-sm leading-relaxed">
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
