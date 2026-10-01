export const QUIZ_DATA = [
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
        text: "Số 0 là ước của mọi số tự nhiên.",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Sai. Số 0 không thể là ước của bất kỳ số nào vì không có phép chia cho 0.",
        subject: "Toán"
      }
    ]
  }
];