// Kho dữ liệu tóm tắt Lý Thuyết & Trọng Tâm Kiến Thức cho các chương học
// Bám sát bộ sách Kết nối tri thức với cuộc sống (Lớp 6 - 9)

export const CHAPTER_THEORIES = {
  // ==========================================
  // TOÁN LỚP 6
  // ==========================================
  "toan6_ch1": {
    subject: "Toán",
    title: "Toán 6 - Chương 1: Tập hợp các số tự nhiên",
    summary: "Học về tập hợp các số tự nhiên N và N*, cách biểu diễn tập hợp, các phép toán cộng trừ nhân chia và lũy thừa với số mũ tự nhiên.",
    sections: [
      {
        heading: "1. Khái niệm tập hợp & Kí hiệu",
        content: "• Tập hợp số tự nhiên: N = {0, 1, 2, 3, ...}\n• Tập hợp số tự nhiên khác 0: N* = {1, 2, 3, ...} (không chứa số 0).\n• Kí hiệu: a ∈ A (a thuộc A), b ∉ A (b không thuộc A).\n• Hai cách cho một tập hợp: Liệt kê các phần tử hoặc Chỉ ra tính chất đặc trưng."
      },
      {
        heading: "2. Phép tính lũy thừa với số mũ tự nhiên",
        content: "• Lũy thừa bậc n của a: a^n = a · a · ... · a (n thừa số a).\n• Nhân hai lũy thừa cùng cơ số: a^m · a^n = a^(m+n)\n• Chia hai lũy thừa cùng cơ số (a ≠ 0, m ≥ n): a^m : a^n = a^(m-n)\n• Quy ước: a^1 = a; a^0 = 1 (với a ≠ 0)."
      },
      {
        heading: "3. Thứ tự thực hiện các phép tính",
        content: "• Biểu thức không có ngoặc: Lũy thừa → Nhân và chia → Cộng và trừ (từ trái sang phải).\n• Biểu thức có ngoặc: Trong ngoặc tròn ( ) → Trong ngoặc vuông [ ] → Trong ngoặc nhọn { }."
      },
      {
        heading: "4. Bẫy tư duy & Lỗi sai thường gặp",
        content: "⚠️ Lỗi 1: Nhầm 0 ∈ N*. Nhớ rằng N* bắt đầu từ 1, không có số 0!\n⚠️ Lỗi 2: Tính sai lũy thừa: 2^3 = 8 (chứ không phải 2 × 3 = 6).\n⚠️ Lỗi 3: Thực hiện phép nhân trước phép chia khi cả hai cùng cấp: 12 : 2 × 3 phải tính 12 : 2 = 6 rồi nhân 3 = 18."
      }
    ],
    aiPrompts: [
      "Giải thích phân biệt N và N* bằng ví dụ đời sống",
      "Cách nhớ nhanh thứ tự thực hiện phép tính trong ngoặc",
      "Làm sao để tính nhanh các lũy thừa cơ số 2 và cơ số 10?"
    ]
  },

  "toan6_ch2": {
    subject: "Toán",
    title: "Toán 6 - Chương 2: Tính chia hết trong tập hợp các số tự nhiên",
    summary: "Nắm vững quan hệ chia hết, dấu hiệu chia hết cho 2, 3, 5, 9; số nguyên tố, hợp số, ƯCLN và BCNN.",
    sections: [
      {
        heading: "1. Quan hệ chia hết & Tính chất chia hết của một tổng",
        content: "• Số tự nhiên a chia hết cho số tự nhiên b khác 0 nếu có số tự nhiên q sao cho a = b · q.\n• Nếu tất cả các số hạng của tổng chia hết cho m thì tổng chia hết cho m.\n• Nếu chỉ có đúng một số hạng không chia hết cho m, các số hạng còn lại đều chia hết thì tổng KHÔNG chia hết cho m."
      },
      {
        heading: "2. Dấu hiệu chia hết",
        content: "• Chia hết cho 2: Chữ số tận cùng là 0, 2, 4, 6, 8.\n• Chia hết cho 5: Chữ số tận cùng là 0 hoặc 5.\n• Chia hết cho 3: Tổng các chữ số chia hết cho 3.\n• Chia hết cho 9: Tổng các chữ số chia hết cho 9."
      },
      {
        heading: "3. Số nguyên tố, Hợp số, ƯCLN và BCNN",
        content: "• Số nguyên tố: Lớn hơn 1, chỉ có hai ước là 1 và chính nó (2, 3, 5, 7, 11...).\n• Số 0 và 1 không phải là số nguyên tố cũng không phải hợp số. Số 2 là số nguyên tố chẵn duy nhất!\n• ƯCLN: Lập tích các thừa số nguyên tố CHUNG với số mũ NHỎ NHẤT.\n• BCNN: Lập tích các thừa số nguyên tố CHUNG và RIÊNG với số mũ LỚN NHẤT."
      },
      {
        heading: "4. Lưu ý & Bẫy kiểm tra",
        content: "⚠️ Dấu hiệu chia hết cho 3 và 9 phụ thuộc vào TỔNG các chữ số, không nhìn chữ số tận cùng!\n⚠️ Khi tìm ƯCLN chỉ chọn thừa số CHUNG với số mũ nhỏ nhất, còn BCNN chọn cả thừa số CHUNG lẫn RIÊNG với số mũ lớn nhất."
      }
    ],
    aiPrompts: [
      "Mẹo nhận biết nhanh số nguyên tố nhỏ hơn 100",
      "Cách phân biệt khi nào bài toán thực tế dùng ƯCLN, khi nào dùng BCNN?",
      "Dấu hiệu chia hết cho 4 và cho 25 có gì đặc biệt?"
    ]
  },

  "toan6_ch3": {
    subject: "Toán",
    title: "Toán 6 - Chương 3: Số nguyên",
    summary: "Làm quen với tập hợp số nguyên Z, quy tắc cộng trừ nhân chia số nguyên, quy tắc dấu ngoặc và bội ước của số nguyên.",
    sections: [
      {
        heading: "1. Tập hợp số nguyên Z",
        content: "• Tập hợp Z gồm: các số nguyên âm (..., -3, -2, -1), số 0 và các số nguyên dương (1, 2, 3, ...).\n• Số đối của a là -a. Số đối của -a là a. Số đối của 0 là 0.\n• Trên trục số nằm ngang, điểm biểu diễn số nhỏ hơn nằm bên trái điểm biểu diễn số lớn hơn."
      },
      {
        heading: "2. Các phép tính với số nguyên",
        content: "• Cộng hai số nguyên cùng dấu: Cộng phần tự nhiên rồi đặt dấu chung.\n• Cộng hai số nguyên khác dấu: Lấy số lớn hơn trừ số bé hơn rồi đặt dấu của số có phần tự nhiên lớn hơn.\n• Phép trừ: a - b = a + (-b) (trừ là cộng với số đối).\n• Phép nhân & chia: Cùng dấu ra DƯƠNG (+), khác dấu ra ÂM (-)."
      },
      {
        heading: "3. Quy tắc dấu ngoặc",
        content: "• Khi bỏ ngoặc có dấu '+' đằng trước: Giữ nguyên dấu các số hạng: +(a - b + c) = a - b + c.\n• Khi bỏ ngoặc có dấu '-' đằng trước: Đổi dấu tất cả số hạng bên trong: -(a - b + c) = -a + b - c."
      },
      {
        heading: "4. Bẫy kiểm tra phổ biến",
        content: "⚠️ Quên đổi dấu khi trước ngoặc là dấu '-': -(x - 5) phải là -x + 5, học sinh hay ghi nhầm thành -x - 5!\n⚠️ Nhân hai số âm ra số dương: (-3) · (-4) = +12."
      }
    ],
    aiPrompts: [
      "Quy tắc chuyển vế đổi dấu trong giải phương trình số nguyên",
      "Ý nghĩa của số âm trong cuộc sống thực tế",
      "Cách cộng trừ nhẩm số nguyên nhanh không bao giờ nhầm dấu"
    ]
  },

  // ==========================================
  // NGỮ VĂN LỚP 6
  // ==========================================
  "van6_ch1": {
    subject: "Ngữ Văn",
    title: "Ngữ Văn 6 - Chương 1: Tôi và các bạn",
    summary: "Đặc trưng thể loại truyện đồng thoại qua kiệt tác Dế Mèn phiêu lưu ký; nghệ thuật nhân hóa và bài học ứng xử trong cuộc sống.",
    sections: [
      {
        heading: "1. Đặc trưng thể loại Truyện đồng thoại",
        content: "• Truyện viết cho thiếu nhi, có nhân vật là loài vật hoặc đồ vật được nhân hóa.\n• Nhân vật vừa mang tập tính tự nhiên của loài vật, vừa mang tâm lý, hành động và tiếng nói của con người."
      },
      {
        heading: "2. Tác phẩm trọng tâm: Bài học đường đời đầu tiên (Tô Hoài)",
        content: "• Nhân vật Dế Mèn: Ngoại hình cường tráng, khỏe mạnh nhưng tính tình kiêu căng, ngạo mạn, hung hăng, coi thường người khác.\n• Sự việc bi kịch: Trêu chị Cốc dẫn đến cái chết oan uổng của Dế Choắt.\n• Bài học đường đời: Bài học về thói kiêu ngạo, thói hung hăng coi thường người khác; biết ân hận và hướng thiện."
      },
      {
        heading: "3. Tiếng Việt: Từ đơn, từ phức và Biện pháp tu từ",
        content: "• Từ đơn: Chỉ gồm một tiếng (ví dụ: bàn, ghế, đi, chạy).\n• Từ phức: Gồm hai tiếng trở lên, chia thành Từ ghép (các tiếng có quan hệ về nghĩa) và Từ láy (các tiếng có quan hệ láy âm).\n• Biện pháp so sánh và nhân hóa giúp miêu tả sinh động, gợi hình gợi cảm."
      }
    ],
    aiPrompts: [
      "Phân tích tâm lý biến đổi của Dế Mèn trước và sau cái chết của Dế Choắt",
      "Cách phân biệt từ ghép và từ láy trong các trường hợp khó",
      "Bài học sâu sắc nhất rút ra cho bản thân em từ câu chuyện"
    ]
  },

  // ==========================================
  // TIẾNG ANH LỚP 6
  // ==========================================
  "anh6_c1": {
    subject: "Tiếng Anh",
    title: "Tiếng Anh 6 - Unit 1: My New School",
    summary: "Vocabulary about school subjects and facilities, Present Simple tense and adverbs of frequency.",
    sections: [
      {
        heading: "1. Core Vocabulary (Từ vựng trọng tâm)",
        content: "• School things: calculator, compass, pencil sharpener, textbook, uniform.\n• School types & rooms: boarding school, library, science lab, computer room, playground.\n• Collocations: play (football/music), do (homework/judo), have (lunch/lessons), study (English/maths)."
      },
      {
        heading: "2. Grammar: Present Simple (Thì Hiện Tại Đơn)",
        content: "• With Verb 'To Be': S + am/is/are + O (He is a student. They are friendly).\n• With Ordinary Verbs:\n  (+) S + V(s/es): I/You/We/They + V_inf; He/She/It + V_s/es.\n  (-) S + do/does not + V_inf.\n  (?) Do/Does + S + V_inf?\n• Spelling rule for -es: Verbs ending in -ch, -sh, -s, -x, -z, -o (watch → watches, go → goes)."
      },
      {
        heading: "3. Adverbs of Frequency (Trạng từ chỉ tần suất)",
        content: "• Always (100%), Usually (80%), Often (60%), Sometimes (30%), Rarely (10%), Never (0%).\n• Vị trí: Đứng TRƯỚC động từ thường và đứng SAU động từ 'to be' (I usually play soccer; She is always on time)."
      }
    ],
    aiPrompts: [
      "Cách phân biệt khi nào dùng 'play', 'do', 'have', 'study' với danh từ trường học",
      "Quy tắc phát âm đuôi -s/es chuẩn quốc tế",
      "Luyện đặt 5 câu miêu tả ngôi trường mơ ước bằng thì Hiện tại đơn"
    ]
  },

  // ==========================================
  // KHTN LỚP 6
  // ==========================================
  "khtn6_c1": {
    subject: "KHTN",
    title: "KHTN 6 - Chương 1: Mở đầu về khoa học tự nhiên",
    summary: "Tìm hiểu các lĩnh vực khoa học tự nhiên, vật sống và vật không sống, quy tắc an toàn phòng thí nghiệm và dụng cụ đo lường.",
    sections: [
      {
        heading: "1. Các lĩnh vực Khoa học tự nhiên",
        content: "• Vật lí học: Nghiên cứu về vật chất, quy luật vận động, lực, năng lượng và sự biến đổi năng lượng.\n• Hóa học: Nghiên cứu về chất và sự biến đổi của chất.\n• Sinh học: Nghiên cứu về các vật sống, mối quan hệ giữa chúng với nhau và với môi trường.\n• Thiên văn học: Nghiên cứu về quy luật vận động của các thiên thể trên bầu trời.\n• Khoa học Trái Đất: Nghiên cứu về Trái Đất và khí quyển của nó."
      },
      {
        heading: "2. Vật sống và vật không sống",
        content: "• Vật sống (vật hữu sinh): Có các đặc trưng sống như trao đổi chất, lớn lên, sinh sản, cảm ứng, vận động (Ví dụ: con người, cây lúa, vi khuẩn).\n• Vật không sống (vật vô sinh): Không có các đặc trưng sống kể trên (Ví dụ: viên đá, cái bàn, nước)."
      },
      {
        heading: "3. Quy tắc an toàn & Đo lường",
        content: "• Tuyệt đối không tự ý làm thí nghiệm khi chưa có hướng dẫn của giáo viên.\n• Không nếm hoặc ngửi trực tiếp hóa chất.\n• Dụng cụ đo: Thước (đo chiều dài), Cân (đo khối lượng), Đồng hồ bấm giây (đo thời gian), Nhiệt kế (đo nhiệt độ), Kính hiển vi quang học (quan sát vật có kích thước siêu nhỏ như tế bào)."
      }
    ],
    aiPrompts: [
      "Giải thích vì sao vi khuẩn là vật sống còn chiếc xe máy thì không?",
      "Các bước sử dụng kính hiển vi quang học đúng chuẩn phòng thí nghiệm",
      "Làm sao xác định GHĐ (giới hạn đo) và ĐCNN (độ chia nhỏ nhất) của thước đo?"
    ]
  }
};

