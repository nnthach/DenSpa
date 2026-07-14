import { SectionHeading } from '@/components/ui/section-heading';

import { TestimonialCarousel } from './TestimonialCarousel';

export function ShowcaseSection() {
  return (
    <section id="review" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Đánh giá" title="Khách hàng nói gì về Den Spa" />
      <p className="text-brown/60 mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed">
        Mỗi trải nghiệm đều có ý nghĩa với chúng tôi. Đây là những chia sẻ chân thật từ khách hàng
        đã tìm thấy sự thư giãn, phục hồi và năng lượng mới tại Den Spa.
      </p>

      <div className="mt-10">
        <TestimonialCarousel />
      </div>
    </section>
  );
}
