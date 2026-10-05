const fs = require('fs');
let content = fs.readFileSync('src/data/quizData.js', 'utf8');

const moreQuizzes = `
  ,
  {
    id: "q_6_tin",
    title: "Đề kiểm tra Tin học 6 - Máy tính",
    subject: "Tin học",
    questions: [
      { id: "q_6_tin_1", type: "mcq", text: "Phần cứng máy tính bao gồm:", options: ["Chương trình", "Bàn phím, chuột, màn hình", "Hệ điều hành", "Dữ liệu"], correct: "Bàn phím, chuột, màn hình", explanation: "Phần cứng là các thiết bị vật lý." },
      { id: "q_6_tin_2", type: "true_false", text: "CPU là bộ não của máy tính.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Central Processing Unit xử lý mọi dữ liệu." },
      { id: "q_6_tin_3", type: "fill_blank", text: "Thiết bị dùng để nhập văn bản vào máy tính là ...", correct: "bàn phím", explanation: "Keyboard." },
      { id: "q_6_tin_4", type: "essay", text: "Thế nào là phần mềm máy tính?", correct: "Là các chương trình, ứng dụng giúp phần cứng hoạt động và thực hiện tác vụ.", explanation: "Hiểu khái niệm cơ bản." }
    ]
  },
  {
    id: "q_8_su",
    title: "Đề kiểm tra Lịch sử - Địa lí 8 - Châu Á",
    subject: "Lịch sử - Địa lí",
    questions: [
      { id: "q_8_su_1", type: "mcq", text: "Châu Á tiếp giáp với đại dương nào ở phía Đông?", options: ["Thái Bình Dương", "Ấn Độ Dương", "Bắc Băng Dương", "Đại Tây Dương"], correct: "Thái Bình Dương", explanation: "Phía Đông Á giáp TBD." },
      { id: "q_8_su_2", type: "true_false", text: "Châu Á là châu lục có diện tích lớn nhất thế giới.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Diện tích hơn 44 triệu km2." },
      { id: "q_8_su_3", type: "fill_blank", text: "Đỉnh núi cao nhất thế giới nằm ở châu Á là đỉnh ...", correct: "Everest", explanation: "Nằm trên dãy Himalaya." },
      { id: "q_8_su_4", type: "essay", text: "Nêu đặc điểm khí hậu chung của châu Á.", correct: "Khí hậu phân hóa đa dạng (ôn đới, nhiệt đới, gió mùa, lục địa) do lãnh thổ rộng lớn.", explanation: "Tư duy tổng hợp địa lý." }
    ]
  }
];`;

content = content.replace(/\n];/, moreQuizzes);
fs.writeFileSync('src/data/quizData.js', content, 'utf8');
console.log('Appended more quizzes!');
