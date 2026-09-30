const fs = require('fs');

const subjects = [
  { id: 'math', name: 'Toán', topics: ['Đại số cơ bản', 'Hình học không gian', 'Phương trình bậc 2', 'Lượng giác'] },
  { id: 'lit', name: 'Văn', topics: ['Phân tích nhân vật', 'Biện pháp tu từ', 'Ý nghĩa tác phẩm', 'Văn nghị luận'] },
  { id: 'eng', name: 'Anh', topics: ['Ngữ pháp (Tenses)', 'Từ vựng (Vocabulary)', 'Phát âm (Pronunciation)', 'Đọc hiểu'] },
  { id: 'phys', name: 'Vật lý', topics: ['Cơ học (Chuyển động)', 'Điện học', 'Quang học', 'Nhiệt học'] },
  { id: 'chem', name: 'Hóa học', topics: ['Bảng tuần hoàn', 'Phản ứng Hóa học', 'Axit - Bazơ', 'Hữu cơ cơ bản'] },
  { id: 'bio', name: 'Sinh học', topics: ['Tế bào', 'Di truyền học', 'Cơ thể người', 'Sinh thái học'] },
  { id: 'hist', name: 'Lịch sử', topics: ['Lịch sử Việt Nam (Phong kiến)', 'Chiến tranh Thế giới', 'Kháng chiến chống Pháp/Mỹ', 'Văn hóa cổ đại'] },
  { id: 'geo', name: 'Địa lý', topics: ['Địa lý Tự nhiên VN', 'Khí hậu thế giới', 'Dân số', 'Các vùng kinh tế'] }
];

let townData = 'export const INITIAL_TOWN = [\n';
for (let h = 1; h <= 3; h++) {
  const houseTitles = ['Ngôi nhà 1: Căn Nhà Gỗ', 'Ngôi nhà 2: Biệt Thự Hiện Đại', 'Ngôi nhà 3: Lâu Đài Hoàng Gia'];
  townData += `  {
    id: ${h},
    title: '${houseTitles[h-1]}',
    rooms: [\n`;
    
  subjects.forEach((subj, i) => {
    const topic = subj.topics[h-1] || subj.topics[0]; 
    townData += `      {
        id: '${h}-${subj.id}',
        subject: '${subj.name}',
        title: 'Thử thách ${topic}',
        knowledge: 'Vận dụng các kiến thức quan trọng về ${topic} để hoàn thành thử thách.',
        completed: false,
        questions: [\n`;
        
    for (let q = 1; q <= 5; q++) {
      let type = q % 3 === 0 ? 'fill_blank' : (q % 2 === 0 ? 'true_false' : 'mcq');
      if (type === 'mcq') {
        townData += `          {
            id: 'h${h}_${subj.id}_q${q}',
            type: 'mcq',
            text: 'Mức độ ${h} - Câu hỏi Trắc nghiệm bám sát chương trình học môn ${subj.name} phần ${topic} (Câu ${q}).',
            options: ['Khái niệm A', 'Định lý B', 'Quy tắc C', 'Phương pháp D'],
            correct: 'Khái niệm A',
            explanation: 'Dựa vào kiến thức SGK, Khái niệm A là đáp án chính xác cho phần ${topic}.'
          },\n`;
      } else if (type === 'true_false') {
        townData += `          {
            id: 'h${h}_${subj.id}_q${q}',
            type: 'true_false',
            text: 'Mức độ ${h} - Nhận định sau về ${topic} trong môn ${subj.name} là Đúng hay Sai?',
            options: ['Đúng', 'Sai'],
            correct: 'Đúng',
            explanation: 'Giải thích chi tiết: Dựa vào SGK, nhận định này hoàn toàn chính xác.'
          },\n`;
      } else {
        townData += `          {
            id: 'h${h}_${subj.id}_q${q}',
            type: 'fill_blank',
            text: 'Mức độ ${h} - Điền từ còn thiếu vào chỗ trống về kiến thức ${topic}: ...',
            correct: 'đáp án',
            explanation: 'Từ khóa quan trọng cần nhớ trong bài học này là "đáp án".'
          },\n`;
      }
    }
    townData += `        ]\n      },\n`;
  });
  townData += `    ]\n  },\n`;
}
townData += '];\n';
fs.writeFileSync('src/data/townData.js', townData, 'utf8');
console.log('Done generating townData.js!');
