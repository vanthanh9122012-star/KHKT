// =========================================================================
// NGÂN HÀNG CÂU HỎI VẬT LIỆU XÂY DỰNG & TOÁN KIẾN TRÚC SƯ THCS
// Dành cho trò chơi "Thị Trấn Nhỏ" (Tiny Town 3D Builder)
// =========================================================================

export const CONSTRUCTION_QUESTIONS = [
  {
    id: "mat_01",
    category: "Vật Liệu Đất Nung",
    badge: "Gạch Xây Dựng",
    question: "Nguyên liệu chính yếu để sản xuất ra những viên gạch đất nung truyền thống là gì?",
    options: ["Đất sét và cát", "Đá vôi và xỉ than", "Bột thạch cao và sợi thủy tinh", "Cát thạch anh và tro bay"],
    correct: "Đất sét và cát",
    explanation: "Đất sét dẻo kết hợp với một tỉ lệ cát và nước thích hợp là nguyên liệu cốt lõi để đúc khuôn và nung thành gạch xây dựng vững chắc.",
    woodReward: 100
  },
  {
    id: "mat_02",
    category: "Quy Trình Nhiệt",
    badge: "Nung Gạch",
    question: "Gạch đất sét sau khi phơi ráo ẩm sẽ được nung trong lò nung ở khoảng nhiệt độ nào để kết khối hóa đá?",
    options: ["1000°C - 1200°C", "200°C - 300°C", "500°C - 600°C", "2000°C - 2500°C"],
    correct: "1000°C - 1200°C",
    explanation: "Ở nhiệt độ cao 1000°C - 1200°C, các khoáng sét nóng chảy một phần và liên kết chặt chẽ lại với nhau, tạo nên độ cứng và khả năng chịu nén tuyệt vời cho viên gạch.",
    woodReward: 100
  },
  {
    id: "mat_03",
    category: "Hóa Học Xây Dựng",
    badge: "Màu Sắc Gạch",
    question: "Màu đỏ gạch đặc trưng của gạch đất nung sau khi ra lò chủ yếu do thành phần hóa học nào trong đất sét quyết định?",
    options: ["Oxit sắt (Fe2O3)", "Canxi cacbonat (CaCO3)", "Oxit silic (SiO2)", "Magie sunfat (MgSO4)"],
    correct: "Oxit sắt (Fe2O3)",
    explanation: "Hàm lượng khoáng sắt trong đất sét bị oxy hóa trong môi trường nhiệt độ cao của lò nung tạo thành Fe2O3 mang sắc đỏ cam tự nhiên.",
    woodReward: 120
  },
  {
    id: "mat_04",
    category: "Vật Liệu Kết Dính",
    badge: "Xi Măng",
    question: "Hiện tượng xi măng và vữa xây dựng dần dần đông cứng và hóa đá khi trộn với nước được gọi là phản ứng gì?",
    options: ["Phản ứng thủy hóa (Hydration)", "Phản ứng quang hợp", "Phản ứng bay hơi vật lý", "Phản ứng lên men"],
    correct: "Phản ứng thủy hóa (Hydration)",
    explanation: "Khi tiếp xúc với nước, các hợp chất silicat canxi trong xi măng xảy ra phản ứng thủy hóa, tạo thành mạng lưới tinh thể đan xen làm khối vữa đông kết và tăng dần cường độ chịu lực.",
    woodReward: 100
  },
  {
    id: "mat_05",
    category: "Vật Liệu Cốt Lõi",
    badge: "Bê Tông Cốt Thép",
    question: "Bê tông cốt thép là sự kết hợp hoàn hảo giữa 2 đặc tính chịu lực nào của bê tông và thép?",
    options: [
      "Bê tông chịu nén rất tốt, còn thanh thép chịu lực kéo rất giỏi",
      "Bê tông chịu uốn giỏi, còn thép chịu nén giỏi",
      "Bê tông giúp cách điện, còn thép giúp dẫn nhiệt",
      "Cả bê tông và thép đều chỉ có tác dụng chịu lực cắt"
    ],
    correct: "Bê tông chịu nén rất tốt, còn thanh thép chịu lực kéo rất giỏi",
    explanation: "Bê tông cứng rắn chịu nén xuất sắc nhưng giòn dễ gãy khi kéo; thanh thép dẻo dai chịu lực kéo siêu hạng. Kết hợp cả 2 tạo nên cấu kiện dầm cột kiên cố trước mọi tải trọng.",
    woodReward: 120
  },
  {
    id: "mat_06",
    category: "Khoa Học Vật Liệu",
    badge: "Kính Kiến Trúc",
    question: "Kính xây dựng trong suốt được tạo nên bằng cách nung chảy nguyên liệu tự nhiên nào ở nhiệt độ xấp xỉ 1700°C?",
    options: ["Cát thạch anh (Silic dioxit - SiO2)", "Đá vôi tinh khiết", "Quặng bauxit nhôm", "Đất sét trắng cao lanh"],
    correct: "Cát thạch anh (Silic dioxit - SiO2)",
    explanation: "Cát thạch anh trắng tinh khiết kết hợp tro soda và đá vôi được nung chảy ở nhiệt độ cực cao, sau đó làm nguội từ từ trên bể thiếc lỏng tạo thành những tấm kính nổi phẳng mịn trong suốt.",
    woodReward: 110
  },
  {
    id: "mat_07",
    category: "Địa Chất Xây Dựng",
    badge: "Đá Tự Nhiên",
    question: "Loại đá tự nhiên nào hình thành từ dung nham macma nguội sâu dưới lòng đất, có độ cứng vượt trội và thường dùng làm móng nhà, mặt bếp?",
    options: ["Đá Granite (Hoa cương)", "Đá vôi (Limestone)", "Đá phấn (Chalk)", "Đá phiến sét"],
    correct: "Đá Granite (Hoa cương)",
    explanation: "Đá Granite là đá macma xâm nhập với các tinh thể thạch anh, fenspat đan cài chặt chẽ, có độ cứng chỉ sau kim cương và khả năng chống thấm nước gần như tuyệt đối.",
    woodReward: 100
  },
  {
    id: "mat_08",
    category: "Kỹ Thuật Mộc",
    badge: "Gỗ Xây Dựng",
    question: "Trước khi đem gỗ tự nhiên ra gia công cửa sổ và khung nhà, người thợ mộc nhất thiết phải thực hiện công đoạn nào để chống co ngót cong vênh?",
    options: ["Tẩm sấy rút độ ẩm tiêu chuẩn", "Ngâm trong dầu hỏa", "Phơi nắng gắt liên tục 3 năm", "Sơn màu trực tiếp khi cây còn tươi"],
    correct: "Tẩm sấy rút độ ẩm tiêu chuẩn",
    explanation: "Gỗ tự nhiên chứa lượng nước mao dẫn lớn. Tẩm sấy khoa học giúp hạ độ ẩm về mức 12-15%, triệt tiêu ứng suất nội tại và ngăn chặn nấm mốc mối mọt phát triển.",
    woodReward: 110
  },
  {
    id: "mat_09",
    category: "Vật Liệu Bao Che",
    badge: "Mái Ngói",
    question: "Tại sao ở khí hậu nhiệt đới gió mùa như Việt Nam, mái nhà dốc lợp ngói đỏ lại được ưa chuộng hàng đầu?",
    options: [
      "Thoát nước mưa xối xả cực nhanh và khe ngói thoáng khí giúp cách nhiệt chống nóng",
      "Để giảm bớt ánh sáng mặt trời chiếu vào sân vườn",
      "Vì ngói nhẹ hơn tấm tôn kim loại rất nhiều",
      "Ngói hút nước mưa để làm mát toàn bộ ngôi nhà"
    ],
    correct: "Thoát nước mưa xối xả cực nhanh và khe ngói thoáng khí giúp cách nhiệt chống nóng",
    explanation: "Ngói đất nung có khả năng phản xạ nhiệt mặt trời tốt, hệ vì kèo mái dốc từ 30° giúp nước mưa trút xuống ngay lập tức mà không gây ứ đọng dột nát.",
    woodReward: 120
  },
  {
    id: "mat_10",
    category: "Toán Kiến Trúc Sư",
    badge: "Đo Đạc Diện Tích",
    question: "Bác kiến trúc sư thiết kế sàn tầng 1 hình chữ nhật có chiều dài 8m và chiều rộng 6m. Diện tích mặt sàn ngôi nhà là bao nhiêu mét vuông?",
    options: ["48 m²", "28 m²", "14 m²", "56 m²"],
    correct: "48 m²",
    explanation: "Công thức tính diện tích hình chữ nhật: S = a × b = 8m × 6m = 48 mét vuông (m²).",
    woodReward: 100
  },
  {
    id: "mat_11",
    category: "Toán Kiến Trúc Sư",
    badge: "Thể Tích Không Gian",
    question: "Một phòng khách có diện tích sàn 30 m² và chiều cao từ sàn lên trần là 3.5m. Thể tích không khí lưu thông của căn phòng là bao nhiêu?",
    options: ["105 m³", "90 m³", "70 m³", "120 m³"],
    correct: "105 m³",
    explanation: "Thể tích hình hộp chữ nhật: V = Diện tích đáy × Chiều cao = 30m² × 3.5m = 105 mét khối (m³). Thể tích đủ lớn giúp căn phòng luôn mát mẻ và thông thoáng.",
    woodReward: 110
  },
  {
    id: "mat_12",
    category: "Dự Toán Xây Dựng",
    badge: "Tính Gạch Xây Tường",
    question: "Theo định mức xây dựng thông thường, 1 m² tường dày 110mm cần khoảng 65 viên gạch ống. Để xây một bức tường có diện tích 20 m², bạn cần bao nhiêu viên gạch?",
    options: ["1300 viên gạch", "1100 viên gạch", "850 viên gạch", "1600 viên gạch"],
    correct: "1300 viên gạch",
    explanation: "Số lượng gạch = Diện tích bức tường × Định mức trên mỗi m² = 20 × 65 = 1300 viên gạch.",
    woodReward: 120
  },
  {
    id: "mat_13",
    category: "Vật Liệu Cát Đá",
    badge: "Cát Xây Dựng",
    question: "Tại sao trong xây dựng công trình kiên cố, người ta nghiêm cấm tuyệt đối sử dụng cát biển chưa qua xử lý để trộn bê tông?",
    options: [
      "Muối mặn (NaCl) trong cát biển sẽ ăn mòn và gỉ sét cốt thép bên trong bê tông",
      "Cát biển hạt quá to không thể kết dính với xi măng",
      "Cát biển làm nước trong bê tông bị sôi lên",
      "Cát biển làm màu bê tông chuyển sang màu đen"
    ],
    correct: "Muối mặn (NaCl) trong cát biển sẽ ăn mòn và gỉ sét cốt thép bên trong bê tông",
    explanation: "Ion Cl- trong muối biển phá hủy lớp màng thụ động bảo vệ thép, gây ăn mòn điện hóa làm gỉ sét, nứt toác bê tông từ bên trong, gây sập đổ công trình.",
    woodReward: 130
  },
  {
    id: "mat_14",
    category: "Khí Hậu Kiến Trúc",
    badge: "Hướng Nhà Đẹp",
    question: "Ở bán cầu Bắc (như đất nước Việt Nam), hướng nhà nào đón được ánh sáng chan hòa ấm áp vào mùa đông và luồng gió mát mẻ vào mùa hè?",
    options: ["Hướng Nam hoặc Đông Nam", "Hướng chính Bắc", "Hướng Tây", "Hướng Tây Bắc"],
    correct: "Hướng Nam hoặc Đông Nam",
    explanation: "Dân gian có câu 'Lấy vợ hiền hòa, làm nhà hướng Nam'. Nhà hướng Nam và Đông Nam đón trọn gió mùa Đông Nam mát rượi, tránh được nắng gắt phía Tây và gió mùa đông bắc lạnh giá phía Bắc.",
    woodReward: 110
  },
  {
    id: "mat_15",
    category: "Cấu Tạo Móng",
    badge: "Móng Nhà",
    question: "Bộ phận kết cấu nào nằm sâu dưới lòng đất, có nhiệm vụ tiếp nhận toàn bộ tải trọng của ngôi nhà và truyền an toàn xuống nền đất đá bên dưới?",
    options: ["Móng nhà (Foundation)", "Sàn mái", "Lanh tô cửa sổ", "Cột cờ"],
    correct: "Móng nhà (Foundation)",
    explanation: "Móng nhà là gốc rễ của mọi công trình xây dựng. Nền móng vững chãi làm từ đá hộc và bê tông giúp công trình không bị lún nứt, nghiêng đổ qua thời gian.",
    woodReward: 100
  },
  {
    id: "mat_16",
    category: "Thiết Kế Cầu Thang",
    badge: "Kích Thước Nhân Trắc",
    question: "Để bước chân đi lại thoải mái và an toàn cho cả người già và trẻ nhỏ, chiều cao của mỗi bậc cầu thang trong nhà ở thường được thiết kế là bao nhiêu?",
    options: ["15 cm - 18 cm", "25 cm - 30 cm", "8 cm - 10 cm", "35 cm - 40 cm"],
    correct: "15 cm - 18 cm",
    explanation: "Chiều cao cổ bậc từ 15-18cm kết hợp mặt bậc rộng 25-28cm thỏa mãn công thức bước chân 2h + b ≈ 60cm, giúp người đi không bị mỏi gối hay hụt chân.",
    woodReward: 110
  },
  {
    id: "mat_17",
    category: "Vật Liệu Thép",
    badge: "Thép Xây Dựng",
    question: "Thép xây dựng được sản xuất từ quặng sắt nung chảy trong lò cao, hàm lượng nguyên tố cacbon trong thép thường là bao nhiêu để đảm bảo tính dẻo dai?",
    options: ["Dưới 2%", "Trên 15%", "Khoảng 50%", "100% nguyên chất"],
    correct: "Dưới 2%",
    explanation: "Thép là hợp kim của sắt với hàm lượng cacbon nhỏ hơn 2%. Nếu hàm lượng cacbon quá cao (như gang > 2.14%) thì kim loại sẽ trở nên giòn và dễ gãy khi chịu uốn nén.",
    woodReward: 120
  },
  {
    id: "mat_18",
    category: "Năng Lượng Xanh",
    badge: "Ngôi Nhà Thông Minh",
    question: "Thiết kế ô giếng trời (Sky light) hoặc cửa sổ mái bằng kính cường lực đem lại lợi ích môi trường to lớn nào cho ngôi nhà?",
    options: [
      "Tận dụng ánh sáng tự nhiên ban ngày và đối lưu không khí, giảm tiêu thụ điện năng",
      "Làm cho trần nhà nặng hơn",
      "Để nước mưa chảy thẳng vào phòng ngủ",
      "Để sóng wifi bắt được xa hơn"
    ],
    correct: "Tận dụng ánh sáng tự nhiên ban ngày và đối lưu không khí, giảm tiêu thụ điện năng",
    explanation: "Giếng trời tạo hiệu ứng ống khói tự nhiên đẩy khí nóng lên cao và hút gió tươi vào tầng dưới, đồng thời chiếu sáng toàn bộ ngôi nhà mà không cần bật đèn ban ngày.",
    woodReward: 120
  },
  {
    id: "mat_19",
    category: "Siêu Vật Liệu Hiếm",
    badge: "Aerogel Siêu Cách Nhiệt",
    question: "Aerogel (Khói đóng băng) là vật liệu rắn nhẹ nhất hành tinh với 99.8% thể tích là không khí. Trong xây dựng cao cấp, Aerogel có ưu điểm vượt trội nào?",
    options: [
      "Khả năng cách nhiệt và cách âm phi thường dù tấm đệm chỉ dày vài milimet",
      "Khả năng phát sáng trong bóng tối mà không cần pin",
      "Tự tạo ra nước ngọt khi độ ẩm không khí tăng cao",
      "Có thể thay thế hoàn toàn xi măng để đổ móng nhà"
    ],
    correct: "Khả năng cách nhiệt và cách âm phi thường dù tấm đệm chỉ dày vài milimet",
    explanation: "Cấu trúc nano rỗng xốp bẫy các phân tử khí khiến Aerogel có hệ số dẫn nhiệt gần như bằng 0, cách nhiệt hiệu quả gấp 5 lần sợi thủy tinh truyền thống.",
    woodReward: 140
  },
  {
    id: "mat_20",
    category: "Công Nghệ Sinh Học",
    badge: "Bê Tông Tự Phục Hồi",
    question: "Bê tông sinh học thông minh (Bio-Concrete) có khả năng tự vá lành vết nứt nẻ qua thời gian nhờ vào cơ chế bí mật nào?",
    options: [
      "Cấy bào tử vi khuẩn và dưỡng chất, khi nứt có nước ngấm vào vi khuẩn sẽ tiết đá vôi (CaCO3) hàn kín",
      "Chứa rễ cây mini tự mọc bện chặt các vết nứt",
      "Chứa nam châm siêu nhỏ tự hút các hạt xi măng lại gần nhau",
      "Chứa dầu bôi trơn tự làm liền mặt bê tông"
    ],
    correct: "Cấy bào tử vi khuẩn và dưỡng chất, khi nứt có nước ngấm vào vi khuẩn sẽ tiết đá vôi (CaCO3) hàn kín",
    explanation: "Các nhà khoa học cấy vi khuẩn Bacillus cùng thức ăn canxi lactat vào bê tông. Khi xuất hiện vết nứt, nước và oxy ngấm vào đánh thức vi khuẩn chuyển hóa canxi thành tinh thể đá vôi CaCO3 bịt kín vết rạn nứt vĩnh viễn.",
    woodReward: 140
  },
  {
    id: "mat_21",
    category: "Kính Thông Minh",
    badge: "Kính Điện Đổi Màu",
    question: "Kính điện thông minh (Electrochromic Smart Glass) lắp đặt cho các tòa nhà hiện đại hoạt động dựa trên nguyên lý nào?",
    options: [
      "Chỉ cần cấp một xung điện nhỏ là bề mặt kính tự chuyển từ trong suốt sang mờ sẫm để cản 98% nhiệt nắng",
      "Kính tự động mở cánh ra khi nhiệt độ phòng trên 30°C",
      "Kính chứa chất lỏng phát sáng khi trời tối",
      "Kính đổi màu nhờ sơn lớp phẩm màu hóa học phản quang"
    ],
    correct: "Chỉ cần cấp một xung điện nhỏ là bề mặt kính tự chuyển từ trong suốt sang mờ sẫm để cản 98% nhiệt nắng",
    explanation: "Khi có dòng điện cực nhỏ vài vôn chạy qua, các ion liti di chuyển giữa các lớp oxit vonfram làm kính chuyển màu sẫm lọc ánh sáng chói chang và cản bức xạ hồng ngoại, giúp tiết kiệm tới 40% chi phí điều hòa.",
    woodReward: 130
  },
  {
    id: "mat_22",
    category: "Vật Liệu Composite",
    badge: "Sợi Carbon CFRP",
    question: "Tấm sợi Carbon (CFRP) siêu bền được mệnh danh là 'áo giáp' gia cường cho các dầm cột và cây cầu lớn nhờ đặc tính nào?",
    options: [
      "Nhẹ hơn thép 4 lần nhưng độ bền chịu kéo gấp từ 5 đến 10 lần thép xây dựng",
      "Có thể tự uốn cong theo ý muốn của chủ nhà",
      "Dễ dàng hòa tan trong nước mưa",
      "Giá thành rẻ hơn cát xây dựng thông thường"
    ],
    correct: "Nhẹ hơn thép 4 lần nhưng độ bền chịu kéo gấp từ 5 đến 10 lần thép xây dựng",
    explanation: "Sợi carbon bện kết hợp keo epoxy tạo ra vật liệu composite siêu nhẹ, không bao giờ bị ăn mòn rỉ sét, chịu lực kéo siêu đẳng và là giải pháp gia cường chống động đất số một thế giới.",
    woodReward: 130
  },
  {
    id: "mat_23",
    category: "Vật Liệu Sinh Thái",
    badge: "Gỗ Trong Suốt",
    question: "Gỗ trong suốt (Transparent Wood) - vật liệu tương lai thân thiện môi trường thay thế kính - được tạo ra bằng cách nào?",
    options: [
      "Tách bỏ hợp chất lignin màu nâu trong thớ gỗ, sau đó ngâm tẩm polymer sinh học quang học",
      "Mài thân cây gỗ tự nhiên mỏng như tờ giấy",
      "Lai tạo giống cây gỗ có thân trong suốt như thạch",
      "Nung gỗ ở nhiệt độ 3000°C để gỗ hóa thành thủy tinh"
    ],
    correct: "Tách bỏ hợp chất lignin màu nâu trong thớ gỗ, sau đó ngâm tẩm polymer sinh học quang học",
    explanation: "Lignin là chất hấp thụ ánh sáng làm gỗ có màu nâu. Khi chiết xuất bỏ lignin và lấp đầy khoảng rỗng bằng nhựa sinh học, các thớ cellulose cho phép hơn 85% ánh sáng truyền qua mà vẫn giữ độ dẻo dai khó vỡ của gỗ.",
    woodReward: 140
  },
  {
    id: "mat_24",
    category: "Ánh Sáng Đô Thị",
    badge: "Bê Tông Phát Quang",
    question: "Bê tông phát quang trong đêm (Photoluminescent Concrete) dùng làm lối đi sân vườn và vỉa hè hoạt động ra sao?",
    options: [
      "Hấp thụ và tích lũy quang năng từ ánh nắng mặt trời ban ngày, sau đó tự phát ra ánh sáng dịu suốt đêm",
      "Cần lắp bóng đèn LED nhỏ bên dưới lòng đường",
      "Phát quang nhờ phản ứng cháy chậm của phốt pho nguy hiểm",
      "Chỉ phát sáng khi có người bước chân dẫm lên"
    ],
    correct: "Hấp thụ và tích lũy quang năng từ ánh nắng mặt trời ban ngày, sau đó tự phát ra ánh sáng dịu suốt đêm",
    explanation: "Hỗn hợp bê tông trộn các hạt khoáng chất phát quang strontium aluminat an toàn. Sau vài giờ phơi nắng, con đường bê tông có thể phát ra ánh sáng xanh ngọc dịu mắt từ 8 đến 10 tiếng mà không tốn một watt điện.",
    woodReward: 120
  },
  {
    id: "mat_25",
    category: "Kim Loại Kiến Trúc",
    badge: "Thép Corten Độc Đáo",
    question: "Thép Corten (Thép phong hóa - Weathering Steel) tại sao lại được các kiến trúc sư thế giới ưa chuộng cho mặt tiền công trình nghệ thuật?",
    options: [
      "Tự hình thành lớp gỉ oxit màu nâu đỏ bảo vệ bề mặt, ngăn chặn quá trình ăn mòn sâu mà không cần sơn",
      "Vì thép này nhẹ nổi được trên mặt nước",
      "Thép có hương thơm của gỗ đàn hương",
      "Thép có thể tự uốn cong khi gặp thời tiết lạnh"
    ],
    correct: "Tự hình thành lớp gỉ oxit màu nâu đỏ bảo vệ bề mặt, ngăn chặn quá trình ăn mòn sâu mà không cần sơn",
    explanation: "Nhờ chứa các nguyên tố hợp kim như đồng, crom, niken; khi tiếp xúc với khí quyển, thép Corten tạo ra một lớp gỉ đặc quánh bảo vệ lõi kim loại bên trong vĩnh cửu và mang vẻ đẹp hoài niệm, cổ kính.",
    woodReward: 130
  },
  {
    id: "mat_26",
    category: "Đá Tự Nhiên Quý Hiếm",
    badge: "Đá Cẩm Thạch Calacatta",
    question: "Dòng đá cẩm thạch Calacatta và Carrara siêu quý hiếm có nguồn gốc từ mỏ đá vùng nào và đặc điểm nhận diện là gì?",
    options: [
      "Khai thác từ rặng núi đá vôi Apuan ở Ý, nền trắng muốt với các đường vân xám vàng vương giả",
      "Khai thác dưới đáy vực Mariana sâu 11000m",
      "Đá nhân tạo làm từ xỉ than nhiệt điện",
      "Đá đen tuyền không có bất kỳ hoa văn nào"
    ],
    correct: "Khai thác từ rặng núi đá vôi Apuan ở Ý, nền trắng muốt với các đường vân xám vàng vương giả",
    explanation: "Đá Calacatta từ vùng núi Carrara nước Ý trải qua hàng triệu năm biến chất địa chất cực hạn, sở hữu nền trắng tinh khôi cùng đường vân vàng xám thanh thoát, là biểu tượng xa hoa trong các cung điện và biệt thự.",
    woodReward: 140
  },
  {
    id: "mat_27",
    category: "Chống Thấm Ngầm",
    badge: "Đất Sét Bentonite",
    question: "Tại sao màng đất sét Bentonite natri lại là vật liệu chống thấm ngầm tuyệt hảo cho tầng hầm và đáy hồ cảnh quan?",
    options: [
      "Khi tiếp xúc với nước, đất sét này trương nở thể tích gấp 15-20 lần tạo thành khối gel bịt kín mọi lỗ rò rỉ",
      "Nó làm đông cứng nước thành đá ngay lập tức",
      "Nó đẩy nước bay hơi lên không trung",
      "Nó hút toàn bộ nước và biến mất không để lại dấu vết"
    ],
    correct: "Khi tiếp xúc với nước, đất sét này trương nở thể tích gấp 15-20 lần tạo thành khối gel bịt kín mọi lỗ rò rỉ",
    explanation: "Bentonite là khoáng sét montmorillonite nguồn gốc tro núi lửa. Khả năng hút nước trương nở mãnh liệt tạo ra một lớp đệm màng nhầy không thấm nước, tự hàn gắn các vết rạn nứt nhỏ ở tầng hầm công trình.",
    woodReward: 120
  },
  {
    id: "mat_28",
    category: "Kim Loại Siêu Bền",
    badge: "Titanium Kiến Trúc",
    question: "Bảo tàng Guggenheim Bilbao nổi tiếng thế giới được bọc hàng chục ngàn tấm Titanium (Titan). Ưu thế vô song của Titan là gì?",
    options: [
      "Khả năng kháng ăn mòn muối biển và mưa axit gần như vĩnh cửu, bền bỉ hàng thế kỷ",
      "Titan rẻ hơn sắt thép xây dựng rất nhiều",
      "Titan mềm dẻo như bơ có thể cắt bằng dao ăn",
      "Titan có thể tan biến trong đất sau 10 năm"
    ],
    correct: "Khả năng kháng ăn mòn muối biển và mưa axit gần như vĩnh cửu, bền bỉ hàng thế kỷ",
    explanation: "Titanium tạo ra lớp màng thụ động titan dioxit (TiO2) siêu mỏng nhưng cực kỳ bền vững, trơ hoàn toàn trước muối biển, mưa axit và các hóa chất ăn mòn, giữ vẻ sáng ánh kim bất biến cùng thời gian.",
    woodReward: 130
  },
  {
    id: "mat_29",
    category: "Bê Tông Tương Lai",
    badge: "Bê Tông UHPC",
    question: "Bê tông siêu tính năng cao (UHPC - Ultra-High Performance Concrete) khác biệt gì so với bê tông thường?",
    options: [
      "Cường độ nén chịu lực vượt trên 150-200 MPa (gấp 5-6 lần bê tông thường) và gần như không có lỗ rỗng",
      "Bê tông UHPC có thể uống được như nước suối",
      "Bê tông UHPC làm từ cát đường và thạch cao",
      "UHPC chỉ cứng được trong vòng 24 giờ rồi tự vỡ vụn"
    ],
    correct: "Cường độ nén chịu lực vượt trên 150-200 MPa (gấp 5-6 lần bê tông thường) và gần như không có lỗ rỗng",
    explanation: "Nhờ phối liệu hạt siêu mịn silica fume kết hợp sợi thép cường độ cao, UHPC có cấu trúc vi mô đặc khít gần như tuyệt đối, giúp xây dựng những cây cầu siêu mỏng thanh thoát và nhịp lớn phi thường.",
    woodReward: 140
  },
  {
    id: "mat_30",
    category: "Vật Liệu Nhẹ",
    badge: "Bê Tông Khí Chưng Áp AAC",
    question: "Gạch bê tông khí chưng áp (AAC) có đặc tính vật lý kỳ diệu nào giúp giảm đáng kể tải trọng móng ngôi nhà?",
    options: [
      "Nhẹ hơn gạch đất nung thông thường từ 2 đến 3 lần và có thể nổi bồng bềnh trên mặt nước",
      "Trong suốt như mặt hồ nước mùa thu",
      "Có thể kéo dài ra như dây cao su",
      "Tự động tan chảy khi mùa đông đến"
    ],
    correct: "Nhẹ hơn gạch đất nung thông thường từ 2 đến 3 lần và có thể nổi bồng bềnh trên mặt nước",
    explanation: "Quá trình phản ứng bột nhôm sinh ra hàng triệu bóng khí hydro li ti được chưng áp ở nhiệt độ 190°C và áp suất 12 atm, tạo ra khối gạch xốp cách âm cách nhiệt siêu nhẹ nổi được trên mặt nước.",
    woodReward: 120
  },
  {
    id: "mat_31",
    category: "Xây Dựng Xanh",
    badge: "Tro Bay & Xỉ Lò Cao",
    question: "Việc thay thế một phần xi măng bằng Tro bay (Fly Ash) và Xỉ lò cao (GGBS) mang lại lợi ích gì cho môi trường và công trình?",
    options: [
      "Giảm phát thải khí nhà kính CO2, đồng thời tăng độ đặc chắc và chống ăn mòn sunfat cho bê tông",
      "Làm bê tông có mùi thơm hoa hồng",
      "Làm công trình nhẹ đi 90%",
      "Giúp bê tông phát ra sóng điện thoại 5G"
    ],
    correct: "Giảm phát thải khí nhà kính CO2, đồng thời tăng độ đặc chắc và chống ăn mòn sunfat cho bê tông",
    explanation: "Sản xuất xi măng truyền thống thải ra lượng CO2 khổng lồ. Tái chế tro bay và xỉ hạt lò cao tạo ra Bê Tông Xanh bền vững, phản ứng puzolan giúp cấu trúc bê tông ngày càng cứng chắc theo năm tháng.",
    woodReward: 130
  },
  {
    id: "mat_32",
    category: "Điều Hòa Nhiệt",
    badge: "Vật Liệu Biến Đổi Pha PCM",
    question: "Vật liệu chuyển pha (PCM - Phase Change Materials) tích hợp vào tường nhà đóng vai trò như 'máy điều hòa tự nhiên' nhờ cơ chế nào?",
    options: [
      "Hấp thu nhiệt lượng nóng vào ban ngày khi tan chảy và giải phóng nhiệt làm ấm phòng ban đêm khi đông đặc",
      "Chứa quạt gió mini chạy bằng pin mặt trời",
      "Liên tục phun hơi nước sương mù vào trong phòng",
      "Tự động thay đổi kích thước căn phòng theo thời tiết"
    ],
    correct: "Hấp thu nhiệt lượng nóng vào ban ngày khi tan chảy và giải phóng nhiệt làm ấm phòng ban đêm khi đông đặc",
    explanation: "PCM lưu trữ nhiệt ẩn qua quá trình biến đổi pha lỏng - rắn. Khi ban ngày trời nóng, PCM tan chảy hấp thu bớt nhiệt thừa; khi đêm xuống trời lạnh, PCM đông kết tỏa nhiệt lại, giữ nhiệt độ phòng luôn ổn định dễ chịu.",
    woodReward: 140
  }
];

