const fs = require('fs');
let content = fs.readFileSync('src/ScienceLab.jsx', 'utf8');

const newCombos = `
      'water+light': {
        icon: '🌤️', name: 'Sự bay hơi (Vật lý)',
        reaction: 'H2O (lỏng) + Ánh sáng → H2O (khí)',
        desc: 'Ánh sáng mặt trời cung cấp nhiệt lượng làm nước bay hơi từ từ.',
        explain: 'Năng lượng từ bức xạ mặt trời truyền vào các phân tử nước ở lớp bề mặt, làm chúng dao động mạnh và thoát khỏi liên kết lỏng để trở thành hơi nước. Đây là hiện tượng vật lý vì chỉ thay đổi trạng thái chất (lỏng sang khí), không tạo ra chất hóa học mới.'
      },
      'vinegar+light': {
        icon: '📉', name: 'Bay hơi dung dịch (Vật lý)',
        reaction: 'Dung dịch + Ánh sáng → Thể tích giảm',
        desc: 'Ánh sáng làm dung môi (nước) bay hơi, thay đổi thể tích nhưng không thay đổi cấu trúc.',
        explain: 'Khi dung dịch như Giấm (CH3COOH pha loãng) tiếp xúc với ánh sáng, phần nước sẽ bay hơi dần. Điều này làm giảm thể tích và tăng nồng độ dung dịch, nhưng hoàn toàn không làm thay đổi cấu trúc phân tử hay thành phần hóa học của lượng axit axetic bên trong.'
      },
`;

if (content.includes('// New Combinations')) {
  content = content.replace('// New Combinations', '// New Combinations\n' + newCombos);
} else {
  content = content.replace('const combos = {', 'const combos = {\n' + newCombos);
}

fs.writeFileSync('src/ScienceLab.jsx', content, 'utf8');
console.log('Combos added');
