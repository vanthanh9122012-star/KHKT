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
          { id: "q_6_t_1", type: "mcq", text: "Trong đợt dịch, nhà máy sản xuất 5^4 khẩu trang/ngày. Ngày 2 tăng năng suất gấp đôi. Tổng khẩu trang sau 2 ngày?", options: ["625", "1250", "1875", "2500"], correct: "1875", explanation: "Ngày 1: 5^4 = 625. Ngày 2: 625 x 2 = 1250. Tổng = 1875." },
          { id: "q_6_t_2", type: "true_false", text: "Nếu chia 120 quyển vở và 80 cái bút cho các học sinh sao cho đều nhau, số học sinh tối đa là 40.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "ƯCLN(120, 80) = 40." },
          { id: "q_6_t_3", type: "fill_blank", text: "Số tự nhiên x thỏa mãn 2^(x+1) - 2^x = 32 là...", correct: "5", explanation: "2^x = 32 => x = 5." },
          { id: "q_6_t_4", type: "essay", text: "Chu vi vườn là 100m. Giảm dài 5m, tăng rộng 5m thì diện tích tăng 25m2. Tìm diện tích ban đầu.", correct: "Gọi dài x, rộng y. x+y=50; (x-5)(y+5) - xy = 25. Giải được x=30, y=20. Diện tích = 600m2.", explanation: "Áp dụng thiết lập biểu thức đại số." }
        ]
      },
      {
        id: "room_6_van",
        subject: "Ngữ Văn",
        title: "Bài 1: Truyện Đồng Thoại",
        knowledge: "Phân tích nhân vật, đặc trưng truyện.",
        completed: false,
        questions: [
          { id: "q_6_v_1", type: "mcq", text: "Thông điệp lớn nhất qua 'Bài học đường đời đầu tiên' là gì?", options: ["Tình yêu thiên nhiên", "Bài học về sự kiêu ngạo, xốc nổi", "Giá trị của tình bạn", "Sinh tồn"], correct: "Bài học về sự kiêu ngạo, xốc nổi", explanation: "Sự kiêu ngạo của Dế Mèn gây ra cái chết của Dế Choắt." },
          { id: "q_6_v_2", type: "true_false", text: "Truyện đồng thoại có nhân vật là loài vật được nhân hóa nhưng giữ đặc điểm tự nhiên.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Định nghĩa chuẩn của truyện đồng thoại." },
          { id: "q_6_v_3", type: "fill_blank", text: "Dế Mèn tự xưng là chàng dế thanh niên cường tráng, đôi càng ... mẫm bóng.", correct: "mập", explanation: "Miêu tả trong tác phẩm." },
          { id: "q_6_v_4", type: "essay", text: "Viết đoạn văn ngắn phân tích sự hối hận của Dế Mèn trước mộ Dế Choắt.", correct: "Đoạn văn nêu bật cảm xúc ân hận tột cùng, nhận thức lỗi lầm và sự trưởng thành của Dế Mèn.", explanation: "Đánh giá phân tích tâm lý nhân vật." }
        ]
      },
      {
        id: "room_6_anh",
        subject: "Tiếng Anh",
        title: "Unit 1: My New School",
        knowledge: "Present simple, present continuous.",
        completed: false,
        questions: [
          { id: "q_6_e_1", type: "mcq", text: "Choose the correct sentence:", options: ["He usually play football.", "He usually is playing football.", "He usually plays football.", "He plays usually football."], correct: "He usually plays football.", explanation: "'Usually' + V-s/es for he/she/it." },
          { id: "q_6_e_2", type: "true_false", text: "The word 'equipment' is a countable noun.", options: ["True", "False"], correct: "False", explanation: "'Equipment' is uncountable." },
          { id: "q_6_e_3", type: "fill_blank", text: "Look! The students __________ (play) soccer right now.", correct: "are playing", explanation: "Present continuous for actions happening now." },
          { id: "q_6_e_4", type: "essay", text: "Write 50 words about your favorite subject.", correct: "Correct grammar, vocab, clear reasons.", explanation: "Assesses writing skills." }
        ]
      },
      {
        id: "room_6_khtn",
        subject: "KHTN",
        title: "Chương 1: Mở đầu về KHTN",
        knowledge: "Các lĩnh vực KHTN.",
        completed: false,
        questions: [
          { id: "q_6_k_1", type: "mcq", text: "Phát minh ra vaccine thuộc lĩnh vực nào?", options: ["Vật lý", "Sinh học", "Thiên văn", "Hóa học"], correct: "Sinh học", explanation: "Nghiên cứu cơ thể sống, miễn dịch là Sinh học." },
          { id: "q_6_k_2", type: "true_false", text: "KHTN chỉ nghiên cứu hiện tượng trong phòng thí nghiệm.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "KHTN nghiên cứu mọi sự vật, hiện tượng trong tự nhiên." },
          { id: "q_6_k_3", type: "fill_blank", text: "Bước đầu tiên trong phương pháp nghiên cứu KHTN là quan sát và đặt câu ...", correct: "hỏi", explanation: "Bắt đầu luôn từ việc quan sát và thắc mắc." },
          { id: "q_6_k_4", type: "essay", text: "Lấy ví dụ về hiện tượng vật lý trong đời sống và giải thích.", correct: "Ví dụ: Nước đá tan. Giải thích: sự chuyển thể do nhiệt độ.", explanation: "Đánh giá liên hệ thực tế." }
        ]
      },
      {
        id: "room_6_su",
        subject: "Lịch sử - Địa lí",
        title: "Chương 1: Lịch sử và Đời sống",
        knowledge: "Khái niệm lịch sử, các loại tư liệu.",
        completed: false,
        questions: [
          { id: "q_6_s_1", type: "mcq", text: "Trống đồng Đông Sơn thuộc loại tư liệu nào?", options: ["Truyền miệng", "Chữ viết", "Hiện vật", "Hình ảnh"], correct: "Hiện vật", explanation: "Trống đồng là vật thể vật chất do người xưa để lại." },
          { id: "q_6_s_2", type: "true_false", text: "Lịch sử là những gì đang diễn ra trong hiện tại.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Lịch sử là những gì đã xảy ra trong quá khứ." },
          { id: "q_6_s_3", type: "fill_blank", text: "Tư liệu ... là những câu chuyện dân gian được kể lại.", correct: "truyền miệng", explanation: "Đó là tư liệu truyền miệng." },
          { id: "q_6_s_4", type: "essay", text: "Vì sao cần học Lịch sử?", correct: "Biết cội nguồn, rút ra bài học quá khứ, định hướng tương lai.", explanation: "Nhận thức vai trò môn học." }
        ]
      },
      {
        id: "room_6_gdcd",
        subject: "GDCD",
        title: "Bài 1: Truyền thống gia đình",
        knowledge: "Giá trị truyền thống.",
        completed: false,
        questions: [
          { id: "q_6_g_1", type: "mcq", text: "Hành động nào thể hiện giữ gìn truyền thống tốt đẹp?", options: ["Lười biếng", "Nỗ lực học tập nối nghiệp", "Chê bai nghề", "Xóa bỏ thói quen cũ"], correct: "Nỗ lực học tập nối nghiệp", explanation: "Tiếp nối giá trị tốt đẹp." },
          { id: "q_6_g_2", type: "true_false", text: "Truyền thống gia đình không bao gồm đạo đức, lối sống.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Có bao gồm đạo đức, lối sống, văn hóa..." },
          { id: "q_6_g_3", type: "fill_blank", text: "Tự ... về truyền thống gia đình là động lực vươn lên.", correct: "hào", explanation: "Lòng tự hào." },
          { id: "q_6_g_4", type: "essay", text: "Kể một truyền thống tốt đẹp của gia đình em.", correct: "Truyền thống hiếu học, nhân ái... và hành động cụ thể để phát huy.", explanation: "Liên hệ bản thân." }
        ]
      },
      {
        id: "room_6_th",
        subject: "Tin học",
        title: "Chương 1: Thông tin và Dữ liệu",
        knowledge: "Khái niệm thông tin, xử lý.",
        completed: false,
        questions: [
          { id: "q_6_th_1", type: "mcq", text: "Máy tính xử lý dữ liệu ở dạng nào?", options: ["Văn bản", "Âm thanh", "Dãy bit", "Hình ảnh"], correct: "Dãy bit", explanation: "Ngôn ngữ máy là dãy bit nhị phân 0 và 1." },
          { id: "q_6_th_2", type: "true_false", text: "Quá trình xử lý: Nhập -> Xử lý -> Xuất.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Mô hình xử lý cơ bản." },
          { id: "q_6_th_3", type: "fill_blank", text: "Đơn vị đo lượng thông tin nhỏ nhất là ...", correct: "bit", explanation: "Bit là đơn vị cơ bản." },
          { id: "q_6_th_4", type: "essay", text: "Phân biệt Thông tin và Dữ liệu bằng ví dụ.", correct: "Dữ liệu là con số thô (38 độ), Thông tin là ý nghĩa (Bị sốt).", explanation: "Hiểu bản chất khái niệm." }
        ]
      },
      {
        id: "room_6_cn",
        subject: "Công nghệ",
        title: "Bài 1: Nhà ở",
        knowledge: "Vật liệu, cấu trúc nhà ở.",
        completed: false,
        questions: [
          { id: "q_6_c_1", type: "mcq", text: "Kiến trúc nhà ở phổ biến vùng đồng bằng Bắc Bộ?", options: ["Nhà rông", "Nhà sàn", "Nhà ba gian", "Chung cư"], correct: "Nhà ba gian", explanation: "Kiến trúc truyền thống Bắc Bộ." },
          { id: "q_6_c_2", type: "true_false", text: "Xi măng là vật liệu tự nhiên.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Xi măng là vật liệu nhân tạo." },
          { id: "q_6_c_3", type: "fill_blank", text: "Nhà ở bảo vệ con người khỏi tác động xấu của ...", correct: "thiên nhiên", explanation: "Thiên nhiên, thời tiết." },
          { id: "q_6_c_4", type: "essay", text: "Thiết kế một ngôi nhà tiết kiệm năng lượng cần gì?", correct: "Dùng pin mặt trời, cửa sổ đón sáng tự nhiên, vật liệu cách nhiệt...", explanation: "Tư duy sáng tạo, công nghệ xanh." }
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
          { id: "q_7_t_1", type: "mcq", text: "Kết quả của (-1/2)^3 + 1/8 là:", options: ["0", "1/4", "-1/4", "1"], correct: "0", explanation: "(-1/2)^3 = -1/8. -1/8 + 1/8 = 0." },
          { id: "q_7_t_2", type: "true_false", text: "Mọi số nguyên đều là số hữu tỉ.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Mọi số nguyên a = a/1." },
          { id: "q_7_t_3", type: "fill_blank", text: "Số đối của -5/7 là ...", correct: "5/7", explanation: "Đổi dấu." },
          { id: "q_7_t_4", type: "essay", text: "Tại sao số vô tỉ không thể viết dưới dạng a/b?", correct: "Số vô tỉ là số thập phân vô hạn không tuần hoàn.", explanation: "Bản chất tập hợp số." }
        ]
      },
      {
        id: "room_7_van",
        subject: "Ngữ Văn",
        title: "Bài 1: Bầu trời tuổi thơ",
        knowledge: "Thơ 4 chữ, 5 chữ.",
        completed: false,
        questions: [
          { id: "q_7_v_1", type: "mcq", text: "Đặc điểm nổi bật của thơ 4 chữ, 5 chữ là gì?", options: ["Không có vần", "Nhịp điệu dồn dập, vui tươi", "Chỉ dùng để tả cảnh", "Gieo vần bằng"], correct: "Nhịp điệu dồn dập, vui tươi", explanation: "Phù hợp diễn tả cảm xúc vui tươi, hồn nhiên." },
          { id: "q_7_v_2", type: "true_false", text: "Bài thơ 'Đồng dao mùa xuân' viết theo thể thơ 5 chữ.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Viết theo thể thơ 4 chữ." },
          { id: "q_7_v_3", type: "fill_blank", text: "Trong thơ 4 chữ, mỗi dòng có ... chữ.", correct: "bốn", explanation: "Định nghĩa cơ bản." },
          { id: "q_7_v_4", type: "essay", text: "Nêu tác dụng của biện pháp tu từ nhân hóa trong một bài thơ đã học.", correct: "Làm cho sự vật trở nên sinh động, có hồn như con người.", explanation: "Cảm thụ văn học." }
        ]
      },
      {
        id: "room_7_anh",
        subject: "Tiếng Anh",
        title: "Unit 1: Hobbies",
        knowledge: "Likes/Dislikes + V-ing.",
        completed: false,
        questions: [
          { id: "q_7_e_1", type: "mcq", text: "My brother likes __________ model cars.", options: ["make", "making", "makes", "to making"], correct: "making", explanation: "Like + V-ing." },
          { id: "q_7_e_2", type: "true_false", text: "'Photography' is stressed on the second syllable.", options: ["True", "False"], correct: "True", explanation: "Pho-TOG-ra-phy." },
          { id: "q_7_e_3", type: "fill_blank", text: "I enjoy __________ (collect) stamps.", correct: "collecting", explanation: "Enjoy + V-ing." },
          { id: "q_7_e_4", type: "essay", text: "Write about your favorite hobby.", correct: "Write about what it is, when you started, and why you like it.", explanation: "Writing practice." }
        ]
      },
      {
        id: "room_7_khtn",
        subject: "KHTN",
        title: "Chương 1: Nguyên tử",
        knowledge: "Cấu tạo nguyên tử.",
        completed: false,
        questions: [
          { id: "q_7_k_1", type: "mcq", text: "Hạt nhân nguyên tử gồm:", options: ["Proton, Electron", "Proton, Neutron", "Electron, Neutron", "Chỉ Proton"], correct: "Proton, Neutron", explanation: "Electron chuyển động ở vỏ." },
          { id: "q_7_k_2", type: "true_false", text: "Electron mang điện tích âm.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Proton (+), Electron (-)." },
          { id: "q_7_k_3", type: "fill_blank", text: "Khối lượng nguyên tử chủ yếu tập trung ở ...", correct: "hạt nhân", explanation: "Khối lượng electron quá nhỏ." },
          { id: "q_7_k_4", type: "essay", text: "Giải thích vì sao nguyên tử trung hòa về điện.", correct: "Vì số hạt proton (mang điện dương) bằng số hạt electron (mang điện âm).", explanation: "Hiểu bản chất cấu tạo nguyên tử." }
        ]
      },
      {
        id: "room_7_su",
        subject: "Lịch sử - Địa lí",
        title: "Châu Âu thời Trung Đại",
        knowledge: "Phong kiến Châu Âu.",
        completed: false,
        questions: [
          { id: "q_7_s_1", type: "mcq", text: "Giai cấp cơ bản trong xã hội phong kiến châu Âu?", options: ["Chủ nô - Nô lệ", "Lãnh chúa - Nông nô", "Tư bản - Vô sản", "Địa chủ - Nông dân"], correct: "Lãnh chúa - Nông nô", explanation: "Đây là 2 giai cấp chính thời Trung cổ ở Âu." },
          { id: "q_7_s_2", type: "true_false", text: "Thành thị trung đại ra đời đã phá vỡ nền kinh tế tự nhiên.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Kích thích kinh tế hàng hóa phát triển." },
          { id: "q_7_s_3", type: "fill_blank", text: "Lãnh địa phong kiến là đơn vị kinh tế, ... độc lập.", correct: "chính trị", explanation: "Lãnh chúa cai quản như một vua con." },
          { id: "q_7_s_4", type: "essay", text: "Tác động của các cuộc phát kiến địa lý?", correct: "Mở rộng thị trường, giao lưu văn hóa, nhưng cũng mang lại thảm họa thực dân.", explanation: "Đánh giá đa chiều sự kiện lịch sử." }
        ]
      },
      {
        id: "room_7_gdcd",
        subject: "GDCD",
        title: "Bài 1: Tự hào truyền thống (Lớp 7)",
        knowledge: "Truyền thống quê hương.",
        completed: false,
        questions: [
          { id: "q_7_g_1", type: "mcq", text: "Hành vi nào KHÔNG thể hiện tình yêu quê hương?", options: ["Bảo vệ di tích", "Chê bai đặc sản địa phương", "Tham gia lễ hội", "Tuyên truyền về du lịch"], correct: "Chê bai đặc sản địa phương", explanation: "Đây là hành vi quay lưng với quê hương." },
          { id: "q_7_g_2", type: "true_false", text: "Chỉ người trưởng thành mới có thể giữ gìn truyền thống quê hương.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Mọi lứa tuổi đều có thể đóng góp." },
          { id: "q_7_g_3", type: "fill_blank", text: "Chúng ta cần bảo tồn và ... huy các giá trị truyền thống.", correct: "phát", explanation: "Bảo tồn đi đôi với phát huy." },
          { id: "q_7_g_4", type: "essay", text: "Kể tên một di sản văn hóa tại địa phương em và cách bảo vệ.", correct: "Nêu đúng tên di sản và hành động như không xả rác, tuyên truyền...", explanation: "Giáo dục ý thức địa phương." }
        ]
      },
      {
        id: "room_7_th",
        subject: "Tin học",
        title: "Mạng xã hội",
        knowledge: "Văn hóa ứng xử trên mạng.",
        completed: false,
        questions: [
          { id: "q_7_th_1", type: "mcq", text: "Hành động nào an toàn trên mạng xã hội?", options: ["Kết bạn với người lạ", "Chia sẻ mật khẩu", "Cài đặt quyền riêng tư", "Đăng mọi thứ cá nhân"], correct: "Cài đặt quyền riêng tư", explanation: "Bảo vệ thông tin cá nhân." },
          { id: "q_7_th_2", type: "true_false", text: "Được phép tự do lăng mạ người khác trên mạng vì đó là thế giới ảo.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Pháp luật có quy định xử phạt an ninh mạng." },
          { id: "q_7_th_3", type: "fill_blank", text: "Đăng tải thông tin sai sự thật trên mạng là hành vi vi phạm ...", correct: "pháp luật", explanation: "Pháp luật an ninh mạng." },
          { id: "q_7_th_4", type: "essay", text: "Nếu bạn em bị bắt nạt trên mạng, em sẽ làm gì?", correct: "Báo cáo nội dung, khuyên bạn chặn tài khoản đó, báo với người lớn/giáo viên.", explanation: "Kỹ năng giải quyết vấn đề." }
        ]
      },
      {
        id: "room_7_cn",
        subject: "Công nghệ",
        title: "Trồng trọt",
        knowledge: "Vai trò, kĩ thuật trồng trọt.",
        completed: false,
        questions: [
          { id: "q_7_c_1", type: "mcq", text: "Trồng trọt KHÔNG cung cấp sản phẩm nào?", options: ["Lương thực", "Thực phẩm", "Thịt bò", "Thức ăn chăn nuôi"], correct: "Thịt bò", explanation: "Thịt bò thuộc ngành chăn nuôi." },
          { id: "q_7_c_2", type: "true_false", text: "Làm đất giúp đất tơi xốp, tiêu diệt mầm bệnh.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Mục đích của việc cày bừa làm đất." },
          { id: "q_7_c_3", type: "fill_blank", text: "Phân bón cung cấp ... dinh dưỡng cho cây trồng.", correct: "chất", explanation: "Chất dinh dưỡng." },
          { id: "q_7_c_4", type: "essay", text: "Tại sao ngày nay người ta ưu tiên sử dụng phân bón hữu cơ?", correct: "Bảo vệ môi trường đất, an toàn cho nông sản và sức khỏe con người.", explanation: "Tư duy nông nghiệp sạch." }
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
          { id: "q_8_t_1", type: "mcq", text: "Khai triển (x + 2)^2 ta được:", options: ["x^2 + 4", "x^2 + 2x + 4", "x^2 + 4x + 4", "x^2 + 4x + 2"], correct: "x^2 + 4x + 4", explanation: "(a+b)^2 = a^2 + 2ab + b^2." },
          { id: "q_8_t_2", type: "true_false", text: "x^2 - 4 phân tích thành (x-2)(x+2).", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Hằng đẳng thức hiệu hai bình phương." },
          { id: "q_8_t_3", type: "fill_blank", text: "Hệ số tự do của P(x) = 3x^2 - 5x + 7 là ...", correct: "7", explanation: "Hệ số không chứa biến." },
          { id: "q_8_t_4", type: "essay", text: "Ứng dụng hằng đẳng thức để tính nhanh 99^2.", correct: "99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801.", explanation: "Vận dụng vào tính nhẩm." }
        ]
      },
      {
        id: "room_8_van",
        subject: "Ngữ Văn",
        title: "Truyện Lịch sử",
        knowledge: "Bối cảnh, nhân vật lịch sử.",
        completed: false,
        questions: [
          { id: "q_8_v_1", type: "mcq", text: "Nhân vật lịch sử thường được khắc họa như thế nào trong truyện lịch sử?", options: ["Hư cấu hoàn toàn", "Phù hợp bối cảnh lịch sử", "Chỉ có tính hài hước", "Luôn thất bại"], correct: "Phù hợp bối cảnh lịch sử", explanation: "Phải dựa trên cốt lõi sự thật lịch sử." },
          { id: "q_8_v_2", type: "true_false", text: "Truyện lịch sử không cho phép nhà văn sáng tạo, hư cấu.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Nhà văn được phép hư cấu chi tiết phụ để làm nổi bật cốt truyện." },
          { id: "q_8_v_3", type: "fill_blank", text: "Tác phẩm 'Lá cờ thêu sáu chữ vàng' viết về anh hùng thiếu niên Trần Quốc ...", correct: "Toản", explanation: "Nhân vật Trần Quốc Toản bóp nát quả cam." },
          { id: "q_8_v_4", type: "essay", text: "Trình bày suy nghĩ của em về lòng yêu nước qua nhân vật Trần Quốc Toản.", correct: "Lòng yêu nước không phân biệt tuổi tác, sẵn sàng hy sinh vì dân tộc.", explanation: "Phân tích giá trị tư tưởng." }
        ]
      },
      {
        id: "room_8_anh",
        subject: "Tiếng Anh",
        title: "Life in the countryside",
        knowledge: "Comparative forms of adverbs.",
        completed: false,
        questions: [
          { id: "q_8_e_1", type: "mcq", text: "People in the countryside work __________ than those in the city.", options: ["hard", "more hard", "harder", "hardly"], correct: "harder", explanation: "Comparative of 'hard' (short adverb) is 'harder'." },
          { id: "q_8_e_2", type: "true_false", text: "'Fast' is both an adjective and an adverb.", options: ["True", "False"], correct: "True", explanation: "E.g., A fast car (adj) / He runs fast (adv)." },
          { id: "q_8_e_3", type: "fill_blank", text: "Farmers have to work __________ (early) than office workers.", correct: "earlier", explanation: "Comparative of 'early' is 'earlier'." },
          { id: "q_8_e_4", type: "essay", text: "Write 3 benefits of living in the countryside.", correct: "Fresh air, less noise, friendly neighbors, lower cost of living.", explanation: "Expressing ideas clearly." }
        ]
      },
      {
        id: "room_8_khtn",
        subject: "KHTN",
        title: "Chương Hóa Học Lớp 8",
        knowledge: "Phản ứng hóa học, mol.",
        completed: false,
        questions: [
          { id: "q_8_k_1", type: "mcq", text: "Trong phản ứng hóa học, hạt vi mô nào được bảo toàn?", options: ["Phân tử", "Nguyên tử", "Chất", "Trạng thái"], correct: "Nguyên tử", explanation: "Nguyên tử được bảo toàn, chỉ liên kết giữa chúng thay đổi." },
          { id: "q_8_k_2", type: "true_false", text: "Thể tích mol của các chất khí ở cùng đk chuẩn là bằng nhau.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Bằng 24,79 lít ở đk chuẩn mới (25 độ C, 1 bar)." },
          { id: "q_8_k_3", type: "fill_blank", text: "Định luật bảo toàn khối lượng do Lô-mô-nô-xốp và ... tìm ra.", correct: "La-voa-di-ê", explanation: "Antoine Lavoisier." },
          { id: "q_8_k_4", type: "essay", text: "Đốt cháy than (Carbon) trong không khí tạo ra khí CO2. Viết phương trình hóa học và áp dụng định luật bảo toàn khối lượng.", correct: "C + O2 -> CO2. m_C + m_O2 = m_CO2.", explanation: "Kỹ năng lập PTHH." }
        ]
      },
      {
        id: "room_8_su",
        subject: "Lịch sử - Địa lí",
        title: "Biển đảo Việt Nam",
        knowledge: "Chủ quyền, tài nguyên biển.",
        completed: false,
        questions: [
          { id: "q_8_s_1", type: "mcq", text: "Vùng biển Việt Nam thuộc biển nào?", options: ["Biển Địa Trung Hải", "Biển Đông", "Biển Đỏ", "Biển Đen"], correct: "Biển Đông", explanation: "Biển Đông thuộc Thái Bình Dương." },
          { id: "q_8_s_2", type: "true_false", text: "Quần đảo Hoàng Sa và Trường Sa thuộc chủ quyền của Việt Nam.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Việt Nam có đầy đủ bằng chứng pháp lý và lịch sử." },
          { id: "q_8_s_3", type: "fill_blank", text: "Bờ biển Việt Nam dài ... km.", correct: "3260", explanation: "Số liệu chuẩn về bờ biển VN." },
          { id: "q_8_s_4", type: "essay", text: "Nêu vai trò của biển đảo đối với kinh tế và an ninh quốc phòng Việt Nam.", correct: "Tài nguyên thủy sản, khoáng sản, du lịch; là cửa ngõ giao thương, tuyến phòng thủ biển.", explanation: "Tích hợp kiến thức kinh tế - chính trị." }
        ]
      },
      {
        id: "room_8_gdcd",
        subject: "GDCD",
        title: "Tôn trọng lẽ phải",
        knowledge: "Bảo vệ cái đúng.",
        completed: false,
        questions: [
          { id: "q_8_g_1", type: "mcq", text: "Người tôn trọng lẽ phải là người như thế nào?", options: ["Bảo vệ ý kiến của đám đông", "Công nhận và bảo vệ cái đúng", "Luôn cãi lại người khác", "Né tránh xung đột"], correct: "Công nhận và bảo vệ cái đúng", explanation: "Dù đi ngược đám đông nhưng bảo vệ chân lý." },
          { id: "q_8_g_2", type: "true_false", text: "Thấy bạn quay cóp trong giờ kiểm tra nhưng làm ngơ là tôn trọng lẽ phải.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Đó là sự đồng tình với cái sai, bao che." },
          { id: "q_8_g_3", type: "fill_blank", text: "Tôn trọng lẽ phải giúp con người có cách ứng xử ...", correct: "phù hợp", explanation: "Giúp xã hội công bằng." },
          { id: "q_8_g_4", type: "essay", text: "Nếu một người bạn thân hiểu lầm và nói xấu một bạn khác, em sẽ làm gì?", correct: "Tìm hiểu sự thật, khuyên giải bạn thân, giải thích để bảo vệ người đúng.", explanation: "Xử lý tình huống thực tế." }
        ]
      },
      {
        id: "room_8_th",
        subject: "Tin học",
        title: "Phần mềm",
        knowledge: "Phần mềm mã nguồn mở, độc quyền.",
        completed: false,
        questions: [
          { id: "q_8_th_1", type: "mcq", text: "Hệ điều hành nào sau đây là mã nguồn mở?", options: ["Windows", "iOS", "Linux", "macOS"], correct: "Linux", explanation: "Linux cho phép tùy biến mã nguồn tự do." },
          { id: "q_8_th_2", type: "true_false", text: "Phần mềm thương mại luôn miễn phí cho người dùng.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Phần mềm thương mại thường yêu cầu trả phí bản quyền." },
          { id: "q_8_th_3", type: "fill_blank", text: "Bản quyền phần mềm giúp bảo vệ tài sản ... tuệ của tác giả.", correct: "trí", explanation: "Sở hữu trí tuệ." },
          { id: "q_8_th_4", type: "essay", text: "Lợi ích của việc sử dụng phần mềm mã nguồn mở là gì?", correct: "Miễn phí, cộng đồng hỗ trợ lớn, an toàn, có thể tùy biến.", explanation: "Đánh giá hiểu biết công nghệ." }
        ]
      },
      {
        id: "room_8_cn",
        subject: "Công nghệ",
        title: "Cơ khí",
        knowledge: "Bản vẽ kĩ thuật, gia công.",
        completed: false,
        questions: [
          { id: "q_8_c_1", type: "mcq", text: "Bản vẽ kĩ thuật dùng để làm gì?", options: ["Để trang trí", "Để chế tạo, thi công", "Để vẽ mỹ thuật", "Để ghi chép"], correct: "Để chế tạo, thi công", explanation: "Là ngôn ngữ chung của dân kĩ thuật." },
          { id: "q_8_c_2", type: "true_false", text: "Đường nét đứt trên bản vẽ thể hiện phần bị khuất.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Quy ước tiêu chuẩn bản vẽ." },
          { id: "q_8_c_3", type: "fill_blank", text: "Để gia công kim loại, người ta thường dùng phương pháp cưa, ...", correct: "đục", explanation: "Hoặc giũa, tiện." },
          { id: "q_8_c_4", type: "essay", text: "Nêu các biện pháp an toàn khi sử dụng dụng cụ gia công cơ khí.", correct: "Đeo bảo hộ, kiểm tra dụng cụ trước khi dùng, tập trung khi làm việc.", explanation: "Nhận thức an toàn lao động." }
        ]
      }
    ]
  },
  {
    id: "house_9",
    title: "Cung Điện Thời Gian - Lớp 9 KNTT",
    rooms: [
      {
        id: "room_9_toan",
        subject: "Toán",
        title: "Phương trình, Căn thức",
        knowledge: "Phương trình bậc nhất 2 ẩn, Căn bậc hai.",
        completed: false,
        questions: [
          { id: "q_9_t_1", type: "mcq", text: "Nghiệm của phương trình 2x - y = 4 khi x = 3 là:", options: ["y = 1", "y = 2", "y = -2", "y = 10"], correct: "y = 2", explanation: "2(3) - y = 4 => 6 - y = 4 => y = 2." },
          { id: "q_9_t_2", type: "true_false", text: "Căn bậc hai số học của 16 là 4 và -4.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Căn bậc hai số học luôn không âm, chỉ là 4." },
          { id: "q_9_t_3", type: "fill_blank", text: "Điều kiện xác định của biểu thức căn(x - 2) là x >= ...", correct: "2", explanation: "Biểu thức trong căn phải >= 0." },
          { id: "q_9_t_4", type: "essay", text: "Giải hệ phương trình: x + y = 5 và 2x - y = 1.", correct: "Cộng 2 PT: 3x = 6 => x=2. Thay vào tìm y=3. Nghiệm (2;3).", explanation: "Kỹ năng giải hệ PT." }
        ]
      },
      {
        id: "room_9_van",
        subject: "Ngữ Văn",
        title: "Truyện Kiều",
        knowledge: "Đoạn trích Truyện Kiều.",
        completed: false,
        questions: [
          { id: "q_9_v_1", type: "mcq", text: "Bút pháp nghệ thuật đặc sắc nhất trong đoạn 'Cảnh ngày xuân'?", options: ["Tả thực", "Tả cảnh ngụ tình", "Nhân hóa", "Điệp ngữ"], correct: "Tả cảnh ngụ tình", explanation: "Thiên nhiên mang đậm màu sắc tâm trạng con người." },
          { id: "q_9_v_2", type: "true_false", text: "Nguyễn Du viết Truyện Kiều bằng chữ Quốc ngữ.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Truyện Kiều được viết bằng chữ Nôm." },
          { id: "q_9_v_3", type: "fill_blank", text: "Làn thu thủy nét ... sơn / Hoa ghen thua thắm, liễu hờn kém xanh.", correct: "xuân", explanation: "Trích đoạn miêu tả Thúy Kiều." },
          { id: "q_9_v_4", type: "essay", text: "Phân tích vẻ đẹp của Thúy Vân qua 4 câu thơ đầu đoạn 'Chị em Thúy Kiều'.", correct: "Vẻ đẹp đoan trang, phúc hậu, hòa hợp với thiên nhiên (Mây thua nước tóc, tuyết nhường màu da).", explanation: "Kỹ năng phân tích thơ." }
        ]
      },
      {
        id: "room_9_anh",
        subject: "Tiếng Anh",
        title: "Local environment",
        knowledge: "Complex sentences, phrasal verbs.",
        completed: false,
        questions: [
          { id: "q_9_e_1", type: "mcq", text: "He __________ the job because the salary was too low.", options: ["turned off", "turned down", "looked after", "put up with"], correct: "turned down", explanation: "Turn down = reject." },
          { id: "q_9_e_2", type: "true_false", text: "'Despite' is followed by a clause (S + V).", options: ["True", "False"], correct: "False", explanation: "Despite is followed by a Noun phrase or V-ing." },
          { id: "q_9_e_3", type: "fill_blank", text: "I am looking __________ to seeing you soon.", correct: "forward", explanation: "Look forward to + V-ing." },
          { id: "q_9_e_4", type: "essay", text: "Write about a traditional craft village in Vietnam.", correct: "Mention the location, the products, and its cultural importance.", explanation: "Descriptive writing." }
        ]
      },
      {
        id: "room_9_khtn",
        subject: "KHTN",
        title: "Di truyền học",
        knowledge: "Gen, ADN, Lai giống.",
        completed: false,
        questions: [
          { id: "q_9_k_1", type: "mcq", text: "Đơn vị cấu tạo cơ bản của ADN là gì?", options: ["Amino acid", "Nucleotide", "Gene", "NST"], correct: "Nucleotide", explanation: "Nucleotide là đơn vị cấu trúc của ADN." },
          { id: "q_9_k_2", type: "true_false", text: "Theo Men-đen, tính trạng lặn chỉ biểu hiện ở trạng thái đồng hợp lặn.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Ví dụ: kiểu gen aa mới biểu hiện tính trạng lặn." },
          { id: "q_9_k_3", type: "fill_blank", text: "Cặp nhiễm sắc thể giới tính ở người nam bình thường là ...", correct: "XY", explanation: "Nữ là XX, Nam là XY." },
          { id: "q_9_k_4", type: "essay", text: "Trình bày hệ quả của đột biến gen đối với sinh vật.", correct: "Có thể có lợi, có hại hoặc trung tính. Thường là có hại vì phá vỡ sự thống nhất của cơ thể.", explanation: "Tư duy sinh học phân tử." }
        ]
      },
      {
        id: "room_9_su",
        subject: "Lịch sử - Địa lí",
        title: "Thế giới thế kỷ 20",
        knowledge: "Chiến tranh thế giới, Liên Hợp Quốc.",
        completed: false,
        questions: [
          { id: "q_9_s_1", type: "mcq", text: "Tổ chức Liên Hợp Quốc được thành lập vào năm nào?", options: ["1914", "1939", "1945", "1975"], correct: "1945", explanation: "Thành lập sau Chiến tranh thế giới thứ 2." },
          { id: "q_9_s_2", type: "true_false", text: "Chiến tranh lạnh là cuộc chiến đấu bằng vũ khí hạt nhân giữa Mỹ và Liên Xô.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Chiến tranh lạnh không có xung đột vũ trang trực tiếp giữa 2 phe." },
          { id: "q_9_s_3", type: "fill_blank", text: "Khởi nghĩa giành chính quyền ở Hà Nội trong Cách mạng tháng Tám diễn ra vào ngày 19/.../1945.", correct: "8", explanation: "Ngày 19/8 lịch sử." },
          { id: "q_9_s_4", type: "essay", text: "Nêu vai trò của Liên Hợp Quốc trong bối cảnh hiện nay.", correct: "Duy trì hòa bình, an ninh thế giới, hợp tác quốc tế, giải quyết xung đột.", explanation: "Kiến thức chính trị toàn cầu." }
        ]
      },
      {
        id: "room_9_gdcd",
        subject: "GDCD",
        title: "Chí công vô tư",
        knowledge: "Phẩm chất đạo đức.",
        completed: false,
        questions: [
          { id: "q_9_g_1", type: "mcq", text: "Biểu hiện nào là của người chí công vô tư?", options: ["Bao che cho bạn", "Giải quyết công việc dựa trên lợi ích chung", "Ưu tiên người nhà", "Chỉ làm việc khi có thưởng"], correct: "Giải quyết công việc dựa trên lợi ích chung", explanation: "Công bằng, không tư lợi." },
          { id: "q_9_g_2", type: "true_false", text: "Chí công vô tư sẽ khiến mình bị thiệt thòi trong cuộc sống.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Nó mang lại sự tin tưởng, kính trọng từ người khác." },
          { id: "q_9_g_3", type: "fill_blank", text: "Chí công ... tư là phẩm chất đạo đức cao đẹp.", correct: "vô", explanation: "Thành ngữ chí công vô tư." },
          { id: "q_9_g_4", type: "essay", text: "Nếu lớp trưởng bao che cho bạn bè vi phạm nội quy, em có nhận xét gì?", correct: "Hành vi đó thiếu chí công vô tư, làm mất kỷ luật lớp, không giúp bạn tiến bộ.", explanation: "Đánh giá tình huống đạo đức." }
        ]
      },
      {
        id: "room_9_th",
        subject: "Tin học",
        title: "Internet và Bảo mật",
        knowledge: "Mạng máy tính, virus.",
        completed: false,
        questions: [
          { id: "q_9_th_1", type: "mcq", text: "Phần mềm độc hại (Malware) bao gồm:", options: ["Virus", "Trojan", "Worm", "Tất cả các loại trên"], correct: "Tất cả các loại trên", explanation: "Đều là mã độc tống tiền, phá hoại." },
          { id: "q_9_th_2", type: "true_false", text: "Có thể lây nhiễm virus máy tính khi mở email từ người lạ.", options: ["Đúng", "Sai"], correct: "Đúng", explanation: "Kẻ gian thường đính kèm mã độc vào email." },
          { id: "q_9_th_3", type: "fill_blank", text: "Để duyệt web an toàn, ta cần sử dụng các trang web có giao thức bảo mật HTTP...", correct: "S", explanation: "HTTPS có mã hóa dữ liệu." },
          { id: "q_9_th_4", type: "essay", text: "Nêu 3 cách để bảo vệ thông tin cá nhân trên mạng Internet.", correct: "Dùng mật khẩu mạnh, bật xác thực 2 bước, không chia sẻ thông tin nhạy cảm công khai.", explanation: "Kỹ năng an toàn thông tin." }
        ]
      },
      {
        id: "room_9_cn",
        subject: "Công nghệ",
        title: "Điện dân dụng",
        knowledge: "Mạng điện, an toàn điện.",
        completed: false,
        questions: [
          { id: "q_9_c_1", type: "mcq", text: "Mạng điện trong nhà của Việt Nam có điện áp định mức là bao nhiêu?", options: ["110V", "220V", "380V", "500V"], correct: "220V", explanation: "Điện áp tiêu chuẩn ở Việt Nam." },
          { id: "q_9_c_2", type: "true_false", text: "Cầu chì dùng để đóng ngắt mạch điện thủ công.", options: ["Đúng", "Sai"], correct: "Sai", explanation: "Công tắc mới đóng ngắt thủ công. Cầu chì để bảo vệ quá tải/ngắn mạch tự động." },
          { id: "q_9_c_3", type: "fill_blank", text: "Vật liệu cách điện không cho dòng ... chạy qua.", correct: "điện", explanation: "Ngăn dòng điện để đảm bảo an toàn." },
          { id: "q_9_c_4", type: "essay", text: "Nêu sơ cứu khi thấy người bị điện giật.", correct: "Cắt nguồn điện lập tức, dùng vật cách điện tách nạn nhân ra khỏi dây điện, hô hấp nhân tạo, gọi cấp cứu.", explanation: "Kỹ năng sinh tồn cơ bản." }
        ]
      }
    ]
  }
];`;

fs.writeFileSync('src/data/townData.js', townData, 'utf8');
console.log('Successfully wrote massive townData file with 4 houses!');
