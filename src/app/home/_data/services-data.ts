import type { Locale } from '@/lib/translations';

export type ServiceId = 'neckTherapy' | 'hairWash' | 'hairWashRelax' | 'heelScrub' | 'massage';

export type ServiceOption = {
  id: string;
  label: string;
  duration?: string;
  price: string;
  note?: string;
  steps?: string[];
};

export type ServiceContent = {
  image: string;
  title: string;
  duration: string;
  price: string;
  desc: string;
  signs: string[];
  steps: string[];
  options: ServiceOption[];
};

export const SERVICE_IDS: ServiceId[] = [
  'neckTherapy',
  'hairWash',
  'hairWashRelax',
  'heelScrub',
  'massage',
];

export const SERVICES_DATA: Record<Locale, Record<ServiceId, ServiceContent>> = {
  vi: {
    neckTherapy: {
      image: '/images/services/neck-shoulder.jpg',
      title: 'Massage cổ vai gáy',
      duration: 'Từ 30 phút',
      price: 'Từ 139K',
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
        'Massage cổ vai gáy chuyên sâu',
        'Thư giãn & phục hồi',
      ],
      options: [
        { id: 'relax', label: 'Thư giãn', duration: '30 phút', price: '139K' },
        {
          id: 'therapy',
          label: 'Trị liệu',
          duration: '60 phút',
          price: '199K',
          note: 'Bao gồm ngâm chân thảo mộc',
        },
        {
          id: 'intensive',
          label: 'Chuyên sâu',
          duration: '90 phút',
          price: '299K',
          note: 'Bao gồm ngâm chân thảo mộc',
        },
      ],
    },
    hairWash: {
      image: '/images/services/hair-therapeutic.jpg',
      title: 'Gội đầu dưỡng sinh',
      duration: 'Từ 45 phút',
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
      options: [
        { id: 'basic', label: 'Cơ bản', duration: '45 phút', price: '89K' },
        { id: 'recovery', label: 'Phục hồi', duration: '60 phút', price: '129K' },
        { id: 'intensive', label: 'Chuyên sâu', duration: '90 phút', price: '169K' },
      ],
    },
    hairWashRelax: {
      image: '/images/services/hair-wash.jpg',
      title: 'Gội đầu thư giãn',
      duration: 'Từ 15 phút',
      price: 'Từ 39K',
      desc: 'Gội đầu nhanh gọn, thư giãn tức thì cho mái tóc và da đầu.',
      signs: [
        'Cần gội đầu nhanh gọn giữa ngày bận rộn',
        'Muốn thư giãn nhẹ nhàng trong thời gian ngắn',
        'Da đầu bí bách, cần làm sạch tức thì',
      ],
      steps: ['Làm ướt và làm sạch tóc', 'Massage da đầu thư giãn', 'Xả tóc và sấy nhẹ'],
      options: [
        {
          id: 'basic',
          label: 'Cơ bản',
          duration: '15 phút',
          price: '39K',
          note: 'Phụ thu nước nóng +5K',
        },
        {
          id: 'relax',
          label: 'Thư giãn',
          duration: '30 phút',
          price: '59K',
          note: 'Kết hợp massage cổ vai gáy',
        },
      ],
    },
    heelScrub: {
      image: '/images/services/heel-scrub.jpg',
      title: 'Chăm sóc chân',
      duration: 'Từ 30 phút',
      price: 'Từ 89K',
      desc: 'Da mềm mịn, loại bỏ da chết, đôi chân sạch đẹp, thư giãn toàn diện.',
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
      options: [
        {
          id: 'heelBasic',
          label: 'Chà gót chân',
          duration: '45 phút',
          price: '89K',
          steps: [
            'Ngâm chân thảo mộc',
            'Ủ gel làm mềm da chết',
            'Làm sạch da chết kỹ càng',
            'Chà gót bằng kỹ thuật cao',
          ],
        },
        {
          id: 'legMassageBasic',
          label: 'Massage chân cơ bản',
          duration: '30 phút',
          price: '129K',
          steps: ['Ngâm chân thảo mộc', 'Massage chân thư giãn', 'Bấm huyệt lòng bàn chân'],
        },
        {
          id: 'comboIntensive',
          label: 'Combo chuyên sâu',
          duration: '75 phút',
          price: '169K',
          note: 'Massage chân 30 phút + chà gót chân',
          steps: [
            'Ngâm chân thảo mộc',
            'Massage chân thư giãn 30 phút',
            'Ủ gel làm mềm da chết',
            'Chà gót bằng kỹ thuật cao',
          ],
        },
        {
          id: 'legMassage60',
          label: 'Massage chân 60 phút',
          duration: '60 phút',
          price: '199K',
          note: 'Bao gồm ngâm chân thảo mộc',
          steps: [
            'Ngâm chân thảo mộc',
            'Massage chân chuyên sâu',
            'Bấm huyệt thư giãn toàn bàn chân',
          ],
        },
      ],
    },
    massage: {
      image: '/images/services/massage.jpg',
      title: 'Massage thư giãn',
      duration: 'Từ 60 phút',
      price: 'Từ 219K',
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
      options: [
        { id: 'basic', label: '60 phút', duration: '60 phút', price: '219K' },
        { id: 'extended', label: '90 phút', duration: '90 phút', price: '299K' },
        { id: 'premium', label: '120 phút', duration: '120 phút', price: '389K' },
      ],
    },
  },
  en: {
    neckTherapy: {
      image: '/images/services/neck-shoulder.jpg',
      title: 'Neck & shoulder therapy',
      duration: 'From 30 minutes',
      price: 'From 139K',
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
      options: [
        { id: 'relax', label: 'Relax', duration: '30 minutes', price: '139K' },
        {
          id: 'therapy',
          label: 'Therapy',
          duration: '60 minutes',
          price: '199K',
          note: 'Includes herbal foot soak',
        },
        {
          id: 'intensive',
          label: 'Intensive',
          duration: '90 minutes',
          price: '299K',
          note: 'Includes herbal foot soak',
        },
      ],
    },
    hairWash: {
      image: '/images/services/hair-therapeutic.jpg',
      title: 'Therapeutic hair wash',
      duration: 'From 45 minutes',
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
      options: [
        { id: 'basic', label: 'Basic', duration: '45 minutes', price: '89K' },
        { id: 'recovery', label: 'Recovery', duration: '60 minutes', price: '129K' },
        { id: 'intensive', label: 'Intensive', duration: '90 minutes', price: '169K' },
      ],
    },
    hairWashRelax: {
      image: '/images/services/hair-wash.jpg',
      title: 'Relaxing hair wash',
      duration: 'From 15 minutes',
      price: 'From 39K',
      desc: 'A quick hair wash with an instant, relaxing scalp refresh.',
      signs: [
        'Need a quick wash during a busy day',
        'Want a short, light moment of relaxation',
        'Scalp feels weighed down and needs an instant refresh',
      ],
      steps: ['Wet and cleanse the hair', 'Relaxing scalp massage', 'Rinse and light blow-dry'],
      options: [
        {
          id: 'basic',
          label: 'Basic',
          duration: '15 minutes',
          price: '39K',
          note: '+5K hot water surcharge',
        },
        {
          id: 'relax',
          label: 'Relax',
          duration: '30 minutes',
          price: '59K',
          note: 'Combined with neck & shoulder massage',
        },
      ],
    },
    heelScrub: {
      image: '/images/services/heel-scrub.jpg',
      title: 'Foot care',
      duration: 'From 30 minutes',
      price: 'From 89K',
      desc: 'Softens skin, removes dead skin, complete foot relaxation.',
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
      options: [
        {
          id: 'heelBasic',
          label: 'Heel scrub',
          duration: '45 minutes',
          price: '89K',
          steps: [
            'Herbal foot soak',
            'Softening gel treatment',
            'Gentle exfoliation',
            'Professional heel scrub',
          ],
        },
        {
          id: 'legMassageBasic',
          label: 'Basic foot massage',
          duration: '30 minutes',
          price: '129K',
          steps: ['Herbal foot soak', 'Relaxing foot massage', 'Sole acupressure'],
        },
        {
          id: 'comboIntensive',
          label: 'Intensive combo',
          duration: '75 minutes',
          price: '169K',
          note: '30-min foot massage + heel scrub',
          steps: [
            'Herbal foot soak',
            '30-minute relaxing foot massage',
            'Softening gel treatment',
            'Professional heel scrub',
          ],
        },
        {
          id: 'legMassage60',
          label: '60-min foot massage',
          duration: '60 minutes',
          price: '199K',
          note: 'Includes herbal foot soak',
          steps: ['Herbal foot soak', 'In-depth foot massage', 'Full-sole relaxing acupressure'],
        },
      ],
    },
    massage: {
      image: '/images/services/massage.jpg',
      title: 'Relaxing massage',
      duration: 'From 60 minutes',
      price: 'From 219K',
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
      options: [
        { id: 'basic', label: '60 min', duration: '60 minutes', price: '219K' },
        { id: 'extended', label: '90 min', duration: '90 minutes', price: '299K' },
        { id: 'premium', label: '120 min', duration: '120 minutes', price: '389K' },
      ],
    },
  },
};
