import type { Locale } from '@/lib/translations';

export type ServiceId = 'neckTherapy' | 'hairWash' | 'heelScrub' | 'massage';

export type ServiceContent = {
  image: string;
  title: string;
  duration: string;
  price: string;
  desc: string;
  signs: string[];
  steps: string[];
};

export const SERVICE_IDS: ServiceId[] = ['neckTherapy', 'hairWash', 'heelScrub', 'massage'];

export const SERVICES_SECTION_LABELS: Record<
  Locale,
  { eyebrow: string; title: string; signsTitle: string; stepsTitle: string }
> = {
  vi: {
    eyebrow: 'Bảng giá',
    title: 'Dịch vụ nổi bật',
    signsTitle: 'Dấu hiệu bạn nên trải nghiệm',
    stepsTitle: 'Quy trình thực hiện',
  },
  en: {
    eyebrow: 'Pricing',
    title: 'Featured services',
    signsTitle: 'Signs you should try this',
    stepsTitle: 'Treatment process',
  },
};

export const SERVICES_DATA: Record<Locale, Record<ServiceId, ServiceContent>> = {
  vi: {
    neckTherapy: {
      image: '/images/services/service1.jpg',
      title: 'Trị liệu cổ vai gáy',
      duration: '60 phút',
      price: '199K',
      desc: 'Giảm đau, giảm căng cứng, phục hồi vận động, thư giãn tối đa.',
      signs: [
        'Đau mỏi cổ và vai gáy',
        'Căng cứng cổ, khó xoay đầu',
        'Đau đầu, chóng mặt, mất tập trung',
        'Tê mỏi vai, cánh tay hoặc bàn tay',
        'Ngồi nhiều, sử dụng điện thoại lâu',
      ],
      steps: [
        'Kiểm tra & tư vấn',
        'Làm nóng & thư giãn cơ',
        'Trị liệu tập trung điểm đau',
        'Massage cổ vai gáy chuyên sâ',
        'Thư giãn & phục hồi',
      ],
    },
    hairWash: {
      image: '/images/services/service2.jpg',
      title: 'Gội đầu dưỡng sinh',
      duration: '60 phút',
      price: 'Từ 89K',
      desc: 'Khai thông kinh lạc, thư giãn đầu, chăm sóc tóc và da đầu khỏe mạnh.',
      signs: [
        'Tóc khô xơ, mất độ bóng khỏe',
        'Da đầu bết dầu, ngứa hoặc có gàu',
        'Tóc yếu, dễ gãy rụng',
        'Cơ thể căng thẳng, cần được thư giãn',
        'Muốn tận hưởng liệu trình chăm sóc toàn diện',
      ],
      steps: [
        'Chườm nóng thư giãn',
        'Thư giãn với tinh dầu',
        'Khai thông kinh huyệt',
        'Tẩy trang và làm sạch da',
        'Rửa mặt',
        'Massage mặt',
        'Gội đầu 2 nước và ủ tóc',
        'Massage đầu dưỡng sinh',
        'Massage cổ vai gáy',
        'Xả tóc và sấy hoàn thiện',
      ],
    },
    heelScrub: {
      image: '/images/services/service3.jpg',
      title: 'Chà gót chân',
      duration: '45 phút',
      price: 'Từ 89K',
      desc: 'Da mềm mịn, loại bỏ da chết, gót chân sạch đẹp, không nứt nẻ.',
      signs: [
        'Gót chân khô, nứt nẻ và bong tróc',
        'Da chân dày sừng, nhiều da chết',
        'Đôi chân thiếu mềm mại, kém tự tin',
        'Thường xuyên đi giày khiến chân khô cứng',
      ],
      steps: [
        'Ngâm chân thảo mộc',
        'Ủ gel làm mềm da chết',
        'Làm sạch da chết kỹ càng',
        'Chà gót bằng kỹ thuật cao',
      ],
    },
    massage: {
      image: '/images/services/service4.jpg',
      title: 'Massage thư giãn',
      duration: '60 phút',
      price: '199K',
      desc: 'Giảm đau nhức toàn thân, thả lỏng cơ bắp, tái tạo năng lượng.',
      signs: [
        'Căng thẳng công việc kéo dài',
        'Cơ thể mệt mỏi, đau nhức toàn thân',
        'Khó ngủ, ngủ không sâu giấc',
        'Tâm trạng dễ cáu gắt, lo âu',
        'Ít vận động, ngồi nhiều trong ngày',
      ],
      steps: [
        'Tư vấn, xác định vùng cần trị liệu',
        'Làm nóng cơ thể bằng khăn ấm',
        'Massage toàn thân bằng tinh dầu',
        'Bấm huyệt giải tỏa căng thẳng',
        'Kéo giãn cơ, thư giãn khớp',
        'Chườm nóng thư giãn sâu',
        'Nghỉ ngơi, thưởng trà sau liệu trình',
      ],
    },
  },
  en: {
    neckTherapy: {
      image: '/images/services/service1.jpg',
      title: 'Neck & shoulder therapy',
      duration: '60 minutes',
      price: '199K',
      desc: 'Relieves pain and stiffness, restores mobility, deep relaxation.',
      signs: [
        'Neck and shoulder pain',
        'Stiff neck and restricted movement',
        'Headaches, dizziness, and poor concentration',
        'Numbness in the shoulders, arms, or hands',
        'Long hours of sitting or using digital devices',
      ],

      steps: [
        'Consultation & Assessment',
        'Warm-Up & Muscle Relaxation',
        'Targeted Trigger Point Therapy',
        'Deep Neck & Shoulder Massage',
        'Relaxation & Recovery',
      ],
    },
    hairWash: {
      image: '/images/services/service2.jpg',
      title: 'Therapeutic hair wash',
      duration: '60 minutes',
      price: 'From 89K',
      desc: 'Clears energy pathways, relaxes the scalp, keeps hair and scalp healthy.',
      signs: [
        'Dry, damaged, or dull hair',
        'Oily scalp, dandruff, or itchiness',
        'Excessive hair fall',
        'Feeling stressed and mentally exhausted',
        'Looking for a relaxing self-care experience',
      ],
      steps: [
        'Warm Compress Therapy',
        'Aromatherapy Relaxation',
        'Meridian & Acupressure Therapy',
        'Makeup Removal & Skin Cleansing',
        'Facial Cleansing',
        'Facial Massage',
        'Double Shampoo & Hair Treatment',
        'Therapeutic Head Massage',
        'Neck & Shoulder Massage',
        'Hair Rinse & Professional Blow Dry',
      ],
    },
    heelScrub: {
      image: '/images/services/service3.jpg',
      title: 'Heel scrub',
      duration: '45 minutes',
      price: 'From 89K',
      desc: 'Softens skin, removes dead skin, clean heels with no cracking.',
      signs: [
        'Dry, cracked, and rough heels',
        'Callused feet with dead skin buildup',
        'Feet that feel rough and lack smoothness',
        'Dry, hardened heels from daily shoe wear',
      ],
      steps: [
        'Herbal Foot Soak',
        'Softening Gel Treatment',
        'Gentle Exfoliation',
        'Professional Heel Care',
      ],
    },
    massage: {
      image: '/images/services/service4.jpg',
      title: 'Relaxing massage',
      duration: '60 minutes',
      price: '199K',
      desc: 'Relieves full-body aches, loosens muscles, restores energy.',
      signs: [
        'Prolonged work-related stress',
        'Full-body fatigue and soreness',
        'Trouble sleeping or shallow sleep',
        'Feeling irritable or anxious',
        'Sitting too much, little movement',
      ],
      steps: [
        'Consultation to identify areas to focus on',
        'Warm towel body warm-up',
        'Full-body massage with essential oils',
        'Acupressure to release tension',
        'Muscle stretching and joint relaxation',
        'Deep-relaxing hot compress',
        'Rest and tea after the session',
      ],
    },
  },
};
