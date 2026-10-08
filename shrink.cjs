const fs = require('fs');
let content = fs.readFileSync('src/FruitBox.jsx', 'utf8');

const shuffleFunc = `
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
`;

content = content.replace('const GRID_SIZE = 6;', 'const GRID_SIZE = 10;\n' + shuffleFunc);

content = content.replace(
  'const [pendingQuestions, setPendingQuestions] = useState([...QUESTIONS]);',
  'const [pendingQuestions, setPendingQuestions] = useState(() => shuffleArray(QUESTIONS));'
);

content = content.replace(
  'setPendingQuestions([...QUESTIONS]);',
  'setPendingQuestions(shuffleArray(QUESTIONS));'
);

content = content.replace(
  'className="grid grid-cols-6 gap-3 md:gap-5 p-6 rounded-3xl bg-amber-100/50 border border-amber-200"',
  'className="grid grid-cols-10 gap-1 sm:gap-2 p-3 sm:p-5 rounded-3xl bg-amber-100/50 border border-amber-200 w-full max-w-full overflow-hidden"'
);

content = content.replace(
  'className={`w-14 h-14 md:w-20 md:h-20 transition-all flex items-center justify-center relative overflow-visible focus:outline-none',
  'className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all flex items-center justify-center relative overflow-visible focus:outline-none'
);

content = content.replace(
  'className="relative z-10 text-2xl md:text-3xl font-black text-white drop-shadow-md"',
  'className="relative z-10 text-sm sm:text-base md:text-xl font-black text-white drop-shadow-md"'
);

fs.writeFileSync('src/FruitBox.jsx', content, 'utf8');
console.log('Done');
