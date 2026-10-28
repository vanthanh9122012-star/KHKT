// Updated QUIZ_DATA with 20 questions per quiz across diverse formats (MCQ, True/False, Fill Blank, Short Answer, Essay)
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
      },
      {
        "id": "t6_c1_q11",
        "type": "mcq",
        "text": "Số La Mã XIX biểu diễn số tự nhiên nào?",
        "options": [
          "19",
          "21",
          "16",
          "29"
        ],
        "correct": "19",
        "explanation": "X = 10, IX = 9 => XIX = 19."
      },
      {
        "id": "t6_c1_q12",
        "type": "mcq",
        "text": "Viết tích 5^3 x 5^4 dưới dạng một lũy thừa:",
        "options": [
          "5^7",
          "5^12",
          "25^7",
          "5^1"
        ],
        "correct": "5^7",
        "explanation": "Khi nhân hai lũy thừa cùng cơ số: a^m * a^n = a^(m+n)."
      },
      {
        "id": "t6_c1_q13",
        "type": "mcq",
        "text": "Tập hợp M = {x thuộc N | 3 < x <= 7} gồm các phần tử:",
        "options": [
          "{4; 5; 6; 7}",
          "{3; 4; 5; 6; 7}",
          "{4; 5; 6}",
          "{3; 4; 5; 6}"
        ],
        "correct": "{4; 5; 6; 7}",
        "explanation": "Lớn hơn 3 và nhỏ hơn hoặc bằng 7."
      },
      {
        "id": "t6_c1_q14",
        "type": "true_false",
        "text": "Số tự nhiên a chia cho số tự nhiên b (b khác 0) luôn luôn chia hết.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Phép chia số tự nhiên có thể là phép chia có dư."
      },
      {
        "id": "t6_c1_q15",
        "type": "true_false",
        "text": "Lũy thừa bậc n của a kí hiệu là a^n là tích của n thừa số a.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa lũy thừa với số mũ tự nhiên."
      },
      {
        "id": "t6_c1_q16",
        "type": "fill_blank",
        "text": "Số tự nhiên nhỏ nhất có 3 chữ số khác nhau là...",
        "options": [],
        "correct": "102",
        "explanation": "Số nhỏ nhất có 3 chữ số khác nhau là 102."
      },
      {
        "id": "t6_c1_q17",
        "type": "fill_blank",
        "text": "Kết quả của phép chia 7^8 : 7^5 = 7^...",
        "options": [],
        "correct": "3",
        "explanation": "8 - 5 = 3."
      },
      {
        "id": "t6_c1_q18",
        "type": "short_answer",
        "text": "Tính giá trị của biểu thức: 100 - (20 + 30) =",
        "options": [],
        "correct": "50",
        "explanation": "100 - 50 = 50."
      },
      {
        "id": "t6_c1_q19",
        "type": "short_answer",
        "text": "Tìm x thuộc N biết: 2x + 10 = 30. x =",
        "options": [],
        "correct": "10",
        "explanation": "2x = 20 => x = 10."
      },
      {
        "id": "t6_c1_q20",
        "type": "essay",
        "text": "Một phòng học có 15 bộ bàn ghế, mỗi bộ có 2 học sinh ngồi. Hỏi cần ít nhất bao nhiêu phòng học như vậy để đủ chỗ ngồi cho 180 học sinh?",
        "options": [],
        "correct": "Mỗi phòng học chứa được số học sinh là: 15 x 2 = 30 học sinh. Số phòng học cần thiết là: 180 : 30 = 6 phòng. Đáp số: 6 phòng học.",
        "explanation": "Tính sức chứa của một phòng rồi chia tổng số học sinh."
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
      },
      {
        "id": "t6_c2_q11",
        "type": "mcq",
        "text": "Số nào sau đây vừa chia hết cho 2 vừa chia hết cho 5?",
        "options": [
          "120",
          "125",
          "124",
          "135"
        ],
        "correct": "120",
        "explanation": "Số tận cùng là 0 thì chia hết cho cả 2 và 5."
      },
      {
        "id": "t6_c2_q12",
        "type": "mcq",
        "text": "Số nào sau đây là hợp số?",
        "options": [
          "9",
          "7",
          "5",
          "3"
        ],
        "correct": "9",
        "explanation": "9 có các ước là 1, 3, 9 nên là hợp số."
      },
      {
        "id": "t6_c2_q13",
        "type": "mcq",
        "text": "Phân tích số 24 ra thừa số nguyên tố:",
        "options": [
          "2^3 x 3",
          "2^2 x 6",
          "3 x 8",
          "4 x 6"
        ],
        "correct": "2^3 x 3",
        "explanation": "24 = 8 x 3 = 2^3 x 3."
      },
      {
        "id": "t6_c2_q14",
        "type": "true_false",
        "text": "Số chia hết cho 9 thì chắc chắn chia hết cho 3.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Vì 9 chia hết cho 3 nên số chia hết cho 9 sẽ chia hết cho 3."
      },
      {
        "id": "t6_c2_q15",
        "type": "true_false",
        "text": "Hai số nguyên tố cùng nhau là hai số có ƯCLN bằng 1.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa hai số nguyên tố cùng nhau."
      },
      {
        "id": "t6_c2_q16",
        "type": "fill_blank",
        "text": "Số chia hết cho 3 có tổng các chữ số chia hết cho...",
        "options": [],
        "correct": "3",
        "explanation": "Dấu hiệu chia hết cho 3."
      },
      {
        "id": "t6_c2_q17",
        "type": "fill_blank",
        "text": "Tập hợp các ước tự nhiên của 6 gồm ... phần tử.",
        "options": [],
        "correct": "4",
        "explanation": "Ư(6) = {1, 2, 3, 6} gồm 4 phần tử."
      },
      {
        "id": "t6_c2_q18",
        "type": "short_answer",
        "text": "Tìm chữ số * để số 12* chia hết cho cả 2 và 3 (với * là chữ số lớn nhất):",
        "options": [],
        "correct": "6",
        "explanation": "Để chia hết cho 2 thì * chẵn, để chia hết cho 3 thì 1+2+* chia hết cho 3 => * = 6."
      },
      {
        "id": "t6_c2_q19",
        "type": "short_answer",
        "text": "Ước chung lớn nhất của hai số 15 và 25 là:",
        "options": [],
        "correct": "5",
        "explanation": "ƯCLN(15, 25) = 5."
      },
      {
        "id": "t6_c2_q20",
        "type": "essay",
        "text": "Một đội tình nguyện có 36 nam và 48 nữ. Muốn chia đội thành các nhóm sao cho số nam và số nữ ở mỗi nhóm đều bằng nhau. Hỏi có thể chia được nhiều nhất thành bao nhiêu nhóm?",
        "options": [],
        "correct": "Số nhóm nhiều nhất có thể chia chính là ƯCLN(36, 48). Ta có: 36 = 2^2 x 3^2, 48 = 2^4 x 3 => ƯCLN(36, 48) = 2^2 x 3 = 12. Vậy có thể chia được nhiều nhất 12 nhóm.",
        "explanation": "Tìm ƯCLN của số nam và số nữ."
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
      },
      {
        "id": "t6_c3_q11",
        "type": "mcq",
        "text": "Kết quả của phép tính (-15) + 20 là:",
        "options": [
          "5",
          "-5",
          "35",
          "-35"
        ],
        "correct": "5",
        "explanation": "20 - 15 = 5."
      },
      {
        "id": "t6_c3_q12",
        "type": "mcq",
        "text": "Tích của hai số nguyên âm là:",
        "options": [
          "Số nguyên dương",
          "Số nguyên âm",
          "Số 0",
          "Không xác định"
        ],
        "correct": "Số nguyên dương",
        "explanation": "Âm nhân âm ra dương."
      },
      {
        "id": "t6_c3_q13",
        "type": "mcq",
        "text": "Sắp xếp các số -3; 0; -7; 5 theo thứ tự tăng dần:",
        "options": [
          "-7; -3; 0; 5",
          "-3; -7; 0; 5",
          "5; 0; -3; -7",
          "0; -3; 5; -7"
        ],
        "correct": "-7; -3; 0; 5",
        "explanation": "-7 < -3 < 0 < 5."
      },
      {
        "id": "t6_c3_q14",
        "type": "true_false",
        "text": "Số 0 là số nguyên dương.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Số 0 không phải là số nguyên âm cũng không phải số nguyên dương."
      },
      {
        "id": "t6_c3_q15",
        "type": "true_false",
        "text": "Tổng của hai số nguyên đối nhau luôn bằng 0.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "a + (-a) = 0."
      },
      {
        "id": "t6_c3_q16",
        "type": "fill_blank",
        "text": "Khoảng cách từ điểm -4 đến điểm 0 trên trục số bằng ... đơn vị.",
        "options": [],
        "correct": "4",
        "explanation": "Giá trị tuyệt đối |-4| = 4."
      },
      {
        "id": "t6_c3_q17",
        "type": "fill_blank",
        "text": "Kết quả của phép tính 12 - (-8) = ...",
        "options": [],
        "correct": "20",
        "explanation": "12 + 8 = 20."
      },
      {
        "id": "t6_c3_q18",
        "type": "short_answer",
        "text": "Tính giá trị: (-3) x 4 =",
        "options": [],
        "correct": "-12",
        "explanation": "Âm nhân dương ra âm: -(3 x 4) = -12."
      },
      {
        "id": "t6_c3_q19",
        "type": "short_answer",
        "text": "Tìm số nguyên x biết: x - 5 = -10. x =",
        "options": [],
        "correct": "-5",
        "explanation": "x = -10 + 5 = -5."
      },
      {
        "id": "t6_c3_q20",
        "type": "essay",
        "text": "Một chiếc tàu ngầm đang ở độ sâu 50 mét dưới mực nước biển (độ cao -50m). Sau đó tàu lặn sâu thêm 30 mét nữa rồi nổi lên 40 mét. Hỏi vị trí hiện tại của tàu ngầm cách mực nước biển bao nhiêu mét?",
        "options": [],
        "correct": "Vị trí của tàu ngầm được biểu diễn bằng phép tính: (-50) - 30 + 40 = -40 m. Vậy hiện tại tàu ngầm đang ở độ sâu 40 mét dưới mực nước biển.",
        "explanation": "Lập biểu thức tính toán với số nguyên và kết luận khoảng cách."
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
      },
      {
        "id": "v6_c1_q11",
        "type": "mcq",
        "text": "Trong đoạn trích 'Bài học đường đời đầu tiên', tính cách nổi bật nhất của Dế Mèn lúc đầu là:",
        "options": [
          "Kiêu ngạo, hung hăng, coi thường người khác",
          "Hiền lành, nhút nhát",
          "Chăm chỉ, cần cù",
          "Thân thiện, hòa đồng"
        ],
        "correct": "Kiêu ngạo, hung hăng, coi thường người khác",
        "explanation": "Dế Mèn tự phụ vì mình có thân hình vạm vỡ."
      },
      {
        "id": "v6_c1_q12",
        "type": "mcq",
        "text": "Từ nào sau đây là từ mượn tiếng Hán?",
        "options": [
          "Sứ giả",
          "Áo quần",
          "Ăn uống",
          "Nhà cửa"
        ],
        "correct": "Sứ giả",
        "explanation": "Sứ giả là từ Hán Việt."
      },
      {
        "id": "v6_c1_q13",
        "type": "mcq",
        "text": "Văn bản 'Nếu cậu muốn có một người bạn' được trích từ kiệt tác nào?",
        "options": [
          "Hoàng tử bé (Saint-Exupéry)",
          "Không gia đình",
          "Những người khốn khổ",
          "Robinson Crusoe"
        ],
        "correct": "Hoàng tử bé (Saint-Exupéry)",
        "explanation": "Trích từ truyện Hoàng tử bé."
      },
      {
        "id": "v6_c1_q14",
        "type": "true_false",
        "text": "Trong truyện 'Hoàng tử bé', con cáo đã dạy hoàng tử bé bài học về sự 'cảm hóa' và gắn kết tình bạn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Bài học về sự cảm hóa để trở nên duy nhất đối với nhau."
      },
      {
        "id": "v6_c1_q15",
        "type": "true_false",
        "text": "Dấu chấm phẩy (;) dùng để kết thúc một câu hoàn chỉnh.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Dấu chấm phẩy dùng để ngăn cách các vế câu hoặc ranh giới giữa các bộ phận trong phép liệt kê phức tạp."
      },
      {
        "id": "v6_c1_q16",
        "type": "fill_blank",
        "text": "Thành ngữ 'Ếch ngồi đáy ...' phê phán những kẻ hiểu biết hạn hẹp nhưng lại huênh hoang tự đắc.",
        "options": [],
        "correct": "giếng",
        "explanation": "Ếch ngồi đáy giếng."
      },
      {
        "id": "v6_c1_q17",
        "type": "fill_blank",
        "text": "Bộ phận chủ ngữ và vị ngữ là hai thành phần ... của câu đơn.",
        "options": [],
        "correct": "chính",
        "explanation": "Thành phần chính của câu."
      },
      {
        "id": "v6_c1_q18",
        "type": "short_answer",
        "text": "Tìm từ trái nghĩa với từ 'khiêm tốn':",
        "options": [],
        "correct": "kiêu ngạo",
        "explanation": "Kiêu ngạo / Tự phụ trái nghĩa với khiêm tốn."
      },
      {
        "id": "v6_c1_q19",
        "type": "short_answer",
        "text": "Ai là tác giả của tác phẩm 'Dế Mèn phiêu lưu ký'?",
        "options": [],
        "correct": "Tô Hoài",
        "explanation": "Nhà văn Tô Hoài."
      },
      {
        "id": "v6_c1_q20",
        "type": "essay",
        "text": "Hãy viết 3-4 câu chia sẻ về một người bạn thân thiết nhất của em ở trường THCS.",
        "options": [],
        "correct": "Người bạn thân nhất của em ở trường là bạn Nam. Nam không chỉ học giỏi môn Toán mà còn luôn nhiệt tình giảng bài cho các bạn trong lớp. Chúng em thường cùng nhau đọc sách và đá bóng vào giờ ra chơi.",
        "explanation": "Nêu được tên bạn, đặc điểm tốt và tình cảm gắn bó."
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
      },
      {
        "id": "v6_c2_q11",
        "type": "mcq",
        "text": "Trong bài thơ 'Mây và sóng', tình cảm sâu sắc nhất của em bé hướng về ai?",
        "options": [
          "Mẹ",
          "Bạn bè",
          "Thiên nhiên",
          "Thầy cô"
        ],
        "correct": "Mẹ",
        "explanation": "Tình mẫu tử thiêng liêng gắn bó với người mẹ."
      },
      {
        "id": "v6_c2_q12",
        "type": "mcq",
        "text": "Tác giả của bài thơ 'Mây và sóng' là nhà đại thi hào nào của Ấn Độ?",
        "options": [
          "R. Ta-go",
          "Lỗ Tấn",
          "Đỗ Phủ",
          "Lí Bạch"
        ],
        "correct": "R. Ta-go",
        "explanation": "R. Tagore (Rabindranath Tagore)."
      },
      {
        "id": "v6_c2_q13",
        "type": "mcq",
        "text": "Từ nào sau đây là từ ghép đẳng lập?",
        "options": [
          "Quần áo",
          "Xe đạp",
          "Bút chì",
          "Cây bàng"
        ],
        "correct": "Quần áo",
        "explanation": "Quần và áo có vai trò ngữ pháp bình đẳng."
      },
      {
        "id": "v6_c2_q14",
        "type": "true_false",
        "text": "Từ tượng hình là từ gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa từ tượng hình (như lom khom, mập mạp)."
      },
      {
        "id": "v6_c2_q15",
        "type": "true_false",
        "text": "Thơ tự do là thể thơ bắt buộc phải có số lượng tiếng cố định ở mỗi dòng thơ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Thơ tự do không quy định số tiếng hay số dòng nghiêm ngặt."
      },
      {
        "id": "v6_c2_q16",
        "type": "fill_blank",
        "text": "Biện pháp tu từ gọi tên sự vật, hiện tượng này bằng tên sự vật, hiện tượng khác có nét tương đồng gọi là ...",
        "options": [],
        "correct": "ẩn dụ",
        "explanation": "Biện pháp ẩn dụ."
      },
      {
        "id": "v6_c2_q17",
        "type": "fill_blank",
        "text": "Hoàn thiện câu tục ngữ: 'Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong ... chảy ra.'",
        "options": [],
        "correct": "nguồn",
        "explanation": "Ca dao về công ơn cha mẹ."
      },
      {
        "id": "v6_c2_q18",
        "type": "short_answer",
        "text": "Nhà văn Thạch Lam là thành viên chủ chốt của nhóm văn học nổi tiếng nào trước năm 1945?",
        "options": [],
        "correct": "Tự Lực văn đoàn",
        "explanation": "Tự Lực văn đoàn."
      },
      {
        "id": "v6_c2_q19",
        "type": "short_answer",
        "text": "Tìm từ láy tượng thanh miêu tả tiếng mưa rơi nhỏ: 'ầm ầm' hay 'tí tách'?",
        "options": [],
        "correct": "tí tách",
        "explanation": "Tí tách mô phỏng âm thanh hạt mưa nhỏ giọt."
      },
      {
        "id": "v6_c2_q20",
        "type": "essay",
        "text": "Tại sao tình mẫu tử lại được coi là tình cảm thiêng liêng nhất trong cuộc đời mỗi con người?",
        "options": [],
        "correct": "Vì mẹ là người đã mang nặng đẻ đau, nuôi nấng và chăm sóc ta bằng tình yêu thương vô điều kiện. Trong mọi hoàn cảnh khó khăn gian khổ của cuộc đời, vòng tay mẹ luôn là điểm tựa bình yên và ấm áp nhất che chở cho chúng ta.",
        "explanation": "Khẳng định sự hy sinh, tình cảm bao la không vụ lợi của người mẹ."
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
      },
      {
        "id": "v6_c3_q11",
        "type": "mcq",
        "text": "Chi tiết thần kì cây tre ngà đằng ngà bị ngựa phun lửa đốt cháy chuyển sang màu gì?",
        "options": [
          "Màu vàng óng",
          "Màu đen thui",
          "Màu đỏ rực",
          "Màu tím"
        ],
        "correct": "Màu vàng óng",
        "explanation": "Tre đằng ngà có màu vàng óng ả."
      },
      {
        "id": "v6_c3_q12",
        "type": "mcq",
        "text": "Nhân vật Thạch Sanh đã dùng cây cung tên bắn chết con quái vật nào để cứu công chúa?",
        "options": [
          "Đại bàng",
          "Chằn tinh",
          "Hồ ly",
          "Giao long"
        ],
        "correct": "Đại bàng",
        "explanation": "Bắn bị thương con đại bàng khổng lồ."
      },
      {
        "id": "v6_c3_q13",
        "type": "mcq",
        "text": "Văn bản 'Sơn Tinh, Thủy Tinh' phản ánh hiện thực đấu tranh kiên cường của nhân dân ta chống lại thiên tai nào?",
        "options": [
          "Lũ lụt",
          "Hạn hán",
          "Động đất",
          "Cháy rừng"
        ],
        "correct": "Lũ lụt",
        "explanation": "Chống lũ lụt sông Hồng."
      },
      {
        "id": "v6_c3_q14",
        "type": "true_false",
        "text": "Truyện cổ tích thường kết thúc có hậu: người hiền lành gặp lành, kẻ ác bị trừng trị thích đáng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Ước mơ công lí của nhân dân trong truyện cổ tích."
      },
      {
        "id": "v6_c3_q15",
        "type": "true_false",
        "text": "Thạch Sanh là con của một vị vua giàu có.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Thạch Sanh mồ côi cha mẹ từ nhỏ, sống nghèo khó dưới gốc đa."
      },
      {
        "id": "v6_c3_q16",
        "type": "fill_blank",
        "text": "Địa danh núi ... gắn liền với nơi ngự trị của thần Sơn Tinh (Chúa sơn lâm).",
        "options": [],
        "correct": "Ba Vì",
        "explanation": "Núi Tản Viên (Ba Vì)."
      },
      {
        "id": "v6_c3_q17",
        "type": "fill_blank",
        "text": "Chiếc đàn thần của Thạch Sanh gảy lên tiếng đàn giải nỗi oan và làm quân 18 nước chư hầu bủn rủn chân tay gọi là tiếng đàn ...",
        "options": [],
        "correct": "công lí",
        "explanation": "Tiếng đàn công lí và hòa bình."
      },
      {
        "id": "v6_c3_q18",
        "type": "short_answer",
        "text": "Lễ vật thách cưới của Vua Hùng gồm: Voi chín ngà, Gà chín cựa, Ngựa chín gì?",
        "options": [],
        "correct": "hồng mao",
        "explanation": "Ngựa chín hồng mao."
      },
      {
        "id": "v6_c3_q19",
        "type": "short_answer",
        "text": "Nhân vật Lí Thông trong truyện Thạch Sanh đại diện cho kiểu người nào trong xã hội?",
        "options": [],
        "correct": "Gian xảo lừa lọc",
        "explanation": "Kẻ bất nhân, vong ân bội nghĩa, cướp công."
      },
      {
        "id": "v6_c3_q20",
        "type": "essay",
        "text": "Hình tượng người anh hùng Thánh Gióng bay về trời sau khi đánh tan giặc Ân mang ý nghĩa gì?",
        "options": [],
        "correct": "Thánh Gióng bay về trời thể hiện sự bất tử của người anh hùng cứu quốc trong lòng nhân dân. Đánh giặc xong không màng danh lợi, bổng lộc vua ban, hình tượng Gióng hóa thân vào non sông đất nước Việt Nam muôn đời.",
        "explanation": "Nêu ý nghĩa cao đẹp của sự cống hiến vô tư và lòng tôn kính của nhân dân."
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
      },
      {
        "id": "t7_c1_q11",
        "type": "mcq",
        "text": "Số đối của số hữu tỉ -3/7 là:",
        "options": [
          "3/7",
          "-7/3",
          "7/3",
          "-3/7"
        ],
        "correct": "3/7",
        "explanation": "Số đối của -a/b là a/b."
      },
      {
        "id": "t7_c1_q12",
        "type": "mcq",
        "text": "Phép nhân (2/3)^3 có kết quả bằng:",
        "options": [
          "8/27",
          "6/9",
          "8/9",
          "6/27"
        ],
        "correct": "8/27",
        "explanation": "2^3 / 3^3 = 8 / 27."
      },
      {
        "id": "t7_c1_q13",
        "type": "mcq",
        "text": "Số hữu tỉ nào sau đây viết được dưới dạng số thập phân hữu hạn?",
        "options": [
          "1/4",
          "1/3",
          "1/6",
          "1/7"
        ],
        "correct": "1/4",
        "explanation": "1/4 = 0.25 (mẫu chỉ chứa ước nguyên tố 2)."
      },
      {
        "id": "t7_c1_q14",
        "type": "true_false",
        "text": "Lũy thừa của một tích bằng tích các lũy thừa: (x * y)^n = x^n * y^n.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy tắc lũy thừa của một tích."
      },
      {
        "id": "t7_c1_q15",
        "type": "true_false",
        "text": "Số 0 không phải là số hữu tỉ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "0 = 0/1 nên 0 là số hữu tỉ."
      },
      {
        "id": "t7_c1_q16",
        "type": "fill_blank",
        "text": "Tập hợp các số hữu tỉ được kí hiệu bằng chữ cái in hoa...",
        "options": [],
        "correct": "Q",
        "explanation": "Kí hiệu Q."
      },
      {
        "id": "t7_c1_q17",
        "type": "fill_blank",
        "text": "Kết quả của phép tính (-2/5) + 3/5 dưới dạng phân số tối giản là...",
        "options": [],
        "correct": "1/5",
        "explanation": "(-2 + 3)/5 = 1/5."
      },
      {
        "id": "t7_c1_q18",
        "type": "short_answer",
        "text": "Tính tích: (-3/4) x (-4/3) =",
        "options": [],
        "correct": "1",
        "explanation": "Tích hai số đối dấu âm thành dương, rút gọn bằng 1."
      },
      {
        "id": "t7_c1_q19",
        "type": "short_answer",
        "text": "Tìm x biết: 2x = 5. x viết dưới dạng số thập phân là:",
        "options": [],
        "correct": "2.5",
        "explanation": "x = 5/2 = 2.5."
      },
      {
        "id": "t7_c1_q20",
        "type": "essay",
        "text": "Mẹ mua cho An một chiếc cặp sách giá niêm yết 300.000 đồng. Cửa hàng đang có chương trình giảm giá 20%. Hỏi mẹ An phải trả bao nhiêu tiền để mua chiếc cặp sách đó?",
        "options": [],
        "correct": "Số tiền được giảm giá là: 300.000 x 20% = 60.000 đồng. Số tiền mẹ An phải trả là: 300.000 - 60.000 = 240.000 đồng.",
        "explanation": "Tính số tiền giảm và lấy giá niêm yết trừ đi."
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
      },
      {
        "id": "t7_c2_q11",
        "type": "mcq",
        "text": "Tập hợp số thực R bao gồm:",
        "options": [
          "Số hữu tỉ và số vô tỉ",
          "Chỉ số nguyên",
          "Chỉ số thập phân",
          "Chỉ số tự nhiên"
        ],
        "correct": "Số hữu tỉ và số vô tỉ",
        "explanation": "R = Q hợp I."
      },
      {
        "id": "t7_c2_q12",
        "type": "mcq",
        "text": "Làm tròn số 3.14159 đến chữ số thập phân thứ hai:",
        "options": [
          "3.14",
          "3.15",
          "3.1",
          "3.142"
        ],
        "correct": "3.14",
        "explanation": "Chữ số sau hàng làm tròn là 1 < 5 nên giữ nguyên 3.14."
      },
      {
        "id": "t7_c2_q13",
        "type": "mcq",
        "text": "Khẳng định nào sau đây đúng?",
        "options": [
          "|-5| = 5",
          "|-5| = -5",
          "|5| = -5",
          "|0| = 1"
        ],
        "correct": "|-5| = 5",
        "explanation": "Giá trị tuyệt đối luôn không âm."
      },
      {
        "id": "t7_c2_q14",
        "type": "true_false",
        "text": "Mỗi số thực được biểu diễn bởi một điểm trên trục số.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Trục số thực lấp đầy bởi các điểm biểu diễn số thực."
      },
      {
        "id": "t7_c2_q15",
        "type": "true_false",
        "text": "Số vô tỉ có thể viết được dưới dạng phân số a/b với a, b thuộc Z, b khác 0.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Đó là định nghĩa của số hữu tỉ, số vô tỉ không biểu diễn được như vậy."
      },
      {
        "id": "t7_c2_q16",
        "type": "fill_blank",
        "text": "Kí hiệu tập hợp số thực là chữ cái...",
        "options": [],
        "correct": "R",
        "explanation": "Kí hiệu R (Real numbers)."
      },
      {
        "id": "t7_c2_q17",
        "type": "fill_blank",
        "text": "Nếu x^2 = 49 (với x > 0) thì x = ...",
        "options": [],
        "correct": "7",
        "explanation": "7^2 = 49."
      },
      {
        "id": "t7_c2_q18",
        "type": "short_answer",
        "text": "So sánh hai số: căn bậc hai của 10 và 3. Số nào lớn hơn?",
        "options": [],
        "correct": "căn bậc hai của 10",
        "explanation": "sqrt(10) > sqrt(9) = 3."
      },
      {
        "id": "t7_c2_q19",
        "type": "short_answer",
        "text": "Tính giá trị tuyệt đối: |3 - 8| =",
        "options": [],
        "correct": "5",
        "explanation": "|-5| = 5."
      },
      {
        "id": "t7_c2_q20",
        "type": "essay",
        "text": "Hãy tìm x biết: |x - 2| = 3.",
        "options": [],
        "correct": "Trường hợp 1: x - 2 = 3 => x = 5. Trường hợp 2: x - 2 = -3 => x = -1. Vậy x = 5 hoặc x = -1.",
        "explanation": "Chia làm hai trường hợp khi giải phương trình chứa dấu giá trị tuyệt đối."
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
      },
      {
        "id": "t7_c3_q11",
        "type": "mcq",
        "text": "Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó gọi là:",
        "options": [
          "Đường trung trực",
          "Đường phân giác",
          "Đường cao",
          "Đường trung tuyến"
        ],
        "correct": "Đường trung trực",
        "explanation": "Định nghĩa đường trung trực của đoạn thẳng."
      },
      {
        "id": "t7_c3_q12",
        "type": "mcq",
        "text": "Hai góc kề bù có tổng số đo bằng:",
        "options": [
          "180 độ",
          "90 độ",
          "360 độ",
          "45 độ"
        ],
        "correct": "180 độ",
        "explanation": "Định nghĩa hai góc kề bù."
      },
      {
        "id": "t7_c3_q13",
        "type": "mcq",
        "text": "Nếu đường thẳng c cắt hai đường thẳng a và b, trong đó có một cặp góc đồng vị bằng nhau thì:",
        "options": [
          "a song song với b",
          "a vuông góc với b",
          "a cắt b",
          "a trùng b"
        ],
        "correct": "a song song với b",
        "explanation": "Dấu hiệu nhận biết hai đường thẳng song song."
      },
      {
        "id": "t7_c3_q14",
        "type": "true_false",
        "text": "Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tính chất từ vuông góc đến song song."
      },
      {
        "id": "t7_c3_q15",
        "type": "true_false",
        "text": "Góc nhọn là góc có số đo lớn hơn 90 độ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Góc nhọn có số đo nhỏ hơn 90 độ."
      },
      {
        "id": "t7_c3_q16",
        "type": "fill_blank",
        "text": "Hai góc có tổng số đo bằng 90 độ được gọi là hai góc...",
        "options": [],
        "correct": "phụ nhau",
        "explanation": "Định nghĩa hai góc phụ nhau."
      },
      {
        "id": "t7_c3_q17",
        "type": "fill_blank",
        "text": "Qua một điểm ở ngoài một đường thẳng, có ... đường thẳng song song với đường thẳng đó.",
        "options": [],
        "correct": "duy nhất một",
        "explanation": "Tiên đề Euclid về đường thẳng song song."
      },
      {
        "id": "t7_c3_q18",
        "type": "short_answer",
        "text": "Góc vuông có số đo bằng bao nhiêu độ?",
        "options": [],
        "correct": "90",
        "explanation": "Góc vuông = 90 độ."
      },
      {
        "id": "t7_c3_q19",
        "type": "short_answer",
        "text": "Cho hai đường thẳng song song a // b. Nếu góc so le trong thứ nhất bằng 55 độ thì góc so le trong thứ hai bằng bao nhiêu độ?",
        "options": [],
        "correct": "55",
        "explanation": "Hai góc so le trong bằng nhau."
      },
      {
        "id": "t7_c3_q20",
        "type": "essay",
        "text": "Cho tam giác ABC có góc A = 60 độ, góc B = 70 độ. Hãy tính số đo của góc C.",
        "options": [],
        "correct": "Áp dụng định lí tổng ba góc trong một tam giác: góc A + góc B + góc C = 180°. Suy ra: góc C = 180° - (góc A + góc B) = 180° - (60° + 70°) = 50°.",
        "explanation": "Sử dụng định lí tổng 3 góc trong tam giác bằng 180 độ."
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
      },
      {
        "id": "v7_c1_q11",
        "type": "mcq",
        "text": "Trong văn bản 'Đi lấy mật' (trích Đất rừng phương Nam), nhân vật chính là cậu bé nào?",
        "options": [
          "An",
          "Cò",
          "Mên",
          "Mon"
        ],
        "correct": "An",
        "explanation": "Cậu bé An theo tía nuôi và thằng Cò đi lấy mật ong."
      },
      {
        "id": "v7_c1_q12",
        "type": "mcq",
        "text": "Tác giả của tiểu thuyết 'Đất rừng phương Nam' là nhà văn nào?",
        "options": [
          "Đoàn Giỏi",
          "Sơn Nam",
          "Nguyễn Tuân",
          "Nam Cao"
        ],
        "correct": "Đoàn Giỏi",
        "explanation": "Nhà văn Đoàn Giỏi."
      },
      {
        "id": "v7_c1_q13",
        "type": "mcq",
        "text": "Phó từ là những từ chuyên đi kèm với:",
        "options": [
          "Danh từ, động từ, tính từ để bổ sung ý nghĩa",
          "Chỉ danh từ",
          "Chỉ từ cảm thán",
          "Đứng một mình độc lập"
        ],
        "correct": "Danh từ, động từ, tính từ để bổ sung ý nghĩa",
        "explanation": "Định nghĩa chức năng của phó từ."
      },
      {
        "id": "v7_c1_q14",
        "type": "true_false",
        "text": "Cách nuôi ong lấy mật độc đáo của người dân phương Nam trong rừng U Minh là 'gác kèo'.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nghề gác kèo ong rừng U Minh."
      },
      {
        "id": "v7_c1_q15",
        "type": "true_false",
        "text": "Ngôi kể thứ ba là người kể giấu mình, gọi tên các nhân vật bằng tên của chúng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đặc điểm của ngôi kể thứ ba khách quan."
      },
      {
        "id": "v7_c1_q16",
        "type": "fill_blank",
        "text": "Thiên nhiên rừng tràm ... trong Đất rừng phương Nam hiện lên hoang sơ, trù phú và tràn đầy sức sống.",
        "options": [],
        "correct": "U Minh",
        "explanation": "Rừng tràm U Minh."
      },
      {
        "id": "v7_c1_q17",
        "type": "fill_blank",
        "text": "Thành ngữ 'Non xanh nước ...' miêu tả cảnh đẹp thiên nhiên sông núi thanh bình.",
        "options": [],
        "correct": "biếc",
        "explanation": "Non xanh nước biếc."
      },
      {
        "id": "v7_c1_q18",
        "type": "short_answer",
        "text": "Tía nuôi của An trong Đất rừng phương Nam làm nghề gì gắn liền với sông nước rừng ngập mặn?",
        "options": [],
        "correct": "Săn bắt lấy mật ong",
        "explanation": "Lấy mật ong rừng, câu rắn, săn cá sấu."
      },
      {
        "id": "v7_c1_q19",
        "type": "short_answer",
        "text": "Từ nào sau đây là phó từ chỉ thời gian: 'đã' hay 'rất'?",
        "options": [],
        "correct": "đã",
        "explanation": "'đã' biểu thị hành động diễn ra trong quá khứ."
      },
      {
        "id": "v7_c1_q20",
        "type": "essay",
        "text": "Vẻ đẹp phong phú, trù phú của thiên nhiên phương Nam được gợi tả qua đoạn trích 'Đi lấy mật' khơi dậy trong em tình cảm gì với quê hương đất nước?",
        "options": [],
        "correct": "Đoạn trích khơi dậy niềm tự hào sâu sắc về thiên nhiên gấm vóc tươi đẹp của Tổ quốc, đồng thời nhắc nhở mỗi chúng ta cần có ý thức bảo vệ môi trường sinh thái, bảo vệ các loài động vật hoang dã và rừng ngập mặn quý giá.",
        "explanation": "Bày tỏ lòng yêu mến quê hương và ý thức bảo vệ thiên nhiên hoang dã."
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
      },
      {
        "id": "v7_c2_q11",
        "type": "mcq",
        "text": "Bài thơ 'Gặp lá cơm nếp' của Thanh Thảo thể hiện nỗi nhớ da diết của người lính về:",
        "options": [
          "Người mẹ và bát cơm nếp quê hương",
          "Mái trường xưa",
          "Chiến hào",
          "Dòng sông"
        ],
        "correct": "Người mẹ và bát cơm nếp quê hương",
        "explanation": "Mùi hương lá nếp gợi nhớ bát xôi mẹ nấu."
      },
      {
        "id": "v7_c2_q12",
        "type": "mcq",
        "text": "Hình ảnh người lính trong 'Đồng dao mùa xuân' chưa từng biết đến điều gì trước khi hy sinh?",
        "options": [
          "Một tình yêu",
          "Khói bom",
          "Tiếng súng",
          "Rừng sâu"
        ],
        "correct": "Một tình yêu",
        "explanation": "'Chưa một lần yêu / Cà phê chưa uống'."
      },
      {
        "id": "v7_c2_q13",
        "type": "mcq",
        "text": "Từ ngữ địa phương là từ ngữ:",
        "options": [
          "Chỉ sử dụng ở một hoặc một số địa phương nhất định",
          "Phổ biến toàn quốc",
          "Mượn từ nước ngoài",
          "Chỉ dùng trong văn học cổ"
        ],
        "correct": "Chỉ sử dụng ở một hoặc một số địa phương nhất định",
        "explanation": "Khái niệm từ ngữ địa phương."
      },
      {
        "id": "v7_c2_q14",
        "type": "true_false",
        "text": "Nói giảm nói tránh là biện pháp tu từ dùng cách diễn đạt tế nhị, uyển chuyển để tránh gây cảm giác đau buồn, nặng nề.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm nói giảm nói tránh (ví dụ: hy sinh thay cho chết)."
      },
      {
        "id": "v7_c2_q15",
        "type": "true_false",
        "text": "Từ 'nghĩa khí' là từ thuần Việt.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "'Nghĩa khí' là từ Hán Việt."
      },
      {
        "id": "v7_c2_q16",
        "type": "fill_blank",
        "text": "Mùi vị lá nếp thơm nồng trong bài thơ 'Gặp lá cơm nếp' gắn liền với hương vị của đất nước và tình yêu người ...",
        "options": [],
        "correct": "mẹ",
        "explanation": "Tình mẹ ấm áp nấu xôi nếp."
      },
      {
        "id": "v7_c2_q17",
        "type": "fill_blank",
        "text": "Biện pháp tu từ nói quá còn được gọi là biện pháp khoa ...",
        "options": [],
        "correct": "trương",
        "explanation": "Khoa trương, phóng đại sự thật có dụng ý nghệ thuật."
      },
      {
        "id": "v7_c2_q18",
        "type": "short_answer",
        "text": "Câu thơ 'Anh không về nữa / Anh vẫn một mình' sử dụng biện pháp tu từ gì để nói về sự hy sinh?",
        "options": [],
        "correct": "Nói giảm nói tránh",
        "explanation": "'không về nữa' tránh từ 'chết / hy sinh'."
      },
      {
        "id": "v7_c2_q19",
        "type": "short_answer",
        "text": "Từ 'mẹ' ở miền Nam thường được gọi bằng từ ngữ địa phương thân thương nào?",
        "options": [],
        "correct": "Má",
        "explanation": "Má / U / Mạ / Bầm."
      },
      {
        "id": "v7_c2_q20",
        "type": "essay",
        "text": "Em hãy nêu ý nghĩa của sự kết hợp hài hòa giữa tình yêu gia đình và tình yêu Tổ quốc trong tâm hồn người lính qua bài thơ 'Gặp lá cơm nếp'.",
        "options": [],
        "correct": "Tình yêu mẹ, tình yêu bát cơm nếp bình dị nơi quê nhà chính là cội nguồn sâu xa nuôi dưỡng tình yêu Tổ quốc rộng lớn. Người lính cầm súng ra trận chiến đấu bảo vệ đất nước cũng chính là để bảo vệ mái nhà tranh và sự bình yên cho người mẹ kính yêu.",
        "explanation": "Làm rõ mối quan hệ khăng khít giữa tình mẫu tử và lòng yêu nước."
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
      },
      {
        "id": "v7_c3_q11",
        "type": "mcq",
        "text": "Câu tục ngữ nào sau đây đúc kết kinh nghiệm về thời tiết mùa màng?",
        "options": [
          "Chuồn chuồn bay thấp thì mưa, bay cao thì nắng",
          "Ăn quả nhớ kẻ trồng cây",
          "Lá lành đùm lá rách",
          "Gần mực thì đen, gần đèn thì rạng"
        ],
        "correct": "Chuồn chuồn bay thấp thì mưa, bay cao thì nắng",
        "explanation": "Kinh nghiệm dân gian quan sát chuồn chuồn dự báo mưa nắng."
      },
      {
        "id": "v7_c3_q12",
        "type": "mcq",
        "text": "Văn bản nghị luận xã hội nhằm mục đích gì?",
        "options": [
          "Bàn luận, thuyết phục người đọc về một tư tưởng, đạo lí hoặc hiện tượng đời sống",
          "Chỉ kể một câu chuyện cổ tích",
          "Miêu tả một danh lam thắng cảnh",
          "Bày tỏ cảm xúc bộc phát"
        ],
        "correct": "Bàn luận, thuyết phục người đọc về một tư tưởng, đạo lí hoặc hiện tượng đời sống",
        "explanation": "Đặc trưng của văn nghị luận xã hội."
      },
      {
        "id": "v7_c3_q13",
        "type": "mcq",
        "text": "Trong một văn bản nghị luận, yếu tố nào đóng vai trò làm sáng tỏ luận điểm?",
        "options": [
          "Lí lẽ và dẫn chứng thực tế",
          "Các câu hỏi tu từ vu vơ",
          "Hình ảnh hư cấu tưởng tượng",
          "Lời thoại đối đáp kịch"
        ],
        "correct": "Lí lẽ và dẫn chứng thực tế",
        "explanation": "Hệ thống luận điểm, lí lẽ và bằng chứng."
      },
      {
        "id": "v7_c3_q14",
        "type": "true_false",
        "text": "Tục ngữ 'Một tấc đất, một tấc vàng' ca ngợi giá trị quý báu vô giá của đất đai canh tác.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đề cao giá trị của tư liệu sản xuất nông nghiệp."
      },
      {
        "id": "v7_c3_q15",
        "type": "true_false",
        "text": "Nói tục ngữ và ca dao hoàn toàn giống nhau là nhận định chính xác.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Tục ngữ đúc kết bài học tri thức, ca dao thiên về bộc lộ tâm tư tình cảm trữ tình."
      },
      {
        "id": "v7_c3_q16",
        "type": "fill_blank",
        "text": "Hoàn thiện câu tục ngữ: 'Học thầy không tày học ...'",
        "options": [],
        "correct": "bạn",
        "explanation": "Đề cao việc học hỏi từ bạn bè xung quanh."
      },
      {
        "id": "v7_c3_q17",
        "type": "fill_blank",
        "text": "Câu tục ngữ 'Đói cho sạch, rách cho ...' khuyên răn con người giữ gìn nhân phẩm trong sạch dù hoàn cảnh khốn khó.",
        "options": [],
        "correct": "thơm",
        "explanation": "Đói cho sạch, rách cho thơm."
      },
      {
        "id": "v7_c3_q18",
        "type": "short_answer",
        "text": "Câu tục ngữ 'Tấc đất tấc vàng' sử dụng biện pháp tu từ so sánh hay ẩn dụ?",
        "options": [],
        "correct": "So sánh",
        "explanation": "So sánh ngang bằng: tấc đất quý như tấc vàng."
      },
      {
        "id": "v7_c3_q19",
        "type": "short_answer",
        "text": "Người viết văn nghị luận cần có thái độ như thế nào: Chủ quan thiên vị hay Khách quan trung thực?",
        "options": [],
        "correct": "Khách quan trung thực",
        "explanation": "Lí lẽ phải thuyết phục, trung thực và công bằng."
      },
      {
        "id": "v7_c3_q20",
        "type": "essay",
        "text": "Hãy giải thích ngắn gọn ý nghĩa và bài học rút ra từ câu tục ngữ: 'Thất bại là mẹ thành công'.",
        "options": [],
        "correct": "Câu tục ngữ dạy rằng: Mỗi lần vấp ngã hay thất bại cho ta những bài học kinh nghiệm quý báu. Nếu biết kiên trì, không nản lòng thoái chí và biết đứng dậy sửa sai thì thất bại hôm nay chính là tiền đề dẫn lối đến thành công rực rỡ ngày mai.",
        "explanation": "Khẳng định thái độ kiên trì, ý chí vượt khó và tinh thần lạc quan."
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
      },
      {
        "id": "t8_c1_q11",
        "type": "mcq",
        "text": "Đơn thức nào sau đây đồng dạng với đơn thức 2x^2y?",
        "options": [
          "-5x^2y",
          "2xy^2",
          "2x^3y",
          "3xy"
        ],
        "correct": "-5x^2y",
        "explanation": "Có cùng phần biến x^2y."
      },
      {
        "id": "t8_c1_q12",
        "type": "mcq",
        "text": "Kết quả của phép nhân đơn thức với đa thức x(x + 2) là:",
        "options": [
          "x^2 + 2x",
          "x^2 + 2",
          "2x^2",
          "x + 2x"
        ],
        "correct": "x^2 + 2x",
        "explanation": "x * x + x * 2 = x^2 + 2x."
      },
      {
        "id": "t8_c1_q13",
        "type": "mcq",
        "text": "Bậc của đa thức x^4 - 2x^3 + 5x - 7 là:",
        "options": [
          "4",
          "3",
          "1",
          "7"
        ],
        "correct": "4",
        "explanation": "Số mũ cao nhất của biến là 4."
      },
      {
        "id": "t8_c1_q14",
        "type": "true_false",
        "text": "Đơn thức là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa các số và các biến.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa đơn thức."
      },
      {
        "id": "t8_c1_q15",
        "type": "true_false",
        "text": "Tổng hai đơn thức đồng dạng là một đơn thức đồng dạng với chúng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy tắc cộng hai đơn thức đồng dạng."
      },
      {
        "id": "t8_c1_q16",
        "type": "fill_blank",
        "text": "Đa thức một biến thu gọn được sắp xếp theo lũy thừa ... hoặc tăng dần của biến.",
        "options": [],
        "correct": "giảm dần",
        "explanation": "Cách sắp xếp đa thức."
      },
      {
        "id": "t8_c1_q17",
        "type": "fill_blank",
        "text": "Kết quả phép chia 6x^3y^2 cho 2xy bằng ...",
        "options": [],
        "correct": "3x^2y",
        "explanation": "6/2 = 3, x^3/x = x^2, y^2/y = y."
      },
      {
        "id": "t8_c1_q18",
        "type": "short_answer",
        "text": "Tính giá trị của đa thức A = 2x + 1 tại x = 5:",
        "options": [],
        "correct": "11",
        "explanation": "2 * 5 + 1 = 11."
      },
      {
        "id": "t8_c1_q19",
        "type": "short_answer",
        "text": "Tìm nghiệm của đa thức P(x) = 2x - 8. x =",
        "options": [],
        "correct": "4",
        "explanation": "2x = 8 => x = 4."
      },
      {
        "id": "t8_c1_q20",
        "type": "essay",
        "text": "Thực hiện phép nhân đa thức với đa thức: (x + 3)(x - 2)",
        "options": [],
        "correct": "Ta có: (x + 3)(x - 2) = x(x - 2) + 3(x - 2) = x^2 - 2x + 3x - 6 = x^2 + x - 6.",
        "explanation": "Nhân từng hạng tử của đa thức thứ nhất với đa thức thứ hai rồi thu gọn."
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
      },
      {
        "id": "t8_c2_q11",
        "type": "mcq",
        "text": "Khai triển của hằng đẳng thức (a + b)^2 là:",
        "options": [
          "a^2 + 2ab + b^2",
          "a^2 + b^2",
          "a^2 - 2ab + b^2",
          "a^2 + ab + b^2"
        ],
        "correct": "a^2 + 2ab + b^2",
        "explanation": "Bình phương của một tổng."
      },
      {
        "id": "t8_c2_q12",
        "type": "mcq",
        "text": "Biểu thức x^3 - y^3 bằng:",
        "options": [
          "(x - y)(x^2 + xy + y^2)",
          "(x - y)(x^2 - xy + y^2)",
          "(x + y)(x^2 - xy + y^2)",
          "(x - y)^3"
        ],
        "correct": "(x - y)(x^2 + xy + y^2)",
        "explanation": "Hiệu hai lập phương."
      },
      {
        "id": "t8_c2_q13",
        "type": "mcq",
        "text": "Phân tích đa thức thành nhân tử: x^2 - 4 =",
        "options": [
          "(x - 2)(x + 2)",
          "(x - 4)(x + 4)",
          "(x - 2)^2",
          "(x + 2)^2"
        ],
        "correct": "(x - 2)(x + 2)",
        "explanation": "Dạng a^2 - b^2."
      },
      {
        "id": "t8_c2_q14",
        "type": "true_false",
        "text": "Hằng đẳng thức là đẳng thức đúng với mọi giá trị của các biến.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm hằng đẳng thức."
      },
      {
        "id": "t8_c2_q15",
        "type": "true_false",
        "text": "Biểu thức (x - 1)^2 và (1 - x)^2 luôn luôn có giá trị bằng nhau với mọi x.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Vì (1 - x) = -(x - 1) nên bình phương bằng nhau."
      },
      {
        "id": "t8_c2_q16",
        "type": "fill_blank",
        "text": "Phân tích đa thức thành nhân tử: 2x + 4 = 2(...)",
        "options": [],
        "correct": "x + 2",
        "explanation": "Đặt nhân tử chung là 2."
      },
      {
        "id": "t8_c2_q17",
        "type": "fill_blank",
        "text": "Khai triển lập phương của một tổng: (a + b)^3 = a^3 + 3a^2b + 3ab^2 + ...",
        "options": [],
        "correct": "b^3",
        "explanation": "Hằng đẳng thức bậc 3."
      },
      {
        "id": "t8_c2_q18",
        "type": "short_answer",
        "text": "Tính nhanh giá trị của biểu thức 102^2 - 4 =",
        "options": [],
        "correct": "10400",
        "explanation": "102^2 - 2^2 = (102 - 2)(102 + 2) = 100 * 104 = 10400."
      },
      {
        "id": "t8_c2_q19",
        "type": "short_answer",
        "text": "Tìm x biết: (x - 5)^2 = 0. x =",
        "options": [],
        "correct": "5",
        "explanation": "x - 5 = 0 => x = 5."
      },
      {
        "id": "t8_c2_q20",
        "type": "essay",
        "text": "Phân tích đa thức sau thành nhân tử: P = x^2 - 6x + 9 - y^2",
        "options": [],
        "correct": "Ta nhóm 3 hạng tử đầu: P = (x^2 - 6x + 9) - y^2 = (x - 3)^2 - y^2. Áp dụng hằng đẳng thức hiệu hai bình phương: P = (x - 3 - y)(x - 3 + y).",
        "explanation": "Sử dụng phương pháp nhóm hạng tử tạo hằng đẳng thức rồi dùng hiệu hai bình phương."
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
      },
      {
        "id": "t8_c3_q11",
        "type": "mcq",
        "text": "Hình thang cân là hình thang có:",
        "options": [
          "Hai góc kề một đáy bằng nhau",
          "Hai cạnh bên song song",
          "Hai góc đối bằng nhau",
          "Bốn cạnh bằng nhau"
        ],
        "correct": "Hai góc kề một đáy bằng nhau",
        "explanation": "Định nghĩa hình thang cân."
      },
      {
        "id": "t8_c3_q12",
        "type": "mcq",
        "text": "Hình vuông là tứ giác:",
        "options": [
          "Vừa là hình chữ nhật vừa là hình thoi",
          "Chỉ có 4 góc vuông",
          "Chỉ có 4 cạnh bằng nhau",
          "Có hai đường chéo bằng nhau"
        ],
        "correct": "Vừa là hình chữ nhật vừa là hình thoi",
        "explanation": "Đặc điểm toàn diện của hình vuông."
      },
      {
        "id": "t8_c3_q13",
        "type": "mcq",
        "text": "Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng:",
        "options": [
          "Nửa cạnh ấy",
          "Gấp đôi cạnh ấy",
          "Cạnh ấy",
          "Một phần ba cạnh ấy"
        ],
        "correct": "Nửa cạnh ấy",
        "explanation": "Định lí đường trung bình của tam giác."
      },
      {
        "id": "t8_c3_q14",
        "type": "true_false",
        "text": "Hai đường chéo của hình thoi vuông góc với nhau tại trung điểm của mỗi đường.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tính chất đường chéo hình thoi."
      },
      {
        "id": "t8_c3_q15",
        "type": "true_false",
        "text": "Hình chữ nhật có tâm đối xứng là giao điểm của hai đường chéo.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tính chất đối xứng của hình chữ nhật."
      },
      {
        "id": "t8_c3_q16",
        "type": "fill_blank",
        "text": "Tứ giác có các cạnh đối song song gọi là hình...",
        "options": [],
        "correct": "bình hành",
        "explanation": "Định nghĩa hình bình hành."
      },
      {
        "id": "t8_c3_q17",
        "type": "fill_blank",
        "text": "Chu vi của hình vuông có cạnh a là ... x a.",
        "options": [],
        "correct": "4",
        "explanation": "Chu vi = 4a."
      },
      {
        "id": "t8_c3_q18",
        "type": "short_answer",
        "text": "Một hình chữ nhật có chiều dài 8 cm, chiều rộng 6 cm thì độ dài đường chéo bằng bao nhiêu cm?",
        "options": [],
        "correct": "10",
        "explanation": "Theo định lí Pythagore: sqrt(8^2 + 6^2) = sqrt(100) = 10 cm."
      },
      {
        "id": "t8_c3_q19",
        "type": "short_answer",
        "text": "Cho hình bình hành ABCD có góc A = 100 độ. Góc kề bù với nó (góc B) bằng bao nhiêu độ?",
        "options": [],
        "correct": "80",
        "explanation": "Hai góc kề một cạnh của hình bình hành bù nhau: 180 - 100 = 80 độ."
      },
      {
        "id": "t8_c3_q20",
        "type": "essay",
        "text": "Cho tam giác ABC có M là trung điểm AB, N là trung điểm AC. Biết độ dài đoạn BC = 12 cm. Tính độ dài đoạn MN và giải thích.",
        "options": [],
        "correct": "Vì M là trung điểm AB, N là trung điểm AC nên MN là đường trung bình của tam giác ABC. Theo tính chất đường trung bình, MN // BC và MN = BC / 2 = 12 / 2 = 6 cm.",
        "explanation": "Áp dụng định nghĩa và tính chất đường trung bình của tam giác."
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
      },
      {
        "id": "v8_c1_q11",
        "type": "mcq",
        "text": "Tác phẩm 'Hịch tướng sĩ' được Trần Quốc Tuấn viết vào thời điểm nào?",
        "options": [
          "Trước cuộc kháng chiến chống quân Mông - Nguyên lần thứ hai (1285)",
          "Sau chiến thắng Bạch Đằng",
          "Thời nhà Lý",
          "Thời kháng chiến chống Pháp"
        ],
        "correct": "Trước cuộc kháng chiến chống quân Mông - Nguyên lần thứ hai (1285)",
        "explanation": "Nhằm khích lệ tướng sĩ trước cuộc đọ sức sinh tử với quân Nguyên."
      },
      {
        "id": "v8_c1_q12",
        "type": "mcq",
        "text": "Tác phẩm văn học nào sau đây được viết theo thể Chiếu?",
        "options": [
          "Chiếu dời đô (Lý Công Uẩn)",
          "Hịch tướng sĩ",
          "Bình Ngô đại cáo",
          "Nam quốc sơn hà"
        ],
        "correct": "Chiếu dời đô (Lý Công Uẩn)",
        "explanation": "Thiên đô chiếu của vua Lý Thái Tổ năm 1010."
      },
      {
        "id": "v8_c1_q13",
        "type": "mcq",
        "text": "Lý Công Uẩn quyết định dời đô từ Hoa Lư về thành nào?",
        "options": [
          "Thành Đại La (Thăng Long)",
          "Thành Cổ Loa",
          "Thành Huế",
          "Thành Phú Xuân"
        ],
        "correct": "Thành Đại La (Thăng Long)",
        "explanation": "Đại La (sau đổi thành Thăng Long - Hà Nội ngày nay)."
      },
      {
        "id": "v8_c1_q14",
        "type": "true_false",
        "text": "Binh thư yếu lược là cuốn sách quân sự do Trần Quốc Tuấn biên soạn để dạy binh pháp cho các tướng lĩnh.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Binh thư yếu lược truyền dạy nghệ thuật quân sự."
      },
      {
        "id": "v8_c1_q15",
        "type": "true_false",
        "text": "Thể văn Chiếu là thể văn do thường dân viết gửi lên vua.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Chiếu là lệnh của vua ban xuống thần dân và quan lại."
      },
      {
        "id": "v8_c1_q16",
        "type": "fill_blank",
        "text": "Thành Đại La được Lý Thái Tổ đánh giá là nơi 'rồng cuộn hổ ...', trung tâm của trời đất.",
        "options": [],
        "correct": "ngồi",
        "explanation": "Địa thế rồng cuộn hổ ngồi đắc địa."
      },
      {
        "id": "v8_c1_q17",
        "type": "fill_blank",
        "text": "Vị anh hùng thiếu niên bóp nát quả cam vì không được dự bàn việc quân là ...",
        "options": [],
        "correct": "Trần Quốc Toản",
        "explanation": "Hoài Văn Hầu Trần Quốc Toản."
      },
      {
        "id": "v8_c1_q18",
        "type": "short_answer",
        "text": "Hội nghị Diên Hồng nổi tiếng thời Trần biểu thị ý chí của ai: Các bô lão hay Quan lại triều đình?",
        "options": [],
        "correct": "Các bô lão",
        "explanation": "Các bô lão đại diện cho toàn thể nhân dân đồng thanh hô 'Đánh!'."
      },
      {
        "id": "v8_c1_q19",
        "type": "short_answer",
        "text": "Chiếu dời đô được ban hành vào năm nào?",
        "options": [],
        "correct": "1010",
        "explanation": "Năm Canh Tuất 1010."
      },
      {
        "id": "v8_c1_q20",
        "type": "essay",
        "text": "Vì sao việc Lý Thái Tổ dời đô về Thăng Long năm 1010 lại được coi là bước ngoặt vĩ đại mở ra thời kì phát triển thịnh vượng của dân tộc ta?",
        "options": [],
        "correct": "Vì Thăng Long là vùng đồng bằng châu thổ rộng rãi màu mỡ, giao thương thủy bộ thuận lợi, dân cư đông đúc trù phú, địa thế vững chắc 'rồng cuộn hổ ngồi'. Rời bỏ căn cứ phòng thủ hiểm trở Hoa Lư để ra Thăng Long chứng tỏ thế và lực của đất nước đã lớn mạnh, sẵn sàng mở rộng bang giao và phát triển kinh tế lâu bền.",
        "explanation": "Phân tích địa thế chiến lược về kinh tế, quân sự và văn hóa của đất Thăng Long."
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
      },
      {
        "id": "v8_c2_q11",
        "type": "mcq",
        "text": "Tác phẩm 'Truyện Kiều' có tên chữ Hán nguyên bản là gì?",
        "options": [
          "Đoạn trường tân thanh",
          "Kim Vân Kiều truyện",
          "Truyền kì mạn lục",
          "Vũ trung tùy bút"
        ],
        "correct": "Đoạn trường tân thanh",
        "explanation": "Đoạn trường tân thanh (Tiếng kêu mới về nỗi đau đứt ruột)."
      },
      {
        "id": "v8_c2_q12",
        "type": "mcq",
        "text": "Thể thơ lục bát có nguồn gốc từ đâu?",
        "options": [
          "Việt Nam",
          "Trung Quốc",
          "Pháp",
          "Ấn Độ"
        ],
        "correct": "Việt Nam",
        "explanation": "Thể thơ dân tộc độc đáo của người Việt."
      },
      {
        "id": "v8_c2_q13",
        "type": "mcq",
        "text": "Vẻ đẹp của Thúy Vân được Nguyễn Du miêu tả bằng những hình ảnh thiên nhiên nào?",
        "options": [
          "Trăng, hoa, mây, tuyết",
          "Liễu, thu thủy, xuân sơn",
          "Sóng gió biển khơi",
          "Rừng thông bạt ngàn"
        ],
        "correct": "Trăng, hoa, mây, tuyết",
        "explanation": "'Khuôn trăng đầy đặn nét ngài nở nang / Hoa cười ngọc thốt đoan trang / Mây thua nước tóc tuyết nhường màu da'."
      },
      {
        "id": "v8_c2_q14",
        "type": "true_false",
        "text": "Trong Truyện Kiều, Thúy Kiều bán mình chuộc cha và em trai là thể hiện trọn vẹn chữ Hiếu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hành động hy sinh thân mình vì chữ hiếu cao cả."
      },
      {
        "id": "v8_c2_q15",
        "type": "true_false",
        "text": "Nguyễn Du sinh ra và lớn lên trong một gia đình quý tộc phong kiến bình dân không ai đỗ đạt.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Nguyễn Du sinh ra trong gia đình đại quý tộc trâm anh thế phiệt có nhiều người đỗ đạt làm quan to."
      },
      {
        "id": "v8_c2_q16",
        "type": "fill_blank",
        "text": "Câu thơ: 'Đầu lòng hai ả tố nga / Thúy Kiều là chị em là ...'",
        "options": [],
        "correct": "Thúy Vân",
        "explanation": "Mở đầu đoạn trích Chị em Thúy Kiều."
      },
      {
        "id": "v8_c2_q17",
        "type": "fill_blank",
        "text": "Bản lĩnh tài hoa và nhân cách cao đẹp của người anh hùng Từ Hải được ví như cánh chim ... giữa trời lộng gió.",
        "options": [],
        "correct": "bằng",
        "explanation": "Cánh chim bằng tung hoành bốn bể."
      },
      {
        "id": "v8_c2_q18",
        "type": "short_answer",
        "text": "Chàng thư sinh nho nhã đính ước thề nguyền cùng Thúy Kiều dưới ánh trăng là ai?",
        "options": [],
        "correct": "Kim Trọng",
        "explanation": "Chàng Kim Trọng."
      },
      {
        "id": "v8_c2_q19",
        "type": "short_answer",
        "text": "Truyện Kiều gồm bao nhiêu câu thơ lục bát tất cả?",
        "options": [],
        "correct": "3254",
        "explanation": "Gồm 3254 câu thơ lục bát tuyệt tác."
      },
      {
        "id": "v8_c2_q20",
        "type": "essay",
        "text": "Em hãy nêu giá trị nhân đạo sâu sắc của tác phẩm 'Truyện Kiều' qua ngòi bút của đại thi hào Nguyễn Du.",
        "options": [],
        "correct": "Giá trị nhân đạo của Truyện Kiều thể hiện ở: 1) Ca ngợi và trân trọng vẻ đẹp nhan sắc, trí tuệ tài hoa và phẩm giá sáng trong của người phụ nữ. 2) Đồng cảm sâu sắc với số phận bi kịch chìm nổi của Thúy Kiều. 3) Tố cáo các thế lực tàn bạo, tham lam chà đạp lên quyền sống của con người và khẳng định khát vọng tự do, hạnh phúc lứa đôi chân chính.",
        "explanation": "Trình bày đủ 3 khía cạnh: ngợi ca con người, xót thương bi kịch và tố cáo xã hội phong kiến bất công."
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
      },
      {
        "id": "v8_c3_q11",
        "type": "mcq",
        "text": "Tác phẩm 'Bình Ngô đại cáo' được Nguyễn Trãi viết thay lời vua Lê Thái Tổ ban bố vào năm nào?",
        "options": [
          "1428",
          "1288",
          "938",
          "1789"
        ],
        "correct": "1428",
        "explanation": "Sau khi cuộc khởi nghĩa Lam Sơn toàn thắng (1428)."
      },
      {
        "id": "v8_c3_q12",
        "type": "mcq",
        "text": "Nguyên lý tư tưởng cốt lõi xuyên suốt tác phẩm 'Bình Ngô đại cáo' là:",
        "options": [
          "Tư tưởng nhân nghĩa",
          "Tư tưởng hiếu chiến",
          "Tư tưởng hưởng lạc",
          "Tư tưởng tôn giáo"
        ],
        "correct": "Tư tưởng nhân nghĩa",
        "explanation": "'Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo'."
      },
      {
        "id": "v8_c3_q13",
        "type": "mcq",
        "text": "Quân khởi nghĩa Lam Sơn do ai khởi xướng và lãnh đạo tại vùng đất Thanh Hóa?",
        "options": [
          "Lê Lợi",
          "Trần Hưng Đạo",
          "Quang Trung",
          "Nguyễn Huệ"
        ],
        "correct": "Lê Lợi",
        "explanation": "Lê Lợi xưng là Bình Định Vương."
      },
      {
        "id": "v8_c3_q14",
        "type": "true_false",
        "text": "'Cáo' là thể văn nghị luận cổ do vua chúa dùng để tổng kết một sự nghiệp lớn, công bố cho toàn dân được biết.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Khái niệm thể cáo."
      },
      {
        "id": "v8_c3_q15",
        "type": "true_false",
        "text": "Trong 'Bình Ngô đại cáo', quân Minh xâm lược nước ta được tác giả miêu tả là đội quân chính nghĩa.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Bị lên án là quân cuồng bạo 'nướng dân đen trên ngọn lửa hung tàn'."
      },
      {
        "id": "v8_c3_q16",
        "type": "fill_blank",
        "text": "Tác phẩm 'Bình Ngô đại cáo' được tôn vinh là bản ... thứ hai của dân tộc Việt Nam.",
        "options": [],
        "correct": "Tuyên ngôn Độc lập",
        "explanation": "Bản Tuyên ngôn Độc lập thứ hai sau Nam quốc sơn hà."
      },
      {
        "id": "v8_c3_q17",
        "type": "fill_blank",
        "text": "Thần khí của bài cáo thể hiện sức mạnh: 'Lấy đại nghĩa để thắng hung tàn / Lấy chí ... để thay cường bạo.'",
        "options": [],
        "correct": "nhân",
        "explanation": "Lấy chí nhân để thay cường bạo."
      },
      {
        "id": "v8_c3_q18",
        "type": "short_answer",
        "text": "Người quân sư tài ba biên soạn 'Bình Ngô đại cáo' và quân sự mưu lược cho nghĩa quân Lam Sơn là ai?",
        "options": [],
        "correct": "Nguyễn Trãi",
        "explanation": "Danh nhân văn hóa thế giới Nguyễn Trãi (Ức Trai)."
      },
      {
        "id": "v8_c3_q19",
        "type": "short_answer",
        "text": "Trận chiến quyết định tiêu diệt hoàn toàn viện binh Liễu Thăng diễn ra tại ải nào?",
        "options": [],
        "correct": "Ải Chi Lăng",
        "explanation": "Trận Chi Lăng - Xương Giang."
      },
      {
        "id": "v8_c3_q20",
        "type": "essay",
        "text": "Lòng khoan hồng nhân đạo của dân tộc Việt Nam được thể hiện như thế nào ở phần kết của cuộc khởi nghĩa Lam Sơn trong 'Bình Ngô đại cáo'?",
        "options": [],
        "correct": "Sau khi chiến thắng, nghĩa quân không tàn sát quân thù mà mở đường hiếu sinh: cấp 500 chiếc thuyền cho giặc vượt biển về nước, cấp hàng nghìn con ngựa cho quân bộ về quê, sửa sang cầu cống để hai nước hòa hảo lâu dài, dập tắt mầm mống chiến tranh.",
        "explanation": "Nêu bật truyền thống yêu chuộng hòa bình và lòng vị tha nhân đạo cao cả của dân tộc."
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
      },
      {
        "id": "t9_c1_q11",
        "type": "mcq",
        "text": "Phương trình bậc nhất hai ẩn ax + by = c (a khác 0 hoặc b khác 0) có bao nhiêu nghiệm?",
        "options": [
          "Vô số nghiệm",
          "Một nghiệm duy nhất",
          "Vô nghiệm",
          "Hai nghiệm"
        ],
        "correct": "Vô số nghiệm",
        "explanation": "Tập nghiệm biểu diễn bởi một đường thẳng trên mặt phẳng tọa độ."
      },
      {
        "id": "t9_c1_q12",
        "type": "mcq",
        "text": "Hệ hai phương trình bậc nhất hai ẩn có nghiệm duy nhất khi hai đường thẳng biểu diễn chúng:",
        "options": [
          "Cắt nhau",
          "Song song",
          "Trùng nhau",
          "Vuông góc"
        ],
        "correct": "Cắt nhau",
        "explanation": "Hai đường thẳng cắt nhau tại đúng một điểm duy nhất."
      },
      {
        "id": "t9_c1_q13",
        "type": "mcq",
        "text": "Cặp số nào sau đây là nghiệm của hệ phương trình { x + y = 4; x - y = 2 }?",
        "options": [
          "(3; 1)",
          "(2; 2)",
          "(1; 3)",
          "(4; 0)"
        ],
        "correct": "(3; 1)",
        "explanation": "3 + 1 = 4 và 3 - 1 = 2."
      },
      {
        "id": "t9_c1_q14",
        "type": "true_false",
        "text": "Để giải hệ phương trình bằng phương pháp cộng đại số, ta nhân các vế với hệ số thích hợp để hệ số của một biến bằng nhau hoặc đối nhau.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy tắc phương pháp cộng đại số."
      },
      {
        "id": "t9_c1_q15",
        "type": "true_false",
        "text": "Phương trình 0x + 0y = 5 có vô số nghiệm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Vế trái luôn bằng 0, vế phải bằng 5 nên phương trình vô nghiệm."
      },
      {
        "id": "t9_c1_q16",
        "type": "fill_blank",
        "text": "Đồ thị của hàm số bậc nhất y = ax + b (a khác 0) là một đường...",
        "options": [],
        "correct": "thẳng",
        "explanation": "Đồ thị là đường thẳng."
      },
      {
        "id": "t9_c1_q17",
        "type": "fill_blank",
        "text": "Hệ số góc của đường thẳng y = 3x - 5 là...",
        "options": [],
        "correct": "3",
        "explanation": "Hệ số góc là a = 3."
      },
      {
        "id": "t9_c1_q18",
        "type": "short_answer",
        "text": "Tìm x trong hệ: { x + y = 10; y = 3 }. x =",
        "options": [],
        "correct": "7",
        "explanation": "x = 10 - 3 = 7."
      },
      {
        "id": "t9_c1_q19",
        "type": "short_answer",
        "text": "Đường thẳng y = 2x + 1 đi qua điểm A(1; y). Tung độ y của điểm A bằng bao nhiêu?",
        "options": [],
        "correct": "3",
        "explanation": "y = 2(1) + 1 = 3."
      },
      {
        "id": "t9_c1_q20",
        "type": "essay",
        "text": "Hai bạn An và Bình cùng mua vở và bút. An mua 3 quyển vở và 2 chiếc bút hết 34.000 đồng. Bình mua 2 quyển vở và 2 chiếc bút hết 26.000 đồng. Tính giá tiền của mỗi quyển vở và mỗi chiếc bút.",
        "options": [],
        "correct": "Gọi giá tiền 1 quyển vở là x, 1 chiếc bút là y (đồng). Ta có hệ phương trình: { 3x + 2y = 34000; 2x + 2y = 26000 }. Trừ vế với vế ta được: x = 8000 đồng. Thay vào tìm được: 2y = 26000 - 2(8000) = 10000 => y = 5000 đồng. Vậy 1 quyển vở giá 8.000 đồng, 1 chiếc bút giá 5.000 đồng.",
        "explanation": "Lập hệ phương trình bậc nhất hai ẩn và giải tìm nghiệm."
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
      },
      {
        "id": "t9_c2_q11",
        "type": "mcq",
        "text": "Phương trình nào sau đây là phương trình bậc hai một ẩn?",
        "options": [
          "x^2 - 3x + 2 = 0",
          "2x - 5 = 0",
          "x^3 + 2x = 0",
          "1/x + x = 2"
        ],
        "correct": "x^2 - 3x + 2 = 0",
        "explanation": "Dạng ax^2 + bx + c = 0 với a khác 0."
      },
      {
        "id": "t9_c2_q12",
        "type": "mcq",
        "text": "Biệt thức Delta của phương trình bậc hai ax^2 + bx + c = 0 được tính bởi công thức:",
        "options": [
          "b^2 - 4ac",
          "b^2 + 4ac",
          "4ac - b^2",
          "b - 4ac"
        ],
        "correct": "b^2 - 4ac",
        "explanation": "Công thức Delta = b^2 - 4ac."
      },
      {
        "id": "t9_c2_q13",
        "type": "mcq",
        "text": "Nếu Delta > 0 thì phương trình bậc hai có:",
        "options": [
          "Hai nghiệm phân biệt",
          "Nghiệm kép",
          "Vô nghiệm",
          "Vô số nghiệm"
        ],
        "correct": "Hai nghiệm phân biệt",
        "explanation": "Dấu của biệt thức Delta."
      },
      {
        "id": "t9_c2_q14",
        "type": "true_false",
        "text": "Định lí Vi-ét cho biết: nếu x1, x2 là hai nghiệm của phương trình ax^2 + bx + c = 0 thì tổng hai nghiệm x1 + x2 = -b/a.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Công thức Vi-ét tổng hai nghiệm."
      },
      {
        "id": "t9_c2_q15",
        "type": "true_false",
        "text": "Phương trình x^2 + 1 = 0 có hai nghiệm thực.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "x^2 = -1 vô nghiệm trên tập số thực R."
      },
      {
        "id": "t9_c2_q16",
        "type": "fill_blank",
        "text": "Nếu Delta = 0 thì phương trình bậc hai có nghiệm...",
        "options": [],
        "correct": "kép",
        "explanation": "Nghiệm kép x1 = x2 = -b/(2a)."
      },
      {
        "id": "t9_c2_q17",
        "type": "fill_blank",
        "text": "Tích hai nghiệm theo định lí Vi-ét là x1 * x2 = .../a",
        "options": [],
        "correct": "c",
        "explanation": "x1 * x2 = c/a."
      },
      {
        "id": "t9_c2_q18",
        "type": "short_answer",
        "text": "Tính Delta của phương trình x^2 - 4x + 3 = 0:",
        "options": [],
        "correct": "4",
        "explanation": "Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4."
      },
      {
        "id": "t9_c2_q19",
        "type": "short_answer",
        "text": "Tìm nghiệm dương của phương trình x^2 = 36. x =",
        "options": [],
        "correct": "6",
        "explanation": "sqrt(36) = 6."
      },
      {
        "id": "t9_c2_q20",
        "type": "essay",
        "text": "Giải phương trình bậc hai sau bằng công thức nghiệm: x^2 - 5x + 6 = 0",
        "options": [],
        "correct": "Ta có: a = 1, b = -5, c = 6. Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1 > 0. Vì Delta > 0 nên phương trình có hai nghiệm phân biệt: x1 = (5 + sqrt(1)) / 2 = 3; x2 = (5 - sqrt(1)) / 2 = 2. Vậy tập nghiệm là S = {2; 3}.",
        "explanation": "Tính biệt thức Delta và áp dụng công thức nghiệm."
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
      },
      {
        "id": "t9_c3_q11",
        "type": "mcq",
        "text": "Với a >= 0, căn thức bậc hai của a được định nghĩa là số x không âm sao cho:",
        "options": [
          "x^2 = a",
          "x = a^2",
          "x = 2a",
          "2x = a"
        ],
        "correct": "x^2 = a",
        "explanation": "Định nghĩa căn bậc hai số học."
      },
      {
        "id": "t9_c3_q12",
        "type": "mcq",
        "text": "Trục căn thức ở mẫu của biểu thức 2 / sqrt(3) ta được:",
        "options": [
          "2*sqrt(3) / 3",
          "sqrt(3) / 2",
          "2*sqrt(3)",
          "6"
        ],
        "correct": "2*sqrt(3) / 3",
        "explanation": "Nhân cả tử và mẫu với sqrt(3)."
      },
      {
        "id": "t9_c3_q13",
        "type": "mcq",
        "text": "Căn bậc ba của 64 là:",
        "options": [
          "4",
          "8",
          "-4",
          "16"
        ],
        "correct": "4",
        "explanation": "4^3 = 64."
      },
      {
        "id": "t9_c3_q14",
        "type": "true_false",
        "text": "Mọi số thực a đều có đúng một căn bậc ba.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Căn bậc ba xác định với mọi số thực âm, dương và 0."
      },
      {
        "id": "t9_c3_q15",
        "type": "true_false",
        "text": "Biểu thức sqrt(A^2) luôn luôn bằng A với mọi số thực A.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "sqrt(A^2) = |A|, chỉ bằng A khi A >= 0."
      },
      {
        "id": "t9_c3_q16",
        "type": "fill_blank",
        "text": "Biểu thức sqrt(2x - 4) xác định khi và chỉ khi x >= ...",
        "options": [],
        "correct": "2",
        "explanation": "2x - 4 >= 0 => x >= 2."
      },
      {
        "id": "t9_c3_q17",
        "type": "fill_blank",
        "text": "Khai phương một tích: sqrt(a * b) = sqrt(a) * sqrt(...) với a, b không âm.",
        "options": [],
        "correct": "b",
        "explanation": "Quy tắc khai phương một tích."
      },
      {
        "id": "t9_c3_q18",
        "type": "short_answer",
        "text": "Tính giá trị của căn bậc ba của -125:",
        "options": [],
        "correct": "-5",
        "explanation": "(-5)^3 = -125."
      },
      {
        "id": "t9_c3_q19",
        "type": "short_answer",
        "text": "Rút gọn biểu thức: sqrt(45) / sqrt(5) =",
        "options": [],
        "correct": "3",
        "explanation": "sqrt(45/5) = sqrt(9) = 3."
      },
      {
        "id": "t9_c3_q20",
        "type": "essay",
        "text": "Giải phương trình chứa căn thức bậc hai sau: sqrt(2x - 1) = 3",
        "options": [],
        "correct": "Điều kiện xác định: 2x - 1 >= 0 <=> x >= 1/2. Bình phương hai vế ta được: 2x - 1 = 3^2 <=> 2x - 1 = 9 <=> 2x = 10 <=> x = 5 (thỏa mãn điều kiện). Vậy nghiệm của phương trình là x = 5.",
        "explanation": "Đặt điều kiện xác định, bình phương hai vế và đối chiếu nghiệm."
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
      },
      {
        "id": "v9_c1_q11",
        "type": "mcq",
        "text": "Từ 'Đồng chí' trong bài thơ cùng tên của Chính Hữu có nghĩa là:",
        "options": [
          "Những người cùng chung chí hướng, lý tưởng cách mạng",
          "Bạn cùng lớp",
          "Hàng xóm láng giềng",
          "Họ hàng thân thích"
        ],
        "correct": "Những người cùng chung chí hướng, lý tưởng cách mạng",
        "explanation": "Cùng chí hướng giải phóng dân tộc."
      },
      {
        "id": "v9_c1_q12",
        "type": "mcq",
        "text": "Bài thơ 'Ánh trăng' của Nguyễn Duy nhắc nhở con người điều gì?",
        "options": [
          "Lối sống ân nghĩa thủy chung, không được lãng quên quá khứ gian lao",
          "Tình yêu thiên nhiên lãng mạn",
          "Nỗi sợ bóng tối",
          "Tài năng thiên văn học"
        ],
        "correct": "Lối sống ân nghĩa thủy chung, không được lãng quên quá khứ gian lao",
        "explanation": "Đạo lí 'uống nước nhớ nguồn'."
      },
      {
        "id": "v9_c1_q13",
        "type": "mcq",
        "text": "Hình tượng 'Ánh trăng' trong bài thơ của Nguyễn Duy mang ý nghĩa biểu tượng cho:",
        "options": [
          "Quá khứ nghĩa tình vẹn nguyên và lương tâm con người",
          "Bóng đèn thành phố",
          "Vầng trăng vũ trụ xa xôi",
          "Ngôi sao may mắn"
        ],
        "correct": "Quá khứ nghĩa tình vẹn nguyên và lương tâm con người",
        "explanation": "Ánh trăng im phăng phắc nhắc nhở con người tự soi chiếu lại mình."
      },
      {
        "id": "v9_c1_q14",
        "type": "true_false",
        "text": "Trong bài thơ 'Đồng chí', người lính nông dân xuất thân từ những miền quê nghèo khó 'nước mặn đồng chua', 'đất cày lên sỏi đá'.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nguồn gốc xuất thân chung của những người lính Cụ Hồ."
      },
      {
        "id": "v9_c1_q15",
        "type": "true_false",
        "text": "Chiếc xe trong 'Bài thơ về tiểu đội xe không kính' bị mất kính do lỗi sản xuất từ nhà máy.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "'Không có kính không phải vì xe không có kính / Bom giật bom rung kính vỡ đi rồi'."
      },
      {
        "id": "v9_c1_q16",
        "type": "fill_blank",
        "text": "Câu thơ thứ 7 đặc biệt chỉ có đúng hai chữ kết thúc khổ 1 bài thơ Đồng chí là: '...!'",
        "options": [],
        "correct": "Đồng chí",
        "explanation": "Khép lại khổ 1 như một sự đúc kết thiêng liêng."
      },
      {
        "id": "v9_c1_q17",
        "type": "fill_blank",
        "text": "Khổ cuối bài thơ Đồng chí khép lại bằng một hình ảnh thơ lãng mạn tuyệt đẹp: 'Đầu súng trăng ...'",
        "options": [],
        "correct": "treo",
        "explanation": "Đầu súng trăng treo."
      },
      {
        "id": "v9_c1_q18",
        "type": "short_answer",
        "text": "Tiếng cười 'Ha ha' sảng khoái của những người lính lái xe Trường Sơn thể hiện tinh thần gì?",
        "options": [],
        "correct": "Lạc quan yêu đời",
        "explanation": "Tinh thần lạc quan, bất chấp bom đạn và hiểm nguy."
      },
      {
        "id": "v9_c1_q19",
        "type": "short_answer",
        "text": "Khi ánh điện thành phố vụt tắt, vầng trăng tròn hiện ra ở đâu trong bài thơ Ánh trăng: Ngoài cửa sổ hay Trên bầu trời?",
        "options": [],
        "correct": "Ngoài cửa sổ",
        "explanation": "'Đột ngột vầng trăng tròn / Bật tung cửa sổ'."
      },
      {
        "id": "v9_c1_q20",
        "type": "essay",
        "text": "Phân tích ý nghĩa biểu tượng của hình ảnh thơ 'Đầu súng trăng treo' trong bài thơ Đồng chí của Chính Hữu.",
        "options": [],
        "correct": "'Súng' là biểu tượng của hiện thực chiến đấu khốc liệt, của người lính bảo vệ Tổ quốc; còn 'Trăng' là biểu tượng của vẻ đẹp thiên nhiên thanh bình, lãng mạn và khát vọng hòa bình. Sự hòa quyện giữa 'súng' và 'trăng' tạo nên biểu tượng tuyệt đẹp cho tâm hồn cao cả của người lính cách mạng: vừa kiên cường dũng cảm vừa tràn đầy tinh thần lạc quan nhân văn.",
        "explanation": "Phân tích sự kết hợp giữa hiện thực khốc liệt và chất thơ lãng mạn."
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
      },
      {
        "id": "v9_c2_q11",
        "type": "mcq",
        "text": "Nhà văn Kim Lân là cây bút chuyên viết về đề tài nào?",
        "options": [
          "Nông thôn và người nông dân Bắc Bộ",
          "Đời sống thị dân trí thức tư sản",
          "Chiến tranh trên không gian",
          "Truyện kiếm hiệp dã sử"
        ],
        "correct": "Nông thôn và người nông dân Bắc Bộ",
        "explanation": "Am hiểu sâu sắc phong tục và tâm hồn người nông dân."
      },
      {
        "id": "v9_c2_q12",
        "type": "mcq",
        "text": "Văn bản 'Mùa xuân nho nhỏ' là sáng tác của nhà thơ nào?",
        "options": [
          "Thanh Hải",
          "Y Phương",
          "Viễn Phương",
          "Nguyễn Duy"
        ],
        "correct": "Thanh Hải",
        "explanation": "Nhà thơ Thanh Hải xứ Huế."
      },
      {
        "id": "v9_c2_q13",
        "type": "mcq",
        "text": "Bài thơ 'Viếng lăng Bác' của Viễn Phương bộc lộ cảm xúc sâu sắc gì?",
        "options": [
          "Lòng thành kính, tiếc thương và biết ơn vô hạn đối với Bác Hồ",
          "Nỗi nhớ gia đình",
          "Tình bạn chiến đấu",
          "Khát khao trở về quê hương"
        ],
        "correct": "Lòng thành kính, tiếc thương và biết ơn vô hạn đối với Bác Hồ",
        "explanation": "Tình cảm chân thành của người con miền Nam ra viếng lăng Bác."
      },
      {
        "id": "v9_c2_q14",
        "type": "true_false",
        "text": "Nhà thơ Thanh Hải viết 'Mùa xuân nho nhỏ' khi đang nằm trên giường bệnh những ngày cuối đời.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hoàn cảnh sáng tác xúc động vào tháng 11/1980 trước khi tác giả qua đời."
      },
      {
        "id": "v9_c2_q15",
        "type": "true_false",
        "text": "Hình ảnh 'hàng tre bát ngát' trong bài Viếng lăng Bác gợi tả phẩm chất kiên cường, bất khuất của con người Việt Nam.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "'Đã thấy trong sương hàng tre bát ngát / Bão táp mưa sa đứng thẳng hàng'."
      },
      {
        "id": "v9_c2_q16",
        "type": "fill_blank",
        "text": "Ước nguyện hòa nhập cống hiến âm thầm của nhà thơ Thanh Hải: 'Một mùa xuân nho nhỏ / Lặng lẽ dâng cho ...'",
        "options": [],
        "correct": "đời",
        "explanation": "Lặng lẽ dâng cho đời / Dù là tuổi hai mươi / Dù là khi tóc bạc."
      },
      {
        "id": "v9_c2_q17",
        "type": "fill_blank",
        "text": "Bài thơ 'Nói với con' của nhà thơ ... nhắn nhủ con giữ gìn cội nguồn văn hóa 'người đồng mình'.",
        "options": [],
        "correct": "Y Phương",
        "explanation": "Nhà thơ dân tộc Tày Y Phương."
      },
      {
        "id": "v9_c2_q18",
        "type": "short_answer",
        "text": "Hai câu thơ: 'Mai về miền Nam thương trào nước mắt / Muốn làm con chim hót quanh lăng Bác' nằm trong bài thơ nào?",
        "options": [],
        "correct": "Viếng lăng Bác",
        "explanation": "Bài thơ Viếng lăng Bác của Viễn Phương."
      },
      {
        "id": "v9_c2_q19",
        "type": "short_answer",
        "text": "Người cha trong bài thơ 'Nói với con' ca ngợi người đồng mình 'đục đá kê cao quê hương' để nói về phẩm chất gì?",
        "options": [],
        "correct": "Ý chí kiên cường",
        "explanation": "Ý chí vượt khó tự lực cánh sinh xây dựng quê hương."
      },
      {
        "id": "v9_c2_q20",
        "type": "essay",
        "text": "Nêu ý nghĩa triết lý nhân sinh cao đẹp trong ước nguyện làm 'Một mùa xuân nho nhỏ' của nhà thơ Thanh Hải.",
        "options": [],
        "correct": "Ước nguyện làm 'một mùa xuân nho nhỏ' thể hiện khát vọng sống chân thành, cao đẹp: mỗi người hãy cống hiến phần tốt đẹp, tinh túy nhất của cuộc đời mình dù là nhỏ bé vào mùa xuân lớn của đất nước. Cống hiến một cách tự nguyện, âm thầm, khiêm nhường không phân biệt lứa tuổi ('dù là tuổi hai mươi, dù là khi tóc bạc').",
        "explanation": "Làm nổi bật quan niệm sống cống hiến thầm lặng và tinh thần trách nhiệm với cuộc đời."
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
      },
      {
        "id": "v9_c3_q11",
        "type": "mcq",
        "text": "Truyện ngắn 'Bến quê' của Nguyễn Minh Châu gửi gắm triết lý sâu sắc gì?",
        "options": [
          "Con người thường khó tránh khỏi những vòng vèo chùng chình để rồi dễ bỏ quên những vẻ đẹp bình dị thân thương gần gũi",
          "Chuyến đi xa khám phá thế giới",
          "Khát vọng làm giàu",
          "Tình đồng chí thời chiến"
        ],
        "correct": "Con người thường khó tránh khỏi những vòng vèo chùng chình để rồi dễ bỏ quên những vẻ đẹp bình dị thân thương gần gũi",
        "explanation": "Nỗi trăn trở về bãi bồi bên kia sông của nhân vật Nhĩ."
      },
      {
        "id": "v9_c3_q12",
        "type": "mcq",
        "text": "Nhân vật Nhĩ trong truyện ngắn 'Bến quê' bị mắc căn bệnh gì khiến anh nằm liệt giường?",
        "options": [
          "Bệnh hiểm nghèo liệt toàn thân",
          "Bị mù hai mắt",
          "Bị gãy chân do tai nạn",
          "Bị sốt xuất huyết"
        ],
        "correct": "Bệnh hiểm nghèo liệt toàn thân",
        "explanation": "Căn bệnh nan y cuối đời."
      },
      {
        "id": "v9_c3_q13",
        "type": "mcq",
        "text": "Người vợ hiền thục, tần tảo, hy sinh chăm sóc cho Nhĩ từng thìa nước, ngụm cháo là ai?",
        "options": [
          "Liên",
          "Huệ",
          "Mai",
          "Cúc"
        ],
        "correct": "Liên",
        "explanation": "Chị Liên - vợ anh Nhĩ."
      },
      {
        "id": "v9_c3_q14",
        "type": "true_false",
        "text": "Suốt cuộc đời, Nhĩ đã đi khắp các phương trời trên thế giới nhưng lại chưa từng một lần đặt chân lên bãi bồi bên kia sông trước cửa nhà mình.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy luật nghịch lý của cuộc đời con người."
      },
      {
        "id": "v9_c3_q15",
        "type": "true_false",
        "text": "Nguyễn Minh Châu được coi là một trong những nhà văn tiên phong mở đường xuất sắc nhất của văn học thời kì đổi mới.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đánh giá của nhà văn Nguyên Ngọc về Nguyễn Minh Châu."
      },
      {
        "id": "v9_c3_q16",
        "type": "fill_blank",
        "text": "Hình ảnh người vợ trong chiếc áo vá khâu tần tảo đại diện cho tình nghĩa vợ chồng son sắt và bến đỗ bình yên của cuộc đời mỗi con ...",
        "options": [],
        "correct": "người",
        "explanation": "Gia đình và người vợ là bến đỗ bình yên nhất."
      },
      {
        "id": "v9_c3_q17",
        "type": "fill_blank",
        "text": "Hành động cuối cùng của Nhĩ giơ cánh tay gầy guộc vẫy ra hiệu như muốn hối thúc đứa con đừng bỏ lỡ chuyến ... cuối cùng qua sông.",
        "options": [],
        "correct": "đò",
        "explanation": "Chuyến đò duy nhất trong ngày nối đôi bờ."
      },
      {
        "id": "v9_c3_q18",
        "type": "short_answer",
        "text": "Hình ảnh bãi bồi màu mỡ phù sa bên kia sông Hồng mang ý nghĩa biểu tượng cho điều gì?",
        "options": [],
        "correct": "Vẻ đẹp bình dị của quê hương",
        "explanation": "Vẻ đẹp gần gũi, thiêng liêng mà con người dễ lãng quên."
      },
      {
        "id": "v9_c3_q19",
        "type": "short_answer",
        "text": "Từ ngữ nào diễn tả sự chậm chạp, vướng víu vào những cám dỗ phù phiếm trên đường đời: 'Chùng chình' hay 'Thoăn thoắt'?",
        "options": [],
        "correct": "Chùng chình",
        "explanation": "Sự chùng chình vòng vèo của đời người."
      },
      {
        "id": "v9_c3_q20",
        "type": "essay",
        "text": "Qua bi kịch và những chiêm nghiệm cuối đời của nhân vật Nhĩ trong truyện ngắn 'Bến quê', em rút ra được bài học cuộc sống gì cho chính mình?",
        "options": [],
        "correct": "Bài học: Hãy biết nâng niu, trân trọng những giá trị bình dị, thân thương và gần gũi nhất bên cạnh mình như mái ấm gia đình, tình yêu thương của cha mẹ, bạn bè và quê hương; đừng vì mải mê theo đuổi những thứ phù phiếm xa xôi để rồi khi nhận ra thì đã quá muộn màng.",
        "explanation": "Nêu bài học về sự trân trọng hạnh phúc bình dị nơi gia đình và thực tại."
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
      },
      {
        "id": "a6_c1_q11",
        "type": "mcq",
        "text": "Choose the correct preposition: We have English lessons _____ Tuesday and Friday.",
        "options": [
          "on",
          "in",
          "at",
          "for"
        ],
        "correct": "on",
        "explanation": "Dùng giới từ 'on' trước các thứ trong tuần."
      },
      {
        "id": "a6_c1_q12",
        "type": "mcq",
        "text": "Which verb goes with 'homework': play, do, make or have?",
        "options": [
          "do",
          "play",
          "make",
          "take"
        ],
        "correct": "do",
        "explanation": "Cụm cố định: do homework."
      },
      {
        "id": "a6_c1_q13",
        "type": "mcq",
        "text": "Look! The students ________ football in the school yard.",
        "options": [
          "are playing",
          "play",
          "is playing",
          "played"
        ],
        "correct": "are playing",
        "explanation": "Dấu hiệu 'Look!' dùng thì Hiện tại tiếp diễn, chủ ngữ số nhiều: are playing."
      },
      {
        "id": "a6_c1_q14",
        "type": "true_false",
        "text": "A compass is an instrument used for drawing circles in Geometry.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Com-pa dùng để vẽ đường tròn."
      },
      {
        "id": "a6_c1_q15",
        "type": "true_false",
        "text": "The plural form of 'pencil' is 'pencils'.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Thêm 's' vào sau danh từ số ít."
      },
      {
        "id": "a6_c1_q16",
        "type": "fill_blank",
        "text": "Students eat lunch in the school ... during lunchtime.",
        "options": [],
        "correct": "canteen",
        "explanation": "canteen / cafeteria: căn tin trường học."
      },
      {
        "id": "a6_c1_q17",
        "type": "fill_blank",
        "text": "Opposite of 'new' is ...",
        "options": [],
        "correct": "old",
        "explanation": "old (cũ) trái nghĩa với new (mới)."
      },
      {
        "id": "a6_c1_q18",
        "type": "short_answer",
        "text": "What device do teachers use to play listening audio in English class: A calculator or A cassette player / speaker?",
        "options": [],
        "correct": "speaker",
        "explanation": "loa phát âm thanh (speaker / audio player)."
      },
      {
        "id": "a6_c1_q19",
        "type": "short_answer",
        "text": "Fill in the blank with 'is' or 'are': There _____ a big computer room in our school.",
        "options": [],
        "correct": "is",
        "explanation": "a big computer room là danh từ số ít nên dùng 'is'."
      },
      {
        "id": "a6_c1_q20",
        "type": "essay",
        "text": "Write 3 sentences in English describing your daily morning routine before going to school.",
        "options": [],
        "correct": "Every morning, I wake up at 6:00 AM and brush my teeth. Then, I have breakfast with bread and milk with my family. Finally, I put on my school uniform and ride my bicycle to school.",
        "explanation": "Sử dụng thì hiện tại đơn miêu tả thói quen buổi sáng."
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
      },
      {
        "id": "k6_c1_q11",
        "type": "mcq",
        "text": "Vật thể nào sau đây là vật thể tự nhiên?",
        "options": [
          "Cây lúa",
          "Chiếc bút bi",
          "Bình hoa sứ",
          "Quạt điện"
        ],
        "correct": "Cây lúa",
        "explanation": "Cây lúa sinh trưởng tự nhiên trong môi trường."
      },
      {
        "id": "k6_c1_q12",
        "type": "mcq",
        "text": "Biển báo có hình ngọn lửa màu đen trên nền vàng hình tam giác cảnh báo điều gì?",
        "options": [
          "Chất dễ cháy",
          "Chất độc sinh học",
          "Ăn mòn da",
          "Nhiễm điện cao thế"
        ],
        "correct": "Chất dễ cháy",
        "explanation": "Kí hiệu cảnh báo chất dễ bắt lửa gây cháy."
      },
      {
        "id": "k6_c1_q13",
        "type": "mcq",
        "text": "Để đo thời gian chạy 100m của học sinh trong giờ thể dục, người ta dùng loại đồng hồ nào?",
        "options": [
          "Đồng hồ bấm giây",
          "Đồng hồ quả lắc",
          "Đồng hồ cát",
          "Đồng hồ mặt trời"
        ],
        "correct": "Đồng hồ bấm giây",
        "explanation": "Đo khoảng thời gian ngắn với độ chính xác cao."
      },
      {
        "id": "k6_c1_q14",
        "type": "true_false",
        "text": "Nhiệt độ nóng chảy của nước đá tinh khiết ở điều kiện tiêu chuẩn là 0°C.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nhiệt độ đóng băng và tan chảy của nước là 0°C."
      },
      {
        "id": "k6_c1_q15",
        "type": "true_false",
        "text": "Quá trình hòa tan muối ăn vào nước là một hiện tượng hóa học sinh ra chất mới.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Đó là hiện tượng vật lí hòa tan, cô cạn lại thu được muối ban đầu."
      },
      {
        "id": "k6_c1_q16",
        "type": "fill_blank",
        "text": "Đơn vị đo độ dài cơ bản trong hệ SI là mét, kí hiệu là chữ cái ...",
        "options": [],
        "correct": "m",
        "explanation": "Kí hiệu m."
      },
      {
        "id": "k6_c1_q17",
        "type": "fill_blank",
        "text": "Dụng cụ dùng để kẹp ống nghiệm khi đun nóng trên ngọn lửa đèn cồn là ... gỗ.",
        "options": [],
        "correct": "kẹp",
        "explanation": "Kẹp gỗ ống nghiệm."
      },
      {
        "id": "k6_c1_q18",
        "type": "short_answer",
        "text": "1 kilôgam (kg) bằng bao nhiêu gam (g)?",
        "options": [],
        "correct": "1000",
        "explanation": "1 kg = 1000 g."
      },
      {
        "id": "k6_c1_q19",
        "type": "short_answer",
        "text": "Dụng cụ đo nhiệt độ cơ thể người thông dụng nhất là gì?",
        "options": [],
        "correct": "Nhiệt kế",
        "explanation": "Nhiệt kế y tế (thủy ngân hoặc điện tử)."
      },
      {
        "id": "k6_c1_q20",
        "type": "essay",
        "text": "Trình bày các bước đo độ dài của một vật bằng thước kẻ để đảm bảo kết quả chính xác nhất.",
        "options": [],
        "correct": "Các bước: 1) Ước lượng độ dài vật để chọn thước có giới hạn đo (GHĐ) và độ chia nhỏ nhất (ĐCNN) phù hợp. 2) Đặt thước dọc theo chiều dài của vật, vạch số 0 trùng với một đầu của vật. 3) Đặt mắt nhìn vuông góc với cạnh thước tại đầu kia của vật và đọc, ghi kết quả theo vạch chia gần nhất.",
        "explanation": "Nêu đầy đủ 3 bước: chọn thước, đặt thước và cách đặt mắt đọc số đo."
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
      },
      {
        "id": "a7_c1_q11",
        "type": "mcq",
        "text": "Choose the word with the different stress pattern: hobby, collect, relax, enjoy.",
        "options": [
          "hobby",
          "collect",
          "relax",
          "enjoy"
        ],
        "correct": "hobby",
        "explanation": "hobby nhấn âm 1, ba từ còn lại nhấn âm 2."
      },
      {
        "id": "a7_c1_q12",
        "type": "mcq",
        "text": "Doing volunteer work helps teenagers become more ________ and responsible.",
        "options": [
          "confident",
          "lazy",
          "impatient",
          "bored"
        ],
        "correct": "confident",
        "explanation": "confident: tự tin và năng động."
      },
      {
        "id": "a7_c1_q13",
        "type": "mcq",
        "text": "My sister hates ________ computer games all day.",
        "options": [
          "playing",
          "play",
          "played",
          "to playing"
        ],
        "correct": "playing",
        "explanation": "hate + V-ing."
      },
      {
        "id": "a7_c1_q14",
        "type": "true_false",
        "text": "Cardboard making is an inexpensive and creative hobby for secondary students.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Làm đồ thủ công bằng bìa các-tông."
      },
      {
        "id": "a7_c1_q15",
        "type": "true_false",
        "text": "We use 'so' to express a reason in a compound sentence.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "'so' chỉ kết quả, 'because' mới chỉ nguyên nhân."
      },
      {
        "id": "a7_c1_q16",
        "type": "fill_blank",
        "text": "She loves flowers, so her hobby is arranging ...",
        "options": [],
        "correct": "flowers",
        "explanation": "flower arranging: cắm hoa nghệ thuật."
      },
      {
        "id": "a7_c1_q17",
        "type": "fill_blank",
        "text": "I am fond ... listening to pop music in my free time.",
        "options": [],
        "correct": "of",
        "explanation": "Cụm tính từ: be fond of."
      },
      {
        "id": "a7_c1_q18",
        "type": "short_answer",
        "text": "What outdoor hobby involves catching fish with a rod and bait?",
        "options": [],
        "correct": "Fishing",
        "explanation": "Câu cá (Fishing)."
      },
      {
        "id": "a7_c1_q19",
        "type": "short_answer",
        "text": "Write the correct past form of the irregular verb 'make':",
        "options": [],
        "correct": "made",
        "explanation": "make -> made."
      },
      {
        "id": "a7_c1_q20",
        "type": "essay",
        "text": "Write 3-4 sentences in English explaining why swimming is a good sport and hobby for teenagers.",
        "options": [],
        "correct": "Swimming is an excellent sport because it exercises all the muscles in the body. It helps teenagers stay fit, build strong lungs and prevent drowning accidents. Additionally, swimming in cool water is a wonderful way to relax on hot summer days.",
        "explanation": "Nêu lợi ích về sức khỏe, kỹ năng sinh tồn và giải trí."
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
      },
      {
        "id": "k7_c1_q11",
        "type": "mcq",
        "text": "Nguyên tố hóa học là tập hợp những nguyên tử có cùng:",
        "options": [
          "Số proton trong hạt nhân",
          "Số neutron",
          "Số electron lớp ngoài cùng",
          "Khối lượng nguyên tử"
        ],
        "correct": "Số proton trong hạt nhân",
        "explanation": "Định nghĩa nguyên tố hóa học dựa trên số proton (số hiệu nguyên tử Z)."
      },
      {
        "id": "k7_c1_q12",
        "type": "mcq",
        "text": "Bảng tuần hoàn các nguyên tố hóa học do nhà hóa học vĩ đại nào đặt nền móng phát minh?",
        "options": [
          "D.I. Mendeleev",
          "A. Einstein",
          "I. Newton",
          "Marie Curie"
        ],
        "correct": "D.I. Mendeleev",
        "explanation": "D.I. Mendeleev công bố năm 1869."
      },
      {
        "id": "k7_c1_q13",
        "type": "mcq",
        "text": "Nguyên tố nào sau đây là phi kim?",
        "options": [
          "Lưu huỳnh (S)",
          "Sắt (Fe)",
          "Nhôm (Al)",
          "Đồng (Cu)"
        ],
        "correct": "Lưu huỳnh (S)",
        "explanation": "Lưu huỳnh (Sulfur) là phi kim."
      },
      {
        "id": "k7_c1_q14",
        "type": "true_false",
        "text": "Trong bảng tuần hoàn, các nguyên tố có cùng số electron lớp ngoài cùng được xếp vào cùng một nhóm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nguyên tắc xếp nhóm trong bảng tuần hoàn."
      },
      {
        "id": "k7_c1_q15",
        "type": "true_false",
        "text": "Khí hiếm (nhóm VIIIA) là các nguyên tố hóa học rất dễ tham gia phản ứng hóa học ở điều kiện thường.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Khí hiếm có lớp vỏ bền vững 8e nên rất trơ về mặt hóa học."
      },
      {
        "id": "k7_c1_q16",
        "type": "fill_blank",
        "text": "Kí hiệu hóa học của nguyên tố Nhôm gồm hai chữ cái là ...",
        "options": [],
        "correct": "Al",
        "explanation": "Nhôm là Al (Aluminium)."
      },
      {
        "id": "k7_c1_q17",
        "type": "fill_blank",
        "text": "Số hạt mang điện trong nguyên tử gồm proton và ...",
        "options": [],
        "correct": "electron",
        "explanation": "Proton (+) và Electron (-)."
      },
      {
        "id": "k7_c1_q18",
        "type": "short_answer",
        "text": "Một nguyên tử có 6 proton trong hạt nhân thì có bao nhiêu electron ở lớp vỏ?",
        "options": [],
        "correct": "6",
        "explanation": "Nguyên tử trung hòa điện: số p = số e = 6."
      },
      {
        "id": "k7_c1_q19",
        "type": "short_answer",
        "text": "Kí hiệu hóa học của nguyên tố Vàng là chữ gì?",
        "options": [],
        "correct": "Au",
        "explanation": "Au (Aurum)."
      },
      {
        "id": "k7_c1_q20",
        "type": "essay",
        "text": "Nêu ý nghĩa của vị trí một nguyên tố hóa học trong bảng tuần hoàn (ô nguyên tố, chu kì, nhóm).",
        "options": [],
        "correct": "1) Số thứ tự ô nguyên tố cho biết số hiệu nguyên tử (số proton, số electron) của nguyên tố đó. 2) Số thứ tự chu kì cho biết số lớp electron trong nguyên tử. 3) Số thứ tự nhóm (nhóm A) cho biết số electron ở lớp ngoài cùng, từ đó dự đoán được tính chất hóa học cơ bản là kim loại, phi kim hay khí hiếm.",
        "explanation": "Nêu đầy đủ 3 ý nghĩa tương ứng với ô, chu kì và nhóm."
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
      },
      {
        "id": "a8_c1_q11",
        "type": "mcq",
        "text": "Students usually hang ________ with their friends at the shopping mall at weekends.",
        "options": [
          "out",
          "in",
          "on",
          "up"
        ],
        "correct": "out",
        "explanation": "hang out: đi chơi, tụ tập cùng bạn bè."
      },
      {
        "id": "a8_c1_q12",
        "type": "mcq",
        "text": "Which activity is considered an indoor recreation?",
        "options": [
          "Cooking and reading books",
          "Mountain climbing",
          "Camping in the forest",
          "Surfing at the beach"
        ],
        "correct": "Cooking and reading books",
        "explanation": "Nấu ăn và đọc sách là hoạt động trong nhà."
      },
      {
        "id": "a8_c1_q13",
        "type": "mcq",
        "text": "My brother prefers surfing the net to ________ comic books.",
        "options": [
          "reading",
          "read",
          "reads",
          "to read"
        ],
        "correct": "reading",
        "explanation": "prefer V-ing to V-ing."
      },
      {
        "id": "a8_c1_q14",
        "type": "true_false",
        "text": "Cloud watching and bird watching are activities that help people connect with nature.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hoạt động ngoài trời hòa mình vào thiên nhiên."
      },
      {
        "id": "a8_c1_q15",
        "type": "true_false",
        "text": "'Couch potato' is an idiom used to describe an extremely energetic and active athlete.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "'couch potato' chỉ người lười biếng chỉ nằm xem ti-vi suốt ngày."
      },
      {
        "id": "a8_c1_q16",
        "type": "fill_blank",
        "text": "She is keen ... learning how to play chess with her grandfather.",
        "options": [],
        "correct": "on",
        "explanation": "be keen on + V-ing."
      },
      {
        "id": "a8_c1_q17",
        "type": "fill_blank",
        "text": "Origami is the traditional Japanese art of paper ...",
        "options": [],
        "correct": "folding",
        "explanation": "gấp giấy nghệ thuật origami."
      },
      {
        "id": "a8_c1_q18",
        "type": "short_answer",
        "text": "What compound noun refers to the game of assembling interlocking plastic bricks?",
        "options": [],
        "correct": "Lego",
        "explanation": "Xếp hình Lego."
      },
      {
        "id": "a8_c1_q19",
        "type": "short_answer",
        "text": "Find the synonym of 'fond of': interested in or scared of?",
        "options": [],
        "correct": "interested in",
        "explanation": "fond of = interested in (yêu thích)."
      },
      {
        "id": "a8_c1_q20",
        "type": "essay",
        "text": "Write a short paragraph (40-50 words) giving advice to a friend who spends too much time on social media.",
        "options": [],
        "correct": "You should not spend too much time scrolling through social media because it hurts your eyes and wastes study time. Instead, you can join a sports club, read informative books or take a walk outside with friends to feel healthier and happier.",
        "explanation": "Đưa ra lời khuyên thiết thực về sức khỏe và các hoạt động thay thế bổ ích."
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
      },
      {
        "id": "k8_c1_q11",
        "type": "mcq",
        "text": "Công thức hóa học nào sau đây là của khí Carbon dioxide?",
        "options": [
          "CO2",
          "CO",
          "CH4",
          "O2"
        ],
        "correct": "CO2",
        "explanation": "Khí carbonic là CO2."
      },
      {
        "id": "k8_c1_q12",
        "type": "mcq",
        "text": "Phản ứng tỏa nhiệt là phản ứng hóa học:",
        "options": [
          "Giải phóng năng lượng dưới dạng nhiệt ra môi trường xung quanh",
          "Thu nhiệt lượng từ môi trường",
          "Làm môi trường lạnh đi",
          "Không thay đổi nhiệt độ"
        ],
        "correct": "Giải phóng năng lượng dưới dạng nhiệt ra môi trường xung quanh",
        "explanation": "Định nghĩa phản ứng tỏa nhiệt (như phản ứng cháy than củi)."
      },
      {
        "id": "k8_c1_q13",
        "type": "mcq",
        "text": "Chất xúc tác là chất:",
        "options": [
          "Làm tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng",
          "Tham gia phản ứng làm giảm khối lượng",
          "Làm phản ứng dừng lại",
          "Làm biến đổi thành chất khác"
        ],
        "correct": "Làm tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng",
        "explanation": "Định nghĩa chất xúc tác."
      },
      {
        "id": "k8_c1_q14",
        "type": "true_false",
        "text": "Khi đập nhỏ đá vôi trước khi nung, diện tích bề mặt tiếp xúc tăng lên làm phản ứng phân hủy diễn ra nhanh hơn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Yếu tố diện tích tiếp xúc ảnh hưởng đến tốc độ phản ứng."
      },
      {
        "id": "k8_c1_q15",
        "type": "true_false",
        "text": "Số Avogadro (N) có giá trị xấp xỉ bằng 6,022 x 10^23 hạt.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hằng số Avogadro trong 1 mol chất."
      },
      {
        "id": "k8_c1_q16",
        "type": "fill_blank",
        "text": "Khối lượng mol của khí Oxi (O2) là ... g/mol.",
        "options": [],
        "correct": "32",
        "explanation": "16 x 2 = 32 g/mol."
      },
      {
        "id": "k8_c1_q17",
        "type": "fill_blank",
        "text": "1 mol chất khí bất kì ở điều kiện chuẩn (25°C, 1 bar) đều chiếm thể tích là ... lít.",
        "options": [],
        "correct": "24.79",
        "explanation": "Thể tích mol chuẩn theo chương trình GDPT mới là 24.79 lít."
      },
      {
        "id": "k8_c1_q18",
        "type": "short_answer",
        "text": "Tính số mol của 5.6 gam sắt Fe (Biết M_Fe = 56 g/mol):",
        "options": [],
        "correct": "0.1",
        "explanation": "n = m / M = 5.6 / 56 = 0.1 mol."
      },
      {
        "id": "k8_c1_q19",
        "type": "short_answer",
        "text": "Trong phản ứng: CaCO3 (t°) -> CaO + CO2, chất nào là chất tham gia phản ứng?",
        "options": [],
        "correct": "CaCO3",
        "explanation": "CaCO3 (đá vôi) là chất tham gia."
      },
      {
        "id": "k8_c1_q20",
        "type": "essay",
        "text": "Cho 2.4 gam kim loại Magie (Mg) phản ứng hoàn toàn với dung dịch axit clohiđric (HCl) dư sinh ra muối Magie clorua (MgCl2) và khí Hydro (H2). Viết phương trình hóa học và tính khối lượng muối MgCl2 thu được (Biết Mg=24, Cl=35.5).",
        "options": [],
        "correct": "Phương trình hóa học: Mg + 2HCl -> MgCl2 + H2. Số mol Mg: n = 2.4 / 24 = 0.1 mol. Theo phương trình: n_MgCl2 = n_Mg = 0.1 mol. Khối lượng muối MgCl2 thu được là: m = 0.1 x (24 + 35.5 x 2) = 0.1 x 95 = 9.5 gam.",
        "explanation": "Viết đúng PTHH, tính số mol theo đề bài và tính khối lượng sản phẩm."
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
      },
      {
        "id": "a9_c1_q11",
        "type": "mcq",
        "text": "Van Phuc village in Hanoi is well known for producing high quality ________ products.",
        "options": [
          "silk",
          "conical hat",
          "pottery",
          "lacquerware"
        ],
        "correct": "silk",
        "explanation": "Làng lụa Vạn Phúc (Hà Đông)."
      },
      {
        "id": "a9_c1_q12",
        "type": "mcq",
        "text": "Which phrasal verb means 'return from a journey': come back, turn down, look after or give up?",
        "options": [
          "come back",
          "turn down",
          "look after",
          "give up"
        ],
        "correct": "come back",
        "explanation": "come back: trở về."
      },
      {
        "id": "a9_c1_q13",
        "type": "mcq",
        "text": "The conical hat of Chuong village is made from dried ________ leaves.",
        "options": [
          "palm",
          "lotus",
          "banana",
          "bamboo"
        ],
        "correct": "palm",
        "explanation": "Nón làng Chuông làm từ lá cọ phơi khô."
      },
      {
        "id": "a9_c1_q14",
        "type": "true_false",
        "text": "Complex sentences always consist of an independent clause and at least one dependent clause.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Cấu trúc câu phức trong ngữ pháp tiếng Anh."
      },
      {
        "id": "a9_c1_q15",
        "type": "true_false",
        "text": "Lacquerware involves applying multiple layers of resin and polishing to create shiny decorative items.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nghề sơn mài truyền thống."
      },
      {
        "id": "a9_c1_q16",
        "type": "fill_blank",
        "text": "Tourists like to buy souvenirs to remind them ... their wonderful trips.",
        "options": [],
        "correct": "of",
        "explanation": "remind somebody of something."
      },
      {
        "id": "a9_c1_q17",
        "type": "fill_blank",
        "text": "Dong Ho is famous for its folk woodblock ...",
        "options": [],
        "correct": "paintings",
        "explanation": "Tranh khắc gỗ dân gian Đông Hồ."
      },
      {
        "id": "a9_c1_q18",
        "type": "short_answer",
        "text": "What is the synonym of 'historical site': attraction or heritage site?",
        "options": [],
        "correct": "heritage site",
        "explanation": "heritage site / historical site: di tích lịch sử."
      },
      {
        "id": "a9_c1_q19",
        "type": "short_answer",
        "text": "Write the noun form of the verb 'pollute':",
        "options": [],
        "correct": "pollution",
        "explanation": "pollute -> pollution (sự ô nhiễm)."
      },
      {
        "id": "a9_c1_q20",
        "type": "essay",
        "text": "Write 3-4 sentences in English introducing a famous landmark or specialty food of your hometown to a foreigner.",
        "options": [],
        "correct": "My hometown is Hanoi, which is famous for its delicious Pho and peaceful Hoan Kiem Lake. If you visit, you should walk around the Old Quarter to enjoy street food and buy unique souvenirs. People here are very friendly and welcoming to all guests.",
        "explanation": "Giới thiệu hấp dẫn về danh lam thắng cảnh, ẩm thực và sự hiếu khách."
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
      },
      {
        "id": "k9_c1_q11",
        "type": "mcq",
        "text": "Công thức tính động năng của một vật khối lượng m chuyển động với vận tốc v là:",
        "options": [
          "Wd = 1/2 * m * v^2",
          "Wd = m * v",
          "Wd = m * g * h",
          "Wd = 1/2 * m * v"
        ],
        "correct": "Wd = 1/2 * m * v^2",
        "explanation": "Công thức động năng tiêu chuẩn."
      },
      {
        "id": "k9_c1_q12",
        "type": "mcq",
        "text": "Một vật có khối lượng 2 kg đang ở độ cao 5 m so với mặt đất (lấy g = 10 m/s^2). Thế năng trọng trường của vật là:",
        "options": [
          "100 J",
          "50 J",
          "10 J",
          "200 J"
        ],
        "correct": "100 J",
        "explanation": "Wt = m * g * h = 2 * 10 * 5 = 100 J."
      },
      {
        "id": "k9_c1_q13",
        "type": "mcq",
        "text": "Khi một con lắc đơn dao động, tại vị trí cân bằng (vị trí thấp nhất) thì:",
        "options": [
          "Động năng cực đại, thế năng cực tiểu",
          "Thế năng cực đại, động năng bằng 0",
          "Cơ năng bằng 0",
          "Vận tốc bằng 0"
        ],
        "correct": "Động năng cực đại, thế năng cực tiểu",
        "explanation": "Tại điểm thấp nhất, vận tốc lớn nhất nên động năng cực đại."
      },
      {
        "id": "k9_c1_q14",
        "type": "true_false",
        "text": "Trong trường trọng lực, nếu bỏ qua mọi lực ma sát và lực cản của không khí thì cơ năng của vật được bảo toàn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định luật bảo toàn cơ năng."
      },
      {
        "id": "k9_c1_q15",
        "type": "true_false",
        "text": "Động năng là đại lượng luôn luôn mang giá trị âm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Vì m > 0 và v^2 >= 0 nên động năng Wd luôn lớn hơn hoặc bằng 0."
      },
      {
        "id": "k9_c1_q16",
        "type": "fill_blank",
        "text": "Tổng của động năng và thế năng của vật được gọi là ... năng.",
        "options": [],
        "correct": "cơ",
        "explanation": "Cơ năng: W = Wd + Wt."
      },
      {
        "id": "k9_c1_q17",
        "type": "fill_blank",
        "text": "Thế năng đàn hồi xuất hiện khi một chiếc lò xo bị kéo dãn hoặc bị ...",
        "options": [],
        "correct": "nén",
        "explanation": "Lò xo biến dạng nén hoặc dãn."
      },
      {
        "id": "k9_c1_q18",
        "type": "short_answer",
        "text": "Một xe ô tô tăng vận tốc từ 10 m/s lên 20 m/s thì động năng của nó tăng lên gấp mấy lần?",
        "options": [],
        "correct": "4",
        "explanation": "Vì v tăng gấp 2 lần nên v^2 tăng 2^2 = 4 lần."
      },
      {
        "id": "k9_c1_q19",
        "type": "short_answer",
        "text": "Đại lượng đo tốc độ sinh công của một cỗ máy được gọi là gì?",
        "options": [],
        "correct": "Công suất",
        "explanation": "Công suất P = A / t."
      },
      {
        "id": "k9_c1_q20",
        "type": "essay",
        "text": "Một hòn sỏi có khối lượng 0.2 kg được thả rơi tự do không vận tốc đầu từ độ cao 20 m so với mặt đất (lấy g = 10 m/s^2, bỏ qua lực cản). Tính vận tốc của hòn sỏi ngay trước khi chạm đất bằng định luật bảo toàn cơ năng.",
        "options": [],
        "correct": "Cơ năng tại vị trí ban đầu (chỉ có thế năng): W1 = m * g * h = 0.2 x 10 x 20 = 40 J. Cơ năng ngay trước khi chạm đất (chỉ có động năng): W2 = 1/2 * m * v^2. Theo định luật bảo toàn cơ năng: W2 = W1 => 1/2 x 0.2 x v^2 = 40 => 0.1 x v^2 = 40 => v^2 = 400 => v = 20 m/s. Vậy vận tốc khi chạm đất là 20 m/s.",
        "explanation": "Áp dụng định luật bảo toàn cơ năng W1 = W2 và giải tìm v."
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
      },
      {
        "id": "ls6_c1_q11",
        "type": "mcq",
        "text": "Nếu đi từ Xích đạo về phía cực Bắc thì độ dài của các đường vĩ tuyến sẽ:",
        "options": [
          "Ngắn dần",
          "Dài dần",
          "Không thay đổi",
          "Dài gấp đôi"
        ],
        "correct": "Ngắn dần",
        "explanation": "Đường vĩ tuyến thu hẹp dần và thu nhỏ thành một điểm tại Cực."
      },
      {
        "id": "ls6_c1_q12",
        "type": "mcq",
        "text": "Một khu vực có tọa độ 20°B và 105°Đ nằm ở bán cầu nào?",
        "options": [
          "Bán cầu Bắc và Bán cầu Đông",
          "Bán cầu Nam và Bán cầu Tây",
          "Bán cầu Bắc và Bán cầu Tây",
          "Bán cầu Nam và Bán cầu Đông"
        ],
        "correct": "Bán cầu Bắc và Bán cầu Đông",
        "explanation": "Vĩ độ Bắc và Kinh độ Đông."
      },
      {
        "id": "ls6_c1_q13",
        "type": "mcq",
        "text": "Kinh tuyến đối diện với kinh tuyến gốc 0 độ là kinh tuyến bao nhiêu độ?",
        "options": [
          "180 độ",
          "90 độ",
          "360 độ",
          "45 độ"
        ],
        "correct": "180 độ",
        "explanation": "Kinh tuyến 180 độ đối diện với kinh tuyến gốc tạo thành vòng tròn kinh tuyến."
      },
      {
        "id": "ls6_c1_q14",
        "type": "true_false",
        "text": "Các đường kinh tuyến là các đường nối liền hai cực Bắc và Nam trên quả Địa Cầu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định nghĩa đường kinh tuyến."
      },
      {
        "id": "ls6_c1_q15",
        "type": "true_false",
        "text": "Bản đồ có tỉ lệ 1 : 100.000 nghĩa là 1 cm trên bản đồ tương ứng với 100 km ngoài thực địa.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "1 cm tương ứng 100.000 cm = 1 km ngoài thực tế."
      },
      {
        "id": "ls6_c1_q16",
        "type": "fill_blank",
        "text": "Đường kinh tuyến 180 độ đi qua giữa Thái Bình Dương được chọn làm đường đổi ... quốc tế.",
        "options": [],
        "correct": "ngày",
        "explanation": "Đường đổi ngày quốc tế (International Date Line)."
      },
      {
        "id": "ls6_c1_q17",
        "type": "fill_blank",
        "text": "Vĩ tuyến 23°27'B được gọi là đường Chí tuyến ...",
        "options": [],
        "correct": "Bắc",
        "explanation": "Chí tuyến Bắc (Tropic of Cancer)."
      },
      {
        "id": "ls6_c1_q18",
        "type": "short_answer",
        "text": "Khoảng cách giữa hai vĩ tuyến cách nhau 1 độ trên Trái Đất xấp xỉ bằng bao nhiêu km (111 km hay 500 km)?",
        "options": [],
        "correct": "111 km",
        "explanation": "Xấp xỉ 111 km."
      },
      {
        "id": "ls6_c1_q19",
        "type": "short_answer",
        "text": "Mũi tên chỉ hướng trên bản đồ thông thường chỉ về hướng nào trong bốn hướng?",
        "options": [],
        "correct": "Bắc",
        "explanation": "Mũi tên định hướng luôn chỉ hướng Bắc."
      },
      {
        "id": "ls6_c1_q20",
        "type": "essay",
        "text": "Trình bày cách xác định phương hướng chính (Bắc, Nam, Đông, Tây) trên bản đồ khi không có la bàn hoặc mũi tên chỉ hướng.",
        "options": [],
        "correct": "Dựa vào hệ thống kinh tuyến và vĩ tuyến: 1) Đầu trên của đường kinh tuyến chỉ hướng Bắc, đầu dưới chỉ hướng Nam. 2) Đầu bên phải của đường vĩ tuyến chỉ hướng Đông, đầu bên trái chỉ hướng Tây. Nếu bản đồ không có lưới kinh vĩ tuyến thì dựa vào mũi tên chỉ hướng Bắc để suy ra các hướng còn lại.",
        "explanation": "Nêu quy tắc xác định 4 hướng cơ bản dựa vào lưới kinh vĩ tuyến."
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
      },
      {
        "id": "g6_c1_q11",
        "type": "mcq",
        "text": "Hành động nào sau đây thể hiện thái độ tự hào về truyền thống dòng họ?",
        "options": [
          "Chủ động tìm hiểu gia phả và cố gắng học giỏi để làm rạng danh gia đình",
          "Không muốn ai biết về nghề thủ công của gia đình",
          "Phung phí tiền bạc vào trò chơi điện tử",
          "Chê bai nguồn gốc quê quán"
        ],
        "correct": "Chủ động tìm hiểu gia phả và cố gắng học giỏi để làm rạng danh gia đình",
        "explanation": "Ý thức giữ gìn danh dự và truyền thống gia đình."
      },
      {
        "id": "g6_c1_q12",
        "type": "mcq",
        "text": "Truyền thống yêu nước chống giặc ngoại xâm của dân tộc ta thể hiện rõ nét nhất qua bài học nào?",
        "options": [
          "Đoàn kết toàn dân đánh giặc cứu nước",
          "Tranh giành quyền lực",
          "Phân biệt giàu nghèo",
          "Chỉ chăm lo tư lợi"
        ],
        "correct": "Đoàn kết toàn dân đánh giặc cứu nước",
        "explanation": "Đoàn kết là sức mạnh bảo vệ non sông."
      },
      {
        "id": "g6_c1_q13",
        "type": "mcq",
        "text": "Câu tục ngữ: 'Giấy rách phải giữ lấy lề' khuyên con người điều gì?",
        "options": [
          "Dù nghèo khó, hoạn nạn vẫn phải giữ gìn phẩm chất đạo đức trong sáng",
          "Phải mua giấy thật dày",
          "Không được xé vở",
          "Tiết kiệm tiền bạc"
        ],
        "correct": "Dù nghèo khó, hoạn nạn vẫn phải giữ gìn phẩm chất đạo đức trong sáng",
        "explanation": "Giữ gìn danh dự và gia phong nền nếp."
      },
      {
        "id": "g6_c1_q14",
        "type": "true_false",
        "text": "Mọi dòng họ ở Việt Nam dù lớn hay nhỏ đều có những nét đẹp truyền thống và công lao đáng quý.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Trân trọng giá trị lao động và cội nguồn của mọi gia đình."
      },
      {
        "id": "g6_c1_q15",
        "type": "true_false",
        "text": "Kế thừa truyền thống có nghĩa là giữ nguyên mọi hủ tục tập quán cũ mà không cần thay đổi.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Cần chọn lọc kế thừa nét đẹp, xóa bỏ hủ tục lạc hậu không còn phù hợp."
      },
      {
        "id": "g6_c1_q16",
        "type": "fill_blank",
        "text": "Truyền thống 'Uống nước nhớ ...' dạy con cháu đời sau phải luôn biết ơn công lao sinh thành của cha mẹ tổ tiên.",
        "options": [],
        "correct": "nguồn",
        "explanation": "Uống nước nhớ nguồn."
      },
      {
        "id": "g6_c1_q17",
        "type": "fill_blank",
        "text": "Nét đẹp truyền thống về tinh thần chịu thương chịu khó trong lao động sản xuất gọi là tính cần ...",
        "options": [],
        "correct": "cù",
        "explanation": "Cần cù lao động."
      },
      {
        "id": "g6_c1_q18",
        "type": "short_answer",
        "text": "Ngày Giỗ Tổ Hùng Vương được tổ chức tại tỉnh nào của nước ta?",
        "options": [],
        "correct": "Phú Thọ",
        "explanation": "Đền Hùng thuộc tỉnh Phú Thọ."
      },
      {
        "id": "g6_c1_q19",
        "type": "short_answer",
        "text": "Thái độ trân trọng và biết ơn công lao dưỡng dục của ông bà, cha mẹ được gọi là lòng gì?",
        "options": [],
        "correct": "Hiếu thảo",
        "explanation": "Lòng hiếu thảo."
      },
      {
        "id": "g6_c1_q20",
        "type": "essay",
        "text": "Viết một đoạn văn ngắn (khoảng 50 từ) bày tỏ lòng biết ơn của em đối với cha mẹ hoặc người thân đã nuôi dạy em khôn lớn.",
        "options": [],
        "correct": "Em vô cùng biết ơn cha mẹ vì đã sinh ra em, chăm sóc và hy sinh thầm lặng mỗi ngày để em được cắp sách đến trường trong no ấm. Em tự hứa sẽ luôn chăm ngoan, vâng lời và nỗ lực học tập thật giỏi để cha mẹ luôn tự hào và an lòng về em.",
        "explanation": "Bày tỏ cảm xúc chân thành, nêu hành động cụ thể để đền đáp công ơn."
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
      },
      {
        "id": "ls7_c1_q11",
        "type": "mcq",
        "text": "Đặc điểm cơ cấu dân số nổi bật nhất của châu Âu hiện nay là:",
        "options": [
          "Dân số già và tỉ lệ gia tăng tự nhiên rất thấp",
          "Dân số trẻ và bùng nổ dân số",
          "Dân số đông nhất thế giới",
          "Chủ yếu là trẻ em dưới 15 tuổi"
        ],
        "correct": "Dân số già và tỉ lệ gia tăng tự nhiên rất thấp",
        "explanation": "Châu Âu đối mặt với tình trạng già hóa dân số và thiếu hụt lao động trẻ."
      },
      {
        "id": "ls7_c1_q12",
        "type": "mcq",
        "text": "Đồng tiền chung được sử dụng rộng rãi trong Liên minh châu Âu (EU) có tên là gì?",
        "options": [
          "Euro",
          "Dollar",
          "Bảng Anh",
          "Yên"
        ],
        "correct": "Euro",
        "explanation": "Đồng tiền chung Euro (EUR)."
      },
      {
        "id": "ls7_c1_q13",
        "type": "mcq",
        "text": "Kiểu thảm thực vật đặc trưng của vùng ven bờ Địa Trung Hải ở Nam Âu là:",
        "options": [
          "Rừng và cây bụi lá cứng",
          "Rừng lá kim (Taiga)",
          "Rừng rậm nhiệt đới",
          "Đài nguyên băng giá"
        ],
        "correct": "Rừng và cây bụi lá cứng",
        "explanation": "Thích nghi với mùa hè khô nóng, mùa đông ấm mưa."
      },
      {
        "id": "ls7_c1_q14",
        "type": "true_false",
        "text": "Đồng bằng Đông Âu là đồng bằng có diện tích rộng lớn nhất châu Âu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Đồng bằng Đông Âu chiếm phần lớn diện tích phía đông châu lục."
      },
      {
        "id": "ls7_c1_q15",
        "type": "true_false",
        "text": "Sông Vonga là con sông dài nhất châu Âu đổ ra biển Ban-tích.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Sông Vonga dài nhất châu Âu nhưng đổ ra biển Ca-xpi (biển kín)."
      },
      {
        "id": "ls7_c1_q16",
        "type": "fill_blank",
        "text": "Dãy núi trẻ cao và đồ sộ nhất châu Âu có đỉnh Mông Băng quanh năm tuyết phủ là dãy ...",
        "options": [],
        "correct": "An-pơ",
        "explanation": "Dãy Alps (An-pơ)."
      },
      {
        "id": "ls7_c1_q17",
        "type": "fill_blank",
        "text": "Quá trình di cư từ châu Á và châu Phi vào châu Âu tạo ra nguồn lao động dồi dào nhưng cũng gây sức ép về vấn đề việc làm và an ninh xã ...",
        "options": [],
        "correct": "hội",
        "explanation": "An ninh xã hội và hòa nhập văn hóa."
      },
      {
        "id": "ls7_c1_q18",
        "type": "short_answer",
        "text": "Quốc gia nào ở châu Âu nổi tiếng với ngành sản xuất đồng hồ tinh xảo và hệ thống ngân hàng uy tín?",
        "options": [],
        "correct": "Thụy Sĩ",
        "explanation": "Thụy Sĩ (Switzerland)."
      },
      {
        "id": "ls7_c1_q19",
        "type": "short_answer",
        "text": "Thủ đô của nước Pháp - kinh đô ánh sáng và thời trang thế giới có tên là gì?",
        "options": [],
        "correct": "Paris",
        "explanation": "Thành phố Paris."
      },
      {
        "id": "ls7_c1_q20",
        "type": "essay",
        "text": "Nêu các biện pháp mà các quốc gia châu Âu đang triển khai để ứng phó với tình trạng già hóa dân số và bảo vệ môi trường không khí.",
        "options": [],
        "correct": "Ứng phó già hóa dân số: Kéo dài tuổi nghỉ hưu, có chính sách khuyến khích sinh con và thu hút lao động nhập cư có tay nghề cao. Bảo vệ môi trường: Chuyển dịch mạnh mẽ sang năng lượng tái tạo (điện gió, mặt trời), phát triển giao thông công cộng tàu điện, hạn chế xe chạy xăng dầu và đánh thuế carbon.",
        "explanation": "Nêu giải pháp xã hội về dân số và giải pháp công nghệ xanh về môi trường."
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
      },
      {
        "id": "g7_c1_q11",
        "type": "mcq",
        "text": "Di sản văn hóa nào sau đây của Việt Nam được UNESCO vinh danh là Di sản Văn hóa phi vật thể đại diện của nhân loại?",
        "options": [
          "Dân ca Quan họ Bắc Ninh",
          "Cột cờ Hà Nội",
          "Cầu Tràng Tiền",
          "Chợ Bến Thành"
        ],
        "correct": "Dân ca Quan họ Bắc Ninh",
        "explanation": "Quan họ Bắc Ninh được công nhận năm 2009."
      },
      {
        "id": "g7_c1_q12",
        "type": "mcq",
        "text": "Biểu hiện nào sau đây thể hiện thái độ tôn trọng sự đa dạng văn hóa giữa các dân tộc?",
        "options": [
          "Lắng nghe, tìm hiểu và tôn trọng trang phục, tiếng nói của các dân tộc anh em",
          "Chế giễu phong tục lạ",
          "Bắt người khác phải bỏ văn hóa của họ",
          "Kì thị ngôn ngữ thiểu số"
        ],
        "correct": "Lắng nghe, tìm hiểu và tôn trọng trang phục, tiếng nói của các dân tộc anh em",
        "explanation": "Thái độ bình đẳng, cởi mở và tôn trọng."
      },
      {
        "id": "g7_c1_q13",
        "type": "mcq",
        "text": "Hành vi nào sau đây vi phạm pháp luật về bảo vệ di sản văn hóa?",
        "options": [
          "Viết, vẽ bậy hoặc khắc tên lên bia đá chùa Hương",
          "Tham gia quét dọn đình làng",
          "Ủng hộ tiền tu sửa di tích",
          "Giới thiệu lịch sử cho du khách"
        ],
        "correct": "Viết, vẽ bậy hoặc khắc tên lên bia đá chùa Hương",
        "explanation": "Hành vi phá hoại di tích lịch sử."
      },
      {
        "id": "g7_c1_q14",
        "type": "true_false",
        "text": "Không gian văn hóa Cồng chiêng Tây Nguyên là di sản văn hóa phi vật thể quý báu của nước ta.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Được UNESCO công nhận là kiệt tác truyền khẩu và phi vật thể."
      },
      {
        "id": "g7_c1_q15",
        "type": "true_false",
        "text": "Chỉ người lớn và chính quyền mới có trách nhiệm giữ gìn di sản, học sinh không cần quan tâm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Bảo vệ di sản là nghĩa vụ và trách nhiệm của mọi công dân, bao gồm cả học sinh."
      },
      {
        "id": "g7_c1_q16",
        "type": "fill_blank",
        "text": "Di tích Cố đô Huế nằm tại tỉnh Thừa Thiên ... của nước ta.",
        "options": [],
        "correct": "Huế",
        "explanation": "Thừa Thiên Huế."
      },
      {
        "id": "g7_c1_q17",
        "type": "fill_blank",
        "text": "Việc tiếp thu các làn sóng văn hóa quốc tế cần tuân theo phương châm: Tiếp thu có chọn lọc và giữ gìn bản ... dân tộc.",
        "options": [],
        "correct": "sắc",
        "explanation": "Bản sắc văn hóa dân tộc."
      },
      {
        "id": "g7_c1_q18",
        "type": "short_answer",
        "text": "Trang phục truyền thống thướt tha tôn vinh vẻ đẹp của người phụ nữ Việt Nam được gọi là gì?",
        "options": [],
        "correct": "Áo dài",
        "explanation": "Áo dài truyền thống."
      },
      {
        "id": "g7_c1_q19",
        "type": "short_answer",
        "text": "Thể loại âm nhạc truyền thống Nam Bộ được biểu diễn bằng đờn kìm, đờn tranh gọi là Đờn ca tài ...?",
        "options": [],
        "correct": "tử",
        "explanation": "Đờn ca tài tử Nam Bộ."
      },
      {
        "id": "g7_c1_q20",
        "type": "essay",
        "text": "Nếu có một người bạn nước ngoài đến thăm quê hương em, em sẽ chọn giới thiệu nét đẹp văn hóa hoặc danh lam thắng cảnh nào? Hãy viết đoạn văn ngắn (3 - 5 câu) thuyết trình.",
        "options": [],
        "correct": "Em sẽ dẫn bạn đến thăm Văn Miếu - Quốc Tử Giám, trường đại học đầu tiên của Việt Nam. Nơi đây lưu giữ 82 bia tiến sĩ bằng đá cổ kính khắc tên các bậc hiền tài và thể hiện truyền thống hiếu học ngàn đời của dân tộc ta. Em sẽ giải thích cho bạn hiểu về tinh thần 'Tôn sư trọng đạo' rất đáng tự hào của người Việt.",
        "explanation": "Giới thiệu sinh động di tích lịch sử kèm ý nghĩa văn hóa hiếu học."
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
      },
      {
        "id": "ls8_c1_q11",
        "type": "mcq",
        "text": "Châu Á tiếp giáp với ba đại dương lớn nào?",
        "options": [
          "Bắc Băng Dương, Thái Bình Dương và Ấn Độ Dương",
          "Đại Tây Dương, Nam Đại Dương và Thái Bình Dương",
          "Ấn Độ Dương, Bắc Băng Dương và Địa Trung Hải",
          "Chỉ Thái Bình Dương"
        ],
        "correct": "Bắc Băng Dương, Thái Bình Dương và Ấn Độ Dương",
        "explanation": "Phía bắc giáp Bắc Băng Dương, phía đông giáp Thái Bình Dương, phía nam giáp Ấn Độ Dương."
      },
      {
        "id": "ls8_c1_q12",
        "type": "mcq",
        "text": "Hồ nước ngọt sâu nhất và có thể tích nước ngọt lớn nhất thế giới nằm ở châu Á là hồ nào?",
        "options": [
          "Hồ Baikal (Nga)",
          "Biển Hồ (Campuchia)",
          "Hồ Victoria",
          "Biển Chết"
        ],
        "correct": "Hồ Baikal (Nga)",
        "explanation": "Hồ Baikal sâu hơn 1600m."
      },
      {
        "id": "ls8_c1_q13",
        "type": "mcq",
        "text": "Khu vực Tây Á và Trung Á có khí hậu chủ yếu là:",
        "options": [
          "Khô hạn và bán khô hạn với cảnh quan hoang mạc, bán hoang mạc",
          "Rừng mưa nhiệt đới ẩm",
          "Lạnh giá quanh năm",
          "Ôn đới hải dương"
        ],
        "correct": "Khô hạn và bán khô hạn với cảnh quan hoang mạc, bán hoang mạc",
        "explanation": "Sâu trong nội địa và ít mưa."
      },
      {
        "id": "ls8_c1_q14",
        "type": "true_false",
        "text": "Dãy Himalaya là dãy núi cao nhất thế giới được hình thành do sự va chạm giữa mảng Ấn Độ và mảng Á - Âu.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Cơ chế kiến tạo mảng hình thành dãy Himalaya."
      },
      {
        "id": "ls8_c1_q15",
        "type": "true_false",
        "text": "Hai quốc gia có quy mô dân số trên 1 tỷ người ở châu Á là Trung Quốc và Ấn Độ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hai quốc gia đông dân nhất hành tinh."
      },
      {
        "id": "ls8_c1_q16",
        "type": "fill_blank",
        "text": "Khu vực Đông Nam Á là nơi bắt nguồn của cây lúa ... nuôi sống hàng trăm triệu người.",
        "options": [],
        "correct": "nước",
        "explanation": "Văn minh lúa nước Đông Nam Á."
      },
      {
        "id": "ls8_c1_q17",
        "type": "fill_blank",
        "text": "Dầu mỏ và khí đốt tự nhiên của châu Á tập trung với trữ lượng khổng lồ tại khu vực Vịnh Ba ... (Tây Á).",
        "options": [],
        "correct": "Tư",
        "explanation": "Vịnh Ba Tư (Persian Gulf)."
      },
      {
        "id": "ls8_c1_q18",
        "type": "short_answer",
        "text": "Quốc gia nào ở châu Á được mệnh danh là 'Đất nước mặt trời mọc'?",
        "options": [],
        "correct": "Nhật Bản",
        "explanation": "Nhật Bản (Nippon)."
      },
      {
        "id": "ls8_c1_q19",
        "type": "short_answer",
        "text": "Dòng sông nào chảy qua 6 quốc gia Đông Nam Á và đổ ra Biển Đông qua 9 cửa ở Việt Nam?",
        "options": [],
        "correct": "Sông Mê Công",
        "explanation": "Sông Mê Kông (sông Cửu Long)."
      },
      {
        "id": "ls8_c1_q20",
        "type": "essay",
        "text": "Giải thích tại sao châu Á lại có đầy đủ các đới và kiểu khí hậu từ cực Bắc đến Xích đạo.",
        "options": [],
        "correct": "Châu Á có đầy đủ các đới khí hậu là do: 1) Lãnh thổ châu Á trải dài trên nhiều vĩ độ, từ vùng cực Bắc xa xôi xuống tận phía nam Xích đạo. 2) Kích thước lãnh thổ vô cùng rộng lớn, các vùng nội địa nằm sâu cách biển hàng ngàn kilômét. 3) Địa hình núi non hiểm trở, cao đồ sộ bậc nhất thế giới tạo nên sự phân hóa khí hậu theo độ cao và chắn gió biển.",
        "explanation": "Nêu 3 nguyên nhân: trải dài nhiều vĩ độ, quy mô khổng lồ và địa hình núi cao."
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
      },
      {
        "id": "g8_c1_q11",
        "type": "mcq",
        "text": "Hành động nào sau đây thể hiện trách nhiệm của công dân trong việc bảo vệ môi trường sống?",
        "options": [
          "Phân loại rác thải tại nguồn và trồng thêm cây xanh",
          "Đổ dầu nhớt thải xuống cống thoát nước",
          "Sử dụng nhiều túi ni-lông một lần",
          "Bẻ cành hái hoa nơi công viên"
        ],
        "correct": "Phân loại rác thải tại nguồn và trồng thêm cây xanh",
        "explanation": "Hành động xanh vì môi trường."
      },
      {
        "id": "g8_c1_q12",
        "type": "mcq",
        "text": "Hiến pháp nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là văn bản pháp luật có giá trị pháp lý:",
        "options": [
          "Cao nhất trong hệ thống pháp luật Việt Nam",
          "Bằng các văn bản dưới luật",
          "Thấp hơn các thông tư",
          "Chỉ áp dụng cho công chức"
        ],
        "correct": "Cao nhất trong hệ thống pháp luật Việt Nam",
        "explanation": "Đạo luật cơ bản tối cao của quốc gia."
      },
      {
        "id": "g8_c1_q13",
        "type": "mcq",
        "text": "Lứa tuổi nào sau đây bắt đầu phải chịu trách nhiệm hình sự về tội phạm rất nghiêm trọng do cố ý hoặc đặc biệt nghiêm trọng?",
        "options": [
          "Từ đủ 14 tuổi trở lên",
          "Từ đủ 10 tuổi",
          "Từ đủ 18 tuổi",
          "Không giới hạn"
        ],
        "correct": "Từ đủ 14 tuổi trở lên",
        "explanation": "Điều 12 Bộ luật Hình sự Việt Nam."
      },
      {
        "id": "g8_c1_q14",
        "type": "true_false",
        "text": "Mọi công dân Việt Nam đều bình đẳng trước pháp luật, không phân biệt dân tộc, giới tính, tôn giáo.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Nguyên tắc bình đẳng trước pháp luật quy định trong Hiến pháp."
      },
      {
        "id": "g8_c1_q15",
        "type": "true_false",
        "text": "Học sinh THCS chưa đủ tuổi điều khiển xe mô tô hai bánh có dung tích xi lanh từ 50 cm3 trở lên tham gia giao thông.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Phải đủ 18 tuổi mới được cấp bằng lái A1 chạy xe trên 50cc."
      },
      {
        "id": "g8_c1_q16",
        "type": "fill_blank",
        "text": "Sống có đạo đức và tuân theo ... luật là điều kiện cần thiết để trở thành công dân có ích cho xã hội.",
        "options": [],
        "correct": "pháp",
        "explanation": "Đạo đức và pháp luật."
      },
      {
        "id": "g8_c1_q17",
        "type": "fill_blank",
        "text": "Khi tham gia giao thông bằng xe máy điện, học sinh bắt buộc phải đội mũ bảo ... và cài quai đúng cách.",
        "options": [],
        "correct": "hiểm",
        "explanation": "Mũ bảo hiểm an toàn."
      },
      {
        "id": "g8_c1_q18",
        "type": "short_answer",
        "text": "Cơ quan quyền lực nhà nước cao nhất của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là cơ quan nào?",
        "options": [],
        "correct": "Quốc hội",
        "explanation": "Quốc hội Việt Nam."
      },
      {
        "id": "g8_c1_q19",
        "type": "short_answer",
        "text": "Khẩu hiệu 'Sống, chiến đấu, lao động và học tập theo gương Bác Hồ vĩ ...' là phương châm rèn luyện của thanh thiếu niên?",
        "options": [],
        "correct": "đại",
        "explanation": "Bác Hồ vĩ đại."
      },
      {
        "id": "g8_c1_q20",
        "type": "essay",
        "text": "Em hãy nêu 3 việc làm cụ thể của bản thân để chấp hành tốt Luật Trật tự, an toàn giao thông đường bộ khi đi học hàng ngày.",
        "options": [],
        "correct": "1) Luôn đội mũ bảo hiểm đạt chuẩn và cài quai đúng quy cách khi ngồi trên xe máy, xe đạp điện. 2) Đi đúng phần đường làn đường quy định, không dàn hàng ba hàng bốn, không lạng lách đánh võng hay buông cả hai tay. 3) Nghiêm chỉnh chấp hành hiệu lệnh của đèn tín hiệu giao thông (dừng lại khi đèn đỏ, không vượt đèn vàng).",
        "explanation": "Nêu các hành vi tham gia giao thông chuẩn mực và an toàn."
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
      },
      {
        "id": "ls9_c1_q11",
        "type": "mcq",
        "text": "Chính sách kinh tế mới (NEP) được Lênin và Đảng Bôn-sê-vích đề xướng thực hiện ở nước Nga vào năm nào?",
        "options": [
          "Tháng 3/1921",
          "Năm 1917",
          "Năm 1930",
          "Năm 1945"
        ],
        "correct": "Tháng 3/1921",
        "explanation": "Chính sách NEP năm 1921 thay thế chính sách cộng sản thời chiến."
      },
      {
        "id": "ls9_c1_q12",
        "type": "mcq",
        "text": "Nội dung cơ bản và quan trọng nhất của Chính sách kinh tế mới (NEP) trong nông nghiệp là thay thế chế độ trưng thu lương thực thừa bằng:",
        "options": [
          "Thuế lương thực",
          "Tịch thu toàn bộ ruộng đất",
          "Hợp tác xã nông nghiệp",
          "Cấm bán thóc gạo"
        ],
        "correct": "Thuế lương thực",
        "explanation": "Nông dân nộp thuế lương thực và được tự do bán phần nông sản thừa."
      },
      {
        "id": "ls9_c1_q13",
        "type": "mcq",
        "text": "Thế chiến thứ hai kết thúc với sự thất bại hoàn toàn của phe phát xít gồm 3 nước chủ mưu nào?",
        "options": [
          "Đức, I-ta-li-a, Nhật Bản",
          "Anh, Pháp, Mỹ",
          "Nga, Trung Quốc, Triều Tiên",
          "Đức, Nga, Áo"
        ],
        "correct": "Đức, I-ta-li-a, Nhật Bản",
        "explanation": "Trục phát xít Berlin - Roma - Tokyo."
      },
      {
        "id": "ls9_c1_q14",
        "type": "true_false",
        "text": "Liên Xô là lực lượng đi đầu, giữ vai trò trụ cột quyết định nhất trong việc đánh bại chủ nghĩa phát xít trong Thế chiến 2.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Hồng quân Liên Xô cắm cờ chiến thắng lên nóc tòa nhà Quốc hội Đức năm 1945."
      },
      {
        "id": "ls9_c1_q15",
        "type": "true_false",
        "text": "Chính sách NEP đã làm cho nền kinh tế nước Nga Xô viết bị sụp đổ hoàn toàn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "NEP đã cứu nước Nga thoát khỏi khủng hoảng kinh tế trầm trọng và phục hồi sản xuất nhanh chóng."
      },
      {
        "id": "ls9_c1_q16",
        "type": "fill_blank",
        "text": "Ngày 9 tháng 5 hàng năm được nước Nga và thế giới tôn vinh là Ngày Chiến ... chống phát xít.",
        "options": [],
        "correct": "thắng",
        "explanation": "Ngày Chiến thắng (Victory Day - 9/5)."
      },
      {
        "id": "ls9_c1_q17",
        "type": "fill_blank",
        "text": "Trước khi thành lập Liên Xô năm 1922, nước Nga có tên là Cộng hòa Xã hội chủ nghĩa Xô viết Liên ...",
        "options": [],
        "correct": "bang",
        "explanation": "Cộng hòa Xã hội chủ nghĩa Xô viết Liên bang Nga (RSFSR)."
      },
      {
        "id": "ls9_c1_q18",
        "type": "short_answer",
        "text": "Tòa nhà Quốc hội Đức tại thành phố Berlin bị Hồng quân Liên Xô đánh chiếm vào tháng mấy năm 1945?",
        "options": [],
        "correct": "Tháng 5",
        "explanation": "Ngày 30/4 - 2/5/1945 cắm cờ chiến thắng."
      },
      {
        "id": "ls9_c1_q19",
        "type": "short_answer",
        "text": "Tổ chức quốc tế lớn nhất hành tinh được thành lập năm 1945 sau Thế chiến thứ hai nhằm duy trì hòa bình thế giới là tổ chức nào?",
        "options": [],
        "correct": "Liên Hợp Quốc",
        "explanation": "Liên Hợp Quốc (UN)."
      },
      {
        "id": "ls9_c1_q20",
        "type": "essay",
        "text": "Phân tích bài học kinh nghiệm từ Chính sách kinh tế mới (NEP) của Lênin đối với công cuộc đổi mới và phát triển kinh tế thị trường định hướng XHCN ở Việt Nam hiện nay.",
        "options": [],
        "correct": "Bài học rút ra: 1) Tôn trọng các quy luật kinh tế khách quan, chấp nhận nền kinh tế nhiều thành phần cùng cạnh tranh bình đẳng. 2) Biết sử dụng quan hệ hàng hóa - tiền tệ, thị trường để kích thích người lao động hăng say sản xuất. 3) Nhà nước giữ vai trò định hướng điều tiết các ngành kinh tế then chốt vì mục tiêu dân giàu, nước mạnh, công bằng xã hội.",
        "explanation": "Rút ra bài học về kinh tế nhiều thành phần, đòn bẩy lợi ích và vai trò quản lý của Nhà nước."
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
      },
      {
        "id": "g9_c1_q11",
        "type": "mcq",
        "text": "Hành động nào sau đây là biểu hiện của người có đức tính tự chủ?",
        "options": [
          "Bình tĩnh, kiểm soát cảm xúc và làm chủ hành vi của bản thân trước khó khăn",
          "Nổi nóng đánh bạn khi bị góp ý",
          "Bị bạn bè lôi kéo vào quán nét bỏ học",
          "Hùa theo đám đông kích động"
        ],
        "correct": "Bình tĩnh, kiểm soát cảm xúc và làm chủ hành vi của bản thân trước khó khăn",
        "explanation": "Đức tính tự chủ làm chủ bản thân."
      },
      {
        "id": "g9_c1_q12",
        "type": "mcq",
        "text": "Tình hữu nghị giữa các dân tộc trên thế giới tạo điều kiện để các nước:",
        "options": [
          "Cùng hợp tác phát triển kinh tế, văn hóa, khoa học và giữ gìn hòa bình",
          "Tranh giành thuộc địa",
          "Áp đặt văn hóa lên nhau",
          "Can thiệp vào nội bộ nước khác"
        ],
        "correct": "Cùng hợp tác phát triển kinh tế, văn hóa, khoa học và giữ gìn hòa bình",
        "explanation": "Ý nghĩa của tình hữu nghị và hợp tác quốc tế."
      },
      {
        "id": "g9_c1_q13",
        "type": "mcq",
        "text": "Chủ trương đối ngoại của Đảng và Nhà nước Việt Nam hiện nay là:",
        "options": [
          "Việt Nam là bạn, là đối tác tin cậy và là thành viên có trách nhiệm trong cộng đồng quốc tế",
          "Đóng cửa khép kín",
          "Chỉ quan hệ với các nước láng giềng",
          "Liên minh quân sự chống nước khác"
        ],
        "correct": "Việt Nam là bạn, là đối tác tin cậy và là thành viên có trách nhiệm trong cộng đồng quốc tế",
        "explanation": "Đường lối đối ngoại độc lập tự chủ rộng mở."
      },
      {
        "id": "g9_c1_q14",
        "type": "true_false",
        "text": "Bảo vệ hòa bình, ngăn chặn chiến tranh hủy diệt là trách nhiệm thiêng liêng của toàn nhân loại tiến bộ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Trách nhiệm gìn giữ hòa bình thế giới."
      },
      {
        "id": "g9_c1_q15",
        "type": "true_false",
        "text": "Người chí công vô tư luôn biết đặt lợi ích của cá nhân mình lên trên lợi ích của tập thể và đất nước.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Chí công vô tư phải đặt lợi ích tập thể, đất nước lên trên hết."
      },
      {
        "id": "g9_c1_q16",
        "type": "fill_blank",
        "text": "Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm 20...",
        "options": [],
        "correct": "07",
        "explanation": "Gia nhập năm 2007."
      },
      {
        "id": "g9_c1_q17",
        "type": "fill_blank",
        "text": "Thành phố Hà Nội được tổ chức UNESCO vinh danh trao tặng danh hiệu 'Thành phố vì hòa ...'",
        "options": [],
        "correct": "bình",
        "explanation": "Thành phố vì hòa bình (năm 1999)."
      },
      {
        "id": "g9_c1_q18",
        "type": "short_answer",
        "text": "Biểu tượng con vật nào thường đại diện cho ước vọng hòa bình trên thế giới?",
        "options": [],
        "correct": "Chim bồ câu",
        "explanation": "Chim bồ câu trắng ngậm cành ô-liu."
      },
      {
        "id": "g9_c1_q19",
        "type": "short_answer",
        "text": "Hiệp hội các quốc gia Đông Nam Á viết tắt bằng tiếng Anh là gì?",
        "options": [],
        "correct": "ASEAN",
        "explanation": "ASEAN."
      },
      {
        "id": "g9_c1_q20",
        "type": "essay",
        "text": "Là một học sinh lớp 9 chuẩn bị bước vào ngưỡng cửa THPT, em cần làm gì để rèn luyện đức tính tự chủ và tinh thần hợp tác quốc tế?",
        "options": [],
        "correct": "Em cần: 1) Rèn luyện tính tự chủ: biết tự giác học tập, quản lý cảm xúc, không a dua theo thói hư tật xấu trên mạng xã hội. 2) Nỗ lực trau dồi vốn Ngoại ngữ (đặc biệt là Tiếng Anh) và kiến thức Tin học để trở thành công dân toàn cầu. 3) Luôn tôn trọng văn hóa các dân tộc và tích cực tham gia các hoạt động giao lưu, bảo vệ môi trường và hòa bình.",
        "explanation": "Nêu các hành động rèn luyện tự chủ nội tâm, nâng cao ngoại ngữ và hội nhập văn minh."
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
      },
      {
        "id": "tin6_c1_q11",
        "type": "mcq",
        "text": "Thiết bị nào sau đây là thiết bị lưu trữ dữ liệu ngoài của máy tính?",
        "options": [
          "Ổ đĩa flash USB",
          "Bàn phím",
          "Màn hình",
          "Chuột máy tính"
        ],
        "correct": "Ổ đĩa flash USB",
        "explanation": "USB, thẻ nhớ, ổ cứng ngoài là thiết bị lưu trữ."
      },
      {
        "id": "tin6_c1_q12",
        "type": "mcq",
        "text": "1 Byte (B) bằng bao nhiêu bit?",
        "options": [
          "8 bit",
          "2 bit",
          "10 bit",
          "1024 bit"
        ],
        "correct": "8 bit",
        "explanation": "1 Byte = 8 bit nhị phân."
      },
      {
        "id": "tin6_c1_q13",
        "type": "mcq",
        "text": "Thao tác sao chép văn bản trong máy tính có phím tắt là:",
        "options": [
          "Ctrl + C",
          "Ctrl + V",
          "Ctrl + X",
          "Ctrl + Z"
        ],
        "correct": "Ctrl + C",
        "explanation": "Ctrl + C là Copy (sao chép)."
      },
      {
        "id": "tin6_c1_q14",
        "type": "true_false",
        "text": "Thư mục có thể chứa các tệp và các thư mục con khác.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Cấu trúc cây thư mục trong hệ điều hành."
      },
      {
        "id": "tin6_c1_q15",
        "type": "true_false",
        "text": "Một tệp hình ảnh thường có phần mở rộng đuôi là .mp3.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": ".mp3 là tệp âm thanh, hình ảnh là .jpg, .png."
      },
      {
        "id": "tin6_c1_q16",
        "type": "fill_blank",
        "text": "Phím tắt dùng để dán (paste) dữ liệu vừa sao chép trong máy tính là Ctrl + ...",
        "options": [],
        "correct": "V",
        "explanation": "Ctrl + V là dán."
      },
      {
        "id": "tin6_c1_q17",
        "type": "fill_blank",
        "text": "Đơn vị đo dung lượng thông tin lớn hơn Kilobyte (KB) là ... (MB).",
        "options": [],
        "correct": "Megabyte",
        "explanation": "Megabyte (MB) = 1024 KB."
      },
      {
        "id": "tin6_c1_q18",
        "type": "short_answer",
        "text": "Thiết bị nào dùng để điều khiển con trỏ trên màn hình máy tính: Chuột hay Loa?",
        "options": [],
        "correct": "Chuột",
        "explanation": "Chuột máy tính (Mouse)."
      },
      {
        "id": "tin6_c1_q19",
        "type": "short_answer",
        "text": "Tên miền của các trang web giáo dục tại Việt Nam thường có đuôi là gì: .edu.vn hay .com?",
        "options": [],
        "correct": ".edu.vn",
        "explanation": ".edu.vn dành cho cơ sở giáo dục đào tạo."
      },
      {
        "id": "tin6_c1_q20",
        "type": "essay",
        "text": "Trình bày cách đặt tên thư mục và tệp tin trong máy tính sao cho khoa học, dễ tìm kiếm và quản lý bài học.",
        "options": [],
        "correct": "Cách đặt tên khoa học: 1) Đặt tên ngắn gọn, rõ nghĩa phản ánh đúng nội dung (ví dụ: BaiTap_Toan6_Chuong1.docx). 2) Nên viết không dấu hoặc dùng dấu gạch dưới (_) thay cho khoảng trắng để tránh lỗi phần mềm. 3) Phân chia cây thư mục theo từng năm học, học kì và môn học riêng biệt để tránh lưu trữ lộn xộn.",
        "explanation": "Nêu quy tắc đặt tên rõ ràng, tránh kí tự đặc biệt và phân cấp thư mục hợp lý."
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
      },
      {
        "id": "cn6_c1_q11",
        "type": "mcq",
        "text": "Khu vực nào trong nhà ở dùng để nấu nướng và chuẩn bị bữa ăn gia đình?",
        "options": [
          "Khu vực bếp",
          "Phòng khách",
          "Phòng ngủ",
          "Khu vệ sinh"
        ],
        "correct": "Khu vực bếp",
        "explanation": "Bếp là nơi chế biến thức ăn."
      },
      {
        "id": "cn6_c1_q12",
        "type": "mcq",
        "text": "Biện pháp nào sau đây giúp giữ gìn nhà ở luôn sạch sẽ, ngăn nắp?",
        "options": [
          "Lau dọn nhà cửa thường xuyên, đồ đạc để đúng nơi quy định",
          "Vứt rác bừa bãi ra sàn",
          "Để bát đĩa bẩn qua đêm",
          "Chất đống quần áo bẩn ở góc phòng"
        ],
        "correct": "Lau dọn nhà cửa thường xuyên, đồ đạc để đúng nơi quy định",
        "explanation": "Thói quen vệ sinh và sắp xếp ngăn nắp."
      },
      {
        "id": "cn6_c1_q13",
        "type": "mcq",
        "text": "Kiểu nhà nổi trên mặt nước (bè, xuồng) thường xuất hiện phổ biến ở vùng nào của nước ta?",
        "options": [
          "Vùng đồng bằng sông Cửu Long",
          "Vùng núi cao Tây Bắc",
          "Vùng trung du Bắc Bộ",
          "Khu vực Tây Nguyên"
        ],
        "correct": "Vùng đồng bằng sông Cửu Long",
        "explanation": "Đặc trưng vùng sông nước miền Tây."
      },
      {
        "id": "cn6_c1_q14",
        "type": "true_false",
        "text": "Việc trồng thêm cây xanh quanh nhà giúp thanh lọc không khí, giảm tiếng ồn và tạo bóng mát.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Lợi ích sinh thái của cây xanh quanh nhà ở."
      },
      {
        "id": "cn6_c1_q15",
        "type": "true_false",
        "text": "Nhà ở chỉ cần xây dựng kiên cố mà không cần có hệ thống thông gió hay ánh sáng tự nhiên.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Nhà ở bắt buộc phải thông thoáng và đủ ánh sáng để bảo đảm sức khỏe."
      },
      {
        "id": "cn6_c1_q16",
        "type": "fill_blank",
        "text": "Chất liệu truyền thống làm mái nhà tranh ở vùng nông thôn xưa là rơm rạ hoặc lá ...",
        "options": [],
        "correct": "cọ",
        "explanation": "Lá cọ, lá dừa hoặc rơm rạ."
      },
      {
        "id": "cn6_c1_q17",
        "type": "fill_blank",
        "text": "Hệ thống nhà thông minh kết nối các thiết bị điện trong nhà thông qua mạng không dây ...",
        "options": [],
        "correct": "Wifi",
        "explanation": "Mạng Wifi / Internet vạn vật (IoT)."
      },
      {
        "id": "cn6_c1_q18",
        "type": "short_answer",
        "text": "Để đảm bảo an toàn phòng cháy chữa cháy trong gia đình, bình gas bếp cần được khóa van khi nào?",
        "options": [],
        "correct": "Khi nấu xong",
        "explanation": "Khóa van ngay sau khi đun nấu xong."
      },
      {
        "id": "cn6_c1_q19",
        "type": "short_answer",
        "text": "Thiết bị báo cháy tự động phát ra tiếng kêu khi phát hiện có khói hay có nước?",
        "options": [],
        "correct": "Có khói",
        "explanation": "Cảm biến khói và nhiệt độ cao."
      },
      {
        "id": "cn6_c1_q20",
        "type": "essay",
        "text": "Nêu các đặc điểm cơ bản của một ngôi nhà thông minh (Smart Home) và lợi ích mà nó đem lại cho cuộc sống con người.",
        "options": [],
        "correct": "Đặc điểm: Các thiết bị điện (đèn chiếu sáng, điều hòa, rèm cửa, bình nóng lạnh, camera an ninh) được kết nối mạng và có thể điều khiển từ xa qua điện thoại hoặc giọng nói; tự động bật/tắt theo thói quen của gia chủ. Lợi ích: Mang lại sự tiện nghi tối đa, đảm bảo an ninh an toàn và tiết kiệm điện năng cho gia đình.",
        "explanation": "Nêu tính tự động hóa, điều khiển từ xa và lợi ích tiện nghi, tiết kiệm, an toàn."
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
      },
      {
        "id": "tin7_c1_q11",
        "type": "mcq",
        "text": "Để tính giá trị trung bình cộng của các ô trong Excel, ta dùng hàm:",
        "options": [
          "AVERAGE",
          "SUM",
          "MAX",
          "MIN"
        ],
        "correct": "AVERAGE",
        "explanation": "Hàm AVERAGE tính trung bình cộng."
      },
      {
        "id": "tin7_c1_q12",
        "type": "mcq",
        "text": "Hàm nào dùng để tìm giá trị lớn nhất trong một dải ô?",
        "options": [
          "MAX",
          "MIN",
          "COUNT",
          "IF"
        ],
        "correct": "MAX",
        "explanation": "Hàm MAX tìm giá trị lớn nhất."
      },
      {
        "id": "tin7_c1_q13",
        "type": "mcq",
        "text": "Dải ô A1:A5 trong bảng tính gồm có bao nhiêu ô tính?",
        "options": [
          "5 ô",
          "4 ô",
          "1 ô",
          "6 ô"
        ],
        "correct": "5 ô",
        "explanation": "Gồm A1, A2, A3, A4, A5 (5 ô)."
      },
      {
        "id": "tin7_c1_q14",
        "type": "true_false",
        "text": "Dữ liệu dạng số trong ô tính theo mặc định sẽ được căn thẳng lề bên phải.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quy ước mặc định: số căn phải, chữ căn trái."
      },
      {
        "id": "tin7_c1_q15",
        "type": "true_false",
        "text": "Phần mềm bảng tính chỉ có thể tính toán số liệu mà không thể vẽ được biểu đồ hình cột hay hình tròn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Bảng tính vẽ biểu đồ rất mạnh mẽ và đa dạng."
      },
      {
        "id": "tin7_c1_q16",
        "type": "fill_blank",
        "text": "Hàm tìm giá trị nhỏ nhất trong phần mềm bảng tính có tên là ...",
        "options": [],
        "correct": "MIN",
        "explanation": "Hàm MIN."
      },
      {
        "id": "tin7_c1_q17",
        "type": "fill_blank",
        "text": "Để sao chép công thức sang các ô liền kề, ta nhấp giữ chuột và kéo nút điền ở góc dưới bên ... của ô tính.",
        "options": [],
        "correct": "phải",
        "explanation": "Nút điền Fill Handle ở góc dưới bên phải ô tính."
      },
      {
        "id": "tin7_c1_q18",
        "type": "short_answer",
        "text": "Nếu tại ô A1 nhập số 10, ô B1 nhập số 20, tại ô C1 nhập công thức =A1+B1 thì kết quả hiển thị tại C1 là:",
        "options": [],
        "correct": "30",
        "explanation": "10 + 20 = 30."
      },
      {
        "id": "tin7_c1_q19",
        "type": "short_answer",
        "text": "Tên cột trong bảng tính Excel được đặt theo chữ cái (A, B, C...) hay con số (1, 2, 3...)?",
        "options": [],
        "correct": "Chữ cái",
        "explanation": "Cột là chữ cái, hàng là số."
      },
      {
        "id": "tin7_c1_q20",
        "type": "essay",
        "text": "Trình bày các bước tạo biểu đồ hình cột từ bảng điểm tổng kết học kì của lớp bằng phần mềm Excel.",
        "options": [],
        "correct": "Các bước: 1) Dùng chuột chọn (bôi đen) vùng dữ liệu cần vẽ biểu đồ bao gồm cả tiêu đề cột và hàng. 2) Vào dải lệnh Insert (Chèn), tìm nhóm Charts (Biểu đồ). 3) Nhấp chọn dạng biểu đồ Column (Hình cột) phù hợp. 4) Chỉnh sửa tiêu đề biểu đồ (Chart Title) và định dạng màu sắc cho trực quan.",
        "explanation": "Nêu đủ các bước: chọn dữ liệu, chọn Insert > Chart và định dạng biểu đồ."
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
      },
      {
        "id": "cn7_c1_q11",
        "type": "mcq",
        "text": "Quy trình trồng trọt cơ bản gồm các bước theo thứ tự nào sau đây?",
        "options": [
          "Làm đất -> Gieo trồng -> Chăm sóc -> Thu hoạch",
          "Gieo trồng -> Làm đất -> Thu hoạch -> Chăm sóc",
          "Thu hoạch -> Làm đất -> Chăm sóc -> Gieo trồng",
          "Làm đất -> Thu hoạch -> Gieo trồng -> Chăm sóc"
        ],
        "correct": "Làm đất -> Gieo trồng -> Chăm sóc -> Thu hoạch",
        "explanation": "Thứ tự quy trình canh tác nông nghiệp chuẩn."
      },
      {
        "id": "cn7_c1_q12",
        "type": "mcq",
        "text": "Phân bón hữu cơ bao gồm các loại phân nào?",
        "options": [
          "Phân chuồng, phân xanh, phân ủ hoai mục",
          "Phân đạm Urê",
          "Phân lân hóa học",
          "Phân kali tổng hợp"
        ],
        "correct": "Phân chuồng, phân xanh, phân ủ hoai mục",
        "explanation": "Nguồn gốc từ xác động thực vật ủ hoai."
      },
      {
        "id": "cn7_c1_q13",
        "type": "mcq",
        "text": "Phương pháp nhân giống vô tính nào cắt một đoạn cành bánh tẻ cắm vào đất ẩm để tạo cây con?",
        "options": [
          "Giâm cành",
          "Chiết cành",
          "Ghép mắt",
          "Gieo hạt"
        ],
        "correct": "Giâm cành",
        "explanation": "Phương pháp giâm cành."
      },
      {
        "id": "cn7_c1_q14",
        "type": "true_false",
        "text": "Biện pháp phòng trừ sâu bệnh sinh học (dùng thiên địch như bọ rùa ăn rệp) an toàn cho sức khỏe và môi trường hơn thuốc trừ sâu hóa học.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Ưu thế của biện pháp sinh học."
      },
      {
        "id": "cn7_c1_q15",
        "type": "true_false",
        "text": "Nên thu hoạch nông sản vào lúc trời mưa to ngập úng để nông sản được rửa sạch.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Mưa to sẽ làm nông sản bị dập nát, thối rữa và khó bảo quản."
      },
      {
        "id": "cn7_c1_q16",
        "type": "fill_blank",
        "text": "Phương pháp trồng cây trong dung dịch dinh dưỡng không dùng đất gọi là phương pháp thủy ...",
        "options": [],
        "correct": "canh",
        "explanation": "Trồng rau thủy canh công nghệ cao."
      },
      {
        "id": "cn7_c1_q17",
        "type": "fill_blank",
        "text": "Thời vụ gieo trồng chính ở miền Bắc gồm vụ xuân, vụ hè thu và vụ ...",
        "options": [],
        "correct": "đông",
        "explanation": "Vụ đông miền Bắc."
      },
      {
        "id": "cn7_c1_q18",
        "type": "short_answer",
        "text": "Loại thiên địch nào thường bắt sâu ăn lá bảo vệ mùa màng: Bọ xít hay Bọ rùa?",
        "options": [],
        "correct": "Bọ rùa",
        "explanation": "Bọ rùa là loài thiên địch có ích."
      },
      {
        "id": "cn7_c1_q19",
        "type": "short_answer",
        "text": "Thu hoạch lúa chín bằng máy gặt đập liên hợp giúp tiết kiệm công lao động của ai?",
        "options": [],
        "correct": "Nông dân",
        "explanation": "Giúp giải phóng sức lao động của người nông dân."
      },
      {
        "id": "cn7_c1_q20",
        "type": "essay",
        "text": "Trình bày cách ủ phân hữu cơ vi sinh từ rác thải nhà bếp (vỏ rau củ, bã trà) để bón cho vườn rau sạch tại nhà.",
        "options": [],
        "correct": "Cách thực hiện: 1) Thu gom rác hữu cơ (vỏ rau, vỏ hoa quả, bã cà phê), cắt nhỏ để nhanh phân hủy. 2) Cho vào thùng ủ có đục lỗ thoát khí, rải xen kẽ một lớp đất mỏng và men vi sinh Trichoderma. 3) Giữ độ ẩm vừa phải và đảo đều sau mỗi tuần; sau 3-4 tuần khi phân chuyển sang màu nâu sẫm, tơi xốp và không có mùi hôi là có thể đem bón cho cây.",
        "explanation": "Nêu quy trình thu gom, ủ men vi sinh và kiểm tra chất lượng phân hoai mục."
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
      },
      {
        "id": "tin8_c1_q11",
        "type": "mcq",
        "text": "Thế hệ máy tính thứ tư (từ những năm 1970 đến nay) sử dụng linh kiện điện tử nào?",
        "options": [
          "Vi mạch tích hợp quy mô rất lớn (VLSI / Vi xử lý)",
          "Bóng đèn chân không",
          "Băng từ cổ",
          "Bánh răng cơ học"
        ],
        "correct": "Vi mạch tích hợp quy mô rất lớn (VLSI / Vi xử lý)",
        "explanation": "Công nghệ chip vi xử lý (Microprocessor)."
      },
      {
        "id": "tin8_c1_q12",
        "type": "mcq",
        "text": "Nhà bác học nào được coi là 'cha đẻ' của ngành khoa học máy tính với mô hình máy tính ý niệm?",
        "options": [
          "Alan Turing",
          "Bill Gates",
          "Steve Jobs",
          "Mark Zuckerberg"
        ],
        "correct": "Alan Turing",
        "explanation": "Mô hình máy Turing của Alan Turing."
      },
      {
        "id": "tin8_c1_q13",
        "type": "mcq",
        "text": "Hệ điều hành mã nguồn mở phổ biến trên toàn cầu dành cho máy chủ và lập trình viên là:",
        "options": [
          "Linux",
          "Windows 95",
          "MS-DOS",
          "macOS"
        ],
        "correct": "Linux",
        "explanation": "Hệ điều hành Linux mã nguồn mở."
      },
      {
        "id": "tin8_c1_q14",
        "type": "true_false",
        "text": "Chiếc máy tính điện tử đầu tiên ENIAC nặng gần 30 tấn và chiếm diện tích bằng cả một căn phòng lớn.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Kích thước khổng lồ của máy tính thế hệ thứ nhất."
      },
      {
        "id": "tin8_c1_q15",
        "type": "true_false",
        "text": "Định luật Moore dự đoán rằng số lượng bóng bán dẫn trên một vi mạch sẽ tăng gấp đôi xấp xỉ sau mỗi 2 năm.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Định luật nổi tiếng của Gordon Moore."
      },
      {
        "id": "tin8_c1_q16",
        "type": "fill_blank",
        "text": "Trang web đầu tiên trên thế giới chạy trên hệ thống mạng toàn cầu WWW do Tim Berners-Lee sáng tạo viết tắt là World Wide ...",
        "options": [],
        "correct": "Web",
        "explanation": "World Wide Web (WWW)."
      },
      {
        "id": "tin8_c1_q17",
        "type": "fill_blank",
        "text": "Người đồng sáng lập tập đoàn phần mềm Microsoft cùng với Paul Allen là tỷ phú Bill ...",
        "options": [],
        "correct": "Gates",
        "explanation": "Bill Gates."
      },
      {
        "id": "tin8_c1_q18",
        "type": "short_answer",
        "text": "Thiết bị điện thoại thông minh iPhone đầu tiên ra đời vào năm nào (2007 hay 1995)?",
        "options": [],
        "correct": "2007",
        "explanation": "Steve Jobs ra mắt năm 2007."
      },
      {
        "id": "tin8_c1_q19",
        "type": "short_answer",
        "text": "Công nghệ điện toán đám mây cho phép người dùng lưu trữ dữ liệu trên máy tính cá nhân hay trên máy chủ Internet?",
        "options": [],
        "correct": "Trên máy chủ Internet",
        "explanation": "Lưu trữ và xử lý trực tuyến qua Internet."
      },
      {
        "id": "tin8_c1_q20",
        "type": "essay",
        "text": "Tóm tắt xu hướng phát triển chính của máy tính từ khi ra đời cho đến nay về kích thước, tốc độ và tính năng.",
        "options": [],
        "correct": "Xu hướng phát triển: 1) Kích thước: Từ những cỗ máy khổng lồ nặng hàng chục tấn thu nhỏ thành máy tính để bàn, laptop và thiết bị cầm tay siêu mỏng nhẹ. 2) Tốc độ và dung lượng: Tốc độ xử lý tăng hàng triệu lần (từ vài ngàn phép tính/giây lên hàng tỷ phép tính/giây), dung lượng lưu trữ tăng từ vài Kilobyte lên Terabyte. 3) Tính năng: Từ máy tính thuần số học trở thành thiết bị đa phương tiện thông minh tích hợp AI kết nối vạn vật.",
        "explanation": "Trình bày đủ 3 khía cạnh: kích thước thu nhỏ, tốc độ tăng vọt và tính năng thông minh đa nhiệm."
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
      },
      {
        "id": "cn8_c1_q11",
        "type": "mcq",
        "text": "Nét liền đậm trong bản vẽ kĩ thuật dùng để vẽ đường nào?",
        "options": [
          "Đường bao thấy, cạnh thấy",
          "Đường bao khuất, cạnh khuất",
          "Đường gióng kích thước",
          "Đường trục đối xứng"
        ],
        "correct": "Đường bao thấy, cạnh thấy",
        "explanation": "Quy ước tiêu chuẩn nét vẽ TCVN."
      },
      {
        "id": "cn8_c1_q12",
        "type": "mcq",
        "text": "Đường bao khuất và cạnh khuất của vật thể được biểu diễn bằng loại nét nào?",
        "options": [
          "Nét đứt mảnh",
          "Nét liền đậm",
          "Nét lượn sóng",
          "Nét chấm gạch mảnh"
        ],
        "correct": "Nét đứt mảnh",
        "explanation": "Nét đứt mảnh (dashed line) biểu diễn phần khuất."
      },
      {
        "id": "cn8_c1_q13",
        "type": "mcq",
        "text": "Bản vẽ chi tiết bao gồm các nội dung chính nào?",
        "options": [
          "Hình biểu diễn, kích thước, yêu cầu kĩ thuật và khung tên",
          "Chỉ có hình vẽ và màu sắc",
          "Chỉ có giá tiền sản phẩm",
          "Chỉ có tên người vẽ"
        ],
        "correct": "Hình biểu diễn, kích thước, yêu cầu kĩ thuật và khung tên",
        "explanation": "Bốn nội dung bắt buộc của bản vẽ chi tiết."
      },
      {
        "id": "cn8_c1_q14",
        "type": "true_false",
        "text": "Khung tên của bản vẽ kĩ thuật luôn được đặt ở góc dưới bên phải của bản vẽ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Tiêu chuẩn vị trí khung tên theo TCVN."
      },
      {
        "id": "cn8_c1_q15",
        "type": "true_false",
        "text": "Bản vẽ lắp dùng để lắp ráp các chi tiết thành một cụm máy hoặc sản phẩm hoàn chỉnh.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Công dụng của bản vẽ lắp ráp."
      },
      {
        "id": "cn8_c1_q16",
        "type": "fill_blank",
        "text": "Hình chiếu cạnh có hướng chiếu nhìn từ phía ... sang phía phải của vật thể.",
        "options": [],
        "correct": "trái",
        "explanation": "Chiếu từ trái sang phải."
      },
      {
        "id": "cn8_c1_q17",
        "type": "fill_blank",
        "text": "Tỉ lệ 1 : 2 trên bản vẽ là tỉ lệ thu ... so với vật thật.",
        "options": [],
        "correct": "nhỏ",
        "explanation": "Tỉ lệ thu nhỏ 1 nửa."
      },
      {
        "id": "cn8_c1_q18",
        "type": "short_answer",
        "text": "Đơn vị đo độ dài danh nghĩa trên bản vẽ cơ khí mặc định là milimét (mm) hay centimét (cm)?",
        "options": [],
        "correct": "milimét",
        "explanation": "Mặc định milimét (mm) không cần ghi đơn vị."
      },
      {
        "id": "cn8_c1_q19",
        "type": "short_answer",
        "text": "Nét gạch dài - chấm - mảnh dùng để vẽ đường nào: Đường tâm trục đối xứng hay Cạnh thấy?",
        "options": [],
        "correct": "Đường tâm trục đối xứng",
        "explanation": "Vẽ đường trục đối xứng và đường tâm tròn."
      },
      {
        "id": "cn8_c1_q20",
        "type": "essay",
        "text": "Nêu trình tự các bước đọc một bản vẽ chi tiết cơ khí chuẩn xác theo quy định.",
        "options": [],
        "correct": "Trình tự đọc bản vẽ chi tiết gồm 5 bước: 1) Khung tên (tên chi tiết, vật liệu, tỉ lệ, người vẽ). 2) Hình biểu diễn (tên gọi các hình chiếu, vị trí mặt cắt). 3) Kích thước (kích thước chung, kích thước từng bộ phận). 4) Yêu cầu kĩ thuật (gia công xử lý bề mặt, dung sai). 5) Tổng hợp (hình dung hình dáng không gian 3 chiều và công dụng của chi tiết).",
        "explanation": "Nêu đủ 5 bước theo đúng thứ tự logic."
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
      },
      {
        "id": "tin9_c1_q11",
        "type": "mcq",
        "text": "Hành động nào sau đây bị nghiêm cấm theo Luật An ninh mạng Việt Nam?",
        "options": [
          "Phát tán mã độc virus, đánh cắp mật khẩu và lừa đảo chiếm đoạt tài sản",
          "Học tập trực tuyến",
          "Tra cứu từ điển",
          "Tải tài liệu học tập chính thống"
        ],
        "correct": "Phát tán mã độc virus, đánh cắp mật khẩu và lừa đảo chiếm đoạt tài sản",
        "explanation": "Hành vi vi phạm pháp luật hình sự."
      },
      {
        "id": "tin9_c1_q12",
        "type": "mcq",
        "text": "Thuật toán tìm kiếm nhị phân (Binary Search) chỉ áp dụng được trên danh sách:",
        "options": [
          "Đã được sắp xếp theo thứ tự",
          "Chưa được sắp xếp",
          "Bất kì danh sách nào",
          "Danh sách toàn số âm"
        ],
        "correct": "Đã được sắp xếp theo thứ tự",
        "explanation": "Điều kiện tiên quyết của tìm kiếm nhị phân."
      },
      {
        "id": "tin9_c1_q13",
        "type": "mcq",
        "text": "Ngôn ngữ lập trình bậc cao nào có cú pháp ngắn gọn, dễ học và rất phổ biến trong giáo dục THCS hiện nay?",
        "options": [
          "Python",
          "Assembly",
          "Mã máy nhị phân",
          "Pascal cổ"
        ],
        "correct": "Python",
        "explanation": "Ngôn ngữ Python trong chương trình mới."
      },
      {
        "id": "tin9_c1_q14",
        "type": "true_false",
        "text": "Bản quyền phần mềm bảo vệ quyền sở hữu trí tuệ của tác giả và nghiêm cấm việc sao chép lậu trái phép.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Quyền tác giả và sở hữu trí tuệ phần mềm."
      },
      {
        "id": "tin9_c1_q15",
        "type": "true_false",
        "text": "Dấu hiệu nhận biết một trang web an toàn khi đăng nhập là có tiền tố 'https://' và biểu tượng ổ khóa màu xanh trên thanh địa chỉ.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Giao thức bảo mật mã hóa SSL/TLS (HTTPS)."
      },
      {
        "id": "tin9_c1_q16",
        "type": "fill_blank",
        "text": "Trong ngôn ngữ lập trình Python, lệnh xuất dữ liệu ra màn hình có tên là ...()",
        "options": [],
        "correct": "print",
        "explanation": "Hàm print()."
      },
      {
        "id": "tin9_c1_q17",
        "type": "fill_blank",
        "text": "Công nghệ chuỗi khối lưu trữ dữ liệu phân tán phi tập trung nổi tiếng gọi là Block...",
        "options": [],
        "correct": "chain",
        "explanation": "Công nghệ Blockchain."
      },
      {
        "id": "tin9_c1_q18",
        "type": "short_answer",
        "text": "Tên trợ lý trí tuệ nhân tạo tạo sinh phát triển bởi Google là gì?",
        "options": [],
        "correct": "Gemini",
        "explanation": "Google Gemini."
      },
      {
        "id": "tin9_c1_q19",
        "type": "short_answer",
        "text": "Hành vi sử dụng hình ảnh của người khác ghép nội dung phản cảm bôi nhọ danh dự trên mạng xã hội gọi là gì?",
        "options": [],
        "correct": "Bắt nạt qua mạng",
        "explanation": "Bắt nạt qua mạng (Cyberbullying)."
      },
      {
        "id": "tin9_c1_q20",
        "type": "essay",
        "text": "Trình bày lợi ích và rủi ro tiềm ẩn của việc ứng dụng Trí tuệ nhân tạo (AI) trong học tập đối với học sinh THCS.",
        "options": [],
        "correct": "Lợi ích: AI đóng vai trò như một gia sư ảo 24/7 giải thích kiến thức khó, hỗ trợ gợi ý ý tưởng làm bài, luyện nói ngoại ngữ và cá nhân hóa lộ trình học tập. Rủi ro tiềm ẩn: Dễ khiến học sinh lười suy nghĩ nếu lạm dụng chép nguyên văn đáp án của AI; nguy cơ phụ thuộc công nghệ và giảm sút tư duy sáng tạo độc lập nếu không biết sử dụng đúng cách.",
        "explanation": "Phân tích khách quan hai mặt: công cụ đắc lực hỗ trợ học tập và nguy cơ thui chột tư duy nếu lạm dụng."
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
      },
      {
        "id": "cn9_c1_q11",
        "type": "mcq",
        "text": "Nghề lắp đặt mạng điện trong nhà đòi hỏi người lao động phải có phẩm chất gì quan trọng nhất?",
        "options": [
          "Cẩn thận, tỉ mỉ và tuân thủ nghiêm ngặt an toàn điện",
          "Năng khiếu ca hát",
          "Tốc độ chạy nhanh",
          "Khả năng nấu ăn giỏi"
        ],
        "correct": "Cẩn thận, tỉ mỉ và tuân thủ nghiêm ngặt an toàn điện",
        "explanation": "Đặc thù an toàn tính mạng của nghề điện dân dụng."
      },
      {
        "id": "cn9_c1_q12",
        "type": "mcq",
        "text": "Dụng cụ đo lường điện dùng để đo điện áp, dòng điện và điện trở tích hợp gọi là:",
        "options": [
          "Đồng hồ vạn năng (VOM)",
          "Ampe kế đơn",
          "Bút thử điện",
          "Kìm tuốt dây"
        ],
        "correct": "Đồng hồ vạn năng (VOM)",
        "explanation": "Đồng hồ đo đa năng VOM."
      },
      {
        "id": "cn9_c1_q13",
        "type": "mcq",
        "text": "Thiết bị đóng cắt tự động bảo vệ mạch điện khi xảy ra sự cố quá tải hoặc ngắn mạch là:",
        "options": [
          "Aptomat (Cầu dao tự động / CB)",
          "Công tắc đơn",
          "Phích cắm",
          "Đui đèn"
        ],
        "correct": "Aptomat (Cầu dao tự động / CB)",
        "explanation": "Aptomat (Circuit Breaker)."
      },
      {
        "id": "cn9_c1_q14",
        "type": "true_false",
        "text": "Bút thử điện dùng để kiểm tra sự rò rỉ điện trên vỏ kim loại của các thiết bị gia dụng.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Đúng",
        "explanation": "Công dụng kiểm tra an toàn của bút thử điện."
      },
      {
        "id": "cn9_c1_q15",
        "type": "true_false",
        "text": "Khi sửa chữa điện trong nhà, không cần ngắt cầu dao tổng mà chỉ cần đứng trên ghế gỗ là an toàn tuyệt đối.",
        "options": [
          "Đúng",
          "Sai"
        ],
        "correct": "Sai",
        "explanation": "Bắt buộc phải ngắt cầu dao điện tổng (Aptomat) trước khi tiến hành sửa chữa."
      },
      {
        "id": "cn9_c1_q16",
        "type": "fill_blank",
        "text": "Dụng cụ dùng để cắt và tuốt lớp vỏ bọc cách điện của dây dẫn điện là ... tuốt dây.",
        "options": [],
        "correct": "kìm",
        "explanation": "Kìm tuốt dây điện chuyên dụng."
      },
      {
        "id": "cn9_c1_q17",
        "type": "fill_blank",
        "text": "Mối nối dây dẫn điện phải đảm bảo dẫn điện tốt, có độ bền cơ học cao và an toàn cách ...",
        "options": [],
        "correct": "điện",
        "explanation": "Bọc băng dính cách điện an toàn."
      },
      {
        "id": "cn9_c1_q18",
        "type": "short_answer",
        "text": "Dây pha (dây nóng) trong mạng điện sinh hoạt gia đình ở Việt Nam có điện áp hiệu dụng bao nhiêu vôn (220V hay 110V)?",
        "options": [],
        "correct": "220V",
        "explanation": "Lưới điện dân dụng 220V."
      },
      {
        "id": "cn9_c1_q19",
        "type": "short_answer",
        "text": "Vật liệu cách điện thông dụng quấn bên ngoài mối nối dây điện là gì?",
        "options": [],
        "correct": "Băng dính cách điện",
        "explanation": "Băng dính cách điện PVC."
      },
      {
        "id": "cn9_c1_q20",
        "type": "essay",
        "text": "Trình bày quy trình thực hiện một mối nối dây dẫn điện thẳng (nối nối tiếp hai lõi một sợi) đảm bảo tiêu chuẩn kĩ thuật và an toàn.",
        "options": [],
        "correct": "Quy trình gồm 4 bước: 1) Bóc vỏ cách điện: Dùng kìm tuốt dây bóc lớp vỏ khoảng 3 - 4 cm, không làm cứa đứt lõi kim loại. 2) Làm sạch lõi: Dùng giấy ráp đánh sạch lớp oxit bên ngoài lõi đồng cho sáng bóng. 3) Nối dây: Đặt hai đầu dây chéo nhau, quấn chặt các vòng xoắn quanh lõi (khoảng 5 - 6 vòng kín khít) để đảm bảo tiếp xúc tốt. 4) Bọc cách điện: Quấn băng dính cách điện kín mối nối từ trong ra ngoài và chồng mí lên lớp vỏ cũ.",
        "explanation": "Nêu đủ 4 bước: bóc vỏ, làm sạch lõi, quấn mối nối và bọc băng dính cách điện."
      }
    ]
  }
];
