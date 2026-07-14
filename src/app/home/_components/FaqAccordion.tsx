'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  {
    question: 'Den Spa có cần đặt lịch trước không?',
    answer:
      'Có. Vì mỗi lần chỉ phục vụ 1 khách nên bạn nên đặt lịch trước qua Zalo hoặc gọi điện để được giữ khung giờ phù hợp.',
  },
  {
    question: 'Den Spa có phục vụ nam không?',
    answer: 'Có. Den Spa phục vụ cả khách nam và nữ với các liệu trình phù hợp cho từng nhu cầu.',
  },
  {
    question: 'Trị liệu có đau không?',
    answer:
      'Kỹ thuật viên sẽ điều chỉnh lực tay theo cảm nhận của bạn trong suốt buổi trị liệu, đảm bảo thoải mái và hiệu quả.',
  },
  {
    question: 'Tôi có thể hủy hoặc đổi lịch không?',
    answer:
      'Bạn có thể chủ động báo trước ít nhất 2 giờ qua Zalo hoặc gọi điện để đổi hoặc hủy lịch hẹn.',
  },
];

// Client leaf: chỉ phần accordion cần state mở/đóng câu hỏi.
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-olive/15 divide-y">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="text-brown flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-medium"
            >
              {faq.question}
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen ? (
              <p className="text-brown/60 pb-4 text-sm leading-relaxed">{faq.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