// Hàm sinh tóm tắt lý thuyết thông minh cho bất kỳ bài quiz nào
export const getTheoryForQuiz = (quiz) => {
  if (!quiz) return null;

  // Nếu đã có cấu hình sẵn trong từ điển
  if (CHAPTER_THEORIES[quiz.id]) {
    return CHAPTER_THEORIES[quiz.id];
  }

  // Tự động phân tích và sinh bộ khung lý thuyết bám sát tiêu đề và câu hỏi
  const subject = quiz.subject || 'Tổng hợp';
  const title = quiz.title || 'Bài tập rèn luyện';
  const grade = quiz.grade ? `Lớp ${quiz.grade}` : '';
  const chapter = quiz.chapter ? `Chương ${quiz.chapter}` : '';

  // Trích xuất các ý chính từ explanations của các câu hỏi
  const keyPoints = [];
  if (Array.isArray(quiz.questions)) {
    quiz.questions.forEach(q => {
      if (q.explanation && q.explanation.length > 10 && keyPoints.length < 5) {
        keyPoints.push(q.explanation);
      }
    });
  }

  return {
    subject,
    title,
    summary: `Hệ thống kiến thức trọng tâm chuẩn chương trình Kết nối tri thức cho chuyên đề: ${title}.`,
    sections: [
      {
        heading: `1. Tổng quan kiến thức ${subject} ${grade} - ${chapter}`,
        content: `Chuyên đề "${title}" tập trung vào việc hình thành và củng cố các kỹ năng tư duy cốt lõi của môn ${subject}. Học sinh cần nắm chắc các định nghĩa nền tảng trước khi vận dụng vào bài tập.`
      },
      {
        heading: "2. Các khái niệm & Quy tắc trọng tâm",
        content: keyPoints.length > 0 
          ? keyPoints.map((pt, i) => `• Điểm cốt lõi ${i + 1}: ${pt}`).join('\n')
          : `• Nắm vững các định lí, tính chất và mối quan hệ logic trong bài học.\n• Đọc kĩ đề bài, xác định rõ giả thiết và yêu cầu cần giải quyết.`
      },
      {
        heading: "3. Phương pháp giải bài tập hiệu quả",
        content: `• Bước 1: Đọc kỹ yêu cầu câu hỏi, gạch chân từ khóa quan trọng.\n• Bước 2: Nhớ lại công thức hoặc quy tắc tương ứng đã học.\n• Bước 3: Phân tích các phương án lựa chọn hoặc thực hiện phép tính cẩn thận từng bước.\n• Bước 4: Kiểm tra lại tính hợp lý của kết quả trước khi đưa ra câu trả lời cuối cùng.`
      },
      {
        heading: "4. Lời khuyên ôn tập từ Trợ lý AI",
        content: `💡 Hãy tự đặt câu hỏi "Vì sao công thức này lại đúng?" thay vì chỉ học vẹt. Việc làm bài tập đa dạng (Trắc nghiệm, Điền khuyết, Đúng/Sai, Tự luận) sẽ giúp não bộ ghi nhớ kiến thức sâu và lâu bền hơn gấp 3 lần!`
      }
    ],
    aiPrompts: [
      `Tóm tắt nhanh 3 điều quan trọng nhất em cần nhớ trong bài "${title}"`,
      `Cho em một ví dụ bài tập thực tế thường gặp trong chương này`,
      `Chỉ ra những lỗi sai phổ biến mà học sinh hay mắc phải ở chuyên đề này`
    ]
  };
};
