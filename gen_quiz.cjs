const fs = require('fs');

const subjects = ['Toán', 'Văn', 'Anh', 'Sử', 'Địa', 'Vật lý', 'Hóa học', 'Sinh học'];
const types = ['mcq', 'true_false', 'fill_blank', 'essay'];

const quizData = subjects.map((sub, sIdx) => {
  const questions = [];
  for (let i = 1; i <= 20; i++) {
    const type = types[i % 4];
    let q = { id: `q_${sIdx}_${i}`, type };
    if (type === 'mcq') {
      q.text = `Câu hỏi trắc nghiệm môn ${sub} số ${i}?`;
      q.options = ['A', 'B', 'C', 'D'];
      q.correct = 'A';
      q.explanation = `Giải thích: Đáp án đúng là A vì...`;
    } else if (type === 'true_false') {
      q.text = `Nhận định sau về môn ${sub} là Đúng hay Sai: Kiến thức số ${i}.`;
      q.options = ['Đúng', 'Sai'];
      q.correct = 'Đúng';
      q.explanation = `Giải thích: Nhận định này hoàn toàn chính xác.`;
    } else if (type === 'fill_blank') {
      q.text = `Điền từ thích hợp vào chỗ trống (môn ${sub}): ... là khái niệm cơ bản.`;
      q.correct = 'Đáp án';
      q.explanation = `Giải thích: Từ cần điền là Đáp án.`;
    } else {
      q.text = `Hãy trình bày hiểu biết của em về chủ đề ${i} trong môn ${sub}.`;
      q.correct = 'Gợi ý: Trình bày các ý chính...';
      q.explanation = `Giải thích: Cần nêu rõ các định nghĩa, ví dụ minh họa.`;
    }
    questions.push(q);
  }
  return {
    id: sIdx + 1,
    title: `Đề thi tổng hợp môn ${sub}`,
    subject: sub,
    questions
  };
});

// Thêm một số câu hỏi thật
quizData[0].questions[0] = { id: 'q_0_real_1', type: 'mcq', text: 'Nghiệm của phương trình 2x - 4 = 0 là:', options: ['x = 1', 'x = 2', 'x = -2', 'x = 4'], correct: 'x = 2', explanation: '2x - 4 = 0 => 2x = 4 => x = 2' };
quizData[0].questions[1] = { id: 'q_0_real_2', type: 'true_false', text: 'Đường thẳng song song với trục hoành có hệ số góc bằng 0.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Đường thẳng y = ax + b song song với trục hoành (y = 0) thì a = 0.' };
quizData[0].questions[2] = { id: 'q_0_real_3', type: 'fill_blank', text: 'Định lý Vi-et: Tổng 2 nghiệm của phương trình ax² + bx + c = 0 là x₁ + x₂ = ...', correct: '-b/a', explanation: 'Theo định lý Vi-et: x1 + x2 = -b/a, x1 * x2 = c/a' };

const content = `export const QUIZ_DATA = ${JSON.stringify(quizData, null, 2)};`;
if (!fs.existsSync('src/data')) fs.mkdirSync('src/data');
fs.writeFileSync('src/data/quizData.js', content, 'utf8');
console.log('Created quizData.js with 160 questions');
