'use client';

import { Calendar, Coffee, Heart, Search, Sparkles, UserCheck } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';

const STEPS = [
  { id: 'booking', Icon: Calendar },
  { id: 'welcome', Icon: UserCheck },
  { id: 'checkup', Icon: Search },
  { id: 'treatment', Icon: Sparkles },
  { id: 'relax', Icon: Coffee },
  { id: 'done', Icon: Heart },
] as const;

export function ProcessSection() {
  const { t } = useI18n();

  return (
    <section className="bg-olive/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('process.title')} />

        <div className="relative mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="bg-olive/20 absolute top-6 right-0 left-0 hidden h-px lg:block" />

          {STEPS.map(({ id, Icon }, index) => (
            <div key={id} className="relative z-10 flex flex-col items-center text-center">
              <span className="bg-cream border-brown text-brown flex h-16 w-16 items-center justify-center rounded-full border-1">
                <Icon className="text-olive h-8 w-8" strokeWidth={2} />
              </span>
              <span className="text-olive mt-2 text-[12px] font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-olive mt-1 text-sm font-bold tracking-wide uppercase">
                {t(`process.steps.${id}.title`)}
              </h3>
              <p className="text-olive/60 mt-1 text-xs leading-relaxed">
                {t(`process.steps.${id}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