// =========================================================================
// NGÂN HÀNG CÂU HỎI MA TRẬN PHÂN LOẠI 2 THÙNG GỖ (WOOD CRATE SORTING MATRIX)
// =========================================================================
export const MATRIX_SORTING_QUESTIONS = [
  {
    id: "matrix_01",
    topic: "Siêu Vật Liệu Tương Lai & Kỹ Thuật Đạt Chuẩn",
    prompt: "Nhấp vào từng ô thẻ trong ma trận để phân loại: Thẻ ĐÚNG sẽ rơi vào Thùng Gỗ Đạt Chuẩn (+60 🪵), Thẻ SAI sẽ rơi vào Thùng Gỗ Phế Liệu (+0 🪵)!",
    rewardPerCorrect: 60,
    cards: [
      {
        id: "c1_1",
        name: "Aerogel Siêu Cách Nhiệt",
        desc: "Vật liệu rắn nhẹ nhất thế giới (99.8% không khí), cách nhiệt gấp 5 lần sợi thủy tinh.",
        icon: "💨",
        isCorrect: true,
        explanation: "Chính xác! Aerogel có cấu trúc nano xốp rỗng triệt tiêu sự dẫn nhiệt, là vật liệu cách nhiệt đỉnh cao thế giới."
      },
      {
        id: "c1_2",
        name: "Bê Tông Sinh Học Bacillus",
        desc: "Cấy vi khuẩn tự sinh tinh thể đá vôi (CaCO3) hàn kín vết nứt khi ngấm nước mưa.",
        icon: "🦠",
        isCorrect: true,
        explanation: "Chính xác! Vi khuẩn Bacillus dạng bào tử ngủ đông, khi bê tông nứt nước ngấm vào sẽ kích hoạt vi khuẩn hàn gắn vết nứt."
      },
      {
        id: "c1_3",
        name: "Sợi Carbon CFRP",
        desc: "Nhẹ hơn thép 4 lần nhưng chịu lực kéo gấp 5-10 lần, gia cường chống động đất.",
        icon: "🧵",
        isCorrect: true,
        explanation: "Chính xác! Sợi carbon là vật liệu composite chịu kéo siêu hạng, không rỉ sét và bền bỉ phi thường."
      },
      {
        id: "c1_4",
        name: "Gỗ Trong Suốt Cellulose",
        desc: "Tách bỏ lignin màu nâu và ngâm polymer quang học cho 85% ánh sáng đi qua.",
        icon: "🪵",
        isCorrect: true,
        explanation: "Chính xác! Gỗ trong suốt dẫn truyền ánh sáng tự nhiên tốt mà vẫn dẻo dai khó vỡ hơn kính thông thường."
      },
      {
        id: "c1_5",
        name: "Cát Biển Đổ Bê Tông Móng",
        desc: "Dùng cát biển chưa qua xử lý rửa mặn để cốt thép nhanh cứng và bóng sáng.",
        icon: "🌊",
        isCorrect: false,
        explanation: "SAI LẦM TAI HẠI! Muối NaCl trong cát biển ăn mòn điện hóa cốt thép cực nhanh, làm nứt vỡ sập đổ công trình!"
      },
      {
        id: "c1_6",
        name: "Đắp Móng Bằng Bùn Mùn",
        desc: "Dùng bùn ao và lá mục hữu cơ đắp móng để nền nhà êm ái đàn hồi.",
        icon: "🍂",
        isCorrect: false,
        explanation: "SAI KỸ THUẬT! Đất bùn mùn hữu cơ gây lún sụt nghiêm trọng. Móng nhà bắt buộc phải dùng đá hộc và cát vàng đầm chặt!"
      }
    ]
  },
  {
    id: "matrix_02",
    topic: "Vật Liệu Hiếm & Công Nghệ Bền Vững",
    prompt: "Phân loại các thẻ kiến thức: Nhấp để chuyển vào Thùng Gỗ ĐÚNG (+60 🪵) hoặc Thùng Gỗ SAI (+0 🪵)!",
    rewardPerCorrect: 60,
    cards: [
      {
        id: "c2_1",
        name: "Kính Điện Thông Minh",
        desc: "Chỉ cần xung điện nhỏ là bề mặt kính tự chuyển màu sẫm cản 98% nhiệt nắng.",
        icon: "🪟",
        isCorrect: true,
        explanation: "Chính xác! Kính điện thông minh đổi màu ngăn bức xạ nhiệt mặt trời, giảm chi phí máy lạnh tối đa."
      },
      {
        id: "c2_2",
        name: "Thép Corten Phong Hóa",
        desc: "Tự sinh lớp gỉ oxit bảo vệ màu cam đỏ cổ kính, không cần tốn tiền sơn bảo dưỡng.",
        icon: "🔩",
        isCorrect: true,
        explanation: "Chính xác! Thép Corten tạo lớp màng oxit đồng nhất bảo vệ lõi kim loại vĩnh viễn trước mưa nắng."
      },
      {
        id: "c2_3",
        name: "Đất Sét Trương Nở Bentonite",
        desc: "Gặp nước phình to gấp 15 lần tạo màng gel chống thấm đáy tầng hầm tuyệt đối.",
        icon: "🧱",
        isCorrect: true,
        explanation: "Chính xác! Bentonite là vật liệu chống thấm ngầm tự nhiên siêu hạng nhờ khả năng trương nở bịt kín khe nứt."
      },
      {
        id: "c2_4",
        name: "Bê Tông Phát Quang Trong Đêm",
        desc: "Hấp thụ ánh sáng mặt trời ban ngày và tự tỏa sáng lung linh suốt đêm.",
        icon: "✨",
        isCorrect: true,
        explanation: "Chính xác! Tích hợp tinh thể phát quang an toàn giúp vỉa hè tự phát sáng mà không cần kéo dây điện."
      },
      {
        id: "c2_5",
        name: "Nung Gạch Sét Ở 50°C",
        desc: "Gạch đất sét ướt ngập nước nung ở 50°C là đã hóa đá kiên cố chịu tải 100 tấn.",
        icon: "🔥",
        isCorrect: false,
        explanation: "SAI NẶNG! Ở 50°C đất sét chỉ hơi ấm lên và còn nhão nhoét. Muốn hóa đá gạch phải nung ở nhiệt độ cao 1000°C - 1200°C!"
      },
      {
        id: "c2_6",
        name: "Dầm Nhà Bằng Dây Chì Dẻo",
        desc: "Dùng thanh chì dẻo làm cốt chịu lực cho dầm nhà để dầm uốn cong thoải mái.",
        icon: "⚠️",
        isCorrect: false,
        explanation: "NGUY HIỂM CHẾT NGƯỜI! Chì mềm yếu không chịu được lực kéo. Cốt dầm nhà bắt buộc phải dùng thép gân cường độ cao!"
      }
    ]
  },
  {
    id: "matrix_03",
    topic: "Vật Liệu Nhẹ & Kỹ Thuật Bảo Dưỡng Công Trình",
    prompt: "Chọn lọc các nhận định xây dựng: Nhấp để kiểm tra và nhận 🪵 Gỗ khi rơi trúng Thùng ĐÚNG!",
    rewardPerCorrect: 60,
    cards: [
      {
        id: "c3_1",
        name: "Gạch Khí Chưng Áp AAC",
        desc: "Chứa hàng triệu bọt khí li ti, siêu nhẹ nổi được bồng bềnh trên mặt nước.",
        icon: "☁️",
        isCorrect: true,
        explanation: "Chính xác! Gạch AAC nhẹ hơn gạch thường 3 lần, cách nhiệt gấp 6 lần và nổi được trên nước."
      },
      {
        id: "c3_2",
        name: "Tro Bay Xỉ Lò Cao (Bê Tông Xanh)",
        desc: "Tái chế phụ phẩm công nghiệp giúp bê tông đặc chắc và giảm khí thải CO2.",
        icon: "🌱",
        isCorrect: true,
        explanation: "Chính xác! Bê tông xanh dùng tro bay tăng khả năng chống ăn mòn hóa chất và bảo vệ môi trường."
      },
      {
        id: "c3_3",
        name: "Vật Liệu Chuyển Pha PCM",
        desc: "Tan chảy ban ngày hấp thu nhiệt nóng, đông đặc ban đêm sưởi ấm phòng ngủ.",
        icon: "🌡️",
        isCorrect: true,
        explanation: "Chính xác! PCM như túi trữ nhiệt thông minh giữ nhiệt độ phòng luôn ổn định quanh mức 24-26°C."
      },
      {
        id: "c3_4",
        name: "Đá Granite Hoa Cương",
        desc: "Đá macma xâm nhập độ cứng vượt trội, chống trầy xước và chống thấm nước xuất sắc.",
        icon: "🪨",
        isCorrect: true,
        explanation: "Chính xác! Đá hoa cương hình thành sâu trong lòng đất, độ cứng chỉ thua kim cương, hoàn hảo cho móng và sàn."
      },
      {
        id: "c3_5",
        name: "Đốt Lửa Nung Bê Tông Vừa Đổ",
        desc: "Bê tông vừa đổ xong phải dùng lửa khò nung nóng cho nước bốc hơi nhanh.",
        icon: "🚫",
        isCorrect: false,
        explanation: "SAI NGUY HIỂM! Hơ lửa làm mất nước khiến xi măng không thể thủy hóa, bê tông sẽ rạn nứt vỡ vụn. Phải tưới nước dưỡng ẩm!"
      },
      {
        id: "c3_6",
        name: "Xếp Gạch Tường Không Cần Vữa",
        desc: "Chỉ cần xếp gạch mộc khít nhau không cần vữa xi măng để dễ tháo dỡ.",
        icon: "🧱",
        isCorrect: false,
        explanation: "SAI KỸ THUẬT! Tường gạch không có mạch vữa xi măng kết dính sẽ đổ sập ngay lập tức khi có rung chấn nhẹ!"
      }
    ]
  },
  {
    id: "matrix_04",
    topic: "Kim Loại Hiếm & Kính Kiến Trúc Hiện Đại",
    prompt: "Khám phá vật liệu siêu phẩm: Phân loại đúng rơi vào Thùng Gỗ ĐÚNG nhận ngay +60 🪵 Gỗ!",
    rewardPerCorrect: 60,
    cards: [
      {
        id: "c4_1",
        name: "Vỏ Titanium (Titan)",
        desc: "Trơ trước muối biển và mưa axit vĩnh cửu, dùng ốp mái các bảo tàng kiệt tác.",
        icon: "🛡️",
        isCorrect: true,
        explanation: "Chính xác! Titan tạo màng oxit tự nhiên bảo vệ vĩnh cửu, không bị ăn mòn dù phơi nắng mưa hàng trăm năm."
      },
      {
        id: "c4_2",
        name: "Bê Tông Siêu Tính Năng UHPC",
        desc: "Cường độ nén trên 150-200 MPa (gấp 5-6 lần bê tông thường), nhịp cầu siêu mỏng.",
        icon: "🏗️",
        isCorrect: true,
        explanation: "Chính xác! Bê tông UHPC hạt nano đặc khít chịu lực nén khủng khiếp, tạo nên những kiệt tác nhịp lớn thanh thoát."
      },
      {
        id: "c4_3",
        name: "Kính Dán An Toàn PVB",
        desc: "Kẹp màng phim dẻo ở giữa, khi va đập mạnh mảnh kính dính chặt không văng ra ngoài.",
        icon: "🪟",
        isCorrect: true,
        explanation: "Chính xác! Kính dán nhiều lớp giữ an toàn tuyệt đối cho người bên trong, cản đạn và cản trộm đột nhập."
      },
      {
        id: "c4_4",
        name: "Đá Cẩm Thạch Calacatta Ý",
        desc: "Đá biến chất trắng muốt với vân vàng xám quý phái từ dãy núi Apuan nước Ý.",
        icon: "🏛️",
        isCorrect: true,
        explanation: "Chính xác! Calacatta là dòng đá cẩm thạch sang trọng đắt đỏ bậc nhất thế giới trong nghệ thuật kiến trúc."
      },
      {
        id: "c4_5",
        name: "Kính Cửa Sổ Mỏng 1mm",
        desc: "Lắp kính siêu mỏng không tôi nhiệt cho nhà cao tầng để cửa nhẹ bớt tải trọng.",
        icon: "⚡",
        isCorrect: false,
        explanation: "CỰC KỲ NGUY HIỂM! Kính mỏng 1mm gặp gió bão sẽ vỡ vụn thành hàng nghìn mảnh sắc nhọn gây sát thương. Phải dùng kính cường lực 8-12mm!"
      },
      {
        id: "c4_6",
        name: "Gỗ Tươi Rừng Chặt Dùng Ngay",
        desc: "Cây gỗ vừa đốn ngã đem đóng cửa sổ ngay để giữ màu xanh tươi mát của nhựa cây.",
        icon: "🌲",
        isCorrect: false,
        explanation: "SAI NẶNG! Gỗ tươi chứa đầy nước nhựa mao dẫn sẽ co ngót, nứt toác, cong vênh và bị mọt ăn rỗng. Gỗ phải qua tẩm sấy đạt ẩm 12%!"
      }
    ]
  }
];

