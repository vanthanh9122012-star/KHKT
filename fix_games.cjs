const fs = require('fs');
let content = fs.readFileSync('src/GamesManager.jsx', 'utf8');

content = content.replace("import MathSudoku from './MathSudoku';", "import FruitBox from './FruitBox';");

const oldCard = `    { 
      id: 'sudoku', 
      title: 'Sudoku Toán học', 
      desc: 'Rèn luyện tư duy logic và suy luận toán học qua lưới số 7x7.',
      icon: <Gamepad2 size={32} className="text-sky-500" />,
      color: 'from-sky-100 to-blue-200',
      border: 'border-sky-200'
    },`;

const newCard = `    { 
      id: 'sudoku', 
      title: 'Fruit Box', 
      desc: 'Nối các chữ số gần nhau để giải các bài toán thực tế siêu tốc trong 30s!',
      icon: <Target size={32} className="text-amber-500" />,
      color: 'from-amber-100 to-orange-200',
      border: 'border-amber-200'
    },`;

content = content.replace(oldCard, newCard);
content = content.replace("{activeGame === 'sudoku' && <MathSudoku addReward={addReward} />}", "{activeGame === 'sudoku' && <FruitBox addReward={addReward} />}");

fs.writeFileSync('src/GamesManager.jsx', content, 'utf8');
console.log('Done replacing');
