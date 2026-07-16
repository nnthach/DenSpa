'use client';

import { Calendar, Coffee, Heart, Search, Sparkles, UserCheck } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

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
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="bg-olive/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('process.title')}
          className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
        />

        <div className="relative mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div
            className={cn(
              'bg-olive/20 absolute top-8 right-0 left-0 hidden h-px lg:block',
              inView ? 'animate-growLine' : 'scale-x-0',
            )}
          />

          {STEPS.map(({ id, Icon }, index) => (
            <div
              key={id}
              className={cn(
                'group relative z-10 flex flex-col items-center text-center',
                inView ? 'animate-fadeUp' : 'opacity-0',
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="bg-cream border-brown text-brown group-hover:border-olive group-hover:bg-olive group-hover:shadow-olive/20 flex h-16 w-16 items-center justify-center rounded-full border-1 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-lg">
                <Icon
                  className="text-olive group-hover:text-cream h-8 w-8 transition-all duration-300 group-hover:scale-110"
                  strokeWidth={2}
                />
              </span>
              <span className="text-olive mt-2 text-[12px] font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-olive group-hover:text-brown mt-1 text-sm font-bold tracking-wide uppercase transition-colors duration-300">
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
