// Dữ liệu 64 địa danh lịch sử và địa lý trải dài khắp bản đồ Việt Nam
// Bám sát chương trình THCS Lịch sử và Địa lí (Kết nối tri thức)

export const VIETNAM_LANDMARKS = [
  // =========================================================================
  // MIỀN BẮC (Hàng 0, 1, 2: 24 địa danh)
  // =========================================================================
  {
    id: 0,
    name: "Cột cờ Lũng Cú",
    province: "Hà Giang",
    region: "Bắc Bộ",
    coords: { r: 0, c: 3 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Nằm trên đỉnh núi Rồng ở độ cao gần 1.500m so với mực nước biển, là điểm cực Bắc thiêng liêng của Tổ quốc với lá cờ đỏ sao vàng rộng 54m² tượng trưng cho 54 dân tộc anh em.",
    history: "Gắn liền với truyền thuyết thời Lý Thường Kiệt cho đặt một chiếc trống đồng tại đây để giữ vững biên cương bờ cõi nước Nam."
  },
  {
    id: 1,
    name: "Hang Pác Bó",
    province: "Cao Bằng",
    region: "Bắc Bộ",
    coords: { r: 0, c: 4 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Khu di tích lịch sử nằm giữa núi rừng trùng điệp của xã Trường Hà, huyện Hà Quảng; nơi có dòng suối Lê-nin trong xanh như ngọc bích và ngọn núi Các Mác hùng vĩ.",
    history: "Tháng 2/1941, sau 30 năm bôn ba tìm đường cứu nước, Bác Hồ đã trở về Tổ quốc và chọn hang Pác Bó làm căn cứ địa lãnh đạo cách mạng Việt Nam."
  },
  {
    id: 2,
    name: "Thác Bản Giốc",
    province: "Cao Bằng",
    region: "Bắc Bộ",
    coords: { r: 0, c: 5 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Một trong những thác nước tự nhiên đẹp nhất Đông Nam Á, nằm trên dòng chảy của sông Quây Sơn, với các tầng nước đổ xuống trắng xóa giữa thiên nhiên biên giới nguyên sơ.",
    history: "Địa danh phên dậu vùng Đông Bắc, nơi chứng kiến bao trang sử hào hùng của cư dân biên cương bảo vệ từng tấc đất thiêng liêng của Tổ quốc."
  },
  {
    id: 3,
    name: "Đỉnh Fansipan",
    province: "Lào Cai",
    region: "Bắc Bộ",
    coords: { r: 0, c: 1 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Được mệnh danh là 'Nóc nhà Đông Dương' với độ cao 3.143m, thuộc dãy núi Hoàng Liên Sơn hùng vĩ với khí hậu quanh năm mây mù che phủ và thảm thực vật ôn đới phong phú.",
    history: "Biểu tượng cho ý chí kiên cường, khát vọng vươn tới đỉnh cao và tinh thần chinh phục thiên nhiên của con người đất Việt."
  },
  {
    id: 4,
    name: "Điện Biên Phủ",
    province: "Điện Biên",
    region: "Bắc Bộ",
    coords: { r: 1, c: 0 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Thung lũng lòng chảo Mường Thanh trù phú, được bao bọc bởi những dãy núi cao hiểm trở ở miền Tây Bắc Việt Nam.",
    history: "Chiến dịch Điện Biên Phủ năm 1954 kéo dài 56 ngày đêm dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp đã 'Lừng lẫy năm châu, chấn động địa cầu', đập tan tập đoàn cứ điểm của thực dân Pháp."
  },
  {
    id: 5,
    name: "Hồ Ba Bể",
    province: "Bắc Kạn",
    region: "Bắc Bộ",
    coords: { r: 0, c: 2 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Hồ nước ngọt tự nhiên trên núi đá vôi lớn nhất Việt Nam, được hình thành cách đây hơn 200 triệu năm, bao bọc bởi những cánh rừng nguyên sinh bạt ngàn.",
    history: "Nằm trong quần thể căn cứ địa Việt Bắc thời kỳ kháng chiến chống Pháp, che chở cho các cơ quan đầu não của Đảng và Chính phủ."
  },
  {
    id: 6,
    name: "Tân Trào",
    province: "Tuyên Quang",
    region: "Bắc Bộ",
    coords: { r: 1, c: 2 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Thung lũng trù phú được bao bọc bởi đồi cọ, rừng tre nứa và dòng sông Đáy hiền hòa; 'Thủ đô Khu giải phóng' thời tiền khởi nghĩa.",
    history: "Tháng 8/1945, tại cây đa Tân Trào, Đại tướng Võ Nguyên Giáp đọc Quân lệnh số 1 phát lệnh Tổng khởi nghĩa giành chính quyền trên toàn quốc."
  },
  {
    id: 7,
    name: "Đền Hùng",
    province: "Phú Thọ",
    region: "Bắc Bộ",
    coords: { r: 1, c: 1 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Tọa lạc trên núi Nghĩa Lĩnh, vùng đất trung du trù phú nơi hợp lưu của 3 con sông lớn: Sông Hồng, Sông Lô và Sông Đà.",
    history: "Nơi tôn thờ 18 đời Vua Hùng đã có công dựng nên nhà nước Văn Lang - nhà nước đầu tiên trong lịch sử dân tộc Việt Nam. 'Các Vua Hùng đã có công dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước'."
  },
  {
    id: 8,
    name: "Sông Bạch Đằng",
    province: "Quảng Ninh - Hải Phòng",
    region: "Bắc Bộ",
    coords: { r: 1, c: 4 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Con sông lớn chảy qua vùng duyên hải Bắc Bộ với chế độ thủy triều chênh lệch sâu sắc, tạo nên địa thế quân sự thủy chiến hiểm yếu hàng đầu.",
    history: "Nơi diễn ra ba trận thủy chiến lẫy lừng: Ngô Quyền năm 938 đánh tan quân Nam Hán; Lê Hoàn năm 981 phá quân Tống; và Trần Hưng Đạo năm 1288 chôn vùi đạo thủy binh Nguyên Mông."
  },
  {
    id: 9,
    name: "Vịnh Hạ Long",
    province: "Quảng Ninh",
    region: "Bắc Bộ",
    coords: { r: 1, c: 5 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Di sản Thiên nhiên Thế giới UNESCO với hàng nghìn đảo đá vôi kỳ vĩ nổi lên trên làn nước biển ngọc bích, tạo nên bức tranh thủy mặc độc nhất vô nhị trên hành tinh.",
    history: "Gắn liền với truyền thuyết đàn rồng mẹ và rồng con hạ phàm phun ngọc thành lũy đá ngăn bước quân thù xâm lược bờ cõi nước Nam."
  },
  {
    id: 10,
    name: "Hoàng thành Thăng Long",
    province: "Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 1, c: 3 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Trái tim của thủ đô ngàn năm văn hiến, trung tâm chính trị của các triều đại Lý, Trần, Lê, Mạc và Nguyễn suốt hơn 10 thế kỷ.",
    history: "Năm 1010, vua Lý Thái Tổ ban 'Chiếu dời đô' chuyển kinh đô từ Hoa Lư về Thăng Long, mở ra thời kỳ hưng thịnh rực rỡ bậc nhất trong lịch sử Đại Việt."
  },
  {
    id: 11,
    name: "Hồ Hoàn Kiếm",
    province: "Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 2, c: 3 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Hồ nước ngọt tự nhiên nằm giữa lòng Hà Nội, gắn liền với Tháp Rùa, Đền Ngọc Sơn và Cầu Thê Húc cong cong như con tôm màu son.",
    history: "Gắn liền với tích vua Lê Thái Tổ hoàn trả gươm báu Thuận Thiên cho Rùa Vàng sau khi lãnh đạo cuộc khởi nghĩa Lam Sơn toàn thắng đuổi sạch giặc Minh."
  },
  {
    id: 12,
    name: "Thành Cổ Loa",
    province: "Đông Anh, Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 0, c: 6 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Khu di thành lũy xoáy trôn ốc cổ xưa nhất Đông Nam Á, được đắp bằng đất với hào nước bao bọc kiên cố.",
    history: "Kinh đô của nhà nước Âu Lạc dưới thời Thục Phán An Dương Vương vào thế kỷ thứ III trước Công nguyên, gắn với nỏ thần Kim Quy bắn một phát ngàn mũi tên."
  },
  {
    id: 13,
    name: "Văn Miếu - Quốc Tử Giám",
    province: "Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 2, c: 2 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Quần thể kiến trúc cổ với Khuê Văn Các, giếng Thiên Quang và 82 tấm bia tiến sĩ bằng đá đặt trên lưng rùa vinh danh truyền thống hiếu học của dân tộc.",
    history: "Được xây dựng từ năm 1070 dưới triều vua Lý Thánh Tông và mở Quốc Tử Giám năm 1076, được coi là trường đại học đầu tiên của Việt Nam."
  },
  {
    id: 14,
    name: "Đền Hai Bà Trưng",
    province: "Mê Linh, Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 0, c: 0 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Vùng đất trù phú bên tả ngạn sông Hồng, nơi phát tích cuộc khởi nghĩa đầu tiên của phụ nữ Việt Nam chống lại ách đô hộ phương Bắc.",
    history: "Năm 40 sau Công nguyên, Trưng Trắc cùng em là Trưng Nhị phất cờ khởi nghĩa: 'Một xin rửa sạch nước thù / Hai xin dựng lại nghiệp xưa họ Hùng', đánh đuổi thái thú Tô Định."
  },
  {
    id: 15,
    name: "Cố đô Hoa Lư",
    province: "Ninh Bình",
    region: "Bắc Bộ",
    coords: { r: 2, c: 1 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Khu kinh thành cổ được thiên nhiên chở che bởi những rặng núi đá vôi dựng đứng như bức tường thành tự nhiên hiểm trở.",
    history: "Năm 968, sau khi dẹp loạn 12 sứ quân thống nhất giang sơn, Đinh Bộ Lĩnh lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt tên nước là Đại Cồ Việt và định đô tại đây."
  },
  {
    id: 16,
    name: "Quần thể Tràng An",
    province: "Ninh Bình",
    region: "Bắc Bộ",
    coords: { r: 2, c: 4 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Di sản Văn hóa và Thiên nhiên Thế giới kép đầu tiên của Việt Nam, nổi tiếng với hệ thống hang động ngập nước, thung lũng karst nhiệt đới kỳ vĩ.",
    history: "Nơi các vị vua nhà Đinh và Tiền Lê từng lập hành cung quân sự, dựa vào thế núi non hiểm trở để bảo vệ nền độc lập tự chủ."
  },
  {
    id: 17,
    name: "Côn Sơn - Kiếp Bạc",
    province: "Hải Dương",
    region: "Bắc Bộ",
    coords: { r: 1, c: 6 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Vùng non nước hữu tình với rừng thông reo Côn Sơn và đền Kiếp Bạc nằm sát khúc sông Lục Đầu lịch sử.",
    history: "Gắn liền với danh nhân văn hóa thế giới Nguyễn Trãi và căn cứ quân sự Vạn Kiếp của người anh hùng dân tộc Hưng Đạo Đại Vương Trần Quốc Tuấn."
  },
  {
    id: 18,
    name: "Bãi Cọc Yên Giang",
    province: "Quảng Ninh",
    region: "Bắc Bộ",
    coords: { r: 0, c: 7 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Khu di tích khảo cổ học quý giá ven sông Bạch Đằng, nơi phát lộ hàng trăm cọc gỗ lim vót nhọn được cắm xuống lòng bùn cát từ thế kỷ 13.",
    history: "Chứng tích sống động của chiến lược thủy chiến thiên tài do Hưng Đạo Vương Trần Quốc Tuấn bày binh bố trận tiêu diệt hạm đội Nguyên Mông năm 1288."
  },
  {
    id: 19,
    name: "Chùa Một Cột",
    province: "Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 2, c: 0 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Ngôi chùa có kiến trúc độc nhất vô nhị ở châu Á, tựa như một bông hoa sen nở rộ mọc lên từ mặt hồ Linh Chiểu.",
    history: "Xây dựng năm 1049 dưới triều vua Lý Thái Tông sau giấc mơ thấy Phật Bà Quan Âm dắt vua lên tòa sen, biểu tượng của hòa bình và thanh tịnh."
  },
  {
    id: 20,
    name: "Chùa Hương",
    province: "Hà Nội",
    region: "Bắc Bộ",
    coords: { r: 2, c: 5 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Quần thể văn hóa - tôn giáo gồm hàng chục ngôi đền chùa nằm rải rác trong thung lũng suối Yến thơ mộng và động Hương Tích kỳ vĩ.",
    history: "Được chúa Trịnh Sâm ngợi ca là 'Nam thiên đệ nhất động' (Động đẹp nhất trời Nam), nơi hội tụ tín ngưỡng dân gian và Phật giáo từ nhiều thế kỷ."
  },
  {
    id: 21,
    name: "Ải Chi Lăng",
    province: "Lạng Sơn",
    region: "Bắc Bộ",
    coords: { r: 1, c: 7 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Thung lũng hẹp dài hình bầu dục kẹp giữa hai dãy núi đá vôi dựng đứng, tạo nên vị trí yết hầu chặn đường tiến quân từ phương Bắc.",
    history: "Chiến trường chôn vùi danh tướng Liễu Thăng của giặc Minh năm 1427, quyết định thắng lợi hoàn toàn cho cuộc khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo."
  },
  {
    id: 22,
    name: "Thành Nhà Hồ",
    province: "Thanh Hóa",
    region: "Bắc Bộ",
    coords: { r: 2, c: 6 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Công trình kiến trúc bằng đá cổ đồ sộ và độc đáo bậc nhất Đông Nam Á, được xây dựng từ những phiến đá xanh nặng hàng chục tấn không dùng vữa.",
    history: "Do Hồ Quý Ly cho xây dựng vào năm 1397 để làm kinh đô mới (Tây Đô), biểu trưng cho tầm nhìn cải cách quân sự và văn hóa táo bạo."
  },
  {
    id: 23,
    name: "Lam Kinh",
    province: "Thanh Hóa",
    region: "Bắc Bộ",
    coords: { r: 2, c: 7 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Vùng đất địa linh nhân kiệt với rừng Lam Sơn bạt ngàn, dòng sông Chu bao bọc, kinh đô tưởng niệm và lăng tẩm các vua chúa thời Hậu Lê.",
    history: "Năm 1418, người anh hùng áo vải Lê Lợi cùng các nghĩa sĩ đã dựng cờ khởi nghĩa Lam Sơn, trải qua 10 năm gian khổ 'nếm mật nằm gai' đuổi sạch quân Minh."
  },

  // =========================================================================
  // MIỀN TRUNG & TÂY NGUYÊN (Hàng 3, 4, 5: 24 địa danh)
  // =========================================================================
  {
    id: 24,
    name: "Làng Sen Quê Bác",
    province: "Nghệ An",
    region: "Trung Bộ",
    coords: { r: 3, c: 0 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Ngôi làng quê mộc mạc bên rặng tre xanh, mái nhà tranh vách đất và những đầm sen tỏa hương thơm ngát tại huyện Nam Đàn.",
    history: "Nơi sinh thành và nuôi dưỡng tuổi thơ của Chủ tịch Hồ Chí Minh - vị lãnh tụ vĩ đại, Người đã cống hiến trọn đời cho độc lập, tự do của dân tộc."
  },
  {
    id: 25,
    name: "Ngã ba Đồng Lộc",
    province: "Hà Tĩnh",
    region: "Trung Bộ",
    coords: { r: 3, c: 1 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Yết hầu giao thông hiểm yếu trên đường Trường Sơn huyền thoại thời chống Mỹ, nơi hứng chịu hàng vạn tấn bom đạn của đế quốc.",
    history: "Biểu tượng bất tử của chủ nghĩa anh hùng cách mạng với sự hy sinh anh dũng của 10 cô gái thanh niên xung phong tuổi mười tám đôi mươi ngày 24/7/1968."
  },
  {
    id: 26,
    name: "Động Phong Nha",
    province: "Quảng Bình",
    region: "Trung Bộ",
    coords: { r: 3, c: 2 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Vườn quốc gia Phong Nha - Kẻ Bàng sở hữu dòng sông ngầm dài nhất và hệ thống thạch nhũ lung linh kỳ ảo được ví như 'Đệ nhất kỳ quan động'.",
    history: "Trong chiến tranh kháng chiến chống Mỹ, hệ thống hang động Phong Nha từng là kho quân lương bí mật và trạm phẫu thuật tiền phương kiên cố."
  },
  {
    id: 27,
    name: "Cầu Hiền Lương",
    province: "Quảng Trị",
    region: "Trung Bộ",
    coords: { r: 3, c: 3 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Cây cầu bắc qua sông Bến Hải tại vĩ tuyến 17, ranh giới chia cắt hai miền Nam - Bắc đất nước suốt hơn 20 năm ròng rã.",
    history: "Chứng tích lịch sử về nỗi đau chia cắt dân tộc sau Hiệp định Giơ-ne-vơ 1954 và khát vọng cháy bỏng thống nhất non sông của toàn thể nhân dân Việt Nam."
  },
  {
    id: 28,
    name: "Thành cổ Quảng Trị",
    province: "Quảng Trị",
    region: "Trung Bộ",
    coords: { r: 3, c: 4 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Khu thành quách cổ được xây đắp kiên cố từ thời nhà Nguyễn, nằm cạnh dòng sông Thạch Hãn êm đềm.",
    history: "Nơi ghi dấu cuộc chiến đấu ác liệt 81 ngày đêm mùa hè đỏ lửa năm 1972: 'Mỗi tấc đất một giọt máu, mỗi mét thành một bài ca bất tử'."
  },
  {
    id: 29,
    name: "Cố đô Huế",
    province: "Thừa Thiên Huế",
    region: "Trung Bộ",
    coords: { r: 3, c: 5 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Quần thể di tích Cố đô nằm bên dòng sông Hương thơ mộng và núi Ngự Bình hùng vĩ, với hệ thống cung điện, lăng tẩm và Nhã nhạc cung đình.",
    history: "Kinh đô của triều đại phong kiến cuối cùng của Việt Nam - nhà Nguyễn (1802 - 1945), nơi chứng kiến vua Bảo Đại thoái vị ngày 30/8/1945 trao ấn kiếm cho chính quyền cách mạng."
  },
  {
    id: 30,
    name: "Đèo Hải Vân",
    province: "Đà Nẵng - Huế",
    region: "Trung Bộ",
    coords: { r: 3, c: 6 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Cung đèo hiểm trở bậc nhất Việt Nam nằm vắt qua dãy núi Bạch Mã nhô ra biển, nơi giao thoa giữa hai miền khí hậu Bắc - Nam.",
    history: "Thời vua Lê Thánh Tông tuần du qua đây đã khắc bia phong tặng danh hiệu 'Thiên hạ đệ nhất hùng quan'."
  },
  {
    id: 31,
    name: "Cầu Vàng Bà Nà",
    province: "Đà Nẵng",
    region: "Trung Bộ",
    coords: { r: 3, c: 7 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Cây cầu kiến trúc biểu tượng uốn lượn được nâng đỡ bởi đôi bàn tay khổng lồ phủ rêu phong giữa lưng chừng mây núi Bà Nà ở độ cao 1.400m.",
    history: "Biểu trưng cho sức sáng tạo kỳ diệu và sự vươn mình mạnh mẽ của ngành du lịch Việt Nam thời kỳ hội nhập quốc tế."
  },
  {
    id: 32,
    name: "Phố cổ Hội An",
    province: "Quảng Nam",
    region: "Trung Bộ",
    coords: { r: 4, c: 0 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Đô thị cổ được bảo tồn gần như nguyên vẹn với những ngôi nhà mái ngói rêu phong, tường vàng rực rỡ và lồng đèn lung linh bên dòng sông Hoài.",
    history: "Thương cảng quốc tế sầm uất bậc nhất Đông Nam Á từ thế kỷ 16 đến thế kỷ 18, nơi giao thoa giữa các nền văn hóa Việt - Nhật - Hoa - phương Tây."
  },
  {
    id: 33,
    name: "Thánh địa Mỹ Sơn",
    province: "Quảng Nam",
    region: "Trung Bộ",
    coords: { r: 4, c: 1 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Thung lũng kín đáo bao quanh bởi đồi núi trùng điệp với hơn 70 công trình đền tháp Chăm Pa bằng gạch nung tinh xảo bí ẩn.",
    history: "Trung tâm đền đài tế lễ tôn giáo của vương quốc Chăm Pa cổ từ thế kỷ 4 đến thế kỷ 14, Di sản Văn hóa Thế giới UNESCO."
  },
  {
    id: 34,
    name: "Quần đảo Hoàng Sa",
    province: "Đà Nẵng",
    region: "Biển Đảo",
    coords: { r: 4, c: 6 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Quần đảo san hô nằm ở phía bắc Biển Đông, gồm hơn 30 đảo, cồn cát và rạn san hô trù phú với nguồn tài nguyên sinh vật biển và khoáng sản vô giá.",
    history: "Chủ quyền thiêng liêng không thể chối cãi của Việt Nam. Từ thế kỷ 17, các chúa Nguyễn đã thành lập Hải đội Hoàng Sa cắm mốc, đo vẽ bản đồ và thực thi chủ quyền liên tục."
  },
  {
    id: 35,
    name: "Quần đảo Trường Sa",
    province: "Khánh Hòa",
    region: "Biển Đảo",
    coords: { r: 5, c: 7 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Tuyến đảo tiền tiêu phên dậu bảo vệ vùng trời và vùng biển Đông Nam của Tổ quốc, nơi có những ngọn hải đăng sừng sững dẫn đường tàu bè quốc tế.",
    history: "Biểu tượng cho lòng dũng cảm kiên cường của các chiến sĩ Hải quân Nhân dân Việt Nam ngày đêm bảo vệ vững chắc chủ quyền biển đảo thiêng liêng của đất mẹ."
  },
  {
    id: 36,
    name: "Bảo tàng Quang Trung",
    province: "Bình Định",
    region: "Trung Bộ",
    coords: { r: 4, c: 2 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Vùng đất võ trời văn bên dòng sông Kôn, nơi lưu giữ cây me cổ thụ và giếng nước đá ong gắn liền với tuổi thơ của ba anh em Tây Sơn.",
    history: "Nơi khởi nguồn phong trào khởi nghĩa Tây Sơn và người anh hùng áo vải cờ đào Quang Trung - Nguyễn Huệ với chiến công thần tốc đại phá 29 vạn quân Thanh năm 1789."
  },
  {
    id: 37,
    name: "Ghềnh Đá Đĩa",
    province: "Phú Yên",
    region: "Trung Bộ",
    coords: { r: 4, c: 3 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Kiệt tác địa chất tự nhiên với hàng vạn cột đá bazan hình lục giác xếp chồng khít lên nhau như những chồng đĩa khổng lồ nhô ra biển sóng.",
    history: "Hiện tượng địa chất kỳ thú hình thành do dòng dung nham núi lửa gặp nước biển đông cứng cách đây hàng triệu năm, danh thắng cấp quốc gia đặc biệt."
  },
  {
    id: 38,
    name: "Vịnh Vũng Rô",
    province: "Phú Yên",
    region: "Trung Bộ",
    coords: { r: 4, c: 4 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Vịnh biển kín gió được che chắn bởi đèo Cả, hòn Bà và núi Chúa, nơi mặt nước êm ả phẳng lặng quanh năm.",
    history: "Bến đỗ bí mật huyền thoại của những chuyến 'Tàu Không số' chở vũ khí đạn dược từ miền Bắc chi viện cho chiến trường miền Nam trong cuộc kháng chiến chống Mỹ."
  },
  {
    id: 39,
    name: "Biển Hồ Pleiku",
    province: "Gia Lai",
    region: "Trung Bộ",
    coords: { r: 4, c: 5 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Hồ nước ngọt tự nhiên hình thành từ miệng núi lửa đã tắt hàng triệu năm, được ví như 'Đôi mắt Pleiku' long lanh giữa đại ngàn Tây Nguyên.",
    history: "Cái nôi văn hóa cồng chiêng Tây Nguyên - Kiệt tác truyền khẩu và phi vật thể của nhân loại được UNESCO vinh danh."
  },
  {
    id: 40,
    name: "Buôn Đôn & Sêrêpôk",
    province: "Đắk Lắk",
    region: "Trung Bộ",
    coords: { r: 5, c: 0 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Vùng đất huyền thoại của những cánh rừng khộp bạt ngàn và dòng sông Sêrêpôk hùng vĩ chảy ngược hướng về phía Tây.",
    history: "Địa danh trứ danh của các dũng sĩ săn bắt và thuần dưỡng voi rừng Tây Nguyên thời xưa, biểu tượng cho sức mạnh kiêu hùng và tình yêu thiên nhiên."
  },
  {
    id: 41,
    name: "Đà Lạt - Langbiang",
    province: "Lâm Đồng",
    region: "Trung Bộ",
    coords: { r: 5, c: 1 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Thành phố sương mù trên cao nguyên Lâm Viên với độ cao 1.500m, khí hậu ôn hòa quanh năm, rừng thông reo và ngàn hoa khoe sắc.",
    history: "Được nhà thám hiểm Alexandre Yersin phát hiện vào năm 1893, gắn liền với huyền thoại tình yêu son sắt của chàng K'Lang và nàng H'Biang."
  },
  {
    id: 42,
    name: "Vịnh Nha Trang",
    province: "Khánh Hòa",
    region: "Trung Bộ",
    coords: { r: 5, c: 2 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Một trong 29 vịnh biển đẹp nhất thế giới với bãi cát vàng trải dài, nước biển trong xanh quanh năm và hệ sinh thái rạn san hô Hòn Mun rực rỡ.",
    history: "Trung tâm nghiên cứu đại dương học sớm nhất Đông Dương (Viện Hải dương học Nha Trang thành lập từ năm 1922)."
  },
  {
    id: 43,
    name: "Tháp Po Klong Garai",
    province: "Ninh Thuận",
    region: "Trung Bộ",
    coords: { r: 5, c: 3 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Cụm tháp Chăm Pa cổ sừng sững trên đồi Trầu, xây dựng từ gạch nung đỏ thắm với kỹ thuật xây dựng bí truyền không thấy mạch vữa.",
    history: "Được xây dựng cuối thế kỷ 13 để tưởng nhớ vị vua hiền Po Klong Garai có công lớn dẫn thủy nhập điền phát triển nông nghiệp."
  },
  {
    id: 44,
    name: "Đồi Cát Bay Mũi Né",
    province: "Bình Thuận",
    region: "Trung Bộ",
    coords: { r: 5, c: 4 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Sa mạc cát ven biển độc đáo có thể biến đổi hình dạng theo từng cơn gió mỗi ngày, sở hữu tới 18 màu sắc cát tự nhiên khác nhau.",
    history: "Vùng đất cực Nam Trung Bộ đầy nắng gió, phên dậu bảo vệ duyên hải và giàu tài nguyên kinh tế biển."
  },
  {
    id: 45,
    name: "Mũi Điện Đại Lãnh",
    province: "Phú Yên",
    region: "Trung Bộ",
    coords: { r: 5, c: 5 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Mỏm đá hoa cương nhô ra biển Đông, nơi đón những tia nắng bình minh đầu tiên trên đất liền của Tổ quốc.",
    history: "Ngọn hải đăng Đại Lãnh được xây dựng từ năm 1890 bởi người Pháp, là người dẫn đường thầm lặng cho muôn trùng tàu thuyền."
  },
  {
    id: 46,
    name: "Cực Đông Mũi Đôi",
    province: "Khánh Hòa",
    region: "Trung Bộ",
    coords: { r: 5, c: 6 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Điểm cực Đông thiêng liêng trên đất liền của Việt Nam, nơi giao hòa giữa đại dương bao la và những tảng đá khổng lồ nguyên sơ.",
    history: "Cột mốc tọa độ chủ quyền quốc gia khẳng định lãnh thổ bất khả xâm phạm của Tổ quốc Việt Nam."
  },
  {
    id: 47,
    name: "Thác Đray Nur",
    province: "Đắk Lắk",
    region: "Trung Bộ",
    coords: { r: 3, c: 7 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Thác nước hùng vĩ bậc nhất Tây Nguyên với chiều dài trên 250m, dòng nước đổ từ trên vách đá cao xuống lòng hồ bọt tung trắng xóa.",
    history: "Gắn liền với thiên sử thi Đam San và truyền thuyết huyền bí của đồng bào Ê Đê về tình yêu son sắt giữa đại ngàn."
  },

  // =========================================================================
  // MIỀN NAM & ĐỒNG BẰNG SÔNG CỬU LONG (Hàng 6, 7: 16 địa danh)
  // =========================================================================
  {
    id: 48,
    name: "Bến Nhà Rồng",
    province: "TP. Hồ Chí Minh",
    region: "Nam Bộ",
    coords: { r: 6, c: 0 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Tòa nhà cổ kính mang phong cách Pháp với đôi rồng ngậm ngọc trên nóc, tọa lạc tại ngã ba sông Sài Gòn nhộn nhịp tàu bè.",
    history: "Ngày 5/6/1911, người thanh niên yêu nước Nguyễn Tất Thành (Bác Hồ) đã ra đi tìm đường cứu nước trên con tàu Amiral Latouche-Tréville, mở đường cho kỷ nguyên độc lập tự do."
  },
  {
    id: 49,
    name: "Dinh Độc Lập",
    province: "TP. Hồ Chí Minh",
    region: "Nam Bộ",
    coords: { r: 6, c: 1 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Công trình kiến trúc hiện đại kết hợp hài hòa triết lý phương Đông của kiến trúc sư Ngô Viết Thụ, bao bọc bởi công viên rợp bóng cây cổ thụ.",
    history: "Trưa ngày 30/4/1975, xe tăng của quân giải phóng húc đổ cổng Dinh Độc Lập, cờ Mặt trận Dân tộc Giải phóng tung bay trên nóc dinh, đánh dấu Đại thắng mùa Xuân thống nhất non sông."
  },
  {
    id: 50,
    name: "Địa đạo Củ Chi",
    province: "TP. Hồ Chí Minh",
    region: "Nam Bộ",
    coords: { r: 6, c: 2 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Mạng lưới đường hầm ngầm trong lòng đất dài hơn 250km với đầy đủ phòng ăn, phòng họp, bệnh xá, kho vũ khí dưới lòng đất sét pha đá ong kiên cố.",
    history: "Kỳ quan nghệ thuật quân sự độc đáo của 'Đất thép thành đồng' Củ Chi, nơi quân dân ta kiên cường bám trụ đánh bại các cuộc càn quét khốc liệt của quân đội Mỹ."
  },
  {
    id: 51,
    name: "Chợ Bến Thành",
    province: "TP. Hồ Chí Minh",
    region: "Nam Bộ",
    coords: { r: 6, c: 3 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Biểu tượng văn hóa - thương mại hơn 100 năm tuổi với tháp đồng hồ 4 mặt đặc trưng tại trung tâm quận 1 náo nhiệt.",
    history: "Chứng nhân lịch sử chứng kiến bao đổi thay thăng trầm của hòn ngọc Viễn Đông từ thời Pháp thuộc đến nay."
  },
  {
    id: 52,
    name: "Trung ương Cục Miền Nam",
    province: "Tây Ninh",
    region: "Nam Bộ",
    coords: { r: 6, c: 4 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Căn cứ địa cách mạng nằm ẩn mình giữa rừng nguyên sinh Chàng Riệc cổ thụ biên giới Việt Nam - Campuchia.",
    history: "Bộ não lãnh đạo chỉ đạo trực tiếp phong trào cách mạng và các chiến dịch quân sự lớn giải phóng miền Nam thống nhất đất nước."
  },
  {
    id: 53,
    name: "Núi Bà Đen",
    province: "Tây Ninh",
    region: "Nam Bộ",
    coords: { r: 6, c: 5 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Ngọn núi lửa đã tắt cao 986m, được mệnh danh là 'Nóc nhà Đông Nam Bộ' với quần thể chùa chiền linh thiêng và cảnh sắc mây vờn hùng vĩ.",
    history: "Điểm tựa chiến lược trong hai cuộc kháng chiến chống Pháp và chống Mỹ của quân và dân tỉnh Tây Ninh."
  },
  {
    id: 54,
    name: "Rừng Sác Cần Giờ",
    province: "TP. Hồ Chí Minh",
    region: "Nam Bộ",
    coords: { r: 6, c: 6 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Khu Dự trữ Sinh quyển Thế giới ngập mặn với hệ thống kênh rạch chằng chịt, rừng đước bạt ngàn và thảm động thực vật phong phú.",
    history: "Căn cứ của Đoàn 10 Đặc công Rừng Sác huyền thoại với những chiến công vang dội đánh kho bom, kho xăng Nhà Bè và hạm đội giặc trên sông Lòng Tàu."
  },
  {
    id: 55,
    name: "Nhà tù Côn Đảo",
    province: "Bà Rịa - Vũng Tàu",
    region: "Biển Đảo",
    coords: { r: 6, c: 7 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Quần đảo 16 hòn đảo lớn nhỏ giữa biển Đông với thiên nhiên biển xanh cát trắng tuyệt đẹp, nhưng từng là 'địa ngục trần gian' suốt 113 năm.",
    history: "Nơi thực dân Pháp và đế quốc Mỹ giam cầm hàng vạn chiến sĩ cách mạng kiên trung; nơi an nghỉ của nữ Anh hùng liệt sĩ Võ Thị Sáu và Tổng Bí thư Lê Hồng Phong."
  },
  {
    id: 56,
    name: "Mũi Nghinh Phong",
    province: "Bà Rịa - Vũng Tàu",
    region: "Nam Bộ",
    coords: { r: 7, c: 0 },
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80",
    desc: "Mũi đất nhô ra biển đón gió lộng bốn phương của thành phố Vũng Tàu, với cổng trời nhìn thẳng ra đại dương bao la.",
    history: "Cửa ngõ hàng hải huyết mạch phương Nam, nơi chứng kiến lịch sử bảo vệ bờ cõi biển đảo thời các chúa Nguyễn khai phá phương Nam."
  },
  {
    id: 57,
    name: "Chợ nổi Cái Răng",
    province: "Cần Thơ",
    region: "Nam Bộ",
    coords: { r: 7, c: 1 },
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500&auto=format&fit=crop&q=80",
    desc: "Nét văn hóa giao thương sông nước độc đáo bậc nhất đồng bằng sông Cửu Long với hàng trăm ghe xuồng tấp nập chào hàng bằng cây 'bẹo'.",
    history: "Phản ánh lịch sử khẩn hoang trù phú và nét sinh hoạt văn hóa dân dã hào sảng của người dân miền Tây Nam Bộ qua nhiều thế hệ."
  },
  {
    id: 58,
    name: "Bến Ninh Kiều",
    province: "Cần Thơ",
    region: "Nam Bộ",
    coords: { r: 7, c: 2 },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=80",
    desc: "Công viên bến sông thơ mộng nhìn ra dòng sông Hậu hiền hòa trĩu nặng phù sa; trung tâm văn hóa của đô thị miền Tây Đô.",
    history: "Gắn liền với chiến thắng Ninh Kiều lịch sử năm 1426 của nghĩa quân Lam Sơn, được chọn đặt tên cho bến sông từ năm 1957."
  },
  {
    id: 59,
    name: "Rừng tràm Trà Sư",
    province: "An Giang",
    region: "Nam Bộ",
    coords: { r: 7, c: 3 },
    image: "https://images.unsplash.com/photo-1599818816933-4f9640822648?w=500&auto=format&fit=crop&q=80",
    desc: "Khu rừng ngập nước đặc trưng vùng Tây sông Hậu với thảm bèo cám xanh mướt trải dài vô tận và hàng trăm loài chim quý cư trú.",
    history: "Từng là vùng căn cứ kháng chiến kiên cường của quân dân vùng Thất Sơn Bảy Núi trong kháng chiến giải phóng dân tộc."
  },
  {
    id: 60,
    name: "Đảo Ngọc Phú Quốc",
    province: "Kiên Giang",
    region: "Biển Đảo",
    coords: { r: 7, c: 4 },
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=500&auto=format&fit=crop&q=80",
    desc: "Hòn đảo lớn nhất Việt Nam nằm trong vịnh Thái Lan, sở hữu những bãi biển cát trắng mịn màng như Bãi Sao, Bãi Khem và rừng nguyên sinh rậm rạp.",
    history: "Gắn liền với công cuộc khai phá vùng đất Hà Tiên - Kiên Giang của dòng họ Mạc Cửu từ cuối thế kỷ 17, sáp nhập vào lãnh thổ Đại Việt."
  },
  {
    id: 61,
    name: "Hà Tiên Thập Cảnh",
    province: "Kiên Giang",
    region: "Nam Bộ",
    coords: { r: 7, c: 5 },
    image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=500&auto=format&fit=crop&q=80",
    desc: "Vùng đất biên giới giáp biển Tây Nam với 10 thắng cảnh thi vị nổi danh trong thi ca như Thạch Động, Đông Hồ, Mũi Nai.",
    history: "Nơi tao đàn Chiêu Anh Các ra đời năm 1736 dưới thời Mạc Thiên Tích, trung tâm văn hóa thi ca rạng rỡ của phương Nam."
  },
  {
    id: 62,
    name: "Rừng U Minh Hạ",
    province: "Cà Mau",
    region: "Nam Bộ",
    coords: { r: 7, c: 6 },
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=80",
    desc: "Khu rừng tràm đất than bùn độc đáo bậc nhất phương Nam với nghề gác kèo ong lấy mật hoa tràm truyền thống trứ danh.",
    history: "Căn cứ địa cách mạng bất khả xâm phạm của Xứ ủy Nam Bộ và Trung ương Cục trong những năm tháng kháng chiến gian khổ mà oanh liệt."
  },
  {
    id: 63,
    name: "Mũi Cà Mau",
    province: "Cà Mau",
    region: "Nam Bộ",
    coords: { r: 7, c: 7 },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
    desc: "Điểm cực Nam của Tổ quốc trên đất liền tại tọa độ 8°37' Bắc, nơi duy nhất trên đất liền Việt Nam có thể ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây.",
    history: "Mảnh đất địa đầu phía Nam thiêng liêng: 'Tổ quốc tôi như một con tàu / Mũi thuyền ta đó - mũi Cà Mau', biểu tượng cho ý chí mở cõi và giữ vững giang sơn gấm vóc."
  }
];

// 3 Chặng Chiến Dịch tương ứng với 3 Vòng (Hiệp 1, Hiệp 2, Hiệp 3)
export const CAMPAIGN_STAGES = [
  {
    round: 1,
    name: "Hiệp 1: Khởi Nguồn Đất Mẹ - Miền Bắc Hào Hùng",
    region: "Bắc Bộ",
    targetDesc: "Giành 5 ô thẳng hàng liên tiếp để làm chủ Miền Bắc linh thiêng!",
    color: "from-amber-600 via-orange-600 to-red-700",
    badge: "Bắc Bộ Linh Thiêng"
  },
  {
    round: 2,
    name: "Hiệp 2: Hào Khí Miền Trung & Biển Đảo Thiêng Liêng",
    region: "Trung Bộ & Biển Đảo",
    targetDesc: "Giành 5 ô thẳng hàng liên tiếp bảo vệ vững chắc dải đất Miền Trung và Hoàng Sa - Trường Sa!",
    color: "from-sky-600 via-indigo-600 to-blue-700",
    badge: "Miền Trung & Biển Đảo"
  },
  {
    round: 3,
    name: "Hiệp 3: Rạng Rỡ Miền Nam - Khát Vọng Thống Nhất Non Sông",
    region: "Nam Bộ",
    targetDesc: "Giành 5 ô thẳng hàng liên tiếp để hoàn tất Đại Thắng Chiến Dịch Xuyên Việt!",
    color: "from-emerald-600 via-teal-600 to-indigo-700",
    badge: "Nam Bộ Thành Đồng"
  }
];