// =========================================================================
// BÁCH KHOA VẬT LIỆU XÂY DỰNG (CHI TIẾT NGUỒN GỐC & QUY TRÌNH CHẾ TÁC)
// =========================================================================

export const MATERIAL_HANDBOOK = [
  {
    id: "stone",
    name: "Đá Thô Tự Nhiên",
    shortName: "Đá Thô Tự Nhiên",
    icon: "🪨",
    tag: "Nền Tảng Vững Chắc",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Khối đá Granite (hoa cương), Basalt (dung nham) khai thác từ các vỉa đá sâu trong lòng đất.",
    description: "Được tôi luyện qua hàng triệu năm kiến tạo địa chất, đá thô là lựa chọn số một cho móng nhà, bờ kè và lối đi sân vườn.",
    steps: [
      { step: 1, title: "Thăm dò & Mở vỉa", desc: "Khảo sát trữ lượng và kết cấu địa chất của mỏ đá hoa cương hoặc đá xanh." },
      { step: 2, title: "Cắt tách khối đá lớn", desc: "Sử dụng dây cắt kim cương công nghiệp hoặc kích nêm cơ học để tách các tảng đá mẹ hàng chục tấn." },
      { step: 3, title: "Chẻ đá & Đẽo gọt thô", desc: "Các bác thợ đá dùng búa đẽo và nêm sắt chia nhỏ thành đá hộc 20x30cm hoặc đá tảng xây móng." },
      { step: 4, title: "Phân loại quy cách", desc: "Lọc đá theo kích thước: đá hộc xây móng, đá dăm 1x2cm trộn bê tông, đá phiến lát sân." },
      { step: 5, title: "Rửa sạch & Vận chuyển", desc: "Xịt rửa bụi đất bám dính để đảm bảo độ bám dính vữa xi măng cao nhất khi thi công móng nhà." }
    ],
    funFact: "Kim Tự Tháp Giza và các lâu đài cổ châu Âu đứng vững hàng nghìn năm nhờ xây dựng hoàn toàn từ các khối đá tự nhiên."
  },
  {
    id: "concrete",
    name: "Bê Tông Tươi & Cốt Thép",
    shortName: "Bê Tông Cốt Thép",
    icon: "🏗️",
    tag: "Khung Xương Chịu Lực",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Đá dăm 1x2cm, cát vàng hạt to, xi măng Pooclăng, nước sạch và lồng cốt thép chịu lực.",
    description: "Vật liệu nhân tạo chịu lực nén siêu hạng, kết hợp cùng lõi thép chịu kéo tạo nên các cột trụ, dầm giằng và sàn nhà kiên cố nhất.",
    steps: [
      { step: 1, title: "Lắp dựng cốt thép & ván khuôn", desc: "Đan các thanh thép cường độ cao thành lồng cột, cố định ván khuôn gỗ định hình chính xác." },
      { step: 2, title: "Phối liệu cấp phối chuẩn", desc: "Định lượng chính xác tỉ lệ: 1 xi măng : 2 cát vàng : 4 đá dăm : nước theo mác thiết kế 250 - 300." },
      { step: 3, title: "Nhào trộn máy trộn cưỡng bức", desc: "Trộn đều hỗn hợp trong bồn trộn bê tông tươi cho đến khi hỗn hợp đồng nhất, không phân tầng." },
      { step: 4, title: "Đổ bê tông & Đầm dùi", desc: "Rót bê tông vào khuôn cột móng, dùng máy đầm dùi rung lắc làm thoát bọt khí, tránh rỗ xốp." },
      { step: 5, title: "Bảo dưỡng ẩm thủy hóa", desc: "Tưới nước giữ ẩm liên tục trong 7-28 ngày để phản ứng thủy hóa diễn ra hoàn toàn, đạt độ cứng tối đa." }
    ],
    funFact: "Bê tông cốt thép có hệ số giãn nở nhiệt của bê tông và thép gần như bằng nhau (khoảng 0.000012/°C), nhờ đó chúng không bao giờ bị tách rời khi thời tiết nóng lạnh thất thường!"
  },
  {
    id: "brick",
    name: "Gạch Đất Nung",
    shortName: "Gạch Đất Nung",
    icon: "🧱",
    tag: "Vật Liệu Cổ Truyền",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Đất sét tự nhiên, cát hạt mịn, nước sạch và phụ gia bột samot hoặc sỏi vụn.",
    description: "Vật liệu xây tường cơ bản và bền vững nhất nhân loại, tồn tại hàng ngàn năm lịch sử từ các nền văn minh cổ đại.",
    steps: [
      { step: 1, title: "Khai thác đất sét", desc: "Khai thác lớp đất sét dẻo mịn từ mỏ phù sa, loại bỏ rễ cây và tạp chất hữu cơ." },
      { step: 2, title: "Nhào trộn với nước", desc: "Đưa đất sét vào máy nghiền, trộn đều với tỉ lệ nước và cát thích hợp để đạt độ dẻo tiêu chuẩn." },
      { step: 3, title: "Định hình qua khuôn", desc: "Ép đùn chân không qua khuôn gạch ống hoặc gạch đặc, cắt thành từng viên đồng đều kích thước." },
      { step: 4, title: "Phơi sấy tự nhiên", desc: "Xếp gạch mộc vào nhà sấy hoặc sân phơi có mái che từ 3-5 ngày để thoát ẩm từ từ, tránh nứt nẻ." },
      { step: 5, title: "Nung nhiệt độ cao (1000–1200°C)", desc: "Xếp vào lò nung chuyên dụng. Ở nhiệt độ trên 1000°C, các hạt silicat nóng chảy liên kết hóa đá vững chãi và chuyển sang màu đỏ gạch rực rỡ." }
    ],
    funFact: "Một viên gạch nung chuẩn có thể chịu được tải trọng nén lên đến hơn 100 kg/cm²!"
  },
  {
    id: "wood",
    name: "Gỗ Tự Nhiên & Khung Kèo",
    shortName: "Gỗ Tự Nhiên",
    icon: "🪵",
    tag: "Thân Thiện Môi Trường",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Gỗ rừng trồng bền vững (Gỗ keo, thông, sồi, lim, xoan đào được cấp phép).",
    description: "Mang lại vẻ đẹp ấm cúng, sang trọng và khả năng cách nhiệt tuyệt vời cho khung kèo, cầu thang, sàn nhà và nội thất.",
    steps: [
      { step: 1, title: "Khai thác gỗ tròn", desc: "Đốn hạ cây gỗ đạt tuổi trưởng thành (từ 10-30 năm), bóc vỏ và cắt khúc quy cách." },
      { step: 2, title: "Xẻ nan & Hộp phôi", desc: "Máy cưa băng xẻ thân gỗ thành các thanh dầm, cột chịu lực và ván lát sàn đồng đều." },
      { step: 3, title: "Tẩm áp lực chân không", desc: "Đưa gỗ vào buồng chân không ngâm dung dịch muối khoáng an toàn để chống nấm mốc và mối mọt xâm hại." },
      { step: 4, title: "Sấy nhiệt lò vi sóng", desc: "Sấy chậm trong lò hơi từ 15-20 ngày để hạ độ ẩm gỗ xuống mức vàng 12%, chống nứt toác co ngót." },
      { step: 5, title: "Bào nhẵn & Đánh bóng", desc: "Bào 4 mặt mịn màng, làm nổi bật đường vân gỗ tự nhiên và quét lớp dầu bảo vệ hữu cơ." }
    ],
    funFact: "Gỗ có tỉ lệ độ bền trên trọng lượng tốt hơn cả bê tông và thép, tạo cảm giác thư thái và giảm căng thẳng cho con người."
  },
  {
    id: "glass",
    name: "Kính Kiến Trúc",
    shortName: "Kính Kiến Trúc",
    icon: "🪟",
    tag: "Ánh Sáng & Tầm Nhìn",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Cát thạch anh thô tinh khiết (SiO2 > 99%), tro soda (Na2CO3), đá vôi và oxit nhôm.",
    description: "Mang ánh sáng tự nhiên ngập tràn gian phòng, mở rộng tầm nhìn ra thế giới bên ngoài đồng thời che chở ngôi nhà khỏi mưa bão.",
    steps: [
      { step: 1, title: "Phối liệu silicat siêu sạch", desc: "Cát thạch anh trắng được rửa sạch tạp chất, trộn đều cùng tro soda để hạ nhiệt độ nóng chảy." },
      { step: 2, title: "Nấu chảy ở 1700°C", desc: "Đưa vào lò luyện thủy tinh rực lửa, chuyển hóa toàn bộ khoáng chất thành dòng chất lỏng nóng đỏ quánh sệt." },
      { step: 3, title: "Nổi trên bể thiếc lỏng", desc: "Dòng thủy tinh lỏng chảy tràn lên bề mặt bể thiếc nóng chảy phẳng lì, tự dàn mỏng thành dải kính phẳng tuyệt đối." },
      { step: 4, title: "Làm nguội kiểm soát (Ủ kính)", desc: "Kính chạy qua đường hầm làm nguội dần dần để giải tỏa ứng suất dư bên trong, chống tự vỡ." },
      { step: 5, title: "Cắt tấm & Tôi nhiệt an toàn", desc: "Cắt theo kích thước và đưa vào lò tôi nhiệt 700°C làm lạnh đột ngột tạo thành Kính Cường Lực chịu va đập gấp 5 lần kính thường." }
    ],
    funFact: "Kính thực chất là một chất rắn vô định hình - các phân tử của nó không có cấu trúc tinh thể trật tự như kim loại mà giống như chất lỏng bị 'đóng băng' lại!"
  },
  {
    id: "roof",
    name: "Ngói Lợp Đất Nung",
    shortName: "Ngói Lợp Đỏ",
    icon: "🏠",
    tag: "Chiếc Mũ Che Chở",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Đất sét dẻo tinh lọc và men khoáng oxit kim loại.",
    description: "Bộ phận bảo vệ tối thượng của ngôi nhà, chống chịu nắng mưa bão gió và tạo nên đường nét thanh thoát đặc trưng cho kiến trúc.",
    steps: [
      { step: 1, title: "Lọc đất sét dẻo", desc: "Đất sét được khuấy tan trong nước, lọc qua lưới rung để giữ lại lớp bùn khoáng mịn màng nhất." },
      { step: 2, title: "Ép đùn định hình lượn sóng", desc: "Máy ép thủy lực hàng trăm tấn dập thành từng viên ngói sóng hoặc ngói phẳng có gờ khóa chống tràn nước mưa." },
      { step: 3, title: "Phun men màu gốm sứ", desc: "Phun lớp men khoáng lên bề mặt mộc (màu đỏ tươi, màu xanh bóng hoặc nâu gụ)." },
      { step: 4, title: "Nung kết men ở 1150°C", desc: "Lửa nung biến lớp men thành màng thủy tinh bóng loáng gắn chặt vào thân ngói, ngăn rêu mốc 100%." },
      { step: 5, title: "Thử tải & Đóng kiện", desc: "Kiểm tra độ chống thấm nước ngâm 24 giờ và đóng kiện rơm chuyển đến chân công trường." }
    ],
    funFact: "Các đường lượn sóng trên viên ngói không chỉ để làm đẹp, mà chính là máng thoát nước mini giúp dòng nước mưa lao xuống với vận tốc cao nhất mà không bị tạt ngang."
  },
  {
    id: "steel",
    name: "Thép Xây Dựng",
    shortName: "Thép Xây Dựng",
    icon: "🔩",
    tag: "Gân Cốt Công Trình",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Quặng sắt nung luyện lò cao, hợp kim với cacbon (< 2%) và mangan.",
    description: "Cung cấp khả năng chịu lực kéo siêu hạng, uốn nén dẻo dai cho giàn giáo, dầm sàn và đan cốt thép móng nhà.",
    steps: [
      { step: 1, title: "Thiêu kết quặng sắt", desc: "Luyện quặng sắt với than cốc và đá vôi trong lò cao ở 1600°C tạo gang lỏng." },
      { step: 2, title: "Thổi oxy khử cacbon", desc: "Thổi luồng oxy tinh khiết để hạ hàm lượng cacbon xuống dưới 2%, biến gang thành thép dẻo." },
      { step: 3, title: "Đúc phôi thép liên tục", desc: "Rót thép lỏng vào máy đúc phôi vuông dài hàng chục mét." },
      { step: 4, title: "Cán nóng tạo gân bám", desc: "Cán qua các trục tạo gân xoắn nổi giúp thanh thép bám chặt vào khối bê tông." },
      { step: 5, title: "Tôi nhiệt & Cắt đoạn", desc: "Làm nguội nhanh bằng tia nước áp lực cao tạo lớp vỏ thép cứng cáp, cắt theo bó 11.7m." }
    ],
    funFact: "Một thanh thép xây dựng đường kính chỉ 16mm có thể chịu được sức treo của 1 chiếc xe tải nặng 8 tấn mà không bị đứt!"
  },
  {
    id: "mortar",
    name: "Xi Măng & Vữa Trát",
    shortName: "Xi Măng Vữa",
    icon: "🧴",
    tag: "Chất Kết Dính",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Clinker xi măng nghiền mịn với thạch cao, cát mịn và nước sạch.",
    description: "Chất kết dính giữa từng hàng gạch xây tường và lớp vữa trát phẳng mịn bảo vệ tường nhà chống thấm dột.",
    steps: [
      { step: 1, title: "Nghiền Clinker xi măng", desc: "Nghiền clinker xi măng đạt độ mịn tiêu chuẩn có diện tích bề mặt cực lớn." },
      { step: 2, title: "Trộn phụ gia thạch cao", desc: "Điều chỉnh thời gian đóng kết của xi măng từ 45 phút đến vài giờ." },
      { step: 3, title: "Sàng cát hạt mịn", desc: "Loại bỏ sỏi to và bùn sét để hạt cát mịn kết hợp với xi măng tạo mạch vữa trát phẳng." },
      { step: 4, title: "Trộn vữa xây mác 75", desc: "Trộn theo tỉ lệ 1 bao xi măng với 8-10 thùng cát và lượng nước vừa đủ độ dẻo." },
      { step: 5, title: "Trát tường & Xoa phẳng", desc: "Thợ nề dùng bay trát phẳng lớp vữa 1.5cm lên bề mặt gạch, chống thấm nước mưa ngấm vào nhà." }
    ],
    funFact: "Mạch vữa xi măng giữa các viên gạch chỉ dày từ 1 - 1.2 cm nhưng có thể liên kết hàng nghìn viên gạch thành một khối tường thống nhất chịu được gió bão cấp 12!"
  }
];

