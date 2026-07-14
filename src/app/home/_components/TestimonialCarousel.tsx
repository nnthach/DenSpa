'use client';

import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
  {
    name: 'Hải Yến',
    role: 'Giáo viên',
    quote:
      'Liệu trình bài bản, nhân viên tư vấn kỹ trước khi làm. Mình cảm nhận rõ sự khác biệt chỉ sau một buổi.',
  },
  {
    name: 'Phương Linh',
    role: 'Kế toán',
    quote:
      'Mình hay bị stress vì công việc, sau mỗi lần đến Den Spa đều thấy nhẹ nhõm và ngủ ngon hơn hẳn.',
  },
  {
    name: 'Đức Anh',
    role: 'Kỹ sư phần mềm',
    quote:
      'Ngồi máy tính cả ngày nên vai gáy lúc nào cũng cứng đờ, trị liệu ở đây giúp mình dễ chịu thấy rõ.',
  },
];

const AUTOPLAY_INTERVAL_MS = 4000;

function getVisibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

// Client leaf: carousel review tự trượt — track dịch chuyển bằng transform, card giữa được phóng to.
export function TestimonialCarousel() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHoveringRef = useRef(false);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);
  const centerSlot = Math.floor((visibleCount - 1) / 2);
  const stepPercent = 100 / visibleCount;

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount(window.innerWidth));
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, TESTIMONIALS.length - visibleCount)));
  }, [visibleCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isHoveringRef.current) return;
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
    >
      <div className="overflow-hidden py-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * stepPercent}%)` }}
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === activeIndex + centerSlot;

            return (
              <div
                key={testimonial.name}
                className="shrink-0 px-3"
                style={{ width: `${stepPercent}%` }}
              >
                <div
                  className={`bg-cream h-full rounded-2xl p-6 transition-all duration-500 ${
                    isActive ? 'scale-105 opacity-100 shadow-lg' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="fill-olive text-olive h-4 w-4" />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="bg-olive/15 text-olive flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-brown text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-brown/50 text-xs">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-brown/70 mt-4 text-sm leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
