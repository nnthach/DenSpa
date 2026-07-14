'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { useI18n } from '@/context/I18nContext';

import { FAQ_DATA } from './faq-data';

// Client leaf: chỉ phần accordion cần state mở/đóng câu hỏi.
export function FaqAccordion() {
  const { locale } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = FAQ_DATA[locale];

  return (
    <div className="divide-olive/15 divide-y">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="text-brown flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-medium"
            >
              {item.question}
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <p className="text-brown/60 pb-4 text-sm leading-relaxed">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
