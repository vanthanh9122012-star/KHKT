export const QUIZ_DATA = [
  {
    id: "toan-6-kntt",
    title: "Toán học - Lớp 6 (Kết nối tri thức)",
    subject: "Toán học",
    grade: 6,
    questions: [
      {
        id: "t6-q1",
        type: "mcq",
        text: "Mẹ giao cho An đi siêu thị mua 3 kg gạo tẻ (18.000 đ/kg) và 2 hộp sữa tươi (32.000 đ/hộp). An đưa thu ngân tờ 200.000 đ. Hỏi thu ngân phải trả lại An bao nhiêu tiền? (Áp dụng Phép cộng, trừ, nhân, chia số tự nhiên)",
        options: ["80.000 đ", "82.000 đ", "118.000 đ", "108.000 đ"],
        correct: "82.000 đ",
        explanation: "Tổng tiền cần trả: 3*18000 + 2*32000 = 54000 + 64000 = 118.000 đ. Tiền thối lại: 200.000 - 118.000 = 82.000 đ."
      },
      {
        id: "t6-q2",
        type: "true_false",
        text: "Trong đợt thiện nguyện, lớp 6A thu gom được 144 quyển vở và 96 chiếc bút. Cô giáo muốn chia đều số vở và bút vào các túi quà. Số túi quà nhiều nhất có thể chia được là 24 túi. (Áp dụng Ước chung lớn nhất)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "ƯCLN(144, 96). Ta có 144 = 2^4 * 3^2, 96 = 2^5 * 3. ƯCLN = 2^4 * 3 = 48. Số túi quà nhiều nhất là 48 túi, không phải 24."
      },
      {
        id: "t6-q3",
        type: "fill_blank",
        text: "Một đội công nhân cần lát gạch một sân hình chữ nhật có chiều dài 12m và chiều rộng 8m bằng loại gạch hình vuông cạnh 40cm. Tổng số viên gạch cần dùng là ___ viên. (Áp dụng Chu vi và Diện tích)",
        correct: "600",
        explanation: "Diện tích sân: 12 * 8 = 96 m2 = 960000 cm2. Diện tích 1 viên gạch: 40 * 40 = 1600 cm2. Số viên gạch: 960000 / 1600 = 600 viên."
      },
      {
        id: "t6-q4",
        type: "mcq",
        text: "Bạn Bình theo dõi nhiệt độ tại Sapa trong một ngày mùa đông. Sáng sớm nhiệt độ là -2°C, đến trưa tăng thêm 5°C, chiều tối lại giảm đi 4°C. Nhiệt độ chiều tối tại Sapa là bao nhiêu? (Áp dụng Cộng trừ số nguyên)",
        options: ["-1°C", "0°C", "1°C", "7°C"],
        correct: "-1°C",
        explanation: "Nhiệt độ chiều tối: -2 + 5 - 4 = 3 - 4 = -1°C."
      },
      {
        id: "t6-q5",
        type: "true_false",
        text: "Một công ty kinh doanh quý I lãi 200 triệu đồng, quý II lỗ 50 triệu đồng, quý III lãi 150 triệu đồng, quý IV lỗ 80 triệu đồng. Cả năm công ty đó lãi 220 triệu đồng. (Áp dụng Số nguyên âm và số nguyên dương)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Tổng kết: 200 - 50 + 150 - 80 = 220 triệu đồng. Lãi 220 triệu."
      },
      {
        id: "t6-q6",
        type: "fill_blank",
        text: "Một chiếc bánh pizza được cắt làm 8 miếng đều nhau. Nam ăn 3 miếng, Hoa ăn 2 miếng. Phân số chỉ phần bánh còn lại là ___ (viết dưới dạng a/b). (Áp dụng Phân số)",
        correct: "3/8",
        explanation: "Số bánh đã ăn: 3 + 2 = 5 miếng. Số bánh còn lại: 8 - 5 = 3 miếng. Phân số chỉ phần bánh còn lại là 3/8."
      },
      {
        id: "t6-q7",
        type: "mcq",
        text: "Bố Hùng mua một mảnh đất hình bình hành có độ dài một cạnh là 15m, chiều cao tương ứng là 10m. Để làm hàng rào bao quanh, bố Hùng tính chu vi. Biết cạnh còn lại là 12m. Chu vi và diện tích mảnh đất lần lượt là? (Áp dụng Hình học phẳng)",
        options: ["54m và 150m2", "54m và 120m2", "27m và 150m2", "150m và 54m2"],
        correct: "54m và 150m2",
        explanation: "Chu vi = 2 * (15 + 12) = 54m. Diện tích = 15 * 10 = 150m2."
      },
      {
        id: "t6-q8",
        type: "true_false",
        text: "Một chiếc tàu ngầm đang ở độ sâu 30m so với mực nước biển, sau đó lặn thêm 15m, rồi nổi lên 20m. Vị trí hiện tại của tàu ngầm là -25m so với mực nước biển. (Áp dụng Số nguyên)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Vị trí ban đầu: -30m. Lặn thêm 15m: -30 - 15 = -45m. Nổi lên 20m: -45 + 20 = -25m."
      },
      {
        id: "t6-q9",
        type: "fill_blank",
        text: "Trong một biểu đồ cột kép thể hiện số lượng học sinh nam và nữ của 4 lớp khối 6. Lớp 6A có 20 nam và 18 nữ. Lớp 6B có 15 nam và 22 nữ. Tổng số học sinh nữ của hai lớp là ___ bạn. (Áp dụng Biểu đồ cột kép)",
        correct: "40",
        explanation: "Học sinh nữ lớp 6A (18) + Học sinh nữ lớp 6B (22) = 40 bạn."
      },
      {
        id: "t6-q10",
        type: "mcq",
        text: "Mẹ Lan gửi tiết kiệm 50 triệu đồng với lãi suất 6%/năm. Sau 1 năm, tổng số tiền mẹ Lan nhận được cả gốc và lãi là bao nhiêu? (Áp dụng Tính toán số thập phân, phần trăm)",
        options: ["50.300.000 đ", "53.000.000 đ", "56.000.000 đ", "50.000.006 đ"],
        correct: "53.000.000 đ",
        explanation: "Tiền lãi: 50.000.000 * 6% = 3.000.000 đ. Tổng tiền: 50 + 3 = 53 triệu đồng."
      }
    ]
  },
  {
    id: "van-6-kntt",
    title: "Ngữ Văn - Lớp 6 (Kết nối tri thức)",
    subject: "Ngữ Văn",
    grade: 6,
    questions: [
      {
        id: "v6-q1",
        type: "mcq",
        text: "Khi tham gia một diễn đàn bảo vệ môi trường, bạn Nam muốn kể một câu chuyện ngụ ngôn để khuyên mọi người không nên chủ quan, kiêu ngạo. Nam nên chọn truyện nào? (Áp dụng Bài Truyện ngụ ngôn)",
        options: ["Thánh Gióng", "Rùa và Thỏ", "Ếch ngồi đáy giếng", "Sơn Tinh Thủy Tinh"],
        correct: "Ếch ngồi đáy giếng",
        explanation: "Truyện 'Ếch ngồi đáy giếng' phê phán những kẻ hiểu biết nông cạn nhưng lại kiêu ngạo, chủ quan, rất phù hợp với thông điệp của Nam."
      },
      {
        id: "v6-q2",
        type: "true_false",
        text: "Để hướng dẫn du khách nước ngoài cách làm món Nem rán truyền thống, việc sử dụng văn bản thuyết minh thuật lại một sự kiện là lựa chọn đúng nhất. (Áp dụng Kiểu văn bản)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Để hướng dẫn cách làm một món ăn, phải sử dụng văn bản thông tin giới thiệu quy tắc, luật lệ hoặc cách làm, không phải thuật lại sự kiện."
      },
      {
        id: "v6-q3",
        type: "fill_blank",
        text: "Trong một bài viết trải nghiệm chuyến đi thực tế, người viết thường sử dụng ngôi kể thứ ___ để dễ dàng bộc lộ cảm xúc cá nhân. (Áp dụng Ngôi kể)",
        correct: "nhất",
        explanation: "Ngôi kể thứ nhất (xưng tôi/chúng tôi) giúp người viết bộc lộ trực tiếp suy nghĩ, tình cảm và trải nghiệm chân thực của bản thân."
      },
      {
        id: "v6-q4",
        type: "mcq",
        text: "Khi viết email xin phép cô giáo nghỉ ốm, em cần sử dụng ngôn ngữ như thế nào? (Áp dụng Thực hành tiếng Việt - Biến thể ngôn ngữ)",
        options: ["Ngôn ngữ sinh hoạt, có nhiều tiếng lóng để tạo sự thân thiện", "Ngôn ngữ trang trọng, lịch sự, đúng chuẩn mực tiếng Việt", "Ngôn ngữ đa phương tiện, chèn nhiều biểu tượng cảm xúc", "Chỉ dùng từ địa phương để giữ bản sắc"],
        correct: "Ngôn ngữ trang trọng, lịch sự, đúng chuẩn mực tiếng Việt",
        explanation: "Email gửi giáo viên mang tính chất hành chính, giao tiếp học đường nên cần dùng ngôn ngữ trang trọng, lịch sự."
      },
      {
        id: "v6-q5",
        type: "true_false",
        text: "Trong bài thuyết trình về tình cảm gia đình, việc trích dẫn bài thơ 'Mây và Sóng' của Ta-go sẽ giúp lập luận thêm sâu sắc và giàu cảm xúc. (Áp dụng Thơ tự do)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Bài thơ 'Mây và sóng' ca ngợi tình mẫu tử thiêng liêng, hoàn toàn phù hợp và làm phong phú thêm cho chủ đề tình cảm gia đình."
      },
      {
        id: "v6-q6",
        type: "fill_blank",
        text: "Nhằm giúp em gái lớp 3 hiểu về nguồn gốc dân tộc, em kể truyền thuyết 'Con Rồng cháu Tiên'. Yếu tố cốt lõi tạo nên sức hấp dẫn của truyện này là chi tiết kì ảo, hoang ___. (Áp dụng Truyền thuyết)",
        correct: "đường",
        explanation: "Chi tiết kì ảo, hoang đường (như Lạc Long Quân là rồng, Âu Cơ đẻ ra bọc trăm trứng) là đặc trưng của truyền thuyết."
      },
      {
        id: "v6-q7",
        type: "mcq",
        text: "Bạn An đang miêu tả cảnh bình minh trên biển: 'Mặt trời nhú lên như một quả cầu lửa khổng lồ, nhuộm hồng cả một vùng nước'. Phép tu từ nào được sử dụng nổi bật nhất? (Áp dụng Biện pháp tu từ)",
        options: ["Nhân hóa", "So sánh", "Ẩn dụ", "Hoán dụ"],
        correct: "So sánh",
        explanation: "Sử dụng từ 'như' để đối chiếu 'mặt trời' với 'quả cầu lửa khổng lồ' chính là phép so sánh."
      },
      {
        id: "v6-q8",
        type: "true_false",
        text: "Khi tranh luận về việc học online, việc chỉ sử dụng lí lẽ mà không có bằng chứng thực tế sẽ giúp bài nói thuyết phục hơn vì nó ngắn gọn. (Áp dụng Kĩ năng Nói và Nghe)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Để tranh luận thuyết phục, lí lẽ phải luôn đi kèm với bằng chứng (dẫn chứng cụ thể, số liệu thực tế)."
      },
      {
        id: "v6-q9",
        type: "fill_blank",
        text: "Đọc câu ca dao: 'Cày đồng đang buổi ban trưa / Mồ hôi thánh thót như mưa ruộng cày'. Tác giả dân gian đã sử dụng từ láy 'thánh thót' để gợi tả vẻ rơi liên tục của ___. (Áp dụng Từ vựng)",
        correct: "mồ hôi",
        explanation: "Từ 'thánh thót' gợi hình ảnh những giọt mồ hôi rơi rơi liên tục vì lao động vất vả."
      },
      {
        id: "v6-q10",
        type: "mcq",
        text: "Hôm nay em phải viết một bài văn tả lại không khí của phiên chợ Tết quê em. Bước đầu tiên em cần làm theo quy trình viết là gì? (Áp dụng Kĩ năng Viết)",
        options: ["Viết ngay mở bài và thân bài", "Lập dàn ý chi tiết", "Chuẩn bị trước khi viết (Xác định mục đích, đối tượng, thu thập tư liệu)", "Kiểm tra và chỉnh sửa bài"],
        correct: "Chuẩn bị trước khi viết (Xác định mục đích, đối tượng, thu thập tư liệu)",
        explanation: "Trong quy trình viết 4 bước, bước 1 luôn là Chuẩn bị trước khi viết."
      }
    ]
  },
  {
    id: "khtn-7-kntt",
    title: "Khoa Học Tự Nhiên - Lớp 7 (Kết nối tri thức)",
    subject: "Khoa Học Tự Nhiên",
    grade: 7,
    questions: [
      {
        id: "k7-q1",
        type: "mcq",
        text: "Bạn Mai đi xe đạp từ nhà đến trường. Quãng đường dài 3 km, Mai đi mất 15 phút. Tốc độ đi xe đạp của Mai là bao nhiêu? (Áp dụng Tốc độ, sự an toàn giao thông)",
        options: ["12 km/h", "5 km/h", "3 km/h", "20 km/h"],
        correct: "12 km/h",
        explanation: "15 phút = 0.25 giờ. Tốc độ v = s/t = 3 / 0.25 = 12 km/h."
      },
      {
        id: "k7-q2",
        type: "true_false",
        text: "Để dập tắt một đám cháy do xăng dầu, ta nên dùng nước tạt mạnh vào đám cháy. (Áp dụng Tính chất của chất - Oxygen)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Xăng dầu nhẹ hơn nước, nếu dùng nước thì xăng dầu sẽ nổi lên trên và tiếp tục cháy, đồng thời lan rộng hơn."
      },
      {
        id: "k7-q3",
        type: "fill_blank",
        text: "Cầu vồng xuất hiện sau cơn mưa là kết quả của hiện tượng phân tích ánh sáng ___. (Áp dụng Ánh sáng)",
        correct: "trắng",
        explanation: "Ánh sáng mặt trời là ánh sáng trắng, khi đi qua các giọt nước mưa sẽ bị khúc xạ và tán sắc tạo thành cầu vồng."
      },
      {
        id: "k7-q4",
        type: "mcq",
        text: "Trong bảng tuần hoàn, nguyên tố X có số hiệu nguyên tử là 8. Nguyên tố này cần thiết cho quá trình hô hấp của con người. Đó là nguyên tố nào? (Áp dụng Sơ lược về Bảng tuần hoàn)",
        options: ["Carbon", "Nitrogen", "Oxygen", "Hydrogen"],
        correct: "Oxygen",
        explanation: "Nguyên tố có Z=8 là Oxygen (O), tham gia vào quá trình hô hấp."
      },
      {
        id: "k7-q5",
        type: "true_false",
        text: "Khi bị chó dại cắn, việc đầu tiên cần làm là rửa vết thương bằng xà phòng và nước sạch trong 15 phút. (Áp dụng Virus và Vi khuẩn)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Rửa vết thương bằng xà phòng giúp làm trôi giảm lượng virus dại tại chỗ cắn, đây là bước sơ cứu quan trọng nhất."
      },
      {
        id: "k7-q6",
        type: "fill_blank",
        text: "Trong một hệ sinh thái đồng ruộng, lúa bị châu chấu ăn, châu chấu lại bị ếch ăn. Mối quan hệ giữa lúa, châu chấu và ếch được gọi là một chuỗi ___ ăn. (Áp dụng Sinh thái học)",
        correct: "thức",
        explanation: "Chuỗi thức ăn thể hiện mối quan hệ dinh dưỡng (vật này ăn vật kia)."
      },
      {
        id: "k7-q7",
        type: "mcq",
        text: "Bác nông dân bón phân lân cho cây trồng để kích thích rễ phát triển. Phân lân chứa nguyên tố dinh dưỡng chính nào? (Áp dụng Nguyên tố hóa học)",
        options: ["Nitrogen (N)", "Phosphorus (P)", "Potassium (K)", "Calcium (Ca)"],
        correct: "Phosphorus (P)",
        explanation: "Phân lân cung cấp nguyên tố Phosphorus (P) giúp rễ cây phát triển mạnh."
      },
      {
        id: "k7-q8",
        type: "true_false",
        text: "Tiếng vang trong một hang động lớn được hình thành do hiện tượng phản xạ âm thanh. (Áp dụng Âm thanh)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Âm thanh khi gặp vật cản (vách đá) dội lại tạo ra tiếng vang (phản xạ âm)."
      },
      {
        id: "k7-q9",
        type: "fill_blank",
        text: "Vào mùa đông, chúng ta hay mặc áo len, áo dạ thay vì áo cotton mỏng vì áo len, dạ dẫn ___ kém, giúp giữ ấm cơ thể. (Áp dụng Năng lượng nhiệt)",
        correct: "nhiệt",
        explanation: "Áo len xốp, chứa nhiều không khí, mà không khí dẫn nhiệt kém nên giữ nhiệt cơ thể không truyền ra môi trường."
      },
      {
        id: "k7-q10",
        type: "mcq",
        text: "Để đo thời gian chạy 100m của các vận động viên tại trường học, dụng cụ nào là phù hợp nhất? (Áp dụng Đo thời gian)",
        options: ["Đồng hồ treo tường", "Đồng hồ cát", "Đồng hồ bấm giây", "Đồng hồ đo điện"],
        correct: "Đồng hồ bấm giây",
        explanation: "Đồng hồ bấm giây có độ chia nhỏ (đến 1/100s), rất phù hợp để đo thời gian trong các hoạt động thể thao diễn ra nhanh."
      }
    ]
  },
  {
    id: "anh-7-kntt",
    title: "Tiếng Anh - Lớp 7 (Kết nối tri thức - Global Success)",
    subject: "Tiếng Anh",
    grade: 7,
    questions: [
      {
        id: "e7-q1",
        type: "mcq",
        text: "You want to invite your friend to a volunteer club this weekend. Which sentence is the most appropriate? (Unit 3: Community service)",
        options: ["You must go to the volunteer club.", "How about joining the volunteer club with me?", "You don't want to join the club.", "Join it right now."],
        correct: "How about joining the volunteer club with me?",
        explanation: "'How about + V-ing' is used to make a polite suggestion or invitation."
      },
      {
        id: "e7-q2",
        type: "true_false",
        text: "If you want to stay healthy, you should eat a lot of junk food and sleep late. (Unit 2: Healthy living)",
        options: ["True", "False"],
        correct: "False",
        explanation: "Junk food and sleeping late are bad habits. You should eat healthy food and get enough sleep."
      },
      {
        id: "e7-q3",
        type: "fill_blank",
        text: "My grandfather loves collecting stamps. It is his favourite ___. (Unit 1: Hobbies)",
        correct: "hobby",
        explanation: "Collecting stamps is an activity done for pleasure in one's free time, which is a 'hobby'."
      },
      {
        id: "e7-q4",
        type: "mcq",
        text: "Your computer screen is broken, and you need to type an essay. You ask your brother for his laptop. What do you say? (Unit 7: Traffic / General communication)",
        options: ["Give me your laptop.", "Can I borrow your laptop, please?", "I want your laptop.", "Lend me the laptop now."],
        correct: "Can I borrow your laptop, please?",
        explanation: "'Can I borrow...' is a polite request."
      },
      {
        id: "e7-q5",
        type: "true_false",
        text: "Water puppetry is a traditional art form in Vietnam that began in the 11th century. (Unit 4: Music and Arts)",
        options: ["True", "False"],
        correct: "True",
        explanation: "Water puppetry (Múa rối nước) is a traditional Vietnamese art form originating in the Red River Delta."
      },
      {
        id: "e7-q6",
        type: "fill_blank",
        text: "We should use reusable bags instead of plastic bags to reduce ___. (Unit 3: Community service)",
        correct: "pollution",
        explanation: "Plastic bags contribute to environmental 'pollution'."
      },
      {
        id: "e7-q7",
        type: "mcq",
        text: "When riding a motorbike in Vietnam, you must always wear a ______ to protect your head. (Unit 7: Traffic)",
        options: ["hat", "cap", "helmet", "scarf"],
        correct: "helmet",
        explanation: "A 'helmet' (mũ bảo hiểm) is legally required and designed for head protection in traffic."
      },
      {
        id: "e7-q8",
        type: "true_false",
        text: "The sentence 'I went to Da Nang last summer' uses the Present Simple tense. (Unit 6: A visit to a school)",
        options: ["True", "False"],
        correct: "False",
        explanation: "The verb 'went' and the time marker 'last summer' indicate the Past Simple tense."
      },
      {
        id: "e7-q9",
        type: "fill_blank",
        text: "Pho is an incredibly popular Vietnamese traditional ___. (Unit 5: Food and drink)",
        correct: "dish",
        explanation: "Pho is a specific type of prepared food, best described as a 'dish'."
      },
      {
        id: "e7-q10",
        type: "mcq",
        text: "How ______ apples do you need to make this pie? - I need five. (Unit 5: Food and drink)",
        options: ["much", "many", "some", "any"],
        correct: "many",
        explanation: "'Apples' is a countable noun, so we use 'How many' to ask about quantity."
      }
    ]
  },
  {
    id: "toan-8-kntt",
    title: "Toán học - Lớp 8 (Kết nối tri thức)",
    subject: "Toán học",
    grade: 8,
    questions: [
      {
        id: "t8-q1",
        type: "mcq",
        text: "Để tính diện tích một tấm thảm hình chữ nhật, thợ may đo được chiều dài là (x + 2) mét và chiều rộng là (x - 2) mét. Biểu thức diện tích tấm thảm là gì? (Áp dụng Hằng đẳng thức đáng nhớ)",
        options: ["x^2 - 4", "x^2 + 4", "x^2 - 2x", "x^2 + 4x + 4"],
        correct: "x^2 - 4",
        explanation: "Diện tích = Dài * Rộng = (x + 2)(x - 2). Theo hằng đẳng thức hiệu hai bình phương: x^2 - 2^2 = x^2 - 4."
      },
      {
        id: "t8-q2",
        type: "true_false",
        text: "Kỹ sư thiết kế một mái nhà có dạng hình chóp tứ giác đều. Đáy của mái nhà này chắc chắn là một hình vuông. (Áp dụng Hình học không gian)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Hình chóp tứ giác đều có đáy là một đa giác đều 4 cạnh, tức là hình vuông."
      },
      {
        id: "t8-q3",
        type: "fill_blank",
        text: "Trong một bản vẽ kỹ thuật, tỷ lệ giữa chiều dài mô hình và chiều dài thực tế là phân thức (2x)/(3y). Khi x = 3, y = 4, tỷ lệ này bằng ___ (rút gọn thành phân số). (Áp dụng Phân thức đại số)",
        correct: "1/2",
        explanation: "Thay x=3, y=4 vào: (2*3)/(3*4) = 6/12 = 1/2."
      },
      {
        id: "t8-q4",
        type: "mcq",
        text: "Một người thợ mộc muốn cắt một mặt bàn hình tứ giác sao cho hai đường chéo cắt nhau tại trung điểm của mỗi đường. Mặt bàn đó sẽ có hình dáng gì? (Áp dụng Tứ giác đặc biệt)",
        options: ["Hình thang", "Hình bình hành", "Hình diều", "Hình thang cân"],
        correct: "Hình bình hành",
        explanation: "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành."
      },
      {
        id: "t8-q5",
        type: "true_false",
        text: "Xác suất thực nghiệm để một cầu thủ ném bóng trúng rổ trong 100 lần ném luôn luôn đúng bằng xác suất lý thuyết. (Áp dụng Xác suất thực nghiệm)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Xác suất thực nghiệm phụ thuộc vào kết quả thực tế và thường chỉ tiệm cận xác suất lý thuyết khi số lần thử rất lớn, không phải lúc nào cũng bằng nhau."
      },
      {
        id: "t8-q6",
        type: "fill_blank",
        text: "Để đo gián tiếp chiều cao của một cái cây, người ta dùng cọc tiêu và sử dụng định lí ___ trong tam giác vuông. (Áp dụng Định lí Pythagore)",
        correct: "Pythagore",
        explanation: "Định lí Pythagore liên hệ giữa ba cạnh của tam giác vuông, thường được áp dụng trong thực tiễn để tính các khoảng cách không thể đo trực tiếp."
      },
      {
        id: "t8-q7",
        type: "mcq",
        text: "Một công ty dự báo lợi nhuận y (triệu đồng) trong x tháng được biểu diễn bằng hàm số bậc nhất y = 50x - 20. Lợi nhuận sau 4 tháng là bao nhiêu? (Áp dụng Hàm số bậc nhất)",
        options: ["180 triệu đồng", "200 triệu đồng", "220 triệu đồng", "150 triệu đồng"],
        correct: "180 triệu đồng",
        explanation: "Thay x = 4 vào hàm số: y = 50(4) - 20 = 200 - 20 = 180 (triệu đồng)."
      },
      {
        id: "t8-q8",
        type: "true_false",
        text: "Phân tích đa thức x^2 - 6x + 9 thành nhân tử, kết quả là (x + 3)^2. (Áp dụng Phân tích đa thức thành nhân tử)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "x^2 - 6x + 9 = (x - 3)^2, không phải (x + 3)^2."
      },
      {
        id: "t8-q9",
        type: "fill_blank",
        text: "Khung của một chiếc diều có dạng hình thoi với hai đường chéo dài 60cm và 80cm. Diện tích phần giấy để dán kín mặt diều là ___ cm2. (Áp dụng Diện tích đa giác)",
        correct: "2400",
        explanation: "Diện tích hình thoi = (1/2) * d1 * d2 = (1/2) * 60 * 80 = 2400 cm2."
      },
      {
        id: "t8-q10",
        type: "mcq",
        text: "Biểu đồ tròn thể hiện tỉ lệ yêu thích các môn thể thao của lớp 8A: Bóng đá 40%, Cầu lông 30%, Bơi lội 20%, Bóng bàn 10%. Nếu lớp có 40 học sinh, số bạn thích Bơi lội là? (Áp dụng Thống kê)",
        options: ["4", "8", "12", "16"],
        correct: "8",
        explanation: "Số học sinh thích bơi lội: 40 * 20% = 8 (học sinh)."
      }
    ]
  },
  {
    id: "khtn-8-kntt",
    title: "Khoa Học Tự Nhiên - Lớp 8 (Kết nối tri thức)",
    subject: "Khoa Học Tự Nhiên",
    grade: 8,
    questions: [
      {
        id: "k8-q1",
        type: "mcq",
        text: "Khi một người thợ hàn sử dụng khí đá để hàn kim loại, phản ứng cháy tạo ra nhiệt độ rất cao. Khí sinh ra từ đất đèn (khí đá) khi tác dụng với nước là gì? (Áp dụng Phản ứng hóa học)",
        options: ["Khí Oxygen", "Khí Acetylene (C2H2)", "Khí Carbon dioxide", "Khí Hydrogen"],
        correct: "Khí Acetylene (C2H2)",
        explanation: "Đất đèn (CaC2) tác dụng với nước sinh ra khí Acetylene (C2H2), cháy tỏa nhiều nhiệt."
      },
      {
        id: "k8-q2",
        type: "true_false",
        text: "Để đẩy một chiếc tủ quần áo nặng trượt trên sàn nhà, bạn Nam cần tác dụng một lực lớn hơn lực ma sát nghỉ cực đại giữa tủ và sàn nhà. (Áp dụng Lực và Chuyển động)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Để làm vật bắt đầu chuyển động từ trạng thái đứng yên, lực kéo/đẩy phải thắng được lực ma sát nghỉ cực đại."
      },
      {
        id: "k8-q3",
        type: "fill_blank",
        text: "Khi thiết kế đập nước thủy điện, người ta luôn xây phần chân đập dày và rộng hơn phần đỉnh đập vì ___ của nước tăng theo độ sâu. (Áp dụng Áp suất chất lỏng)",
        correct: "áp suất",
        explanation: "Áp suất chất lỏng tăng theo độ sâu p=d*h, nên chân đập phải xây dày để chịu được áp suất lớn."
      },
      {
        id: "k8-q4",
        type: "mcq",
        text: "Để giảm bớt lượng acid dư thừa trong dạ dày gây ợ chua, người ta thường dùng các loại thuốc muối chứa chất nào? (Áp dụng Base và Acid)",
        options: ["Acid hydrochloric (HCl)", "Sodium bicarbonate (NaHCO3)", "Sodium chloride (NaCl)", "Sulfuric acid (H2SO4)"],
        correct: "Sodium bicarbonate (NaHCO3)",
        explanation: "Thuốc muối dạ dày thường chứa NaHCO3 hoặc Al(OH)3 để trung hòa bớt lượng HCl dư thừa trong dạ dày."
      },
      {
        id: "k8-q5",
        type: "true_false",
        text: "Máu lưu thông trong hệ mạch một chiều là nhờ hoạt động co bóp của tim và hệ thống các van tim, van tĩnh mạch. (Áp dụng Hệ tuần hoàn ở người)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Van tim và van tĩnh mạch đảm bảo máu chỉ chảy theo một chiều định sẵn, không bị chảy ngược lại."
      },
      {
        id: "k8-q6",
        type: "fill_blank",
        text: "Trong bình cứu hỏa dạng bọt, khi bóp van, phản ứng hóa học xảy ra tạo ra nhiều khí ___ giúp dập tắt ngọn lửa. (Áp dụng Hợp chất của Carbon)",
        correct: "CO2",
        explanation: "Khí Carbon dioxide (CO2) nặng hơn không khí, không duy trì sự cháy, bao phủ ngọn lửa và cách ly nó với Oxygen."
      },
      {
        id: "k8-q7",
        type: "mcq",
        text: "Người ta dùng ròng rọc động để kéo những khối vật liệu xây dựng lên cao nhằm mục đích gì? (Áp dụng Máy cơ đơn giản)",
        options: ["Đổi hướng của lực kéo", "Giảm một nửa lực kéo", "Tăng lực kéo lên gấp đôi", "Tăng quãng đường kéo"],
        correct: "Giảm một nửa lực kéo",
        explanation: "Ròng rọc động có tác dụng làm giảm lực kéo đi một nửa (được lợi 2 lần về lực) nhưng lại thiệt 2 lần về đường đi."
      },
      {
        id: "k8-q8",
        type: "true_false",
        text: "Sự khuếch tán của phân tử nước hoa trong phòng lạnh diễn ra nhanh hơn so với phòng có nhiệt độ cao. (Áp dụng Cấu tạo chất)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Nhiệt độ càng cao, các phân tử chuyển động nhiệt càng nhanh nên sự khuếch tán sẽ diễn ra nhanh hơn, không phải chậm hơn."
      },
      {
        id: "k8-q9",
        type: "fill_blank",
        text: "Hệ nội tiết tiết ra các ___ vào máu để điều hòa các quá trình sinh lý của cơ thể. (Áp dụng Hệ nội tiết)",
        correct: "hormone",
        explanation: "Sản phẩm của tuyến nội tiết là các hormone (kích thích tố), được ngấm trực tiếp vào máu để đi đến cơ quan đích."
      },
      {
        id: "k8-q10",
        type: "mcq",
        text: "Đòn bẩy ở dạng chiếc kẹp đá (kẹp gắp thức ăn) đem lại lợi ích gì? (Áp dụng Đòn bẩy)",
        options: ["Lợi về lực", "Đổi hướng của lực", "Lợi về đường đi", "Giảm công sinh ra"],
        correct: "Lợi về đường đi",
        explanation: "Kẹp đá là loại đòn bẩy mà điểm tựa nằm ở một đầu, lực tác dụng ở giữa. Loại này thiệt về lực nhưng lợi về đường đi."
      }
    ]
  },
  {
    id: "van-9-kntt",
    title: "Ngữ Văn - Lớp 9 (Kết nối tri thức)",
    subject: "Ngữ Văn",
    grade: 9,
    questions: [
      {
        id: "v9-q1",
        type: "mcq",
        text: "Khi thuyết minh về danh lam thắng cảnh Vịnh Hạ Long cho khách quốc tế, cấu trúc bài viết nào là logic và đầy đủ nhất? (Áp dụng Thuyết minh về một danh lam thắng cảnh)",
        options: ["Miêu tả - Kể chuyện bản thân - Kết luận", "Giới thiệu chung - Vị trí địa lí - Đặc điểm kiến tạo, cảnh quan - Giá trị văn hóa, kinh tế - Kết luận", "Chỉ kể lại một truyền thuyết về Vịnh Hạ Long", "Liệt kê các món ăn đặc sản tại Vịnh Hạ Long"],
        correct: "Giới thiệu chung - Vị trí địa lí - Đặc điểm kiến tạo, cảnh quan - Giá trị văn hóa, kinh tế - Kết luận",
        explanation: "Đây là cấu trúc chuẩn để cung cấp thông tin toàn diện, khách quan và khoa học về một danh lam thắng cảnh."
      },
      {
        id: "v9-q2",
        type: "true_false",
        text: "Trong bài 'Làng' của Kim Lân, diễn biến tâm trạng của ông Hai khi nghe tin làng chợ Dầu theo giặc được miêu tả chủ yếu qua thủ pháp độc thoại nội tâm. (Áp dụng Truyện ngắn hiện đại)",
        options: ["Đúng", "Sai"],
        correct: "Đúng",
        explanation: "Độc thoại nội tâm là thủ pháp nghệ thuật xuất sắc của Kim Lân để phơi bày sự giằng xé, đau đớn, tủi nhục của ông Hai."
      },
      {
        id: "v9-q3",
        type: "fill_blank",
        text: "Trong bài thơ 'Đồng chí', Chính Hữu đã sử dụng câu thơ đặc biệt chỉ gồm 2 tiếng '___!' để nhấn mạnh sự kết tinh tình cảm cách mạng thiêng liêng. (Áp dụng Thơ hiện đại)",
        correct: "Đồng chí",
        explanation: "Câu thơ thứ 7 chỉ có 2 chữ 'Đồng chí!' giống như một bản lề gắn kết tình đồng đội của những người lính."
      },
      {
        id: "v9-q4",
        type: "mcq",
        text: "Để tranh luận bảo vệ quan điểm 'Học sinh THCS không nên sử dụng mạng xã hội quá 2 tiếng mỗi ngày', em cần chú trọng nhất vào yếu tố nào? (Áp dụng Nghị luận xã hội)",
        options: ["Giọng điệu gay gắt, áp đảo người nghe", "Cảm xúc cá nhân để gây thương cảm", "Hệ thống luận điểm rõ ràng, lí lẽ logic và dẫn chứng xác thực", "Sử dụng nhiều từ ngữ địa phương"],
        correct: "Hệ thống luận điểm rõ ràng, lí lẽ logic và dẫn chứng xác thực",
        explanation: "Trong văn nghị luận, sức mạnh thuyết phục nằm ở sự chặt chẽ của lập luận (luận điểm, lí lẽ, dẫn chứng)."
      },
      {
        id: "v9-q5",
        type: "true_false",
        text: "Truyện Kiều của Nguyễn Du được viết hoàn toàn bằng chữ Quốc ngữ. (Áp dụng Truyện thơ Nôm)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Truyện Kiều là kiệt tác của văn học trung đại Việt Nam, được viết bằng chữ Nôm."
      },
      {
        id: "v9-q6",
        type: "fill_blank",
        text: "Biện pháp tu từ được sử dụng trong câu 'Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ, em nằm trên lưng' (Khúc hát ru những em bé lớn trên lưng mẹ) là biện pháp ___ dụ. (Áp dụng Thực hành tiếng Việt)",
        correct: "ẩn",
        explanation: "'Mặt trời của mẹ' là hình ảnh ẩn dụ, chỉ em bé Cu-tai, nguồn sống, niềm hi vọng của người mẹ."
      },
      {
        id: "v9-q7",
        type: "mcq",
        text: "Trong phần tóm tắt văn bản tự sự, người viết cần đảm bảo nguyên tắc nào? (Áp dụng Tóm tắt văn bản)",
        options: ["Đưa thêm ý kiến bình luận của cá nhân vào", "Giữ lại cốt truyện chính, các nhân vật quan trọng và sự kiện tiêu biểu", "Thay đổi ngôi kể để tạo sự mới mẻ", "Viết dài hơn văn bản gốc"],
        correct: "Giữ lại cốt truyện chính, các nhân vật quan trọng và sự kiện tiêu biểu",
        explanation: "Tóm tắt là rút gọn nội dung cốt lõi của tác phẩm trung thành với bản gốc."
      },
      {
        id: "v9-q8",
        type: "true_false",
        text: "Trong một buổi tọa đàm, khi không đồng tình với ý kiến của người khác, em nên lập tức ngắt lời để phản biện. (Áp dụng Nói và Nghe)",
        options: ["Đúng", "Sai"],
        correct: "Sai",
        explanation: "Văn hóa tranh luận yêu cầu phải lắng nghe hết ý kiến của người khác, sau đó mới xin phép phản biện một cách lịch sự."
      },
      {
        id: "v9-q9",
        type: "fill_blank",
        text: "Đoạn trích 'Lục Vân Tiên cứu Kiều Nguyệt Nga' thể hiện lí tưởng đạo đức 'Làm ơn há dễ mong người trả ___'. (Áp dụng Truyện thơ)",
        correct: "ơn",
        explanation: "Hành động cứu người của Lục Vân Tiên xuất phát từ tấm lòng hào hiệp, trượng nghĩa, không màng báo đáp."
      },
      {
        id: "v9-q10",
        type: "mcq",
        text: "Khi viết đơn xin gia nhập Câu lạc bộ tình nguyện, phần nào là không bắt buộc? (Áp dụng Văn bản hành chính)",
        options: ["Quốc hiệu, tiêu ngữ", "Lí do viết đơn", "Chữ kí người làm đơn", "Sở thích cá nhân không liên quan"],
        correct: "Sở thích cá nhân không liên quan",
        explanation: "Văn bản hành chính cần sự ngắn gọn, chính xác, không đưa những thông tin thừa, không liên quan đến mục đích xin gia nhập."
      }
    ]
  },
  {
    id: "anh-9-kntt",
    title: "Tiếng Anh - Lớp 9 (Kết nối tri thức - Global Success)",
    subject: "Tiếng Anh",
    grade: 9,
    questions: [
      {
        id: "e9-q1",
        type: "mcq",
        text: "To help a foreign tourist find their way to the traditional craft village, which sentence is best? (Unit 1: Local environment)",
        options: ["Go straight and turn left. You can't miss it.", "Why are you asking me?", "You are lost.", "I don't know the village."],
        correct: "Go straight and turn left. You can't miss it.",
        explanation: "This is a standard way to give clear directions to someone."
      },
      {
        id: "e9-q2",
        type: "true_false",
        text: "In English, a complex sentence contains at least one independent clause and one dependent clause. (Unit 3: Teen stress and pressure)",
        options: ["True", "False"],
        correct: "True",
        explanation: "A complex sentence combines an independent clause with one or more dependent (subordinate) clauses, often linked by words like 'because', 'although', 'if'."
      },
      {
        id: "e9-q3",
        type: "fill_blank",
        text: "Lan was extremely tired; ___, she tried to finish her assignment on time. (Unit 3: Teen stress and pressure)",
        correct: "however",
        explanation: "We need a transition word expressing contrast, often followed by a comma when placed after a semicolon. 'However' or 'nevertheless' fits perfectly."
      },
      {
        id: "e9-q4",
        type: "mcq",
        text: "Which phrasal verb means 'to have a good relationship with someone'? (Unit 2: City life)",
        options: ["get on with", "look forward to", "turn down", "take off"],
        correct: "get on with",
        explanation: "'Get on with' (or get along with) means to have a friendly relationship."
      },
      {
        id: "e9-q5",
        type: "true_false",
        text: "When writing an email of complaint about a product, you should use informal language and slang to show your anger. (Unit 8: Tourism)",
        options: ["True", "False"],
        correct: "False",
        explanation: "A formal email of complaint requires polite, formal language to effectively communicate the issue."
      },
      {
        id: "e9-q6",
        type: "fill_blank",
        text: "Bat Trang is famous for its traditional ___ such as bowls, vases, and plates. (Unit 1: Local environment)",
        correct: "pottery",
        explanation: "Bat Trang is a well-known pottery (ceramics) village in Vietnam."
      },
      {
        id: "e9-q7",
        type: "mcq",
        text: "She asked me where I ______ from. (Unit 6: Viet Nam: Then and now - Reported speech)",
        options: ["come", "came", "coming", "to come"],
        correct: "came",
        explanation: "In reported speech, the tense shifts one step back. 'Where do you come from?' becomes 'where I came from'."
      },
      {
        id: "e9-q8",
        type: "true_false",
        text: "The phrase 'make ends meet' means to earn just enough money to pay for your living expenses. (Unit 2: City life)",
        options: ["True", "False"],
        correct: "True",
        explanation: "'Make ends meet' is an idiom meaning to have enough money to cover basic expenses."
      },
      {
        id: "e9-q9",
        type: "fill_blank",
        text: "The ___ system in our city has improved significantly with new buses and trains. (Unit 2: City life)",
        correct: "transport",
        explanation: "Buses and trains refer to public 'transport' (or transportation)."
      },
      {
        id: "e9-q10",
        type: "mcq",
        text: "If I ______ you, I would take a break and relax. (Unit 3: Teen stress - Conditional type 2)",
        options: ["am", "was", "were", "been"],
        correct: "were",
        explanation: "In second conditional sentences expressing advice ('If I were you...'), 'were' is conventionally used for all subjects."
      }
    ]
  }
];