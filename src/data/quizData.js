export const QUIZ_DATA = [
  // LỚP 6
  // Toán 6
  {
    id: 'toan6_ch1',
    title: 'Toán 6 - Chương 1: Tập hợp các số tự nhiên',
    subject: 'Toán',
    grade: 6,
    chapter: 1,
    questions: [
      { id: 't6_c1_q1', type: 'mcq', text: 'Tập hợp các số tự nhiên kí hiệu là gì?', options: ['N', 'N*', 'Z', 'Q'], correct: 'N', explanation: 'Tập hợp các số tự nhiên được kí hiệu là N.' },
      { id: 't6_c1_q2', type: 'true_false', text: 'Số 0 thuộc tập hợp N* (tập hợp số tự nhiên khác 0).', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'N* là tập hợp số tự nhiên khác 0, nên 0 không thuộc N*.' },
      { id: 't6_c1_q3', type: 'fill_blank', text: 'Kết quả của phép tính 2^3 là...', options: [], correct: '8', explanation: '2^3 = 2 x 2 x 2 = 8.' },
      { id: 't6_c1_q4', type: 'mcq', text: 'Số La Mã XIV tương ứng với số tự nhiên nào?', options: ['14', '16', '24', '15'], correct: '14', explanation: 'X = 10, IV = 4. Vậy XIV = 14.' },
      { id: 't6_c1_q5', type: 'mcq', text: 'Thứ tự thực hiện các phép tính trong biểu thức không có dấu ngoặc là gì?', options: ['Lũy thừa -> Nhân và chia -> Cộng và trừ', 'Nhân và chia -> Lũy thừa -> Cộng và trừ', 'Cộng và trừ -> Nhân và chia -> Lũy thừa', 'Từ trái sang phải'], correct: 'Lũy thừa -> Nhân và chia -> Cộng và trừ', explanation: 'Theo quy tắc thứ tự thực hiện phép tính.' }
    ]
  },
  {
    id: 'toan6_ch2',
    title: 'Toán 6 - Chương 2: Tính chia hết trong tập hợp các số tự nhiên',
    subject: 'Toán',
    grade: 6,
    chapter: 2,
    questions: [
      { id: 't6_c2_q1', type: 'mcq', text: 'Dấu hiệu chia hết cho 2 là gì?', options: ['Chữ số tận cùng là chữ số chẵn', 'Chữ số tận cùng là 0 hoặc 5', 'Tổng các chữ số chia hết cho 2', 'Chữ số tận cùng là chữ số lẻ'], correct: 'Chữ số tận cùng là chữ số chẵn', explanation: 'Các số có chữ số tận cùng là 0, 2, 4, 6, 8 thì chia hết cho 2.' },
      { id: 't6_c2_q2', type: 'true_false', text: 'Mọi số chia hết cho 9 thì chia hết cho 3.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Nếu tổng các chữ số chia hết cho 9 thì chắc chắn tổng đó cũng chia hết cho 3.' },
      { id: 't6_c2_q3', type: 'fill_blank', text: 'Số nguyên tố nhỏ nhất là...', options: [], correct: '2', explanation: '2 là số nguyên tố nhỏ nhất và cũng là số nguyên tố chẵn duy nhất.' },
      { id: 't6_c2_q4', type: 'mcq', text: 'Khẳng định nào sau đây là đúng về số nguyên tố?', options: ['Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.', 'Là số tự nhiên lớn hơn 1, có nhiều hơn 2 ước.', 'Là số tự nhiên chỉ chia hết cho chính nó.', 'Mọi số lẻ đều là số nguyên tố.'], correct: 'Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.', explanation: 'Đó là định nghĩa của số nguyên tố.' },
      { id: 't6_c2_q5', type: 'mcq', text: 'ƯCLN(12, 18) bằng bao nhiêu?', options: ['6', '2', '3', '36'], correct: '6', explanation: '12 = 2^2*3; 18 = 2*3^2. ƯCLN = 2*3 = 6.' }
    ]
  },
  {
    id: 'toan6_ch3',
    title: 'Toán 6 - Chương 3: Số nguyên',
    subject: 'Toán',
    grade: 6,
    chapter: 3,
    questions: [
      { id: 't6_c3_q1', type: 'mcq', text: 'Tập hợp các số nguyên kí hiệu là gì?', options: ['Z', 'N', 'Q', 'R'], correct: 'Z', explanation: 'Tập hợp số nguyên kí hiệu là Z.' },
      { id: 't6_c3_q2', type: 'true_false', text: 'Số 0 là số nguyên dương.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Số 0 không phải là số nguyên dương cũng không phải số nguyên âm.' },
      { id: 't6_c3_q3', type: 'fill_blank', text: 'Kết quả của phép tính (-5) + (-7) là...', options: [], correct: '-12', explanation: '(-5) + (-7) = -(5 + 7) = -12.' },
      { id: 't6_c3_q4', type: 'mcq', text: 'Tích của hai số nguyên âm là một số:', options: ['Nguyên dương', 'Nguyên âm', 'Số 0', 'Không xác định'], correct: 'Nguyên dương', explanation: 'Âm nhân âm bằng dương.' },
      { id: 't6_c3_q5', type: 'mcq', text: 'Khẳng định nào sai?', options: ['-5 > -3', '-2 > -4', '0 > -1', '5 > -10'], correct: '-5 > -3', explanation: 'Trên trục số, -5 nằm bên trái -3 nên -5 < -3.' }
    ]
  },
  // Ngữ Văn 6
  {
    id: 'van6_ch1',
    title: 'Ngữ Văn 6 - Chương 1: Tôi và các bạn',
    subject: 'Ngữ Văn',
    grade: 6,
    chapter: 1,
    questions: [
      { id: 'v6_c1_q1', type: 'mcq', text: 'Văn bản "Bài học đường đời đầu tiên" trích từ tác phẩm nào?', options: ['Dế Mèn phiêu lưu kí', 'Đất rừng phương Nam', 'Quê nội', 'Tuổi thơ dữ dội'], correct: 'Dế Mèn phiêu lưu kí', explanation: 'Trích từ tác phẩm Dế Mèn phiêu lưu kí của Tô Hoài.' },
      { id: 'v6_c1_q2', type: 'true_false', text: 'Nhân vật Dế Choắt trong truyện có ngoại hình to khỏe, cường tráng.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Dế Choắt có ngoại hình gầy gò, ốm yếu.' },
      { id: 'v6_c1_q3', type: 'fill_blank', text: 'Tác giả của tác phẩm "Dế Mèn phiêu lưu kí" là nhà văn...', options: [], correct: 'Tô Hoài', explanation: 'Tô Hoài là tác giả.' },
      { id: 'v6_c1_q4', type: 'mcq', text: 'Bài học đường đời đầu tiên mà Dế Mèn rút ra là gì?', options: ['Thói ngông cuồng, hống hách sẽ mang lại tai họa cho người khác và cho chính mình.', 'Phải biết yêu thương, đùm bọc người yếu thế hơn mình.', 'Phải dũng cảm chiến đấu chống lại kẻ thù.', 'Phải biết giữ gìn sức khỏe.'], correct: 'Thói ngông cuồng, hống hách sẽ mang lại tai họa cho người khác và cho chính mình.', explanation: 'Dế Mèn nhận ra lỗi lầm sau cái chết của Dế Choắt.' },
      { id: 'v6_c1_q5', type: 'mcq', text: 'Thể loại của văn bản "Bài học đường đời đầu tiên" là gì?', options: ['Truyện đồng thoại', 'Truyện truyền thuyết', 'Truyện cổ tích', 'Truyện ngụ ngôn'], correct: 'Truyện đồng thoại', explanation: 'Đây là thể loại truyện viết cho thiếu nhi, nhân vật là loài vật được nhân hóa.' }
    ]
  },
  {
    id: 'van6_ch2',
    title: 'Ngữ Văn 6 - Chương 2: Gõ cửa trái tim',
    subject: 'Ngữ Văn',
    grade: 6,
    chapter: 2,
    questions: [
      { id: 'v6_c2_q1', type: 'mcq', text: 'Bài thơ "Chuyện cổ tích về loài người" của tác giả nào?', options: ['Xuân Quỳnh', 'Lâm Thị Mỹ Dạ', 'Nguyễn Duy', 'Trần Đăng Khoa'], correct: 'Xuân Quỳnh', explanation: 'Bài thơ do nhà thơ Xuân Quỳnh sáng tác.' },
      { id: 'v6_c2_q2', type: 'true_false', text: 'Theo bài thơ "Chuyện cổ tích về loài người", trẻ em sinh ra đầu tiên trên trái đất.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Bài thơ khẳng định trẻ em sinh ra đầu tiên, sau đó mọi thứ mới ra đời vì trẻ em.' },
      { id: 'v6_c2_q3', type: 'fill_blank', text: 'Trong bài thơ "Mây và sóng", em bé đã từ chối lời rủ rê của những người trên mây và trong sóng để ở nhà với...', options: [], correct: 'mẹ', explanation: 'Em bé luôn hướng về mẹ, tình mẫu tử chiến thắng mọi cám dỗ.' },
      { id: 'v6_c2_q4', type: 'mcq', text: 'Biện pháp tu từ nổi bật trong bài thơ "Mây và sóng" là gì?', options: ['Điệp ngữ', 'Nhân hóa', 'So sánh', 'Ẩn dụ'], correct: 'Điệp ngữ', explanation: 'Tác giả sử dụng nhiều điệp ngữ tạo nhịp điệu.' },
      { id: 'v6_c2_q5', type: 'mcq', text: 'Tác giả của bài thơ "Mây và sóng" là ai?', options: ['R. Ta-go', 'An-đéc-xen', 'Puskin', 'V. Huy-gô'], correct: 'R. Ta-go', explanation: 'Bài thơ của nhà thơ Ấn Độ Ra-bin-đra-nát Ta-go.' }
    ]
  },
  {
    id: 'van6_ch3',
    title: 'Ngữ Văn 6 - Chương 3: Yêu thương và chia sẻ',
    subject: 'Ngữ Văn',
    grade: 6,
    chapter: 3,
    questions: [
      { id: 'v6_c3_q1', type: 'mcq', text: 'Văn bản "Cô bé bán diêm" của tác giả nào?', options: ['An-đéc-xen', 'Puskin', 'Mác-xim Gorki', 'G. đơ Mô-pa-xăng'], correct: 'An-đéc-xen', explanation: 'Truyện cổ tích nổi tiếng của nhà văn Đan Mạch An-đéc-xen.' },
      { id: 'v6_c3_q2', type: 'true_false', text: 'Cô bé bán diêm mồ côi cả cha lẫn mẹ.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Cô bé sống cùng người cha tàn nhẫn, mẹ và bà nội đã mất.' },
      { id: 'v6_c3_q3', type: 'fill_blank', text: 'Lần quẹt diêm cuối cùng, cô bé bán diêm đã nhìn thấy ai?', options: [], correct: 'bà nội', explanation: 'Hình ảnh người bà hiền từ hiện ra trong lần quẹt diêm cuối.' },
      { id: 'v6_c3_q4', type: 'mcq', text: 'Ý nghĩa của câu chuyện "Cô bé bán diêm" là gì?', options: ['Tố cáo xã hội vô cảm, kêu gọi tình yêu thương con người.', 'Phê phán người cha tàn ác.', 'Ca ngợi vẻ đẹp của đêm giao thừa.', 'Khuyên trẻ em nên chăm chỉ làm việc.'], correct: 'Tố cáo xã hội vô cảm, kêu gọi tình yêu thương con người.', explanation: 'Truyện là lời kêu gọi sự đồng cảm, xót thương đối với những mảnh đời bất hạnh.' },
      { id: 'v6_c3_q5', type: 'mcq', text: 'Đặc sắc nghệ thuật của "Cô bé bán diêm" là gì?', options: ['Sự đan xen giữa thực tại khắc nghiệt và mộng tưởng kì diệu', 'Sử dụng nhiều từ Hán Việt', 'Cốt truyện li kì, hấp dẫn', 'Nghệ thuật châm biếm sâu sắc'], correct: 'Sự đan xen giữa thực tại khắc nghiệt và mộng tưởng kì diệu', explanation: 'Nghệ thuật tương phản giữa cảnh đời thực và những ảo ảnh qua ánh lửa diêm.' }
    ]
  },
  
  // LỚP 7
  // Toán 7
  {
    id: 'toan7_ch1',
    title: 'Toán 7 - Chương 1: Số hữu tỉ',
    subject: 'Toán',
    grade: 7,
    chapter: 1,
    questions: [
      { id: 't7_c1_q1', type: 'mcq', text: 'Tập hợp các số hữu tỉ được kí hiệu là gì?', options: ['Q', 'Z', 'R', 'N'], correct: 'Q', explanation: 'Tập hợp các số hữu tỉ kí hiệu là Q.' },
      { id: 't7_c1_q2', type: 'true_false', text: 'Số 0 là số hữu tỉ.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: '0 = 0/1 nên 0 là số hữu tỉ.' },
      { id: 't7_c1_q3', type: 'fill_blank', text: 'Số đối của -3/4 là...', options: [], correct: '3/4', explanation: 'Số đối của a/b là -a/b.' },
      { id: 't7_c1_q4', type: 'mcq', text: 'Kết quả của phép tính (1/2) * (2/3) là?', options: ['1/3', '2/6', '3/5', '1/6'], correct: '1/3', explanation: '(1*2)/(2*3) = 2/6 = 1/3.' },
      { id: 't7_c1_q5', type: 'mcq', text: 'Số nào sau đây không phải là số hữu tỉ?', options: ['Căn bậc hai của 2', '0.5', '-5', '2/3'], correct: 'Căn bậc hai của 2', explanation: 'Căn bậc hai của 2 là số vô tỉ.' }
    ]
  },
  {
    id: 'toan7_ch2',
    title: 'Toán 7 - Chương 2: Số thực',
    subject: 'Toán',
    grade: 7,
    chapter: 2,
    questions: [
      { id: 't7_c2_q1', type: 'mcq', text: 'Tập hợp các số thực được kí hiệu là gì?', options: ['R', 'Q', 'I', 'Z'], correct: 'R', explanation: 'Tập hợp các số thực được kí hiệu là R.' },
      { id: 't7_c2_q2', type: 'true_false', text: 'Mọi số hữu tỉ đều là số thực.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Tập hợp số hữu tỉ là con của tập hợp số thực.' },
      { id: 't7_c2_q3', type: 'fill_blank', text: 'Giá trị tuyệt đối của -15 là...', options: [], correct: '15', explanation: 'Giá trị tuyệt đối của một số luôn không âm.' },
      { id: 't7_c2_q4', type: 'mcq', text: 'Số vô tỉ là số viết được dưới dạng:', options: ['Số thập phân vô hạn không tuần hoàn', 'Số thập phân vô hạn tuần hoàn', 'Phân số', 'Số nguyên'], correct: 'Số thập phân vô hạn không tuần hoàn', explanation: 'Đó là định nghĩa của số vô tỉ.' },
      { id: 't7_c2_q5', type: 'mcq', text: 'Căn bậc hai số học của 25 là:', options: ['5', '-5', '5 và -5', '25'], correct: '5', explanation: 'Căn bậc hai số học luôn mang giá trị dương.' }
    ]
  },
  {
    id: 'toan7_ch3',
    title: 'Toán 7 - Chương 3: Góc và đường thẳng song song',
    subject: 'Toán',
    grade: 7,
    chapter: 3,
    questions: [
      { id: 't7_c3_q1', type: 'mcq', text: 'Hai góc kề bù có tổng số đo bằng bao nhiêu độ?', options: ['180 độ', '90 độ', '360 độ', '100 độ'], correct: '180 độ', explanation: 'Theo tính chất hai góc kề bù.' },
      { id: 't7_c3_q2', type: 'true_false', text: 'Hai góc đối đỉnh thì bằng nhau.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Đây là tính chất cơ bản của hai góc đối đỉnh.' },
      { id: 't7_c3_q3', type: 'fill_blank', text: 'Qua một điểm ở ngoài một đường thẳng, chỉ có ... đường thẳng song song với đường thẳng đó.', options: [], correct: '1', explanation: 'Tiên đề Ơ-clit.' },
      { id: 't7_c3_q4', type: 'mcq', text: 'Nếu một đường thẳng cắt hai đường thẳng song song thì:', options: ['Hai góc so le trong bằng nhau', 'Hai góc đồng vị bù nhau', 'Hai góc trong cùng phía bằng nhau', 'Hai góc kề bù bằng nhau'], correct: 'Hai góc so le trong bằng nhau', explanation: 'Tính chất của hai đường thẳng song song.' },
      { id: 't7_c3_q5', type: 'mcq', text: 'Tia phân giác của một góc là tia:', options: ['Nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau', 'Chia góc đó thành hai phần bất kì', 'Vuông góc với một cạnh của góc', 'Song song với một cạnh của góc'], correct: 'Nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau', explanation: 'Định nghĩa tia phân giác.' }
    ]
  },
  // Ngữ Văn 7
  {
    id: 'van7_ch1',
    title: 'Ngữ Văn 7 - Chương 1: Bầu trời tuổi thơ',
    subject: 'Ngữ Văn',
    grade: 7,
    chapter: 1,
    questions: [
      { id: 'v7_c1_q1', type: 'mcq', text: 'Văn bản "Bầy chim chìa vôi" của tác giả nào?', options: ['Nguyễn Quang Thiều', 'Nguyễn Nhật Ánh', 'Vũ Tú Nam', 'Tô Hoài'], correct: 'Nguyễn Quang Thiều', explanation: 'Bài học Bầy chim chìa vôi do Nguyễn Quang Thiều sáng tác.' },
      { id: 'v7_c1_q2', type: 'true_false', text: 'Trong truyện Bầy chim chìa vôi, Mên và Mon là hai anh em.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Nhân vật chính là hai anh em Mên và Mon.' },
      { id: 'v7_c1_q3', type: 'fill_blank', text: 'Mên và Mon lo lắng cho bầy chim chìa vôi non vì trời đang mưa và nước sông đang...', options: [], correct: 'dâng lên', explanation: 'Nước sông dâng cao đe dọa tổ chim.' },
      { id: 'v7_c1_q4', type: 'mcq', text: 'Chi tiết bầy chim chìa vôi bay lên mặt nước thể hiện điều gì?', options: ['Sức sống mãnh liệt', 'Sự tuyệt vọng', 'Sự yếu đuối', 'Sự sợ hãi'], correct: 'Sức sống mãnh liệt', explanation: 'Sức vươn lên mạnh mẽ của sự sống.' },
      { id: 'v7_c1_q5', type: 'mcq', text: 'Tình cảm của hai anh em Mên và Mon đối với bầy chim là gì?', options: ['Yêu thương, lo lắng', 'Thờ ơ, vô tâm', 'Ghét bỏ', 'Sợ hãi'], correct: 'Yêu thương, lo lắng', explanation: 'Hai anh em rất quan tâm và lo lắng cho bầy chim.' }
    ]
  },
  {
    id: 'van7_ch2',
    title: 'Ngữ Văn 7 - Chương 2: Khúc nhạc tâm hồn',
    subject: 'Ngữ Văn',
    grade: 7,
    chapter: 2,
    questions: [
      { id: 'v7_c2_q1', type: 'mcq', text: 'Bài thơ "Đồng dao mùa xuân" của tác giả nào?', options: ['Nguyễn Khoa Điềm', 'Thanh Thảo', 'Xuân Quỳnh', 'Hữu Thỉnh'], correct: 'Nguyễn Khoa Điềm', explanation: 'Là sáng tác của nhà thơ Nguyễn Khoa Điềm.' },
      { id: 'v7_c2_q2', type: 'true_false', text: 'Bài thơ "Gặp lá cơm nếp" viết về tình cảm cha con.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Bài thơ viết về tình cảm mẹ con và tình yêu quê hương.' },
      { id: 'v7_c2_q3', type: 'fill_blank', text: 'Trong bài thơ "Gặp lá cơm nếp", người lính nhớ về ai khi ngửi thấy mùi xôi?', options: [], correct: 'mẹ', explanation: 'Mùi xôi gợi nhớ người mẹ hiền.' },
      { id: 'v7_c2_q4', type: 'mcq', text: 'Thể thơ của bài "Đồng dao mùa xuân" là gì?', options: ['Bốn chữ', 'Năm chữ', 'Lục bát', 'Tự do'], correct: 'Bốn chữ', explanation: 'Bài thơ được viết theo thể thơ 4 chữ, nhịp điệu như bài đồng dao.' },
      { id: 'v7_c2_q5', type: 'mcq', text: 'Hình ảnh người lính trong "Đồng dao mùa xuân" gắn liền với sự kiện nào?', options: ['Chiến tranh bảo vệ Tổ quốc', 'Lao động sản xuất', 'Học tập', 'Vui chơi'], correct: 'Chiến tranh bảo vệ Tổ quốc', explanation: 'Người lính lên đường ra trận và hi sinh.' }
    ]
  },
  {
    id: 'van7_ch3',
    title: 'Ngữ Văn 7 - Chương 3: Cội nguồn yêu thương',
    subject: 'Ngữ Văn',
    grade: 7,
    chapter: 3,
    questions: [
      { id: 'v7_c3_q1', type: 'mcq', text: 'Tùy bút "Cốm Vòng" của tác giả nào?', options: ['Vũ Bằng', 'Thạch Lam', 'Nguyễn Tuân', 'Minh Châu'], correct: 'Vũ Bằng', explanation: 'Trích trong "Thương nhớ mười hai" của Vũ Bằng.' },
      { id: 'v7_c3_q2', type: 'true_false', text: 'Cốm là thức quà riêng biệt của người Hà Nội.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Theo tùy bút, cốm gắn liền với văn hóa Hà Nội.' },
      { id: 'v7_c3_q3', type: 'fill_blank', text: 'Cốm thường được ăn kèm với loại quả nào trong dịp thu về?', options: [], correct: 'hồng', explanation: 'Cốm vòng ăn với hồng đỏ là sự kết hợp tinh tế.' },
      { id: 'v7_c3_q4', type: 'mcq', text: 'Văn bản "Mùa thu về Trùng Khánh nghe hạt dẻ hát" viết về vùng đất nào?', options: ['Cao Bằng', 'Hà Giang', 'Lạng Sơn', 'Bắc Kạn'], correct: 'Cao Bằng', explanation: 'Trùng Khánh là một huyện thuộc tỉnh Cao Bằng.' },
      { id: 'v7_c3_q5', type: 'mcq', text: 'Đặc điểm nổi bật của thể loại tùy bút là gì?', options: ['Ghi chép chân thực, giàu cảm xúc cá nhân', 'Cốt truyện li kì', 'Nhiều nhân vật giả tưởng', 'Tuân thủ luật thơ nghiêm ngặt'], correct: 'Ghi chép chân thực, giàu cảm xúc cá nhân', explanation: 'Tùy bút phóng túng, in đậm dấu ấn chủ quan của người viết.' }
    ]
  },

  // LỚP 8
  // Toán 8
  {
    id: 'toan8_ch1',
    title: 'Toán 8 - Chương 1: Đa thức',
    subject: 'Toán',
    grade: 8,
    chapter: 1,
    questions: [
      { id: 't8_c1_q1', type: 'mcq', text: 'Bậc của đa thức x^3*y + x*y^2 - 5 là bao nhiêu?', options: ['4', '3', '2', '5'], correct: '4', explanation: 'Hạng tử x^3*y có bậc là 3+1=4 cao nhất.' },
      { id: 't8_c1_q2', type: 'true_false', text: 'Đơn thức là một đa thức.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Đơn thức là trường hợp đặc biệt của đa thức (có 1 hạng tử).' },
      { id: 't8_c1_q3', type: 'fill_blank', text: 'Kết quả của phép nhân đơn thức 2x với đa thức (x - 3) là...', options: [], correct: '2x^2 - 6x', explanation: '2x(x) - 2x(3) = 2x^2 - 6x.' },
      { id: 't8_c1_q4', type: 'mcq', text: 'Phép chia đa thức A cho đa thức B gọi là chia hết khi phần dư bằng:', options: ['0', '1', 'B', 'A'], correct: '0', explanation: 'Phần dư R = 0 thì là phép chia hết.' },
      { id: 't8_c1_q5', type: 'mcq', text: 'Biểu thức nào sau đây không phải là đa thức?', options: ['1/x + y', 'x^2 + 2y', '5', 'x'], correct: '1/x + y', explanation: 'Biểu thức chứa biến ở mẫu thức không phải là đa thức.' }
    ]
  },
  {
    id: 'toan8_ch2',
    title: 'Toán 8 - Chương 2: Hằng đẳng thức đáng nhớ và ứng dụng',
    subject: 'Toán',
    grade: 8,
    chapter: 2,
    questions: [
      { id: 't8_c2_q1', type: 'mcq', text: 'Khai triển (A + B)^2 ta được:', options: ['A^2 + 2AB + B^2', 'A^2 - 2AB + B^2', 'A^2 + B^2', 'A^2 - B^2'], correct: 'A^2 + 2AB + B^2', explanation: 'Bình phương của một tổng.' },
      { id: 't8_c2_q2', type: 'true_false', text: 'Hằng đẳng thức (A - B)(A + B) = A^2 - B^2.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Đây là hằng đẳng thức hiệu hai bình phương.' },
      { id: 't8_c2_q3', type: 'fill_blank', text: 'Điền vào chỗ trống: (x - y)^3 = x^3 - 3x^2y + 3xy^2 - ...', options: [], correct: 'y^3', explanation: 'Lập phương của một hiệu.' },
      { id: 't8_c2_q4', type: 'mcq', text: 'Biểu thức x^3 + 8 được phân tích thành nhân tử là:', options: ['(x+2)(x^2-2x+4)', '(x+2)(x^2+2x+4)', '(x-2)(x^2-2x+4)', '(x-2)(x^2+2x+4)'], correct: '(x+2)(x^2-2x+4)', explanation: 'Tổng hai lập phương: A^3 + B^3 = (A+B)(A^2-AB+B^2) với A=x, B=2.' },
      { id: 't8_c2_q5', type: 'mcq', text: 'Việc biến đổi biểu thức thành tích của các đa thức gọi là:', options: ['Phân tích đa thức thành nhân tử', 'Khai triển đa thức', 'Thu gọn đa thức', 'Cộng trừ đa thức'], correct: 'Phân tích đa thức thành nhân tử', explanation: 'Định nghĩa phép phân tích đa thức thành nhân tử.' }
    ]
  },
  {
    id: 'toan8_ch3',
    title: 'Toán 8 - Chương 3: Tứ giác',
    subject: 'Toán',
    grade: 8,
    chapter: 3,
    questions: [
      { id: 't8_c3_q1', type: 'mcq', text: 'Tổng số đo các góc trong một tứ giác bằng bao nhiêu?', options: ['360 độ', '180 độ', '90 độ', '270 độ'], correct: '360 độ', explanation: 'Tổng các góc của tứ giác bằng 360 độ.' },
      { id: 't8_c3_q2', type: 'true_false', text: 'Hình thang có hai cạnh bên bằng nhau luôn là hình thang cân.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Hình bình hành cũng có hai cạnh bên bằng nhau nhưng không phải là hình thang cân.' },
      { id: 't8_c3_q3', type: 'fill_blank', text: 'Hình bình hành có hai đường chéo bằng nhau là hình...', options: [], correct: 'chữ nhật', explanation: 'Dấu hiệu nhận biết hình chữ nhật.' },
      { id: 't8_c3_q4', type: 'mcq', text: 'Tứ giác có 4 cạnh bằng nhau là hình gì?', options: ['Hình thoi', 'Hình vuông', 'Hình chữ nhật', 'Hình bình hành'], correct: 'Hình thoi', explanation: 'Theo định nghĩa của hình thoi.' },
      { id: 't8_c3_q5', type: 'mcq', text: 'Đường trung bình của tam giác có tính chất gì?', options: ['Song song với cạnh thứ ba và bằng nửa cạnh ấy', 'Vuông góc với cạnh thứ ba', 'Bằng cạnh thứ ba', 'Đi qua trọng tâm tam giác'], correct: 'Song song với cạnh thứ ba và bằng nửa cạnh ấy', explanation: 'Tính chất đường trung bình của tam giác.' }
    ]
  },
  // Ngữ Văn 8
  {
    id: 'van8_ch1',
    title: 'Ngữ Văn 8 - Chương 1: Câu chuyện của lịch sử',
    subject: 'Ngữ Văn',
    grade: 8,
    chapter: 1,
    questions: [
      { id: 'v8_c1_q1', type: 'mcq', text: 'Văn bản "Lá cờ thêu sáu chữ vàng" viết về vị anh hùng nào?', options: ['Trần Quốc Toản', 'Trần Hưng Đạo', 'Lê Lợi', 'Quang Trung'], correct: 'Trần Quốc Toản', explanation: 'Truyện kể về tấm gương tuổi trẻ tài cao, yêu nước Trần Quốc Toản.' },
      { id: 'v8_c1_q2', type: 'true_false', text: 'Tác giả của "Lá cờ thêu sáu chữ vàng" là Nguyễn Huy Tưởng.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Nhà văn Nguyễn Huy Tưởng là tác giả của tác phẩm này.' },
      { id: 'v8_c1_q3', type: 'fill_blank', text: 'Trần Quốc Toản vì tức giận không được dự bàn việc nước đã bóp nát quả... trong tay.', options: [], correct: 'cam', explanation: 'Chi tiết bóp nát quả cam thể hiện lòng căm thù giặc và chí khí của Trần Quốc Toản.' },
      { id: 'v8_c1_q4', type: 'mcq', text: 'Sáu chữ vàng trên lá cờ của Trần Quốc Toản là gì?', options: ['Phá cường địch, báo hoàng ân', 'Sát thát', 'Nam quốc sơn hà', 'Bình Ngô đại cáo'], correct: 'Phá cường địch, báo hoàng ân', explanation: 'Nghĩa là: Phá giặc mạnh, báo ơn vua.' },
      { id: 'v8_c1_q5', type: 'mcq', text: 'Truyện lịch sử có đặc điểm gì?', options: ['Dựa trên sự kiện và nhân vật lịch sử có thật', 'Hoàn toàn hư cấu', 'Chỉ viết về thế giới thần tiên', 'Nhân vật là các loài vật'], correct: 'Dựa trên sự kiện và nhân vật lịch sử có thật', explanation: 'Truyện lịch sử tái hiện lại lịch sử thông qua nghệ thuật văn chương.' }
    ]
  },
  {
    id: 'van8_ch2',
    title: 'Ngữ Văn 8 - Chương 2: Vẻ đẹp cổ điển',
    subject: 'Ngữ Văn',
    grade: 8,
    chapter: 2,
    questions: [
      { id: 'v8_c2_q1', type: 'mcq', text: 'Bài thơ "Thu điếu" (Câu cá mùa thu) của tác giả nào?', options: ['Nguyễn Khuyến', 'Nguyễn Trãi', 'Hồ Xuân Hương', 'Nguyễn Du'], correct: 'Nguyễn Khuyến', explanation: 'Nguyễn Khuyến là tác giả chùm thơ thu, trong đó có Thu điếu.' },
      { id: 'v8_c2_q2', type: 'true_false', text: 'Nguyễn Khuyến được mệnh danh là "nhà thơ của làng cảnh Việt Nam".', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Thơ ông viết rất hay và chân thực về cảnh sắc nông thôn Bắc Bộ.' },
      { id: 'v8_c2_q3', type: 'fill_blank', text: 'Ao thu lạnh lẽo nước trong veo / Một chiếc thuyền câu bé ...', options: [], correct: 'tẻo teo', explanation: 'Câu thơ trong bài Thu điếu.' },
      { id: 'v8_c2_q4', type: 'mcq', text: 'Bài thơ "Thu điếu" được viết theo thể thơ nào?', options: ['Thất ngôn bát cú Đường luật', 'Lục bát', 'Song thất lục bát', 'Ngũ ngôn'], correct: 'Thất ngôn bát cú Đường luật', explanation: 'Thể thơ đặc trưng của thi ca trung đại.' },
      { id: 'v8_c2_q5', type: 'mcq', text: 'Màu sắc nào không xuất hiện trong bài "Thu điếu"?', options: ['Màu đỏ (rực rỡ)', 'Màu xanh (xanh ngắt)', 'Màu vàng (vàng hoe)', 'Màu trong (trong veo)'], correct: 'Màu đỏ (rực rỡ)', explanation: 'Bài thơ mang gam màu xanh, dịu nhẹ, không có màu đỏ rực rỡ.' }
    ]
  },
  {
    id: 'van8_ch3',
    title: 'Ngữ Văn 8 - Chương 3: Lời sông núi',
    subject: 'Ngữ Văn',
    grade: 8,
    chapter: 3,
    questions: [
      { id: 'v8_c3_q1', type: 'mcq', text: 'Văn bản "Hịch tướng sĩ" của tác giả nào?', options: ['Trần Quốc Tuấn', 'Lý Thường Kiệt', 'Nguyễn Trãi', 'Trần Quang Khải'], correct: 'Trần Quốc Tuấn', explanation: 'Hưng Đạo Đại vương Trần Quốc Tuấn viết để khích lệ tướng sĩ.' },
      { id: 'v8_c3_q2', type: 'true_false', text: '"Hịch tướng sĩ" được viết trước cuộc kháng chiến chống quân Mông - Nguyên lần thứ 2.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Viết để động viên tinh thần quân sĩ trước giặc ngoại xâm.' },
      { id: 'v8_c3_q3', type: 'fill_blank', text: 'Thể văn "hịch" thường được vua chúa, tướng lĩnh dùng để... quân sĩ.', options: [], correct: 'kêu gọi', explanation: 'Hịch dùng để khích lệ, kêu gọi, thuyết phục.' },
      { id: 'v8_c3_q4', type: 'mcq', text: 'Mục đích chính của "Hịch tướng sĩ" là gì?', options: ['Khơi dậy lòng yêu nước, căm thù giặc và khích lệ tinh thần học tập Binh thư yếu lược', 'Ca ngợi vẻ đẹp đất nước', 'Kể lại chiến công của tác giả', 'Bàn về đạo lý làm người'], correct: 'Khơi dậy lòng yêu nước, căm thù giặc và khích lệ tinh thần học tập Binh thư yếu lược', explanation: 'Đó là mục đích thiết thực và sâu xa của bài hịch.' },
      { id: 'v8_c3_q5', type: 'mcq', text: 'Đặc điểm nổi bật trong nghệ thuật lập luận của bài Hịch là gì?', options: ['Chặt chẽ, sắc bén, kết hợp hài hòa giữa lí lẽ và tình cảm', 'Chỉ dùng lý trí khô khan', 'Lời lẽ nhẹ nhàng, bay bổng', 'Cốt truyện li kì, hấp dẫn'], correct: 'Chặt chẽ, sắc bén, kết hợp hài hòa giữa lí lẽ và tình cảm', explanation: 'Sức thuyết phục mạnh mẽ từ sự kết hợp giữa lí và tình.' }
    ]
  },

  // LỚP 9
  // Toán 9
  {
    id: 'toan9_ch1',
    title: 'Toán 9 - Chương 1: Phương trình và hệ phương trình bậc nhất',
    subject: 'Toán',
    grade: 9,
    chapter: 1,
    questions: [
      { id: 't9_c1_q1', type: 'mcq', text: 'Phương trình bậc nhất hai ẩn có dạng tổng quát là gì?', options: ['ax + by = c (a, b không đồng thời bằng 0)', 'ax^2 + bx + c = 0', 'y = ax + b', 'ax + b = 0'], correct: 'ax + by = c (a, b không đồng thời bằng 0)', explanation: 'Định nghĩa phương trình bậc nhất hai ẩn.' },
      { id: 't9_c1_q2', type: 'true_false', text: 'Hệ phương trình bậc nhất hai ẩn có thể có vô số nghiệm.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Nếu hai đường thẳng biểu diễn trùng nhau thì hệ có vô số nghiệm.' },
      { id: 't9_c1_q3', type: 'fill_blank', text: 'Cặp số (1; 2) là một nghiệm của phương trình 2x + y = ...', options: [], correct: '4', explanation: 'Thay x=1, y=2 vào: 2(1) + 2 = 4.' },
      { id: 't9_c1_q4', type: 'mcq', text: 'Phương pháp nào thường dùng để giải hệ phương trình bậc nhất hai ẩn?', options: ['Phương pháp thế và phương pháp cộng đại số', 'Phương pháp đặt ẩn phụ', 'Phương pháp nhóm hạng tử', 'Phương pháp phân tích đa thức thành nhân tử'], correct: 'Phương pháp thế và phương pháp cộng đại số', explanation: 'Đây là hai phương pháp cơ bản nhất.' },
      { id: 't9_c1_q5', type: 'mcq', text: 'Hai đường thẳng cắt nhau thì hệ phương trình tương ứng có bao nhiêu nghiệm?', options: ['1 nghiệm duy nhất', 'Vô nghiệm', 'Vô số nghiệm', '2 nghiệm'], correct: '1 nghiệm duy nhất', explanation: 'Mỗi giao điểm biểu diễn một nghiệm của hệ.' }
    ]
  },
  {
    id: 'toan9_ch2',
    title: 'Toán 9 - Chương 2: Phương trình và bất phương trình bậc nhất một ẩn',
    subject: 'Toán',
    grade: 9,
    chapter: 2,
    questions: [
      { id: 't9_c2_q1', type: 'mcq', text: 'Bất phương trình bậc nhất một ẩn có dạng nào sau đây?', options: ['ax + b < 0 (hoặc >, <=, >=) với a khác 0', 'ax^2 + bx + c > 0', 'ax + by > c', 'x^3 - 1 < 0'], correct: 'ax + b < 0 (hoặc >, <=, >=) với a khác 0', explanation: 'Dạng tổng quát của bất phương trình bậc nhất một ẩn.' },
      { id: 't9_c2_q2', type: 'true_false', text: 'Khi nhân hai vế của một bất phương trình với cùng một số âm, ta phải giữ nguyên chiều bất phương trình.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Khi nhân với số âm, ta phải đổi chiều bất phương trình.' },
      { id: 't9_c2_q3', type: 'fill_blank', text: 'Nghiệm của bất phương trình 2x > 6 là x > ...', options: [], correct: '3', explanation: 'Chia 2 vế cho 2 (số dương), ta được x > 3.' },
      { id: 't9_c2_q4', type: 'mcq', text: 'Tập nghiệm của bất phương trình x >= 2 biểu diễn trên trục số là:', options: ['Nửa đường thẳng gốc 2, lấy cả điểm 2', 'Nửa đường thẳng gốc 2, không lấy điểm 2', 'Đoạn thẳng từ 0 đến 2', 'Khoảng từ -vô cực đến 2'], correct: 'Nửa đường thẳng gốc 2, lấy cả điểm 2', explanation: 'Dấu ngoặc vuông tại 2 và phần lấy nằm bên phải.' },
      { id: 't9_c2_q5', type: 'mcq', text: 'Hai bất phương trình tương đương là hai bất phương trình:', options: ['Có cùng tập nghiệm', 'Cùng bậc', 'Cùng ẩn số', 'Có cùng hệ số a'], correct: 'Có cùng tập nghiệm', explanation: 'Định nghĩa hai bất phương trình tương đương.' }
    ]
  },
  {
    id: 'toan9_ch3',
    title: 'Toán 9 - Chương 3: Căn thức bậc hai và căn thức bậc ba',
    subject: 'Toán',
    grade: 9,
    chapter: 3,
    questions: [
      { id: 't9_c3_q1', type: 'mcq', text: 'Điều kiện xác định của biểu thức căn bậc hai của A là gì?', options: ['A >= 0', 'A > 0', 'A khác 0', 'Mọi số thực A'], correct: 'A >= 0', explanation: 'Căn bậc hai chỉ xác định với biểu thức không âm.' },
      { id: 't9_c3_q2', type: 'true_false', text: 'Căn bậc hai của (a^2) luôn bằng a.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Căn bậc hai của (a^2) bằng giá trị tuyệt đối của a.' },
      { id: 't9_c3_q3', type: 'fill_blank', text: 'Căn bậc ba của -8 là...', options: [], correct: '-2', explanation: '(-2)^3 = -8.' },
      { id: 't9_c3_q4', type: 'mcq', text: 'Tính căn bậc hai của 16 * 25 ta được kết quả là:', options: ['20', '40', '100', '10'], correct: '20', explanation: 'Căn(16) * Căn(25) = 4 * 5 = 20.' },
      { id: 't9_c3_q5', type: 'mcq', text: 'Khử mẫu của biểu thức lấy căn: căn(1/2) bằng:', options: ['căn(2)/2', '1/2', 'căn(2)', '1'], correct: 'căn(2)/2', explanation: 'Nhân tử và mẫu với 2 dưới căn.' }
    ]
  },
  // Ngữ Văn 9
  {
    id: 'van9_ch1',
    title: 'Ngữ Văn 9 - Chương 1: Khúc tráng ca',
    subject: 'Ngữ Văn',
    grade: 9,
    chapter: 1,
    questions: [
      { id: 'v9_c1_q1', type: 'mcq', text: 'Bài thơ "Đồng chí" là của tác giả nào?', options: ['Chính Hữu', 'Phạm Tiến Duật', 'Quang Dũng', 'Tố Hữu'], correct: 'Chính Hữu', explanation: 'Bài thơ Đồng chí do nhà thơ Chính Hữu sáng tác.' },
      { id: 'v9_c1_q2', type: 'true_false', text: 'Cơ sở hình thành tình đồng chí trong bài thơ là từ sự chung hoàn cảnh xuất thân.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Từ những miền quê nghèo khó, họ cùng chung lý tưởng và nhiệm vụ.' },
      { id: 'v9_c1_q3', type: 'fill_blank', text: 'Đầu súng trăng ...', options: [], correct: 'treo', explanation: 'Hình ảnh thơ tuyệt đẹp ở cuối bài thơ Đồng chí.' },
      { id: 'v9_c1_q4', type: 'mcq', text: 'Hình ảnh "Đầu súng trăng treo" mang ý nghĩa gì?', options: ['Biểu tượng của vẻ đẹp tâm hồn lính và sự kết hợp giữa hiện thực và lãng mạn', 'Nói về sự khó khăn của thời tiết', 'Chỉ nói về một đêm sáng trăng', 'Thể hiện sự mệt mỏi của người lính'], correct: 'Biểu tượng của vẻ đẹp tâm hồn lính và sự kết hợp giữa hiện thực và lãng mạn', explanation: 'Biểu tượng cao đẹp của tình đồng chí, hòa bình và chiến tranh.' },
      { id: 'v9_c1_q5', type: 'mcq', text: 'Bài thơ "Đồng chí" sáng tác vào thời kì nào?', options: ['Kháng chiến chống Pháp', 'Kháng chiến chống Mỹ', 'Sau năm 1975', 'Trước Cách mạng tháng Tám'], correct: 'Kháng chiến chống Pháp', explanation: 'Sáng tác năm 1948, thời kì đầu cuộc kháng chiến chống Pháp.' }
    ]
  },
  {
    id: 'van9_ch2',
    title: 'Ngữ Văn 9 - Chương 2: Cảnh quan quê hương',
    subject: 'Ngữ Văn',
    grade: 9,
    chapter: 2,
    questions: [
      { id: 'v9_c2_q1', type: 'mcq', text: 'Bài thơ "Đoàn thuyền đánh cá" của tác giả nào?', options: ['Huy Cận', 'Tế Hanh', 'Chế Lan Viên', 'Xuân Diệu'], correct: 'Huy Cận', explanation: 'Tác giả là nhà thơ Huy Cận.' },
      { id: 'v9_c2_q2', type: 'true_false', text: 'Đoàn thuyền đánh cá ra khơi vào buổi sáng sớm.', options: ['Đúng', 'Sai'], correct: 'Sai', explanation: 'Đoàn thuyền ra khơi khi hoàng hôn xuống (Mặt trời xuống biển như hòn lửa).' },
      { id: 'v9_c2_q3', type: 'fill_blank', text: 'Mặt trời xuống biển như hòn ...', options: [], correct: 'lửa', explanation: 'Câu thơ mở đầu bài Đoàn thuyền đánh cá.' },
      { id: 'v9_c2_q4', type: 'mcq', text: 'Bài thơ "Đoàn thuyền đánh cá" mang âm hưởng gì?', options: ['Khỏe khoắn, hào hùng, vui tươi', 'Buồn bã, cô đơn', 'Thanh tĩnh, nhẹ nhàng', 'Bi tráng, trầm hùng'], correct: 'Khỏe khoắn, hào hùng, vui tươi', explanation: 'Là khúc ca lao động đầy tự hào.' },
      { id: 'v9_c2_q5', type: 'mcq', text: 'Cảm hứng chủ đạo của bài thơ "Đoàn thuyền đánh cá" là gì?', options: ['Cảm hứng về thiên nhiên vũ trụ và con người lao động mới', 'Tình yêu đôi lứa', 'Tình cảm gia đình', 'Nỗi nhớ quê hương'], correct: 'Cảm hứng về thiên nhiên vũ trụ và con người lao động mới', explanation: 'Khắc họa sự hòa hợp giữa thiên nhiên hùng vĩ và con người làm chủ biển khơi.' }
    ]
  },
  {
    id: 'van9_ch3',
    title: 'Ngữ Văn 9 - Chương 3: Tiếng gọi thiên nhiên',
    subject: 'Ngữ Văn',
    grade: 9,
    chapter: 3,
    questions: [
      { id: 'v9_c3_q1', type: 'mcq', text: 'Bài thơ "Mùa xuân nho nhỏ" của tác giả nào?', options: ['Thanh Hải', 'Viễn Phương', 'Hữu Thỉnh', 'Y Phương'], correct: 'Thanh Hải', explanation: 'Bài thơ do Thanh Hải sáng tác những ngày cuối đời.' },
      { id: 'v9_c3_q2', type: 'true_false', text: 'Hình ảnh "mùa xuân nho nhỏ" là một ẩn dụ chỉ những cống hiến thầm lặng của mỗi người cho đất nước.', options: ['Đúng', 'Sai'], correct: 'Đúng', explanation: 'Thể hiện khát vọng cống hiến chân thành, không khoa trương.' },
      { id: 'v9_c3_q3', type: 'fill_blank', text: 'Mọc giữa dòng sông xanh / Một bông hoa ... biếc', options: [], correct: 'tím', explanation: 'Màu tím đặc trưng của xứ Huế.' },
      { id: 'v9_c3_q4', type: 'mcq', text: 'Nhạc điệu của bài thơ "Mùa xuân nho nhỏ" mang âm hưởng của làn điệu dân ca nào?', options: ['Dân ca Nam Bộ', 'Dân ca Quan họ', 'Dân ca Huế', 'Hát xoan'], correct: 'Dân ca Huế', explanation: 'Mang âm hưởng nhẹ nhàng, tha thiết của ca Huế.' },
      { id: 'v9_c3_q5', type: 'mcq', text: 'Tâm nguyện của nhà thơ trong "Mùa xuân nho nhỏ" là gì?', options: ['Muốn làm con chim hót, cành hoa, nốt trầm xao xuyến để dâng hiến cho đời', 'Muốn đi khắp nơi để ngắm cảnh', 'Muốn trở về tuổi thơ', 'Muốn sống một cuộc đời giàu sang'], correct: 'Muốn làm con chim hót, cành hoa, nốt trầm xao xuyến để dâng hiến cho đời', explanation: 'Khát vọng cống hiến thiết tha, cảm động.' }
    ]
  }
,
  // Tiếng Anh và KHTN

  {
    "id": "anh6_c1",
    "title": "Tiếng Anh 6 - Unit 1: My New School",
    "subject": "Tiếng Anh",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Choose the word whose underlined part is pronounced differently: compass, homework, someone, love (o)",
        "options": [
          "compass",
          "homework",
          "someone",
          "love"
        ],
        "correct": "homework",
        "explanation": "'homework' has /əʊ/ sound, others have /ʌ/."
      },
      {
        "id": "q2",
        "type": "fill_blank",
        "text": "Students in my school often ______ football in the afternoon.",
        "options": [],
        "correct": "play",
        "explanation": "We use 'play' with sports like football."
      },
      {
        "id": "q3",
        "type": "true_false",
        "text": "You use a calculator to draw circles.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "You use a compass to draw circles."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "My friend __________ English and Math on Tuesday.",
        "options": [
          "have",
          "has",
          "having",
          "to have"
        ],
        "correct": "has",
        "explanation": "'My friend' is singular, so we use 'has'."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "A __________ is a place where we go to borrow books.",
        "options": [],
        "correct": "library",
        "explanation": "Library is the place for borrowing books."
      }
    ]
  },
  {
    "id": "khtn6_c1",
    "title": "KHTN 6 - Chương 1: Mở đầu về khoa học tự nhiên",
    "subject": "KHTN",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Hoạt động nào sau đây KHÔNG phải là hoạt động nghiên cứu khoa học?",
        "options": [
          "Tìm hiểu vũ trụ",
          "Sản xuất phân bón",
          "Trồng hoa trong vườn nhà",
          "Nghiên cứu vaccine"
        ],
        "correct": "Trồng hoa trong vườn nhà",
        "explanation": "Trồng hoa là hoạt động thực tiễn thông thường, không mang tính chất nghiên cứu."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Khoa học tự nhiên nghiên cứu về các hiện tượng xã hội và con người.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Khoa học tự nhiên nghiên cứu về thế giới tự nhiên, không phải hiện tượng xã hội."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Kính ______ quang học được dùng để quan sát các vật rất nhỏ.",
        "options": [],
        "correct": "hiển vi",
        "explanation": "Kính hiển vi quang học giúp phóng to hình ảnh các vật thể nhỏ."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Dụng cụ nào dùng để đo thể tích chất lỏng?",
        "options": [
          "Thước cuộn",
          "Cân đồng hồ",
          "Cốc đong",
          "Kính lúp"
        ],
        "correct": "Cốc đong",
        "explanation": "Cốc đong, ống đong dùng để đo thể tích chất lỏng."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "Đơn vị đo độ dài hợp pháp của nước ta là ______.",
        "options": [],
        "correct": "mét",
        "explanation": "Mét (m) là đơn vị đo độ dài tiêu chuẩn."
      }
    ]
  },
  {
    "id": "anh7_c1",
    "title": "Tiếng Anh 7 - Unit 1: Hobbies",
    "subject": "Tiếng Anh",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "My sister likes ______ models in her free time.",
        "options": [
          "make",
          "makes",
          "making",
          "made"
        ],
        "correct": "making",
        "explanation": "After 'likes', we use V-ing (making)."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Collecting stamps is a cheap hobby if you just collect them from letters you receive.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "It's cheap because you don't have to buy them."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "I think playing board games is ______ because I can play it with my friends.",
        "options": [],
        "correct": "interesting",
        "explanation": "Interesting fits the context of enjoying a game with friends."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Which word has a different sound: bird, girl, first, sister",
        "options": [
          "bird",
          "girl",
          "first",
          "sister"
        ],
        "correct": "sister",
        "explanation": "'sister' has /ə/ while the others have /ɜː/."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "He usually ______ judo every weekend.",
        "options": [],
        "correct": "does",
        "explanation": "We use 'do' with judo, so third person singular is 'does'."
      }
    ]
  },
  {
    "id": "khtn7_c1",
    "title": "KHTN 7 - Chương 1: Nguyên tử - Nguyên tố hóa học",
    "subject": "KHTN",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Hạt nhân nguyên tử được cấu tạo bởi các hạt nào?",
        "options": [
          "Proton và electron",
          "Proton và neutron",
          "Neutron và electron",
          "Chỉ có proton"
        ],
        "correct": "Proton và neutron",
        "explanation": "Hạt nhân chứa proton mang điện tích dương và neutron không mang điện."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Khối lượng của nguyên tử tập trung hầu hết ở lớp vỏ electron.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Khối lượng nguyên tử tập trung ở hạt nhân do khối lượng electron rất nhỏ."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Trong nguyên tử, số lượng hạt proton luôn bằng số lượng hạt ______.",
        "options": [],
        "correct": "electron",
        "explanation": "Nguyên tử trung hòa về điện nên số p bằng số e."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Kí hiệu hóa học của nguyên tố Oxygen là gì?",
        "options": [
          "O",
          "Ox",
          "C",
          "H"
        ],
        "correct": "O",
        "explanation": "Oxygen có kí hiệu hóa học là O."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "Nguyên tố hóa học là tập hợp các nguyên tử cùng loại, có cùng số hạt ______ trong hạt nhân.",
        "options": [],
        "correct": "proton",
        "explanation": "Nguyên tố hóa học được đặc trưng bởi số proton."
      }
    ]
  },
  {
    "id": "anh8_c1",
    "title": "Tiếng Anh 8 - Unit 1: Leisure Time",
    "subject": "Tiếng Anh",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "I fancy ______ origami when I have free time.",
        "options": [
          "fold",
          "to fold",
          "folding",
          "folded"
        ],
        "correct": "folding",
        "explanation": "After 'fancy', we use V-ing."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "'DIY' stands for 'Do It Yourself'.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "DIY is a common acronym for Do It Yourself."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Many teenagers are addicted ______ social media.",
        "options": [],
        "correct": "to",
        "explanation": "The adjective 'addicted' is followed by the preposition 'to'."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "She dislikes ______ because it takes too much time.",
        "options": [
          "window shopping",
          "to window shopping",
          "window shop",
          "window shopped"
        ],
        "correct": "window shopping",
        "explanation": "After 'dislikes', we use V-ing."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "Playing sports helps you keep ______ and healthy.",
        "options": [],
        "correct": "fit",
        "explanation": "'Keep fit' is a common collocation."
      }
    ]
  },
  {
    "id": "khtn8_c1",
    "title": "KHTN 8 - Chương 1: Phản ứng hóa học",
    "subject": "KHTN",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Hiện tượng nào sau đây là hiện tượng hóa học?",
        "options": [
          "Nước đá tan chảy",
          "Đun sôi nước",
          "Sắt gỉ sét",
          "Thủy tinh vỡ"
        ],
        "correct": "Sắt gỉ sét",
        "explanation": "Sắt gỉ sét tạo ra chất mới, là hiện tượng hóa học."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Trong phản ứng hóa học, tổng khối lượng các chất tham gia luôn lớn hơn khối lượng sản phẩm.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Theo định luật bảo toàn khối lượng, tổng khối lượng tham gia bằng tổng khối lượng sản phẩm."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Chất biến đổi trong phản ứng gọi là chất ______.",
        "options": [],
        "correct": "tham gia",
        "explanation": "Chất ban đầu bị biến đổi được gọi là chất tham gia phản ứng (hoặc chất phản ứng)."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Dấu hiệu nhận biết có phản ứng hóa học xảy ra là:",
        "options": [
          "Có chất khí thoát ra",
          "Có sự thay đổi màu sắc",
          "Tạo ra chất kết tủa",
          "Tất cả các ý trên"
        ],
        "correct": "Tất cả các ý trên",
        "explanation": "Phát sinh khí, thay đổi màu, tạo kết tủa đều là dấu hiệu phản ứng hóa học."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "Phản ứng tỏa ______ là phản ứng giải phóng năng lượng ra môi trường.",
        "options": [],
        "correct": "nhiệt",
        "explanation": "Phản ứng tỏa nhiệt là phản ứng sinh ra nhiệt lượng."
      }
    ]
  },
  {
    "id": "anh9_c1",
    "title": "Tiếng Anh 9 - Unit 1: Local Environment",
    "subject": "Tiếng Anh",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "They ______ this beautiful conical hat in Hue.",
        "options": [
          "made",
          "make",
          "making",
          "are making"
        ],
        "correct": "make",
        "explanation": "Present simple is used for general facts (they make hats in Hue)."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "A craftsman is a person who works with their hands to make things.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "This is the definition of a craftsman."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "We look ______ to seeing you again next week.",
        "options": [],
        "correct": "forward",
        "explanation": "'Look forward to' means expecting something eagerly."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "She turned ______ the invitation because she was too busy.",
        "options": [
          "up",
          "down",
          "on",
          "off"
        ],
        "correct": "down",
        "explanation": "'Turn down' means to refuse."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "Bat Trang is one of the most famous ______ villages in Vietnam.",
        "options": [],
        "correct": "craft",
        "explanation": "Bat Trang is a traditional craft village."
      }
    ]
  },
  {
    "id": "khtn9_c1",
    "title": "KHTN 9 - Chương 1: Năng lượng cơ học",
    "subject": "KHTN",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Động năng của một vật phụ thuộc vào yếu tố nào?",
        "options": [
          "Chỉ khối lượng",
          "Chỉ vận tốc",
          "Khối lượng và vận tốc",
          "Khối lượng và độ cao"
        ],
        "correct": "Khối lượng và vận tốc",
        "explanation": "Động năng Wđ = 1/2.m.v^2 nên phụ thuộc khối lượng và vận tốc."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Vật ở trên cao luôn có thế năng hấp dẫn so với mặt đất.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Thế năng hấp dẫn phụ thuộc vào độ cao so với mốc (thường chọn mặt đất)."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Cơ năng của vật bằng tổng ______ và thế năng của vật.",
        "options": [],
        "correct": "động năng",
        "explanation": "Cơ năng = động năng + thế năng."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Khi vật rơi tự do, năng lượng chuyển hóa như thế nào?",
        "options": [
          "Động năng thành thế năng",
          "Thế năng thành động năng",
          "Nhiệt năng thành cơ năng",
          "Động năng giảm"
        ],
        "correct": "Thế năng thành động năng",
        "explanation": "Khi rơi, độ cao giảm (thế năng giảm) và vận tốc tăng (động năng tăng)."
      },
      {
        "id": "q5",
        "type": "fill_blank",
        "text": "Đơn vị đo cơ năng là ______.",
        "options": [],
        "correct": "Jun",
        "explanation": "Đơn vị đo năng lượng và công trong hệ SI là Jun (Joule)."
      }
    ]
  }
