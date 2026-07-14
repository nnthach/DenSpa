import { WORKING_HOURS } from '@/config/constants';
import type { Locale } from '@/lib/translations';

export type FaqItem = {
  question: string;
  answer: string;
};

const weekdayHours = WORKING_HOURS[0].hours;
const sundayHours = WORKING_HOURS[1].hours;

export const FAQ_DATA: Record<Locale, FaqItem[]> = {
  vi: [
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
      question: 'Den Spa hoạt động vào giờ nào?',
      answer: `Den Spa mở cửa từ ${weekdayHours} các ngày Thứ 2 - Thứ 7, và từ ${sundayHours} vào Chủ nhật.`,
    },
    {
      question: 'Tôi có thể hủy hoặc đổi lịch không?',
      answer: 'Bạn có thể chủ động báo trước ít nhất 2 giờ qua Zalo hoặc gọi điện để đổi hoặc hủy lịch hẹn.',
    },
  ],
  en: [
    {
      question: 'Do I need to book in advance at Den Spa?',
      answer:
        'Yes. Since we serve only one guest at a time, please book in advance via Zalo or by phone to secure your preferred time slot.',
    },
    {
      question: 'Does Den Spa serve male guests?',
      answer: 'Yes. Den Spa serves both male and female guests with treatments suited to their needs.',
    },
    {
      question: 'What are Den Spa opening hours?',
      answer: `Den Spa is open from ${weekdayHours} Monday to Saturday, and from ${sundayHours} on Sunday.`,
    },
    {
      question: 'Can I cancel or reschedule my appointment?',
      answer:
        'You can let us know at least 2 hours in advance via Zalo or by phone to reschedule or cancel your appointment.',
    },
  ],
};
