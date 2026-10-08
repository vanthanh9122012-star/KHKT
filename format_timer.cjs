const fs = require('fs');
let content = fs.readFileSync('src/FruitBox.jsx', 'utf8');

content = content.replace(
  '<Timer size={24} /> 00:{timeLeft.toString().padStart(2, \'0\')}',
  '<Timer size={24} /> {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, \'0\')}'
);

fs.writeFileSync('src/FruitBox.jsx', content, 'utf8');
console.log('Timer formatted to 1:00');
