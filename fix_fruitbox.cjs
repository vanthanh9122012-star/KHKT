const fs = require('fs');
let content = fs.readFileSync('src/FruitBox.jsx', 'utf8');

const newQuestions = `const QUESTIONS = [
  { q: "Một cửa hàng giảm giá 20% cho áo 500k. Mua 3 cái phải trả bao nhiêu? (k)", a: "1200" },
  { q: "Bể có 500 lít nước, mỗi phút bơm được 25 lít. Cần bao nhiêu phút để bơm đầy 1500 lít?", a: "40" },
  { q: "Dân số một thị trấn là 50000. Mỗi năm tăng 2%. Sau 1 năm dân số là bao nhiêu?", a: "51000" },
  { q: "Tìm x biết: 3x - 15 = 2x + 45. x bằng bao nhiêu?", a: "60" },
  { q: "Diện tích một hình chữ nhật có chu vi 100m, chiều dài gấp 4 lần chiều rộng? (m2)", a: "400" },
  { q: "Một xe lửa dài 150m chạy qua cây cầu 850m mất 50 giây. Vận tốc xe (m/s)?", a: "20" },
  { q: "Tính: (125 x 4) + 1500 / 3 - 500 = ?", a: "500" },
  { q: "Từ 1 đến 100 có bao nhiêu số chia hết cho 5?", a: "20" }
];`;

const oldQuestionsPattern = /const QUESTIONS = \[[\s\S]*?\];/;
content = content.replace(oldQuestionsPattern, newQuestions);

content = content.replace('You Loser', "You ' re Loser");

fs.writeFileSync('src/FruitBox.jsx', content, 'utf8');
console.log('Updated FruitBox successfully.');
