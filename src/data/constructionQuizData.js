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
  }
];

// =========================================================================
// BÁCH KHOA VẬT LIỆU XÂY DỰNG (CHI TIẾT NGUỒN GỐC & QUY TRÌNH CHẾ TÁC)
// =========================================================================

export const MATERIAL_HANDBOOK = [
  {
    id: "brick",
    name: "Gạch Đất Nung",
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
    id: "stone",
    name: "Đá Thô Tự Nhiên",
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
    id: "wood",
    name: "Gỗ Tự Nhiên & Khung Kèo",
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
    id: "concrete",
    name: "Xi Măng & Bê Tông Cốt Thép",
    icon: "🏗️",
    tag: "Khung Xương Hiện Đại",
    exchangeCost: 300,
    unit: "300 🪵 Gỗ / Lô vật liệu",
    origin: "Đá vôi (CaCO3), đất sét, quặng sắt, thạch cao và cát sỏi tự nhiên.",
    description: "Vật liệu nhân tạo được sử dụng nhiều thứ hai trên Trái Đất (chỉ sau nước uống), định hình nên toàn bộ các tòa nhà chọc trời và cầu cống hiện đại.",
    steps: [
      { step: 1, title: "Nghiền đá vôi & Đất sét", desc: "Trộn nguyên liệu theo tỉ lệ chính xác và nghiền thành bột mịn như bột mì." },
      { step: 2, title: "Nung lò quay 1450°C", desc: "Nung ở nhiệt độ nóng chảy tạo thành những viên sỏi xỉ khoáng gọi là Clinker xi măng." },
      { step: 3, title: "Nghiền mịn với Thạch cao", desc: "Thêm 3-5% thạch cao vào Clinker và nghiền siêu mịn thành bột xi măng xám đóng bao." },
      { step: 4, title: "Phối trộn Cát + Đá + Nước", desc: "Trộn xi măng với cát vàng, đá dăm 1x2 và nước theo tỉ lệ mác 250 hoặc 300." },
      { step: 5, title: "Đổ khuôn cốt thép & Đóng rắn", desc: "Đổ hỗn hợp vào ván khuôn có đặt sẵn lồng thép, đầm dùi kỹ càng và bảo dưỡng ẩm 28 ngày để đạt cường độ tối đa." }
    ],
    funFact: "Người La Mã cổ đại đã phát minh ra bê tông từ tro núi lửa Pozzolana để xây dựng mái vòm đền Pantheon khổng lồ vẫn nguyên vẹn sau 2000 năm!"
  },
  {
    id: "glass",
    name: "Kính Kiến Trúc",
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
    name: "Ngói Lợp Đất Nung & Tráng Men",
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
  }
];

// Các giai đoạn xây dựng công trình
export const CONSTRUCTION_STAGES = [
  {
    stage: 0,
    name: "Bãi Đất Hoang Sơ",
    desc: "Mảnh đất ban đầu chỉ có cát sỏi, cỏ dại và các mỏm đá tự nhiên. Cọc tiêu đo đạc công trình đã được cắm sẵn.",
    requiredMaterials: [],
    requiredName: "Chưa thi công"
  },
  {
    stage: 1,
    name: "Đắp Móng Đá & Lót Nền",
    desc: "Sử dụng Đá Thô Tự Nhiên để xếp lớp móng đá hộc kiên cố, nâng cao cốt nền chống ẩm ướt.",
    requiredMaterials: ["stone"],
    requiredName: "Đá Thô Tự Nhiên (1 Lô - 300 🪵)"
  },
  {
    stage: 2,
    name: "Dựng Khung Cột & Giằng Chịu Lực",
    desc: "Đổ bê tông cốt thép và dựng các cột trụ chịu lực vững chãi ở 4 góc công trình, giàn giáo thi công dựng lên.",
    requiredMaterials: ["stone", "concrete"],
    requiredName: "Xi Măng & Bê Tông (1 Lô - 300 🪵)"
  },
  {
    stage: 3,
    name: "Xây Tường Bao Gạch Đất Nung",
    desc: "Các viên gạch đất nung đỏ rực được người thợ khéo léo xây từng hàng, chừa sẵn ô cửa sổ và cửa chính đón nắng.",
    requiredMaterials: ["stone", "concrete", "brick"],
    requiredName: "Gạch Đất Nung (1 Lô - 300 🪵)"
  },
  {
    stage: 4,
    name: "Lắp Cửa Gỗ & Cửa Sổ Kính",
    desc: "Lắp đặt hệ thống cửa chính bằng gỗ tự nhiên và các ô cửa sổ kính trong suốt lấy sáng chan hòa khắp các phòng.",
    requiredMaterials: ["stone", "concrete", "brick", "glass", "wood"],
    requiredName: "Kính Kiến Trúc & Gỗ Xẻ (300 🪵 mỗi loại)"
  },
  {
    stage: 5,
    name: "Lợp Mái Ngói Đỏ & Ống Khói",
    desc: "Lắp vì kèo mái dốc và lợp từng lớp ngói đỏ rực rỡ, lắp ống khói gạch cổ điển giúp căn nhà hoàn thiện phần thô.",
    requiredMaterials: ["stone", "concrete", "brick", "glass", "wood", "roof"],
    requiredName: "Ngói Lợp Đỏ (1 Lô - 300 🪵)"
  },
  {
    stage: 6,
    name: "Hoàn Thiện Nội Thất & Khu Vườn Xanh",
    desc: "Ngôi nhà đã hoàn thiện lộng lẫy! Bày trí sofa, giường ngủ, gian bếp ấm cúng, hàng rào gỗ, đèn chiếu sáng và sân vườn.",
    requiredMaterials: ["stone", "concrete", "brick", "glass", "wood", "roof"],
    requiredName: "Đã hoàn thiện mỹ mãn!"
  }
];
