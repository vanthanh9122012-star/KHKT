const fs = require('fs');
let content = fs.readFileSync('src/data/quizData.js', 'utf8');
content = content.replace(/text":/g, 'text:');
fs.writeFileSync('src/data/quizData.js', content, 'utf8');

let content2 = fs.readFileSync('src/data/townData.js', 'utf8');
content2 = content2.replace(/text":/g, 'text:');
fs.writeFileSync('src/data/townData.js', content2, 'utf8');
console.log('Fixed syntax error!');