,
  // Lịch sử - Địa lí và GDCD

  {
    "id": "lsdl6_c1",
    "title": "Lịch sử - Địa lí 6 - Chương 1: Hệ thống kinh vĩ tuyến. Tọa độ địa lí",
    "subject": "Lịch sử - Địa lí",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Kinh tuyến là những đường:",
        "options": [
          "Nối liền hai điểm cực Bắc và cực Nam trên quả địa cầu.",
          "Vòng tròn bao quanh quả địa cầu.",
          "Vuông góc với trục Trái Đất.",
          "Song song với Xích đạo."
        ],
        "correct": "Nối liền hai điểm cực Bắc và cực Nam trên quả địa cầu.",
        "explanation": "Kinh tuyến là các nửa vòng tròn nối hai cực trên bề mặt quả địa cầu."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Đường Xích đạo là vĩ tuyến lớn nhất trên quả địa cầu.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Xích đạo là vòng tròn lớn nhất chia Trái Đất thành hai bán cầu Bắc và Nam."
      },
      {
        "id": "q3",
        "type": "mcq",
        "text": "Tọa độ địa lí của một điểm là:",
        "options": [
          "Kinh độ của điểm đó.",
          "Vĩ độ của điểm đó.",
          "Kinh độ và vĩ độ của điểm đó.",
          "Độ cao của điểm đó so với mực nước biển."
        ],
        "correct": "Kinh độ và vĩ độ của điểm đó.",
        "explanation": "Tọa độ địa lí của một điểm được xác định bởi kinh độ và vĩ độ của điểm đó."
      },
      {
        "id": "q4",
        "type": "fill_blank",
        "text": "Kinh tuyến gốc có số độ là ... độ.",
        "options": [],
        "correct": "0",
        "explanation": "Kinh tuyến đi qua đài thiên văn Greenwich được chọn là kinh tuyến gốc (0 độ)."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Mạng lưới kinh, vĩ tuyến giúp xác định chính xác vị trí của bất kì điểm nào trên Trái Đất.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Mạng lưới tọa độ tạo bởi các kinh tuyến và vĩ tuyến là hệ tọa độ chung cho toàn cầu."
      }
    ]
  },
  {
    "id": "gdcd6_c1",
    "title": "GDCD 6 - Chương 1: Tự hào về truyền thống gia đình, dòng họ",
    "subject": "GDCD",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Hành vi nào dưới đây thể hiện sự giữ gìn và phát huy truyền thống gia đình, dòng họ?",
        "options": [
          "Xấu hổ vì gia đình nghèo.",
          "Cố gắng học tập tốt để làm rạng rỡ gia đình.",
          "Che giấu việc làm sai trái của người thân.",
          "Từ bỏ nghề truyền thống của gia đình vì thấy vất vả."
        ],
        "correct": "Cố gắng học tập tốt để làm rạng rỡ gia đình.",
        "explanation": "Học tập tốt, sống lương thiện là cách thiết thực nhất để tiếp nối truyền thống tốt đẹp."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Chỉ có những gia đình giàu có mới có truyền thống tốt đẹp để tự hào.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Truyền thống tốt đẹp không phụ thuộc vào sự giàu nghèo mà là những giá trị tinh thần, đạo đức, lao động."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Chúng ta cần biết ơn, trân trọng và tự ... về các truyền thống tốt đẹp của gia đình.",
        "options": [],
        "correct": "hào",
        "explanation": "Tự hào về truyền thống gia đình là thái độ trân trọng các giá trị tốt đẹp."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Truyền thống gia đình, dòng họ có ý nghĩa như thế nào đối với mỗi người?",
        "options": [
          "Tạo ra áp lực lớn trong cuộc sống.",
          "Tiếp thêm sức mạnh, động lực để vươn lên.",
          "Làm mất đi sự tự do cá nhân.",
          "Gây cản trở sự phát triển của xã hội."
        ],
        "correct": "Tiếp thêm sức mạnh, động lực để vươn lên.",
        "explanation": "Truyền thống tốt đẹp là bệ phóng tinh thần giúp mỗi người vững bước."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Truyền thống hiếu học là một trong những truyền thống quý báu của nhiều gia đình, dòng họ ở Việt Nam.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Người Việt Nam luôn coi trọng việc học và coi đó là truyền thống vẻ vang."
      }
    ]
  },
  {
    "id": "lsdl7_c1",
    "title": "Lịch sử - Địa lí 7 - Chương 1: Châu Âu",
    "subject": "Lịch sử - Địa lí",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Châu Âu nằm chủ yếu ở đới khí hậu nào?",
        "options": [
          "Nhiệt đới",
          "Cận nhiệt đới",
          "Ôn đới",
          "Hàn đới"
        ],
        "correct": "Ôn đới",
        "explanation": "Phần lớn diện tích châu Âu nằm trong đới ôn hòa."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Đường bờ biển châu Âu bị cắt xẻ mạnh, tạo thành nhiều bán đảo, vũng vịnh.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Châu Âu có đường bờ biển dài và cắt xẻ mạnh nhất trong các châu lục."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Dãy núi ngăn cách châu Á và châu Âu là dãy núi ...",
        "options": [],
        "correct": "U-ran",
        "explanation": "Dãy U-ran (Ural) được coi là ranh giới tự nhiên giữa châu Âu và châu Á."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Đặc điểm dân cư nổi bật của châu Âu hiện nay là:",
        "options": [
          "Dân số tăng nhanh.",
          "Cơ cấu dân số trẻ.",
          "Cơ cấu dân số già.",
          "Tỉ lệ gia tăng tự nhiên rất cao."
        ],
        "correct": "Cơ cấu dân số già.",
        "explanation": "Châu Âu có tỉ lệ sinh thấp và tuổi thọ cao, dẫn đến dân số già hóa."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Đồng bằng chiếm phần lớn diện tích của châu Âu.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Đồng bằng chiếm khoảng 2/3 diện tích lãnh thổ châu Âu."
      }
    ]
  },
  {
    "id": "gdcd7_c1",
    "title": "GDCD 7 - Chương 1: Tự hào về truyền thống quê hương",
    "subject": "GDCD",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Hành động nào sau đây KHÔNG thể hiện niềm tự hào về truyền thống quê hương?",
        "options": [
          "Giới thiệu cảnh đẹp quê hương với bạn bè quốc tế.",
          "Tích cực tham gia các lễ hội truyền thống của làng.",
          "Chê bai các làn điệu dân ca của quê hương là lạc hậu.",
          "Bảo vệ các di tích lịch sử tại địa phương."
        ],
        "correct": "Chê bai các làn điệu dân ca của quê hương là lạc hậu.",
        "explanation": "Chê bai di sản văn hóa là đi ngược lại với việc gìn giữ và tự hào về quê hương."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Mỗi địa phương đều có những truyền thống tốt đẹp riêng về văn hóa, lịch sử.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Việt Nam có 54 dân tộc và vô vàn vùng miền, mỗi nơi đều có bản sắc riêng."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Giữ gìn và phát huy truyền thống quê hương là trách nhiệm của ...",
        "options": [],
        "correct": "mọi người",
        "explanation": "Đó không chỉ là việc của người lớn mà của tất cả công dân, kể cả học sinh."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Ý nghĩa của việc giữ gìn truyền thống quê hương là gì?",
        "options": [
          "Góp phần làm phong phú bản sắc văn hóa dân tộc.",
          "Giúp con người trở nên kiêu ngạo, coi thường nơi khác.",
          "Làm cho kinh tế địa phương đi xuống.",
          "Gây lãng phí thời gian và tiền bạc."
        ],
        "correct": "Góp phần làm phong phú bản sắc văn hóa dân tộc.",
        "explanation": "Truyền thống quê hương là mảnh ghép tạo nên bức tranh văn hóa dân tộc đa dạng."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Học sinh còn nhỏ tuổi nên chưa cần quan tâm đến việc giữ gìn truyền thống quê hương.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Học sinh có thể góp phần qua những việc nhỏ như tìm hiểu lịch sử, bảo vệ cảnh quan,..."
      }
    ]
  },
  {
    "id": "lsdl8_c1",
    "title": "Lịch sử - Địa lí 8 - Chương 1: Châu Á",
    "subject": "Lịch sử - Địa lí",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Châu Á là châu lục:",
        "options": [
          "Rộng lớn nhất thế giới.",
          "Rộng thứ hai thế giới, sau châu Mĩ.",
          "Rộng thứ ba thế giới, sau châu Phi và châu Mĩ.",
          "Nhỏ nhất thế giới."
        ],
        "correct": "Rộng lớn nhất thế giới.",
        "explanation": "Với diện tích khoảng 44,4 triệu km2, châu Á là châu lục lớn nhất thế giới."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Châu Á có đầy đủ các đới khí hậu trên Trái Đất.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Do lãnh thổ trải dài từ cực Bắc đến Xích đạo, châu Á có các đới khí hậu từ cực đến xích đạo."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Đỉnh núi cao nhất thế giới nằm ở châu Á là đỉnh ...",
        "options": [],
        "correct": "E-vơ-rét",
        "explanation": "Đỉnh E-vơ-rét (Everest) trên dãy Hi-ma-lay-a là đỉnh núi cao nhất thế giới."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Khu vực nào ở châu Á chịu ảnh hưởng mạnh mẽ nhất của gió mùa?",
        "options": [
          "Tây Á, Trung Á.",
          "Bắc Á, Đông Á.",
          "Đông Á, Đông Nam Á và Nam Á.",
          "Bắc Á, Trung Á."
        ],
        "correct": "Đông Á, Đông Nam Á và Nam Á.",
        "explanation": "Đây là những khu vực có khí hậu gió mùa điển hình nhất trên thế giới."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Sông ngòi ở châu Á phân bố rất đồng đều giữa các khu vực.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Mạng lưới sông ngòi phân bố không đều, tập trung nhiều ở các khu vực có khí hậu gió mùa."
      }
    ]
  },
  {
    "id": "gdcd8_c1",
    "title": "GDCD 8 - Chương 1: Tự hào về truyền thống dân tộc Việt Nam",
    "subject": "GDCD",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Truyền thống nào được coi là cốt lõi và cao quý nhất của dân tộc Việt Nam?",
        "options": [
          "Tôn sư trọng đạo.",
          "Yêu nước.",
          "Hiếu học.",
          "Cần cù lao động."
        ],
        "correct": "Yêu nước.",
        "explanation": "Chủ nghĩa yêu nước là sợi chỉ đỏ xuyên suốt lịch sử tồn tại và phát triển của dân tộc ta."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Việc giữ gìn bản sắc văn hóa dân tộc chỉ có tác dụng trong thời kì phong kiến.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Trong thời kì hội nhập, việc giữ gìn bản sắc càng có ý nghĩa quan trọng để 'hòa nhập không hòa tan'."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Truyền thống dân tộc là những giá trị tốt đẹp được hình thành trong quá trình lịch sử lâu dài của ...",
        "options": [],
        "correct": "dân tộc",
        "explanation": "Truyền thống là những gì kết tinh, lưu truyền qua nhiều thế hệ của cả một quốc gia, dân tộc."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Biểu hiện nào sau đây đi ngược lại truyền thống tốt đẹp của dân tộc?",
        "options": [
          "Tham gia hiến máu nhân đạo.",
          "Tìm hiểu lịch sử chống ngoại xâm của cha ông.",
          "Thái độ sùng ngoại, chê bai hàng hóa và văn hóa trong nước.",
          "Kính trọng người lớn tuổi."
        ],
        "correct": "Thái độ sùng ngoại, chê bai hàng hóa và văn hóa trong nước.",
        "explanation": "Thái độ sùng ngoại, vọng ngoại làm mất đi tinh thần tự tôn dân tộc."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Đoàn kết là một truyền thống sức mạnh giúp dân tộc ta vượt qua mọi thiên tai, địch họa.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Tinh thần 'Tương thân tương ái', 'Lá lành đùm lá rách' luôn được phát huy trong khó khăn."
      }
    ]
  },
  {
    "id": "lsdl9_c1",
    "title": "Lịch sử - Địa lí 9 - Chương 1: Nước Nga và Liên Xô từ năm 1918 đến năm 1945",
    "subject": "Lịch sử - Địa lí",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (Liên Xô) được thành lập vào năm nào?",
        "options": [
          "1917",
          "1918",
          "1922",
          "1924"
        ],
        "correct": "1922",
        "explanation": "Cuối năm 1922, Đại hội Xô viết toàn Nga đã tuyên bố thành lập Liên Xô."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Chính sách kinh tế mới (NEP) do V.I. Lê-nin khởi xướng đã cứu nguy cho nước Nga Xô viết thoát khỏi khủng hoảng trầm trọng.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "NEP thay thế Chính sách cộng sản thời chiến, giúp khôi phục nền kinh tế bị tàn phá sau nội chiến."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Người lãnh đạo Cách mạng tháng Mười Nga vĩ đại là V.I. ...",
        "options": [],
        "correct": "Lê-nin",
        "explanation": "Lê-nin và Đảng Bôn-sê-vích đã lãnh đạo cuộc cách mạng xã hội chủ nghĩa thành công ở Nga."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Thành tựu lớn nhất của công cuộc xây dựng chủ nghĩa xã hội ở Liên Xô (1925-1941) là gì?",
        "options": [
          "Đưa con người lên vũ trụ.",
          "Trở thành cường quốc công nghiệp đứng đầu châu Âu và thứ hai thế giới.",
          "Chế tạo thành công bom nguyên tử.",
          "Xóa bỏ hoàn toàn chế độ tư bản trên thế giới."
        ],
        "correct": "Trở thành cường quốc công nghiệp đứng đầu châu Âu và thứ hai thế giới.",
        "explanation": "Chỉ sau vài kế hoạch 5 năm, Liên Xô từ một nước nông nghiệp lạc hậu đã vươn lên mạnh mẽ."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Liên Xô không có đóng góp gì trong cuộc chiến tranh chống chủ nghĩa phát xít (Chiến tranh thế giới thứ hai).",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Liên Xô là một trong ba trụ cột của phe Đồng minh, lực lượng đi đầu và giữ vai trò quyết định tiêu diệt chủ nghĩa phát xít."
      }
    ]
  },
  {
    "id": "gdcd9_c1",
    "title": "GDCD 9 - Chương 1: Chí công vô tư",
    "subject": "GDCD",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "q1",
        "type": "mcq",
        "text": "Chí công vô tư là phẩm chất đạo đức của con người thể hiện ở việc:",
        "options": [
          "Chỉ quan tâm đến lợi ích của bản thân mình.",
          "Công bằng, không thiên vị, giải quyết công việc theo lẽ phải.",
          "Bao che cho lỗi lầm của người thân.",
          "Làm việc gì cũng phải có thù lao tương xứng."
        ],
        "correct": "Công bằng, không thiên vị, giải quyết công việc theo lẽ phải.",
        "explanation": "Chí công vô tư đòi hỏi sự công minh, chính trực, đặt lợi ích tập thể lên trên cá nhân."
      },
      {
        "id": "q2",
        "type": "true_false",
        "text": "Người chí công vô tư luôn được mọi người tin cậy và kính trọng.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Sự công bằng và minh bạch luôn nhận được sự nể trọng từ xã hội."
      },
      {
        "id": "q3",
        "type": "fill_blank",
        "text": "Chủ tịch Hồ Chí Minh đã căn dặn cán bộ, đảng viên phải 'Cần, kiệm, liêm, chính, chí công vô ...'.",
        "options": [],
        "correct": "tư",
        "explanation": "Đây là tư tưởng đạo đức cốt lõi mà Bác Hồ luôn nhấn mạnh."
      },
      {
        "id": "q4",
        "type": "mcq",
        "text": "Biểu hiện nào dưới đây trái với chí công vô tư?",
        "options": [
          "Bầu cử người có tài năng vào ban cán sự lớp.",
          "Giáo viên chấm điểm công bằng cho tất cả học sinh.",
          "Vì tình cảm cá nhân mà bỏ qua khuyết điểm của bạn.",
          "Dũng cảm đấu tranh chống lại các hành vi tham nhũng."
        ],
        "correct": "Vì tình cảm cá nhân mà bỏ qua khuyết điểm của bạn.",
        "explanation": "Hành động này thể hiện sự thiên vị, đặt tình cảm cá nhân lên trên sự thật và lẽ phải."
      },
      {
        "id": "q5",
        "type": "true_false",
        "text": "Chí công vô tư chỉ là phẩm chất cần thiết đối với những người làm cán bộ lãnh đạo.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Chí công vô tư là phẩm chất cần thiết đối với mọi công dân, học sinh trong cuộc sống hàng ngày."
      }
    ]
  }
