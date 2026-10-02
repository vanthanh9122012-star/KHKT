const fs = require('fs');

const townData = `export const INITIAL_TOWN = [
  {
    id: "house_6",
    title: "Căn Nhà Gỗ - Lớp 6 KNTT",
    rooms: [
      {
        id: "room_6_toan",
        subject: "Toán",
        title: "Chương 1: Tập hợp & Đại số",
        knowledge: "Tính toán nâng cao, luỹ thừa, bài toán thực tế.",
        completed: false,
        questions: [
          { id: "q_6_t_1", type: "mcq", text: "Trong đợt dịch, một nhà máy sản xuất 5^4 khẩu trang mỗi ngày. Ngày thứ 2 họ tăng năng suất gấp đôi. Tổng số khẩu trang sau 2 ngày là bao nhiêu?", options: ["625", "1250", "1875", "2500"], correct: "1875", explanation: "Ngày 1: 5^4 = 625. Ngày 2: 625 x 2 = 1250. Tổng = 625 + 1250 = 1875." },
          { id: "q_6_t_2", type: "true_false", text: "Nếu chia 120 quyển vở và 80 cái bút cho các học sinh sao cho số vở và bút mỗi bạn bằng nhau, số học sinh tối đa nhận được là 40.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Số học sinh tối đa là ƯCLN(120, 80) = 40." },
          { id: "q_6_t_3", type: "fill_blank", text: "Số tự nhiên x thỏa mãn 2^(x+1) - 2^x = 32 là...", correct: "5", explanation: "2^x(2 - 1) = 32 => 2^x = 32 = 2^5 => x = 5." },
          { id: "q_6_t_4", type: "essay", text: "Một mảnh vườn hình chữ nhật có chu vi 100m. Nếu giảm chiều dài đi 5m và tăng chiều rộng 5m thì diện tích tăng thêm 25m2. Trình bày cách tìm diện tích ban đầu.", correct: "Gọi chiều dài là x, rộng là y. Ta có hệ phương trình: x + y = 50 và (x-5)(y+5) - xy = 25. Giải hệ tìm được x, y và tính xy.", explanation: "Áp dụng thiết lập biểu thức đại số từ bài toán thực tế." }
        ]
      },
      {
        id: "room_6_van",
        subject: "Ngữ Văn",
        title: "Bài 1: Truyện Đồng Thoại",
        knowledge: "Phân tích nhân vật, đặc trưng truyện đồng thoại.",
        completed: false,
        questions: [
          { id: "q_6_v_1", type: "mcq", text: "Qua 'Bài học đường đời đầu tiên', tác giả Tô Hoài muốn gửi gắm thông điệp gì lớn nhất?", options: ["Tình yêu thiên nhiên", "Bài học về sự kiêu ngạo, xốc nổi", "Giá trị của tình bạn", "Sự sinh tồn trong thế giới động vật"], correct: "Bài học về sự kiêu ngạo, xốc nổi", explanation: "Sự kiêu ngạo của Dế Mèn đã gián tiếp gây ra cái chết thương tâm cho Dế Choắt." },
          { id: "q_6_v_2", type: "true_false", text: "Truyện đồng thoại là thể loại truyện viết cho thiếu nhi, trong đó loài vật được nhân hóa nhưng vẫn giữ những đặc điểm sinh hoạt tự nhiên.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Đây là định nghĩa chuẩn của truyện đồng thoại." },
          { id: "q_6_v_3", type: "fill_blank", text: "Nhân vật Dế Mèn tự xưng là một chàng dế thanh niên cường tráng, đôi càng ... mẫm bóng.", correct: "mập", explanation: "Trích nguyên văn miêu tả trong tác phẩm." },
          { id: "q_6_v_4", type: "essay", text: "Viết đoạn văn ngắn (5-7 câu) phân tích sự hối hận của Dế Mèn trước mộ Dế Choắt.", correct: "Đoạn văn cần nêu bật cảm xúc ân hận tột cùng, nhận thức về lỗi lầm và sự trưởng thành trong nhận thức của Dế Mèn.", explanation: "Đánh giá khả năng phân tích tâm lý nhân vật." }
        ]
      },
      {
        id: "room_6_anh",
        subject: "Tiếng Anh",
        title: "Unit 1: My New School",
        knowledge: "Present simple, present continuous, school vocabulary.",
        completed: false,
        questions: [
          { id: "q_6_e_1", type: "mcq", text: "Choose the correct sentence:", options: ["He usually play football.", "He usually is playing football.", "He usually plays football.", "He is usually plays football."], correct: "He usually plays football.", explanation: "Present simple with 'usually' requires 's/es' for 3rd person singular." },
          { id: "q_6_e_2", type: "true_false", text: "The word 'equipment' is a countable noun.", options: ["True", "False"], correct: "False", explanation: "'Equipment' is always uncountable in English." },
          { id: "q_6_e_3", type: "fill_blank", text: "Look! The students __________ (play) soccer in the school yard right now.", correct: "are playing", explanation: "Present continuous is used for actions happening right now ('Look!', 'right now')." },
          { id: "q_6_e_4", type: "essay", text: "Write a short paragraph (50 words) describing your favorite subject at school and explain why.", correct: "Check for correct use of present simple, relevant vocabulary, and clear reasons.", explanation: "Assesses writing skills and vocabulary application." }
        ]
      },
      {
        id: "room_6_khtn",
        subject: "KHTN",
        title: "Chương 1: Mở đầu về KHTN",
        knowledge: "Các lĩnh vực KHTN, phương pháp nghiên cứu.",
        completed: false,
        questions: [
          { id: "q_6_k_1", type: "mcq", text: "Phát minh ra vaccine phòng bệnh thuộc lĩnh vực nào của KHTN?", options: ["Vật lý học", "Sinh học", "Thiên văn học", "Hóa học"], correct: "Sinh học", explanation: "Nghiên cứu về cơ thể sống và miễn dịch thuộc Sinh học." },
          { id: "q_6_k_2", type: "true_false", text: "Khoa học tự nhiên chỉ nghiên cứu về các hiện tượng xảy ra trong phòng thí nghiệm.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "KHTN nghiên cứu mọi sự vật, hiện tượng trong tự nhiên, không chỉ trong phòng thí nghiệm." },
          { id: "q_6_k_3", type: "fill_blank", text: "Bước đầu tiên trong phương pháp nghiên cứu Khoa học tự nhiên là quan sát và đặt câu ...", correct: "hỏi", explanation: "Quan sát và đặt câu hỏi là bước khởi đầu để tìm hiểu vấn đề." },
          { id: "q_6_k_4", type: "essay", text: "Lấy một ví dụ thực tế về hiện tượng vật lý trong đời sống và giải thích.", correct: "Học sinh tự chọn hiện tượng (ví dụ: đá tan, nước sôi, cầu vồng) và mô tả nguyên lý cơ bản.", explanation: "Đánh giá khả năng liên hệ thực tế." }
        ]
      },
      {
        id: "room_6_su",
        subject: "Lịch sử - Địa lí",
        title: "Chương 1: Lịch sử và Đời sống",
        knowledge: "Khái niệm lịch sử, các loại tư liệu.",
        completed: false,
        questions: [
          { id: "q_6_s_1", type: "mcq", text: "Trống đồng Đông Sơn thuộc loại tư liệu lịch sử nào?", options: ["Tư liệu truyền miệng", "Tư liệu chữ viết", "Tư liệu hiện vật", "Tư liệu số"], correct: "Tư liệu hiện vật", explanation: "Trống đồng là vật thể vật chất do người xưa để lại." },
          { id: "q_6_s_2", type: "true_false", text: "Lịch sử là tất cả những gì đang diễn ra trong hiện tại và tương lai.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Lịch sử là những gì ĐÃ xảy ra trong quá khứ." },
          { id: "q_6_s_3", type: "fill_blank", text: "Tư liệu ... là những câu chuyện dân gian, truyền thuyết được kể lại từ đời này sang đời khác.", correct: "truyền miệng", explanation: "Định nghĩa về tư liệu truyền miệng." },
          { id: "q_6_s_4", type: "essay", text: "Vì sao chúng ta cần phải học môn Lịch sử?", correct: "Học lịch sử để biết cội nguồn, rút ra bài học quá khứ, trân trọng giá trị hiện tại và dự đoán tương lai.", explanation: "Đánh giá nhận thức về tầm quan trọng của bộ môn." }
        ]
      },
      {
        id: "room_6_gdcd",
        subject: "GDCD",
        title: "Bài 1: Tự hào truyền thống gia đình",
        knowledge: "Giá trị truyền thống, bảo tồn và phát huy.",
        completed: false,
        questions: [
          { id: "q_6_g_1", type: "mcq", text: "Hành động nào thể hiện sự giữ gìn truyền thống tốt đẹp của gia đình?", options: ["Lười biếng ỷ lại", "Nỗ lực học tập nối nghiệp cha ông", "Chê bai nghề truyền thống", "Xóa bỏ các thói quen cũ"], correct: "Nỗ lực học tập nối nghiệp cha ông", explanation: "Đây là thái độ tích cực, tiếp nối giá trị tốt đẹp." },
          { id: "q_6_g_2", type: "true_false", text: "Truyền thống gia đình chỉ bao gồm những phong tục tập quán, không bao gồm đạo đức, lối sống.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Truyền thống gia đình bao gồm cả đạo đức, lối sống, văn hóa, nghề nghiệp..." },
          { id: "q_6_g_3", type: "fill_blank", text: "Tự ... về truyền thống gia đình là động lực để vươn lên trong cuộc sống.", correct: "hào", explanation: "Sự tự hào tạo ra sức mạnh tinh thần to lớn." },
          { id: "q_6_g_4", type: "essay", text: "Em hãy kể một truyền thống tốt đẹp của gia đình em và những việc em đã làm để phát huy truyền thống đó.", correct: "Học sinh nêu được truyền thống (hiếu học, nhân ái, nghề nghiệp...) và hành động cụ thể (chăm học, giúp đỡ người khác...).", explanation: "Liên hệ bản thân và thực tiễn." }
        ]
      },
      {
        id: "room_6_tin",
        subject: "Tin học",
        title: "Chương 1: Thông tin và Dữ liệu",
        knowledge: "Khái niệm thông tin, xử lý thông tin.",
        completed: false,
        questions: [
          { id: "q_6_th_1", type: "mcq", text: "Máy tính xử lý dữ liệu ở dạng nào?", options: ["Văn bản", "Âm thanh", "Dãy bit (0 và 1)", "Hình ảnh"], correct: "Dãy bit (0 và 1)", explanation: "Máy tính chỉ hiểu ngôn ngữ máy là các dãy bit nhị phân." },
          { id: "q_6_th_2", type: "true_false", text: "Quá trình xử lý thông tin của máy tính gồm 3 bước: Nhập -> Xử lý -> Xuất.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Đây là mô hình cơ bản của quá trình xử lý thông tin." },
          { id: "q_6_th_3", type: "fill_blank", text: "Đơn vị đo lượng thông tin nhỏ nhất là ...", correct: "bit", explanation: "Bit là đơn vị cơ bản nhất, nhận giá trị 0 hoặc 1." },
          { id: "q_6_th_4", type: "essay", text: "Hãy phân biệt sự khác nhau giữa Thông tin và Dữ liệu bằng một ví dụ thực tế.", correct: "Dữ liệu là con số thô (ví dụ: 38 độ C). Thông tin là ý nghĩa rút ra (ví dụ: 38 độ C nghĩa là đang bị sốt).", explanation: "Kiểm tra khả năng phân tích khái niệm." }
        ]
      },
      {
        id: "room_6_cn",
        subject: "Công nghệ",
        title: "Bài 1: Nhà ở",
        knowledge: "Vai trò nhà ở, vật liệu xây dựng.",
        completed: false,
        questions: [
          { id: "q_6_cn_1", type: "mcq", text: "Kiến trúc nhà ở nào phổ biến nhất ở vùng đồng bằng Bắc Bộ Việt Nam?", options: ["Nhà rông", "Nhà sàn", "Nhà ba gian", "Nhà chung cư"], correct: "Nhà ba gian", explanation: "Nhà ba gian, hai chái là kiến trúc truyền thống đặc trưng của Bắc Bộ." },
          { id: "q_6_cn_2", type: "true_false", text: "Xi măng là một loại vật liệu xây dựng tự nhiên.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Xi măng là vật liệu nhân tạo do con người sản xuất từ đá vôi, đất sét..." },
          { id: "q_6_cn_3", type: "fill_blank", text: "Nhà ở có vai trò bảo vệ con người khỏi những tác động xấu của ... và môi trường.", correct: "thiên nhiên", explanation: "Che mưa, nắng, bão, thú dữ..." },
          { id: "q_6_cn_4", type: "essay", text: "Nếu thiết kế một ngôi nhà thông minh tiết kiệm năng lượng, em sẽ áp dụng những giải pháp nào?", correct: "Sử dụng pin mặt trời, thiết kế nhiều cửa sổ đón ánh sáng tự nhiên, cảm biến bật/tắt đèn tự động...", explanation: "Khuyến khích tư duy sáng tạo và ứng dụng công nghệ xanh." }
        ]
      }
    ]
  },
  {
    id: "house_7",
    title: "Biệt Thự Cao Cấp - Lớp 7 KNTT",
    rooms: [
      {
        id: "room_7_toan",
        subject: "Toán",
        title: "Chương 1: Số Hữu Tỉ",
        knowledge: "Tính toán số hữu tỉ nâng cao.",
        completed: false,
        questions: [
          { id: "q_7_t_1", type: "mcq", text: "Kết quả của phép tính (-1/2)^3 + 1/8 là:", options: ["0", "1/4", "-1/4", "1"], correct: "0", explanation: "(-1/2)^3 = -1/8. -1/8 + 1/8 = 0." },
          { id: "q_7_t_2", type: "true_false", text: "Mọi số nguyên đều là số hữu tỉ.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Mọi số nguyên a đều có thể viết dưới dạng phân số a/1." },
          { id: "q_7_t_3", type: "fill_blank", text: "Số đối của -5/7 là ...", correct: "5/7", explanation: "Số đối của -a là a." },
          { id: "q_7_t_4", type: "essay", text: "Giải thích tại sao số vô tỉ không thể biểu diễn dưới dạng phân số a/b.", correct: "Số vô tỉ là số thập phân vô hạn không tuần hoàn, trong khi phân số a/b (a,b là số nguyên) luôn tạo ra số thập phân hữu hạn hoặc vô hạn tuần hoàn.", explanation: "Kiểm tra bản chất tập hợp số." }
        ]
      }
    ]
  },
  {
    id: "house_8",
    title: "Lâu Đài Hoàng Gia - Lớp 8 KNTT",
    rooms: [
      {
        id: "room_8_toan",
        subject: "Toán",
        title: "Chương 1: Đa thức",
        knowledge: "Nhân chia đa thức, hằng đẳng thức.",
        completed: false,
        questions: [
          { id: "q_8_t_1", type: "mcq", text: "Khai triển (x + 2)^2 ta được:", options: ["x^2 + 4", "x^2 + 2x + 4", "x^2 + 4x + 4", "x^2 + 4x + 2"], correct: "x^2 + 4x + 4", explanation: "Áp dụng hằng đẳng thức (a+b)^2 = a^2 + 2ab + b^2." },
          { id: "q_8_t_2", type: "true_false", text: "Đa thức x^2 - 4 phân tích thành nhân tử là (x-2)(x+2).", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Hằng đẳng thức hiệu hai bình phương." },
          { id: "q_8_t_3", type: "fill_blank", text: "Hệ số tự do của đa thức P(x) = 3x^2 - 5x + 7 là ...", correct: "7", explanation: "Hệ số tự do là hằng số không đi kèm biến." },
          { id: "q_8_t_4", type: "essay", text: "Ứng dụng hằng đẳng thức để tính nhanh 99^2.", correct: "99^2 = (100 - 1)^2 = 100^2 - 2*100*1 + 1^2 = 10000 - 200 + 1 = 9801.", explanation: "Vận dụng công thức vào tính toán nhanh." }
        ]
      }
    ]
  }
];`;

fs.writeFileSync('src/data/townData.js', townData, 'utf8');
console.log('Town Data rewritten successfully with advanced content!');
