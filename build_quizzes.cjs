const fs = require('fs');

const quizData = `export const QUIZ_DATA = [
  // LỚP 6
  {
    id: "q_6_toan",
    title: "Đề kiểm tra Toán 6 - Chương 1 KNTT",
    subject: "Toán",
    questions: [
      { id: "q_6_toan_1", type: "mcq", text: "Giá trị của biểu thức 2^3 + 3^2 là:", options: ["12", "17", "15", "18"], correct: "17", explanation: "2^3 = 8, 3^2 = 9. 8 + 9 = 17." },
      { id: "q_6_toan_2", type: "true_false", text: "Số 0 là ước của mọi số tự nhiên.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Không có phép chia cho 0." },
      { id: "q_6_toan_3", type: "fill_blank", text: "Số nguyên tố chẵn duy nhất là số ...", correct: "2", explanation: "2 là số nguyên tố chẵn duy nhất." },
      { id: "q_6_toan_4", type: "essay", text: "Tìm ƯCLN của 24 và 36.", correct: "ƯCLN(24, 36) = 12.", explanation: "24 = 2^3 * 3, 36 = 2^2 * 3^2. ƯCLN = 2^2 * 3 = 12." }
    ]
  },
  {
    id: "q_6_van",
    title: "Đề kiểm tra Ngữ Văn 6 - Truyện đồng thoại",
    subject: "Ngữ Văn",
    questions: [
      { id: "q_6_van_1", type: "mcq", text: "Bài học đường đời đầu tiên trích từ tác phẩm nào?", options: ["Dế Mèn phiêu lưu ký", "Đất rừng phương Nam", "Quê nội", "Gió lạnh đầu mùa"], correct: "Dế Mèn phiêu lưu ký", explanation: "Của nhà văn Tô Hoài." },
      { id: "q_6_van_2", type: "true_false", text: "Truyện đồng thoại thường nhân hóa các con vật.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Đặc trưng của thể loại." },
      { id: "q_6_van_3", type: "fill_blank", text: "Tác giả của 'Bài học đường đời đầu tiên' là nhà văn Tô ...", correct: "Hoài", explanation: "Tô Hoài." },
      { id: "q_6_van_4", type: "essay", text: "Nêu ý nghĩa bài học đường đời đầu tiên của Dế Mèn.", correct: "Bài học về thói kiêu căng, xốc nổi gây hậu quả nghiêm trọng.", explanation: "Hiểu thông điệp tác phẩm." }
    ]
  },
  {
    id: "q_6_anh",
    title: "Đề kiểm tra Tiếng Anh 6 - Unit 1",
    subject: "Tiếng Anh",
    questions: [
      { id: "q_6_anh_1", type: "mcq", text: "Choose the correct verb: She __________ football every afternoon.", options: ["play", "plays", "playing", "is playing"], correct: "plays", explanation: "Present simple for routines." },
      { id: "q_6_anh_2", type: "true_false", text: "The word 'uniform' starts with a vowel sound.", options: ["True", "False"], correct: "False", explanation: "It starts with a /j/ consonant sound." },
      { id: "q_6_anh_3", type: "fill_blank", text: "They are __________ their homework now.", correct: "doing", explanation: "Present continuous." },
      { id: "q_6_anh_4", type: "essay", text: "Write 3 sentences about your school.", correct: "My school is big. It has a library. I love my school.", explanation: "Basic sentence construction." }
    ]
  },
  {
    id: "q_6_khtn",
    title: "Đề kiểm tra KHTN 6 - Các phép đo",
    subject: "KHTN",
    questions: [
      { id: "q_6_khtn_1", type: "mcq", text: "Đơn vị đo khối lượng hợp pháp của Việt Nam là:", options: ["Tấn", "Tạ", "Kilogam (kg)", "Gam (g)"], correct: "Kilogam (kg)", explanation: "Theo hệ thống đo lường SI." },
      { id: "q_6_khtn_2", type: "true_false", text: "Để đo thời gian, người ta dùng nhiệt kế.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Nhiệt kế đo nhiệt độ. Đo thời gian dùng đồng hồ." },
      { id: "q_6_khtn_3", type: "fill_blank", text: "GHĐ của thước là chiều dài ... ghi trên thước.", correct: "lớn nhất", explanation: "Giới hạn đo." },
      { id: "q_6_khtn_4", type: "essay", text: "Nêu các bước đo chiều dài một vật bằng thước.", correct: "Ước lượng, chọn thước, đặt thước, đặt mắt, đọc và ghi kết quả.", explanation: "Quy trình đo lường." }
    ]
  },

  // LỚP 7
  {
    id: "q_7_toan",
    title: "Đề kiểm tra Toán 7 - Số hữu tỉ",
    subject: "Toán",
    questions: [
      { id: "q_7_toan_1", type: "mcq", text: "Số nào sau đây không phải là số hữu tỉ?", options: ["-1.5", "2/3", "Căn bậc hai của 2", "0"], correct: "Căn bậc hai của 2", explanation: "Căn 2 là số vô tỉ." },
      { id: "q_7_toan_2", type: "true_false", text: "Tổng của hai số vô tỉ luôn là một số vô tỉ.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Ví dụ: căn 2 + (-căn 2) = 0 (hữu tỉ)." },
      { id: "q_7_toan_3", type: "fill_blank", text: "Số đối của -3/4 là ...", correct: "3/4", explanation: "Đổi dấu." },
      { id: "q_7_toan_4", type: "essay", text: "Thực hiện phép tính: 1/2 + 3/4.", correct: "1/2 + 3/4 = 2/4 + 3/4 = 5/4.", explanation: "Quy đồng mẫu số." }
    ]
  },
  {
    id: "q_7_van",
    title: "Đề kiểm tra Ngữ Văn 7 - Thơ 4 chữ, 5 chữ",
    subject: "Ngữ Văn",
    questions: [
      { id: "q_7_van_1", type: "mcq", text: "Thơ 4 chữ thường có nhịp điệu như thế nào?", options: ["Chậm rãi", "Dồn dập, vui tươi", "Buồn bã", "Hùng tráng"], correct: "Dồn dập, vui tươi", explanation: "Đặc trưng của thể thơ ngắn." },
      { id: "q_7_van_2", type: "true_false", text: "Thơ 5 chữ không bao giờ gieo vần.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Thơ 5 chữ vẫn gieo vần (vần chân, vần lưng)." },
      { id: "q_7_van_3", type: "fill_blank", text: "Bài thơ Đồng dao mùa xuân là của tác giả Nguyễn Khoa ...", correct: "Điềm", explanation: "Tác giả Nguyễn Khoa Điềm." },
      { id: "q_7_van_4", type: "essay", text: "Thế nào là biện pháp tu từ nhân hóa?", correct: "Là gọi hoặc tả con vật, cây cối... bằng những từ ngữ vốn dùng cho con người.", explanation: "Kiến thức Tiếng Việt." }
    ]
  },
  {
    id: "q_7_khtn",
    title: "Đề kiểm tra KHTN 7 - Nguyên tử",
    subject: "KHTN",
    questions: [
      { id: "q_7_khtn_1", type: "mcq", text: "Hạt nhân nguyên tử chứa các loại hạt nào?", options: ["Chỉ proton", "Proton và electron", "Proton và neutron", "Electron và neutron"], correct: "Proton và neutron", explanation: "Hạt nhân gồm proton (+) và neutron (không mang điện)." },
      { id: "q_7_khtn_2", type: "true_false", text: "Khối lượng của electron xấp xỉ bằng khối lượng proton.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Khối lượng electron rất nhỏ, không đáng kể." },
      { id: "q_7_khtn_3", type: "fill_blank", text: "Nguyên tử trung hòa về điện vì số proton bằng số ...", correct: "electron", explanation: "Cân bằng điện tích." },
      { id: "q_7_khtn_4", type: "essay", text: "Nêu định nghĩa về đồng vị.", correct: "Các nguyên tử có cùng số proton nhưng khác số neutron.", explanation: "Khái niệm Hóa học cơ bản." }
    ]
  },

  // LỚP 8
  {
    id: "q_8_toan",
    title: "Đề kiểm tra Toán 8 - Hằng đẳng thức",
    subject: "Toán",
    questions: [
      { id: "q_8_toan_1", type: "mcq", text: "Khai triển (A - B)^2 là:", options: ["A^2 - B^2", "A^2 + 2AB + B^2", "A^2 - 2AB + B^2", "A^2 - AB + B^2"], correct: "A^2 - 2AB + B^2", explanation: "Hằng đẳng thức số 2." },
      { id: "q_8_toan_2", type: "true_false", text: "x^2 - y^2 = (x - y)(x + y)", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Hằng đẳng thức hiệu hai bình phương." },
      { id: "q_8_toan_3", type: "fill_blank", text: "(x + 3)^2 = x^2 + ... + 9. Hệ số còn thiếu là?", correct: "6x", explanation: "2 * x * 3 = 6x." },
      { id: "q_8_toan_4", type: "essay", text: "Rút gọn biểu thức: (x-1)^2 - x(x-2)", correct: "(x^2 - 2x + 1) - (x^2 - 2x) = 1.", explanation: "Thực hiện phép tính đa thức." }
    ]
  },
  {
    id: "q_8_gdcd",
    title: "Đề kiểm tra GDCD 8 - Lẽ phải",
    subject: "GDCD",
    questions: [
      { id: "q_8_gdcd_1", type: "mcq", text: "Biểu hiện của tôn trọng lẽ phải là:", options: ["Theo đám đông", "Bảo vệ cái đúng", "Tránh tranh cãi", "Tự ý làm theo ý mình"], correct: "Bảo vệ cái đúng", explanation: "Bảo vệ chân lý, lợi ích chung." },
      { id: "q_8_gdcd_2", type: "true_false", text: "Thấy bạn quay cóp mà không báo cáo là tôn trọng lẽ phải.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Đó là bao che cái sai." },
      { id: "q_8_gdcd_3", type: "fill_blank", text: "Tôn trọng lẽ phải giúp xã hội trở nên công ... hơn.", correct: "bằng", explanation: "Công bằng, dân chủ." },
      { id: "q_8_gdcd_4", type: "essay", text: "Em sẽ làm gì khi thấy một người vứt rác bừa bãi?", correct: "Nhắc nhở nhẹ nhàng, chỉ nơi vứt rác, tự mình dọn nếu có thể.", explanation: "Xử lý tình huống." }
    ]
  },

  // LỚP 9
  {
    id: "q_9_toan",
    title: "Đề kiểm tra Toán 9 - Căn bậc hai",
    subject: "Toán",
    questions: [
      { id: "q_9_toan_1", type: "mcq", text: "Căn bậc hai số học của 25 là:", options: ["5", "-5", "5 và -5", "25"], correct: "5", explanation: "Căn bậc hai SỐ HỌC luôn không âm." },
      { id: "q_9_toan_2", type: "true_false", text: "Căn thức căn(x - 1) xác định khi x > 0.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Xác định khi x - 1 >= 0 => x >= 1." },
      { id: "q_9_toan_3", type: "fill_blank", text: "Kết quả của căn( (-3)^2 ) là ...", correct: "3", explanation: "Trị tuyệt đối của -3 là 3." },
      { id: "q_9_toan_4", type: "essay", text: "Giải phương trình: căn(x) = 4.", correct: "Điều kiện x >= 0. Bình phương 2 vế: x = 16. Thỏa mãn đk.", explanation: "Phương trình vô tỉ cơ bản." }
    ]
  },
  {
    id: "q_9_van",
    title: "Đề kiểm tra Ngữ Văn 9 - Truyện Kiều",
    subject: "Ngữ Văn",
    questions: [
      { id: "q_9_van_1", type: "mcq", text: "Tác giả của Truyện Kiều là ai?", options: ["Nguyễn Trãi", "Nguyễn Du", "Hồ Xuân Hương", "Nguyễn Đình Chiểu"], correct: "Nguyễn Du", explanation: "Đại thi hào dân tộc." },
      { id: "q_9_van_2", type: "true_false", text: "Truyện Kiều được viết bằng chữ Hán.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Truyện Kiều viết bằng chữ Nôm." },
      { id: "q_9_van_3", type: "fill_blank", text: "Mai cốt cách, tuyết tinh ...", correct: "thần", explanation: "Câu thơ miêu tả chị em Thúy Kiều." },
      { id: "q_9_van_4", type: "essay", text: "Phân tích vẻ đẹp của Thúy Kiều qua câu 'Hoa ghen thua thắm, liễu hờn kém xanh'.", correct: "Vẻ đẹp sắc sảo mặn mà khiến thiên nhiên cũng phải đố kỵ, dự báo cuộc đời trắc trở.", explanation: "Phân tích bút pháp ước lệ." }
    ]
  }
];`;

fs.writeFileSync('src/data/quizData.js', quizData, 'utf8');

// Also update QuizManager.jsx to use KNTT subjects instead of traditional ones to match townData.
let quizManagerContent = fs.readFileSync('src/QuizManager.jsx', 'utf8');
quizManagerContent = quizManagerContent.replace(
  /\['Toán', 'Văn', 'Anh', 'Sử', 'Địa', 'Vật lý', 'Hóa học', 'Sinh học'\]/g,
  "['Toán', 'Ngữ Văn', 'Tiếng Anh', 'KHTN', 'Lịch sử - Địa lí', 'GDCD', 'Tin học', 'Công nghệ']"
);
fs.writeFileSync('src/QuizManager.jsx', quizManagerContent, 'utf8');

console.log('Quiz data rewritten with diverse KNTT questions and UI updated!');
