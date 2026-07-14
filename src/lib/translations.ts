export type Locale = 'en' | 'vi';

export const translations = {
  vi: {
    common: {
      bookNow: 'Đặt lịch ngay',
      viewServices: 'Xem dịch vụ',
      viewDetails: 'Xem chi tiết',
      bookViaZalo: 'Đặt lịch qua Zalo',
      callNow: 'Gọi ngay',
    },
    header: {
      tagline: 'Relax & Beauty',
      openMenu: 'Mở menu',
    },
    nav: {
      home: 'Trang chủ',
      services: 'Dịch vụ',
      pricing: 'Bảng giá',
      reviews: 'Đánh giá',
      about: 'Về chúng tôi',
      contact: 'Liên hệ',
    },
    hero: {
      eyebrow: 'Gội đầu dưỡng sinh - Massage thư giản',
      subtitle: 'Một không gian riêng tư, nơi bạn có thể dành một giờ để chăm sóc chính mình.',
      trustBadges: {
        singleGuest: { title: 'Chỉ 1 khách/lần', desc: 'Riêng tư tuyệt đối' },
        structuredTherapy: { title: 'Liệu trình bài bản', desc: 'Kỹ thuật chuyên sâu' },
        naturalHerbs: { title: 'Thảo mộc tự nhiên', desc: 'An toàn, lành tính' },
      },
    },
    problems: {
      title: 'Bạn có đang',
      items: {
        neckPain: {
          title: 'Đau cổ vai gáy',
          desc: 'Ngồi máy tính nhiều, lái xe, làm việc văn phòng lâu ngày.',
        },
        stress: {
          title: 'Căng thẳng, mệt mỏi',
          desc: 'Thiếu ngủ, stress kéo dài, cơ thể uể oải, khó thư giãn.',
        },
        dullSkin: {
          title: 'Sạm da, thiếu tự tin',
          desc: 'Làn da xỉn màu, thiếu sức sống do khói bụi, áp lực công việc.',
        },
        crackedHeels: {
          title: 'Da chân khô ráp',
          desc: 'Gót chân nứt nẻ, chai sần, mất tự tin với đôi chân.',
        },
      },
    },
    differentiators: {
      title: 'Điều làm Den Spa khác biệt',
      features: {
        singleGuest: { title: '1 khách/lần', desc: 'Không xếp hàng, không ồn ào' },
        privateSpace: {
          title: 'Không gian riêng tư',
          desc: 'Yên tĩnh, ấm cúng, thư giãn tuyệt đối',
        },
        technique: { title: 'Kỹ thuật chuyên sâu', desc: 'Liệu trình bài bản, hiệu quả rõ rệt' },
        herbal: { title: 'Thảo mộc tự nhiên', desc: 'An toàn, lành tính, thân thiện với da' },
      },
      quote: 'Đến Den Spa, không chỉ để thư giãn, mà để cơ thể được lắng nghe và phục hồi.',
    },
    services: {
      eyebrow: 'Bảng giá',
      title: 'Dịch vụ nổi bật',
      items: {
        neckTherapy: {
          title: 'Trị liệu cổ vai gáy',
          duration: '60 phút',
          price: '199K',
          desc: 'Giảm đau, giảm căng cứng, phục hồi vận động, thư giãn tối đa.',
        },
        hairWash: {
          title: 'Gội đầu dưỡng sinh',
          duration: '60 phút',
          price: 'Từ 89K',
          desc: 'Khai thông kinh lạc, thư giãn đầu, chăm sóc tóc và da đầu khỏe mạnh.',
        },
        heelScrub: {
          title: 'Chà gót chân',
          duration: '45 phút',
          price: 'Từ 89K',
          desc: 'Da mềm mịn, loại bỏ da chết, gót chân sạch đẹp, không nứt nẻ.',
        },
        massage: {
          title: 'Massage thư giãn',
          duration: '60 phút',
          price: '199K',
          desc: 'Giảm đau nhức toàn thân, thả lỏng cơ bắp, tái tạo năng lượng.',
        },
      },
    },
    process: {
      title: 'Quy trình trị liệu chuyên nghiệp',
      steps: {
        booking: { title: 'Đặt lịch', desc: 'Chọn dịch vụ phù hợp và đặt lịch trước.' },
        welcome: { title: 'Đón tiếp', desc: 'Đón tiếp chu đáo, không gian thân thiện.' },
        checkup: { title: 'Thăm khám', desc: 'Kiểm tra tình trạng, tư vấn liệu trình.' },
        treatment: { title: 'Thực hiện', desc: 'Tiến hành trị liệu bài bản, chuyên sâu.' },
        relax: { title: 'Thư giãn', desc: 'Nghỉ ngơi, thưởng trà sau liệu trình.' },
        done: { title: 'Hoàn thành', desc: 'Dặn dò, chăm sóc sau trị liệu.' },
      },
    },
    showcase: {
      eyebrow: 'Đánh giá',
      title: 'Khách hàng nói gì về Den Spa',
      subtitle:
        'Mỗi trải nghiệm đều có ý nghĩa với chúng tôi. Đây là những chia sẻ chân thật từ khách hàng đã tìm thấy sự thư giãn, phục hồi và năng lượng mới tại Den Spa.',
      testimonials: {
        ngocAnh: {
          name: 'Ngọc Anh',
          role: 'Nhân viên văn phòng',
          quote:
            'Dịch vụ rất tuyệt! Mình bị đau cổ vai gáy lâu năm, sau vài buổi trị liệu cảm thấy dễ chịu hơn rất nhiều. Không gian yên tĩnh, nhân viên nhiệt tình, chuyên nghiệp.',
        },
        thuTrang: {
          name: 'Thu Trang',
          role: 'Chủ shop online',
          quote:
            'Không gian riêng tư, chỉ một khách một lần nên rất thoải mái. Kỹ thuật viên tay nghề tốt, mình đã giới thiệu cho cả nhóm bạn.',
        },
        minhKhue: {
          name: 'Minh Khuê',
          role: 'Freelancer',
          quote:
            'Gót chân mình khô nứt lâu ngày, sau khi chăm sóc tại Den Spa da mềm mịn hẳn. Sẽ quay lại thường xuyên.',
        },
        haiYen: {
          name: 'Hải Yến',
          role: 'Giáo viên',
          quote:
            'Liệu trình bài bản, nhân viên tư vấn kỹ trước khi làm. Mình cảm nhận rõ sự khác biệt chỉ sau một buổi.',
        },
        phuongLinh: {
          name: 'Phương Linh',
          role: 'Kế toán',
          quote:
            'Mình hay bị stress vì công việc, sau mỗi lần đến Den Spa đều thấy nhẹ nhõm và ngủ ngon hơn hẳn.',
        },
        ducAnh: {
          name: 'Đức Anh',
          role: 'Kỹ sư phần mềm',
          quote:
            'Ngồi máy tính cả ngày nên vai gáy lúc nào cũng cứng đờ, trị liệu ở đây giúp mình dễ chịu thấy rõ.',
        },
      },
    },
    faqCta: {
      faqTitle: 'Câu hỏi thường gặp',
      ctaTitle: 'Bạn xứng đáng có một giờ để nghỉ ngơi',
      ctaSubtitle: 'Đặt lịch ngay hôm nay để cơ thể được chăm sóc và tâm trí được thư giãn.',
    },
    faq: [
      {
        question: 'Den Spa có cần đặt lịch trước không?',
        answer:
          'Có. Vì mỗi lần chỉ phục vụ 1 khách nên bạn nên đặt lịch trước qua Zalo hoặc gọi điện để được giữ khung giờ phù hợp.',
      },
      {
        question: 'Den Spa có phục vụ nam không?',
        answer:
          'Có. Den Spa phục vụ cả khách nam và nữ với các liệu trình phù hợp cho từng nhu cầu.',
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
    ],
    footer: {
      contactInfoTitle: 'Thông tin liên hệ',
      bookingLabel: 'Zalo / Gọi ngay',
      workingHoursTitle: 'Giờ hoạt động',
      workingHours: {
        weekday: { days: 'Thứ 2 – Thứ 7' },
        sunday: { days: 'Chủ nhật' },
      },
      mapTitle: 'Bản đồ',
      rights: 'Đã đăng ký bản quyền.',
    },
  },

  en: {
    common: {
      bookNow: 'Book now',
      viewServices: 'View services',
      viewDetails: 'View details',
      bookViaZalo: 'Book via Zalo',
      callNow: 'Call now',
    },
    header: {
      tagline: 'Relax & Beauty',
      openMenu: 'Open menu',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      pricing: 'Pricing',
      reviews: 'Reviews',
      about: 'About us',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Therapeutic Hair Wash - Relaxing Massage',
      subtitle: 'A private space where you can spend an hour taking care of yourself.',
      trustBadges: {
        singleGuest: { title: '1 guest at a time', desc: 'Absolute privacy' },
        structuredTherapy: { title: 'Structured treatments', desc: 'In-depth techniques' },
        naturalHerbs: { title: 'Natural herbs', desc: 'Safe and gentle' },
      },
    },
    problems: {
      title: 'Are you experiencing',
      items: {
        neckPain: {
          title: 'Neck & shoulder pain',
          desc: 'Long hours at the computer, driving, or desk work.',
        },
        stress: {
          title: 'Stress & fatigue',
          desc: 'Lack of sleep, prolonged stress, sluggish body, hard to relax.',
        },
        dullSkin: {
          title: 'Dull skin, low confidence',
          desc: 'Dull, lifeless skin from pollution and work pressure.',
        },
        crackedHeels: {
          title: 'Rough, dry feet',
          desc: 'Cracked heels, calluses, feeling self-conscious about your feet.',
        },
      },
    },
    differentiators: {
      title: 'What makes Den Spa different',
      features: {
        singleGuest: { title: '1 guest at a time', desc: 'No queueing, no noise' },
        privateSpace: { title: 'Private space', desc: 'Quiet, cozy, absolute relaxation' },
        technique: { title: 'In-depth techniques', desc: 'Structured treatments, clear results' },
        herbal: { title: 'Natural herbs', desc: 'Safe, gentle, skin-friendly' },
      },
      quote:
        'At Den Spa, it’s not just about relaxing — it’s about letting your body be heard and restored.',
    },
    services: {
      eyebrow: 'Pricing',
      title: 'Featured services',
      items: {
        neckTherapy: {
          title: 'Neck & shoulder therapy',
          duration: '60 minutes',
          price: '199K',
          desc: 'Relieves pain and stiffness, restores mobility, deep relaxation.',
        },
        hairWash: {
          title: 'Therapeutic hair wash',
          duration: '60 minutes',
          price: 'From 89K',
          desc: 'Clears energy pathways, relaxes the scalp, keeps hair and scalp healthy.',
        },
        heelScrub: {
          title: 'Heel scrub',
          duration: '45 minutes',
          price: 'From 89K',
          desc: 'Softens skin, removes dead skin, clean heels with no cracking.',
        },
        massage: {
          title: 'Relaxing massage',
          duration: '60 minutes',
          price: '199K',
          desc: 'Relieves full-body aches, loosens muscles, restores energy.',
        },
      },
    },
    process: {
      title: 'A professional treatment process',
      steps: {
        booking: { title: 'Booking', desc: 'Choose the right service and book ahead.' },
        welcome: { title: 'Welcome', desc: 'Thoughtful welcome in a friendly space.' },
        checkup: { title: 'Check-up', desc: 'Assess your condition and advise on treatment.' },
        treatment: { title: 'Treatment', desc: 'Structured, in-depth therapy session.' },
        relax: { title: 'Relax', desc: 'Rest and enjoy tea after the treatment.' },
        done: { title: 'Wrap-up', desc: 'Aftercare guidance and follow-up tips.' },
      },
    },
    showcase: {
      eyebrow: 'Reviews',
      title: 'What our customers say about Den Spa',
      subtitle:
        'Every experience matters to us. Here are genuine stories from customers who found relaxation, recovery, and renewed energy at Den Spa.',
      testimonials: {
        ngocAnh: {
          name: 'Ngọc Anh',
          role: 'Office worker',
          quote:
            "Amazing service! I've had chronic neck and shoulder pain, and after a few sessions I feel so much better. Quiet space, friendly and professional staff.",
        },
        thuTrang: {
          name: 'Thu Trang',
          role: 'Online shop owner',
          quote:
            'A private space with just one guest at a time makes it so comfortable. Skilled therapists — I recommended it to my whole friend group.',
        },
        minhKhue: {
          name: 'Minh Khuê',
          role: 'Freelancer',
          quote:
            'My heels were dry and cracked for a long time, and after care at Den Spa my skin is so much softer. I’ll be back regularly.',
        },
        haiYen: {
          name: 'Hải Yến',
          role: 'Teacher',
          quote:
            'Structured treatment, and the staff carefully advised me beforehand. I noticed a clear difference after just one session.',
        },
        phuongLinh: {
          name: 'Phương Linh',
          role: 'Accountant',
          quote:
            'I get stressed from work a lot, and every time I visit Den Spa I feel lighter and sleep much better.',
        },
        ducAnh: {
          name: 'Đức Anh',
          role: 'Software engineer',
          quote:
            'Sitting at the computer all day leaves my neck and shoulders stiff — the therapy here noticeably helps.',
        },
      },
    },
    faqCta: {
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'You deserve an hour to unwind',
      ctaSubtitle: 'Book today so your body gets cared for and your mind gets to relax.',
    },
    faq: [
      {
        question: 'Do I need to book in advance at Den Spa?',
        answer:
          'Yes. Since we serve only one guest at a time, please book in advance via Zalo or by phone to secure your preferred time slot.',
      },
      {
        question: 'Does Den Spa serve male guests?',
        answer:
          'Yes. Den Spa serves both male and female guests with treatments suited to their needs.',
      },
      {
        question: 'Is the treatment painful?',
        answer:
          'Our therapists adjust pressure based on your feedback throughout the session, ensuring comfort and effectiveness.',
      },
      {
        question: 'Can I cancel or reschedule my appointment?',
        answer:
          'You can let us know at least 2 hours in advance via Zalo or by phone to reschedule or cancel your appointment.',
      },
    ],
    footer: {
      contactInfoTitle: 'Contact information',
      bookingLabel: 'Zalo / Call now',
      workingHoursTitle: 'Opening hours',
      workingHours: {
        weekday: { days: 'Mon – Sat' },
        sunday: { days: 'Sunday' },
      },
      mapTitle: 'Map',
      rights: 'All rights reserved.',
    },
  },
};