,
  // Tin học và Công nghệ

  {
    "id": "tin6_c1",
    "title": "Tin học 6 - Chủ đề 1: Máy tính và cộng đồng",
    "subject": "Tin học",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "t6_q1",
        "type": "mcq",
        "text": "Theo em, đâu là vật mang tin?",
        "options": [
          "A. Tiếng trống trường",
          "B. Cuốn sách",
          "C. Tiếng chim hót",
          "D. Mùi hương hoa"
        ],
        "correct": "B. Cuốn sách",
        "explanation": "Cuốn sách lưu trữ và truyền đạt thông tin có thể nhìn thấy và cầm nắm được, do đó nó là vật mang tin."
      },
      {
        "id": "t6_q2",
        "type": "true_false",
        "text": "Thông tin là những gì đem lại sự hiểu biết cho con người về thế giới xung quanh và về chính mình.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Đây là khái niệm cơ bản về thông tin được học trong sách giáo khoa."
      },
      {
        "id": "t6_q3",
        "type": "fill_blank",
        "text": "Bộ não con người là một bộ phận có chức năng thu nhận và xử lý ___.",
        "options": [],
        "correct": "thông tin",
        "explanation": "Não bộ đóng vai trò trung tâm xử lý thông tin của con người."
      },
      {
        "id": "t6_q4",
        "type": "true_false",
        "text": "Máy tính có khả năng suy nghĩ giống hệt như con người trong mọi tình huống.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Máy tính chỉ hoạt động dựa trên các chương trình và thuật toán do con người lập ra, không thể suy nghĩ giống hệt con người."
      },
      {
        "id": "t6_q5",
        "type": "mcq",
        "text": "Đâu là thiết bị có chức năng xuất thông tin của máy tính?",
        "options": [
          "A. Bàn phím",
          "B. Chuột",
          "C. Màn hình",
          "D. Micro"
        ],
        "correct": "C. Màn hình",
        "explanation": "Màn hình giúp hiển thị thông tin xử lý từ máy tính để người dùng quan sát."
      }
    ]
  },
  {
    "id": "cn6_c1",
    "title": "Công nghệ 6 - Chương 1: Nhà ở",
    "subject": "Công nghệ",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "cn6_q1",
        "type": "mcq",
        "text": "Vai trò chính của nhà ở đối với đời sống con người là gì?",
        "options": [
          "A. Chỉ để che nắng, che mưa",
          "B. Là nơi trú ngụ, sinh hoạt và nghỉ ngơi của con người",
          "C. Chỉ để cất giữ tài sản",
          "D. Là nơi làm việc"
        ],
        "correct": "B. Là nơi trú ngụ, sinh hoạt và nghỉ ngơi của con người",
        "explanation": "Nhà ở đáp ứng nhu cầu sinh hoạt, nghỉ ngơi và bảo vệ con người khỏi tác động của thiên nhiên."
      },
      {
        "id": "cn6_q2",
        "type": "true_false",
        "text": "Nhà sàn là kiểu nhà phổ biến nhất ở các khu vực đồng bằng sông Cửu Long.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Nhà sàn là kiểu kiến trúc phổ biến ở miền núi để tránh thú dữ và ngập lụt, không phải phổ biến nhất ở đồng bằng."
      },
      {
        "id": "cn6_q3",
        "type": "fill_blank",
        "text": "Gạch, ngói, xi măng, thép là các vật liệu ___ dùng trong xây dựng nhà ở.",
        "options": [],
        "correct": "nhân tạo",
        "explanation": "Đây là các vật liệu do con người chế tạo ra, khác với vật liệu tự nhiên như gỗ, tre."
      },
      {
        "id": "cn6_q4",
        "type": "true_false",
        "text": "Phần móng nhà là bộ phận nằm sâu dưới mặt đất, có nhiệm vụ chịu lực cho toàn bộ ngôi nhà.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Móng nhà là kết cấu kỹ thuật nằm dưới cùng của công trình xây dựng, truyền tải trọng lượng xuống nền đất."
      },
      {
        "id": "cn6_q5",
        "type": "mcq",
        "text": "Kiểu kiến trúc nhà nào thường được xây dựng san sát nhau ở các đô thị đông đúc?",
        "options": [
          "A. Nhà biệt thự",
          "B. Nhà sàn",
          "C. Nhà liên kế (nhà ống)",
          "D. Nhà nổi"
        ],
        "correct": "C. Nhà liên kế (nhà ống)",
        "explanation": "Nhà liên kế (nhà ống) giúp tiết kiệm diện tích đất ở các khu đô thị đông dân cư."
      }
    ]
  },
  {
    "id": "tin7_c1",
    "title": "Tin học 7 - Chủ đề 1: Máy tính và cộng đồng",
    "subject": "Tin học",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "t7_q1",
        "type": "mcq",
        "text": "Thiết bị nào sau đây là thiết bị vào của máy tính?",
        "options": [
          "A. Màn hình",
          "B. Máy in",
          "C. Bàn phím",
          "D. Loa"
        ],
        "correct": "C. Bàn phím",
        "explanation": "Bàn phím dùng để nhập dữ liệu (văn bản, lệnh) vào máy tính."
      },
      {
        "id": "t7_q2",
        "type": "true_false",
        "text": "Máy quét (scanner) có chức năng đưa thông tin hình ảnh từ bên ngoài vào trong máy tính.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Máy quét là thiết bị nhập dữ liệu dạng hình ảnh hoặc tài liệu giấy vào máy tính."
      },
      {
        "id": "t7_q3",
        "type": "fill_blank",
        "text": "Màn hình cảm ứng trên điện thoại thông minh thực hiện chức năng của cả thiết bị vào và thiết bị ___.",
        "options": [],
        "correct": "ra",
        "explanation": "Nó vừa hiển thị thông tin (ra) vừa nhận thao tác chạm của người dùng (vào)."
      },
      {
        "id": "t7_q4",
        "type": "true_false",
        "text": "Dữ liệu trong máy tính không thể được truyền ra ngoài nếu không có màn hình.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Dữ liệu có thể được đưa ra qua máy in, loa hoặc cổng mạng, không bắt buộc phải có màn hình."
      },
      {
        "id": "t7_q5",
        "type": "mcq",
        "text": "Loa và tai nghe đóng vai trò là loại thiết bị gì trong hệ thống máy tính?",
        "options": [
          "A. Thiết bị vào",
          "B. Thiết bị ra",
          "C. Thiết bị lưu trữ",
          "D. Thiết bị xử lý"
        ],
        "correct": "B. Thiết bị ra",
        "explanation": "Chúng có chức năng xuất dữ liệu âm thanh từ máy tính ra môi trường bên ngoài."
      }
    ]
  },
  {
    "id": "cn7_c1",
    "title": "Công nghệ 7 - Chương 1: Trồng trọt",
    "subject": "Công nghệ",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "cn7_q1",
        "type": "mcq",
        "text": "Một trong những vai trò quan trọng của trồng trọt đối với đời sống và kinh tế là gì?",
        "options": [
          "A. Cung cấp nguyên liệu cho công nghiệp chế biến",
          "B. Sản xuất phương tiện giao thông",
          "C. Cung cấp vật liệu xây dựng kim loại",
          "D. Thiết kế thời trang"
        ],
        "correct": "A. Cung cấp nguyên liệu cho công nghiệp chế biến",
        "explanation": "Trồng trọt cung cấp nông sản, làm nguyên liệu cho nhiều ngành công nghiệp chế biến."
      },
      {
        "id": "cn7_q2",
        "type": "true_false",
        "text": "Trồng trọt trong nhà kính hoàn toàn không phụ thuộc vào ánh sáng mặt trời tự nhiên.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Trồng trọt trong nhà kính vẫn có thể tận dụng ánh sáng mặt trời, nhưng giúp kiểm soát nhiệt độ và sâu bệnh tốt hơn."
      },
      {
        "id": "cn7_q3",
        "type": "fill_blank",
        "text": "Lúa, ngô, khoai, sắn là các loại cây trồng thuộc nhóm cây cung cấp ___.",
        "options": [],
        "correct": "lương thực",
        "explanation": "Đây là nhóm cây trồng chính cung cấp tinh bột và năng lượng cho con người."
      },
      {
        "id": "cn7_q4",
        "type": "true_false",
        "text": "Sản phẩm của trồng trọt có thể được dùng làm thức ăn cho ngành chăn nuôi.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Ví dụ ngô, sắn, cám gạo... được sử dụng làm thức ăn chăn nuôi rất phổ biến."
      },
      {
        "id": "cn7_q5",
        "type": "mcq",
        "text": "Phương thức trồng trọt nào sau đây giúp chủ động kiểm soát các yếu tố khí hậu, dịch bệnh?",
        "options": [
          "A. Trồng trọt ngoài tự nhiên",
          "B. Trồng trọt luân canh",
          "C. Trồng trọt trong khu nhà kính, nhà lưới",
          "D. Trồng trọt xen canh"
        ],
        "correct": "C. Trồng trọt trong khu nhà kính, nhà lưới",
        "explanation": "Nhà kính, nhà lưới là hệ thống canh tác có kiểm soát môi trường (nhiệt độ, độ ẩm, côn trùng)."
      }
    ]
  },
  {
    "id": "tin8_c1",
    "title": "Tin học 8 - Chủ đề 1: Lịch sử máy tính",
    "subject": "Tin học",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "t8_q1",
        "type": "mcq",
        "text": "Máy tính điện tử thế hệ thứ nhất sử dụng linh kiện điện tử nào làm thành phần chính?",
        "options": [
          "A. Bóng bán dẫn (Transistor)",
          "B. Đèn điện tử chân không",
          "C. Vi mạch (IC)",
          "D. Bộ vi xử lý (Microprocessor)"
        ],
        "correct": "B. Đèn điện tử chân không",
        "explanation": "Thế hệ máy tính đầu tiên (như ENIAC) sử dụng đèn điện tử chân không, có kích thước rất lớn và tiêu thụ nhiều điện."
      },
      {
        "id": "t8_q2",
        "type": "true_false",
        "text": "Sự xuất hiện của bóng bán dẫn (transistor) đã giúp kích thước của máy tính giảm đi đáng kể so với thế hệ thứ nhất.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Bóng bán dẫn nhỏ hơn, mát hơn và tin cậy hơn đèn chân không, là bước ngoặt cho thế hệ máy tính thứ hai."
      },
      {
        "id": "t8_q3",
        "type": "fill_blank",
        "text": "Máy vi tính cá nhân (PC) bắt đầu trở nên phổ biến từ thế hệ máy tính thứ ___.",
        "options": [],
        "correct": "tư",
        "explanation": "Sự ra đời của bộ vi xử lý ở thế hệ thứ 4 đã thu nhỏ máy tính để bàn cho người dùng cá nhân."
      },
      {
        "id": "t8_q4",
        "type": "true_false",
        "text": "Mạng Internet xuất hiện trước khi máy tính điện tử đầu tiên ra đời.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Máy tính điện tử (ENIAC) ra đời năm 1945, còn mạng ARPANET (tiền thân của Internet) ra đời cuối thập niên 1960."
      },
      {
        "id": "t8_q5",
        "type": "mcq",
        "text": "Chiếc máy tính điện tử ENIAC được phát minh vào khoảng thời gian nào?",
        "options": [
          "A. Những năm 1840",
          "B. Những năm 1940",
          "C. Những năm 1970",
          "D. Những năm 1990"
        ],
        "correct": "B. Những năm 1940",
        "explanation": "ENIAC được phát triển trong Thế chiến II và công bố vào năm 1946."
      }
    ]
  },
  {
    "id": "cn8_c1",
    "title": "Công nghệ 8 - Chương 1: Vẽ kĩ thuật",
    "subject": "Công nghệ",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "cn8_q1",
        "type": "mcq",
        "text": "Bản vẽ kĩ thuật được sử dụng chủ yếu để làm gì?",
        "options": [
          "A. Vẽ tranh phong cảnh",
          "B. Thiết kế và chế tạo các sản phẩm công nghiệp",
          "C. Chụp ảnh nghệ thuật",
          "D. Soạn thảo văn bản"
        ],
        "correct": "B. Thiết kế và chế tạo các sản phẩm công nghiệp",
        "explanation": "Bản vẽ kĩ thuật là ngôn ngữ chung trong kĩ thuật, dùng để chế tạo, thi công, lắp ráp."
      },
      {
        "id": "cn8_q2",
        "type": "true_false",
        "text": "Trong phép chiếu vuông góc, hướng chiếu phải vuông góc với mặt phẳng hình chiếu.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Đây là định nghĩa cơ bản của phép chiếu vuông góc để tạo ra các hình chiếu thẳng góc."
      },
      {
        "id": "cn8_q3",
        "type": "fill_blank",
        "text": "Hình chiếu đứng có hướng chiếu từ ___ tới.",
        "options": [],
        "correct": "trước",
        "explanation": "Theo quy ước vẽ kĩ thuật, hướng chiếu từ trước tới mặt phẳng chiếu đứng sẽ tạo ra hình chiếu đứng."
      },
      {
        "id": "cn8_q4",
        "type": "true_false",
        "text": "Kích thước của khổ giấy A4 lớn hơn kích thước của khổ giấy A3.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Khổ A3 gấp đôi diện tích khổ A4 (297x420 mm so với 210x297 mm)."
      },
      {
        "id": "cn8_q5",
        "type": "mcq",
        "text": "Khi biểu diễn một vật thể, hình chiếu bằng được đặt ở vị trí nào so với hình chiếu đứng?",
        "options": [
          "A. Phía trên hình chiếu đứng",
          "B. Bên phải hình chiếu đứng",
          "C. Bên trái hình chiếu đứng",
          "D. Phía dưới hình chiếu đứng"
        ],
        "correct": "D. Phía dưới hình chiếu đứng",
        "explanation": "Theo tiêu chuẩn bản vẽ kĩ thuật, hình chiếu bằng nằm ở dưới hình chiếu đứng, hình chiếu cạnh ở bên phải."
      }
    ]
  },
  {
    "id": "tin9_c1",
    "title": "Tin học 9 - Chủ đề 1: Tin học và xã hội",
    "subject": "Tin học",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "t9_q1",
        "type": "mcq",
        "text": "Sự phát triển của tin học đã mang lại lợi ích lớn nhất nào cho xã hội?",
        "options": [
          "A. Làm giảm chất lượng cuộc sống",
          "B. Tăng hiệu suất công việc và thay đổi cách thức giao tiếp",
          "C. Làm con người mất hoàn toàn khả năng tư duy",
          "D. Hủy hoại hoàn toàn môi trường tự nhiên"
        ],
        "correct": "B. Tăng hiệu suất công việc và thay đổi cách thức giao tiếp",
        "explanation": "Tin học giúp tự động hóa, tăng tốc độ xử lý và kết nối mọi người qua Internet."
      },
      {
        "id": "t9_q2",
        "type": "true_false",
        "text": "Việc phát tán phần mềm độc hại (virus) trên mạng internet là hành vi vi phạm đạo đức và pháp luật.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Hành vi này gây hại cho cộng đồng mạng và bị pháp luật nghiêm cấm."
      },
      {
        "id": "t9_q3",
        "type": "fill_blank",
        "text": "Một trong những mặt trái của Internet là có thể gây ra tình trạng nghiện ___ nếu sử dụng không hợp lý.",
        "options": [],
        "correct": "mạng",
        "explanation": "Nghiện mạng hoặc nghiện game, internet là vấn đề nhức nhối trong xã hội hiện đại."
      },
      {
        "id": "t9_q4",
        "type": "true_false",
        "text": "Bản quyền phần mềm không còn quan trọng trong kỷ nguyên số vì mọi thứ đều có thể sao chép miễn phí.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Bản quyền là sở hữu trí tuệ, sao chép trái phép là vi phạm pháp luật và gây thiệt hại cho tác giả."
      },
      {
        "id": "t9_q5",
        "type": "mcq",
        "text": "Khi chia sẻ thông tin trên mạng xã hội, chúng ta cần lưu ý điều gì?",
        "options": [
          "A. Chỉ chia sẻ thông tin chưa được kiểm chứng",
          "B. Chia sẻ thông tin cá nhân của người khác mà không cần xin phép",
          "C. Đảm bảo thông tin chính xác, trung thực và không vi phạm pháp luật",
          "D. Xúc phạm, công kích người khác"
        ],
        "correct": "C. Đảm bảo thông tin chính xác, trung thực và không vi phạm pháp luật",
        "explanation": "Người dùng cần có trách nhiệm và đạo đức khi hoạt động trong không gian mạng."
      }
    ]
  },
  {
    "id": "cn9_c1",
    "title": "Công nghệ 9 - Chương 1: Định hướng nghề nghiệp",
    "subject": "Công nghệ",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "cn9_q1",
        "type": "mcq",
        "text": "Mục đích chính của việc định hướng nghề nghiệp cho học sinh là gì?",
        "options": [
          "A. Bắt buộc học sinh làm nghề mà bố mẹ thích",
          "B. Giúp học sinh tự đánh giá năng lực, sở thích để chọn nghề phù hợp",
          "C. Chỉ để học sinh có điểm cao trên lớp",
          "D. Định hướng sang làm việc ở nước ngoài"
        ],
        "correct": "B. Giúp học sinh tự đánh giá năng lực, sở thích để chọn nghề phù hợp",
        "explanation": "Định hướng nghề nghiệp cung cấp thông tin để học sinh tự chọn lựa con đường tương lai phù hợp nhất với bản thân."
      },
      {
        "id": "cn9_q2",
        "type": "true_false",
        "text": "Sở thích cá nhân là một yếu tố quan trọng cần xem xét khi chọn nghề.",
        "options": [
          "True",
          "False"
        ],
        "correct": "True",
        "explanation": "Làm công việc mình yêu thích sẽ giúp bản thân có động lực và dễ đạt thành công hơn."
      },
      {
        "id": "cn9_q3",
        "type": "fill_blank",
        "text": "Thị trường lao động thường xuyên thay đổi nên học sinh cần quan tâm đến xu hướng nghề ___ trong tương lai.",
        "options": [],
        "correct": "nghiệp",
        "explanation": "Xu hướng nghề nghiệp phản ánh nhu cầu nhân lực của xã hội, là yếu tố cần cân nhắc khi chọn nghề."
      },
      {
        "id": "cn9_q4",
        "type": "true_false",
        "text": "Khi chọn nghề, không cần quan tâm đến yêu cầu về thể chất và sức khỏe của nghề nghiệp đó.",
        "options": [
          "True",
          "False"
        ],
        "correct": "False",
        "explanation": "Nhiều ngành nghề có yêu cầu khắt khe về sức khỏe (ví dụ: phi công, thợ mỏ...), do đó sức khỏe là yếu tố quyết định."
      },
      {
        "id": "cn9_q5",
        "type": "mcq",
        "text": "Sự phát triển của công nghệ và tự động hóa có tác động thế nào đến thị trường nghề nghiệp?",
        "options": [
          "A. Làm mất hoàn toàn mọi việc làm của con người",
          "B. Không có bất kỳ tác động nào",
          "C. Xóa bỏ một số nghề cũ nhưng tạo ra nhiều nghề mới",
          "D. Chỉ ảnh hưởng tới ngành nông nghiệp"
        ],
        "correct": "C. Xóa bỏ một số nghề cũ nhưng tạo ra nhiều nghề mới",
        "explanation": "Công nghệ tiến bộ sẽ thay thế các công việc lặp đi lặp lại nhưng mở ra các cơ hội ở lĩnh vực mới như AI, dữ liệu."
      }
    ]
  }

];