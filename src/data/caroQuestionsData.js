// =========================================================================
// NGÂN HÀNG CÂU HỎI CỜ CARO LỊCH SỬ & ĐỊA LÍ THCS (LỚP 6 - 9)
// Bám sát chương trình sách giáo khoa "Kết nối tri thức với cuộc sống"
// =========================================================================

export const CARO_QUESTIONS = [
// =========================================================================
  // PHÂN MÔN: LỊCH SỬ VIỆT NAM & THẾ GIỚI (LỚP 6 - 9)
  // =========================================================================

  // --- LỊCH SỬ 6 ---
  {
    id: "his_6_01",
    grade: "Lớp 6",
    subject: "his",
    text: "Dấu tích của Người tối cổ ở Việt Nam lần đầu tiên được phát hiện tại địa phương nào?",
    options: ["Hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn)", "Núi Đọ (Thanh Hóa)", "Di chỉ Đông Sơn (Thanh Hóa)", "Di chỉ Óc Eo (An Giang)"],
    correct: "Hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn)",
    explanation: "Tại hang Thẩm Khuyên và Thẩm Hai (Lạng Sơn), các nhà khảo cổ đã tìm thấy những chiếc răng của Người tối cổ có niên đại khoảng 400.000 - 300.000 năm trước.",
    relatedLandmark: "Đồng Đăng"
  },
  {
    id: "his_6_02",
    grade: "Lớp 6",
    subject: "his",
    text: "Nhà nước đầu tiên trong lịch sử dân tộc Việt Nam là nhà nước nào?",
    options: ["Nhà nước Văn Lang", "Nhà nước Âu Lạc", "Nhà nước Đại Cồ Việt", "Nhà nước Vạn Xuân"],
    correct: "Nhà nước Văn Lang",
    explanation: "Nhà nước Văn Lang do các vua Hùng đứng đầu, đóng đô tại Phong Châu (Phú Thọ ngày nay), ra đời vào khoảng thế kỉ VII TCN.",
    relatedLandmark: "Đền Hùng"
  },
  {
    id: "his_6_03",
    grade: "Lớp 6",
    subject: "his",
    text: "Kinh đô của nhà nước Âu Lạc thời An Dương Vương được xây dựng kiên cố tại đâu?",
    options: ["Cổ Loa (Đông Anh, Hà Nội)", "Phong Châu (Phú Thọ)", "Mê Linh (Hà Nội)", "Hoa Lư (Ninh Bình)"],
    correct: "Cổ Loa (Đông Anh, Hà Nội)",
    explanation: "An Dương Vương hợp nhất người Tây Âu và Lạc Việt lập nên nhà nước Âu Lạc, dời đô về Cổ Loa (Đông Anh, Hà Nội) và xây dựng tòa thành hình xoắn ốc độc đáo.",
    relatedLandmark: "Thành Cổ Loa"
  },
  {
    id: "his_6_04",
    grade: "Lớp 6",
    subject: "his",
    text: "Cuộc khởi nghĩa Hai Bà Trưng bùng nổ vào mùa xuân năm nào sau Công nguyên chống lại ách đô hộ nhà Đông Hán?",
    options: ["Năm 40", "Năm 248", "Năm 542", "Năm 938"],
    correct: "Năm 40",
    explanation: "Mùa xuân năm 40, Trưng Trắc cùng em gái là Trưng Nhị dựng cờ khởi nghĩa tại Hát Môn (Hà Nội), đánh đuổi thái thú Tô Định, giành lại độc lập cho dân tộc.",
    relatedLandmark: "Đền Hát Môn"
  },
  {
    id: "his_6_05",
    grade: "Lớp 6",
    subject: "his",
    text: "Ai là nữ anh hùng dân tộc với câu nói bất hủ: 'Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông...?'",
    options: ["Bà Triệu (Triệu Thị Trinh)", "Trưng Trắc", "Trưng Nhị", "Lê Chân"],
    correct: "Bà Triệu (Triệu Thị Trinh)",
    explanation: "Bà Triệu lãnh đạo cuộc khởi nghĩa năm 248 tại vùng căn cứ núi Nưa (Triệu Sơn, Thanh Hóa) chống lại ách đô hộ của nhà Ngô.",
    relatedLandmark: "Thành Nhà Hồ"
  },
  {
    id: "his_6_06",
    grade: "Lớp 6",
    subject: "his",
    text: "Mùa xuân năm 544, sau khi đánh đuổi quân đô hộ nhà Lương, Lý Bí đã lên ngôi hoàng đế và đặt tên nước là gì?",
    options: ["Vạn Xuân", "Đại Cồ Việt", "Đại Việt", "Âu Lạc"],
    correct: "Vạn Xuân",
    explanation: "Lý Bí lên ngôi xưng là Lý Nam Đế, đặt tên nước là Vạn Xuân với mong muốn đất nước trường tồn ngàn vạn mùa xuân ấm no độc lập.",
    relatedLandmark: "Chùa Trấn Quốc"
  },
  {
    id: "his_6_07",
    grade: "Lớp 6",
    subject: "his",
    text: "Chiến thắng lừng lẫy trên sông Bạch Đằng năm 938 do vị anh hùng nào lãnh đạo chấm dứt hơn 1.000 năm Bắc thuộc?",
    options: ["Ngô Quyền", "Lê Hoàn", "Trần Hưng Đạo", "Đinh Bộ Lĩnh"],
    correct: "Ngô Quyền",
    explanation: "Ngô Quyền đã dùng kế cắm cọc gỗ bịt sắt nhọn trên sông Bạch Đằng, lợi dụng thủy triều tiêu diệt hoàn toàn thủy quân Nam Hán của Lưu Hoằng Tháo vào năm 938.",
    relatedLandmark: "Bạch Đằng Giang"
  },
  {
    id: "his_6_08",
    grade: "Lớp 6",
    subject: "his",
    text: "Mai Thúc Loan lãnh đạo nhân dân khởi nghĩa chống ách đô hộ nhà Đường vào đầu thế kỉ VIII và được nhân dân tôn xưng là gì?",
    options: ["Mai Hắc Đế", "Bố Cái Đại Vương", "Dạ Trạch Vương", "Bình Tây Đại nguyên soái"],
    correct: "Mai Hắc Đế",
    explanation: "Năm 713, Mai Thúc Loan dựng cờ khởi nghĩa ở Hoan Châu (Nghệ An), xây dựng căn cứ Sa Nam và được tôn xưng là Mai Hắc Đế (Vua Đen).",
    relatedLandmark: "Quê Bác Làng Sen"
  },
  {
    id: "his_6_09",
    grade: "Lớp 6",
    subject: "his",
    text: "Phùng Hưng lãnh đạo nhân dân khởi nghĩa đánh chiếm phủ Tống Bình (Hà Nội), được nhân dân suy tôn danh hiệu gì?",
    options: ["Bố Cái Đại Vương", "Tiền Lý Nam Đế", "Lý Phật Tử", "Mai Hắc Đế"],
    correct: "Bố Cái Đại Vương",
    explanation: "Phùng Hưng quê ở Đường Lâm (Sơn Tây, Hà Nội), có sức khỏe phi thường quật ngã được hổ dữ. Sau khi ông mất, nhân dân tôn xưng là Bố Cái Đại Vương (người cha mẹ vĩ đại).",
    relatedLandmark: "Làng Cổ Đường Lâm"
  },
  {
    id: "his_6_10",
    grade: "Lớp 6",
    subject: "his",
    text: "Năm 905, nhân lúc nhà Đường suy yếu, ai là người đã đứng lên lãnh đạo nhân dân đánh đuổi tiết độ sứ, xưng Tiết độ sứ mở đầu quyền tự chủ?",
    options: ["Khúc Thừa Dụ", "Khúc Hạo", "Dương Đình Nghệ", "Ngô Quyền"],
    correct: "Khúc Thừa Dụ",
    explanation: "Khúc Thừa Dụ quê ở Hải Dương, nhân lúc nhà Đường suy vong đã đánh chiếm Tống Bình, xưng Tiết độ sứ, đặt nền móng độc lập tự chủ tự cường cho đất nước.",
    relatedLandmark: "Côn Sơn - Kiếp Bạc"
  },

  // --- LỊCH SỬ 7 ---
  {
    id: "his_7_01",
    grade: "Lớp 7",
    subject: "his",
    text: "Năm 968, vị anh hùng nào có công dẹp loạn 12 sứ quân, thống nhất đất nước và lập nên nhà nước Đại Cồ Việt?",
    options: ["Đinh Bộ Lĩnh (Đinh Tiên Hoàng)", "Ngô Quyền", "Lê Hoàn", "Lý Công Uẩn"],
    correct: "Đinh Bộ Lĩnh (Đinh Tiên Hoàng)",
    explanation: "Đinh Bộ Lĩnh từ vùng đất Hoa Lư đã mưu trí dẹp tan 12 sứ quân, lên ngôi Hoàng đế lấy niên hiệu Thái Bình, đóng đô tại Hoa Lư (Ninh Bình).",
    relatedLandmark: "Cố đô Hoa Lư"
  },
  {
    id: "his_7_02",
    grade: "Lớp 7",
    subject: "his",
    text: "Năm 1010, vua Lý Thái Tổ ban chiếu dời đô chuyển trung tâm chính trị từ Hoa Lư về đâu?",
    options: ["Thành Thăng Long (Hà Nội)", "Thành Cổ Loa", "Thành Tây Đô (Thanh Hóa)", "Phú Xuân (Huế)"],
    correct: "Thành Thăng Long (Hà Nội)",
    explanation: "Mùa thu năm Canh Tuất 1010, vua Lý Thái Tổ thấy thế đất rồng cuộn hổ ngồi tại thành Đại La bèn quyết định dời đô về đây và đổi tên thành Thăng Long (Rồng bay lên).",
    relatedLandmark: "Hoàng Thành Thăng Long"
  },
  {
    id: "his_7_03",
    grade: "Lớp 7",
    subject: "his",
    text: "Bài thơ thần 'Nam quốc sơn hà' vang lên hào hùng tại phòng tuyến sông Như Nguyệt năm 1077 gắn liền với vị tướng tài ba nào?",
    options: ["Lý Thường Kiệt", "Trần Hưng Đạo", "Nguyễn Trãi", "Lê Phụng Hiểu"],
    correct: "Lý Thường Kiệt",
    explanation: "Lý Thường Kiệt cho người đọc bài thơ thần 'Nam quốc sơn hà' giữa đêm khuya tại phòng tuyến sông Như Nguyệt, khích lệ tinh thần quân sĩ Đại Việt và làm khiếp vía quân Tống.",
    relatedLandmark: "Chùa Thầy"
  },
  {
    id: "his_7_04",
    grade: "Lớp 7",
    subject: "his",
    text: "Trường đại học đầu tiên của Việt Nam được thành lập năm 1076 dưới triều vua Lý Nhân Tông là gì?",
    options: ["Quốc Tử Giám", "Văn Miếu", "Thái Học Viện", "Quốc Học Huế"],
    correct: "Quốc Tử Giám",
    explanation: "Năm 1070 vua Lý Thánh Tông cho xây Văn Miếu thờ Khổng Tử; năm 1076 vua Lý Nhân Tông lập Quốc Tử Giám để dạy học cho con em hoàng gia và nhân tài đất nước.",
    relatedLandmark: "Văn Miếu Quốc Tử Giám"
  },
  {
    id: "his_7_05",
    grade: "Lớp 7",
    subject: "his",
    text: "Vương triều Trần lẫy lừng trong lịch sử dân tộc nhờ chiến công hiển hách nào?",
    options: ["Ba lần đại phá quân Mông - Nguyên", "Đánh tan 29 vạn quân Thanh", "Đánh bại 5 vạn quân Xiêm", "Chiến thắng quân Nam Hán"],
    correct: "Ba lần đại phá quân Mông - Nguyên",
    explanation: "Quân dân nhà Trần với tinh thần 'Sát Thát' đã 3 lần (1258, 1285, 1287-1288) đập tan đội quân xâm lược Mông - Nguyên hung bạo bậc nhất thế giới thời bấy giờ.",
    relatedLandmark: "Bạch Đằng Giang"
  },
  {
    id: "his_7_06",
    grade: "Lớp 7",
    subject: "his",
    text: "Hội nghị Diên Hồng (năm 1284) do Thượng hoàng Trần Thánh Tông triệu tập các bô lão tại Thăng Long để bàn việc gì?",
    options: ["Nên đánh hay nên hòa giặc Mông - Nguyên", "Bàn việc đắp đê sông Hồng", "Bàn việc mở rộng bờ cõi phía Nam", "Ban hành bộ luật Hình thư"],
    correct: "Nên đánh hay nên hòa giặc Mông - Nguyên",
    explanation: "Tại điện Diên Hồng, khi Thượng hoàng hỏi 'Nên đánh hay nên hòa?', muôn bô lão trăm họ đều đồng thanh hô lớn: 'ĐÁNH!' - biểu tượng sức mạnh toàn dân kháng chiến.",
    relatedLandmark: "Hồ Hoàn Kiếm"
  },
  {
    id: "his_7_07",
    grade: "Lớp 7",
    subject: "his",
    text: "Áng thiên cổ hùng văn 'Bình Ngô đại cáo' được Nguyễn Trãi thừa lệnh ai soạn thảo sau thắng lợi của cuộc khởi nghĩa Lam Sơn?",
    options: ["Lê Lợi (Lê Thái Tổ)", "Trần Nhân Tông", "Lê Thánh Tông", "Quang Trung"],
    correct: "Lê Lợi (Lê Thái Tổ)",
    explanation: "Sau khi khởi nghĩa Lam Sơn toàn thắng năm 1427 đuổi sạch quân Minh, Nguyễn Trãi đã viết Bình Ngô đại cáo tuyên cáo nền độc lập tự chủ vĩnh viễn của Đại Việt.",
    relatedLandmark: "Khu Di Tích Lam Kinh"
  },
  {
    id: "his_7_08",
    grade: "Lớp 7",
    subject: "his",
    text: "Chiến thắng Rạch Gầm - Xoài Mút (Tiền Giang) năm 1785 do người anh hùng áo vải nào chỉ huy đập tan 5 vạn quân Xiêm?",
    options: ["Nguyễn Huệ (Quang Trung)", "Nguyễn Nhạc", "Nguyễn Lữ", "Trần Quang Diệu"],
    correct: "Nguyễn Huệ (Quang Trung)",
    explanation: "Đêm 19 rạng sáng 20/1/1785, Nguyễn Huệ đã dùng kế nhử quân Xiêm vào trận địa phục kích trên khúc sông Rạch Gầm - Xoài Mút (Tiền Giang), diệt gần như toàn bộ quân giặc.",
    relatedLandmark: "Chợ Nổi Cái Bè"
  },
  {
    id: "his_7_09",
    grade: "Lớp 7",
    subject: "his",
    text: "Mùa xuân Kỷ Dậu (1789), vua Quang Trung thần tốc tiến quân ra Thăng Long đại phá 29 vạn quân xâm lược nào?",
    options: ["Quân Mãn Thanh (Tôn Sĩ Nghị)", "Quân Minh", "Quân Tống", "Quân Mông Cổ"],
    correct: "Quân Mãn Thanh (Tôn Sĩ Nghị)",
    explanation: "Chỉ trong 5 ngày đêm Tết Kỷ Dậu 1789, quân Tây Sơn do vua Quang Trung trực tiếp chỉ huy đã đập tan 29 vạn quân Mãn Thanh ở Ngọc Hồi - Đống Đa, giải phóng Thăng Long.",
    relatedLandmark: "Gò Đống Đa"
  },
  {
    id: "his_7_10",
    grade: "Lớp 7",
    subject: "his",
    text: "Bộ luật Hồng Đức (Quốc triều hình luật) - một trong những bộ luật tiến bộ và toàn diện nhất thời phong kiến Việt Nam ra đời dưới triều vua nào?",
    options: ["Lê Thánh Tông", "Lê Thái Tổ", "Lý Thái Tông", "Trần Thái Tông"],
    correct: "Lê Thánh Tông",
    explanation: "Vua Lê Thánh Tông ban hành Luật Hồng Đức với nhiều điều khoản tiến bộ, bảo vệ quyền lợi phụ nữ, khuyến khích nông nghiệp và bảo vệ chủ quyền biên cương lãnh thổ.",
    relatedLandmark: "Khu Di Tích Lam Kinh"
  },

  // --- LỊCH SỬ 8 ---
  {
    id: "his_8_01",
    grade: "Lớp 8",
    subject: "his",
    text: "Ngày 1/9/1858, thực dân Pháp chính thức nổ súng mở đầu cuộc chiến tranh xâm lược Việt Nam tại đâu?",
    options: ["Bán đảo Sơn Trà (Đà Nẵng)", "Cửa biển Cần Giờ (Gia Định)", "Cửa biển Thuận An (Huế)", "Cửa biển Bạch Đằng (Hải Phòng)"],
    correct: "Bán đảo Sơn Trà (Đà Nẵng)",
    explanation: "Pháp chọn bán đảo Sơn Trà (Đà Nẵng) để đánh chiếm với âm mưu lấy Đà Nẵng làm bàn đạp tấn công nhanh chóng ra Huế buộc triều đình nhà Nguyễn đầu hàng.",
    relatedLandmark: "Bán Đảo Sơn Trà"
  },
  {
    id: "his_8_02",
    grade: "Lớp 8",
    subject: "his",
    text: "Người anh hùng nông dân lãnh đạo nghĩa quân Nam Kỳ đốt cháy tàu chiến Espérance của Pháp trên sông Nhật Tảo (1861) là ai?",
    options: ["Nguyễn Trung Trực", "Trương Định", "Võ Duy Dương", "Nguyễn Tri Phương"],
    correct: "Nguyễn Trung Trực",
    explanation: "Nguyễn Trung Trực lưu danh sử sách với chiến công đốt tàu Espérance và câu nói bất hủ: 'Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây'.",
    relatedLandmark: "Rừng Tràm Trà Sư"
  },
  {
    id: "his_8_03",
    grade: "Lớp 8",
    subject: "his",
    text: "Sau khi Kinh thành Huế thất thủ năm 1885, Tôn Thất Thuyết đã đưa vị vua trẻ nào ra Tân Sở (Quảng Trị) và hạ chiếu Cần Vương?",
    options: ["Vua Hàm Nghi", "Vua Duy Tân", "Vua Thành Thái", "Vua Kiến Phúc"],
    correct: "Vua Hàm Nghi",
    explanation: "Chiếu Cần Vương do Tôn Thất Thuyết lấy danh nghĩa vua Hàm Nghi ban hành tháng 7/1885 đã kêu gọi văn thân, sĩ phu và nhân dân cả nước đứng lên phò vua giúp nước.",
    relatedLandmark: "Cố Đô Huế"
  },
  {
    id: "his_8_04",
    grade: "Lớp 8",
    subject: "his",
    text: "Cuộc khởi nghĩa Hương Khê (1885 - 1896) - đỉnh cao nhất của phong trào Cần Vương do ai lãnh đạo?",
    options: ["Phan Đình Phùng và Cao Thắng", "Đinh Công Tráng", "Nguyễn Thiện Thuật", "Hoàng Hoa Thám"],
    correct: "Phan Đình Phùng và Cao Thắng",
    explanation: "Khởi nghĩa Hương Khê có quy mô rộng lớn khắp 4 tỉnh Thanh - Nghệ - Tĩnh - Bình, có vũ khí tự chế tạo cải tiến (súng trường của Cao Thắng), chiến đấu bền bỉ suốt 10 năm.",
    relatedLandmark: "Ngã Ba Đồng Lộc"
  },
  {
    id: "his_8_05",
    grade: "Lớp 8",
    subject: "his",
    text: "Vị thủ lĩnh được mệnh danh là 'Hùm xám Yên Thế' lãnh đạo phong trào nông dân Yên Thế kiên cường suốt 30 năm (1884 - 1913) là ai?",
    options: ["Hoàng Hoa Thám (Đề Thám)", "Đề Nắm", "Nguyễn Thái Học", "Phan Đình Phùng"],
    correct: "Hoàng Hoa Thám (Đề Thám)",
    explanation: "Hoàng Hoa Thám tổ chức căn cứ Phồn Xương kiên cố, nhiều lần đánh bại các đợt càn quét lớn của quân đội Pháp ở vùng rừng núi Yên Thế (Bắc Giang).",
    relatedLandmark: "Chi Lăng Lạng Sơn"
  },
  {
    id: "his_8_06",
    grade: "Lớp 8",
    subject: "his",
    text: "Phong trào Đông Du (1905 - 1908) đưa thanh niên yêu nước sang Nhật Bản học tập để mưu cầu độc lập do chí sĩ nào khởi xướng?",
    options: ["Phan Bội Châu", "Phan Châu Trinh", "Huỳnh Thúc Kháng", "Lương Văn Can"],
    correct: "Phan Bội Châu",
    explanation: "Cụ Phan Bội Châu thành lập Hội Duy Tân năm 1904 và tổ chức phong trào Đông Du nhằm đào tạo nhân tài khoa học quân sự cho cách mạng Việt Nam.",
    relatedLandmark: "Cố Đô Huế"
  },
  {
    id: "his_8_07",
    grade: "Lớp 8",
    subject: "his",
    text: "Chí sĩ Phan Châu Trinh khởi xướng phong trào Duy Tân ở Trung Kỳ với chủ trương cứu nước nổi tiếng nào?",
    options: ["'Khai dân trí, chấn dân khí, hậu dân sinh'", "'Bạo động vũ trang lật đổ ách thống trị'", "'Dựa vào Nhật Bản để giành độc lập'", "'Ám sát các đầu sỏ thực dân'"],
    correct: "'Khai dân trí, chấn dân khí, hậu dân sinh'",
    explanation: "Phan Châu Trinh chủ trương thức tỉnh tinh thần tự lực tự cường của dân tộc bằng cách mở trường dạy học chữ Quốc ngữ, phát triển kinh tế công thương và cải cách văn hóa xã hội.",
    relatedLandmark: "Phố Cổ Hội An"
  },
  {
    id: "his_8_08",
    grade: "Lớp 8",
    subject: "his",
    text: "Ngày 5 tháng 6 năm 1911, người thanh niên yêu nước Nguyễn Tất Thành đã rời bến cảng nào để ra đi tìm đường cứu nước?",
    options: ["Bến Nhà Rồng (Sài Gòn)", "Cảng Hải Phòng", "Bến Bạch Đằng (Sài Gòn)", "Cảng Đà Nẵng"],
    correct: "Bến Nhà Rồng (Sài Gòn)",
    explanation: "Với tên gọi Văn Ba, Người làm phụ bếp trên con tàu buôn Amiral Latouche-Tréville rời Bến Nhà Rồng, mở ra bước ngoặt lịch sử vĩ đại cho cách mạng giải phóng dân tộc.",
    relatedLandmark: "Bến Nhà Rồng"
  },

  // --- LỊCH SỬ 9 ---
  {
    id: "his_9_01",
    grade: "Lớp 9",
    subject: "his",
    text: "Đảng Cộng sản Việt Nam được thành lập vào ngày 3/2/1930 tại đâu dưới sự chủ trì của đồng chí Nguyễn Ái Quốc?",
    options: ["Cửu Long (Hương Cảng, Trung Quốc)", "Quảng Châu (Trung Quốc)", "Pác Bó (Cao Bằng)", "Ma Cao (Trung Quốc)"],
    correct: "Cửu Long (Hương Cảng, Trung Quốc)",
    explanation: "Hội nghị hợp nhất các tổ chức cộng sản (Đông Dương CSĐ, An Nam CSĐ, Đông Dương CSLĐ) diễn ra từ 6/1 đến 7/2/1930 tại Hương Cảng, lấy ngày 3/2 làm ngày kỷ niệm lập Đảng.",
    relatedLandmark: "Hang Pác Bó"
  },
  {
    id: "his_9_02",
    grade: "Lớp 9",
    subject: "his",
    text: "Đội Việt Nam Tuyên truyền Giải phóng quân (tiền thân của Quân đội Nhân dân Việt Nam) được thành lập vào ngày tháng năm nào?",
    options: ["22/12/1944", "19/8/1945", "2/9/1945", "19/12/1946"],
    correct: "22/12/1944",
    explanation: "Theo chỉ thị của Bác Hồ, ngày 22/12/1944 đồng chí Võ Nguyên Giáp chỉ huy lễ thành lập Đội tại khu rừng Trần Hưng Đạo (Cao Bằng) gồm 34 chiến sĩ kiên trung.",
    relatedLandmark: "Hang Pác Bó"
  },
  {
    id: "his_9_03",
    grade: "Lớp 9",
    subject: "his",
    text: "Bản Tuyên ngôn Độc lập lịch sử khẳng định 'Nước Việt Nam có quyền hưởng tự do và độc lập' được Chủ tịch Hồ Chí Minh đọc tại đâu?",
    options: ["Quảng trường Ba Đình (Hà Nội)", "Nhà hát Lớn Hà Nội", "Quảng trường Cách Mạng Tháng Tám", "Dinh Độc Lập (Sài Gòn)"],
    correct: "Quảng trường Ba Đình (Hà Nội)",
    explanation: "Ngày 2/9/1945, tại Quảng trường Ba Đình rực rỡ cờ hoa, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm thời đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    relatedLandmark: "Hồ Hoàn Kiếm"
  },
  {
    id: "his_9_04",
    grade: "Lớp 9",
    subject: "his",
    text: "Chiến dịch Điện Biên Phủ toàn thắng vào ngày tháng năm nào, kết thúc thắng lợi cuộc kháng chiến chống thực dân Pháp?",
    options: ["7/5/1954", "13/3/1954", "20/7/1954", "30/4/1975"],
    correct: "7/5/1954",
    explanation: "Vào hồi 17h30 ngày 7/5/1954, lá cờ 'Quyết chiến Quyết thắng' tung bay trên nóc hầm tướng Đờ Cát-xtơ-ri, tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt hoàn toàn.",
    relatedLandmark: "Điện Biên Phủ"
  },
  {
    id: "his_9_05",
    grade: "Lớp 9",
    subject: "his",
    text: "Phong trào 'Đồng khởi' (1959 - 1960) nổ ra mở màn vang dội nhất tại tỉnh nào ở Nam Bộ?",
    options: ["Tỉnh Bến Tre", "Tỉnh Tây Ninh", "Tỉnh Tiền Giang", "Tỉnh Đồng Tháp"],
    correct: "Tỉnh Bến Tre",
    explanation: "Ngày 17/1/1960, dưới sự lãnh đạo của bà Nguyễn Thị Định và Tỉnh ủy Bến Tre, nhân dân huyện Mỏ Cày đồng loạt nổi dậy, phá tan bộ máy kìm kẹp của địch.",
    relatedLandmark: "Rừng Tràm Trà Sư"
  },
  {
    id: "his_9_06",
    grade: "Lớp 9",
    subject: "his",
    text: "Trận đánh được ví như 'Điện Biên Phủ trên không' cuối năm 1972 đã bắn rơi hàng chục pháo đài bay B-52 của Mỹ diễn ra chủ yếu trên bầu trời nào?",
    options: ["Bầu trời Hà Nội, Hải Phòng", "Bầu trời Quảng Trị", "Bầu trời Đà Nẵng", "Bầu trời Sài Gòn"],
    correct: "Bầu trời Hà Nội, Hải Phòng",
    explanation: "Trong 12 ngày đêm (18/12 - 30/12/1972), quân dân miền Bắc đã kiên cường bắn rơi 81 máy bay (trong đó có 34 chiếc B-52), buộc Mỹ phải ký Hiệp định Paris rút quân về nước.",
    relatedLandmark: "Hoàng Thành Thăng Long"
  },
  {
    id: "his_9_07",
    grade: "Lớp 9",
    subject: "his",
    text: "Thời khắc lịch sử chiếc xe tăng số hiệu 390 và 843 húc đổ cổng Dinh Độc Lập, giải phóng hoàn toàn miền Nam diễn ra vào ngày nào?",
    options: ["30/4/1975", "26/3/1975", "2/9/1945", "7/5/1954"],
    correct: "30/4/1975",
    explanation: "Vào lúc 11h30 ngày 30/4/1975, cờ Mặt trận Dân tộc Giải phóng miền Nam Việt Nam tung bay trên nóc Dinh Độc Lập, Chiến dịch Hồ Chí Minh toàn thắng, non sông thu về một mối.",
    relatedLandmark: "Dinh Độc Lập"
  },

  // =========================================================================
  // PHÂN MÔN: ĐỊA LÍ TỰ NHIÊN, VÙNG KINH TẾ & BIỂN ĐẢO (LỚP 6 - 9)
  // =========================================================================

  // --- ĐỊA LÍ 6 ---
  {
    id: "geo_6_01",
    grade: "Lớp 6",
    subject: "geo",
    text: "Đường vĩ tuyến đặc biệt chia Trái Đất thành hai nửa bán cầu Bắc và bán cầu Nam có tên gọi là gì?",
    options: ["Đường Xích đạo (Vĩ tuyến 0°)", "Đường Chí tuyến Bắc", "Kinh tuyến gốc (0°)", "Vòng cực Bắc"],
    correct: "Đường Xích đạo (Vĩ tuyến 0°)",
    explanation: "Đường Xích đạo là đường tròn lớn nhất trên bề mặt Trái Đất, có chu vi xấp xỉ 40.075 km, nằm cách đều hai cực địa cực của Trái Đất.",
    relatedLandmark: "Đỉnh Fansipan"
  },
  {
    id: "geo_6_02",
    grade: "Lớp 6",
    subject: "geo",
    text: "Kinh tuyến gốc (0°) được quy ước quốc tế đi qua đài thiên văn học nào?",
    options: ["Đài thiên văn Grin-uýt (Greenwich, Luân Đôn, Anh)", "Đài thiên văn Paris (Pháp)", "Đài thiên văn Washington (Mỹ)", "Đài thiên văn Bắc Kinh (Trung Quốc)"],
    correct: "Đài thiên văn Grin-uýt (Greenwich, Luân Đôn, Anh)",
    explanation: "Kinh tuyến 0° đi qua đài thiên văn Hoàng gia Greenwich (Luân Đôn, nước Anh) làm mốc chia Trái Đất thành Bán cầu Đông và Bán cầu Tây.",
    relatedLandmark: "Ngọn Hải Đăng Vũng Tàu"
  },
  {
    id: "geo_6_03",
    grade: "Lớp 6",
    subject: "geo",
    text: "Trái Đất tự quay quanh trục theo hướng nào sinh ra hiện tượng ngày và đêm luân phiên?",
    options: ["Từ Tây sang Đông", "Từ Đông sang Tây", "Từ Bắc xuống Nam", "Từ Nam lên Bắc"],
    correct: "Từ Tây sang Đông",
    explanation: "Trái Đất tự quay quanh trục tưởng tượng nghiêng 66°33' theo chiều từ Tây sang Đông, tạo nên chu kỳ ngày đêm khoảng 24 giờ và hiện tượng Mặt Trời mọc ở hướng Đông.",
    relatedLandmark: "Mũi Đại Lãnh Phú Yên"
  },
  {
    id: "geo_6_04",
    grade: "Lớp 6",
    subject: "geo",
    text: "Hiện tượng các mùa (Xuân, Hạ, Thu, Đông) trong năm trên Trái Đất sinh ra do nguyên nhân nào?",
    options: ["Trái Đất chuyển động quanh Mặt Trời với trục nghiêng không đổi phương", "Trái Đất tự quay quanh trục từ Tây sang Đông", "Mặt Trời di chuyển xung quanh Trái Đất", "Khoảng cách giữa Trái Đất và Mặt Trời thay đổi liên tục"],
    correct: "Trái Đất chuyển động quanh Mặt Trời với trục nghiêng không đổi phương",
    explanation: "Trục Trái Đất nghiêng 66°33' so với mặt phẳng quỹ đạo và không đổi phương khi quay quanh Mặt Trời làm cho hai bán cầu luân phiên nhận lượng nhiệt và ánh sáng khác nhau.",
    relatedLandmark: "Đồi Chè Cầu Đất"
  },
  {
    id: "geo_6_05",
    grade: "Lớp 6",
    subject: "geo",
    text: "Đại dương nào có diện tích rộng lớn nhất và độ sâu trung bình sâu nhất trên bề mặt Trái Đất?",
    options: ["Thái Bình Dương", "Đại Tây Dương", "Ấn Độ Dương", "Bắc Băng Dương"],
    correct: "Thái Bình Dương",
    explanation: "Thái Bình Dương có diện tích khoảng 165 triệu km² (chiếm 1/3 diện tích bề mặt Trái Đất), nơi có vực thẳm Mariana sâu nhất thế giới (~11.034m).",
    relatedLandmark: "Quần Đảo Trường Sa"
  },

  // --- ĐỊA LÍ 7 ---
  {
    id: "geo_7_01",
    grade: "Lớp 7",
    subject: "geo",
    text: "Châu lục nào có diện tích tự nhiên rộng lớn nhất và dân số đông nhất trên thế giới?",
    options: ["Châu Á", "Châu Phi", "Châu Mỹ", "Châu Âu"],
    correct: "Châu Á",
    explanation: "Châu Á có diện tích khoảng 44,4 triệu km² (gồm cả đảo), là nơi sinh sống của hơn 4,7 tỉ người (chiếm khoảng 60% dân số thế giới).",
    relatedLandmark: "Thác Bản Giốc"
  },
  {
    id: "geo_7_02",
    grade: "Lớp 7",
    subject: "geo",
    text: "Dãy núi nào được xem là ranh giới tự nhiên ngăn cách giữa châu Á và châu Âu?",
    options: ["Dãy U-ran (Ural)", "Dãy An-pơ (Alps)", "Dãy Hi-ma-lay-a (Himalaya)", "Dãy An-đét (Andes)"],
    correct: "Dãy U-ran (Ural)",
    explanation: "Dãy núi Ural kéo dài khoảng 2.500 km từ Bắc Băng Dương đến thảo nguyên Kazakhstan, là ranh giới tự nhiên phân chia lục địa Á - Âu.",
    relatedLandmark: "Đỉnh Fansipan"
  },
  {
    id: "geo_7_03",
    grade: "Lớp 7",
    subject: "geo",
    text: "Khu rừng nhiệt đới lớn nhất hành tinh được coi là 'lá phổi xanh của Trái Đất' nằm ở châu lục nào?",
    options: ["Châu Nam Mỹ (Rừng A-ma-dôn)", "Châu Phi (Rừng Công-gô)", "Châu Á (Rừng Đông Nam Á)", "Châu Bắc Mỹ"],
    correct: "Châu Nam Mỹ (Rừng A-ma-dôn)",
    explanation: "Rừng mưa nhiệt đới Amazon trải rộng trên lưu vực sông Amazon ở Nam Mỹ, cung cấp lượng khí oxy khổng lồ và chứa hệ sinh thái động thực vật phong phú nhất thế giới.",
    relatedLandmark: "Vườn Quốc Gia Cúc Phương"
  },
  {
    id: "geo_7_04",
    grade: "Lớp 7",
    subject: "geo",
    text: "Hoang mạc nhiệt đới cát nóng lớn nhất thế giới nằm ở phía bắc châu Phi là hoang mạc nào?",
    options: ["Hoang mạc Xa-ha-ra (Sahara)", "Hoang mạc Ca-la-ha-ri (Kalahari)", "Hoang mạc Gô-bi (Gobi)", "Hoang mạc A-ta-ca-ma (Atacama)"],
    correct: "Hoang mạc Xa-ha-ra (Sahara)",
    explanation: "Hoang mạc Sahara có diện tích hơn 9 triệu km² (xấp xỉ diện tích cả châu Âu), khí hậu vô cùng khô hạn và khắc nghiệt.",
    relatedLandmark: "Đồi Cát Bay Mũi Né"
  },
  {
    id: "geo_7_05",
    grade: "Lớp 7",
    subject: "geo",
    text: "Châu lục lạnh giá nhất trên Trái Đất, quanh năm bao phủ bởi băng tuyết và không có người định cư là gì?",
    options: ["Châu Nam Cực", "Châu Đại Dương", "Bắc Cực", "Châu Âu"],
    correct: "Châu Nam Cực",
    explanation: "Châu Nam Cực giữ kỷ lục nhiệt độ thấp nhất hành tinh (từng đo được -89,2°C), chứa khoảng 90% lượng băng toàn cầu và chỉ có các nhà khoa học tới nghiên cứu.",
    relatedLandmark: "Cột cờ Lũng Cú"
  },

  // --- ĐỊA LÍ 8 ---
  {
    id: "geo_8_01",
    grade: "Lớp 8",
    subject: "geo",
    text: "Phần đất liền nước ta nằm trọn vẹn trong đới khí hậu nào?",
    options: ["Nhiệt đới gió mùa", "Ôn đới lục địa", "Cận nhiệt đới gió mùa", "Hàn đới cận cực"],
    correct: "Nhiệt đới gió mùa",
    explanation: "Việt Nam nằm hoàn toàn trong vành đai nhiệt đới bán cầu Bắc, quanh năm nhận lượng bức xạ Mặt Trời lớn và chịu tác động sâu sắc của các khối khí gió mùa ẩm.",
    relatedLandmark: "Vịnh Hạ Long"
  },
  {
    id: "geo_8_02",
    grade: "Lớp 8",
    subject: "geo",
    text: "Địa hình đồi núi chiếm bao nhiêu phần diện tích lãnh thổ đất liền Việt Nam?",
    options: ["3/4 diện tích", "1/4 diện tích", "1/2 diện tích", "2/3 diện tích"],
    correct: "3/4 diện tích",
    explanation: "Đồi núi chiếm tới 3/4 diện tích đất liền, nhưng chủ yếu là đồi núi thấp (dưới 1.000m chiếm tới 85%, núi cao trên 2.000m chỉ chiếm 1%).",
    relatedLandmark: "Đỉnh Fansipan"
  },
  {
    id: "geo_8_03",
    grade: "Lớp 8",
    subject: "geo",
    text: "Đỉnh núi cao nhất Việt Nam và toàn Đông Dương được mệnh danh là 'Nóc nhà Đông Dương' thuộc dãy núi nào?",
    options: ["Dãy Hoàng Liên Sơn (Fansipan 3.143m)", "Dãy Trường Sơn Bắc (Pu Lai Leng)", "Dãy Trường Sơn Nam (Ngọc Linh)", "Dãy Bạch Mã"],
    correct: "Dãy Hoàng Liên Sơn (Fansipan 3.143m)",
    explanation: "Đỉnh Fansipan cao 3.143m nằm trên dãy Hoàng Liên Sơn hùng vĩ thuộc địa phận tỉnh Lào Cai và Lai Châu.",
    relatedLandmark: "Đỉnh Fansipan"
  },
  {
    id: "geo_8_04",
    grade: "Lớp 8",
    subject: "geo",
    text: "Vùng biển thuộc chủ quyền và quyền tài phán của Việt Nam trên Biển Đông có diện tích khoảng bao nhiêu?",
    options: ["Khoảng 1 triệu km²", "Khoảng 500 nghìn km²", "Khoảng 330 nghìn km²", "Khoảng 2 triệu km²"],
    correct: "Khoảng 1 triệu km²",
    explanation: "Vùng biển Việt Nam có diện tích khoảng 1 triệu km² gấp hơn 3 lần diện tích đất liền, tiếp giáp vùng biển của 8 quốc gia trong khu vực.",
    relatedLandmark: "Quần Đảo Hoàng Sa"
  },
  {
    id: "geo_8_05",
    grade: "Lớp 8",
    subject: "geo",
    text: "Hai quần đảo xa bờ thiêng liêng thuộc chủ quyền bất khả xâm phạm của nước Cộng hòa XHCN Việt Nam là gì?",
    options: ["Quần đảo Hoàng Sa và Trường Sa", "Quần đảo Côn Đảo và Thổ Chu", "Quần đảo Phú Quốc và Nam Du", "Quần đảo Cát Bà và Cô Tô"],
    correct: "Quần đảo Hoàng Sa và Trường Sa",
    explanation: "Quần đảo Hoàng Sa (thuộc TP Đà Nẵng) và Quần đảo Trường Sa (thuộc tỉnh Khánh Hòa) là một phần lãnh thổ máu thịt thiêng liêng ngàn đời của Tổ quốc Việt Nam.",
    relatedLandmark: "Quần Đảo Trường Sa"
  },
  {
    id: "geo_8_06",
    grade: "Lớp 8",
    subject: "geo",
    text: "Đảo có diện tích lớn nhất của Việt Nam, nổi tiếng với danh xưng 'Đảo Ngọc' thuộc tỉnh nào?",
    options: ["Đảo Phú Quốc (tỉnh Kiên Giang)", "Đảo Cát Bà (Hải Phòng)", "Đảo Côn Sơn (Bà Rịa - Vũng Tàu)", "Đảo Lý Sơn (Quảng Ngãi)"],
    correct: "Đảo Phú Quốc (tỉnh Kiên Giang)",
    explanation: "Đảo Phú Quốc nằm trong vịnh Thái Lan thuộc tỉnh Kiên Giang, có diện tích khoảng 589 km², là thành phố đảo đầu tiên của Việt Nam.",
    relatedLandmark: "Bãi Sao Phú Quốc"
  },
  {
    id: "geo_8_07",
    grade: "Lớp 8",
    subject: "geo",
    text: "Điểm cực Bắc trên đất liền của nước ta thuộc xã Lũng Cú (huyện Đồng Văn) nằm ở tỉnh nào?",
    options: ["Tỉnh Hà Giang", "Tỉnh Cao Bằng", "Tỉnh Lào Cai", "Tỉnh Lạng Sơn"],
    correct: "Tỉnh Hà Giang",
    explanation: "Điểm cực Bắc (vĩ độ 23°23'B) tại Lũng Cú (Hà Giang) là biểu tượng thiêng liêng địa đầu cực Bắc Tổ quốc với lá cờ rộng 54m².",
    relatedLandmark: "Cột cờ Lũng Cú"
  },
  {
    id: "geo_8_08",
    grade: "Lớp 8",
    subject: "geo",
    text: "Điểm cực Nam trên đất liền của nước ta thuộc xã Đất Mũi (huyện Ngọc Hiển) nằm ở tỉnh nào?",
    options: ["Tỉnh Cà Mau", "Tỉnh Kiên Giang", "Tỉnh Bạc Liêu", "Tỉnh Sóc Trăng"],
    correct: "Tỉnh Cà Mau",
    explanation: "Mũi Cà Mau (vĩ độ 8°37'B) là điểm cực Nam đất liền, nơi duy nhất trên đất liền nước ta ngắm được cả Mặt Trời mọc ở biển Đông và lặn ở biển Tây.",
    relatedLandmark: "Mũi Cà Mau"
  },

  // --- ĐỊA LÍ 9 ---
  {
    id: "geo_9_01",
    grade: "Lớp 9",
    subject: "geo",
    text: "Vùng nào sau đây là vùng trọng điểm sản xuất lương thực, vựa lúa và vựa trái cây xuất khẩu lớn nhất cả nước?",
    options: ["Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Duyên hải Nam Trung Bộ"],
    correct: "Đồng bằng sông Cửu Long",
    explanation: "Đồng bằng sông Cửu Long đóng góp trên 50% sản lượng lúa và trên 90% lượng gạo xuất khẩu, cùng hơn 60% sản lượng thủy sản của cả nước.",
    relatedLandmark: "Chợ Nổi Cái Răng"
  },
  {
    id: "geo_9_02",
    grade: "Lớp 9",
    subject: "geo",
    text: "Cây công nghiệp lâu năm số một trồng nhiều nhất trên đất đỏ bazan vùng Tây Nguyên là cây gì?",
    options: ["Cây Cà phê", "Cây Chè", "Cây Cao su", "Cây Hồ tiêu"],
    correct: "Cây Cà phê",
    explanation: "Tây Nguyên là thủ phủ cà phê của cả nước (đặc biệt là cà phê Robusta Buôn Ma Thuột), đưa Việt Nam trở thành quốc gia xuất khẩu cà phê Robusta số 1 thế giới.",
    relatedLandmark: "Thác Dray Nur"
  },
  {
    id: "geo_9_03",
    grade: "Lớp 9",
    subject: "geo",
    text: "Vùng kinh tế dẫn đầu cả nước về GDP, giá trị sản xuất công nghiệp và thu hút vốn đầu tư nước ngoài (FDI) là vùng nào?",
    options: ["Đông Nam Bộ", "Đồng bằng sông Hồng", "Bắc Trung Bộ", "Trung du và miền núi Bắc Bộ"],
    correct: "Đông Nam Bộ",
    explanation: "Đông Nam Bộ với hạt nhân là TP. Hồ Chí Minh, Bình Dương, Đồng Nai, Bà Rịa - Vũng Tàu là vùng kinh tế năng động và hiện đại nhất cả nước.",
    relatedLandmark: "Bến Nhà Rồng"
  },
  {
    id: "geo_9_04",
    grade: "Lớp 9",
    subject: "geo",
    text: "Nhà máy thủy điện lớn nhất Việt Nam và toàn khu vực Đông Nam Á hiện nay là nhà máy nào?",
    options: ["Thủy điện Sơn La (công suất 2.400 MW)", "Thủy điện Hòa Bình (1.920 MW)", "Thủy điện Lai Châu (1.200 MW)", "Thủy điện Yaly (720 MW)"],
    correct: "Thủy điện Sơn La (công suất 2.400 MW)",
    explanation: "Nhà máy thủy điện Sơn La xây dựng trên dòng sông Đà có công suất 2.400 MW, là công trình thế kỉ đóng góp nguồn điện năng trọng yếu cho quốc gia.",
    relatedLandmark: "Hồ Ba Bể"
  },
  {
    id: "geo_9_05",
    grade: "Lớp 9",
    subject: "geo",
    text: "Cánh đồng muối Sa Huỳnh nổi tiếng lâu đời ở miền Trung thuộc tỉnh thành nào?",
    options: ["Tỉnh Quảng Ngãi", "Tỉnh Ninh Thuận (Cà Ná)", "Tỉnh Bình Định", "Tỉnh Khánh Hòa"],
    correct: "Tỉnh Quảng Ngãi",
    explanation: "Đồng muối Sa Huỳnh (Quảng Ngãi) là vựa muối hạt trắng ngần quan trọng bậc nhất miền Trung với truyền thống làm muối hơn 100 năm.",
    relatedLandmark: "Đảo Lý Sơn"
  },
  {
    id: "geo_9_06",
    grade: "Lớp 9",
    subject: "geo",
    text: "Di sản thiên nhiên thế giới nổi tiếng với hệ thống hang động karst đá vôi đồ sộ như động Phong Nha, động Thiên Đường thuộc tỉnh nào?",
    options: ["Tỉnh Quảng Bình", "Tỉnh Quảng Ninh", "Tỉnh Ninh Bình", "Tỉnh Cao Bằng"],
    correct: "Tỉnh Quảng Bình",
    explanation: "Vườn quốc gia Phong Nha - Kẻ Bàng (Quảng Bình) hai lần được UNESCO công nhận là Di sản thiên nhiên thế giới, nơi có hang Sơn Đoòng lớn nhất hành tinh.",
    relatedLandmark: "Động Phong Nha"
  },
  {
    id: "geo_9_07",
    grade: "Lớp 9",
    subject: "geo",
    text: "Quần thể danh thắng Tràng An - di sản văn hóa và thiên nhiên hỗn hợp duy nhất ở Đông Nam Á thuộc tỉnh nào?",
    options: ["Tỉnh Ninh Bình", "Tỉnh Thanh Hóa", "Tỉnh Nam Định", "Tỉnh Hà Nam"],
    correct: "Tỉnh Ninh Bình",
    explanation: "Tràng An (Ninh Bình) được UNESCO ghi danh là Di sản hỗn hợp đầu tiên của Đông Nam Á vào năm 2014, gồm cả giá trị địa chất và lịch sử cố đô Hoa Lư.",
    relatedLandmark: "Tràng An Ninh Bình"
  },
  {
    id: "geo_9_08",
    grade: "Lớp 9",
    subject: "geo",
    text: "Theo Luật Biển Việt Nam năm 2012, chiều rộng lãnh hải thuộc chủ quyền hoàn toàn của nước ta là bao nhiêu hải lý tính từ đường cơ sở?",
    options: ["12 hải lý (khoảng 22,224 km)", "24 hải lý", "200 hải lý", "100 hải lý"],
    correct: "12 hải lý (khoảng 22,224 km)",
    explanation: "Lãnh hải của Việt Nam rộng 12 hải lý. Vùng biển bên ngoài tiếp giáp thêm 12 hải lý là vùng tiếp giáp lãnh hải, và 200 hải lý là vùng đặc quyền kinh tế.",
    relatedLandmark: "Ngọn Hải Đăng Vũng Tàu"
  },

  // --- CÁC CÂU HỎI MỞ RỘNG VÀ ĐIỂN TÍCH LỊCH SỬ - ĐỊA LÍ THCS ---
  {
    "id": "his_extra_01",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Người thầy giáo mẫu mực muôn đời của nền giáo dục Việt Nam, từng dâng 'Thất trảm sớ' xin chém 7 gian thần thời Trần là ai?",
    "options": [
      "Chu Văn An",
      "Nguyễn Bỉnh Khiêm",
      "Lê Quý Đôn",
      "Lương Thế Vinh"
    ],
    "correct": "Chu Văn An",
    "explanation": "Thầy Chu Văn An (1292 - 1370) là bậc đại nho tiết tháo, từng giữ chức Tư nghiệp Quốc Tử Giám, dạy học cho các hoàng tử và đào tạo nhiều nhân tài cho đất nước.",
    "relatedLandmark": "Văn Miếu Quốc Tử Giám"
  },
  {
    "id": "his_extra_02",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Vị danh y lỗi lạc đời Trần được mệnh danh là 'Ông tổ ngành Dược học cổ truyền Việt Nam' với phương châm 'Nam dược trị Nam nhân' là ai?",
    "options": [
      "Thiền sư Tuệ Tĩnh",
      "Hải Thượng Lãn Ông (Lê Hữu Trác)",
      "Nguyễn Đại Năng",
      "Trần Nguyên Đán"
    ],
    "correct": "Thiền sư Tuệ Tĩnh",
    "explanation": "Tuệ Tĩnh (quê Hải Dương) đã nghiên cứu hàng ngàn cây thuốc Nam dân dã để chữa bệnh cho nhân dân và đặt nền móng y học cổ truyền dân tộc.",
    "relatedLandmark": "Côn Sơn - Kiếp Bạc"
  },
  {
    "id": "his_extra_03",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Vị trạng nguyên kiệt xuất thời Trần nổi tiếng với tài đối đáp thông minh đi sứ phương Bắc, được phong là 'Lưỡng quốc Trạng nguyên' là ai?",
    "options": [
      "Mạc Đĩnh Chi",
      "Nguyễn Hiền",
      "Lương Thế Vinh",
      "Phùng Khắc Khoan"
    ],
    "correct": "Mạc Đĩnh Chi",
    "explanation": "Mạc Đĩnh Chi đỗ Trạng nguyên năm 1304. Khi đi sứ nhà Nguyên, nhờ bài phú 'Hoa sen giếng ngọc' (Ngọc tỉnh liên phú) tài hoa mà được hoàng đế nhà Nguyên phong làm Trạng nguyên.",
    "relatedLandmark": "Hoàng Thành Thăng Long"
  },
  {
    "id": "his_extra_04",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Danh nhân văn hóa lỗi lạc thế kỉ XVI được nhân dân tôn xưng là 'Trạng Trình' với tài tiên tri sấm truyền và học vấn uyên thâm là ai?",
    "options": [
      "Nguyễn Bỉnh Khiêm",
      "Phùng Khắc Khoan",
      "Nguyễn Dữ",
      "Lê Quý Đôn"
    ],
    "correct": "Nguyễn Bỉnh Khiêm",
    "explanation": "Trạng Trình Nguyễn Bỉnh Khiêm (Hải Phòng) là nhà tư tưởng lớn, có công đưa ra nhiều lời khuyên chiến lược định hướng vận mệnh dân tộc suốt thời kỳ Trịnh - Nguyễn phân tranh.",
    "relatedLandmark": "Bạch Đằng Giang"
  },
  {
    "id": "his_extra_05",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Sự kiện lịch sử phân chia Đàng Trong và Đàng Ngoài kéo dài hơn một thế kỉ lấy dòng sông nào làm ranh giới chia cắt?",
    "options": [
      "Sông Gianh (Quảng Bình)",
      "Sông Bến Hải (Quảng Trị)",
      "Sông Thạch Hãn (Quảng Trị)",
      "Sông Lam (Nghệ An)"
    ],
    "correct": "Sông Gianh (Quảng Bình)",
    "explanation": "Cuộc chiến tranh Trịnh - Nguyễn (1627 - 1672) bất phân thắng bại, hai bên lấy sông Gianh (Quảng Bình) làm giới tuyến chia cắt đất nước thành Đàng Ngoài và Đàng Trong.",
    "relatedLandmark": "Động Phong Nha"
  },
  {
    "id": "his_extra_06",
    "grade": "Lớp 8",
    "subject": "his",
    "text": "Vị tướng chỉ huy quân dân Hà Nội chiến đấu anh dũng bảo vệ thành Hà Nội và tuẫn tiết tại Cửa Bắc năm 1882 là ai?",
    "options": [
      "Tổng đốc Hoàng Diệu",
      "Tổng đốc Nguyễn Tri Phương",
      "Trương Định",
      "Phan Đình Phùng"
    ],
    "correct": "Tổng đốc Hoàng Diệu",
    "explanation": "Khi quân Pháp do Riviere chỉ huy nổ súng đánh chiếm thành Hà Nội ngày 25/4/1882, Tổng đốc Hoàng Diệu kiên quyết chỉ huy chiến đấu đến cùng rồi tuẫn tiết tại Võ Miếu để giữ tròn khí tiết.",
    "relatedLandmark": "Hoàng Thành Thăng Long"
  },
  {
    "id": "his_extra_07",
    "grade": "Lớp 8",
    "subject": "his",
    "text": "Địa danh nào ở Quảng Trị từng là căn cứ địa nơi Tôn Thất Thuyết đưa vua Hàm Nghi đến và ban Chiếu Cần Vương kêu gọi cứu nước?",
    "options": [
      "Thành Tân Sở (Cam Lộ, Quảng Trị)",
      "Thành Cổ Quảng Trị",
      "Đồn Mang Cá",
      "Căn cứ Ba Đình"
    ],
    "correct": "Thành Tân Sở (Cam Lộ, Quảng Trị)",
    "explanation": "Tháng 7/1885, tại căn cứ sơn phòng Tân Sở (huyện Cam Lộ, tỉnh Quảng Trị), Tôn Thất Thuyết đã nhân danh vua Hàm Nghi ban Chiếu Cần Vương.",
    "relatedLandmark": "Thành Cổ Quảng Trị"
  },
  {
    "id": "his_extra_08",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Tuyến chi viện chiến lược huyền thoại mang tên Bác nối liền hậu phương miền Bắc với tiền tuyến miền Nam trong kháng chiến chống Mỹ là gì?",
    "options": [
      "Đường Trường Sơn (Đường Hồ Chí Minh)",
      "Đường 9 Nam Lào",
      "Đường số 4",
      "Đường 1A"
    ],
    "correct": "Đường Trường Sơn (Đường Hồ Chí Minh)",
    "explanation": "Đoàn 559 được thành lập ngày 19/5/1959 mở đường Trường Sơn xẻ dọc dãy núi hùng vĩ, vận chuyển hàng triệu tấn vũ khí, lương thực và bộ đội vào giải phóng miền Nam.",
    "relatedLandmark": "Ngã Ba Đồng Lộc"
  },
  {
    "id": "his_extra_09",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Địa danh Ngã ba Đồng Lộc (Hà Tĩnh) gắn liền với sự hy sinh anh dũng kiên cường của bao nhiêu nữ thanh niên xung phong bảo vệ huyết mạch giao thông?",
    "options": [
      "10 cô gái thanh niên xung phong",
      "12 cô gái thanh niên xung phong",
      "8 cô gái thanh niên xung phong",
      "15 cô gái thanh niên xung phong"
    ],
    "correct": "10 cô gái thanh niên xung phong",
    "explanation": "Trưa ngày 24/7/1968, 10 cô gái thanh niên xung phong tiểu đội 4 do chị Võ Thị Tần làm tiểu đội trưởng đã anh dũng hy sinh khi đang san lấp hố bom thông đường tại Ngã ba Đồng Lộc.",
    "relatedLandmark": "Ngã Ba Đồng Lộc"
  },
  {
    "id": "his_extra_10",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Con đường vận chuyển vũ khí bí mật trên biển chi viện cho chiến trường miền Nam bằng các 'Đoàn tàu Không số' anh hùng mang tên gì?",
    "options": [
      "Đường Hồ Chí Minh trên biển",
      "Hải trình Thống Nhất",
      "Hải trình Giải Phóng",
      "Tuyến đường Nam Bắc"
    ],
    "correct": "Đường Hồ Chí Minh trên biển",
    "explanation": "Đoàn 759 (sau là Lữ đoàn 125 Hải quân) thành lập ngày 23/10/1961, chỉ huy các con tàu không số vượt biển Đông chở vũ khí tiếp tế cho các chiến trường Nam Bộ, Nam Trung Bộ.",
    "relatedLandmark": "Bến Nhà Rồng"
  },
  {
    "id": "his_extra_11",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Di tích Nhà tù Côn Đảo - nơi giam cầm và tra tấn hàng vạn chiến sĩ cách mạng kiên trung thời kỳ kháng chiến nằm ở tỉnh thành nào?",
    "options": [
      "Tỉnh Bà Rịa - Vũng Tàu",
      "Tỉnh Kiên Giang",
      "Tỉnh Cà Mau",
      "TP. Hồ Chí Minh"
    ],
    "correct": "Tỉnh Bà Rịa - Vũng Tàu",
    "explanation": "Nhà tù Côn Đảo (huyện Côn Đảo, Bà Rịa - Vũng Tàu) được ví như 'Địa ngục trần gian' với khu chuồng cọp tàn bạo, nơi ngời sáng ý chí bất khuất của chị Võ Thị Sáu, đồng chí Lê Hồng Phong...",
    "relatedLandmark": "Côn Đảo"
  },
  {
    "id": "his_extra_12",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Cây cầu lịch sử bắc qua sông Bến Hải (Quảng Trị) từng là giới tuyến quân sự tạm thời chia cắt hai miền Nam - Bắc đất nước suốt hơn 20 năm là cầu nào?",
    "options": [
      "Cầu Hiền Lương",
      "Cầu Thạch Hãn",
      "Cầu Hàm Rồng",
      "Cầu Long Biên"
    ],
    "correct": "Cầu Hiền Lương",
    "explanation": "Sau Hiệp định Giơ-ne-vơ 1954, vĩ tuyến 17 và cầu Hiền Lương bắc qua sông Bến Hải (Quảng Trị) trở thành biểu tượng cho nỗi đau chia cắt và khát vọng thống nhất non sông.",
    "relatedLandmark": "Thành Cổ Quảng Trị"
  },
  {
    "id": "geo_extra_01",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Vịnh biển đẹp nhất miền Trung được mệnh danh là một trong những vịnh nước sâu kín gió tốt nhất thế giới, có tầm quan trọng chiến lược quân sự là vịnh nào?",
    "options": [
      "Vịnh Cam Ranh (Khánh Hòa)",
      "Vịnh Hạ Long (Quảng Ninh)",
      "Vịnh Đà Nẵng",
      "Vịnh Xuân Đài (Phú Yên)"
    ],
    "correct": "Vịnh Cam Ranh (Khánh Hòa)",
    "explanation": "Vịnh Cam Ranh (Khánh Hòa) có độ sâu lý tưởng, kín gió nhờ các dãy núi bao bọc, giữ vị trí yết hầu chiến lược hàng hải quốc tế trên Biển Đông.",
    "relatedLandmark": "Vịnh Cam Ranh"
  },
  {
    "id": "geo_extra_02",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Đèo nào cắt ngang dãy Bạch Mã, nối liền tỉnh Thừa Thiên Huế và TP Đà Nẵng, được vua Lê Thánh Tông phong tặng danh hiệu 'Đệ nhất hùng quan'?",
    "options": [
      "Đèo Hải Vân",
      "Đèo Ngang",
      "Đèo Cù Mông",
      "Đèo Cả"
    ],
    "correct": "Đèo Hải Vân",
    "explanation": "Đèo Hải Vân dài khoảng 20 km uốn lượn hùng vĩ qua dãy núi Bạch Mã đâm ngang ra biển, là ranh giới khí hậu tự nhiên giữa miền Bắc và miền Nam nước ta.",
    "relatedLandmark": "Đèo Hải Vân"
  },
  {
    "id": "geo_extra_03",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Hiện tượng thời tiết 'Gió phơn Tây Nam' (còn gọi là gió Lào) gây thời tiết khô nóng đặc trưng vào đầu mùa hạ ở vùng nào của nước ta?",
    "options": [
      "Vùng Bắc Trung Bộ và đồng bằng ven biển miền Trung",
      "Vùng Đồng bằng sông Hồng",
      "Vùng Tây Nguyên",
      "Vùng Đồng bằng sông Cửu Long"
    ],
    "correct": "Vùng Bắc Trung Bộ và đồng bằng ven biển miền Trung",
    "explanation": "Khối khí nhiệt đới ẩm từ vịnh Bengal di chuyển theo hướng Tây Nam gặp bức chắn địa hình dãy Trường Sơn gây mưa lớn ở sườn tây, khi vượt sang sườn đông bị biến tính trở nên khô nóng.",
    "relatedLandmark": "Ngã Ba Đồng Lộc"
  },
  {
    "id": "geo_extra_04",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Bể than đá (than antraxit) có trữ lượng lớn nhất và chất lượng tốt nhất Việt Nam tập trung chủ yếu ở tỉnh nào?",
    "options": [
      "Tỉnh Quảng Ninh",
      "Tỉnh Thái Nguyên",
      "Tỉnh Lạng Sơn",
      "Tỉnh Cao Bằng"
    ],
    "correct": "Tỉnh Quảng Ninh",
    "explanation": "Vùng mỏ than Quảng Ninh (Cẩm Phả, Hòn Gai, Uông Bí) chiếm hơn 90% trữ lượng than đá cả nước với chất lượng than antraxit nhiệt lượng cao nổi tiếng thế giới.",
    "relatedLandmark": "Vịnh Hạ Long"
  },
  {
    "id": "geo_extra_05",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Hồ nước ngọt tự nhiên trên núi lớn nhất Việt Nam, được UNESCO xếp vào danh sách 20 hồ nước ngọt tự nhiên đặc biệt cần được bảo vệ là hồ nào?",
    "options": [
      "Hồ Ba Bể (Bắc Kạn)",
      "Hồ Thác Bà (Yên Bái)",
      "Hồ Hòa Bình",
      "Hồ Dầu Tiếng (Tây Ninh)"
    ],
    "correct": "Hồ Ba Bể (Bắc Kạn)",
    "explanation": "Hồ Ba Bể nằm ở độ cao khoảng 145m so với mực nước biển giữa những rặng núi đá vôi đồ sộ của tỉnh Bắc Kạn, gồm 3 nhánh hồ thông nhau là Pé Lầm, Pé Lù và Pé Lèng.",
    "relatedLandmark": "Hồ Ba Bể"
  },
  {
    "id": "geo_extra_06",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Cụm cảng nước sâu quốc tế hiện đại thuộc vùng kinh tế trọng điểm phía Nam có khả năng đón những siêu tàu container lớn nhất thế giới là cảng nào?",
    "options": [
      "Cảng Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu)",
      "Cảng Cát Lái (TP. HCM)",
      "Cảng Sài Gòn",
      "Cảng Quy Nhơn"
    ],
    "correct": "Cảng Cái Mép - Thị Vải (Bà Rịa - Vũng Tàu)",
    "explanation": "Cụm cảng Cái Mép - Thị Vải thuộc tỉnh Bà Rịa - Vũng Tàu là cửa ngõ giao thương đường biển trực tiếp từ Việt Nam sang châu Mỹ và châu Âu mà không cần trung chuyển.",
    "relatedLandmark": "Ngọn Hải Đăng Vũng Tàu"
  },
  {
    "id": "geo_extra_07",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Loại đất chiếm diện tích lớn và màu mỡ nhất ở vùng Tây Nguyên, rất thích hợp cho việc phát triển cây công nghiệp quy mô lớn là đất gì?",
    "options": [
      "Đất đỏ bazan",
      "Đất phù sa cổ",
      "Đất feralit trên đá vôi",
      "Đất cát pha ven biển"
    ],
    "correct": "Đất đỏ bazan",
    "explanation": "Đất đỏ hình thành từ đá bazan núi lửa cổ ở Tây Nguyên có tầng phong hóa dày, tơi xốp, giàu dinh dưỡng, tầng đất sâu thích hợp cho cây cà phê, cao su, hồ tiêu, sầu riêng.",
    "relatedLandmark": "Thác Dray Nur"
  },
  {
    "id": "geo_extra_08",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Di sản văn hóa phi vật thể đại diện của nhân loại được UNESCO vinh danh gắn liền với đời sống tinh thần của đồng bào các dân tộc Tây Nguyên là gì?",
    "options": [
      "Không gian văn hóa Cồng chiêng Tây Nguyên",
      "Dân ca Ví Giặm",
      "Đờn ca tài tử",
      "Hát Xoan Phú Thọ"
    ],
    "correct": "Không gian văn hóa Cồng chiêng Tây Nguyên",
    "explanation": "Không gian văn hóa Cồng chiêng Tây Nguyên trải rộng khắp 5 tỉnh Kon Tum, Gia Lai, Đắk Lắk, Đắk Nông và Lâm Đồng được UNESCO công nhận là Kiệt tác truyền khẩu năm 2005.",
    "relatedLandmark": "Nhà Rông Kon Klor"
  },
  {
    "id": "geo_extra_09",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Chợ nổi nổi tiếng tấp nập giao thương xuồng ghe đặc trưng của vùng sông nước miền Tây thuộc thành phố Cần Thơ là chợ nổi nào?",
    "options": [
      "Chợ nổi Cái Răng",
      "Chợ nổi Ngã Bảy (Hậu Giang)",
      "Chợ nổi Ngã Năm (Sóc Trăng)",
      "Chợ nổi Trà Ôn (Vĩnh Long)"
    ],
    "correct": "Chợ nổi Cái Răng",
    "explanation": "Chợ nổi Cái Răng nằm trên dòng sông Cần Thơ, chuyên buôn bán các loại trái cây và nông sản miền Tây, với nét văn hóa 'cây bẹo' độc đáo treo gì bán nấy.",
    "relatedLandmark": "Chợ Nổi Cái Răng"
  },
  {
    "id": "geo_extra_10",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Hai con sông lớn bồi đắp nên vùng đồng bằng châu thổ sông Cửu Long màu mỡ và trù phú là hai con sông nào?",
    "options": [
      "Sông Tiền và Sông Hậu",
      "Sông Đồng Nai và Sông Bé",
      "Sông Vàm Cỏ Đông và Vàm Cỏ Tây",
      "Sông Sài Gòn và Sông Thị Vải"
    ],
    "correct": "Sông Tiền và Sông Hậu",
    "explanation": "Sông Mê Kông khi chảy vào lãnh thổ Việt Nam chia thành hai nhánh lớn là sông Tiền và sông Hậu, đổ ra biển Đông qua chín cửa sông nên gọi là sông Cửu Long (Chín Rồng).",
    "relatedLandmark": "Chợ Nổi Cái Bè"
  },
,
  {
    "id": "his_plus_01",
    "grade": "Lớp 6",
    "subject": "his",
    "text": "Hiện vật tiêu biểu và đỉnh cao nhất cho tài năng đúc đồng và nghệ thuật thời kỳ văn hóa Đông Sơn là gì?",
    "options": [
      "Trống đồng Đông Sơn (Trống đồng Ngọc Lũ)",
      "Thạp đồng Đào Thịnh",
      "Mũi tên đồng Cổ Loa",
      "Rìu đồng gót vuông"
    ],
    "correct": "Trống đồng Đông Sơn (Trống đồng Ngọc Lũ)",
    "explanation": "Trống đồng Đông Sơn là biểu tượng rực rỡ của nền văn minh sông Hồng, thể hiện trình độ luyện kim điêu luyện và đời sống tâm linh, lao động phong phú của người Việt cổ.",
    "relatedLandmark": "Đền Hùng"
  },
  {
    "id": "his_plus_02",
    "grade": "Lớp 6",
    "subject": "his",
    "text": "Vị tướng nhà Hán sang đàn áp cuộc khởi nghĩa Hai Bà Trưng vào năm 42 SCN là ai?",
    "options": [
      "Mã Viện",
      "Tô Định",
      "Tích Quang",
      "Lưu Hoằng Tháo"
    ],
    "correct": "Mã Viện",
    "explanation": "Mã Viện được vua Hán phong làm Phục Ba tướng quân, đem quân thủy bộ ồ ạt sang đàn áp cuộc khởi nghĩa của Hai Bà Trưng.",
    "relatedLandmark": "Đền Hát Môn"
  },
  {
    "id": "his_plus_03",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Hội thề Lũng Nhai (năm 1416) diễn ra tại Thanh Hóa gắn liền với sự kiện lịch sử trọng đại nào?",
    "options": [
      "Lê Lợi cùng 18 hào kiệt kết nghĩa nguyện đánh đuổi giặc Minh",
      "Hội nghị Diên Hồng",
      "Hội nghị Bình Than",
      "Khởi nghĩa Tây Sơn"
    ],
    "correct": "Lê Lợi cùng 18 hào kiệt kết nghĩa nguyện đánh đuổi giặc Minh",
    "explanation": "Hội thề Lũng Nhai (Thường Xuân, Thanh Hóa) là lễ kết nghĩa linh thiêng giữa Lê Lợi và các tướng lĩnh trung kiên như Nguyễn Trãi, Lê Lai, mở đường cho cuộc khởi nghĩa Lam Sơn toàn thắng.",
    "relatedLandmark": "Khu Di Tích Lam Kinh"
  },
  {
    "id": "his_plus_04",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Vị tướng lĩnh Lam Sơn đã hy sinh quên mình, cải trang thành Lê Lợi để cứu chủ tướng và nghĩa quân khỏi vòng vây giặc Minh ở núi Chí Linh là ai?",
    "options": [
      "Lê Lai",
      "Lê Sát",
      "Lưu Nhân Chú",
      "Đinh Liệt"
    ],
    "correct": "Lê Lai",
    "explanation": "Hành động 'Lê Lai liều mình cứu chúa' trở thành tấm gương sáng ngời về lòng trung nghĩa, hy sinh thân mình vì đại nghĩa cứu nước.",
    "relatedLandmark": "Khu Di Tích Lam Kinh"
  },
  {
    "id": "his_plus_05",
    "grade": "Lớp 7",
    "subject": "his",
    "text": "Trận địa cọc Bạch Đằng năm 1288 thời Trần do ai trực tiếp chỉ huy đánh tan đạo thủy binh của quân xâm lược Nguyên - Mông?",
    "options": [
      "Trần Quốc Tuấn (Trần Hưng Đạo)",
      "Trần Quang Khải",
      "Trần Khánh Dư",
      "Trần Nhật Duật"
    ],
    "correct": "Trần Quốc Tuấn (Trần Hưng Đạo)",
    "explanation": "Kế thừa nghệ thuật quân sự của Ngô Quyền, Trần Hưng Đạo đã chỉ huy phục kích thủy triều trên sông Bạch Đằng năm 1288, bắt sống tướng giặc Ô Mã Nhi, đập tan đạo quân Mông - Nguyên.",
    "relatedLandmark": "Bạch Đằng Giang"
  },
  {
    "id": "his_plus_06",
    "grade": "Lớp 8",
    "subject": "his",
    "text": "Văn thân lãnh đạo cuộc khởi nghĩa Bãi Sậy (1883 - 1892) ở vùng đầm lầy Hưng Yên là ai?",
    "options": [
      "Nguyễn Thiện Thuật",
      "Đinh Công Tráng",
      "Phan Đình Phùng",
      "Tống Duy Tân"
    ],
    "correct": "Nguyễn Thiện Thuật",
    "explanation": "Nguyễn Thiện Thuật (Tán Thuật) đã sáng tạo lối đánh du kích linh hoạt dựa vào lau sậy rậm rạp ở vùng đầm lầy Dạ Trạch - Bãi Sậy gây cho quân Pháp nhiều thiệt hại nặng nề.",
    "relatedLandmark": "Hồ Hoàn Kiếm"
  },
  {
    "id": "his_plus_07",
    "grade": "Lớp 8",
    "subject": "his",
    "text": "Căn cứ địa Ba Đình (Nga Sơn, Thanh Hóa) trong phong trào Cần Vương do ai trực tiếp chỉ huy xây dựng?",
    "options": [
      "Đinh Công Tráng và Phạm Bành",
      "Phan Đình Phùng",
      "Hoàng Hoa Thám",
      "Nguyễn Thiện Thuật"
    ],
    "correct": "Đinh Công Tráng và Phạm Bành",
    "explanation": "Chiến khu Ba Đình được xây dựng kiên cố bằng rào tre gai, bùn rơm và công sự ngầm, đã bẻ gãy nhiều đợt tấn công lớn của đại quân Pháp vào cuối năm 1886.",
    "relatedLandmark": "Thành Nhà Hồ"
  },
  {
    "id": "his_plus_08",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Chiến dịch tiến công lớn đầu tiên của Quân đội Nhân dân Việt Nam trong kháng chiến chống Pháp nhằm khai thông biên giới Việt - Trung là chiến dịch nào?",
    "options": [
      "Chiến dịch Biên giới Thu - Đông 1950",
      "Chiến dịch Việt Bắc Thu - Đông 1947",
      "Chiến dịch Hòa Bình 1951",
      "Chiến dịch Tây Bắc 1952"
    ],
    "correct": "Chiến dịch Biên giới Thu - Đông 1950",
    "explanation": "Chiến dịch Biên giới 1950 giải phóng hoàn toàn tuyến biên giới dài 750 km, mở rộng căn cứ địa Việt Bắc và giành thế chủ động chiến lược trên chiến trường chính Bắc Bộ.",
    "relatedLandmark": "Hang Pác Bó"
  },
  {
    "id": "his_plus_09",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Anh hùng liệt sĩ nào đã lấy thân mình chèn bánh pháo trong chiến dịch lịch sử Điện Biên Phủ năm 1954?",
    "options": [
      "Anh hùng Tô Vĩnh Diện",
      "Anh hùng Bế Văn Đàn",
      "Anh hùng Phan Đình Giót",
      "Anh hùng Cù Chính Lan"
    ],
    "correct": "Anh hùng Tô Vĩnh Diện",
    "explanation": "Trên dốc Chuối hiểm trở ở Điện Biên Phủ, khi dây tời pháo bị đứt, đồng chí Tô Vĩnh Diện đã dũng cảm lao cả thân mình chèn vào bánh pháo để cứu khẩu pháo cao xạ an toàn.",
    "relatedLandmark": "Điện Biên Phủ"
  },
  {
    "id": "his_plus_10",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Anh hùng liệt sĩ nào đã lấy thân mình lấp lỗ châu mai của địch, mở đường cho đồng đội xông lên tiêu diệt cứ điểm Him Lam ở Điện Biên Phủ?",
    "options": [
      "Anh hùng Phan Đình Giót",
      "Anh hùng Bế Văn Đàn",
      "Anh hùng Tô Vĩnh Diện",
      "Anh hùng La Văn Cầu"
    ],
    "correct": "Anh hùng Phan Đình Giót",
    "explanation": "Trong trận mở màn tiêu diệt cứ điểm Him Lam ngày 13/3/1954, đồng chí Phan Đình Giót đã anh dũng lấy thân mình bịt kín hỏa lực lỗ châu mai của giặc, tạo điều kiện cho tiểu đoàn xung phong.",
    "relatedLandmark": "Điện Biên Phủ"
  },
  {
    "id": "his_plus_11",
    "grade": "Lớp 9",
    "subject": "his",
    "text": "Hiệp định quốc tế nào đã chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam và buộc quân đội Mỹ phải rút hoàn toàn về nước vào năm 1973?",
    "options": [
      "Hiệp định Paris năm 1973",
      "Hiệp định Giơ-ne-vơ năm 1954",
      "Hiệp định Sơ bộ 1946",
      "Hội nghị Potsdam 1945"
    ],
    "correct": "Hiệp định Paris năm 1973",
    "explanation": "Hiệp định Paris ký ngày 27/1/1973 là thắng lợi ngoại giao rực rỡ, buộc đế quốc Mỹ phải công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam.",
    "relatedLandmark": "Hồ Hoàn Kiếm"
  },
  {
    "id": "geo_plus_01",
    "grade": "Lớp 6",
    "subject": "geo",
    "text": "Khoảng cách giữa hai đường vĩ tuyến liên tiếp cách nhau 1 độ trên bề mặt Trái Đất có độ dài thực tế xấp xỉ bao nhiêu km?",
    "options": [
      "Khoảng 111 km",
      "Khoảng 60 km",
      "Khoảng 200 km",
      "Khoảng 50 km"
    ],
    "correct": "Khoảng 111 km",
    "explanation": "Vì chu vi Trái Đất khoảng 40.075 km chia cho 360 độ góc, nên mỗi 1 độ vĩ tuyến tương ứng khoảng 111,3 km trên thực địa.",
    "relatedLandmark": "Mũi Cà Mau"
  },
  {
    "id": "geo_plus_02",
    "grade": "Lớp 6",
    "subject": "geo",
    "text": "Tầng khí quyển nào nằm sát mặt đất, là nơi tập trung phần lớn hơi nước và diễn ra hầu hết các hiện tượng thời tiết như mây, mưa, sương mù, dông bão?",
    "options": [
      "Tầng đối lưu",
      "Tầng bình lưu",
      "Tầng giữa",
      "Tầng nhiệt"
    ],
    "correct": "Tầng đối lưu",
    "explanation": "Tầng đối lưu có độ cao từ 0 đến 16 km (ở xích đạo), nhiệt độ giảm dần theo độ cao (cứ lên cao 100m nhiệt độ giảm khoảng 0,6°C).",
    "relatedLandmark": "Đỉnh Fansipan"
  },
  {
    "id": "geo_plus_03",
    "grade": "Lớp 7",
    "subject": "geo",
    "text": "Con sông dài nhất thế giới chảy qua khu vực Đông Bắc châu Phi đổ ra Địa Trung Hải là con sông nào?",
    "options": [
      "Sông Nin (Nile - 6.650 km)",
      "Sông A-ma-dôn (Amazon)",
      "Sông Dương Tử (Trường Giang)",
      "Sông Mi-xi-xi-pi (Mississippi)"
    ],
    "correct": "Sông Nin (Nile - 6.650 km)",
    "explanation": "Sông Nin dài 6.650 km, là cái nôi nuôi dưỡng nền văn minh Ai Cập cổ đại rực rỡ với dòng phù sa màu mỡ bồi đắp đôi bờ.",
    "relatedLandmark": "Thác Bản Giốc"
  },
  {
    "id": "geo_plus_04",
    "grade": "Lớp 7",
    "subject": "geo",
    "text": "Hệ thống rạn san hô ngầm vĩ đại nhất hành tinh trải dài ngoài khơi bờ biển phía đông bắc nước Úc có tên là gì?",
    "options": [
      "Rạn san hô Great Barrier",
      "Rạn san hô Belize",
      "Rạn san hô Biển Đỏ",
      "Rạn san hô Tubbataha"
    ],
    "correct": "Rạn san hô Great Barrier",
    "explanation": "Great Barrier dài hơn 2.300 km là cấu trúc sống lớn nhất trên Trái Đất có thể nhìn thấy từ ngoài vũ trụ, được UNESCO công nhận là Di sản thế giới.",
    "relatedLandmark": "Quần Đảo Trường Sa"
  },
  {
    "id": "geo_plus_05",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Hai hệ thống sông có diện tích lưu vực và lượng phù sa lớn nhất nước ta là gì?",
    "options": [
      "Hệ thống sông Hồng và sông Mê Kông (Cửu Long)",
      "Hệ thống sông Đồng Nai và sông Mã",
      "Hệ thống sông Cả và sông Thu Bồn",
      "Hệ thống sông Ba và sông Kỳ Cùng"
    ],
    "correct": "Hệ thống sông Hồng và sông Mê Kông (Cửu Long)",
    "explanation": "Hai hệ thống sông Hồng và sông Mê Kông đã bồi đắp nên hai đồng bằng châu thổ phì nhiêu là Đồng bằng sông Hồng và Đồng bằng sông Cửu Long.",
    "relatedLandmark": "Cầu Long Biên"
  },
  {
    "id": "geo_plus_06",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Đảo tiền tiêu giữ vị trí chiến lược an ninh quốc phòng ở giữa vịnh Bắc Bộ thuộc thành phố Hải Phòng là đảo nào?",
    "options": [
      "Đảo Bạch Long Vĩ",
      "Đảo Cát Bà",
      "Đảo Cô Tô",
      "Đảo Hòn Tre"
    ],
    "correct": "Đảo Bạch Long Vĩ",
    "explanation": "Bạch Long Vĩ nằm cách đất liền Hải Phòng khoảng 110 km, là ngư trường đánh bắt trù phú và chốt phên dậu chiến lược trên vịnh Bắc Bộ.",
    "relatedLandmark": "Vịnh Hạ Long"
  },
  {
    "id": "geo_plus_07",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Quần đảo Cát Bà thuộc thành phố Hải Phòng nổi tiếng với danh hiệu khu dự trữ sinh quyển thế giới và di sản thiên nhiên thế giới gồm khoảng bao nhiêu hòn đảo?",
    "options": [
      "Hơn 360 hòn đảo lớn nhỏ",
      "Khoảng 50 hòn đảo",
      "Khoảng 100 hòn đảo",
      "Hơn 1.000 hòn đảo"
    ],
    "correct": "Hơn 360 hòn đảo lớn nhỏ",
    "explanation": "Quần đảo Cát Bà gồm 367 đảo đá vôi nhấp nhô giữa làn nước biển trong xanh, tiếp giáp vịnh Hạ Long và vịnh Lan Hạ thơ mộng.",
    "relatedLandmark": "Vịnh Hạ Long"
  },
  {
    "id": "geo_plus_08",
    "grade": "Lớp 8",
    "subject": "geo",
    "text": "Đảo núi lửa độc đáo ở tỉnh Quảng Ngãi nổi tiếng với nghề trồng tỏi ngon nức tiếng và di tích Hải đội Hoàng Sa kiêm quản Trường Sa là đảo nào?",
    "options": [
      "Đảo Lý Sơn (Cù Lao Ré)",
      "Đảo Cù Lao Chàm",
      "Đảo Phú Quý",
      "Đảo Hòn Chuối"
    ],
    "correct": "Đảo Lý Sơn (Cù Lao Ré)",
    "explanation": "Huyện đảo Lý Sơn hình thành từ miệng núi lửa cổ cách đây hàng triệu năm, là nơi lưu giữ những tư liệu quý báu và lễ khao lề thế lính Hoàng Sa hào hùng.",
    "relatedLandmark": "Đảo Lý Sơn"
  },
  {
    "id": "geo_plus_09",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Khoáng sản kim loại có trữ lượng đứng hàng đầu thế giới phân bố tập trung nhiều nhất ở vùng đất đỏ Tây Nguyên là khoáng sản gì?",
    "options": [
      "Quặng Bô-xít (nguyên liệu sản xuất nhôm)",
      "Quặng Sắt",
      "Quặng Titan",
      "Quặng Đồng"
    ],
    "correct": "Quặng Bô-xít (nguyên liệu sản xuất nhôm)",
    "explanation": "Trữ lượng bô-xít của Việt Nam ước tính hàng tỉ tấn, tập trung chủ yếu ở Đắk Nông, Lâm Đồng và Gia Lai, giữ tiềm năng công nghiệp nhôm to lớn.",
    "relatedLandmark": "Hồ Tơ Nưng Pleiku"
  },
  {
    "id": "geo_plus_10",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Hồ nước ngọt tự nhiên tuyệt đẹp hình thành trên miệng núi lửa cổ đã tắt hàng triệu năm ở tỉnh Gia Lai, được ví như 'Đôi mắt Pleiku' là hồ nào?",
    "options": [
      "Hồ Tơ Nưng (Biển Hồ)",
      "Hồ Lắk (Đắk Lắk)",
      "Hồ Tuyền Lâm (Đà Lạt)",
      "Hồ Dankia"
    ],
    "correct": "Hồ Tơ Nưng (Biển Hồ)",
    "explanation": "Biển Hồ (hồ Tơ Nưng) nằm cách trung tâm Pleiku khoảng 7km, nước quanh năm phẳng lặng xanh biếc giữa rừng thông reo ngút ngàn.",
    "relatedLandmark": "Hồ Tơ Nưng Pleiku"
  },
  {
    "id": "geo_plus_11",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Dân tộc nào ở Việt Nam có số dân đông thứ hai cả nước (sau dân tộc Kinh), sinh sống chủ yếu ở các thung lũng miền núi phía Bắc?",
    "options": [
      "Dân tộc Tày",
      "Dân tộc Thái",
      "Dân tộc Mường",
      "Dân tộc H'Mông"
    ],
    "correct": "Dân tộc Tày",
    "explanation": "Dân tộc Tày có dân số khoảng gần 1,9 triệu người, cư trú lâu đời ở các tỉnh Cao Bằng, Lạng Sơn, Bắc Kạn, Tuyên Quang, Thái Nguyên với làn điệu hát Then nổi tiếng.",
    "relatedLandmark": "Thác Bản Giốc"
  },
  {
    "id": "geo_plus_12",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Thành phố cảng biển lớn thứ hai ở miền Bắc, đầu mối giao thông đường biển và công nghiệp đóng tàu sầm uất được mệnh danh là 'Thành phố Hoa phượng đỏ' là gì?",
    "options": [
      "Thành phố Hải Phòng",
      "Thành phố Hạ Long",
      "Thành phố Cẩm Phả",
      "Thành phố Móng Cái"
    ],
    "correct": "Thành phố Hải Phòng",
    "explanation": "Hải Phòng là thành phố trực thuộc Trung ương, trung tâm cảng biển quốc tế cửa ngõ phía Bắc, nổi tiếng với hoa phượng đỏ rực rỡ mỗi độ hè về.",
    "relatedLandmark": "Bạch Đằng Giang"
  },
  {
    "id": "geo_plus_13",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Đô thị cổ được UNESCO vinh danh là Di sản văn hóa thế giới nằm bên bờ sông Hoài (Quảng Nam), từng là thương cảng quốc tế sầm uất thế kỉ XVII là gì?",
    "options": [
      "Phố cổ Hội An",
      "Cố đô Huế",
      "Phố Hiến (Hưng Yên)",
      "Thương cảng Vân Đồn"
    ],
    "correct": "Phố cổ Hội An",
    "explanation": "Hội An bảo tồn gần như nguyên vẹn quần thể kiến trúc nhà gỗ, chùa Cầu, hội quán truyền thống giao thoa giữa văn hóa Việt Nam, Nhật Bản và Trung Hoa.",
    "relatedLandmark": "Phố Cổ Hội An"
  },
  {
    "id": "geo_plus_14",
    "grade": "Lớp 9",
    "subject": "geo",
    "text": "Tỉnh thành nào sau đây ở nước ta sở hữu cả 2 Di sản văn hóa thế giới được UNESCO công nhận (Cố đô Huế và Nhã nhạc cung đình Huế)?",
    "options": [
      "Tỉnh Thừa Thiên Huế",
      "Tỉnh Quảng Nam",
      "Thành phố Hà Nội",
      "Tỉnh Ninh Bình"
    ],
    "correct": "Tỉnh Thừa Thiên Huế",
    "explanation": "Thừa Thiên Huế là mảnh đất cố đô văn hiến với Quần thể di tích Cố đô Huế (Di sản vật thể) và Nhã nhạc cung đình Huế (Di sản phi vật thể đầu tiên của Việt Nam).",
    "relatedLandmark": "Cố Đô Huế"
  },
];

