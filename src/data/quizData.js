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
];