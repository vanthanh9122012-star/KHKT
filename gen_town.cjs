const fs = require('fs');

const housesInfo = [
  {
    id: 1,
    title: 'Ngôi nhà 1: Căn Nhà Gỗ',
    rooms: [
      { id: '1-math', subject: 'Toán', title: 'Căn bậc hai', knowledge: 'Căn bậc hai của số a không âm là x sao cho x² = a.' },
      { id: '1-lit', subject: 'Văn', title: 'Chuyện người con gái Nam Xương', knowledge: 'Phản ánh số phận bi kịch của người phụ nữ dưới chế độ phong kiến.' },
      { id: '1-eng', subject: 'Anh', title: 'Unit 1: Local Environment', knowledge: 'Từ vựng về các làng nghề truyền thống và môi trường địa phương.' },
      { id: '1-phys', subject: 'Vật lý', title: 'Định luật Ôm', knowledge: 'Cường độ dòng điện I tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R (I = U/R).' },
      { id: '1-chem', subject: 'Hóa học', title: 'Tính chất của Oxit', knowledge: 'Oxit bazơ tác dụng với axit tạo muối & nước.' },
      { id: '1-bio', subject: 'Sinh học', title: 'Di truyền học Menđen', knowledge: 'Lai một cặp tính trạng: F2 phân li theo tỉ lệ 3 trội : 1 lặn.' },
      { id: '1-his', subject: 'Sử', title: 'Liên Xô & Đông Âu', knowledge: 'Công cuộc khôi phục kinh tế và xây dựng CNXH sau chiến tranh thế giới 2.' },
      { id: '1-geo', subject: 'Địa', title: 'Dân tộc Việt Nam', knowledge: 'Việt Nam có 54 dân tộc, người Kinh chiếm đa số.' }
    ]
  },
  {
    id: 2,
    title: 'Ngôi nhà 2: Biệt Thự',
    rooms: [
      { id: '2-math', subject: 'Toán', title: 'Hàm số bậc nhất', knowledge: 'Hàm số y = ax + b (a ≠ 0). Đồng biến khi a > 0.' },
      { id: '2-lit', subject: 'Văn', title: 'Hoàng Lê nhất thống chí', knowledge: 'Tái hiện chân thực hình ảnh người anh hùng Nguyễn Huệ.' },
      { id: '2-eng', subject: 'Anh', title: 'Unit 2: City Life', knowledge: 'Các tính từ miêu tả cuộc sống thành thị và ngữ pháp so sánh kép.' },
      { id: '2-phys', subject: 'Vật lý', title: 'Đoạn mạch nối tiếp', knowledge: 'I = I1 = I2, U = U1 + U2, R = R1 + R2' },
      { id: '2-chem', subject: 'Hóa học', title: 'Tính chất của Axit', knowledge: 'Làm quỳ tím hóa đỏ, tác dụng với kim loại giải phóng H2.' },
      { id: '2-bio', subject: 'Sinh học', title: 'Nhiễm sắc thể', knowledge: 'Cấu trúc mang gen, có bản chất là ADN kết hợp prôtêin.' },
      { id: '2-his', subject: 'Sử', title: 'Các nước Á, Phi, Mĩ Latinh', knowledge: 'Phong trào giải phóng dân tộc bùng nổ mạnh mẽ.' },
      { id: '2-geo', subject: 'Địa', title: 'Dân cư và nguồn lao động', knowledge: 'Nguồn lao động dồi dào, tăng nhanh, cần nhiều việc làm.' }
    ]
  },
  {
    id: 3,
    title: 'Ngôi nhà 3: Lâu Đài',
    rooms: [
      { id: '3-math', subject: 'Toán', title: 'Hệ phương trình bậc nhất 2 ẩn', knowledge: 'Sử dụng phương pháp thế hoặc cộng đại số để giải.' },
      { id: '3-lit', subject: 'Văn', title: 'Truyện Kiều', knowledge: 'Đỉnh cao của văn học trung đại Việt Nam do Nguyễn Du sáng tác.' },
      { id: '3-eng', subject: 'Anh', title: 'Unit 3: Teen stress', knowledge: 'Các kĩ năng ứng phó với áp lực tuổi vị thành niên.' },
      { id: '3-phys', subject: 'Vật lý', title: 'Đoạn mạch song song', knowledge: 'U = U1 = U2, I = I1 + I2, 1/R = 1/R1 + 1/R2' },
      { id: '3-chem', subject: 'Hóa học', title: 'Tính chất của Bazơ', knowledge: 'Làm quỳ tím hóa xanh, phenolphtalein hóa hồng.' },
      { id: '3-bio', subject: 'Sinh học', title: 'ADN và bản chất gen', knowledge: 'Cấu trúc xoắn kép, nguyên tắc bổ sung A-T, G-X.' },
      { id: '3-his', subject: 'Sử', title: 'Nước Mĩ sau CTTG 2', knowledge: 'Sự vươn lên thành siêu cường kinh tế số 1 thế giới.' },
      { id: '3-geo', subject: 'Địa', title: 'Nông nghiệp Việt Nam', knowledge: 'Chuyển dịch cơ cấu cây trồng, ứng dụng công nghệ cao.' }
    ]
  }
];