// =========================================================================
// HÀM CHỌN CÂU HỎI THÔNG MINH - CHỐNG TRÙNG LẶP & GẮN LIỀN VỚI ĐỊA DANH
// =========================================================================
export function getSmartCaroQuestion(usedQuestionIds = [], targetLandmark = null) {
  const usedSet = new Set(usedQuestionIds);

  // 1. Nếu có địa danh cụ thể, kiểm tra xem có câu hỏi trực tiếp về địa danh đó mà chưa dùng không
  if (targetLandmark) {
    const directMatch = CARO_QUESTIONS.find(q => 
      !usedSet.has(q.id) && 
      q.relatedLandmark && 
      (targetLandmark.name.toLowerCase().includes(q.relatedLandmark.toLowerCase()) || 
       q.relatedLandmark.toLowerCase().includes(targetLandmark.name.toLowerCase()) ||
       (targetLandmark.province && q.text.toLowerCase().includes(targetLandmark.province.toLowerCase())))
    );

    if (directMatch) {
      const nextUsed = [...usedQuestionIds, directMatch.id];
      return { question: directMatch, updatedUsedIds: nextUsed };
    }
  }

  // 2. Lấy danh sách các câu hỏi chưa sử dụng trong kho
  const unusedQuestions = CARO_QUESTIONS.filter(q => !usedSet.has(q.id));

  // 3. Nếu đã dùng gần hết kho câu hỏi, tự động làm mới bộ đếm để không bao giờ bị nghẽn
  if (unusedQuestions.length === 0) {
    const randomFresh = CARO_QUESTIONS[Math.floor(Math.random() * CARO_QUESTIONS.length)];
    return { question: randomFresh, updatedUsedIds: [randomFresh.id] };
  }

  // 4. Chọn ngẫu nhiên một câu hỏi chưa dùng
  const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
  const selectedQuestion = unusedQuestions[randomIndex];
  const nextUsed = [...usedQuestionIds, selectedQuestion.id];

  return { question: selectedQuestion, updatedUsedIds: nextUsed };
}
