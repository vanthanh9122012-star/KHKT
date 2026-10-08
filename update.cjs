const fs = require('fs');

// Update GamesManager
let gm = fs.readFileSync('src/GamesManager.jsx', 'utf8');
gm = gm.replace(/title: 'Sudoku Toán học'/g, "title: 'Fruit Box'");
gm = gm.replace(/desc: 'Rèn luyện tư duy logic và suy luận toán học qua lưới số 7x7.'/g, "desc: 'Nối hai chữ số liền nhau để trả lời cho câu hỏi toán học.'");
fs.writeFileSync('src/GamesManager.jsx', gm, 'utf8');

// Update FruitBox
let fb = fs.readFileSync('src/FruitBox.jsx', 'utf8');

const newButtonContent = `<button
  key={\`\${r}-\${c}\`}
  disabled={gameState !== 'playing'}
  onClick={() => handleCellClick(r, c)}
  className={\`w-14 h-14 md:w-20 md:h-20 transition-all flex items-center justify-center relative overflow-visible
    \${isSelected(r, c) ? 'transform scale-110 drop-shadow-xl z-10' : 'hover:scale-105 drop-shadow-md hover:drop-shadow-lg'}
  \`}
>
  <Apple 
    className={\`absolute w-[130%] h-[130%] transition-colors \${isSelected(r, c) ? 'text-red-600 fill-red-500' : 'text-red-500 fill-red-400'}\`}
    strokeWidth={1.5}
  />
  <span className="relative z-10 text-2xl md:text-3xl font-black text-white drop-shadow-md">{cell}</span>
</button>`;

// Replace the inner button map
const regexMap = /<button[\s\S]*?<\/button>/m;
fb = fb.replace(regexMap, newButtonContent);

// Remove the bg-amber-700 background from the grid
fb = fb.replace('className="grid grid-cols-6 gap-2 bg-amber-700 p-3 rounded-2xl shadow-inner"', 'className="grid grid-cols-6 gap-3 md:gap-5 p-6 rounded-3xl bg-amber-100/50 border border-amber-200"');

fs.writeFileSync('src/FruitBox.jsx', fb, 'utf8');
console.log('Update successful');