// Các giai đoạn xây dựng công trình tương thích chuẩn xác 100% với vật tư
export const CONSTRUCTION_STAGES = [
  {
    stage: 0,
    name: "Bãi Đất Hoang Sơ",
    statusBadge: "Chưa thi công",
    desc: "Mảnh đất ban đầu chỉ có cát sỏi, cỏ dại và các mỏm đá tự nhiên. Cọc tiêu đo đạc công trình đã được cắm sẵn.",
    nextStepTitle: "Giai đoạn 1: Đắp Móng Đá & Lót Nền",
    nextStepDesc: "Xếp lớp đá hộc tự nhiên tạo khối móng kiên cố và chống ẩm sụt lún.",
    requiredMaterials: [
      { id: "stone", name: "Đá Thô Tự Nhiên", icon: "🪨", amount: 1 }
    ]
  },
  {
    stage: 1,
    name: "Đắp Móng Đá & Lót Nền",
    statusBadge: "Đã hoàn thành móng đá",
    desc: "Đã xếp xong lớp móng đá hộc tự nhiên kiên cố, nâng cao cốt nền sạch sẽ khỏi mặt đất.",
    nextStepTitle: "Giai đoạn 2: Đổ Bê Tông Cốt Thép & Dựng Cột",
    nextStepDesc: "Đổ bê tông tươi mác 300 bao bọc lồng thép, dựng 4 cột trụ góc và dầm giằng chịu lực.",
    requiredMaterials: [
      { id: "concrete", name: "Bê Tông Tươi & Cốt Thép", icon: "🏗️", amount: 1 }
    ]
  },
  {
    stage: 2,
    name: "Đổ Bê Tông & Dựng Khung Cột",
    statusBadge: "Đã dựng xong khung cột",
    desc: "Khung cột bê tông cốt thép và dầm giằng đã đông kết vững chắc, giàn giáo thi công đã sẵn sàng.",
    nextStepTitle: "Giai đoạn 3: Xây Tường Bao Gạch Đất Nung",
    nextStepDesc: "Xây từng hàng gạch đất nung đỏ rực, chừa ô cửa sổ lấy sáng và cửa chính ra vào.",
    requiredMaterials: [
      { id: "brick", name: "Gạch Đất Nung", icon: "🧱", amount: 1 }
    ]
  },
  {
    stage: 3,
    name: "Xây Tường Bao Gạch Đất Nung",
    statusBadge: "Đã xây xong tường gạch",
    desc: "Tường gạch đất nung đỏ ấm áp đã thành hình với đầy đủ các khoang cửa thông thoáng.",
    nextStepTitle: "Giai đoạn 4: Lắp Cửa Gỗ Tự Nhiên & Cửa Sổ Kính",
    nextStepDesc: "Lắp đặt cửa chính bằng gỗ sồi tự nhiên và các ô cửa sổ kính trong suốt đón ánh sáng chan hòa.",
    requiredMaterials: [
      { id: "glass", name: "Kính Kiến Trúc", icon: "🪟", amount: 1 },
      { id: "wood", name: "Gỗ Tự Nhiên & Khung Kèo", icon: "🪵", amount: 1 }
    ]
  },
  {
    stage: 4,
    name: "Lắp Cửa Gỗ & Cửa Sổ Kính",
    statusBadge: "Đã lắp xong cửa & cửa sổ",
    desc: "Hệ thống cửa gỗ tự nhiên và cửa sổ kính trong suốt lấy sáng và thông gió đã hoàn thành.",
    nextStepTitle: "Giai đoạn 5: Lợp Mái Ngói Đỏ & Xây Ống Khói",
    nextStepDesc: "Lắp vì kèo mái dốc và lợp từng lớp ngói đỏ rực rỡ thoát nước mưa, hoàn thiện ống khói lò sưởi.",
    requiredMaterials: [
      { id: "roof", name: "Ngói Lợp Đất Nung", icon: "🏠", amount: 1 }
    ]
  },
  {
    stage: 5,
    name: "Lợp Mái Ngói Đỏ & Ống Khói",
    statusBadge: "Đã hoàn thành phần thô",
    desc: "Mái ngói dốc đỏ tươi và ống khói lò sưởi cổ kính đã hoàn thiện che chở toàn bộ ngôi nhà.",
    nextStepTitle: "Giai đoạn 6: Hoàn Thiện Nội Thất & Sân Vườn",
    nextStepDesc: "Bày trí sofa phòng khách, giường ngủ, gian bếp nhỏ xinh, đèn chiếu sáng, hàng rào gỗ và cây xanh.",
    requiredMaterials: [
      { id: "wood", name: "Gỗ Tự Nhiên & Khung Kèo", icon: "🪵", amount: 1 }
    ]
  },
  {
    stage: 6,
    name: "Hoàn Thiện Nội Thất & Sân Vườn Xanh",
    statusBadge: "Toàn bộ công trình hoàn tất 100%",
    desc: "Ngôi nhà của bạn đã hoàn thiện mỹ mãn từ ngoại thất đến nội thất tiện nghi ấm cúng!",
    nextStepTitle: "Đại Công Cáo Thành",
    nextStepDesc: "Bạn có thể tự do xoay 360 độ hoặc mở nóc mái ngắm kiệt tác kiến trúc của mình.",
    requiredMaterials: []
  }
];
