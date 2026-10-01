const fs = require('fs');

const townData = `export const INITIAL_TOWN = [
  {
    id: "house_6",
    title: "Căn Nhà Gỗ - Lớp 6 (Kết nối tri thức)",
    rooms: [
      {
        id: "room_6_toan",
        subject: "Toán",
        title: "Chương 1: Tập hợp các số tự nhiên",
        knowledge: "Tính toán cơ bản, luỹ thừa, thứ tự thực hiện phép tính.",
        completed: false,
        questions: [
          {
            id: "q_6_toan_1",
            type: "mcq",
            text: "Mẹ đi siêu thị mua 3 kg gạo, mỗi kg giá 20,000 đồng và 2 chai nước mắm, mỗi chai 35,000 đồng. Tổng số tiền mẹ phải trả là bao nhiêu?",
            options: ["100,000 đồng", "130,000 đồng", "110,000 đồng", "150,000 đồng"],
            correct: "130,000 đồng",
            explanation: "Tiền gạo: 3 x 20,000 = 60,000đ. Tiền nước mắm: 2 x 35,000 = 70,000đ. Tổng: 60,000 + 70,000 = 130,000đ.",
            subject: "Toán"
          },
          {
            id: "q_6_toan_2",
            type: "true_false",
            text": "Tập hợp các chữ cái trong từ 'TOÁN HỌC' gồm 7 phần tử: T, O, Á, N, H, Ọ, C.",
            options: ["Đúng", "Sai"],
            correct: "Sai",
            explanation: "Sai vì chữ O lặp lại, tập hợp chỉ tính mỗi phần tử 1 lần. Tập hợp đúng là {T, O, Á, N, H, C} (6 phần tử).",
            subject: "Toán"
          },
          {
            id: "q_6_toan_3",
            type: "mcq",
            text": "Trong một đợt quyên góp sách, khối 6 thu được 4 lũy thừa 3 (4^3) quyển sách. Lớp 6A đóng góp 24 quyển. Số sách của các lớp còn lại là:",
            options: ["40 quyển", "64 quyển", "48 quyển", "88 quyển"],
            correct: "40 quyển",
            explanation: "4^3 = 4 x 4 x 4 = 64 quyển. Số sách các lớp còn lại = 64 - 24 = 40 quyển.",
            subject: "Toán"
          }
        ]
      },
      {
        id: "room_6_van",
        subject: "Ngữ Văn",
        title: "Bài 1: Tôi và các bạn",
        knowledge: "Bài học đường đời đầu tiên, truyền thuyết, cổ tích.",
        completed: false,
        questions: [
          {
            id: "q_6_van_1",
            type: "mcq",
            text": "Trong đoạn trích 'Bài học đường đời đầu tiên', nhân vật Dế Mèn đã gây ra hậu quả nghiêm trọng nào vì sự kiêu ngạo của mình?",
            options: ["Làm gãy cánh Dế Choắt", "Trêu chị Cốc dẫn đến cái chết của Dế Choắt", "Bị bọn trẻ con bắt nhốt", "Bỏ nhà đi bụi"],
            correct: "Trêu chị Cốc dẫn đến cái chết của Dế Choắt",
            explanation: "Dế Mèn vì thói huênh hoang đã trêu chị Cốc rồi lủi vào hang, khiến Dế Choắt bị chị Cốc hiểu lầm và mổ đến chết.",
            subject: "Ngữ Văn"
          },
          {
            id: "q_6_van_2",
            type: "true_false",
            text": "Truyền thuyết 'Thánh Gióng' phản ánh ước mơ của nhân dân ta về người anh hùng chống giặc ngoại xâm với sức mạnh thần kỳ.",
            options: ["Đúng", "Sai"],
            correct: "Đúng",
            explanation: "Thánh Gióng là biểu tượng của tinh thần yêu nước và sức mạnh chống ngoại xâm của dân tộc ta thời cổ đại.",
            subject: "Ngữ Văn"
          }
        ]
      }
    ]
  },
  {
    id: "house_7",
    title: "Biệt Thự - Lớp 7 (Kết nối tri thức)",
    rooms: [
      {
        id: "room_7_khtn",
        subject: "KHTN",
        title: "Chương 1: Nguyên tử - Nguyên tố hóa học",
        knowledge: "Cấu tạo nguyên tử, khối lượng nguyên tử.",
        completed: false,
        questions: [
          {
            id: "q_7_khtn_1",
            type: "mcq",
            text": "Thành phần nào cấu tạo nên hạt nhân nguyên tử?",
            options: ["Proton và Electron", "Proton và Neutron", "Electron và Neutron", "Chỉ có Proton"],
            correct: "Proton và Neutron",
            explanation: "Hạt nhân nguyên tử nằm ở tâm, cấu tạo bởi hạt proton (mang điện dương) và neutron (không mang điện).",
            subject: "KHTN"
          },
          {
            id: "q_7_khtn_2",
            type: "true_false",
            text": "Khối lượng của hạt electron gần bằng khối lượng của hạt proton.",
            options: ["Đúng", "Sai"],
            correct: "Sai",
            explanation: "Sai. Khối lượng electron rất nhỏ, chỉ bằng khoảng 1/1836 khối lượng proton. Do đó khối lượng nguyên tử hầu như tập trung ở hạt nhân.",
            subject: "KHTN"
          }
        ]
      }
    ]
  }
];`;

fs.writeFileSync('src/data/townData.js', townData, 'utf8');

const quizData = `export const QUIZ_DATA = [
  {
    id: 1,
    title: "Đề kiểm tra Toán 6 - Chương 1 KNTT",
    subject: "Toán",
    questions: [
      {
        id: "qz_1_1",
        type: "mcq",
        text: "Một khu vườn hình chữ nhật có chiều dài 20m, chiều rộng 15m. Người ta làm một lối đi xung quanh vườn rộng 1m. Diện tích lối đi là bao nhiêu?",
        options: ["66 m2", "300 m2", "70 m2", "34 m2"],
        correct: "66 m2",
        explanation: "Diện tích vườn = 20x15 = 300. Kích thước vườn còn lại bên trong: (20-2)x(15-2) = 18x13 = 234. Diện tích lối đi = 300 - 234 = 66 m2.",
        subject: "Toán"
      },
      {
        id: "qz_1_2",
        type: "true_false",
        text": "Số 0 là ước của mọi số tự nhiên.",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Sai. Số 0 không thể là ước của bất kỳ số nào vì không có phép chia cho 0.",
        subject: "Toán"
      }
    ]
  }
];`;

fs.writeFileSync('src/data/quizData.js', quizData, 'utf8');
console.log("Rewrote data files with real content.");
