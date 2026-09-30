export const INITIAL_TOWN = [
  {
    id: 1,
    title: 'Ngôi nhà 1: Căn Nhà Gỗ',
    rooms: [
      {
        id: '1-math',
        subject: 'Toán',
        title: 'Thử thách Đại số cơ bản',
        knowledge: 'Vận dụng các kiến thức quan trọng về Đại số cơ bản để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_math_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Toán phần Đại số cơ bản (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Đại số cơ bản.'
          },
          {
            id: 'h1_math_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Đại số cơ bản trong môn Toán là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_math_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Đại số cơ bản: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_math_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Đại số cơ bản trong môn Toán là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_math_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Toán phần Đại số cơ bản (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Đại số cơ bản.'
          },
        ]
      },
      {
        id: '1-lit',
        subject: 'Văn',
        title: 'Thử thách Phân tích nhân vật',
        knowledge: 'Vận dụng các kiến thức quan trọng về Phân tích nhân vật để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_lit_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Văn phần Phân tích nhân vật (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phân tích nhân vật.'
          },
          {
            id: 'h1_lit_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Phân tích nhân vật trong môn Văn là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_lit_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Phân tích nhân vật: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_lit_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Phân tích nhân vật trong môn Văn là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_lit_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Văn phần Phân tích nhân vật (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phân tích nhân vật.'
          },
        ]
      },
      {
        id: '1-eng',
        subject: 'Anh',
        title: 'Thử thách Ngữ pháp (Tenses)',
        knowledge: 'Vận dụng các kiến thức quan trọng về Ngữ pháp (Tenses) để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_eng_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Anh phần Ngữ pháp (Tenses) (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Ngữ pháp (Tenses).'
          },
          {
            id: 'h1_eng_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Ngữ pháp (Tenses) trong môn Anh là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_eng_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Ngữ pháp (Tenses): ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_eng_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Ngữ pháp (Tenses) trong môn Anh là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_eng_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Anh phần Ngữ pháp (Tenses) (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Ngữ pháp (Tenses).'
          },
        ]
      },
      {
        id: '1-phys',
        subject: 'Vật lý',
        title: 'Thử thách Cơ học (Chuyển động)',
        knowledge: 'Vận dụng các kiến thức quan trọng về Cơ học (Chuyển động) để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_phys_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Vật lý phần Cơ học (Chuyển động) (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Cơ học (Chuyển động).'
          },
          {
            id: 'h1_phys_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Cơ học (Chuyển động) trong môn Vật lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_phys_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Cơ học (Chuyển động): ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_phys_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Cơ học (Chuyển động) trong môn Vật lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_phys_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Vật lý phần Cơ học (Chuyển động) (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Cơ học (Chuyển động).'
          },
        ]
      },
      {
        id: '1-chem',
        subject: 'Hóa học',
        title: 'Thử thách Bảng tuần hoàn',
        knowledge: 'Vận dụng các kiến thức quan trọng về Bảng tuần hoàn để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_chem_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Hóa học phần Bảng tuần hoàn (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Bảng tuần hoàn.'
          },
          {
            id: 'h1_chem_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Bảng tuần hoàn trong môn Hóa học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_chem_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Bảng tuần hoàn: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_chem_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Bảng tuần hoàn trong môn Hóa học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_chem_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Hóa học phần Bảng tuần hoàn (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Bảng tuần hoàn.'
          },
        ]
      },
      {
        id: '1-bio',
        subject: 'Sinh học',
        title: 'Thử thách Tế bào',
        knowledge: 'Vận dụng các kiến thức quan trọng về Tế bào để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_bio_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Sinh học phần Tế bào (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Tế bào.'
          },
          {
            id: 'h1_bio_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Tế bào trong môn Sinh học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_bio_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Tế bào: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_bio_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Tế bào trong môn Sinh học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_bio_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Sinh học phần Tế bào (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Tế bào.'
          },
        ]
      },
      {
        id: '1-hist',
        subject: 'Lịch sử',
        title: 'Thử thách Lịch sử Việt Nam (Phong kiến)',
        knowledge: 'Vận dụng các kiến thức quan trọng về Lịch sử Việt Nam (Phong kiến) để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_hist_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Lịch sử phần Lịch sử Việt Nam (Phong kiến) (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Lịch sử Việt Nam (Phong kiến).'
          },
          {
            id: 'h1_hist_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Lịch sử Việt Nam (Phong kiến) trong môn Lịch sử là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_hist_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Lịch sử Việt Nam (Phong kiến): ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_hist_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Lịch sử Việt Nam (Phong kiến) trong môn Lịch sử là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_hist_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Lịch sử phần Lịch sử Việt Nam (Phong kiến) (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Lịch sử Việt Nam (Phong kiến).'
          },
        ]
      },
      {
        id: '1-geo',
        subject: 'Địa lý',
        title: 'Thử thách Địa lý Tự nhiên VN',
        knowledge: 'Vận dụng các kiến thức quan trọng về Địa lý Tự nhiên VN để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h1_geo_q1',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Địa lý phần Địa lý Tự nhiên VN (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Địa lý Tự nhiên VN.'
          },
          {
            id: 'h1_geo_q2',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Địa lý Tự nhiên VN trong môn Địa lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_geo_q3',
            type: 'fill_blank',
            text: 'Mức độ 1 - Điền từ còn thiếu vào chỗ trống về kiến thức Địa lý Tự nhiên VN: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h1_geo_q4',
            type: 'true_false',
            text: 'Mức độ 1 - Nhận định sau về Địa lý Tự nhiên VN trong môn Địa lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h1_geo_q5',
            type: 'mcq',
            text: 'Mức độ 1 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Địa lý phần Địa lý Tự nhiên VN (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Địa lý Tự nhiên VN.'
          },
        ]
      },
    ]
  },
  {
    id: 2,
    title: 'Ngôi nhà 2: Biệt Thự Hiện Đại',
    rooms: [
      {
        id: '2-math',
        subject: 'Toán',
        title: 'Thử thách Hình học không gian',
        knowledge: 'Vận dụng các kiến thức quan trọng về Hình học không gian để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_math_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Toán phần Hình học không gian (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Hình học không gian.'
          },
          {
            id: 'h2_math_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Hình học không gian trong môn Toán là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_math_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Hình học không gian: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_math_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Hình học không gian trong môn Toán là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_math_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Toán phần Hình học không gian (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Hình học không gian.'
          },
        ]
      },
      {
        id: '2-lit',
        subject: 'Văn',
        title: 'Thử thách Biện pháp tu từ',
        knowledge: 'Vận dụng các kiến thức quan trọng về Biện pháp tu từ để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_lit_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Văn phần Biện pháp tu từ (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Biện pháp tu từ.'
          },
          {
            id: 'h2_lit_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Biện pháp tu từ trong môn Văn là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_lit_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Biện pháp tu từ: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_lit_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Biện pháp tu từ trong môn Văn là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_lit_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Văn phần Biện pháp tu từ (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Biện pháp tu từ.'
          },
        ]
      },
      {
        id: '2-eng',
        subject: 'Anh',
        title: 'Thử thách Từ vựng (Vocabulary)',
        knowledge: 'Vận dụng các kiến thức quan trọng về Từ vựng (Vocabulary) để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_eng_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Anh phần Từ vựng (Vocabulary) (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Từ vựng (Vocabulary).'
          },
          {
            id: 'h2_eng_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Từ vựng (Vocabulary) trong môn Anh là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_eng_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Từ vựng (Vocabulary): ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_eng_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Từ vựng (Vocabulary) trong môn Anh là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_eng_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Anh phần Từ vựng (Vocabulary) (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Từ vựng (Vocabulary).'
          },
        ]
      },
      {
        id: '2-phys',
        subject: 'Vật lý',
        title: 'Thử thách Điện học',
        knowledge: 'Vận dụng các kiến thức quan trọng về Điện học để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_phys_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Vật lý phần Điện học (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Điện học.'
          },
          {
            id: 'h2_phys_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Điện học trong môn Vật lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_phys_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Điện học: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_phys_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Điện học trong môn Vật lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_phys_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Vật lý phần Điện học (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Điện học.'
          },
        ]
      },
      {
        id: '2-chem',
        subject: 'Hóa học',
        title: 'Thử thách Phản ứng Hóa học',
        knowledge: 'Vận dụng các kiến thức quan trọng về Phản ứng Hóa học để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_chem_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Hóa học phần Phản ứng Hóa học (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phản ứng Hóa học.'
          },
          {
            id: 'h2_chem_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Phản ứng Hóa học trong môn Hóa học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_chem_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Phản ứng Hóa học: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_chem_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Phản ứng Hóa học trong môn Hóa học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_chem_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Hóa học phần Phản ứng Hóa học (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phản ứng Hóa học.'
          },
        ]
      },
      {
        id: '2-bio',
        subject: 'Sinh học',
        title: 'Thử thách Di truyền học',
        knowledge: 'Vận dụng các kiến thức quan trọng về Di truyền học để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_bio_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Sinh học phần Di truyền học (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Di truyền học.'
          },
          {
            id: 'h2_bio_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Di truyền học trong môn Sinh học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_bio_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Di truyền học: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_bio_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Di truyền học trong môn Sinh học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_bio_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Sinh học phần Di truyền học (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Di truyền học.'
          },
        ]
      },
      {
        id: '2-hist',
        subject: 'Lịch sử',
        title: 'Thử thách Chiến tranh Thế giới',
        knowledge: 'Vận dụng các kiến thức quan trọng về Chiến tranh Thế giới để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_hist_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Lịch sử phần Chiến tranh Thế giới (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Chiến tranh Thế giới.'
          },
          {
            id: 'h2_hist_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Chiến tranh Thế giới trong môn Lịch sử là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_hist_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Chiến tranh Thế giới: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_hist_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Chiến tranh Thế giới trong môn Lịch sử là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_hist_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Lịch sử phần Chiến tranh Thế giới (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Chiến tranh Thế giới.'
          },
        ]
      },
      {
        id: '2-geo',
        subject: 'Địa lý',
        title: 'Thử thách Khí hậu thế giới',
        knowledge: 'Vận dụng các kiến thức quan trọng về Khí hậu thế giới để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h2_geo_q1',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Địa lý phần Khí hậu thế giới (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Khí hậu thế giới.'
          },
          {
            id: 'h2_geo_q2',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Khí hậu thế giới trong môn Địa lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_geo_q3',
            type: 'fill_blank',
            text: 'Mức độ 2 - Điền từ còn thiếu vào chỗ trống về kiến thức Khí hậu thế giới: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h2_geo_q4',
            type: 'true_false',
            text: 'Mức độ 2 - Nhận định sau về Khí hậu thế giới trong môn Địa lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h2_geo_q5',
            type: 'mcq',
            text: 'Mức độ 2 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Địa lý phần Khí hậu thế giới (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Khí hậu thế giới.'
          },
        ]
      },
    ]
  },
  {
    id: 3,
    title: 'Ngôi nhà 3: Lâu Đài Hoàng Gia',
    rooms: [
      {
        id: '3-math',
        subject: 'Toán',
        title: 'Thử thách Phương trình bậc 2',
        knowledge: 'Vận dụng các kiến thức quan trọng về Phương trình bậc 2 để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_math_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Toán phần Phương trình bậc 2 (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phương trình bậc 2.'
          },
          {
            id: 'h3_math_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Phương trình bậc 2 trong môn Toán là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_math_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Phương trình bậc 2: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_math_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Phương trình bậc 2 trong môn Toán là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_math_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Toán phần Phương trình bậc 2 (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phương trình bậc 2.'
          },
        ]
      },
      {
        id: '3-lit',
        subject: 'Văn',
        title: 'Thử thách Ý nghĩa tác phẩm',
        knowledge: 'Vận dụng các kiến thức quan trọng về Ý nghĩa tác phẩm để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_lit_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Văn phần Ý nghĩa tác phẩm (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Ý nghĩa tác phẩm.'
          },
          {
            id: 'h3_lit_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Ý nghĩa tác phẩm trong môn Văn là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_lit_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Ý nghĩa tác phẩm: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_lit_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Ý nghĩa tác phẩm trong môn Văn là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_lit_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Văn phần Ý nghĩa tác phẩm (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Ý nghĩa tác phẩm.'
          },
        ]
      },
      {
        id: '3-eng',
        subject: 'Anh',
        title: 'Thử thách Phát âm (Pronunciation)',
        knowledge: 'Vận dụng các kiến thức quan trọng về Phát âm (Pronunciation) để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_eng_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Anh phần Phát âm (Pronunciation) (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phát âm (Pronunciation).'
          },
          {
            id: 'h3_eng_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Phát âm (Pronunciation) trong môn Anh là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_eng_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Phát âm (Pronunciation): ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_eng_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Phát âm (Pronunciation) trong môn Anh là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_eng_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Anh phần Phát âm (Pronunciation) (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Phát âm (Pronunciation).'
          },
        ]
      },
      {
        id: '3-phys',
        subject: 'Vật lý',
        title: 'Thử thách Quang học',
        knowledge: 'Vận dụng các kiến thức quan trọng về Quang học để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_phys_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Vật lý phần Quang học (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Quang học.'
          },
          {
            id: 'h3_phys_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Quang học trong môn Vật lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_phys_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Quang học: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_phys_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Quang học trong môn Vật lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_phys_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Vật lý phần Quang học (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Quang học.'
          },
        ]
      },
      {
        id: '3-chem',
        subject: 'Hóa học',
        title: 'Thử thách Axit - Bazơ',
        knowledge: 'Vận dụng các kiến thức quan trọng về Axit - Bazơ để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_chem_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Hóa học phần Axit - Bazơ (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Axit - Bazơ.'
          },
          {
            id: 'h3_chem_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Axit - Bazơ trong môn Hóa học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_chem_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Axit - Bazơ: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_chem_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Axit - Bazơ trong môn Hóa học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_chem_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Hóa học phần Axit - Bazơ (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Axit - Bazơ.'
          },
        ]
      },
      {
        id: '3-bio',
        subject: 'Sinh học',
        title: 'Thử thách Cơ thể người',
        knowledge: 'Vận dụng các kiến thức quan trọng về Cơ thể người để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_bio_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Sinh học phần Cơ thể người (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Cơ thể người.'
          },
          {
            id: 'h3_bio_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Cơ thể người trong môn Sinh học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_bio_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Cơ thể người: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_bio_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Cơ thể người trong môn Sinh học là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_bio_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Sinh học phần Cơ thể người (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Cơ thể người.'
          },
        ]
      },
      {
        id: '3-hist',
        subject: 'Lịch sử',
        title: 'Thử thách Kháng chiến chống Pháp/Mỹ',
        knowledge: 'Vận dụng các kiến thức quan trọng về Kháng chiến chống Pháp/Mỹ để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_hist_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Lịch sử phần Kháng chiến chống Pháp/Mỹ (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Kháng chiến chống Pháp/Mỹ.'
          },
          {
            id: 'h3_hist_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Kháng chiến chống Pháp/Mỹ trong môn Lịch sử là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_hist_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Kháng chiến chống Pháp/Mỹ: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_hist_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Kháng chiến chống Pháp/Mỹ trong môn Lịch sử là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_hist_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Lịch sử phần Kháng chiến chống Pháp/Mỹ (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Kháng chiến chống Pháp/Mỹ.'
          },
        ]
      },
      {
        id: '3-geo',
        subject: 'Địa lý',
        title: 'Thử thách Dân số',
        knowledge: 'Vận dụng các kiến thức quan trọng về Dân số để hoàn thành thử thách.',
        completed: false,
        questions: [
          {
            id: 'h3_geo_q1',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Địa lý phần Dân số (Câu 1).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Dân số.'
          },
          {
            id: 'h3_geo_q2',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Dân số trong môn Địa lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_geo_q3',
            type: 'fill_blank',
            text: 'Mức độ 3 - Điền từ còn thiếu vào chỗ trống về kiến thức Dân số: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },
          {
            id: 'h3_geo_q4',
            type: 'true_false',
            text: 'Mức độ 3 - Nhận định sau về Dân số trong môn Địa lý là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },
          {
            id: 'h3_geo_q5',
            type: 'mcq',
            text: 'Mức độ 3 - Câu hỏi Trắc nghiệm bám sát chương trình học môn Địa lý phần Dân số (Câu 5).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần Dân số.'
          },
        ]
      },
    ]
  },
];
