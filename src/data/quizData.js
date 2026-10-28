// Updated QUIZ_DATA with 10 questions per quiz across diverse formats (MCQ, True/False, Fill Blank, Short Answer, Essay)
export const QUIZ_DATA = [
  {
    "id": "toan6_ch1",
    "title": "Toán 6 - Chương 1: Tập hợp các số tự nhiên",
    "subject": "Toán",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "t6_c1_q1",
        "type": "mcq",
        "text": "Tập hợp các số tự nhiên kí hiệu là gì?",
        "options": [
          "N",
          "N*",
          "Z",
          "Q"
        ],
        "correct": "N",
        "explanation": "Tập hợp các số tự nhiên được kí hiệu là N."
      },
      {
        "id": "t6_c1_q2",
        "type": "true_false",
        "text": "Số 0 thuộc tập hợp N* (tập hợp số tự nhiên khác 0).",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "N* là tập hợp số tự nhiên khác 0, nên 0 không thuộc N*."
      },
      {
        "id": "t6_c1_q3",
        "type": "fill_blank",
        "text": "Kết quả của phép tính 2^3 là...",
        "options": [],
        "correct": "8",
        "explanation": "2^3 = 2 x 2 x 2 = 8."
      },
      {
        "id": "t6_c1_q4",
        "type": "mcq",
        "text": "Số La Mã XIV tương ứng với số tự nhiên nào?",
        "options": [
          "14",
          "16",
          "24",
          "15"
        ],
        "correct": "14",
        "explanation": "X = 10, IV = 4. Vậy XIV = 14."
      },
      {
        "id": "t6_c1_q5",
        "type": "mcq",
        "text": "Thứ tự thực hiện các phép tính trong biểu thức không có dấu ngoặc là gì?",
        "options": [
          "Lũy thừa -> Nhân và chia -> Cộng và trừ",
          "Nhân và chia -> Lũy thừa -> Cộng và trừ",
          "Cộng và trừ -> Nhân và chia -> Lũy thừa",
          "Từ trái sang phải"
        ],
        "correct": "Lũy thừa -> Nhân và chia -> Cộng và trừ",
        "explanation": "Theo quy tắc thứ tự thực hiện phép tính."
      },
      {
        "id": "t6_c1_q6",
        "type": "true_false",
        "text": "Trong tập hợp số tự nhiên N, số nhỏ nhất là số 1.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Số tự nhiên nhỏ nhất là số 0."
      },
      {
        "id": "t6_c1_q7",
        "type": "fill_blank",
        "text": "Tập hợp các chữ số cấu tạo nên số 2026 có ... phần tử.",
        "options": [],
        "correct": "3",
        "explanation": "Các chữ số là 0, 2, 6 nên có 3 phần tử."
      },
      {
        "id": "t6_c1_q8",
        "type": "short_answer",
        "text": "Tính giá trị của biểu thức: 15 + 25 x 2 =",
        "options": [],
        "correct": "65",
        "explanation": "15 + 50 = 65."
      },
      {
        "id": "t6_c1_q9",
        "type": "short_answer",
        "text": "Số tự nhiên liền sau số 999 là số nào?",
        "options": [],
        "correct": "1000",
        "explanation": "999 + 1 = 1000."
      },
      {
        "id": "t6_c1_q10",
        "type": "essay",
        "text": "Một đoàn khách gồm 125 người muốn qua sông. Mỗi chuyến thuyền chở được tối đa 30 người. Hỏi cần ít nhất bao nhiêu chuyến thuyền để chở hết số khách?",
        "options": [],
        "correct": "Ta có: 125 chia 30 được 4 dư 5 người. Do đó cần ít nhất 4 + 1 = 5 chuyến thuyền để chở hết toàn bộ hành khách.",
        "explanation": "Thực hiện phép chia có dư và cộng thêm 1 chuyến cho số khách dư."
      }
    ]
  },
  {
    "id": "toan6_ch2",
    "title": "Toán 6 - Chương 2: Tính chia hết trong tập hợp các số tự nhiên",
    "subject": "Toán",
    "grade": 6,
    "chapter": 2,
    "questions": [
      {
        "id": "t6_c2_q1",
        "type": "mcq",
        "text": "Dấu hiệu chia hết cho 2 là gì?",
        "options": [
          "Chữ số tận cùng là chữ số chẵn",
          "Chữ số tận cùng là 0 hoặc 5",
          "Tổng các chữ số chia hết cho 2",
          "Chữ số tận cùng là chữ số lẻ"
        ],
        "correct": "Chữ số tận cùng là chữ số chẵn",
        "explanation": "Các số có chữ số tận cùng là 0, 2, 4, 6, 8 thì chia hết cho 2."
      },
      {
        "id": "t6_c2_q2",
        "type": "true_false",
        "text": "Mọi số chia hết cho 9 thì chia hết cho 3.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nếu tổng các chữ số chia hết cho 9 thì chắc chắn tổng đó cũng chia hết cho 3."
      },
      {
        "id": "t6_c2_q3",
        "type": "fill_blank",
        "text": "Số nguyên tố nhỏ nhất là...",
        "options": [],
        "correct": "2",
        "explanation": "2 là số nguyên tố nhỏ nhất và cũng là số nguyên tố chẵn duy nhất."
      },
      {
        "id": "t6_c2_q4",
        "type": "mcq",
        "text": "Khẳng định nào sau đây là đúng về số nguyên tố?",
        "options": [
          "Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.",
          "Là số tự nhiên lớn hơn 1, có nhiều hơn 2 ước.",
          "Là số tự nhiên chỉ chia hết cho chính nó.",
          "Mọi số lẻ đều là số nguyên tố."
        ],
        "correct": "Là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.",
        "explanation": "Đó là định nghĩa của số nguyên tố."
      },
      {
        "id": "t6_c2_q5",
        "type": "mcq",
        "text": "ƯCLN(12, 18) bằng bao nhiêu?",
        "options": [
          "6",
          "2",
          "3",
          "36"
        ],
        "correct": "6",
        "explanation": "12 = 2^2*3; 18 = 2*3^2. ƯCLN = 2*3 = 6."
      },
      {
        "id": "t6_c2_q6",
        "type": "true_false",
        "text": "Mọi số nguyên tố đều là số lẻ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Số 2 là số nguyên tố chẵn duy nhất."
      },
      {
        "id": "t6_c2_q7",
        "type": "fill_blank",
        "text": "Ước chung lớn nhất của 12 và 18 bằng...",
        "options": [],
        "correct": "6",
        "explanation": "ƯCLN(12, 18) = 6."
      },
      {
        "id": "t6_c2_q8",
        "type": "short_answer",
        "text": "Tìm số nguyên tố nhỏ nhất có hai chữ số:",
        "options": [],
        "correct": "11",
        "explanation": "11 là số nguyên tố nhỏ nhất có hai chữ số."
      },
      {
        "id": "t6_c2_q9",
        "type": "short_answer",
        "text": "Bội chung nhỏ nhất của 4 và 6 là bao nhiêu?",
        "options": [],
        "correct": "12",
        "explanation": "BCNN(4, 6) = 12."
      },
      {
        "id": "t6_c2_q10",
        "type": "essay",
        "text": "Tìm x biết x chia hết cho 15 và thỏa mãn điều kiện 40 < x < 70.",
        "options": [],
        "correct": "Bội của 15 gồm {0, 15, 30, 45, 60, 75,...}. Vì 40 < x < 70 nên x nhận các giá trị là 45 và 60.",
        "explanation": "Liệt kê các bội của 15 và chọn các giá trị thỏa mãn khoảng đã cho."
      }
    ]
  },
  {
    "id": "toan6_ch3",
    "title": "Toán 6 - Chương 3: Số nguyên",
    "subject": "Toán",
    "grade": 6,
    "chapter": 3,
    "questions": [
      {
        "id": "t6_c3_q1",
        "type": "mcq",
        "text": "Tập hợp các số nguyên kí hiệu là gì?",
        "options": [
          "Z",
          "N",
          "Q",
          "R"
        ],
        "correct": "Z",
        "explanation": "Tập hợp số nguyên kí hiệu là Z."
      },
      {
        "id": "t6_c3_q2",
        "type": "true_false",
        "text": "Số 0 là số nguyên dương.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Số 0 không phải là số nguyên dương cũng không phải số nguyên âm."
      },
      {
        "id": "t6_c3_q3",
        "type": "fill_blank",
        "text": "Kết quả của phép tính (-5) + (-7) là...",
        "options": [],
        "correct": "-12",
        "explanation": "(-5) + (-7) = -(5 + 7) = -12."
      },
      {
        "id": "t6_c3_q4",
        "type": "mcq",
        "text": "Tích của hai số nguyên âm là một số:",
        "options": [
          "Nguyên dương",
          "Nguyên âm",
          "Số 0",
          "Không xác định"
        ],
        "correct": "Nguyên dương",
        "explanation": "Âm nhân âm bằng dương."
      },
      {
        "id": "t6_c3_q5",
        "type": "mcq",
        "text": "Khẳng định nào sai?",
        "options": [
          "-5 > -3",
          "-2 > -4",
          "0 > -1",
          "5 > -10"
        ],
        "correct": "-5 > -3",
        "explanation": "Trên trục số, -5 nằm bên trái -3 nên -5 < -3."
      },
      {
        "id": "t6_c3_q6",
        "type": "true_false",
        "text": "Số nguyên âm luôn nhỏ hơn 0 và nhỏ hơn mọi số nguyên dương.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Theo tính chất thứ tự trong tập hợp Z."
      },
      {
        "id": "t6_c3_q7",
        "type": "fill_blank",
        "text": "Số đối của số -15 là...",
        "options": [],
        "correct": "15",
        "explanation": "Số đối của -a là a."
      },
      {
        "id": "t6_c3_q8",
        "type": "short_answer",
        "text": "Tính kết quả phép tính: (-8) + (-12) =",
        "options": [],
        "correct": "-20",
        "explanation": "-(8 + 12) = -20."
      },
      {
        "id": "t6_c3_q9",
        "type": "short_answer",
        "text": "Tính tích: (-5) x (-4) =",
        "options": [],
        "correct": "20",
        "explanation": "Tích hai số cùng dấu mang dấu dương: 5 x 4 = 20."
      },
      {
        "id": "t6_c3_q10",
        "type": "essay",
        "text": "Nhiệt độ tại Sa Pa lúc 6 giờ sáng là -2°C, đến 12 giờ trưa nhiệt độ tăng thêm 5°C. Hỏi lúc 12 giờ trưa nhiệt độ tại Sa Pa là bao nhiêu độ C?",
        "options": [],
        "correct": "Nhiệt độ lúc 12 giờ trưa là: (-2) + 5 = 3°C. Đáp số: 3°C.",
        "explanation": "Lấy nhiệt độ ban đầu cộng với số độ tăng thêm."
      }
    ]
  },
  {
    "id": "van6_ch1",
    "title": "Ngữ Văn 6 - Chương 1: Tôi và các bạn",
    "subject": "Ngữ Văn",
    "grade": 6,
    "chapter": 1,
    "questions": [
      {
        "id": "v6_c1_q1",
        "type": "mcq",
        "text": "Văn bản \"Bài học đường đời đầu tiên\" trích từ tác phẩm nào?",
        "options": [
          "Dế Mèn phiêu lưu kí",
          "Đất rừng phương Nam",
          "Quê nội",
          "Tuổi thơ dữ dội"
        ],
        "correct": "Dế Mèn phiêu lưu kí",
        "explanation": "Trích từ tác phẩm Dế Mèn phiêu lưu kí của Tô Hoài."
      },
      {
        "id": "v6_c1_q2",
        "type": "true_false",
        "text": "Nhân vật Dế Choắt trong truyện có ngoại hình to khỏe, cường tráng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Dế Choắt có ngoại hình gầy gò, ốm yếu."
      },
      {
        "id": "v6_c1_q3",
        "type": "fill_blank",
        "text": "Tác giả của tác phẩm \"Dế Mèn phiêu lưu kí\" là nhà văn...",
        "options": [],
        "correct": "Tô Hoài",
        "explanation": "Tô Hoài là tác giả."
      },
      {
        "id": "v6_c1_q4",
        "type": "mcq",
        "text": "Bài học đường đời đầu tiên mà Dế Mèn rút ra là gì?",
        "options": [
          "Thói ngông cuồng, hống hách sẽ mang lại tai họa cho người khác và cho chính mình.",
          "Phải biết yêu thương, đùm bọc người yếu thế hơn mình.",
          "Phải dũng cảm chiến đấu chống lại kẻ thù.",
          "Phải biết giữ gìn sức khỏe."
        ],
        "correct": "Thói ngông cuồng, hống hách sẽ mang lại tai họa cho người khác và cho chính mình.",
        "explanation": "Dế Mèn nhận ra lỗi lầm sau cái chết của Dế Choắt."
      },
      {
        "id": "v6_c1_q5",
        "type": "mcq",
        "text": "Thể loại của văn bản \"Bài học đường đời đầu tiên\" là gì?",
        "options": [
          "Truyện đồng thoại",
          "Truyện truyền thuyết",
          "Truyện cổ tích",
          "Truyện ngụ ngôn"
        ],
        "correct": "Truyện đồng thoại",
        "explanation": "Đây là thể loại truyện viết cho thiếu nhi, nhân vật là loài vật được nhân hóa."
      },
      {
        "id": "v6_c1_q6",
        "type": "true_false",
        "text": "Truyện đồng thoại là thể loại truyện viết cho thiếu nhi, nhân vật thường là loài vật hoặc đồ vật được nhân hóa.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đặc điểm thể loại truyện đồng thoại."
      },
      {
        "id": "v6_c1_q7",
        "type": "fill_blank",
        "text": "Tác phẩm 'Bài học đường đời đầu tiên' được trích từ kiệt tác ... của nhà văn Tô Hoài.",
        "options": [],
        "correct": "Dế Mèn phiêu lưu ký",
        "explanation": "Trích từ truyện Dế Mèn phiêu lưu ký."
      },
      {
        "id": "v6_c1_q8",
        "type": "short_answer",
        "text": "Nhân vật nào trong truyện 'Bài học đường đời đầu tiên' đã bị Dế Mèn trêu chọc dẫn đến cái chết oan uổng của Dế Choắt?",
        "options": [],
        "correct": "Chị Cốc",
        "explanation": "Dế Mèn trêu chọc Chị Cốc."
      },
      {
        "id": "v6_c1_q9",
        "type": "short_answer",
        "text": "Từ láy nào sau đây miêu tả cặp càng của Dế Mèn: 'Mẫm bóng' hay 'ngoàm ngoạp'?",
        "options": [],
        "correct": "ngoàm ngoạp",
        "explanation": "Hai cái răng đen nhánh nhai ngoàm ngoạp."
      },
      {
        "id": "v6_c1_q10",
        "type": "essay",
        "text": "Bài học đường đời đầu tiên mà Dế Mèn rút ra sau cái chết của Dế Choắt là gì? Hãy viết đoạn văn ngắn (3 - 5 câu) nêu cảm nhận của em.",
        "options": [],
        "correct": "Dế Mèn nhận ra tính kiêu ngạo, hung hăng, nghịch ranh vô lối có thể gây ra tai họa khôn lường cho người khác và sự ân hận suốt đời cho chính mình. Bài học nhắc nhở chúng ta phải biết khiêm tốn, yêu thương và giúp đỡ bạn bè xung quanh.",
        "explanation": "Nêu đúng bài học về thói kiêu căng và lòng trắc ẩn."
      }
    ]
  },
  {
    "id": "van6_ch2",
    "title": "Ngữ Văn 6 - Chương 2: Gõ cửa trái tim",
    "subject": "Ngữ Văn",
    "grade": 6,
    "chapter": 2,
    "questions": [
      {
        "id": "v6_c2_q1",
        "type": "mcq",
        "text": "Bài thơ \"Chuyện cổ tích về loài người\" của tác giả nào?",
        "options": [
          "Xuân Quỳnh",
          "Lâm Thị Mỹ Dạ",
          "Nguyễn Duy",
          "Trần Đăng Khoa"
        ],
        "correct": "Xuân Quỳnh",
        "explanation": "Bài thơ do nhà thơ Xuân Quỳnh sáng tác."
      },
      {
        "id": "v6_c2_q2",
        "type": "true_false",
        "text": "Theo bài thơ \"Chuyện cổ tích về loài người\", trẻ em sinh ra đầu tiên trên trái đất.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Bài thơ khẳng định trẻ em sinh ra đầu tiên, sau đó mọi thứ mới ra đời vì trẻ em."
      },
      {
        "id": "v6_c2_q3",
        "type": "fill_blank",
        "text": "Trong bài thơ \"Mây và sóng\", em bé đã từ chối lời rủ rê của những người trên mây và trong sóng để ở nhà với...",
        "options": [],
        "correct": "mẹ",
        "explanation": "Em bé luôn hướng về mẹ, tình mẫu tử chiến thắng mọi cám dỗ."
      },
      {
        "id": "v6_c2_q4",
        "type": "mcq",
        "text": "Biện pháp tu từ nổi bật trong bài thơ \"Mây và sóng\" là gì?",
        "options": [
          "Điệp ngữ",
          "Nhân hóa",
          "So sánh",
          "Ẩn dụ"
        ],
        "correct": "Điệp ngữ",
        "explanation": "Tác giả sử dụng nhiều điệp ngữ tạo nhịp điệu."
      },
      {
        "id": "v6_c2_q5",
        "type": "mcq",
        "text": "Tác giả của bài thơ \"Mây và sóng\" là ai?",
        "options": [
          "R. Ta-go",
          "An-đéc-xen",
          "Puskin",
          "V. Huy-gô"
        ],
        "correct": "R. Ta-go",
        "explanation": "Bài thơ của nhà thơ Ấn Độ Ra-bin-đra-nát Ta-go."
      },
      {
        "id": "v6_c2_q6",
        "type": "true_false",
        "text": "Thể thơ lục bát là thể thơ truyền thống của dân tộc Việt Nam, mỗi cặp câu gồm một câu sáu tiếng và một câu tám tiếng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm thể thơ lục bát."
      },
      {
        "id": "v6_c2_q7",
        "type": "fill_blank",
        "text": "Bài thơ 'Chuyện cổ tích về loài người' của nhà thơ ... lý giải nguồn gốc tình yêu thương gia đình.",
        "options": [],
        "correct": "Xuân Quỳnh",
        "explanation": "Tác giả là nhà thơ Xuân Quỳnh."
      },
      {
        "id": "v6_c2_q8",
        "type": "short_answer",
        "text": "Trong bài thơ 'Mây và sóng' của R. Ta-go, em bé đã từ chối lời rủ rê đi chơi của ai để ở nhà với mẹ?",
        "options": [],
        "correct": "Mây và sóng",
        "explanation": "Những người trên mây và những người trong sóng."
      },
      {
        "id": "v6_c2_q9",
        "type": "short_answer",
        "text": "Biện pháp tu từ nào so sánh hai sự vật có nét tương đồng thường dùng từ 'như', 'là'?",
        "options": [],
        "correct": "So sánh",
        "explanation": "Biện pháp tu từ so sánh."
      },
      {
        "id": "v6_c2_q10",
        "type": "essay",
        "text": "Qua văn bản 'Gió lạnh đầu mùa' của Thạch Lam, hành động hai chị em Sơn và Lan mang chiếc áo bông cũ cho cái Hiên thể hiện nét đẹp tâm hồn nào?",
        "options": [],
        "correct": "Hành động đó thể hiện tấm lòng nhân hậu, sự sẻ chia, biết đồng cảm và tình yêu thương thương người nghèo khó của những đứa trẻ có tâm hồn trong sáng, thánh thiện.",
        "explanation": "Khẳng định tinh thần nhân ái, ấm áp của tình người."
      }
    ]
  },
  {
    "id": "van6_ch3",
    "title": "Ngữ Văn 6 - Chương 3: Yêu thương và chia sẻ",
    "subject": "Ngữ Văn",
    "grade": 6,
    "chapter": 3,
    "questions": [
      {
        "id": "v6_c3_q1",
        "type": "mcq",
        "text": "Văn bản \"Cô bé bán diêm\" của tác giả nào?",
        "options": [
          "An-đéc-xen",
          "Puskin",
          "Mác-xim Gorki",
          "G. đơ Mô-pa-xăng"
        ],
        "correct": "An-đéc-xen",
        "explanation": "Truyện cổ tích nổi tiếng của nhà văn Đan Mạch An-đéc-xen."
      },
      {
        "id": "v6_c3_q2",
        "type": "true_false",
        "text": "Cô bé bán diêm mồ côi cả cha lẫn mẹ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Cô bé sống cùng người cha tàn nhẫn, mẹ và bà nội đã mất."
      },
      {
        "id": "v6_c3_q3",
        "type": "fill_blank",
        "text": "Lần quẹt diêm cuối cùng, cô bé bán diêm đã nhìn thấy ai?",
        "options": [],
        "correct": "bà nội",
        "explanation": "Hình ảnh người bà hiền từ hiện ra trong lần quẹt diêm cuối."
      },
      {
        "id": "v6_c3_q4",
        "type": "mcq",
        "text": "Ý nghĩa của câu chuyện \"Cô bé bán diêm\" là gì?",
        "options": [
          "Tố cáo xã hội vô cảm, kêu gọi tình yêu thương con người.",
          "Phê phán người cha tàn ác.",
          "Ca ngợi vẻ đẹp của đêm giao thừa.",
          "Khuyên trẻ em nên chăm chỉ làm việc."
        ],
        "correct": "Tố cáo xã hội vô cảm, kêu gọi tình yêu thương con người.",
        "explanation": "Truyện là lời kêu gọi sự đồng cảm, xót thương đối với những mảnh đời bất hạnh."
      },
      {
        "id": "v6_c3_q5",
        "type": "mcq",
        "text": "Đặc sắc nghệ thuật của \"Cô bé bán diêm\" là gì?",
        "options": [
          "Sự đan xen giữa thực tại khắc nghiệt và mộng tưởng kì diệu",
          "Sử dụng nhiều từ Hán Việt",
          "Cốt truyện li kì, hấp dẫn",
          "Nghệ thuật châm biếm sâu sắc"
        ],
        "correct": "Sự đan xen giữa thực tại khắc nghiệt và mộng tưởng kì diệu",
        "explanation": "Nghệ thuật tương phản giữa cảnh đời thực và những ảo ảnh qua ánh lửa diêm."
      },
      {
        "id": "v6_c3_q6",
        "type": "true_false",
        "text": "Truyền thuyết là loại truyện dân gian kể về các sự kiện và nhân vật lịch sử thời quá khứ, thường có yếu tố hoang đường kì ảo.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa thể loại truyền thuyết."
      },
      {
        "id": "v6_c3_q7",
        "type": "fill_blank",
        "text": "Nhân vật người anh hùng làng Gióng gắn liền với truyền thuyết đánh đuổi giặc ... xâm lược.",
        "options": [],
        "correct": "Ân",
        "explanation": "Thánh Gióng đánh giặc Ân."
      },
      {
        "id": "v6_c3_q8",
        "type": "short_answer",
        "text": "Sự tích bánh chưng, bánh giầy gắn liền với nhân vật hoàng tử nào thời Hùng Vương?",
        "options": [],
        "correct": "Lang Liêu",
        "explanation": "Hoàng tử Lang Liêu."
      },
      {
        "id": "v6_c3_q9",
        "type": "short_answer",
        "text": "Chi tiết thần kì Thạch Sanh có niêu cơm ăn mãi không hết tượng trưng cho ước mơ gì của nhân dân? (Hòa bình hay Giàu sang)",
        "options": [],
        "correct": "Hòa bình",
        "explanation": "Tượng trưng cho sự no ấm và tinh thần yêu chuộng hòa bình."
      },
      {
        "id": "v6_c3_q10",
        "type": "essay",
        "text": "Ý nghĩa của hình tượng 'Bọc trăm trứng' trong truyền thuyết Con Rồng cháu Tiên là gì?",
        "options": [],
        "correct": "Hình tượng 'Bọc trăm trứng' giải thích nguồn gốc thiêng liêng cao quý của người Việt và khẳng định tình đoàn kết, nghĩa đồng bào keo sơn gắn bó giữa các dân tộc trên đất nước Việt Nam.",
        "explanation": "Nêu rõ nguồn gốc chung và ý nghĩa tinh thần đồng bào."
      }
    ]
  },
  {
    "id": "toan7_ch1",
    "title": "Toán 7 - Chương 1: Số hữu tỉ",
    "subject": "Toán",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "t7_c1_q1",
        "type": "mcq",
        "text": "Tập hợp các số hữu tỉ được kí hiệu là gì?",
        "options": [
          "Q",
          "Z",
          "R",
          "N"
        ],
        "correct": "Q",
        "explanation": "Tập hợp các số hữu tỉ kí hiệu là Q."
      },
      {
        "id": "t7_c1_q2",
        "type": "true_false",
        "text": "Số 0 là số hữu tỉ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "0 = 0/1 nên 0 là số hữu tỉ."
      },
      {
        "id": "t7_c1_q3",
        "type": "fill_blank",
        "text": "Số đối của -3/4 là...",
        "options": [],
        "correct": "3/4",
        "explanation": "Số đối của a/b là -a/b."
      },
      {
        "id": "t7_c1_q4",
        "type": "mcq",
        "text": "Kết quả của phép tính (1/2) * (2/3) là?",
        "options": [
          "1/3",
          "2/6",
          "3/5",
          "1/6"
        ],
        "correct": "1/3",
        "explanation": "(1*2)/(2*3) = 2/6 = 1/3."
      },
      {
        "id": "t7_c1_q5",
        "type": "mcq",
        "text": "Số nào sau đây không phải là số hữu tỉ?",
        "options": [
          "Căn bậc hai của 2",
          "0.5",
          "-5",
          "2/3"
        ],
        "correct": "Căn bậc hai của 2",
        "explanation": "Căn bậc hai của 2 là số vô tỉ."
      },
      {
        "id": "t7_c1_q6",
        "type": "true_false",
        "text": "Mọi số nguyên đều là số hữu tỉ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Mọi số nguyên a đều viết được dưới dạng a/1."
      },
      {
        "id": "t7_c1_q7",
        "type": "fill_blank",
        "text": "Kết quả của phép tính (-1/2)^2 dưới dạng phân số tối giản là...",
        "options": [],
        "correct": "1/4",
        "explanation": "(-1/2) * (-1/2) = 1/4."
      },
      {
        "id": "t7_c1_q8",
        "type": "short_answer",
        "text": "Tìm x biết: x + 1/3 = 4/3. Giá trị x =",
        "options": [],
        "correct": "1",
        "explanation": "x = 4/3 - 1/3 = 3/3 = 1."
      },
      {
        "id": "t7_c1_q9",
        "type": "short_answer",
        "text": "Tính: (3/5) x (5/3) =",
        "options": [],
        "correct": "1",
        "explanation": "Tích của hai số nghịch đảo bằng 1."
      },
      {
        "id": "t7_c1_q10",
        "type": "essay",
        "text": "Bác An gửi 10 triệu đồng vào ngân hàng với lãi suất 6%/năm. Hỏi sau 1 năm bác An nhận được tất cả cả gốc lẫn lãi là bao nhiêu tiền?",
        "options": [],
        "correct": "Số tiền lãi sau 1 năm là: 10 x 6% = 0.6 triệu (600.000 đồng). Tổng số tiền cả gốc lẫn lãi nhận được là: 10 + 0.6 = 10.6 triệu đồng (10.600.000 đồng).",
        "explanation": "Tính tiền lãi và cộng với tiền vốn ban đầu."
      }
    ]
  },
  {
    "id": "toan7_ch2",
    "title": "Toán 7 - Chương 2: Số thực",
    "subject": "Toán",
    "grade": 7,
    "chapter": 2,
    "questions": [
      {
        "id": "t7_c2_q1",
        "type": "mcq",
        "text": "Tập hợp các số thực được kí hiệu là gì?",
        "options": [
          "R",
          "Q",
          "I",
          "Z"
        ],
        "correct": "R",
        "explanation": "Tập hợp các số thực được kí hiệu là R."
      },
      {
        "id": "t7_c2_q2",
        "type": "true_false",
        "text": "Mọi số hữu tỉ đều là số thực.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tập hợp số hữu tỉ là con của tập hợp số thực."
      },
      {
        "id": "t7_c2_q3",
        "type": "fill_blank",
        "text": "Giá trị tuyệt đối của -15 là...",
        "options": [],
        "correct": "15",
        "explanation": "Giá trị tuyệt đối của một số luôn không âm."
      },
      {
        "id": "t7_c2_q4",
        "type": "mcq",
        "text": "Số vô tỉ là số viết được dưới dạng:",
        "options": [
          "Số thập phân vô hạn không tuần hoàn",
          "Số thập phân vô hạn tuần hoàn",
          "Phân số",
          "Số nguyên"
        ],
        "correct": "Số thập phân vô hạn không tuần hoàn",
        "explanation": "Đó là định nghĩa của số vô tỉ."
      },
      {
        "id": "t7_c2_q5",
        "type": "mcq",
        "text": "Căn bậc hai số học của 25 là:",
        "options": [
          "5",
          "-5",
          "5 và -5",
          "25"
        ],
        "correct": "5",
        "explanation": "Căn bậc hai số học luôn mang giá trị dương."
      },
      {
        "id": "t7_c2_q6",
        "type": "true_false",
        "text": "Căn bậc hai số học của 25 là cả 5 và -5.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Căn bậc hai số học của một số không âm luôn là số không âm, vậy chỉ bằng 5."
      },
      {
        "id": "t7_c2_q7",
        "type": "fill_blank",
        "text": "Số Pi (π ≈ 3,14159...) là một số vô tỉ có biểu diễn dưới dạng số thập phân vô hạn...",
        "options": [],
        "correct": "không tuần hoàn",
        "explanation": "Định nghĩa số vô tỉ."
      },
      {
        "id": "t7_c2_q8",
        "type": "short_answer",
        "text": "Tính giá trị căn bậc hai số học của 81:",
        "options": [],
        "correct": "9",
        "explanation": "9^2 = 81 nên căn bậc hai số học là 9."
      },
      {
        "id": "t7_c2_q9",
        "type": "short_answer",
        "text": "Giá trị tuyệt đối của số -7.5 bằng bao nhiêu?",
        "options": [],
        "correct": "7.5",
        "explanation": "|-7.5| = 7.5."
      },
      {
        "id": "t7_c2_q10",
        "type": "essay",
        "text": "Một mảnh vườn hình vuông có diện tích là 64 m2. Người ta muốn rào xung quanh mảnh vườn đó. Tính độ dài hàng rào cần làm (chu vi mảnh vườn).",
        "options": [],
        "correct": "Độ dài cạnh hình vuông là căn bậc hai của 64 = 8 m. Chu vi của mảnh vườn (độ dài hàng rào) là: 8 x 4 = 32 m.",
        "explanation": "Tìm cạnh vườn bằng căn bậc hai diện tích, sau đó tính chu vi."
      }
    ]
  },
  {
    "id": "toan7_ch3",
    "title": "Toán 7 - Chương 3: Góc và đường thẳng song song",
    "subject": "Toán",
    "grade": 7,
    "chapter": 3,
    "questions": [
      {
        "id": "t7_c3_q1",
        "type": "mcq",
        "text": "Hai góc kề bù có tổng số đo bằng bao nhiêu độ?",
        "options": [
          "180 độ",
          "90 độ",
          "360 độ",
          "100 độ"
        ],
        "correct": "180 độ",
        "explanation": "Theo tính chất hai góc kề bù."
      },
      {
        "id": "t7_c3_q2",
        "type": "true_false",
        "text": "Hai góc đối đỉnh thì bằng nhau.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đây là tính chất cơ bản của hai góc đối đỉnh."
      },
      {
        "id": "t7_c3_q3",
        "type": "fill_blank",
        "text": "Qua một điểm ở ngoài một đường thẳng, chỉ có ... đường thẳng song song với đường thẳng đó.",
        "options": [],
        "correct": "1",
        "explanation": "Tiên đề Ơ-clit."
      },
      {
        "id": "t7_c3_q4",
        "type": "mcq",
        "text": "Nếu một đường thẳng cắt hai đường thẳng song song thì:",
        "options": [
          "Hai góc so le trong bằng nhau",
          "Hai góc đồng vị bù nhau",
          "Hai góc trong cùng phía bằng nhau",
          "Hai góc kề bù bằng nhau"
        ],
        "correct": "Hai góc so le trong bằng nhau",
        "explanation": "Tính chất của hai đường thẳng song song."
      },
      {
        "id": "t7_c3_q5",
        "type": "mcq",
        "text": "Tia phân giác của một góc là tia:",
        "options": [
          "Nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau",
          "Chia góc đó thành hai phần bất kì",
          "Vuông góc với một cạnh của góc",
          "Song song với một cạnh của góc"
        ],
        "correct": "Nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau",
        "explanation": "Định nghĩa tia phân giác."
      },
      {
        "id": "t7_c3_q6",
        "type": "true_false",
        "text": "Hai góc đối đỉnh thì luôn bằng nhau.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tính chất cơ bản của hai góc đối đỉnh."
      },
      {
        "id": "t7_c3_q7",
        "type": "fill_blank",
        "text": "Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong...",
        "options": [],
        "correct": "bằng nhau",
        "explanation": "Tính chất hai đường thẳng song song."
      },
      {
        "id": "t7_c3_q8",
        "type": "short_answer",
        "text": "Góc bù với góc 70 độ có số đo là bao nhiêu độ?",
        "options": [],
        "correct": "110",
        "explanation": "180 - 70 = 110 độ."
      },
      {
        "id": "t7_c3_q9",
        "type": "short_answer",
        "text": "Tổng số đo ba góc trong một tam giác luôn bằng bao nhiêu độ?",
        "options": [],
        "correct": "180",
        "explanation": "Định lí tổng ba góc trong tam giác."
      },
      {
        "id": "t7_c3_q10",
        "type": "essay",
        "text": "Cho góc xOy = 80 độ. Tia Ot là tia phân giác của góc xOy. Tính số đo góc xOt và góc yOt.",
        "options": [],
        "correct": "Vì Ot là tia phân giác của góc xOy nên: góc xOt = góc yOt = góc xOy / 2 = 80° / 2 = 40°.",
        "explanation": "Áp dụng định nghĩa tia phân giác của một góc."
      }
    ]
  },
  {
    "id": "van7_ch1",
    "title": "Ngữ Văn 7 - Chương 1: Bầu trời tuổi thơ",
    "subject": "Ngữ Văn",
    "grade": 7,
    "chapter": 1,
    "questions": [
      {
        "id": "v7_c1_q1",
        "type": "mcq",
        "text": "Văn bản \"Bầy chim chìa vôi\" của tác giả nào?",
        "options": [
          "Nguyễn Quang Thiều",
          "Nguyễn Nhật Ánh",
          "Vũ Tú Nam",
          "Tô Hoài"
        ],
        "correct": "Nguyễn Quang Thiều",
        "explanation": "Bài học Bầy chim chìa vôi do Nguyễn Quang Thiều sáng tác."
      },
      {
        "id": "v7_c1_q2",
        "type": "true_false",
        "text": "Trong truyện Bầy chim chìa vôi, Mên và Mon là hai anh em.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nhân vật chính là hai anh em Mên và Mon."
      },
      {
        "id": "v7_c1_q3",
        "type": "fill_blank",
        "text": "Mên và Mon lo lắng cho bầy chim chìa vôi non vì trời đang mưa và nước sông đang...",
        "options": [],
        "correct": "dâng lên",
        "explanation": "Nước sông dâng cao đe dọa tổ chim."
      },
      {
        "id": "v7_c1_q4",
        "type": "mcq",
        "text": "Chi tiết bầy chim chìa vôi bay lên mặt nước thể hiện điều gì?",
        "options": [
          "Sức sống mãnh liệt",
          "Sự tuyệt vọng",
          "Sự yếu đuối",
          "Sự sợ hãi"
        ],
        "correct": "Sức sống mãnh liệt",
        "explanation": "Sức vươn lên mạnh mẽ của sự sống."
      },
      {
        "id": "v7_c1_q5",
        "type": "mcq",
        "text": "Tình cảm của hai anh em Mên và Mon đối với bầy chim là gì?",
        "options": [
          "Yêu thương, lo lắng",
          "Thờ ơ, vô tâm",
          "Ghét bỏ",
          "Sợ hãi"
        ],
        "correct": "Yêu thương, lo lắng",
        "explanation": "Hai anh em rất quan tâm và lo lắng cho bầy chim."
      },
      {
        "id": "v7_c1_q6",
        "type": "true_false",
        "text": "Người kể chuyện ngôi thứ nhất thường xưng 'tôi' và trực tiếp tham gia vào câu chuyện.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đặc điểm ngôi kể thứ nhất."
      },
      {
        "id": "v7_c1_q7",
        "type": "fill_blank",
        "text": "Văn bản 'Bầy chim chìa vôi' là truyện ngắn đặc sắc của nhà văn ...",
        "options": [],
        "correct": "Nguyễn Quang Thiều",
        "explanation": "Tác giả Nguyễn Quang Thiều."
      },
      {
        "id": "v7_c1_q8",
        "type": "short_answer",
        "text": "Hai anh em Mên và Mon trong truyện 'Bầy chim chìa vôi' lo lắng cho điều gì nhất vào đêm mưa to?",
        "options": [],
        "correct": "Tổ chim chìa vôi",
        "explanation": "Lo bầy chim chìa vôi non ở bãi cát giữa sông bị ngập nước."
      },
      {
        "id": "v7_c1_q9",
        "type": "short_answer",
        "text": "Biện pháp tu từ nào gán thuộc tính, hành động của con người cho đồ vật, con vật?",
        "options": [],
        "correct": "Nhân hóa",
        "explanation": "Biện pháp tu từ nhân hóa."
      },
      {
        "id": "v7_c1_q10",
        "type": "essay",
        "text": "Tại sao khi chứng kiến bầy chim non cất cánh bay lên trong sớm mai, hai anh em Mên và Mon lại bật khóc?",
        "options": [],
        "correct": "Hai anh em bật khóc vì niềm xúc động trào dâng, hạnh phúc và nhẹ nhõm khi thấy bầy chim non đã chiến thắng dòng nước lũ, tự bay lên bầu trời an toàn.",
        "explanation": "Giải thích cảm xúc vừa hồi hộp vừa vỡ òa niềm vui trước sự sống kì diệu."
      }
    ]
  },
  {
    "id": "van7_ch2",
    "title": "Ngữ Văn 7 - Chương 2: Khúc nhạc tâm hồn",
    "subject": "Ngữ Văn",
    "grade": 7,
    "chapter": 2,
    "questions": [
      {
        "id": "v7_c2_q1",
        "type": "mcq",
        "text": "Bài thơ \"Đồng dao mùa xuân\" của tác giả nào?",
        "options": [
          "Nguyễn Khoa Điềm",
          "Thanh Thảo",
          "Xuân Quỳnh",
          "Hữu Thỉnh"
        ],
        "correct": "Nguyễn Khoa Điềm",
        "explanation": "Là sáng tác của nhà thơ Nguyễn Khoa Điềm."
      },
      {
        "id": "v7_c2_q2",
        "type": "true_false",
        "text": "Bài thơ \"Gặp lá cơm nếp\" viết về tình cảm cha con.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Bài thơ viết về tình cảm mẹ con và tình yêu quê hương."
      },
      {
        "id": "v7_c2_q3",
        "type": "fill_blank",
        "text": "Trong bài thơ \"Gặp lá cơm nếp\", người lính nhớ về ai khi ngửi thấy mùi xôi?",
        "options": [],
        "correct": "mẹ",
        "explanation": "Mùi xôi gợi nhớ người mẹ hiền."
      },
      {
        "id": "v7_c2_q4",
        "type": "mcq",
        "text": "Thể thơ của bài \"Đồng dao mùa xuân\" là gì?",
        "options": [
          "Bốn chữ",
          "Năm chữ",
          "Lục bát",
          "Tự do"
        ],
        "correct": "Bốn chữ",
        "explanation": "Bài thơ được viết theo thể thơ 4 chữ, nhịp điệu như bài đồng dao."
      },
      {
        "id": "v7_c2_q5",
        "type": "mcq",
        "text": "Hình ảnh người lính trong \"Đồng dao mùa xuân\" gắn liền với sự kiện nào?",
        "options": [
          "Chiến tranh bảo vệ Tổ quốc",
          "Lao động sản xuất",
          "Học tập",
          "Vui chơi"
        ],
        "correct": "Chiến tranh bảo vệ Tổ quốc",
        "explanation": "Người lính lên đường ra trận và hi sinh."
      },
      {
        "id": "v7_c2_q6",
        "type": "true_false",
        "text": "Thể thơ bốn chữ và năm chữ thường có nhịp điệu nhanh, dồn dập, thích hợp thể hiện tình cảm tha thiết, kể chuyện.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đặc điểm thể thơ 4 chữ và 5 chữ."
      },
      {
        "id": "v7_c2_q7",
        "type": "fill_blank",
        "text": "Bài thơ 'Đồng dao mùa xuân' của Nguyễn Khoa Điềm viết về hình ảnh người lính ...",
        "options": [],
        "correct": "Cụ Hồ",
        "explanation": "Hình ảnh người lính anh dũng thời kỳ kháng chiến chống Mỹ."
      },
      {
        "id": "v7_c2_q8",
        "type": "short_answer",
        "text": "Hình ảnh 'Đầu súng trăng treo' xuất hiện trong bài thơ nổi tiếng nào của Chính Hữu?",
        "options": [],
        "correct": "Đồng chí",
        "explanation": "Bài thơ Đồng chí."
      },
      {
        "id": "v7_c2_q9",
        "type": "short_answer",
        "text": "Từ nào đồng nghĩa với từ 'Tổ quốc': Giang sơn hay Thành phố?",
        "options": [],
        "correct": "Giang sơn",
        "explanation": "Giang sơn đồng nghĩa với Tổ quốc, Đất nước."
      },
      {
        "id": "v7_c2_q10",
        "type": "essay",
        "text": "Nêu cảm nhận ngắn gọn của em về sự hy sinh thầm lặng của các chiến sĩ trong bài thơ 'Đồng dao mùa xuân'.",
        "options": [],
        "correct": "Các anh đã cống hiến tuổi thanh xuân đẹp đẽ nhất cho nền độc lập dân tộc. Dù ngã xuống giữa rừng sâu, hình ảnh và nụ cười của các anh vẫn sống mãi với mùa xuân đất nước và trong trái tim nhân dân muôn đời.",
        "explanation": "Bày tỏ lòng biết ơn và sự trân trọng đối với thế hệ cha anh."
      }
    ]
  },
  {
    "id": "van7_ch3",
    "title": "Ngữ Văn 7 - Chương 3: Cội nguồn yêu thương",
    "subject": "Ngữ Văn",
    "grade": 7,
    "chapter": 3,
    "questions": [
      {
        "id": "v7_c3_q1",
        "type": "mcq",
        "text": "Tùy bút \"Cốm Vòng\" của tác giả nào?",
        "options": [
          "Vũ Bằng",
          "Thạch Lam",
          "Nguyễn Tuân",
          "Minh Châu"
        ],
        "correct": "Vũ Bằng",
        "explanation": "Trích trong \"Thương nhớ mười hai\" của Vũ Bằng."
      },
      {
        "id": "v7_c3_q2",
        "type": "true_false",
        "text": "Cốm là thức quà riêng biệt của người Hà Nội.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Theo tùy bút, cốm gắn liền với văn hóa Hà Nội."
      },
      {
        "id": "v7_c3_q3",
        "type": "fill_blank",
        "text": "Cốm thường được ăn kèm với loại quả nào trong dịp thu về?",
        "options": [],
        "correct": "hồng",
        "explanation": "Cốm vòng ăn với hồng đỏ là sự kết hợp tinh tế."
      },
      {
        "id": "v7_c3_q4",
        "type": "mcq",
        "text": "Văn bản \"Mùa thu về Trùng Khánh nghe hạt dẻ hát\" viết về vùng đất nào?",
        "options": [
          "Cao Bằng",
          "Hà Giang",
          "Lạng Sơn",
          "Bắc Kạn"
        ],
        "correct": "Cao Bằng",
        "explanation": "Trùng Khánh là một huyện thuộc tỉnh Cao Bằng."
      },
      {
        "id": "v7_c3_q5",
        "type": "mcq",
        "text": "Đặc điểm nổi bật của thể loại tùy bút là gì?",
        "options": [
          "Ghi chép chân thực, giàu cảm xúc cá nhân",
          "Cốt truyện li kì",
          "Nhiều nhân vật giả tưởng",
          "Tuân thủ luật thơ nghiêm ngặt"
        ],
        "correct": "Ghi chép chân thực, giàu cảm xúc cá nhân",
        "explanation": "Tùy bút phóng túng, in đậm dấu ấn chủ quan của người viết."
      },
      {
        "id": "v7_c3_q6",
        "type": "true_false",
        "text": "Tục ngữ là những câu nói dân gian ngắn gọn, có vần nhịp, đúc kết kinh nghiệm sống và tri thức của nhân dân.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm thể loại tục ngữ."
      },
      {
        "id": "v7_c3_q7",
        "type": "fill_blank",
        "text": "Hoàn thiện câu tục ngữ: 'Uống nước nhớ ...'",
        "options": [],
        "correct": "nguồn",
        "explanation": "Uống nước nhớ nguồn."
      },
      {
        "id": "v7_c3_q8",
        "type": "short_answer",
        "text": "Câu tục ngữ 'Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối' đúc kết kinh nghiệm về hiện tượng gì?",
        "options": [],
        "correct": "Thời tiết",
        "explanation": "Kinh nghiệm về ngày đêm và thời tiết bốn mùa."
      },
      {
        "id": "v7_c3_q9",
        "type": "short_answer",
        "text": "Tác phẩm 'Vừa nhắm mắt vừa mở cửa sổ' là của tác giả nào?",
        "options": [],
        "correct": "Nguyễn Ngọc Thuần",
        "explanation": "Nhà văn Nguyễn Ngọc Thuần."
      },
      {
        "id": "v7_c3_q10",
        "type": "essay",
        "text": "Thông điệp sâu sắc nhất mà văn bản 'Vừa nhắm mắt vừa mở cửa sổ' muốn gửi gắm đến người đọc là gì?",
        "options": [],
        "correct": "Thông điệp: Hãy cảm nhận cuộc sống và những người xung quanh bằng cả trái tim, bằng mọi giác quan và sự thấu hiểu; mỗi con người và mỗi bông hoa đều là một món quà tuyệt vời của tạo hóa.",
        "explanation": "Nêu bài học về sự cảm nhận cuộc sống bằng tình yêu thương chân thành."
      }
    ]
  },
  {
    "id": "toan8_ch1",
    "title": "Toán 8 - Chương 1: Đa thức",
    "subject": "Toán",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "t8_c1_q1",
        "type": "mcq",
        "text": "Bậc của đa thức x^3*y + x*y^2 - 5 là bao nhiêu?",
        "options": [
          "4",
          "3",
          "2",
          "5"
        ],
        "correct": "4",
        "explanation": "Hạng tử x^3*y có bậc là 3+1=4 cao nhất."
      },
      {
        "id": "t8_c1_q2",
        "type": "true_false",
        "text": "Đơn thức là một đa thức.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đơn thức là trường hợp đặc biệt của đa thức (có 1 hạng tử)."
      },
      {
        "id": "t8_c1_q3",
        "type": "fill_blank",
        "text": "Kết quả của phép nhân đơn thức 2x với đa thức (x - 3) là...",
        "options": [],
        "correct": "2x^2 - 6x",
        "explanation": "2x(x) - 2x(3) = 2x^2 - 6x."
      },
      {
        "id": "t8_c1_q4",
        "type": "mcq",
        "text": "Phép chia đa thức A cho đa thức B gọi là chia hết khi phần dư bằng:",
        "options": [
          "0",
          "1",
          "B",
          "A"
        ],
        "correct": "0",
        "explanation": "Phần dư R = 0 thì là phép chia hết."
      },
      {
        "id": "t8_c1_q5",
        "type": "mcq",
        "text": "Biểu thức nào sau đây không phải là đa thức?",
        "options": [
          "1/x + y",
          "x^2 + 2y",
          "5",
          "x"
        ],
        "correct": "1/x + y",
        "explanation": "Biểu thức chứa biến ở mẫu thức không phải là đa thức."
      },
      {
        "id": "t8_c1_q6",
        "type": "true_false",
        "text": "Bậc của đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn của đa thức đó.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa bậc của đa thức."
      },
      {
        "id": "t8_c1_q7",
        "type": "fill_blank",
        "text": "Đơn thức 3x^2y^3 có bậc bằng...",
        "options": [],
        "correct": "5",
        "explanation": "Bậc = 2 + 3 = 5."
      },
      {
        "id": "t8_c1_q8",
        "type": "short_answer",
        "text": "Thu gọn đơn thức: 2x * 3x^2 =",
        "options": [],
        "correct": "6x^3",
        "explanation": "2 * 3 = 6, x * x^2 = x^3."
      },
      {
        "id": "t8_c1_q9",
        "type": "short_answer",
        "text": "Tính giá trị của đa thức P = x^2 - 4 khi x = 3:",
        "options": [],
        "correct": "5",
        "explanation": "3^2 - 4 = 9 - 4 = 5."
      },
      {
        "id": "t8_c1_q10",
        "type": "essay",
        "text": "Cho hai đa thức A = 2x^2 + 3xy - 5 và B = x^2 - 3xy + 2. Hãy tính tổng A + B.",
        "options": [],
        "correct": "Ta có: A + B = (2x^2 + 3xy - 5) + (x^2 - 3xy + 2) = (2x^2 + x^2) + (3xy - 3xy) + (-5 + 2) = 3x^2 - 3.",
        "explanation": "Cộng các hạng tử đồng dạng và rút gọn."
      }
    ]
  },
  {
    "id": "toan8_ch2",
    "title": "Toán 8 - Chương 2: Hằng đẳng thức đáng nhớ và ứng dụng",
    "subject": "Toán",
    "grade": 8,
    "chapter": 2,
    "questions": [
      {
        "id": "t8_c2_q1",
        "type": "mcq",
        "text": "Khai triển (A + B)^2 ta được:",
        "options": [
          "A^2 + 2AB + B^2",
          "A^2 - 2AB + B^2",
          "A^2 + B^2",
          "A^2 - B^2"
        ],
        "correct": "A^2 + 2AB + B^2",
        "explanation": "Bình phương của một tổng."
      },
      {
        "id": "t8_c2_q2",
        "type": "true_false",
        "text": "Hằng đẳng thức (A - B)(A + B) = A^2 - B^2.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đây là hằng đẳng thức hiệu hai bình phương."
      },
      {
        "id": "t8_c2_q3",
        "type": "fill_blank",
        "text": "Điền vào chỗ trống: (x - y)^3 = x^3 - 3x^2y + 3xy^2 - ...",
        "options": [],
        "correct": "y^3",
        "explanation": "Lập phương của một hiệu."
      },
      {
        "id": "t8_c2_q4",
        "type": "mcq",
        "text": "Biểu thức x^3 + 8 được phân tích thành nhân tử là:",
        "options": [
          "(x+2)(x^2-2x+4)",
          "(x+2)(x^2+2x+4)",
          "(x-2)(x^2-2x+4)",
          "(x-2)(x^2+2x+4)"
        ],
        "correct": "(x+2)(x^2-2x+4)",
        "explanation": "Tổng hai lập phương: A^3 + B^3 = (A+B)(A^2-AB+B^2) với A=x, B=2."
      },
      {
        "id": "t8_c2_q5",
        "type": "mcq",
        "text": "Việc biến đổi biểu thức thành tích của các đa thức gọi là:",
        "options": [
          "Phân tích đa thức thành nhân tử",
          "Khai triển đa thức",
          "Thu gọn đa thức",
          "Cộng trừ đa thức"
        ],
        "correct": "Phân tích đa thức thành nhân tử",
        "explanation": "Định nghĩa phép phân tích đa thức thành nhân tử."
      },
      {
        "id": "t8_c2_q6",
        "type": "true_false",
        "text": "Biểu thức (a - b)^2 bằng a^2 - 2ab + b^2.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hằng đẳng thức bình phương của một hiệu."
      },
      {
        "id": "t8_c2_q7",
        "type": "fill_blank",
        "text": "Khai triển hiệu hai bình phương: x^2 - 9 = (x - 3)(...)",
        "options": [],
        "correct": "x + 3",
        "explanation": "a^2 - b^2 = (a - b)(a + b)."
      },
      {
        "id": "t8_c2_q8",
        "type": "short_answer",
        "text": "Tính nhanh giá trị của: 51^2 - 49^2 =",
        "options": [],
        "correct": "200",
        "explanation": "(51 - 49)(51 + 49) = 2 * 100 = 200."
      },
      {
        "id": "t8_c2_q9",
        "type": "short_answer",
        "text": "Tìm x biết: x^2 - 4x + 4 = 0. Giá trị x =",
        "options": [],
        "correct": "2",
        "explanation": "(x - 2)^2 = 0 => x = 2."
      },
      {
        "id": "t8_c2_q10",
        "type": "essay",
        "text": "Chứng minh rằng biểu thức M = x^2 - 2x + 5 luôn nhận giá trị dương với mọi số thực x.",
        "options": [],
        "correct": "Ta có: M = x^2 - 2x + 1 + 4 = (x - 1)^2 + 4. Vì (x - 1)^2 >= 0 với mọi x, nên (x - 1)^2 + 4 >= 4 > 0 với mọi x. Vậy M luôn dương.",
        "explanation": "Biến đổi đa thức về dạng bình phương một hiệu cộng với một hằng số dương."
      }
    ]
  },
  {
    "id": "toan8_ch3",
    "title": "Toán 8 - Chương 3: Tứ giác",
    "subject": "Toán",
    "grade": 8,
    "chapter": 3,
    "questions": [
      {
        "id": "t8_c3_q1",
        "type": "mcq",
        "text": "Tổng số đo các góc trong một tứ giác bằng bao nhiêu?",
        "options": [
          "360 độ",
          "180 độ",
          "90 độ",
          "270 độ"
        ],
        "correct": "360 độ",
        "explanation": "Tổng các góc của tứ giác bằng 360 độ."
      },
      {
        "id": "t8_c3_q2",
        "type": "true_false",
        "text": "Hình thang có hai cạnh bên bằng nhau luôn là hình thang cân.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Hình bình hành cũng có hai cạnh bên bằng nhau nhưng không phải là hình thang cân."
      },
      {
        "id": "t8_c3_q3",
        "type": "fill_blank",
        "text": "Hình bình hành có hai đường chéo bằng nhau là hình...",
        "options": [],
        "correct": "chữ nhật",
        "explanation": "Dấu hiệu nhận biết hình chữ nhật."
      },
      {
        "id": "t8_c3_q4",
        "type": "mcq",
        "text": "Tứ giác có 4 cạnh bằng nhau là hình gì?",
        "options": [
          "Hình thoi",
          "Hình vuông",
          "Hình chữ nhật",
          "Hình bình hành"
        ],
        "correct": "Hình thoi",
        "explanation": "Theo định nghĩa của hình thoi."
      },
      {
        "id": "t8_c3_q5",
        "type": "mcq",
        "text": "Đường trung bình của tam giác có tính chất gì?",
        "options": [
          "Song song với cạnh thứ ba và bằng nửa cạnh ấy",
          "Vuông góc với cạnh thứ ba",
          "Bằng cạnh thứ ba",
          "Đi qua trọng tâm tam giác"
        ],
        "correct": "Song song với cạnh thứ ba và bằng nửa cạnh ấy",
        "explanation": "Tính chất đường trung bình của tam giác."
      },
      {
        "id": "t8_c3_q6",
        "type": "true_false",
        "text": "Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Dấu hiệu nhận biết hình thoi."
      },
      {
        "id": "t8_c3_q7",
        "type": "fill_blank",
        "text": "Tứ giác có 4 góc vuông được gọi là hình...",
        "options": [],
        "correct": "chữ nhật",
        "explanation": "Định nghĩa hình chữ nhật."
      },
      {
        "id": "t8_c3_q8",
        "type": "short_answer",
        "text": "Tổng số đo bốn góc trong một tứ giác bằng bao nhiêu độ?",
        "options": [],
        "correct": "360",
        "explanation": "Tổng các góc của tứ giác là 360 độ."
      },
      {
        "id": "t8_c3_q9",
        "type": "short_answer",
        "text": "Một hình vuông có cạnh bằng 5 cm thì diện tích bằng bao nhiêu cm2?",
        "options": [],
        "correct": "25",
        "explanation": "5 * 5 = 25 cm2."
      },
      {
        "id": "t8_c3_q10",
        "type": "essay",
        "text": "Nêu các dấu hiệu nhận biết một hình bình hành trở thành hình chữ nhật.",
        "options": [],
        "correct": "Các dấu hiệu: 1) Hình bình hành có một góc vuông. 2) Hình bình hành có hai đường chéo bằng nhau.",
        "explanation": "Nêu đầy đủ 2 dấu hiệu chuyển từ hình bình hành sang hình chữ nhật."
      }
    ]
  },
  {
    "id": "van8_ch1",
    "title": "Ngữ Văn 8 - Chương 1: Câu chuyện của lịch sử",
    "subject": "Ngữ Văn",
    "grade": 8,
    "chapter": 1,
    "questions": [
      {
        "id": "v8_c1_q1",
        "type": "mcq",
        "text": "Văn bản \"Lá cờ thêu sáu chữ vàng\" viết về vị anh hùng nào?",
        "options": [
          "Trần Quốc Toản",
          "Trần Hưng Đạo",
          "Lê Lợi",
          "Quang Trung"
        ],
        "correct": "Trần Quốc Toản",
        "explanation": "Truyện kể về tấm gương tuổi trẻ tài cao, yêu nước Trần Quốc Toản."
      },
      {
        "id": "v8_c1_q2",
        "type": "true_false",
        "text": "Tác giả của \"Lá cờ thêu sáu chữ vàng\" là Nguyễn Huy Tưởng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nhà văn Nguyễn Huy Tưởng là tác giả của tác phẩm này."
      },
      {
        "id": "v8_c1_q3",
        "type": "fill_blank",
        "text": "Trần Quốc Toản vì tức giận không được dự bàn việc nước đã bóp nát quả... trong tay.",
        "options": [],
        "correct": "cam",
        "explanation": "Chi tiết bóp nát quả cam thể hiện lòng căm thù giặc và chí khí của Trần Quốc Toản."
      },
      {
        "id": "v8_c1_q4",
        "type": "mcq",
        "text": "Sáu chữ vàng trên lá cờ của Trần Quốc Toản là gì?",
        "options": [
          "Phá cường địch, báo hoàng ân",
          "Sát thát",
          "Nam quốc sơn hà",
          "Bình Ngô đại cáo"
        ],
        "correct": "Phá cường địch, báo hoàng ân",
        "explanation": "Nghĩa là: Phá giặc mạnh, báo ơn vua."
      },
      {
        "id": "v8_c1_q5",
        "type": "mcq",
        "text": "Truyện lịch sử có đặc điểm gì?",
        "options": [
          "Dựa trên sự kiện và nhân vật lịch sử có thật",
          "Hoàn toàn hư cấu",
          "Chỉ viết về thế giới thần tiên",
          "Nhân vật là các loài vật"
        ],
        "correct": "Dựa trên sự kiện và nhân vật lịch sử có thật",
        "explanation": "Truyện lịch sử tái hiện lại lịch sử thông qua nghệ thuật văn chương."
      },
      {
        "id": "v8_c1_q6",
        "type": "true_false",
        "text": "Hịch là thể văn nghị luận thời xưa thường do vua chúa, tướng lĩnh dùng để khích lệ, hiệu triệu binh sĩ chiến đấu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm thể hịch cổ."
      },
      {
        "id": "v8_c1_q7",
        "type": "fill_blank",
        "text": "Tác giả của áng thiên cổ hùng văn 'Hịch tướng sĩ' là Tiết chế Quốc công ...",
        "options": [],
        "correct": "Trần Quốc Tuấn",
        "explanation": "Hưng Đạo Đại Vương Trần Quốc Tuấn."
      },
      {
        "id": "v8_c1_q8",
        "type": "short_answer",
        "text": "Lá cờ của người anh hùng trẻ tuổi Trần Quốc Toản thêu sáu chữ vàng gì?",
        "options": [],
        "correct": "Phá cường địch báo hoàng ân",
        "explanation": "Phá cường địch, báo hoàng ân."
      },
      {
        "id": "v8_c1_q9",
        "type": "short_answer",
        "text": "Trận chiến trên sông Bạch Đằng năm 938 gắn liền với vị tướng lĩnh nào?",
        "options": [],
        "correct": "Ngô Quyền",
        "explanation": "Ngô Quyền đánh tan quân Nam Hán."
      },
      {
        "id": "v8_c1_q10",
        "type": "essay",
        "text": "Em hãy nêu ngắn gọn lòng yêu nước nồng nàn và tinh thần quyết chiến của Trần Quốc Tuấn thể hiện qua đoạn trích 'Hịch tướng sĩ'.",
        "options": [],
        "correct": "Lòng yêu nước của ông thể hiện ở nỗi đau đáu 'quên ăn, nửa đêm vỗ gối, ruột đau như cắt, nước mắt đầm đìa', căm thù giặc tột cùng, sẵn sàng 'xả thịt lột da, nuốt gan uống máu quân thù' để bảo vệ bờ cõi xã tắc non sông.",
        "explanation": "Dẫn chứng tâm trạng đau xót và ý chí căm thù giặc của vị chủ tướng."
      }
    ]
  },
  {
    "id": "van8_ch2",
    "title": "Ngữ Văn 8 - Chương 2: Vẻ đẹp cổ điển",
    "subject": "Ngữ Văn",
    "grade": 8,
    "chapter": 2,
    "questions": [
      {
        "id": "v8_c2_q1",
        "type": "mcq",
        "text": "Bài thơ \"Thu điếu\" (Câu cá mùa thu) của tác giả nào?",
        "options": [
          "Nguyễn Khuyến",
          "Nguyễn Trãi",
          "Hồ Xuân Hương",
          "Nguyễn Du"
        ],
        "correct": "Nguyễn Khuyến",
        "explanation": "Nguyễn Khuyến là tác giả chùm thơ thu, trong đó có Thu điếu."
      },
      {
        "id": "v8_c2_q2",
        "type": "true_false",
        "text": "Nguyễn Khuyến được mệnh danh là \"nhà thơ của làng cảnh Việt Nam\".",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Thơ ông viết rất hay và chân thực về cảnh sắc nông thôn Bắc Bộ."
      },
      {
        "id": "v8_c2_q3",
        "type": "fill_blank",
        "text": "Ao thu lạnh lẽo nước trong veo / Một chiếc thuyền câu bé ...",
        "options": [],
        "correct": "tẻo teo",
        "explanation": "Câu thơ trong bài Thu điếu."
      },
      {
        "id": "v8_c2_q4",
        "type": "mcq",
        "text": "Bài thơ \"Thu điếu\" được viết theo thể thơ nào?",
        "options": [
          "Thất ngôn bát cú Đường luật",
          "Lục bát",
          "Song thất lục bát",
          "Ngũ ngôn"
        ],
        "correct": "Thất ngôn bát cú Đường luật",
        "explanation": "Thể thơ đặc trưng của thi ca trung đại."
      },
      {
        "id": "v8_c2_q5",
        "type": "mcq",
        "text": "Màu sắc nào không xuất hiện trong bài \"Thu điếu\"?",
        "options": [
          "Màu đỏ (rực rỡ)",
          "Màu xanh (xanh ngắt)",
          "Màu vàng (vàng hoe)",
          "Màu trong (trong veo)"
        ],
        "correct": "Màu đỏ (rực rỡ)",
        "explanation": "Bài thơ mang gam màu xanh, dịu nhẹ, không có màu đỏ rực rỡ."
      },
      {
        "id": "v8_c2_q6",
        "type": "true_false",
        "text": "Truyện Kiều của đại thi hào Nguyễn Du được sáng tác theo thể thơ lục bát bằng chữ Nôm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Thể thơ và ngôn ngữ của Truyện Kiều."
      },
      {
        "id": "v8_c2_q7",
        "type": "fill_blank",
        "text": "Đại thi hào dân tộc, Danh nhân văn hóa thế giới tác giả Truyện Kiều là ...",
        "options": [],
        "correct": "Nguyễn Du",
        "explanation": "Nguyễn Du."
      },
      {
        "id": "v8_c2_q8",
        "type": "short_answer",
        "text": "Nhân vật Thúy Vân và Thúy Kiều là hai chị em mang họ gì?",
        "options": [],
        "correct": "Vương",
        "explanation": "Vương Thúy Kiều, Vương Thúy Vân."
      },
      {
        "id": "v8_c2_q9",
        "type": "short_answer",
        "text": "Bút pháp nghệ thuật miêu tả cảnh vật để bộc lộ tâm trạng nhân vật gọi là gì?",
        "options": [],
        "correct": "Tả cảnh ngụ tình",
        "explanation": "Nghệ thuật tả cảnh ngụ tình."
      },
      {
        "id": "v8_c2_q10",
        "type": "essay",
        "text": "Qua đoạn trích 'Chị em Thúy Kiều', nghệ thuật miêu tả ước lệ tượng trưng của Nguyễn Du được thể hiện như thế nào khi khắc họa vẻ đẹp của Thúy Kiều?",
        "options": [],
        "correct": "Nguyễn Du lấy vẻ đẹp của thiên nhiên (làn thu thủy, nét xuân sơn, hoa ghen, liễu hờn) để làm nổi bật nhan sắc sắc sảo, đằm thắm và tài hoa trí tuệ vượt trội của Thúy Kiều, đồng thời ngầm dự báo số phận trắc trở của nàng.",
        "explanation": "Phân tích nghệ thuật ước lệ và tính dự báo số phận."
      }
    ]
  },
  {
    "id": "van8_ch3",
    "title": "Ngữ Văn 8 - Chương 3: Lời sông núi",
    "subject": "Ngữ Văn",
    "grade": 8,
    "chapter": 3,
    "questions": [
      {
        "id": "v8_c3_q1",
        "type": "mcq",
        "text": "Văn bản \"Hịch tướng sĩ\" của tác giả nào?",
        "options": [
          "Trần Quốc Tuấn",
          "Lý Thường Kiệt",
          "Nguyễn Trãi",
          "Trần Quang Khải"
        ],
        "correct": "Trần Quốc Tuấn",
        "explanation": "Hưng Đạo Đại vương Trần Quốc Tuấn viết để khích lệ tướng sĩ."
      },
      {
        "id": "v8_c3_q2",
        "type": "true_false",
        "text": "\"Hịch tướng sĩ\" được viết trước cuộc kháng chiến chống quân Mông - Nguyên lần thứ 2.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Viết để động viên tinh thần quân sĩ trước giặc ngoại xâm."
      },
      {
        "id": "v8_c3_q3",
        "type": "fill_blank",
        "text": "Thể văn \"hịch\" thường được vua chúa, tướng lĩnh dùng để... quân sĩ.",
        "options": [],
        "correct": "kêu gọi",
        "explanation": "Hịch dùng để khích lệ, kêu gọi, thuyết phục."
      },
      {
        "id": "v8_c3_q4",
        "type": "mcq",
        "text": "Mục đích chính của \"Hịch tướng sĩ\" là gì?",
        "options": [
          "Khơi dậy lòng yêu nước, căm thù giặc và khích lệ tinh thần học tập Binh thư yếu lược",
          "Ca ngợi vẻ đẹp đất nước",
          "Kể lại chiến công của tác giả",
          "Bàn về đạo lý làm người"
        ],
        "correct": "Khơi dậy lòng yêu nước, căm thù giặc và khích lệ tinh thần học tập Binh thư yếu lược",
        "explanation": "Đó là mục đích thiết thực và sâu xa của bài hịch."
      },
      {
        "id": "v8_c3_q5",
        "type": "mcq",
        "text": "Đặc điểm nổi bật trong nghệ thuật lập luận của bài Hịch là gì?",
        "options": [
          "Chặt chẽ, sắc bén, kết hợp hài hòa giữa lí lẽ và tình cảm",
          "Chỉ dùng lý trí khô khan",
          "Lời lẽ nhẹ nhàng, bay bổng",
          "Cốt truyện li kì, hấp dẫn"
        ],
        "correct": "Chặt chẽ, sắc bén, kết hợp hài hòa giữa lí lẽ và tình cảm",
        "explanation": "Sức thuyết phục mạnh mẽ từ sự kết hợp giữa lí và tình."
      },
      {
        "id": "v8_c3_q6",
        "type": "true_false",
        "text": "'Nam quốc sơn hà' được coi là bản Tuyên ngôn Độc lập đầu tiên của dân tộc Việt Nam.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Giá trị lịch sử của bài thơ Thần Nam quốc sơn hà."
      },
      {
        "id": "v8_c3_q7",
        "type": "fill_blank",
        "text": "Bài thơ 'Nam quốc sơn hà' tương truyền do danh tướng ... đọc trên phòng tuyến sông Như Nguyệt.",
        "options": [],
        "correct": "Lý Thường Kiệt",
        "explanation": "Danh tướng Lý Thường Kiệt."
      },
      {
        "id": "v8_c3_q8",
        "type": "short_answer",
        "text": "Địa danh nào gắn liền với phòng tuyến chống quân Tống xâm lược của Lý Thường Kiệt?",
        "options": [],
        "correct": "Sông Như Nguyệt",
        "explanation": "Sông Như Nguyệt (sông Cầu)."
      },
      {
        "id": "v8_c3_q9",
        "type": "short_answer",
        "text": "Bản tuyên ngôn độc lập thứ hai của nước ta là tác phẩm nào của Nguyễn Trãi?",
        "options": [],
        "correct": "Bình Ngô đại cáo",
        "explanation": "Bình Ngô đại cáo (1428)."
      },
      {
        "id": "v8_c3_q10",
        "type": "essay",
        "text": "Hai câu đầu bài thơ Nam quốc sơn hà: 'Nam quốc sơn hà Nam đế cư / Tiệt nhiên định phận tại thiên thư' khẳng định chân lý thiêng liêng nào?",
        "options": [],
        "correct": "Hai câu thơ khẳng định chủ quyền lãnh thổ thiêng liêng, bất khả xâm phạm của nước Nam, vua Nam cai quản, điều đó đã được ghi rõ rệt tại sách trời không kẻ thù nào có thể phủ nhận.",
        "explanation": "Nêu bật tính khẳng định chủ quyền độc lập và ranh giới bờ cõi."
      }
    ]
  },
  {
    "id": "toan9_ch1",
    "title": "Toán 9 - Chương 1: Phương trình và hệ phương trình bậc nhất",
    "subject": "Toán",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "t9_c1_q1",
        "type": "mcq",
        "text": "Phương trình bậc nhất hai ẩn có dạng tổng quát là gì?",
        "options": [
          "ax + by = c (a, b không đồng thời bằng 0)",
          "ax^2 + bx + c = 0",
          "y = ax + b",
          "ax + b = 0"
        ],
        "correct": "ax + by = c (a, b không đồng thời bằng 0)",
        "explanation": "Định nghĩa phương trình bậc nhất hai ẩn."
      },
      {
        "id": "t9_c1_q2",
        "type": "true_false",
        "text": "Hệ phương trình bậc nhất hai ẩn có thể có vô số nghiệm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nếu hai đường thẳng biểu diễn trùng nhau thì hệ có vô số nghiệm."
      },
      {
        "id": "t9_c1_q3",
        "type": "fill_blank",
        "text": "Cặp số (1; 2) là một nghiệm của phương trình 2x + y = ...",
        "options": [],
        "correct": "4",
        "explanation": "Thay x=1, y=2 vào: 2(1) + 2 = 4."
      },
      {
        "id": "t9_c1_q4",
        "type": "mcq",
        "text": "Phương pháp nào thường dùng để giải hệ phương trình bậc nhất hai ẩn?",
        "options": [
          "Phương pháp thế và phương pháp cộng đại số",
          "Phương pháp đặt ẩn phụ",
          "Phương pháp nhóm hạng tử",
          "Phương pháp phân tích đa thức thành nhân tử"
        ],
        "correct": "Phương pháp thế và phương pháp cộng đại số",
        "explanation": "Đây là hai phương pháp cơ bản nhất."
      },
      {
        "id": "t9_c1_q5",
        "type": "mcq",
        "text": "Hai đường thẳng cắt nhau thì hệ phương trình tương ứng có bao nhiêu nghiệm?",
        "options": [
          "1 nghiệm duy nhất",
          "Vô nghiệm",
          "Vô số nghiệm",
          "2 nghiệm"
        ],
        "correct": "1 nghiệm duy nhất",
        "explanation": "Mỗi giao điểm biểu diễn một nghiệm của hệ."
      },
      {
        "id": "t9_c1_q6",
        "type": "true_false",
        "text": "Hệ phương trình bậc nhất hai ẩn có thể có nghiệm duy nhất, vô nghiệm hoặc vô số nghiệm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Ba vị trí tương đối của hai đường thẳng biểu diễn nghiệm."
      },
      {
        "id": "t9_c1_q7",
        "type": "fill_blank",
        "text": "Hai phương pháp đại số cơ bản nhất để giải hệ phương trình bậc nhất hai ẩn là phương pháp thế và phương pháp cộng...",
        "options": [],
        "correct": "đại số",
        "explanation": "Phương pháp cộng đại số."
      },
      {
        "id": "t9_c1_q8",
        "type": "short_answer",
        "text": "Giải phương trình 2x - 6 = 0. Nghiệm x =",
        "options": [],
        "correct": "3",
        "explanation": "2x = 6 => x = 3."
      },
      {
        "id": "t9_c1_q9",
        "type": "short_answer",
        "text": "Cặp số (x; y) = (1; 2) có phải là nghiệm của phương trình x + y = 3 không? (Trả lời: Có hoặc Không)",
        "options": [],
        "correct": "Có",
        "explanation": "1 + 2 = 3 (thỏa mãn)."
      },
      {
        "id": "t9_c1_q10",
        "type": "essay",
        "text": "Giải hệ phương trình sau bằng phương pháp thế hoặc cộng đại số: { x + y = 5; 2x - y = 1 }",
        "options": [],
        "correct": "Cộng hai phương trình vế theo vế: (x + y) + (2x - y) = 5 + 1 <=> 3x = 6 => x = 2. Thay x = 2 vào x + y = 5 ta được y = 3. Vậy nghiệm của hệ là (x; y) = (2; 3).",
        "explanation": "Dùng phương pháp cộng đại số để triệt tiêu biến y rồi tìm x và y."
      }
    ]
  },
  {
    "id": "toan9_ch2",
    "title": "Toán 9 - Chương 2: Phương trình và bất phương trình bậc nhất một ẩn",
    "subject": "Toán",
    "grade": 9,
    "chapter": 2,
    "questions": [
      {
        "id": "t9_c2_q1",
        "type": "mcq",
        "text": "Bất phương trình bậc nhất một ẩn có dạng nào sau đây?",
        "options": [
          "ax + b < 0 (hoặc >, <=, >=) với a khác 0",
          "ax^2 + bx + c > 0",
          "ax + by > c",
          "x^3 - 1 < 0"
        ],
        "correct": "ax + b < 0 (hoặc >, <=, >=) với a khác 0",
        "explanation": "Dạng tổng quát của bất phương trình bậc nhất một ẩn."
      },
      {
        "id": "t9_c2_q2",
        "type": "true_false",
        "text": "Khi nhân hai vế của một bất phương trình với cùng một số âm, ta phải giữ nguyên chiều bất phương trình.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Khi nhân với số âm, ta phải đổi chiều bất phương trình."
      },
      {
        "id": "t9_c2_q3",
        "type": "fill_blank",
        "text": "Nghiệm của bất phương trình 2x > 6 là x > ...",
        "options": [],
        "correct": "3",
        "explanation": "Chia 2 vế cho 2 (số dương), ta được x > 3."
      },
      {
        "id": "t9_c2_q4",
        "type": "mcq",
        "text": "Tập nghiệm của bất phương trình x >= 2 biểu diễn trên trục số là:",
        "options": [
          "Nửa đường thẳng gốc 2, lấy cả điểm 2",
          "Nửa đường thẳng gốc 2, không lấy điểm 2",
          "Đoạn thẳng từ 0 đến 2",
          "Khoảng từ -vô cực đến 2"
        ],
        "correct": "Nửa đường thẳng gốc 2, lấy cả điểm 2",
        "explanation": "Dấu ngoặc vuông tại 2 và phần lấy nằm bên phải."
      },
      {
        "id": "t9_c2_q5",
        "type": "mcq",
        "text": "Hai bất phương trình tương đương là hai bất phương trình:",
        "options": [
          "Có cùng tập nghiệm",
          "Cùng bậc",
          "Cùng ẩn số",
          "Có cùng hệ số a"
        ],
        "correct": "Có cùng tập nghiệm",
        "explanation": "Định nghĩa hai bất phương trình tương đương."
      },
      {
        "id": "t9_c2_q6",
        "type": "true_false",
        "text": "Khi nhân cả hai vế của bất đẳng thức với một số âm, ta phải đổi chiều bất đẳng thức.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tính chất liên hệ giữa thứ tự và phép nhân với số âm."
      },
      {
        "id": "t9_c2_q7",
        "type": "fill_blank",
        "text": "Nghiệm của bất phương trình 2x > 6 là x > ...",
        "options": [],
        "correct": "3",
        "explanation": "Chia cả hai vế cho 2: x > 3."
      },
      {
        "id": "t9_c2_q8",
        "type": "short_answer",
        "text": "Số nguyên dương lớn nhất thỏa mãn bất phương trình x < 5 là số mấy?",
        "options": [],
        "correct": "4",
        "explanation": "Số nguyên nhỏ hơn 5 lớn nhất là 4."
      },
      {
        "id": "t9_c2_q9",
        "type": "short_answer",
        "text": "Tìm nghiệm nguyên của phương trình: 3x + 1 = 10. x =",
        "options": [],
        "correct": "3",
        "explanation": "3x = 9 => x = 3."
      },
      {
        "id": "t9_c2_q10",
        "type": "essay",
        "text": "Một công ty vận tải tính cước phí taxi gồm 10.000 đồng mở cửa và 12.000 đồng cho mỗi kilômét tiếp theo. Bạn Nam mang theo 100.000 đồng. Hỏi Nam có thể đi được quãng đường tối đa là bao nhiêu kilômét?",
        "options": [],
        "correct": "Gọi quãng đường là x (km, x > 0). Số tiền cước là: 10.000 + 12.000 * x <= 100.000 => 12.000 * x <= 90.000 => x <= 7.5 km. Vậy Nam có thể đi tối đa 7.5 km.",
        "explanation": "Thiết lập bất phương trình bậc nhất một ẩn và giải tìm x."
      }
    ]
  },
  {
    "id": "toan9_ch3",
    "title": "Toán 9 - Chương 3: Căn thức bậc hai và căn thức bậc ba",
    "subject": "Toán",
    "grade": 9,
    "chapter": 3,
    "questions": [
      {
        "id": "t9_c3_q1",
        "type": "mcq",
        "text": "Điều kiện xác định của biểu thức căn bậc hai của A là gì?",
        "options": [
          "A >= 0",
          "A > 0",
          "A khác 0",
          "Mọi số thực A"
        ],
        "correct": "A >= 0",
        "explanation": "Căn bậc hai chỉ xác định với biểu thức không âm."
      },
      {
        "id": "t9_c3_q2",
        "type": "true_false",
        "text": "Căn bậc hai của (a^2) luôn bằng a.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Căn bậc hai của (a^2) bằng giá trị tuyệt đối của a."
      },
      {
        "id": "t9_c3_q3",
        "type": "fill_blank",
        "text": "Căn bậc ba của -8 là...",
        "options": [],
        "correct": "-2",
        "explanation": "(-2)^3 = -8."
      },
      {
        "id": "t9_c3_q4",
        "type": "mcq",
        "text": "Tính căn bậc hai của 16 * 25 ta được kết quả là:",
        "options": [
          "20",
          "40",
          "100",
          "10"
        ],
        "correct": "20",
        "explanation": "Căn(16) * Căn(25) = 4 * 5 = 20."
      },
      {
        "id": "t9_c3_q5",
        "type": "mcq",
        "text": "Khử mẫu của biểu thức lấy căn: căn(1/2) bằng:",
        "options": [
          "căn(2)/2",
          "1/2",
          "căn(2)",
          "1"
        ],
        "correct": "căn(2)/2",
        "explanation": "Nhân tử và mẫu với 2 dưới căn."
      },
      {
        "id": "t9_c3_q6",
        "type": "true_false",
        "text": "Căn bậc hai của một số a không âm được xác định khi và chỉ khi a >= 0.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Điều kiện xác định của căn bậc hai số học."
      },
      {
        "id": "t9_c3_q7",
        "type": "fill_blank",
        "text": "Căn bậc ba của số -27 bằng...",
        "options": [],
        "correct": "-3",
        "explanation": "(-3)^3 = -27."
      },
      {
        "id": "t9_c3_q8",
        "type": "short_answer",
        "text": "Tính giá trị: sqrt(16) + sqrt(9) =",
        "options": [],
        "correct": "7",
        "explanation": "4 + 3 = 7."
      },
      {
        "id": "t9_c3_q9",
        "type": "short_answer",
        "text": "Rút gọn biểu thức sqrt(x^2) với x < 0. Kết quả là:",
        "options": [],
        "correct": "-x",
        "explanation": "Căn bậc hai của x^2 bằng |x| = -x khi x < 0."
      },
      {
        "id": "t9_c3_q10",
        "type": "essay",
        "text": "Rút gọn biểu thức: P = sqrt(8) - 2*sqrt(18) + sqrt(50)",
        "options": [],
        "correct": "Ta có: sqrt(8) = 2*sqrt(2); 2*sqrt(18) = 2*3*sqrt(2) = 6*sqrt(2); sqrt(50) = 5*sqrt(2). Vậy P = 2*sqrt(2) - 6*sqrt(2) + 5*sqrt(2) = (2 - 6 + 5)*sqrt(2) = sqrt(2).",
        "explanation": "Đưa thừa số ra ngoài dấu căn và cộng trừ các căn thức đồng dạng."
      }
    ]
  },
  {
    "id": "van9_ch1",
    "title": "Ngữ Văn 9 - Chương 1: Khúc tráng ca",
    "subject": "Ngữ Văn",
    "grade": 9,
    "chapter": 1,
    "questions": [
      {
        "id": "v9_c1_q1",
        "type": "mcq",
        "text": "Bài thơ \"Đồng chí\" là của tác giả nào?",
        "options": [
          "Chính Hữu",
          "Phạm Tiến Duật",
          "Quang Dũng",
          "Tố Hữu"
        ],
        "correct": "Chính Hữu",
        "explanation": "Bài thơ Đồng chí do nhà thơ Chính Hữu sáng tác."
      },
      {
        "id": "v9_c1_q2",
        "type": "true_false",
        "text": "Cơ sở hình thành tình đồng chí trong bài thơ là từ sự chung hoàn cảnh xuất thân.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Từ những miền quê nghèo khó, họ cùng chung lý tưởng và nhiệm vụ."
      },
      {
        "id": "v9_c1_q3",
        "type": "fill_blank",
        "text": "Đầu súng trăng ...",
        "options": [],
        "correct": "treo",
        "explanation": "Hình ảnh thơ tuyệt đẹp ở cuối bài thơ Đồng chí."
      },
      {
        "id": "v9_c1_q4",
        "type": "mcq",
        "text": "Hình ảnh \"Đầu súng trăng treo\" mang ý nghĩa gì?",
        "options": [
          "Biểu tượng của vẻ đẹp tâm hồn lính và sự kết hợp giữa hiện thực và lãng mạn",
          "Nói về sự khó khăn của thời tiết",
          "Chỉ nói về một đêm sáng trăng",
          "Thể hiện sự mệt mỏi của người lính"
        ],
        "correct": "Biểu tượng của vẻ đẹp tâm hồn lính và sự kết hợp giữa hiện thực và lãng mạn",
        "explanation": "Biểu tượng cao đẹp của tình đồng chí, hòa bình và chiến tranh."
      },
      {
        "id": "v9_c1_q5",
        "type": "mcq",
        "text": "Bài thơ \"Đồng chí\" sáng tác vào thời kì nào?",
        "options": [
          "Kháng chiến chống Pháp",
          "Kháng chiến chống Mỹ",
          "Sau năm 1975",
          "Trước Cách mạng tháng Tám"
        ],
        "correct": "Kháng chiến chống Pháp",
        "explanation": "Sáng tác năm 1948, thời kì đầu cuộc kháng chiến chống Pháp."
      },
      {
        "id": "v9_c1_q6",
        "type": "true_false",
        "text": "Bài thơ 'Đồng chí' của Chính Hữu viết về tình cảm keo sơn gắn bó của những người lính nông dân trong thời kì kháng chiến chống Pháp.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Bối cảnh sáng tác bài thơ Đồng chí năm 1948."
      },
      {
        "id": "v9_c1_q7",
        "type": "fill_blank",
        "text": "Bài thơ 'Bài thơ về tiểu đội xe không kính' là sáng tác tiêu biểu của nhà thơ ...",
        "options": [],
        "correct": "Phạm Tiến Duật",
        "explanation": "Nhà thơ Phạm Tiến Duật."
      },
      {
        "id": "v9_c1_q8",
        "type": "short_answer",
        "text": "Những người lính trong 'Bài thơ về tiểu đội xe không kính' chiến đấu trên tuyến đường huyền thoại nào?",
        "options": [],
        "correct": "Trường Sơn",
        "explanation": "Đường Trường Sơn / Đường Hồ Chí Minh."
      },
      {
        "id": "v9_c1_q9",
        "type": "short_answer",
        "text": "Hình ảnh nào khép lại bài thơ 'Bài thơ về tiểu đội xe không kính': 'Chỉ cần trong xe có một...'?",
        "options": [],
        "correct": "trái tim",
        "explanation": "Chỉ cần trong xe có một trái tim."
      },
      {
        "id": "v9_c1_q10",
        "type": "essay",
        "text": "Vẻ đẹp nổi bật nhất của những người lính lái xe trong 'Bài thơ về tiểu đội xe không kính' là gì?",
        "options": [],
        "correct": "Đó là tư thế hiên ngang, tinh thần lạc quan, sôi nổi, bất chấp mọi hiểm nguy gian khổ, và trên hết là ý chí chiến đấu sắt đá giải phóng miền Nam thống nhất đất nước.",
        "explanation": "Nêu bật tinh thần dũng cảm, lạc quan và lòng yêu nước cháy bỏng."
      }
    ]
  },
  {
    "id": "van9_ch2",
    "title": "Ngữ Văn 9 - Chương 2: Cảnh quan quê hương",
    "subject": "Ngữ Văn",
    "grade": 9,
    "chapter": 2,
    "questions": [
      {
        "id": "v9_c2_q1",
        "type": "mcq",
        "text": "Bài thơ \"Đoàn thuyền đánh cá\" của tác giả nào?",
        "options": [
          "Huy Cận",
          "Tế Hanh",
          "Chế Lan Viên",
          "Xuân Diệu"
        ],
        "correct": "Huy Cận",
        "explanation": "Tác giả là nhà thơ Huy Cận."
      },
      {
        "id": "v9_c2_q2",
        "type": "true_false",
        "text": "Đoàn thuyền đánh cá ra khơi vào buổi sáng sớm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Đoàn thuyền ra khơi khi hoàng hôn xuống (Mặt trời xuống biển như hòn lửa)."
      },
      {
        "id": "v9_c2_q3",
        "type": "fill_blank",
        "text": "Mặt trời xuống biển như hòn ...",
        "options": [],
        "correct": "lửa",
        "explanation": "Câu thơ mở đầu bài Đoàn thuyền đánh cá."
      },
      {
        "id": "v9_c2_q4",
        "type": "mcq",
        "text": "Bài thơ \"Đoàn thuyền đánh cá\" mang âm hưởng gì?",
        "options": [
          "Khỏe khoắn, hào hùng, vui tươi",
          "Buồn bã, cô đơn",
          "Thanh tĩnh, nhẹ nhàng",
          "Bi tráng, trầm hùng"
        ],
        "correct": "Khỏe khoắn, hào hùng, vui tươi",
        "explanation": "Là khúc ca lao động đầy tự hào."
      },
      {
        "id": "v9_c2_q5",
        "type": "mcq",
        "text": "Cảm hứng chủ đạo của bài thơ \"Đoàn thuyền đánh cá\" là gì?",
        "options": [
          "Cảm hứng về thiên nhiên vũ trụ và con người lao động mới",
          "Tình yêu đôi lứa",
          "Tình cảm gia đình",
          "Nỗi nhớ quê hương"
        ],
        "correct": "Cảm hứng về thiên nhiên vũ trụ và con người lao động mới",
        "explanation": "Khắc họa sự hòa hợp giữa thiên nhiên hùng vĩ và con người làm chủ biển khơi."
      },
      {
        "id": "v9_c2_q6",
        "type": "true_false",
        "text": "Truyện ngắn 'Làng' của Kim Lân thể hiện thành công tình yêu làng quê luôn hòa quyện và thống nhất với tình yêu nước của người nông dân.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Chủ đề tư tưởng của truyện ngắn Làng."
      },
      {
        "id": "v9_c2_q7",
        "type": "fill_blank",
        "text": "Nhân vật chính trong truyện ngắn 'Làng' của nhà văn Kim Lân là ông ...",
        "options": [],
        "correct": "Hai",
        "explanation": "Nhân vật ông Hai."
      },
      {
        "id": "v9_c2_q8",
        "type": "short_answer",
        "text": "Làng quê mà ông Hai luôn tự hào và yêu quý có tên là gì?",
        "options": [],
        "correct": "Làng Chợ Dầu",
        "explanation": "Làng Chợ Dầu."
      },
      {
        "id": "v9_c2_q9",
        "type": "short_answer",
        "text": "Khi nghe tin làng Chợ Dầu theo giặc, tâm trạng ông Hai như thế nào? (Vui mừng hay Đau đớn bẽ bàng)",
        "options": [],
        "correct": "Đau đớn bẽ bàng",
        "explanation": "Ông Hai sững sờ, xấu hổ và đau đớn tột cùng."
      },
      {
        "id": "v9_c2_q10",
        "type": "essay",
        "text": "Ý nghĩa câu nói nổi tiếng của ông Hai: 'Làng thì yêu thật, nhưng làng theo Tây mất rồi thì phải thù'?",
        "options": [],
        "correct": "Câu nói thể hiện bước chuyển biến lớn trong nhận thức của người nông dân: Tình yêu làng dù sâu đậm đến đâu cũng phải đặt dưới tình yêu đất nước và lòng trung thành với cuộc kháng chiến cách mạng.",
        "explanation": "Khẳng định tinh thần yêu nước đặt lên trên tình yêu làng xóm cá nhân."
      }
    ]
  },
  {
    "id": "van9_ch3",
    "title": "Ngữ Văn 9 - Chương 3: Tiếng gọi thiên nhiên",
    "subject": "Ngữ Văn",
    "grade": 9,
    "chapter": 3,
    "questions": [
      {
        "id": "v9_c3_q1",
        "type": "mcq",
        "text": "Bài thơ \"Mùa xuân nho nhỏ\" của tác giả nào?",
        "options": [
          "Thanh Hải",
          "Viễn Phương",
          "Hữu Thỉnh",
          "Y Phương"
        ],
        "correct": "Thanh Hải",
        "explanation": "Bài thơ do Thanh Hải sáng tác những ngày cuối đời."
      },
      {
        "id": "v9_c3_q2",
        "type": "true_false",
        "text": "Hình ảnh \"mùa xuân nho nhỏ\" là một ẩn dụ chỉ những cống hiến thầm lặng của mỗi người cho đất nước.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Thể hiện khát vọng cống hiến chân thành, không khoa trương."
      },
      {
        "id": "v9_c3_q3",
        "type": "fill_blank",
        "text": "Mọc giữa dòng sông xanh / Một bông hoa ... biếc",
        "options": [],
        "correct": "tím",
        "explanation": "Màu tím đặc trưng của xứ Huế."
      },
      {
        "id": "v9_c3_q4",
        "type": "mcq",
        "text": "Nhạc điệu của bài thơ \"Mùa xuân nho nhỏ\" mang âm hưởng của làn điệu dân ca nào?",
        "options": [
          "Dân ca Nam Bộ",
          "Dân ca Quan họ",
          "Dân ca Huế",
          "Hát xoan"
        ],
        "correct": "Dân ca Huế",
        "explanation": "Mang âm hưởng nhẹ nhàng, tha thiết của ca Huế."
      },
      {
        "id": "v9_c3_q5",
        "type": "mcq",
        "text": "Tâm nguyện của nhà thơ trong \"Mùa xuân nho nhỏ\" là gì?",
        "options": [
          "Muốn làm con chim hót, cành hoa, nốt trầm xao xuyến để dâng hiến cho đời",
          "Muốn đi khắp nơi để ngắm cảnh",
          "Muốn trở về tuổi thơ",
          "Muốn sống một cuộc đời giàu sang"
        ],
        "correct": "Muốn làm con chim hót, cành hoa, nốt trầm xao xuyến để dâng hiến cho đời",
        "explanation": "Khát vọng cống hiến thiết tha, cảm động."
      },
      {
        "id": "v9_c3_q6",
        "type": "true_false",
        "text": "Văn bản 'Lặng lẽ Sa Pa' của Nguyễn Thành Long ngợi ca vẻ đẹp của những con người lao động thầm lặng cống hiến cho Tổ quốc.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Giá trị tư tưởng của Lặng lẽ Sa Pa."
      },
      {
        "id": "v9_c3_q7",
        "type": "fill_blank",
        "text": "Nhân vật anh thanh niên trong 'Lặng lẽ Sa Pa' làm công tác khí tượng kiêm vật lí địa cầu trên đỉnh núi ... cao 2600m.",
        "options": [],
        "correct": "Yên Sơn",
        "explanation": "Đỉnh Yên Sơn."
      },
      {
        "id": "v9_c3_q8",
        "type": "short_answer",
        "text": "Người họa sĩ già trong truyện 'Lặng lẽ Sa Pa' muốn vẽ bức chân dung của ai?",
        "options": [],
        "correct": "Anh thanh niên",
        "explanation": "Vẽ chân dung anh thanh niên."
      },
      {
        "id": "v9_c3_q9",
        "type": "short_answer",
        "text": "Món quà mà anh thanh niên gửi tặng cho bác lái xe và đoàn khách trước khi chia tay là gì? (Một làn trứng hay Một bông hoa)",
        "options": [],
        "correct": "Một làn trứng",
        "explanation": "Một làn trứng gà tươi và hoa."
      },
      {
        "id": "v9_c3_q10",
        "type": "essay",
        "text": "Lối sống và tinh thần trách nhiệm với công việc của nhân vật anh thanh niên trong 'Lặng lẽ Sa Pa' để lại cho thế hệ trẻ ngày nay bài học gì?",
        "options": [],
        "correct": "Bài học về lối sống có lý tưởng cao đẹp, say mê với công việc, sẵn sàng cống hiến âm thầm không màng danh lợi, biết sắp xếp cuộc sống ngăn nắp, lạc quan và luôn mở lòng yêu thương con người.",
        "explanation": "Liên hệ bài học lý tưởng cống hiến và trách nhiệm của tuổi trẻ."
      }
    ]
  },
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
      },
      {
        "id": "a6_c1_q6",
        "type": "true_false",
        "text": "In English, we use the Present Simple tense to talk about daily routines and habits.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Thì hiện tại đơn dùng để diễn tả thói quen hàng ngày."
      },
      {
        "id": "a6_c1_q7",
        "type": "fill_blank",
        "text": "Students usually wear a school ... when they go to school in Vietnam.",
        "options": [],
        "correct": "uniform",
        "explanation": "school uniform: đồng phục học sinh."
      },
      {
        "id": "a6_c1_q8",
        "type": "short_answer",
        "text": "What subject do students learn about numbers, calculations and geometry?",
        "options": [],
        "correct": "Math",
        "explanation": "Môn Toán (Math / Maths)."
      },
      {
        "id": "a6_c1_q9",
        "type": "short_answer",
        "text": "Give the correct form of the verb: She (study) ______ English every Monday.",
        "options": [],
        "correct": "studies",
        "explanation": "Chủ ngữ She ngôi thứ 3 số ít: study -> studies."
      },
      {
        "id": "a6_c1_q10",
        "type": "essay",
        "text": "Write 3-4 sentences in English introducing your favorite room or subject at school.",
        "options": [],
        "correct": "My favorite subject at school is English. I enjoy learning new vocabulary and speaking with my teacher. My school also has a big library where I can read books during break time.",
        "explanation": "Viết đúng ngữ pháp, sử dụng từ vựng chủ đề trường học."
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
      },
      {
        "id": "k6_c1_q6",
        "type": "true_false",
        "text": "Kính lúp và kính hiển vi quang học là những dụng cụ dùng để quan sát các vật thể có kích thước rất nhỏ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Công dụng của kính lúp và kính hiển vi."
      },
      {
        "id": "k6_c1_q7",
        "type": "fill_blank",
        "text": "Đơn vị đo khối lượng chính thức trong hệ đo lường quốc tế (SI) là ...",
        "options": [],
        "correct": "kilôgam",
        "explanation": "Kí hiệu kg (kilôgam)."
      },
      {
        "id": "k6_c1_q8",
        "type": "short_answer",
        "text": "Dụng cụ nào trong phòng thí nghiệm dùng để đo thể tích chất lỏng: Bình chia độ hay Nhiệt kế?",
        "options": [],
        "correct": "Bình chia độ",
        "explanation": "Bình chia độ đo thể tích chất lỏng."
      },
      {
        "id": "k6_c1_q9",
        "type": "short_answer",
        "text": "Đổi đơn vị: 1 mét bằng bao nhiêu centimét (cm)?",
        "options": [],
        "correct": "100",
        "explanation": "1 m = 100 cm."
      },
      {
        "id": "k6_c1_q10",
        "type": "essay",
        "text": "Hãy nêu ít nhất 2 quy tắc an toàn quan trọng khi thực hành trong phòng thí nghiệm Khoa học tự nhiên.",
        "options": [],
        "correct": "1) Tuyệt đối không ăn uống, đùa nghịch trong phòng thực hành; đeo găng tay và kính bảo hộ khi tiếp xúc hóa chất. 2) Chỉ làm thí nghiệm khi có sự hướng dẫn và cho phép của giáo viên; dọn dẹp hóa chất và rửa sạch dụng cụ sau khi làm xong.",
        "explanation": "Nêu chính xác quy tắc an toàn bảo hộ và tuân thủ nội quy."
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
      },
      {
        "id": "a7_c1_q6",
        "type": "true_false",
        "text": "Collecting stamps and gardening are popular outdoor and indoor hobbies.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Sở thích phổ biến."
      },
      {
        "id": "a7_c1_q7",
        "type": "fill_blank",
        "text": "He loves taking photos, so his hobby is ...",
        "options": [],
        "correct": "photography",
        "explanation": "photography: nhiếp ảnh."
      },
      {
        "id": "a7_c1_q8",
        "type": "short_answer",
        "text": "Which verb of liking means 'enjoy very much': hate or adore?",
        "options": [],
        "correct": "adore",
        "explanation": "adore = yêu thích thiết tha."
      },
      {
        "id": "a7_c1_q9",
        "type": "short_answer",
        "text": "Complete the sentence: My brother is interested _____ playing guitar.",
        "options": [],
        "correct": "in",
        "explanation": "Cụm từ be interested in."
      },
      {
        "id": "a7_c1_q10",
        "type": "essay",
        "text": "Write a short paragraph (40-50 words) about the benefits of having a hobby.",
        "options": [],
        "correct": "Having a hobby is very important for students. It helps us relax after stressful school hours, reduces tiredness and develops our creativity. Moreover, hobbies like sports or reading help us make new friends and gain useful skills.",
        "explanation": "Nêu được lợi ích giải tỏa căng thẳng và rèn luyện kỹ năng."
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
      },
      {
        "id": "k7_c1_q6",
        "type": "true_false",
        "text": "Hạt nhân nguyên tử nằm ở tâm nguyên tử, mang điện tích dương và gồm các hạt proton và neutron.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Cấu tạo hạt nhân nguyên tử."
      },
      {
        "id": "k7_c1_q7",
        "type": "fill_blank",
        "text": "Hạt mang điện tích âm quay xung quanh hạt nhân nguyên tử là hạt ...",
        "options": [],
        "correct": "electron",
        "explanation": "Hạt electron (kí hiệu e)."
      },
      {
        "id": "k7_c1_q8",
        "type": "short_answer",
        "text": "Kí hiệu hóa học của nguyên tố Oxi là chữ cái nào?",
        "options": [],
        "correct": "O",
        "explanation": "Kí hiệu O (Oxygen)."
      },
      {
        "id": "k7_c1_q9",
        "type": "short_answer",
        "text": "Nguyên tố hóa học nào có kí hiệu là Fe?",
        "options": [],
        "correct": "Sắt",
        "explanation": "Fe là Sắt (Ferrum)."
      },
      {
        "id": "k7_c1_q10",
        "type": "essay",
        "text": "Giải thích tại sao nguyên tử lại trung hòa về điện?",
        "options": [],
        "correct": "Vì trong mỗi nguyên tử, số hạt proton mang điện tích dương (+) trong hạt nhân luôn bằng đúng số hạt electron mang điện tích âm (-) ở lớp vỏ. Tổng đại số điện tích bằng 0 nên nguyên tử trung hòa về điện.",
        "explanation": "Nêu số lượng proton bằng electron và triệt tiêu điện tích."
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
      },
      {
        "id": "a8_c1_q6",
        "type": "true_false",
        "text": "Verbs of liking such as 'fancy', 'detest', 'enjoy' are usually followed by a gerund (V-ing).",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy tắc động từ chỉ sở thích cộng V-ing."
      },
      {
        "id": "a8_c1_q7",
        "type": "fill_blank",
        "text": "DIY stands for 'Do It ...'",
        "options": [],
        "correct": "Yourself",
        "explanation": "Do It Yourself (tự tay làm lấy)."
      },
      {
        "id": "a8_c1_q8",
        "type": "short_answer",
        "text": "What is the opposite of 'relaxing': stressful or peaceful?",
        "options": [],
        "correct": "stressful",
        "explanation": "stressful (căng thẳng) trái nghĩa với relaxing (thư giãn)."
      },
      {
        "id": "a8_c1_q9",
        "type": "short_answer",
        "text": "Write the correct form: Nam detests (surf) ______ the net all day.",
        "options": [],
        "correct": "surfing",
        "explanation": "detest + V-ing -> surfing."
      },
      {
        "id": "a8_c1_q10",
        "type": "essay",
        "text": "How do you usually spend your leisure time? Write 3-5 sentences describing your favorite weekend activity.",
        "options": [],
        "correct": "In my leisure time, I usually play football with my classmates in the park. On Sunday evenings, I enjoy cooking meals with my mother. These activities help me stay healthy and bond with my family.",
        "explanation": "Kể về các hoạt động giải trí lành mạnh cuối tuần."
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
      },
      {
        "id": "k8_c1_q6",
        "type": "true_false",
        "text": "Trong một phản ứng hóa học, tổng khối lượng của các chất sản phẩm luôn bằng tổng khối lượng của các chất tham gia phản ứng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định luật bảo toàn khối lượng (Lomonosov - Lavoisier)."
      },
      {
        "id": "k8_c1_q7",
        "type": "fill_blank",
        "text": "Hiện tượng chất biến đổi mà vẫn giữ nguyên là chất ban đầu được gọi là hiện tượng ...",
        "options": [],
        "correct": "vật lí",
        "explanation": "Hiện tượng vật lí (không sinh chất mới)."
      },
      {
        "id": "k8_c1_q8",
        "type": "short_answer",
        "text": "Khi đun đường bị cháy đen khét và bốc khói, đây là hiện tượng vật lí hay hóa học?",
        "options": [],
        "correct": "Hóa học",
        "explanation": "Có chất mới màu đen (than/carbon) sinh ra."
      },
      {
        "id": "k8_c1_q9",
        "type": "short_answer",
        "text": "Cho 4g khí H2 phản ứng hết với 32g O2 tạo ra nước. Khối lượng nước tạo thành là bao nhiêu gam?",
        "options": [],
        "correct": "36",
        "explanation": "Theo định luật bảo toàn khối lượng: 4 + 32 = 36g."
      },
      {
        "id": "k8_c1_q10",
        "type": "essay",
        "text": "Nêu 3 dấu hiệu thực nghiệm nhận biết có phản ứng hóa học xảy ra.",
        "options": [],
        "correct": "Ba dấu hiệu thường gặp: 1) Có sự thay đổi màu sắc của chất. 2) Xuất hiện chất kết tủa không tan hoặc sủi bọt khí. 3) Có sự tỏa nhiệt hoặc phát sáng.",
        "explanation": "Nêu đủ các dấu hiệu tạo kết tủa, khí bay lên, đổi màu hoặc tỏa nhiệt."
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
      },
      {
        "id": "a9_c1_q6",
        "type": "true_false",
        "text": "Bat Trang is a famous traditional pottery craft village in Hanoi.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Làng gốm Bát Tràng."
      },
      {
        "id": "a9_c1_q7",
        "type": "fill_blank",
        "text": "A person who makes goods skillfully by hand is called an ...",
        "options": [],
        "correct": "artisan",
        "explanation": "artisan: nghệ nhân thủ công."
      },
      {
        "id": "a9_c1_q8",
        "type": "short_answer",
        "text": "Which phrasal verb means 'stop by a place briefly': pass down or drop by?",
        "options": [],
        "correct": "drop by",
        "explanation": "drop by: tạt qua, ghé thăm nhanh."
      },
      {
        "id": "a9_c1_q9",
        "type": "short_answer",
        "text": "Fill in the preposition: Traditional crafts are passed ______ from generation to generation.",
        "options": [],
        "correct": "down",
        "explanation": "pass down: lưu truyền qua các thế hệ."
      },
      {
        "id": "a9_c1_q10",
        "type": "essay",
        "text": "Why is it important to preserve traditional craft villages in modern society? Write a short response in English.",
        "options": [],
        "correct": "Preserving traditional craft villages is crucial because they represent our national cultural identity and history. Furthermore, craft villages attract international tourists, boost the local economy and create jobs for rural artisans.",
        "explanation": "Nêu lý do bảo tồn giá trị văn hóa và phát triển du lịch, kinh tế."
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
      },
      {
        "id": "k9_c1_q6",
        "type": "true_false",
        "text": "Cơ năng của một vật gồm hai dạng là động năng và thế năng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa cơ năng."
      },
      {
        "id": "k9_c1_q7",
        "type": "fill_blank",
        "text": "Dạng năng lượng mà một vật có được do chuyển động gọi là ... năng.",
        "options": [],
        "correct": "động",
        "explanation": "Động năng: Wd = 1/2 m v^2."
      },
      {
        "id": "k9_c1_q8",
        "type": "short_answer",
        "text": "Một vật ở độ cao càng lớn so với mặt đất thì thế năng trọng trường của nó càng lớn hay càng nhỏ?",
        "options": [],
        "correct": "càng lớn",
        "explanation": "Thế năng Wt = m*g*h tỷ lệ thuận với độ cao."
      },
      {
        "id": "k9_c1_q9",
        "type": "short_answer",
        "text": "Đơn vị đo công và cơ năng trong hệ SI là gì?",
        "options": [],
        "correct": "Joule",
        "explanation": "Kí hiệu J (Joule / Jun)."
      },
      {
        "id": "k9_c1_q10",
        "type": "essay",
        "text": "Khi một quả bóng rơi tự do từ trên cao xuống mặt đất, có sự chuyển hóa giữa các dạng cơ năng nào?",
        "options": [],
        "correct": "Trong quá trình rơi xuống, độ cao của quả bóng giảm dần nên thế năng trọng trường giảm dần, đồng thời tốc độ rơi tăng dần nên động năng tăng lên. Do đó, thế năng đã chuyển hóa dần thành động năng.",
        "explanation": "Phân tích rõ thế năng chuyển hóa thành động năng khi rơi xuống."
      }
    ]
  },
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
      },
      {
        "id": "ls6_c1_q6",
        "type": "true_false",
        "text": "Kinh tuyến gốc là đường kinh tuyến 0 độ đi qua đài thiên văn Greenwich ở thủ đô Luân Đôn (Anh).",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy ước quốc tế về kinh tuyến gốc."
      },
      {
        "id": "lsdl6_c1_q7",
        "type": "fill_blank",
        "text": "Đường vĩ tuyến dài nhất trên quả Địa Cầu là đường ... (vĩ tuyến 0 độ).",
        "options": [],
        "correct": "Xích đạo",
        "explanation": "Đường Xích đạo chia Trái Đất thành Bán cầu Bắc và Nam."
      },
      {
        "id": "lsdl6_c1_q8",
        "type": "short_answer",
        "text": "Trái Đất có dạng hình gì: Hình tròn phẳng hay Hình cầu?",
        "options": [],
        "correct": "Hình cầu",
        "explanation": "Trái Đất có dạng hình cầu."
      },
      {
        "id": "lsdl6_c1_q9",
        "type": "short_answer",
        "text": "Để xác định tọa độ địa lí của một điểm trên bản đồ, ta cần xác định kinh độ và ... độ của điểm đó.",
        "options": [],
        "correct": "vĩ",
        "explanation": "Cần kinh độ và vĩ độ."
      },
      {
        "id": "lsdl6_c1_q10",
        "type": "essay",
        "text": "Hãy nêu ý nghĩa của hệ thống lưới kinh, vĩ tuyến trên quả Địa Cầu và bản đồ địa lí.",
        "options": [],
        "correct": "Hệ thống lưới kinh, vĩ tuyến giúp con người xác định được chính xác vị trí của bất kì địa điểm nào trên bề mặt Trái Đất và hỗ trợ đắc lực cho việc định vị hàng hải, hàng không cũng như nghiên cứu bản đồ.",
        "explanation": "Nêu vai trò định vị và ứng dụng trong giao thông, nghiên cứu địa lí."
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
      },
      {
        "id": "g6_c1_q6",
        "type": "true_false",
        "text": "Tự hào về truyền thống gia đình, dòng họ là việc giữ gìn và phát huy những giá trị tốt đẹp mà thế hệ đi trước để lại.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa tự hào truyền thống."
      },
      {
        "id": "g6_c1_q7",
        "type": "fill_blank",
        "text": "Những truyền thống tốt đẹp của gia đình, dòng họ Việt Nam gồm có: hiếu học, cần cù lao động, yêu nước và nhân ...",
        "options": [],
        "correct": "ái",
        "explanation": "Lòng nhân ái thương người."
      },
      {
        "id": "g6_c1_q8",
        "type": "short_answer",
        "text": "Hành động tự ti, xấu hổ vì gia đình mình làm nghề nông nghèo khó là đúng hay sai?",
        "options": [],
        "correct": "Sai",
        "explanation": "Lao động chân chính đều đáng trân trọng."
      },
      {
        "id": "g6_c1_q9",
        "type": "short_answer",
        "text": "Câu thành ngữ 'Con hơn cha là nhà có ...' ca ngợi sự tiến bộ của thế hệ sau?",
        "options": [],
        "correct": "phúc",
        "explanation": "Con hơn cha là nhà có phúc."
      },
      {
        "id": "g6_c1_q10",
        "type": "essay",
        "text": "Là một học sinh, em cần làm gì để giữ gìn và phát huy truyền thống tốt đẹp của gia đình và dòng họ mình?",
        "options": [],
        "correct": "Em cần: Chăm ngoan, nỗ lực học tập tốt, rèn luyện đạo đức; vâng lời ông bà cha mẹ, yêu thương đoàn kết với anh chị em; tích cực tìm hiểu truyền thống nghề nghiệp hoặc nét đẹp văn hóa của dòng họ và tránh xa các tệ nạn xã hội làm tổn hại danh dự gia đình.",
        "explanation": "Nêu các hành động cụ thể trong học tập, đạo đức và hiếu thảo."
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
      },
      {
        "id": "ls7_c1_q6",
        "type": "true_false",
        "text": "Châu Âu nằm hoàn toàn ở bán cầu Bắc và có 3 mặt giáp với biển và đại dương.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Vị trí địa lí của châu Âu."
      },
      {
        "id": "ls7_c1_q7",
        "type": "fill_blank",
        "text": "Đại bộ phận diện tích châu Âu có khí hậu ... do nằm trong khu vực nội chí tuyến đến cận cực.",
        "options": [],
        "correct": "ôn đới",
        "explanation": "Khí hậu ôn đới hải dương và ôn đới lục địa chiếm phần lớn."
      },
      {
        "id": "ls7_c1_q8",
        "type": "short_answer",
        "text": "Liên minh kinh tế - chính trị lớn nhất và phát triển hàng đầu ở châu Âu viết tắt là gì?",
        "options": [],
        "correct": "EU",
        "explanation": "EU (European Union - Liên minh châu Âu)."
      },
      {
        "id": "ls7_c1_q9",
        "type": "short_answer",
        "text": "Dãy núi nào được xem là ranh giới tự nhiên giữa châu Âu và châu Á: Dãy Uran hay Dãy An-pơ?",
        "options": [],
        "correct": "Dãy Uran",
        "explanation": "Dãy núi Uran (Ural)."
      },
      {
        "id": "ls7_c1_q10",
        "type": "essay",
        "text": "Tại sao khí hậu phía tây châu Âu lại ấm áp và mưa nhiều hơn sâu trong nội địa phía đông?",
        "options": [],
        "correct": "Do phía tây châu Âu giáp với Đại Tây Dương và chịu ảnh hưởng trực tiếp của dòng biển nóng Bắc Đại Tây Dương kết hợp với gió Tây ôn đới thổi quanh năm mang nhiều hơi ẩm từ biển vào đất liền.",
        "explanation": "Phân tích tác động của dòng biển nóng và gió Tây ôn đới."
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
      },
      {
        "id": "g7_c1_q6",
        "type": "true_false",
        "text": "Truyền thống quê hương bao gồm cả truyền thống văn hóa, phong tục tập quán tốt đẹp và truyền thống đấu tranh chống giặc ngoại xâm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nội hàm truyền thống quê hương."
      },
      {
        "id": "g7_c1_q7",
        "type": "fill_blank",
        "text": "Để quảng bá truyền thống quê hương, chúng ta có thể giới thiệu các danh lam thắng cảnh và làng ... truyền thống cho bạn bè quốc tế.",
        "options": [],
        "correct": "nghề",
        "explanation": "Làng nghề truyền thống."
      },
      {
        "id": "g7_c1_q8",
        "type": "short_answer",
        "text": "Lễ hội đền Hùng diễn ra vào ngày mùng mấy tháng 3 âm lịch hàng năm?",
        "options": [],
        "correct": "10",
        "explanation": "Ngày mùng 10 tháng 3 âm lịch."
      },
      {
        "id": "g7_c1_q9",
        "type": "short_answer",
        "text": "Hành vi vứt rác bừa bãi tại các di tích lịch sử của quê hương đáng được khen ngợi hay lên án?",
        "options": [],
        "correct": "Lên án",
        "explanation": "Hành vi vi phạm bảo vệ di tích cần lên án."
      },
      {
        "id": "g7_c1_q10",
        "type": "essay",
        "text": "Hãy viết 3-4 câu giới thiệu một nét đẹp truyền thống nổi bật tại quê hương hoặc địa phương nơi em đang sinh sống.",
        "options": [],
        "correct": "Quê hương em có truyền thống hiếu học và làng nghề làm gốm lâu đời. Vào mỗi dịp xuân về, người dân trong làng lại tưng bừng tổ chức lễ hội để tôn vinh các bậc tiền nhân có công khai phá. Em luôn tự hào và sẽ cố gắng học giỏi để sau này góp phần xây dựng quê hương giàu đẹp.",
        "explanation": "Giới thiệu sinh động nét văn hóa, làng nghề hoặc lễ hội địa phương."
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
      },
      {
        "id": "ls8_c1_q6",
        "type": "true_false",
        "text": "Châu Á là châu lục có diện tích lớn nhất và dân số đông nhất trên thế giới.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đặc điểm quy mô diện tích và dân số châu Á."
      },
      {
        "id": "ls7_c1_q7",
        "type": "fill_blank",
        "text": "Đỉnh núi cao nhất thế giới nằm trên dãy Himalaya thuộc châu Á là đỉnh ...",
        "options": [],
        "correct": "Everest",
        "explanation": "Đỉnh Everest (Chomolungma) cao 8848.86m."
      },
      {
        "id": "ls8_c1_q8",
        "type": "short_answer",
        "text": "Sông nào dài nhất châu Á: Sông Mê Công hay Sông Trường Giang?",
        "options": [],
        "correct": "Sông Trường Giang",
        "explanation": "Sông Trường Giang (Dương Tử) ở Trung Quốc."
      },
      {
        "id": "ls8_c1_q9",
        "type": "short_answer",
        "text": "Khu vực Đông Nam Á và Nam Á chịu ảnh hưởng điển hình của loại gió mùa nào: Gió mùa hay Gió Tây?",
        "options": [],
        "correct": "Gió mùa",
        "explanation": "Khí hậu nhiệt đới gió mùa."
      },
      {
        "id": "ls8_c1_q10",
        "type": "essay",
        "text": "Trình bày những thuận lợi và khó khăn của đặc điểm địa hình nhiều đồi núi đối với sự phát triển kinh tế ở châu Á.",
        "options": [],
        "correct": "Thuận lợi: Giàu tài nguyên khoáng sản, tiềm năng thủy điện dồi dào, phát triển lâm nghiệp và du lịch sinh thái. Khó khăn: Giao thông đi lại hiểm trở, dễ xảy ra xói mòn, sạt lở đất lũ quét và diện tích đất canh tác đồng bằng bị chia cắt.",
        "explanation": "Nêu đầy đủ hai mặt thuận lợi về tài nguyên và khó khăn về thiên tai, giao thông."
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
      },
      {
        "id": "g8_c1_q6",
        "type": "true_false",
        "text": "Truyền thống yêu nước nồng nàn là truyền thống quý báu và cội nguồn sức mạnh lớn nhất của dân tộc Việt Nam.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Truyền thống cốt lõi của dân tộc."
      },
      {
        "id": "g8_c1_q7",
        "type": "fill_blank",
        "text": "Câu ca dao: 'Bầu ơi thương lấy bí cùng / Tuy rằng khác giống nhưng chung một ...' ca ngợi truyền thống đoàn kết tương thân tương ái.",
        "options": [],
        "correct": "giàn",
        "explanation": "Chung một giàn."
      },
      {
        "id": "g8_c1_q8",
        "type": "short_answer",
        "text": "Truyền thống tôn kính và biết ơn các thầy cô giáo được gọi là truyền thống 'Tôn sư trọng ...'?",
        "options": [],
        "correct": "đạo",
        "explanation": "Tôn sư trọng đạo."
      },
      {
        "id": "g8_c1_q9",
        "type": "short_answer",
        "text": "Tập quán nào sau đây là hủ tục lạc hậu cần xóa bỏ: Thờ cúng tổ tiên hay Mê tín bói toán?",
        "options": [],
        "correct": "Mê tín bói toán",
        "explanation": "Mê tín dị đoan là hủ tục cần bài trừ."
      },
      {
        "id": "g8_c1_q10",
        "type": "essay",
        "text": "Trong bối cảnh hội nhập quốc tế hiện nay, thế hệ trẻ cần làm gì để vừa tiếp thu tinh hoa văn hóa nhân loại vừa giữ gìn bản sắc truyền thống dân tộc?",
        "options": [],
        "correct": "Thế hệ trẻ cần có thái độ chọn lọc: Tiếp thu khoa học, công nghệ hiện đại và những tiến bộ văn minh của thế giới, đồng thời không ngừng trân trọng, gìn giữ tiếng Việt, thuần phong mỹ tục, lịch sử hào hùng và lối sống nghĩa tình của dân tộc ta; phê phán thái độ lai căng, sùng ngoại mù quáng.",
        "explanation": "Khẳng định nguyên tắc 'hòa nhập nhưng không hòa tan'."
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
      },
      {
        "id": "ls9_c1_q6",
        "type": "true_false",
        "text": "Cách mạng tháng Mười Nga năm 1917 thắng lợi đã lật đổ chính phủ tư sản lâm thời và thiết lập chính quyền Xô viết do Lênin đứng đầu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Ý nghĩa Cách mạng tháng Mười Nga."
      },
      {
        "id": "ls9_c1_q7",
        "type": "fill_blank",
        "text": "Năm 1922, Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (viết tắt là ...) chính thức được thành lập.",
        "options": [],
        "correct": "Liên Xô",
        "explanation": "Liên bang Xô viết (Liên Xô / USSR)."
      },
      {
        "id": "ls9_c1_q8",
        "type": "short_answer",
        "text": "Lãnh tụ vĩ đại lãnh đạo cuộc Cách mạng tháng Mười Nga năm 1917 là ai?",
        "options": [],
        "correct": "Lênin",
        "explanation": "V.I. Lênin."
      },
      {
        "id": "ls9_c1_q9",
        "type": "short_answer",
        "text": "Chiến thắng vang dội tại thành phố nào của Liên Xô năm 1943 đã tạo ra bước ngoặt quyết định của Thế chiến thứ hai: Stalingrad hay Moskva?",
        "options": [],
        "correct": "Stalingrad",
        "explanation": "Trận chiến Stalingrad (1942 - 1943)."
      },
      {
        "id": "ls9_c1_q10",
        "type": "essay",
        "text": "Nêu ý nghĩa lịch sử to lớn của cuộc Cách mạng tháng Mười Nga năm 1917 đối với phong trào cách mạng thế giới và Việt Nam.",
        "options": [],
        "correct": "Cách mạng tháng Mười làm rung chuyển trật tự tư bản thế giới, mở ra thời đại mới - thời đại giải phóng các dân tộc thuộc địa; đồng thời soi sáng con đường cứu nước của lãnh tụ Nguyễn Ái Quốc đi theo chủ nghĩa Mác - Lênin để giải phóng dân tộc Việt Nam.",
        "explanation": "Khẳng định bài học giải phóng dân tộc gắn liền với con đường của Bác Hồ."
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
      },
      {
        "id": "g9_c1_q6",
        "type": "true_false",
        "text": "Chí công vô tư là phẩm chất đạo đức của người luôn công bằng, không thiên vị, xuất phát từ lợi ích chung.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm phẩm chất chí công vô tư."
      },
      {
        "id": "g9_c1_q7",
        "type": "fill_blank",
        "text": "Trái ngược với chí công vô tư là thói ích kỉ, tư lợi, kéo bè kéo cánh và thiên ...",
        "options": [],
        "correct": "vị",
        "explanation": "Thiên vị, vụ lợi cá nhân."
      },
      {
        "id": "g9_c1_q8",
        "type": "short_answer",
        "text": "Tấm gương sáng ngời trọn đời cống hiến vì nước vì dân, tuyệt đối chí công vô tư của dân tộc Việt Nam là ai?",
        "options": [],
        "correct": "Chủ tịch Hồ Chí Minh",
        "explanation": "Bác Hồ là tấm gương mẫu mực về chí công vô tư."
      },
      {
        "id": "g9_c1_q9",
        "type": "short_answer",
        "text": "Một lớp trưởng bao che khuyết điểm cho bạn thân của mình có phải là biểu hiện của chí công vô tư không? (Có hay Không)",
        "options": [],
        "correct": "Không",
        "explanation": "Đó là hành vi bao che, thiên vị cá nhân."
      },
      {
        "id": "g9_c1_q10",
        "type": "essay",
        "text": "Phẩm chất chí công vô tư đem lại ý nghĩa và lợi ích gì cho tập thể và xã hội?",
        "options": [],
        "correct": "Chí công vô tư giúp mọi người tin cậy, tôn trọng lẫn nhau; tạo ra sự công bằng, đoàn kết vững mạnh trong tập thể và xã hội; hạn chế tiêu cực tham nhũng, đồng thời thúc đẩy tài năng thực chất phát triển đóng góp cho đất nước.",
        "explanation": "Nêu tác dụng củng cố lòng tin, sự đoàn kết và tiến bộ xã hội."
      }
    ]
  },
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
      },
      {
        "id": "tin6_c1_q6",
        "type": "true_false",
        "text": "Thông tin có thể được biểu diễn dưới dạng văn bản, hình ảnh hoặc âm thanh.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Ba dạng thông tin cơ bản."
      },
      {
        "id": "tin6_c1_q7",
        "type": "fill_blank",
        "text": "Thiết bị dùng để nhập dữ liệu chữ và số vào máy tính là bàn ...",
        "options": [],
        "correct": "phím",
        "explanation": "Bàn phím máy tính (Keyboard)."
      },
      {
        "id": "tin6_c1_q8",
        "type": "short_answer",
        "text": "Màn hình và máy in là thiết bị vào hay thiết bị ra của máy tính?",
        "options": [],
        "correct": "Thiết bị ra",
        "explanation": "Xuất dữ liệu hiển thị cho người dùng."
      },
      {
        "id": "tin6_c1_q9",
        "type": "short_answer",
        "text": "Bộ não xử lý trung tâm của máy tính viết tắt là gì?",
        "options": [],
        "correct": "CPU",
        "explanation": "Central Processing Unit (CPU)."
      },
      {
        "id": "tin6_c1_q10",
        "type": "essay",
        "text": "Nêu 2 tác hại của việc sử dụng máy tính hoặc điện thoại thông minh quá nhiều giờ liên tục và cách phòng tránh.",
        "options": [],
        "correct": "Tác hại: 1) Gây mỏi mắt, cận thị và cong vẹo cột sống do ngồi sai tư thế. 2) Dễ bị nghiện game mạng xã hội, lơ là việc học và giảm giao tiếp thực tế. Cách phòng tránh: Tuân thủ quy tắc 20-20-20 cho mắt nghỉ ngơi, chỉ dùng dưới 2 tiếng mỗi ngày và tích cực tham gia thể thao ngoài trời.",
        "explanation": "Nêu tác hại về thể chất, tâm lý và biện pháp cân bằng lành mạnh."
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
      },
      {
        "id": "cn6_c1_q6",
        "type": "true_false",
        "text": "Nhà ở là nơi trú ngụ, bảo vệ con người trước các tác động xấu của thời tiết và thiên nhiên.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Vai trò cơ bản của ngôi nhà."
      },
      {
        "id": "cn6_c1_q7",
        "type": "fill_blank",
        "text": "Kiểu nhà đặc trưng của đồng bào các dân tộc thiểu số vùng núi cao thường làm bằng gỗ, sàn cao hơn mặt đất là nhà ...",
        "options": [],
        "correct": "sàn",
        "explanation": "Nhà sàn truyền thống tránh thú dữ và ẩm ướt."
      },
      {
        "id": "cn6_c1_q8",
        "type": "short_answer",
        "text": "Vật liệu nào sau đây là vật liệu xây dựng nhân tạo: Cát tự nhiên hay Xi măng?",
        "options": [],
        "correct": "Xi măng",
        "explanation": "Xi măng là vật liệu qua chế biến nhân tạo."
      },
      {
        "id": "cn6_c1_q9",
        "type": "short_answer",
        "text": "Ngôi nhà thông minh (Smart home) lắp đặt hệ thống cảm ứng tự động bật tắt đèn giúp tiết kiệm cái gì?",
        "options": [],
        "correct": "Năng lượng",
        "explanation": "Tiết kiệm điện năng và chi phí."
      },
      {
        "id": "cn6_c1_q10",
        "type": "essay",
        "text": "Em hãy nêu 3 biện pháp thiết thực giúp gia đình em sử dụng năng lượng điện tiết kiệm và hiệu quả trong nhà ở.",
        "options": [],
        "correct": "1) Tắt quạt, đèn và máy điều hòa khi rời khỏi phòng. 2) Tận dụng tối đa ánh sáng mặt trời và gió tự nhiên bằng cách mở cửa sổ vào ban ngày. 3) Sử dụng bóng đèn LED tiết kiệm điện và cài đặt nhiệt độ điều hòa hợp lí từ 26-28 độ C.",
        "explanation": "Nêu các hành vi tiết kiệm điện cụ thể và khả thi."
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
      },
      {
        "id": "tin7_c1_q6",
        "type": "true_false",
        "text": "Bảng tính điện tử (như Microsoft Excel, Google Sheets) rất mạnh trong việc tính toán và vẽ biểu đồ minh họa số liệu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tính năng chính của phần mềm bảng tính."
      },
      {
        "id": "tin7_c1_q7",
        "type": "fill_blank",
        "text": "Trong phần mềm bảng tính, công thức luôn luôn phải bắt đầu bằng dấu ...",
        "options": [],
        "correct": "=",
        "explanation": "Bắt đầu bằng dấu bằng (=)."
      },
      {
        "id": "tin7_c1_q8",
        "type": "short_answer",
        "text": "Hàm tính tổng các ô trong bảng tính Excel có tên là gì?",
        "options": [],
        "correct": "SUM",
        "explanation": "Hàm SUM tính tổng."
      },
      {
        "id": "tin7_c1_q9",
        "type": "short_answer",
        "text": "Giao của một cột và một hàng trong bảng tính được gọi là gì?",
        "options": [],
        "correct": "Ô tính",
        "explanation": "Ô tính (Cell)."
      },
      {
        "id": "tin7_c1_q10",
        "type": "essay",
        "text": "Tại sao khi nhập công thức tính toán trong Excel, ta nên sử dụng địa chỉ ô (như =A1+B1) thay vì nhập trực tiếp số liệu (như =5+10)?",
        "options": [],
        "correct": "Vì khi sử dụng địa chỉ ô, nếu số liệu tại các ô A1 hoặc B1 bị thay đổi, kết quả của công thức sẽ tự động cập nhật ngay lập tức mà không cần phải viết lại công thức, giúp tiết kiệm thời gian và tránh sai sót.",
        "explanation": "Nêu tính năng tự động cập nhật linh hoạt của địa chỉ ô."
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
      },
      {
        "id": "cn7_c1_q6",
        "type": "true_false",
        "text": "Trồng trọt cung cấp lương thực, thực phẩm cho con người, thức ăn cho chăn nuôi và nguyên liệu cho công nghiệp chế biến.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Vai trò quan trọng của ngành trồng trọt."
      },
      {
        "id": "cn7_c1_q7",
        "type": "fill_blank",
        "text": "Phương pháp tưới nước hiện đại đưa từng giọt nước trực tiếp vào gốc cây giúp tiết kiệm nước tối đa là phương pháp tưới ... giọt.",
        "options": [],
        "correct": "nhỏ",
        "explanation": "Tưới nhỏ giọt công nghệ cao."
      },
      {
        "id": "cn7_c1_q8",
        "type": "short_answer",
        "text": "Loại đất nào tơi xốp, giữ nước và giữ chất dinh dưỡng tốt nhất thích hợp trồng rau củ?",
        "options": [],
        "correct": "Đất thịt",
        "explanation": "Đất thịt pha mùn."
      },
      {
        "id": "cn7_c1_q9",
        "type": "short_answer",
        "text": "Việc bón phân hóa học quá liều lượng có gây ô nhiễm nguồn nước ngầm không? (Có hay Không)",
        "options": [],
        "correct": "Có",
        "explanation": "Gây thoái hóa đất và ô nhiễm nước."
      },
      {
        "id": "cn7_c1_q10",
        "type": "essay",
        "text": "Nêu ưu điểm vượt trội của mô hình nông nghiệp công nghệ cao (trồng cây trong nhà màng, thủy canh) so với phương thức canh tác truyền thống.",
        "options": [],
        "correct": "Ưu điểm: 1) Không phụ thuộc vào thời tiết và sâu bọ bên ngoài, hạn chế tối đa sử dụng thuốc trừ sâu độc hại. 2) Tiết kiệm nước và dinh dưỡng nhờ hệ thống điều khiển tự động. 3) Năng suất cây trồng tăng cao gấp nhiều lần và tạo ra nông sản sạch, an toàn cho người tiêu dùng.",
        "explanation": "Nêu rõ tính an toàn, năng suất và tự động hóa không phụ thuộc thời tiết."
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
      },
      {
        "id": "tin8_c1_q6",
        "type": "true_false",
        "text": "ENIAC được coi là một trong những chiếc máy tính điện tử đầu tiên trên thế giới ra đời vào năm 1946.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Lịch sử máy tính thế hệ thứ nhất."
      },
      {
        "id": "tin8_c1_q7",
        "type": "fill_blank",
        "text": "Máy tính thế hệ thứ nhất sử dụng linh kiện điện tử là các bóng đèn ... chân không.",
        "options": [],
        "correct": "điện tử",
        "explanation": "Bóng đèn điện tử chân không (Vacuum tube)."
      },
      {
        "id": "tin8_c1_q8",
        "type": "short_answer",
        "text": "Sự phát minh ra linh kiện bán dẫn nào đã giúp máy tính thu nhỏ kích thước hàng ngàn lần: Bóng đèn hay Transistor?",
        "options": [],
        "correct": "Transistor",
        "explanation": "Transistor (bóng bán dẫn)."
      },
      {
        "id": "tin8_c1_q9",
        "type": "short_answer",
        "text": "Mạng máy tính toàn cầu kết nối hàng triệu thiết bị trên khắp thế giới gọi là gì?",
        "options": [],
        "correct": "Internet",
        "explanation": "Mạng Internet."
      },
      {
        "id": "tin8_c1_q10",
        "type": "essay",
        "text": "Theo em, sự phát triển vượt bậc của máy tính cá nhân và Internet đã làm thay đổi việc học tập của học sinh như thế nào?",
        "options": [],
        "correct": "Máy tính và Internet giúp học sinh tiếp cận kho tài liệu tri thức khổng lồ của nhân loại chỉ bằng vài cú nhấp chuột; học tập trực tuyến mọi lúc mọi nơi; dễ dàng trao đổi bài tập nhóm và sử dụng các công cụ mô phỏng 3D trực quan giúp việc học trở nên sinh động và hiệu quả hơn.",
        "explanation": "Nêu mặt tích cực trong tra cứu kiến thức, học từ xa và tương tác."
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
      },
      {
        "id": "cn8_c1_q6",
        "type": "true_false",
        "text": "Bản vẽ kĩ thuật được coi là 'ngôn ngữ chung' dùng trong sản xuất và đời sống kĩ thuật.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm bản vẽ kĩ thuật."
      },
      {
        "id": "cn8_c1_q7",
        "type": "fill_blank",
        "text": "Trong phương pháp chiếu vuông góc, hình chiếu thu được từ hướng nhìn từ trên xuống gọi là hình chiếu ...",
        "options": [],
        "correct": "bằng",
        "explanation": "Hình chiếu đứng (trước), hình chiếu bằng (trên), hình chiếu cạnh (trái)."
      },
      {
        "id": "cn8_c1_q8",
        "type": "short_answer",
        "text": "Hình chiếu đứng có hướng chiếu nhìn từ phía nào vào vật thể: Phía trước hay Phía trên?",
        "options": [],
        "correct": "Phía trước",
        "explanation": "Chiếu từ trước ra sau."
      },
      {
        "id": "cn8_c1_q9",
        "type": "short_answer",
        "text": "Khổ giấy vẽ tiêu chuẩn A4 có kích thước dài x rộng là bao nhiêu milimét: 297x210 hay 420x297?",
        "options": [],
        "correct": "297x210",
        "explanation": "Kích thước A4: 297 x 210 mm."
      },
      {
        "id": "cn8_c1_q10",
        "type": "essay",
        "text": "Tại sao người công nhân khi chế tạo máy móc bắt buộc phải tuân theo bản vẽ kĩ thuật?",
        "options": [],
        "correct": "Vì bản vẽ kĩ thuật chứa đựng đầy đủ và chính xác tất cả các thông tin về hình dáng, kích thước, vật liệu và yêu cầu kĩ thuật của chi tiết máy. Nếu không tuân thủ bản vẽ, chi tiết gia công sẽ bị sai kích thước và không thể lắp ráp hay vận hành được.",
        "explanation": "Giải thích tính chính xác, quy chuẩn và lắp ghép của chi tiết máy."
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
      },
      {
        "id": "tin9_c1_q6",
        "type": "true_false",
        "text": "Trí tuệ nhân tạo (AI) và Dữ liệu lớn (Big Data) là những công nghệ trụ cột của cuộc Cách mạng công nghiệp lần thứ tư (4.0).",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Trụ cột công nghệ 4.0."
      },
      {
        "id": "tin9_c1_q7",
        "type": "fill_blank",
        "text": "Việc lan truyền tin tức giả mạo, chưa kiểm chứng trên mạng xã hội là hành vi vi phạm ... mạng.",
        "options": [],
        "correct": "Luật an ninh",
        "explanation": "Luật an ninh mạng."
      },
      {
        "id": "tin9_c1_q8",
        "type": "short_answer",
        "text": "Tập hợp các quy tắc ứng xử có văn hóa trên môi trường mạng gọi là văn hóa gì?",
        "options": [],
        "correct": "Văn hóa mạng",
        "explanation": "Văn hóa ứng xử trên mạng."
      },
      {
        "id": "tin9_c1_q9",
        "type": "short_answer",
        "text": "Mật khẩu an toàn nên chứa chữ hoa, chữ thường, số và kí tự đặc biệt đúng hay sai?",
        "options": [],
        "correct": "Đúng",
        "explanation": "Tiêu chuẩn mật khẩu mạnh."
      },
      {
        "id": "tin9_c1_q10",
        "type": "essay",
        "text": "Là một công dân số có trách nhiệm, em cần làm gì để tự bảo vệ dữ liệu cá nhân của mình trên không gian mạng?",
        "options": [],
        "correct": "Em cần: 1) Không chia sẻ công khai số điện thoại, địa chỉ nhà, căn cước công dân hoặc mật khẩu lên mạng xã hội. 2) Cài đặt mật khẩu mạnh và bật xác thực hai bước (2FA). 3) Không bấm vào các đường link lạ hay tải tệp đáng ngờ từ người gửi không rõ danh tính; kiểm tra kĩ nguồn tin trước khi chia sẻ.",
        "explanation": "Nêu các biện pháp bảo mật tài khoản, quyền riêng tư và cảnh giác mã độc."
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
      },
      {
        "id": "cn9_c1_q6",
        "type": "true_false",
        "text": "Định hướng nghề nghiệp sớm giúp học sinh lựa chọn đúng con đường học tập phù hợp với sở thích, năng lực và nhu cầu thị trường lao động.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Ý nghĩa của định hướng nghề nghiệp."
      },
      {
        "id": "cn9_c1_q7",
        "type": "fill_blank",
        "text": "Ba yếu tố cốt lõi trong việc chọn nghề là: Năng lực bản thân, Sở thích và Nhu cầu của ...",
        "options": [],
        "correct": "xã hội",
        "explanation": "Mô hình chọn nghề (Sở thích - Năng lực - Thị trường)."
      },
      {
        "id": "cn9_c1_q8",
        "type": "short_answer",
        "text": "Sau khi tốt nghiệp THCS, học sinh có thể lựa chọn học tiếp lên THPT hoặc trường gì để vừa học nghề vừa học văn hóa?",
        "options": [],
        "correct": "Trường trung cấp nghề",
        "explanation": "Trường nghề / Trung cấp nghề."
      },
      {
        "id": "cn9_c1_q9",
        "type": "short_answer",
        "text": "Việc chọn nghề chỉ dựa theo ý muốn bạn bè hoặc trào lưu nhất thời là đúng hay sai?",
        "options": [],
        "correct": "Sai",
        "explanation": "Dễ dẫn đến chán nản và không phát huy được năng lực."
      },
      {
        "id": "cn9_c1_q10",
        "type": "essay",
        "text": "Để chuẩn bị tốt nhất cho nghề nghiệp tương lai của mình ngay từ khi còn học THCS, em cần rèn luyện những gì?",
        "options": [],
        "correct": "Em cần: 1) Học tập tốt các môn văn hóa nền tảng, đặc biệt là Ngoại ngữ và Tin học. 2) Chủ động khám phá sở thích, điểm mạnh và điểm yếu của bản thân. 3) Rèn luyện các kỹ năng mềm như kỹ năng làm việc nhóm, giao tiếp, tư duy giải quyết vấn đề và lối sống kỉ luật, trách nhiệm.",
        "explanation": "Nêu rõ rèn luyện kiến thức, ngoại ngữ, kỹ năng mềm và tìm hiểu bản thân."
      }
    ]
  }
];
