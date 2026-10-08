const fs = require('fs');
let content = fs.readFileSync('src/ScienceLab.jsx', 'utf8');

const newCombos = `
      'acid+vinegar': {
        icon: '🧫', name: 'Hỗn hợp Axit (Không phản ứng)',
        reaction: 'HCl/H2SO4 + CH3COOH → Hỗn hợp axit',
        desc: 'Hai axit kết hợp với nhau không sinh ra phản ứng hóa học mà chỉ hòa trộn vật lý.',
        explain: 'Cả Axit vô cơ (như HCl, H2SO4) và Giấm (Axit hữu cơ CH3COOH) đều mang tính axit (nhường ion H+). Vì chúng có cùng bản chất hóa học, khi trộn lẫn sẽ không xảy ra phản ứng trao đổi tạo ra chất mới. Thay vào đó, chúng chỉ hòa quyện tạo thành một dung dịch hỗn hợp có tính axit mạnh.'
      },
`;

if (content.includes('// New Combinations')) {
  content = content.replace('// New Combinations', '// New Combinations\n' + newCombos);
} else {
  content = content.replace('const combos = {', 'const combos = {\n' + newCombos);
}

fs.writeFileSync('src/ScienceLab.jsx', content, 'utf8');
console.log('Combos added');
