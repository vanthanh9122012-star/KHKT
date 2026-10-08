const fs = require('fs');
let content = fs.readFileSync('src/ScienceLab.jsx', 'utf8');

const newCombos = `
      'electricity+metal': {
        icon: '💡', name: 'Sự dẫn điện (Vật lý)',
        reaction: 'Kim loại + Điện → Dòng điện + Nhiệt',
        desc: 'Kim loại cho dòng điện đi qua dễ dàng nhờ mạng lưới electron tự do.',
        explain: 'Kim loại có cấu trúc mạng tinh thể chứa vô số các electron tự do. Khi có hiệu điện thế (dòng điện) áp vào, các electron này sẽ di chuyển thành dòng có hướng, giúp kim loại dẫn điện rất tốt. Quá trình các electron va chạm với các ion ở nút mạng tinh thể sẽ sinh ra điện trở, làm kim loại tỏa nhiệt (như nguyên lý của bóng đèn dây tóc hay bếp điện).'
      },
`;

if (content.includes('// New Combinations')) {
  content = content.replace('// New Combinations', '// New Combinations\n' + newCombos);
} else {
  content = content.replace('const combos = {', 'const combos = {\n' + newCombos);
}

fs.writeFileSync('src/ScienceLab.jsx', content, 'utf8');
console.log('Combos added');