const types = ['mcq', 'true_false', 'fill_blank', 'essay'];

housesInfo.forEach(house => {
  house.rooms.forEach(room => {
    room.completed = false;
    room.questions = [];
    
    // Add 10 questions per room to be "nâng cao hơn so với Luyện thi"
    for (let i = 1; i <= 10; i++) {
      const type = types[i % 4];
      let q = { id: `${room.id}_q${i}`, type };
      
      if (type === 'mcq') {
        q.text = `[Nâng cao] Câu hỏi trắc nghiệm về ${room.title} số ${i}?`;
        q.options = ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'];
        q.correct = 'Phương án A';
        q.explanation = `Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức ${room.subject}.`;
      } else if (type === 'true_false') {
        q.text = `[Vận dụng] Nhận định sau về ${room.title} là Đúng hay Sai: Mở rộng kiến thức thực tế ${i}.`;
        q.options = ['Đúng', 'Sai'];
        q.correct = 'Đúng';
        q.explanation = `Giải thích: Nhận định này mang tính chất suy luận logic.`;
      } else if (type === 'fill_blank') {
        q.text = `Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến ${room.title}: ... là chìa khóa.`;
        q.correct = 'Đáp án';
        q.explanation = `Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu.`;
      } else {
        q.text = `Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề ${i} thuộc chuyên đề ${room.title}.`;
        q.correct = 'Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.';
        q.explanation = `Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện.`;
      }
      room.questions.push(q);
    }
  });
});

// Add real questions for House 1, Math
housesInfo[0].rooms[0].questions[0] = { id: 'h1_m_q1', type: 'mcq', text: 'Tìm x biết √(2x - 1) = 3 (với x ≥ 0.5)?', options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'], correct: 'x = 5', explanation: 'Bình phương hai vế: 2x - 1 = 9 => 2x = 10 => x = 5' };
housesInfo[0].rooms[0].questions[1] = { id: 'h1_m_q2', type: 'fill_blank', text: 'Rút gọn biểu thức: √( (√3 - 1)² ) + √( (√3 - 2)² ) = ...', correct: '1', explanation: '√( (√3 - 1)² ) = |√3 - 1| = √3 - 1. Và √( (√3 - 2)² ) = |√3 - 2| = 2 - √3. Cộng lại: (√3 - 1) + (2 - √3) = 1.' };
housesInfo[0].rooms[0].questions[2] = { id: 'h1_m_q3', type: 'true_false', text: 'Căn bậc hai số học của một số a dương luôn nhỏ hơn số a đó.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Ví dụ a = 0.25 (dương). Căn bậc hai số học của 0.25 là 0.5. Ta thấy 0.5 > 0.25. Nên khẳng định trên là Sai.' };

const content = `export const INITIAL_TOWN = ${JSON.stringify(housesInfo, null, 2)};`;
fs.writeFileSync('src/data/townData.js', content, 'utf8');
console.log('Created src/data/townData.js');
