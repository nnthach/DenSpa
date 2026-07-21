'use client';

import { CircleAlert, Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PHONE_DISPLAY } from '@/config/constants';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

export type ServiceOption = {
  id: string;
  label: string;
  duration?: string;
  price: string;
  note?: string;
  steps?: string[];
};

export type ServiceDetail = {
  id: string;
  image: string;
  title: string;
  duration: string;
  price: string;
  desc: string;
  signs: string[];
  steps: string[];
  options: ServiceOption[];
};

type ServiceDetailModalProps = {
  service: ServiceDetail | null;
  onOpenChange: (open: boolean) => void;
  signsTitle: string;
  stepsTitle: string;
};

export function ServiceDetailModal({
  service,
  onOpenChange,
  signsTitle,
  stepsTitle,
}: ServiceDetailModalProps) {
  const { t } = useI18n();
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);

  useEffect(() => {
    setActiveOptionIndex(0);
  }, [service?.id]);

  const activeOption = service?.options[activeOptionIndex];
  const duration = activeOption ? activeOption.duration : service?.duration;
  const price = activeOption?.price ?? service?.price;
  const steps = activeOption?.steps ?? service?.steps ?? [];

  return (
    <Dialog open={!!service} onOpenChange={onOpenChange}>
      <DialogContent
        className="custom-scrollbar max-h-[85vh] w-[calc(100%-1.5rem)] max-w-md gap-0 overflow-y-auto p-0 sm:max-w-2xl"
        showCloseButton
      >
        {service ? (
          <>
            <div className="relative aspect-video w-full shrink-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 640px) 42rem, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <DialogHeader className="items-start text-left">
                <DialogTitle className="text-brown font-serif text-xl font-bold tracking-wide uppercase">
                  {service.title}
                </DialogTitle>
                <DialogDescription className="text-brown/70 text-sm leading-relaxed">
                  {service.desc}
                </DialogDescription>
              </DialogHeader>

              {service.options.length > 1 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.options.map((option, index) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setActiveOptionIndex(index)}
                      className={cn(
                        'rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors',
                        index === activeOptionIndex
                          ? 'bg-olive border-olive text-cream'
                          : 'border-olive/30 text-olive hover:bg-olive/10',
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="border-olive/15 text-olive mt-4 flex items-center justify-between border-t border-b py-3 text-sm">
                <span className="flex items-center gap-1.5">
                  {duration ? (
                    <>
                      <Clock className="h-4 w-4" />
                      {duration}
                    </>
                  ) : null}
                </span>
                <span className="text-lg font-bold">{price}</span>
              </div>

              {activeOption?.note ? (
                <p className="text-olive/70 mt-2 text-xs italic">{activeOption.note}</p>
              ) : null}

              <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-brown text-xs font-bold tracking-[0.15em] uppercase">
                    {signsTitle}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {service.signs.map((sign) => (
                      <li
                        key={sign}
                        className="text-brown/70 flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <CircleAlert
                          className="text-olive mt-0.5 h-4 w-4 shrink-0"
                          strokeWidth={1.5}
                        />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:border-olive/15 sm:border-l sm:pl-6">
                  <h4 className="text-brown text-xs font-bold tracking-[0.15em] uppercase">
                    {stepsTitle}
                  </h4>
                  <ol className="mt-3">
                    {steps.map((step, index) => (
                      <li key={step} className="relative flex gap-3 pb-4 last:pb-0">
                        {index < steps.length - 1 && (
                          <span className="bg-olive/20 absolute top-6 bottom-0 left-2.75 w-px" />
                        )}
                        <span className="bg-olive text-cream relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold">
                          {index + 1}
                        </span>
                        <p className="text-brown/70 pt-0.5 text-sm leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button className="flex-1">{t('common.bookViaZalo')}</Button>
                <Button variant="outline" className="flex-1">
                  {PHONE_DISPLAY}
                </Button>
              </div>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
