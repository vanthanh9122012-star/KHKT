
export const INITIAL_FLASHCARDS = [
  ...[
  // Lớp 6 - Toán
  { id: 'fc6_math_1', grade: 'Lớp 6', subject: 'Toán', question: 'Tập hợp N và N* khác nhau như thế nào?', answer: 'N* là tập hợp các số tự nhiên khác 0.' },
  { id: 'fc6_math_2', grade: 'Lớp 6', subject: 'Toán', question: 'Dấu hiệu chia hết cho 3 là gì?', answer: 'Tổng các chữ số của số đó chia hết cho 3.' },
  { id: 'fc6_math_3', grade: 'Lớp 6', subject: 'Toán', question: 'Hình vuông có mấy trục đối xứng?', answer: 'Hình vuông có 4 trục đối xứng.' },
  { id: 'fc6_math_4', grade: 'Lớp 6', subject: 'Toán', question: 'Số nguyên tố là gì?', answer: 'Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.' },
  { id: 'fc6_math_5', grade: 'Lớp 6', subject: 'Toán', question: 'Phân số tối giản là phân số như thế nào?', answer: 'Là phân số mà tử số và mẫu số chỉ có ước chung là 1 hoặc -1.' },
  
  // Lớp 6 - Ngữ Văn
  { id: 'fc6_lit_1', grade: 'Lớp 6', subject: 'Ngữ Văn', question: 'Truyền thuyết là thể loại truyện như thế nào?', answer: 'Truyện dân gian kể về các nhân vật, sự kiện có liên quan đến lịch sử thời quá khứ, thường có yếu tố tưởng tượng kì ảo.' },
  { id: 'fc6_lit_2', grade: 'Lớp 6', subject: 'Ngữ Văn', question: 'Từ đơn là gì?', answer: 'Từ chỉ gồm một tiếng.' },
  { id: 'fc6_lit_3', grade: 'Lớp 6', subject: 'Ngữ Văn', question: 'Cụm danh từ là gì?', answer: 'Là loại tổ hợp từ do danh từ với một số từ ngữ phụ thuộc nó tạo thành.' },
  { id: 'fc6_lit_4', grade: 'Lớp 6', subject: 'Ngữ Văn', question: 'Biện pháp tu từ so sánh là gì?', answer: 'Đối chiếu sự vật, sự việc này với sự vật, sự việc khác có nét tương đồng để làm tăng sức gợi hình, gợi cảm.' },
  { id: 'fc6_lit_5', grade: 'Lớp 6', subject: 'Ngữ Văn', question: 'Truyện đồng thoại là gì?', answer: 'Là truyện viết cho trẻ em, có nhân vật thường là loài vật hoặc đồ vật được nhân hoá.' },
  
  // Lớp 6 - Tiếng Anh
  { id: 'fc6_eng_1', grade: 'Lớp 6', subject: 'Tiếng Anh', question: 'How do you say "Trường học mới của tôi" in English?', answer: 'My new school.' },
  { id: 'fc6_eng_2', grade: 'Lớp 6', subject: 'Tiếng Anh', question: 'What is the present simple form of "be" for "She"?', answer: 'is.' },
  { id: 'fc6_eng_3', grade: 'Lớp 6', subject: 'Tiếng Anh', question: 'What do you say when you agree with a suggestion?', answer: 'That\'s a good idea!' },
  { id: 'fc6_eng_4', grade: 'Lớp 6', subject: 'Tiếng Anh', question: 'Translate "bài tập về nhà" to English.', answer: 'homework.' },
  { id: 'fc6_eng_5', grade: 'Lớp 6', subject: 'Tiếng Anh', question: 'What preposition goes with days of the week?', answer: 'on.' },
  
  // Lớp 6 - KHTN
  { id: 'fc6_sci_1', grade: 'Lớp 6', subject: 'KHTN', question: 'Vật sống khác vật không sống ở điểm nào?', answer: 'Vật sống có khả năng trao đổi chất, lớn lên, sinh sản và cảm ứng.' },
  { id: 'fc6_sci_2', grade: 'Lớp 6', subject: 'KHTN', question: 'Kính hiển vi quang học dùng để làm gì?', answer: 'Quan sát các vật thể có kích thước rất nhỏ bé mà mắt thường không nhìn thấy được.' },
  { id: 'fc6_sci_3', grade: 'Lớp 6', subject: 'KHTN', question: 'Lực là gì?', answer: 'Là tác dụng đẩy hoặc kéo của vật này lên vật khác.' },
  { id: 'fc6_sci_4', grade: 'Lớp 6', subject: 'KHTN', question: 'Trọng lượng là gì?', answer: 'Là độ lớn của trọng lực tác dụng lên một vật.' },
  { id: 'fc6_sci_5', grade: 'Lớp 6', subject: 'KHTN', question: 'Sự bay hơi là hiện tượng gì?', answer: 'Là sự chuyển từ thể lỏng sang thể hơi xảy ra ở mặt thoáng của chất lỏng.' },
  
  // Lớp 6 - Lịch sử - Địa lí
  { id: 'fc6_hisgeo_1', grade: 'Lớp 6', subject: 'Lịch sử - Địa lí', question: 'Lịch sử là gì?', answer: 'Lịch sử là những gì đã diễn ra trong quá khứ.' },
  { id: 'fc6_hisgeo_2', grade: 'Lớp 6', subject: 'Lịch sử - Địa lí', question: 'Nhà nước Âu Lạc đóng đô ở đâu?', answer: 'Phong Khê (Cổ Loa, Đông Anh, Hà Nội).' },
  { id: 'fc6_hisgeo_3', grade: 'Lớp 6', subject: 'Lịch sử - Địa lí', question: 'Kinh tuyến gốc là kinh tuyến số mấy độ?', answer: '0 độ.' },
  { id: 'fc6_hisgeo_4', grade: 'Lớp 6', subject: 'Lịch sử - Địa lí', question: 'Trái Đất có hình dạng gì?', answer: 'Hình cầu.' },
  { id: 'fc6_hisgeo_5', grade: 'Lớp 6', subject: 'Lịch sử - Địa lí', question: 'Lớp vỏ Trái Đất chiếm bao nhiêu phần trăm thể tích Trái Đất?', answer: 'Chỉ khoảng 1%.' },
  
  // Lớp 6 - GDCD
  { id: 'fc6_civic_1', grade: 'Lớp 6', subject: 'GDCD', question: 'Tự hào về truyền thống gia đình, dòng họ có ý nghĩa gì?', answer: 'Tạo sức mạnh tinh thần để vượt qua khó khăn, nỗ lực vươn lên trong cuộc sống.' },
  { id: 'fc6_civic_2', grade: 'Lớp 6', subject: 'GDCD', question: 'Yêu thương con người là gì?', answer: 'Là sự quan tâm, giúp đỡ, làm những điều tốt đẹp cho người khác.' },
  { id: 'fc6_civic_3', grade: 'Lớp 6', subject: 'GDCD', question: 'Siêng năng là gì?', answer: 'Là đức tính con người biểu hiện ở sự cần cù, tự giác, miệt mài, làm việc thường xuyên, đều đặn.' },
  { id: 'fc6_civic_4', grade: 'Lớp 6', subject: 'GDCD', question: 'Kiên trì là gì?', answer: 'Là sự quyết tâm làm đến cùng dù có gặp khó khăn, gian khổ.' },
  { id: 'fc6_civic_5', grade: 'Lớp 6', subject: 'GDCD', question: 'Tôn trọng sự thật là gì?', answer: 'Là suy nghĩ, nói và làm theo đúng sự thật.' },
  
  // Lớp 6 - Tin học
  { id: 'fc6_it_1', grade: 'Lớp 6', subject: 'Tin học', question: 'Thông tin là gì?', answer: 'Thông tin là những gì đem lại hiểu biết cho con người về thế giới xung quanh và về chính mình.' },
  { id: 'fc6_it_2', grade: 'Lớp 6', subject: 'Tin học', question: 'Dữ liệu là gì?', answer: 'Là thông tin được ghi lên vật mang tin.' },
  { id: 'fc6_it_3', grade: 'Lớp 6', subject: 'Tin học', question: 'Thiết bị vào là gì?', answer: 'Là thiết bị dùng để đưa thông tin vào máy tính (ví dụ: bàn phím, chuột).' },
  { id: 'fc6_it_4', grade: 'Lớp 6', subject: 'Tin học', question: 'Thiết bị ra là gì?', answer: 'Là thiết bị dùng để đưa thông tin từ máy tính ra ngoài (ví dụ: màn hình, máy in).' },
  { id: 'fc6_it_5', grade: 'Lớp 6', subject: 'Tin học', question: 'Mạng LAN là gì?', answer: 'Là mạng máy tính kết nối các máy tính trong một phạm vi nhỏ như tòa nhà, trường học.' },
  
  // Lớp 6 - Công nghệ
  { id: 'fc6_tech_1', grade: 'Lớp 6', subject: 'Công nghệ', question: 'Nhà ở có vai trò gì?', answer: 'Nơi trú ngụ, bảo vệ con người, nơi sinh hoạt và gắn kết các thành viên.' },
  { id: 'fc6_tech_2', grade: 'Lớp 6', subject: 'Công nghệ', question: 'Vật liệu xây dựng nhà ở bao gồm những gì?', answer: 'Cát, đá, gạch, xi măng, thép, gỗ...' },
  { id: 'fc6_tech_3', grade: 'Lớp 6', subject: 'Công nghệ', question: 'Thế nào là ăn uống hợp lí?', answer: 'Đáp ứng đủ nhu cầu năng lượng và các chất dinh dưỡng theo tỉ lệ cân đối.' },
  { id: 'fc6_tech_4', grade: 'Lớp 6', subject: 'Công nghệ', question: 'Các phương pháp chế biến thực phẩm có sử dụng nhiệt là gì?', answer: 'Luộc, hấp, nấu, kho, nướng, rán...' },
  { id: 'fc6_tech_5', grade: 'Lớp 6', subject: 'Công nghệ', question: 'Trang phục có chức năng gì?', answer: 'Bảo vệ cơ thể, làm đẹp cho con người.' },

  // Lớp 7 - Toán
  { id: 'fc7_math_1', grade: 'Lớp 7', subject: 'Toán', question: 'Số hữu tỉ là số có thể viết dưới dạng nào?', answer: 'Phân số a/b (a, b thuộc Z, b khác 0).' },
  { id: 'fc7_math_2', grade: 'Lớp 7', subject: 'Toán', question: 'Giá trị tuyệt đối của một số hữu tỉ x là gì?', answer: 'Khoảng cách từ điểm x đến điểm 0 trên trục số.' },
  { id: 'fc7_math_3', grade: 'Lớp 7', subject: 'Toán', question: 'Hai góc đối đỉnh có tính chất gì?', answer: 'Bằng nhau.' },
  { id: 'fc7_math_4', grade: 'Lớp 7', subject: 'Toán', question: 'Tổng ba góc của một tam giác bằng bao nhiêu độ?', answer: '180 độ.' },
  { id: 'fc7_math_5', grade: 'Lớp 7', subject: 'Toán', question: 'Tỉ lệ thức là gì?', answer: 'Đẳng thức của hai tỉ số a/b = c/d.' },
  
  // Lớp 7 - Ngữ Văn
  { id: 'fc7_lit_1', grade: 'Lớp 7', subject: 'Ngữ Văn', question: 'Tục ngữ là gì?', answer: 'Là những câu nói dân gian ngắn gọn, ổn định, có nhịp điệu, hình ảnh, thể hiện những kinh nghiệm của nhân dân.' },
  { id: 'fc7_lit_2', grade: 'Lớp 7', subject: 'Ngữ Văn', question: 'Thành ngữ là gì?', answer: 'Tập hợp từ cố định, quen dùng, biểu thị một ý nghĩa hoàn chỉnh.' },
  { id: 'fc7_lit_3', grade: 'Lớp 7', subject: 'Ngữ Văn', question: 'Điệp ngữ là gì?', answer: 'Biện pháp tu từ lặp lại một từ, ngữ (hoặc cả câu) để làm nổi bật ý, gây cảm xúc mạnh.' },
  { id: 'fc7_lit_4', grade: 'Lớp 7', subject: 'Ngữ Văn', question: 'Văn bản nghị luận là gì?', answer: 'Văn bản chủ yếu bàn luận về một vấn đề trong đời sống hoặc văn học.' },
  { id: 'fc7_lit_5', grade: 'Lớp 7', subject: 'Ngữ Văn', question: 'Thơ bốn chữ, năm chữ có đặc điểm gì?', answer: 'Số chữ trong mỗi dòng thơ là 4 hoặc 5 chữ, nhịp điệu thường nhanh.' },
  
  // Lớp 7 - Tiếng Anh
  { id: 'fc7_eng_1', grade: 'Lớp 7', subject: 'Tiếng Anh', question: 'What are some synonyms for "hobby"?', answer: 'Pastime, leisure activity, interest.' },
  { id: 'fc7_eng_2', grade: 'Lớp 7', subject: 'Tiếng Anh', question: 'Give an example of a compound sentence using "so".', answer: 'It was raining, so we stayed home.' },
  { id: 'fc7_eng_3', grade: 'Lớp 7', subject: 'Tiếng Anh', question: 'What is the past simple form of "eat"?', answer: 'ate.' },
  { id: 'fc7_eng_4', grade: 'Lớp 7', subject: 'Tiếng Anh', question: 'How do you give advice using "should"?', answer: 'You should + verb (bare infinitive).' },
  { id: 'fc7_eng_5', grade: 'Lớp 7', subject: 'Tiếng Anh', question: 'What is community service?', answer: 'Work done by volunteers to help others in the community.' },
  
  // Lớp 7 - KHTN
  { id: 'fc7_sci_1', grade: 'Lớp 7', subject: 'KHTN', question: 'Nguyên tử gồm những hạt nào?', answer: 'Proton (mang điện dương), neutron (không mang điện) ở hạt nhân và electron (mang điện âm) ở vỏ.' },
  { id: 'fc7_sci_2', grade: 'Lớp 7', subject: 'KHTN', question: 'Bảng tuần hoàn các nguyên tố hóa học được sắp xếp theo nguyên tắc nào?', answer: 'Theo chiều tăng dần điện tích hạt nhân.' },
  { id: 'fc7_sci_3', grade: 'Lớp 7', subject: 'KHTN', question: 'Tốc độ là gì?', answer: 'Đại lượng cho biết mức độ nhanh, chậm của chuyển động, được tính bằng quãng đường đi được trong một đơn vị thời gian.' },
  { id: 'fc7_sci_4', grade: 'Lớp 7', subject: 'KHTN', question: 'Sóng âm là gì?', answer: 'Sự lan truyền dao động âm trong các môi trường rắn, lỏng, khí.' },
  { id: 'fc7_sci_5', grade: 'Lớp 7', subject: 'KHTN', question: 'Quang hợp là quá trình gì?', answer: 'Quá trình lá cây tổng hợp chất hữu cơ từ nước và khí carbon dioxide nhờ năng lượng ánh sáng.' },
  
  // Lớp 7 - Lịch sử - Địa lí
  { id: 'fc7_hisgeo_1', grade: 'Lớp 7', subject: 'Lịch sử - Địa lí', question: 'Vương quốc Frank do ai thành lập?', answer: 'Clovis.' },
  { id: 'fc7_hisgeo_2', grade: 'Lớp 7', subject: 'Lịch sử - Địa lí', question: 'Cuộc phát kiến địa lí nào tìm ra châu Mỹ?', answer: 'C. Cô-lôm-bô (1492).' },
  { id: 'fc7_hisgeo_3', grade: 'Lớp 7', subject: 'Lịch sử - Địa lí', question: 'Châu Á tiếp giáp với những đại dương nào?', answer: 'Bắc Băng Dương, Thái Bình Dương, Ấn Độ Dương.' },
  { id: 'fc7_hisgeo_4', grade: 'Lớp 7', subject: 'Lịch sử - Địa lí', question: 'Dân cư châu Á thuộc chủng tộc nào chủ yếu?', answer: 'Môn-gô-lô-it và Ơ-rô-pê-ô-it.' },
  { id: 'fc7_hisgeo_5', grade: 'Lớp 7', subject: 'Lịch sử - Địa lí', question: 'Khí hậu châu Á phân hóa như thế nào?', answer: 'Phân hóa rất đa dạng thành nhiều đới và kiểu khí hậu.' },
  
  // Lớp 7 - GDCD
  { id: 'fc7_civic_1', grade: 'Lớp 7', subject: 'GDCD', question: 'Bảo tồn di sản văn hóa là trách nhiệm của ai?', answer: 'Trách nhiệm của toàn xã hội, của mỗi cá nhân và Nhà nước.' },
  { id: 'fc7_civic_2', grade: 'Lớp 7', subject: 'GDCD', question: 'Đồng cảm là gì?', answer: 'Sự hiểu biết, chia sẻ cảm xúc và suy nghĩ với người khác.' },
  { id: 'fc7_civic_3', grade: 'Lớp 7', subject: 'GDCD', question: 'Bạo lực học đường bao gồm những hành vi nào?', answer: 'Xúc phạm, đánh đập, đe dọa, cô lập, bôi nhọ... học sinh, giáo viên.' },
  { id: 'fc7_civic_4', grade: 'Lớp 7', subject: 'GDCD', question: 'Tệ nạn xã hội là gì?', answer: 'Những hiện tượng xã hội tiêu cực, vi phạm đạo đức, pháp luật, gây hậu quả xấu cho xã hội.' },
  { id: 'fc7_civic_5', grade: 'Lớp 7', subject: 'GDCD', question: 'Quản lí tiền hiệu quả là gì?', answer: 'Sử dụng tiền một cách hợp lí, có kế hoạch để đạt được mục tiêu tài chính.' },
  
  // Lớp 7 - Tin học
  { id: 'fc7_it_1', grade: 'Lớp 7', subject: 'Tin học', question: 'Phần mềm bảng tính dùng để làm gì?', answer: 'Lưu giữ, tính toán và xử lí dữ liệu dưới dạng bảng.' },
  { id: 'fc7_it_2', grade: 'Lớp 7', subject: 'Tin học', question: 'Địa chỉ ô tính được xác định như thế nào?', answer: 'Bằng tên cột ghép với tên hàng (ví dụ: A1).' },
  { id: 'fc7_it_3', grade: 'Lớp 7', subject: 'Tin học', question: 'Thuật toán sắp xếp nổi bọt (Bubble Sort) hoạt động như thế nào?', answer: 'Hoán đổi liên tiếp các phần tử liền kề nếu chúng sai thứ tự.' },
  { id: 'fc7_it_4', grade: 'Lớp 7', subject: 'Tin học', question: 'Mạng xã hội là gì?', answer: 'Ứng dụng cung cấp dịch vụ kết nối các thành viên cùng sở thích qua Internet.' },
  { id: 'fc7_it_5', grade: 'Lớp 7', subject: 'Tin học', question: 'Lợi ích của sơ đồ tư duy là gì?', answer: 'Trực quan hóa thông tin, giúp ghi nhớ và tư duy sáng tạo tốt hơn.' },
  
  // Lớp 7 - Công nghệ
  { id: 'fc7_tech_1', grade: 'Lớp 7', subject: 'Công nghệ', question: 'Rừng có vai trò gì đối với môi trường?', answer: 'Điều hòa khí hậu, bảo vệ đất, giữ nước, làm sạch không khí, nơi sống của động thực vật.' },
  { id: 'fc7_tech_2', grade: 'Lớp 7', subject: 'Công nghệ', question: 'Trồng trọt có vai trò gì trong nền kinh tế?', answer: 'Cung cấp lương thực, thực phẩm, nguyên liệu công nghiệp, xuất khẩu.' },
  { id: 'fc7_tech_3', grade: 'Lớp 7', subject: 'Công nghệ', question: 'Các phương pháp nhân giống vô tính cây trồng gồm những gì?', answer: 'Giâm cành, chiết cành, ghép.' },
  { id: 'fc7_tech_4', grade: 'Lớp 7', subject: 'Công nghệ', question: 'Nuôi trồng thủy sản có mục đích gì?', answer: 'Cung cấp thực phẩm, nguyên liệu xuất khẩu, bảo vệ nguồn lợi thủy sản.' },
  { id: 'fc7_tech_5', grade: 'Lớp 7', subject: 'Công nghệ', question: 'Chăn nuôi cung cấp những sản phẩm gì?', answer: 'Thịt, trứng, sữa, sức kéo, phân bón.' }
],
  ...[
  // Lớp 8 - Toán
  { id: 'fc8_toan_1', grade: 'Lớp 8', subject: 'Toán', question: 'Đa thức là gì?', answer: 'Đa thức là một tổng của những đơn thức.' },
  { id: 'fc8_toan_2', grade: 'Lớp 8', subject: 'Toán', question: 'Hằng đẳng thức đáng nhớ bình phương của một tổng là gì?', answer: '(A + B)² = A² + 2AB + B²' },
  { id: 'fc8_toan_3', grade: 'Lớp 8', subject: 'Toán', question: 'Hình chóp tam giác đều có bao nhiêu mặt?', answer: 'Hình chóp tam giác đều có 4 mặt (1 mặt đáy, 3 mặt bên).' },
  { id: 'fc8_toan_4', grade: 'Lớp 8', subject: 'Toán', question: 'Phân thức đại số là gì?', answer: 'Là biểu thức có dạng A/B, trong đó A, B là những đa thức và B khác đa thức 0.' },
  { id: 'fc8_toan_5', grade: 'Lớp 8', subject: 'Toán', question: 'Tổng các góc của một tứ giác lồi bằng bao nhiêu độ?', answer: 'Bằng 360 độ.' },

  // Lớp 8 - Ngữ Văn
  { id: 'fc8_van_1', grade: 'Lớp 8', subject: 'Ngữ Văn', question: 'Truyện lịch sử là gì?', answer: 'Là thể loại truyện lấy đề tài từ lịch sử, dựa vào những sự kiện, nhân vật có thật trong lịch sử để hư cấu.' },
  { id: 'fc8_van_2', grade: 'Lớp 8', subject: 'Ngữ Văn', question: 'Từ tượng hình là gì?', answer: 'Là từ gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật.' },
  { id: 'fc8_van_3', grade: 'Lớp 8', subject: 'Ngữ Văn', question: 'Đặc điểm của thơ sáu chữ, bảy chữ?', answer: 'Mỗi dòng có 6 hoặc 7 chữ, nhịp điệu phong phú, thường gieo vần chân.' },
  { id: 'fc8_van_4', grade: 'Lớp 8', subject: 'Ngữ Văn', question: 'Biện pháp tu từ nói quá có tác dụng gì?', answer: 'Phóng đại mức độ, quy mô, tính chất của sự vật, hiện tượng nhằm nhấn mạnh, gây ấn tượng, tăng sức biểu cảm.' },
  { id: 'fc8_van_5', grade: 'Lớp 8', subject: 'Ngữ Văn', question: 'Luận điểm trong văn nghị luận là gì?', answer: 'Là những ý kiến thể hiện tư tưởng, quan điểm của người viết hoặc người nói về vấn đề cần nghị luận.' },

  // Lớp 8 - Tiếng Anh
  { id: 'fc8_anh_1', grade: 'Lớp 8', subject: 'Tiếng Anh', question: 'What is the comparative form of "good"?', answer: 'better' },
  { id: 'fc8_anh_2', grade: 'Lớp 8', subject: 'Tiếng Anh', question: 'When do we use the present simple tense?', answer: 'To express habits, general truths, repeated actions or unchanging situations.' },
  { id: 'fc8_anh_3', grade: 'Lớp 8', subject: 'Tiếng Anh', question: 'What is a complex sentence?', answer: 'A sentence containing one independent clause and at least one dependent clause.' },
  { id: 'fc8_anh_4', grade: 'Lớp 8', subject: 'Tiếng Anh', question: 'Give an example of a phrasal verb.', answer: 'Look forward to, get up, take off.' },
  { id: 'fc8_anh_5', grade: 'Lớp 8', subject: 'Tiếng Anh', question: 'What does the suffix "-less" mean?', answer: 'It means "without" (e.g., careless means without care).' },

  // Lớp 8 - KHTN
  { id: 'fc8_khtn_1', grade: 'Lớp 8', subject: 'KHTN', question: 'Trọng lực là gì?', answer: 'Là lực hút của Trái Đất tác dụng lên vật.' },
  { id: 'fc8_khtn_2', grade: 'Lớp 8', subject: 'KHTN', question: 'Mol là gì?', answer: 'Là lượng chất chứa 6,022 × 10²³ hạt vi mô (nguyên tử, phân tử,...) của chất đó.' },
  { id: 'fc8_khtn_3', grade: 'Lớp 8', subject: 'KHTN', question: 'Phản ứng hoá học là gì?', answer: 'Là quá trình biến đổi từ chất này thành chất khác.' },
  { id: 'fc8_khtn_4', grade: 'Lớp 8', subject: 'KHTN', question: 'Tốc độ phản ứng là gì?', answer: 'Là đại lượng đặc trưng cho sự biến thiên nồng độ của một trong các chất phản ứng hoặc sản phẩm trong một đơn vị thời gian.' },
  { id: 'fc8_khtn_5', grade: 'Lớp 8', subject: 'KHTN', question: 'Hệ bài tiết ở người có chức năng gì?', answer: 'Lọc máu, thải các chất cặn bã và chất độc hại ra khỏi cơ thể để duy trì môi trường trong ổn định.' },

  // Lớp 8 - Lịch sử - Địa lí
  { id: 'fc8_su_dia_1', grade: 'Lớp 8', subject: 'Lịch sử - Địa lí', question: 'Cuộc cách mạng công nghiệp lần thứ nhất bắt đầu ở đâu?', answer: 'Nước Anh.' },
  { id: 'fc8_su_dia_2', grade: 'Lớp 8', subject: 'Lịch sử - Địa lí', question: 'Phong trào nông dân Tây Sơn bùng nổ vào năm nào?', answer: 'Năm 1771.' },
  { id: 'fc8_su_dia_3', grade: 'Lớp 8', subject: 'Lịch sử - Địa lí', question: 'Đặc điểm khí hậu châu Á là gì?', answer: 'Khí hậu châu Á phân hóa rất đa dạng thành nhiều đới và kiểu khí hậu khác nhau.' },
  { id: 'fc8_su_dia_4', grade: 'Lớp 8', subject: 'Lịch sử - Địa lí', question: 'Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập năm nào?', answer: 'Năm 1967.' },
  { id: 'fc8_su_dia_5', grade: 'Lớp 8', subject: 'Lịch sử - Địa lí', question: 'Đồng bằng sông Cửu Long do hệ thống sông nào bồi đắp?', answer: 'Hệ thống sông Mê Kông.' },

  // Lớp 8 - GDCD
  { id: 'fc8_gdcd_1', grade: 'Lớp 8', subject: 'GDCD', question: 'Tự hào về truyền thống dân tộc là gì?', answer: 'Là sự trân trọng, hãnh diện về những giá trị tốt đẹp của dân tộc và có ý thức giữ gìn, phát huy.' },
  { id: 'fc8_gdcd_2', grade: 'Lớp 8', subject: 'GDCD', question: 'Tôn trọng sự đa dạng của các dân tộc có ý nghĩa gì?', answer: 'Giúp các dân tộc học hỏi lẫn nhau, tạo sự đoàn kết, hòa bình và phát triển trên thế giới.' },
  { id: 'fc8_gdcd_3', grade: 'Lớp 8', subject: 'GDCD', question: 'Lao động cần cù, sáng tạo là gì?', answer: 'Là làm việc chăm chỉ, vượt qua khó khăn và luôn tìm tòi, cải tiến để đạt kết quả tốt hơn.' },
  { id: 'fc8_gdcd_4', grade: 'Lớp 8', subject: 'GDCD', question: 'Pháp luật quy định như thế nào về quyền sở hữu tài sản?', answer: 'Mọi người có quyền sở hữu hợp pháp về tài sản, không ai được xâm phạm.' },
  { id: 'fc8_gdcd_5', grade: 'Lớp 8', subject: 'GDCD', question: 'Bạo lực học đường là gì?', answer: 'Là những hành vi cố ý sử dụng vũ lực hoặc quyền lực để gây tổn hại về thể chất, tinh thần đối với học sinh, giáo viên.' },

  // Lớp 8 - Tin học
  { id: 'fc8_tin_1', grade: 'Lớp 8', subject: 'Tin học', question: 'Mạng LAN là gì?', answer: 'Là mạng cục bộ, kết nối các máy tính trong một phạm vi nhỏ như tòa nhà, trường học.' },
  { id: 'fc8_tin_2', grade: 'Lớp 8', subject: 'Tin học', question: 'Địa chỉ IP là gì?', answer: 'Là địa chỉ định danh duy nhất cho một thiết bị trên mạng máy tính sử dụng giao thức Internet.' },
  { id: 'fc8_tin_3', grade: 'Lớp 8', subject: 'Tin học', question: 'Sơ đồ khối dùng để làm gì?', answer: 'Trực quan hóa các bước của thuật toán bằng các hình học cơ bản.' },
  { id: 'fc8_tin_4', grade: 'Lớp 8', subject: 'Tin học', question: 'Biến trong lập trình là gì?', answer: 'Là đại lượng được đặt tên, dùng để lưu trữ dữ liệu và giá trị có thể thay đổi trong quá trình chạy chương trình.' },
  { id: 'fc8_tin_5', grade: 'Lớp 8', subject: 'Tin học', question: 'Phần mềm mã nguồn mở là gì?', answer: 'Là phần mềm có mã nguồn được công bố rộng rãi, cho phép người dùng tự do sử dụng, nghiên cứu, sửa đổi.' },

  // Lớp 8 - Công nghệ
  { id: 'fc8_congnghe_1', grade: 'Lớp 8', subject: 'Công nghệ', question: 'Bản vẽ kĩ thuật dùng để làm gì?', answer: 'Để thể hiện hình dạng, kích thước, cấu tạo của vật thể và là ngôn ngữ dùng chung trong kĩ thuật.' },
  { id: 'fc8_congnghe_2', grade: 'Lớp 8', subject: 'Công nghệ', question: 'Vật liệu cơ khí được chia làm mấy loại chính?', answer: 'Hai loại chính: kim loại và phi kim loại.' },
  { id: 'fc8_congnghe_3', grade: 'Lớp 8', subject: 'Công nghệ', question: 'Khớp động trong cơ khí là gì?', answer: 'Là các mối ghép mà các chi tiết có thể chuyển động tương đối với nhau.' },
  { id: 'fc8_congnghe_4', grade: 'Lớp 8', subject: 'Công nghệ', question: 'An toàn điện là gì?', answer: 'Là hệ thống các biện pháp, trang thiết bị bảo vệ người và tài sản khỏi các tai nạn do điện gây ra.' },
  { id: 'fc8_congnghe_5', grade: 'Lớp 8', subject: 'Công nghệ', question: 'Mạch điện cơ bản gồm những phần nào?', answer: 'Nguồn điện, dây dẫn, thiết bị đóng cắt và bảo vệ, phụ tải điện.' },

  // Lớp 9 - Toán
  { id: 'fc9_toan_1', grade: 'Lớp 9', subject: 'Toán', question: 'Căn bậc hai số học của số a không âm là gì?', answer: 'Là số x không âm sao cho x² = a.' },
  { id: 'fc9_toan_2', grade: 'Lớp 9', subject: 'Toán', question: 'Hệ phương trình bậc nhất hai ẩn có dạng như thế nào?', answer: 'ax + by = c và a\'x + b\'y = c\'' },
  { id: 'fc9_toan_3', grade: 'Lớp 9', subject: 'Toán', question: 'Đồ thị hàm số y = ax² (a ≠ 0) là hình gì?', answer: 'Là một đường cong Parabol đi qua gốc tọa độ O.' },
  { id: 'fc9_toan_4', grade: 'Lớp 9', subject: 'Toán', question: 'Góc ở tâm là góc như thế nào?', answer: 'Là góc có đỉnh trùng với tâm của đường tròn.' },
  { id: 'fc9_toan_5', grade: 'Lớp 9', subject: 'Toán', question: 'Thể tích hình trụ được tính theo công thức nào?', answer: 'V = π.r².h' },

  // Lớp 9 - Ngữ Văn
  { id: 'fc9_van_1', grade: 'Lớp 9', subject: 'Ngữ Văn', question: 'Thơ tự do có đặc điểm gì?', answer: 'Không quy định số chữ trong câu, số câu trong bài, vần nhịp linh hoạt, theo cảm xúc của người viết.' },
  { id: 'fc9_van_2', grade: 'Lớp 9', subject: 'Ngữ Văn', question: 'Thế nào là hàm ý?', answer: 'Là phần thông báo tuy không được diễn đạt trực tiếp bằng từ ngữ trong câu nhưng có thể suy ra từ những từ ngữ ấy.' },
  { id: 'fc9_van_3', grade: 'Lớp 9', subject: 'Ngữ Văn', question: 'Truyện Kiều do tác giả nào sáng tác?', answer: 'Nguyễn Du.' },
  { id: 'fc9_van_4', grade: 'Lớp 9', subject: 'Ngữ Văn', question: 'Phương châm về lượng trong giao tiếp là gì?', answer: 'Nói cho có nội dung, nội dung phải đáp ứng đúng yêu cầu của cuộc giao tiếp, không thiếu, không thừa.' },
  { id: 'fc9_van_5', grade: 'Lớp 9', subject: 'Ngữ Văn', question: 'Nghị luận về một sự việc, hiện tượng đời sống là gì?', answer: 'Bàn về một sự việc, hiện tượng có ý nghĩa đối với xã hội, đáng khen, đáng chê hay có vấn đề đáng suy nghĩ.' },

  // Lớp 9 - Tiếng Anh
  { id: 'fc9_anh_1', grade: 'Lớp 9', subject: 'Tiếng Anh', question: 'What is a relative clause?', answer: 'A clause that gives additional information about a noun, starting with relative pronouns like who, which, that.' },
  { id: 'fc9_anh_2', grade: 'Lớp 9', subject: 'Tiếng Anh', question: 'How do you form the passive voice?', answer: 'Subject + be + past participle + (by agent).' },
  { id: 'fc9_anh_3', grade: 'Lớp 9', subject: 'Tiếng Anh', question: 'What is reported speech used for?', answer: 'To report what someone else has said without using their exact words.' },
  { id: 'fc9_anh_4', grade: 'Lớp 9', subject: 'Tiếng Anh', question: 'Give an example of a conditional sentence type 2.', answer: 'If I had a million dollars, I would travel the world.' },
  { id: 'fc9_anh_5', grade: 'Lớp 9', subject: 'Tiếng Anh', question: 'What is the function of a tag question?', answer: 'To check if information is correct or to ask for agreement.' },

  // Lớp 9 - KHTN
  { id: 'fc9_khtn_1', grade: 'Lớp 9', subject: 'KHTN', question: 'ADN có chức năng gì?', answer: 'Lưu giữ, bảo quản và truyền đạt thông tin di truyền.' },
  { id: 'fc9_khtn_2', grade: 'Lớp 9', subject: 'KHTN', question: 'Đột biến gen là gì?', answer: 'Là những biến đổi trong cấu trúc của gen liên quan đến một hoặc một số cặp nucleotide.' },
  { id: 'fc9_khtn_3', grade: 'Lớp 9', subject: 'KHTN', question: 'Di truyền học nghiên cứu về vấn đề gì?', answer: 'Khoa học nghiên cứu về tính di truyền và biến dị ở sinh vật.' },
  { id: 'fc9_khtn_4', grade: 'Lớp 9', subject: 'KHTN', question: 'Dòng điện xoay chiều là gì?', answer: 'Là dòng điện luân phiên đổi chiều theo thời gian.' },
  { id: 'fc9_khtn_5', grade: 'Lớp 9', subject: 'KHTN', question: 'Công thức hóa học của rượu etylic là gì?', answer: 'C2H5OH.' },

  // Lớp 9 - Lịch sử - Địa lí
  { id: 'fc9_su_dia_1', grade: 'Lớp 9', subject: 'Lịch sử - Địa lí', question: 'Chiến tranh thế giới thứ nhất diễn ra trong khoảng thời gian nào?', answer: 'Năm 1914 đến 1918.' },
  { id: 'fc9_su_dia_2', grade: 'Lớp 9', subject: 'Lịch sử - Địa lí', question: 'Nước Việt Nam Dân chủ Cộng hòa ra đời vào ngày tháng năm nào?', answer: 'Ngày 2/9/1945.' },
  { id: 'fc9_su_dia_3', grade: 'Lớp 9', subject: 'Lịch sử - Địa lí', question: 'Vùng kinh tế trọng điểm phía Nam nước ta gồm bao nhiêu tỉnh, thành phố?', answer: 'Gồm 8 tỉnh, thành phố.' },
  { id: 'fc9_su_dia_4', grade: 'Lớp 9', subject: 'Lịch sử - Địa lí', question: 'Dân số Việt Nam đang ở trong giai đoạn nào?', answer: 'Đang ở thời kì "dân số vàng" và bước vào quá trình già hóa dân số.' },
  { id: 'fc9_su_dia_5', grade: 'Lớp 9', subject: 'Lịch sử - Địa lí', question: 'Khối liên minh châu Âu (EU) sử dụng đồng tiền chung nào?', answer: 'Đồng Euro.' },

  // Lớp 9 - GDCD
  { id: 'fc9_gdcd_1', grade: 'Lớp 9', subject: 'GDCD', question: 'Dân chủ xã hội chủ nghĩa là gì?', answer: 'Là nền dân chủ mà quyền lực thuộc về nhân dân, do nhân dân và vì nhân dân.' },
  { id: 'fc9_gdcd_2', grade: 'Lớp 9', subject: 'GDCD', question: 'Chí công vô tư là gì?', answer: 'Phẩm chất đạo đức thể hiện sự công bằng, không thiên vị, giải quyết công việc vì lợi ích chung.' },
  { id: 'fc9_gdcd_3', grade: 'Lớp 9', subject: 'GDCD', question: 'Trách nhiệm của thanh niên trong sự nghiệp công nghiệp hóa, hiện đại hóa?', answer: 'Ra sức học tập, rèn luyện, ứng dụng khoa học công nghệ để xây dựng đất nước.' },
  { id: 'fc9_gdcd_4', grade: 'Lớp 9', subject: 'GDCD', question: 'Quyền tự do kinh doanh là gì?', answer: 'Là quyền của công dân được lựa chọn hình thức tổ chức kinh tế, ngành nghề và quy mô kinh doanh theo quy định của pháp luật.' },
  { id: 'fc9_gdcd_5', grade: 'Lớp 9', subject: 'GDCD', question: 'Bảo vệ hòa bình là gì?', answer: 'Là giữ gìn cuộc sống xã hội bình yên; chống lại chiến tranh, dùng thương lượng để giải quyết mâu thuẫn.' },

  // Lớp 9 - Tin học
  { id: 'fc9_tin_1', grade: 'Lớp 9', subject: 'Tin học', question: 'Trí tuệ nhân tạo (AI) là gì?', answer: 'Là lĩnh vực khoa học máy tính nghiên cứu và tạo ra các hệ thống có khả năng mô phỏng trí tuệ con người.' },
  { id: 'fc9_tin_2', grade: 'Lớp 9', subject: 'Tin học', question: 'Cấu trúc lặp trong lập trình có ý nghĩa gì?', answer: 'Cho phép thực hiện lặp đi lặp lại một khối lệnh nhiều lần theo một điều kiện nhất định.' },
  { id: 'fc9_tin_3', grade: 'Lớp 9', subject: 'Tin học', question: 'Ngôn ngữ lập trình bậc cao là gì?', answer: 'Là ngôn ngữ lập trình gần với ngôn ngữ tự nhiên của con người, ít phụ thuộc vào phần cứng máy tính.' },
  { id: 'fc9_tin_4', grade: 'Lớp 9', subject: 'Tin học', question: 'Cơ sở dữ liệu (Database) là gì?', answer: 'Là tập hợp các dữ liệu được tổ chức có cấu trúc để dễ dàng truy cập, quản lý và cập nhật.' },
  { id: 'fc9_tin_5', grade: 'Lớp 9', subject: 'Tin học', question: 'Ba yếu tố cốt lõi của an toàn thông tin là gì?', answer: 'Tính bảo mật (Confidentiality), tính toàn vẹn (Integrity) và tính sẵn sàng (Availability).' },

  // Lớp 9 - Công nghệ
  { id: 'fc9_congnghe_1', grade: 'Lớp 9', subject: 'Công nghệ', question: 'Năng lượng tái tạo là gì?', answer: 'Năng lượng từ những nguồn liên tục được tự nhiên bồi đắp như Mặt trời, gió, nước,...' },
  { id: 'fc9_congnghe_2', grade: 'Lớp 9', subject: 'Công nghệ', question: 'Quy trình thiết kế kĩ thuật gồm những bước cơ bản nào?', answer: 'Xác định vấn đề, tìm hiểu tổng quan, đề xuất giải pháp, chế tạo nguyên mẫu, thử nghiệm đánh giá, hoàn thiện.' },
  { id: 'fc9_congnghe_3', grade: 'Lớp 9', subject: 'Công nghệ', question: 'Ứng dụng của công nghệ sinh học trong nông nghiệp là gì?', answer: 'Tạo giống cây trồng mới, sản xuất chế phẩm sinh học, phân bón vi sinh,...' },
  { id: 'fc9_congnghe_4', grade: 'Lớp 9', subject: 'Công nghệ', question: 'Tự động hóa là gì?', answer: 'Sử dụng máy móc, hệ thống điều khiển để tự động thực hiện quy trình sản xuất, giảm thiểu sự can thiệp của con người.' },
  { id: 'fc9_congnghe_5', grade: 'Lớp 9', subject: 'Công nghệ', question: 'Vật liệu mới có vai trò gì trong sản xuất?', answer: 'Đáp ứng yêu cầu kĩ thuật cao, tiết kiệm tài nguyên, thân thiện môi trường và thúc đẩy công nghệ phát triển.' }
]
].map((card, index) => ({...card, id: index + 1}));
