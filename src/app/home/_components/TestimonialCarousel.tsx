'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

const TESTIMONIALS = [
  {
    name: 'Ngọc Anh',
    role: 'Nhân viên văn phòng',
    quote:
      'Dịch vụ rất tuyệt! Mình bị đau cổ vai gáy lâu năm, sau vài buổi trị liệu cảm thấy dễ chịu hơn rất nhiều. Không gian yên tĩnh, nhân viên nhiệt tình, chuyên nghiệp.',
  },
  {
    name: 'Thu Trang',
    role: 'Chủ shop online',
    quote:
      'Không gian riêng tư, chỉ một khách một lần nên rất thoải mái. Kỹ thuật viên tay nghề tốt, mình đã giới thiệu cho cả nhóm bạn.',
  },
  {
    name: 'Minh Khuê',
    role: 'Freelancer',
    quote:
      'Gót chân mình khô nứt lâu ngày, sau khi chăm sóc tại Den Spa da mềm mịn hẳn. Sẽ quay lại thường xuyên.',
  },
];

// Client leaf: chỉ phần chuyển đổi review cần state.
export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex] ?? TESTIMONIALS[0]!;

  return (
    <div className="flex h-full flex-col">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="fill-brown text-brown h-4 w-4" />
        ))}
      </div>

      <p className="text-brown/70 mt-4 flex-1 text-sm leading-relaxed">
        “{activeTestimonial.quote}”
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="bg-olive/15 text-olive flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold">
          {activeTestimonial.name.charAt(0)}
        </span>
        <div>
          <p className="text-brown text-sm font-semibold">{activeTestimonial.name}</p>
          <p className="text-brown/50 text-xs">{activeTestimonial.role}</p>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            aria-label={`Xem đánh giá của ${testimonial.name}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`h-2 cursor-pointer rounded-full transition-all duration-200 ${
              index === activeIndex ? 'bg-brown w-6' : 'bg-brown/20 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
