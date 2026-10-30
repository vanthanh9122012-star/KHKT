// Kho 75+ câu hỏi mẹo IQ, đố vui tư duy ngược và bẫy toán học cho Fruit Box
// Đáp án là các chuỗi số nguyên dương để nối trên lưới quả táo

export const FRUIT_BOX_QUESTIONS = [
  // === NHÓM 1: CÂU ĐỐ MẸO IQ & TƯ DUY NGƯỢC (LATERAL THINKING) ===
  {
    id: "iq_1",
    category: "Đố Mẹo IQ",
    q: "Bác sĩ đưa cho bạn 3 viên thuốc và dặn cứ 30 phút uống 1 viên. Hỏi sau bao nhiêu phút bạn uống hết thuốc?",
    a: "60",
    hint: "Viên thứ nhất bạn uống ngay lập tức!",
    explanation: "Viên 1 uống lúc 0 phút, viên 2 uống lúc 30 phút, viên 3 uống lúc 60 phút. Tổng cộng mất 60 phút (chứ không phải 90 phút)!"
  },
  {
    id: "iq_2",
    category: "Đố Mẹo IQ",
    q: "Một con ốc sên leo lên cột cao 10m. Ban ngày bò lên 3m, ban đêm tụt xuống 2m. Hỏi sau bao nhiêu ngày ốc sên chạm đỉnh cột?",
    a: "8",
    hint: "Khi đã chạm đỉnh vào ban ngày thì nó không tụt xuống nữa!",
    explanation: "Mỗi ngày đêm leo được 1m. Sau 7 ngày đêm leo được 7m. Sang ngày thứ 8, ban ngày leo thêm 3m là đạt đúng 10m chạm đỉnh!"
  },
  {
    id: "iq_3",
    category: "Đố Mẹo IQ",
    q: "Có 3 quả táo trên bàn, bạn lấy đi 2 quả. Hỏi BẠN có bao nhiêu quả táo?",
    a: "2",
    hint: "Đọc kỹ câu hỏi: Bạn lấy đi bao nhiêu quả?",
    explanation: "Bạn vừa lấy đi 2 quả táo thì chính bạn đang có 2 quả táo trong tay!"
  },
  {
    id: "iq_4",
    category: "Tư Duy Ngược",
    q: "Một đàn vịt: 2 con đi trước 2 con, 2 con đi sau 2 con, 2 con đi giữa 2 con. Hỏi đàn vịt có ít nhất bao nhiêu con?",
    a: "4",
    hint: "Đàn vịt đi thành một hàng dọc thẳng tắp.",
    explanation: "Chỉ cần 4 con vịt đi nối đuôi nhau thành 1 hàng dọc là thỏa mãn tất cả các điều kiện trên!"
  },
  {
    id: "iq_5",
    category: "Đố Mẹo IQ",
    q: "Một cây nến cháy hết trong 10 phút. Nếu thắp 5 cây nến cùng lúc thì cháy hết trong bao nhiêu phút?",
    a: "10",
    hint: "Các cây nến cháy cùng một thời điểm.",
    explanation: "Thắp cùng lúc thì cả 5 cây nến cùng cháy đồng thời, nên sau 10 phút tất cả đều cháy hết!"
  },
  {
    id: "iq_6",
    category: "Đố Mẹo Dân Gian",
    q: "Có 10 con chim đậu trên cành, người thợ săn bắn 'Đoàng' chết 1 con. Hỏi trên cành cây còn lại bao nhiêu con chim?",
    a: "0",
    hint: "Tiếng súng nổ rất to!",
    explanation: "Khi súng nổ, 1 con rơi xuống còn 9 con còn lại giật mình bay đi hết, trên cành còn 0 con!"
  },
  {
    id: "iq_7",
    category: "Đố Mẹo IQ",
    q: "Một người nông dân có 17 con cừu. Trừ 9 con ra thì tất cả đều chết hết. Hỏi người đó còn lại bao nhiêu con cừu sống?",
    a: "9",
    hint: "'Trừ 9 con ra' nghĩa là gì?",
    explanation: "'Trừ 9 con ra thì tất cả đều chết', tức là còn lại đúng 9 con cừu còn sống!"
  },
  {
    id: "iq_8",
    category: "Bẫy Tư Duy",
    q: "Trong một cuộc chạy đua, bạn vượt qua người đang chạy ở vị trí thứ hai. Hỏi hiện tại bạn đang ở vị trí thứ mấy?",
    a: "2",
    hint: "Bạn chiếm lấy vị trí của người bạn vừa vượt qua.",
    explanation: "Khi vượt qua người thứ hai, bạn sẽ chiếm vị trí thứ hai của người đó (người dẫn đầu vẫn đang ở vị trí thứ nhất)!"
  },
  {
    id: "iq_9",
    category: "Bẫy Toán Học",
    q: "Lấy 30 chia cho 1/2 rồi cộng thêm 10. Kết quả bằng bao nhiêu?",
    a: "70",
    hint: "Chia cho 1/2 tương đương với nhân với 2!",
    explanation: "30 chia cho 1/2 = 30 × 2 = 60. Sau đó cộng thêm 10: 60 + 10 = 70 (rất nhiều người nhầm thành 30 : 2 + 10 = 25)!"
  },
  {
    id: "iq_10",
    category: "Tư Duy Ngược",
    q: "Tìm số còn thiếu theo quy luật logic: 1 = 5, 2 = 25, 3 = 125, 4 = 625 thì 5 = ?",
    a: "1",
    hint: "Nhìn lại dòng đầu tiên của đề bài!",
    explanation: "Ngay dòng đầu tiên đã nói rõ: 1 = 5, do đó suy ra ngược lại thì 5 = 1!"
  },
  {
    id: "iq_11",
    category: "Đố Mẹo Gia Đình",
    q: "Một người đàn ông có 4 người con trai. Mỗi người con trai lại có đúng 1 cô em gái út. Hỏi gia đình có bao nhiêu người con?",
    a: "5",
    hint: "Tất cả các anh trai đều có chung một cô em gái.",
    explanation: "Gia đình có 4 người con trai và chung 1 cô em gái út, tổng cộng là 4 + 1 = 5 người con!"
  },
  {
    id: "iq_12",
    category: "Đố Mẹo IQ",
    q: "Cần cắt một khúc gỗ dài thành 6 đoạn bằng nhau. Hỏi người thợ phải cưa bao nhiêu nhát?",
    a: "5",
    hint: "Mỗi nhát cưa chia một đoạn thành hai phần.",
    explanation: "Cần 5 nhát cưa để chia khúc gỗ thành 6 đoạn (nhát cưa thứ 5 tự chia đôi đoạn cuối cùng)!"
  },
  {
    id: "iq_13",
    category: "Đố Mẹo Đồng Hồ",
    q: "Đồng hồ chuông: Để gõ 6 tiếng chuông cần 5 giây. Hỏi để gõ 12 tiếng chuông cần bao nhiêu giây?",
    a: "11",
    hint: "Thời gian nằm ở các khoảng cách giữa các tiếng chuông!",
    explanation: "6 tiếng chuông có 5 khoảng nghỉ: 5 giây / 5 = 1 giây/khoảng. 12 tiếng chuông có 11 khoảng nghỉ: 11 × 1 = 11 giây!"
  },
  {
    id: "iq_14",
    category: "Đố Mẹo Phơi Đồ",
    q: "Một chiếc áo ướt phơi dưới nắng mất 20 phút để khô. Hỏi 5 chiếc áo cùng loại phơi cùng lúc dưới trời nắng đó mất bao nhiêu phút?",
    a: "20",
    hint: "Tất cả chiếc áo cùng đón ánh nắng mặt trời.",
    explanation: "Tất cả 5 chiếc áo phơi cùng một lúc thì sau 20 phút sẽ cùng khô ráo!"
  },
  {
    id: "iq_15",
    category: "Bẫy Cầu Thang",
    q: "Một người đi từ tầng 1 lên tầng 4 phải bước qua 60 bậc thang. Hỏi người đó đi từ tầng 1 lên tầng 8 phải bước bao nhiêu bậc?",
    a: "140",
    hint: "Từ tầng 1 lên tầng 4 chỉ có 3 nhịp tầng thang!",
    explanation: "Từ tầng 1 lên tầng 4 có 3 tầng thang: 60 / 3 = 20 bậc/tầng. Từ tầng 1 lên tầng 8 có 7 tầng thang: 7 × 20 = 140 bậc!"
  },
  {
    id: "iq_16",
    category: "Đố Mẹo Đếm Số",
    q: "Trong dãy số tự nhiên từ 1 đến 100, chữ số 9 xuất hiện tổng cộng bao nhiêu lần?",
    a: "20",
    hint: "Đừng quên các số ở hàng chục: 90, 91, 92... và số 99!",
    explanation: "Chữ số 9 xuất hiện ở hàng đơn vị 10 lần (9, 19... 99) và ở hàng chục 10 lần (90, 91... 99). Tổng cộng là 20 lần!"
  },
  {
    id: "iq_17",
    category: "Bèo Mặt Hồ",
    q: "Mặt hồ phủ bèo, mỗi ngày bèo nở gấp đôi diện tích. Sau 20 ngày thì bèo phủ kín cả mặt hồ. Hỏi sau bao nhiêu ngày bèo phủ nửa mặt hồ?",
    a: "19",
    hint: "Ngày hôm sau bèo nở gấp đôi ngày hôm trước.",
    explanation: "Vì mỗi ngày diện tích tăng gấp đôi, nên vào ngày thứ 19 bèo phủ đúng nửa hồ, sang ngày 20 gấp đôi lên là phủ kín toàn bộ!"
  },
  {
    id: "iq_18",
    category: "Đố Mẹo Cắt Vải",
    q: "Một thợ may có khúc vải dài 10m. Mỗi ngày ông cắt ra 2m. Hỏi sau bao nhiêu ngày ông cắt xong khúc vải?",
    a: "4",
    hint: "Ngày thứ tư cắt 2m thì phần còn lại là bao nhiêu?",
    explanation: "Sau 4 ngày, ông đã cắt được 4 × 2 = 8m, phần còn lại 2m tự rời ra thành đoạn thứ 5 mà không cần cắt thêm ngày nào nữa!"
  },
  {
    id: "iq_19",
    category: "Đố Mẹo Tháng",
    q: "Hỏi trong một năm có bao nhiêu tháng có 28 ngày?",
    a: "12",
    hint: "Tất cả các tháng đều có ngày 28!",
    explanation: "Tất cả 12 tháng trong năm đều có ít nhất 28 ngày (kể cả các tháng 30 và 31 ngày)!"
  },
  {
    id: "iq_20",
    category: "Đố Mẹo Xếp Hàng",
    q: "Bạn đứng trong một hàng dọc. Đếm từ đầu hàng xuống bạn đứng thứ 7, đếm từ cuối hàng lên bạn cũng đứng thứ 7. Hỏi hàng có bao nhiêu người?",
    a: "13",
    hint: "Bản thân bạn chỉ được tính một lần.",
    explanation: "Phía trước bạn có 6 người, phía sau bạn có 6 người, cộng thêm chính bạn: 6 + 6 + 1 = 13 người!"
  },

  // === NHÓM 2: QUY LUẬT DÃY SỐ LOGIC & HÌNH HỌC TƯ DUY ===
  {
    id: "iq_21",
    category: "Logic Dãy Số",
    q: "Điền số tiếp theo vào dãy số tăng trưởng lũy thừa: 2, 4, 8, 16, 32, ...?",
    a: "64",
    hint: "Mỗi số sau bằng số trước nhân với 2.",
    explanation: "Quy luật nhân đôi: 32 × 2 = 64!"
  },
  {
    id: "iq_22",
    category: "Logic Fibonacci",
    q: "Tìm số tiếp theo trong dãy số tự nhiên nổi tiếng: 1, 1, 2, 3, 5, 8, 13, ...?",
    a: "21",
    hint: "Mỗi số bằng tổng của hai số liền trước nó.",
    explanation: "Dãy Fibonacci: 8 + 13 = 21!"
  },
  {
    id: "iq_23",
    category: "Logic Số Chính Phương",
    q: "Điền số tiếp theo vào chuỗi bình phương: 1, 4, 9, 16, 25, 36, ...?",
    a: "49",
    hint: "1², 2², 3², 4², 5², 6², ...",
    explanation: "Số tiếp theo là 7² = 7 × 7 = 49!"
  },
  {
    id: "iq_24",
    category: "Logic Dãy Số",
    q: "Tìm số tiếp theo theo quy luật bước nhảy: 3, 6, 11, 18, 27, ...?",
    a: "38",
    hint: "Khoảng cách giữa các số tăng dần: +3, +5, +7, +9, ...",
    explanation: "Khoảng cách tiếp theo là +11: 27 + 11 = 38!"
  },
  {
    id: "iq_25",
    category: "Số Nguyên Tố",
    q: "Tìm số nguyên tố tiếp theo trong dãy: 2, 3, 5, 7, 11, 13, ...?",
    a: "17",
    hint: "Số nguyên tố là số chỉ chia hết cho 1 và chính nó.",
    explanation: "Số nguyên tố liền sau 13 là 17!"
  },
  {
    id: "iq_26",
    category: "Logic Dãy Số",
    q: "Điền số tiếp theo vào dãy giảm dần: 100, 99, 96, 91, 84, ...?",
    a: "75",
    hint: "Bước giảm tăng dần: -1, -3, -5, -7, ...",
    explanation: "Bước giảm tiếp theo là -9: 84 - 9 = 75!"
  },
  {
    id: "iq_27",
    category: "Số Lập Phương",
    q: "Điền số tiếp theo vào dãy số lập phương: 1, 8, 27, 64, ...?",
    a: "125",
    hint: "1³, 2³, 3³, 4³, ...",
    explanation: "5³ = 5 × 5 × 5 = 125!"
  },
  {
    id: "iq_28",
    category: "Logic Dãy Số",
    q: "Điền số tiếp theo vào dãy số: 2, 6, 12, 20, 30, ...?",
    a: "42",
    hint: "1×2, 2×3, 3×4, 4×5, 5×6, ...",
    explanation: "Tích 2 số liên tiếp: 6 × 7 = 42!"
  },
  {
    id: "iq_29",
    category: "Số Tam Giác",
    q: "Điền số tiếp theo vào chuỗi số tam giác: 1, 3, 6, 10, 15, ...?",
    a: "21",
    hint: "Cộng dồn: +2, +3, +4, +5, ...",
    explanation: "Bước cộng tiếp theo là +6: 15 + 6 = 21!"
  },
  {
    id: "iq_30",
    category: "Tư Duy Thị Giác",
    q: "Nếu xoay ngược số 96 một góc 180 độ thì ta nhận được số nào?",
    a: "96",
    hint: "Chữ số 9 lộn ngược thành 6, chữ số 6 lộn ngược thành 9.",
    explanation: "Số 96 quay 180 độ đọc từ trái sang phải vẫn chính là số 96!"
  },

  // === NHÓM 3: TOÁN MẸO & SUY LUẬN NHANH ===
  {
    id: "iq_31",
    category: "Toán Vui Dân Gian",
    q: "Vừa gà vừa chó, bó lại cho tròn, đếm được 10 cái đầu và 28 cái chân. Hỏi có bao nhiêu con chó?",
    a: "4",
    hint: "Chó có 4 chân, gà có 2 chân.",
    explanation: "Giả sử 10 con đều là gà thì có 20 chân. Số chân thừa: 28 - 20 = 8 chân. Mỗi con chó hơn con gà 2 chân: 8 / 2 = 4 con chó!"
  },
  {
    id: "iq_32",
    category: "Toán Vui Dân Gian",
    q: "Vừa gà vừa chó có 12 con, đếm được tổng cộng 32 cái chân. Hỏi có bao nhiêu con gà?",
    a: "8",
    hint: "Giả sử cả 12 con đều là chó thì có 48 chân.",
    explanation: "Giả sử 12 con đều là gà thì có 24 chân. Chân thừa: 32 - 24 = 8. Số chó: 8 / 2 = 4 con chó. Số gà: 12 - 4 = 8 con gà!"
  },
  {
    id: "iq_33",
    category: "Hình Học Logic",
    q: "Một hình vuông có chu vi là 36cm. Diện tích của hình vuông đó bằng bao nhiêu cm²?",
    a: "81",
    hint: "Cạnh = Chu vi chia cho 4.",
    explanation: "Cạnh hình vuông: 36 / 4 = 9 cm. Diện tích: 9 × 9 = 81 cm²!"
  },
  {
    id: "iq_34",
    category: "Bàn Phím Điện Thoại",
    q: "Tính tổng của tất cả các chữ số trên bàn phím số điện thoại từ 1 đến 9: 1 + 2 + ... + 9 = ?",
    a: "45",
    hint: "Dùng công thức tính tổng: (1 + 9) × 9 / 2.",
    explanation: "Tổng từ 1 đến 9: (1 + 9) + (2 + 8) + (3 + 7) + (4 + 6) + 5 = 45!"
  },
  {
    id: "iq_35",
    category: "Bẫy Bàn Phím",
    q: "Tính tích của tất cả các chữ số xuất hiện trên bàn phím số điện thoại (từ 0 đến 9) bằng bao nhiêu?",
    a: "0",
    hint: "Trên bàn phím điện thoại có chữ số 0!",
    explanation: "Bất kỳ số nào nhân với chữ số 0 đều bằng 0!"
  },
  {
    id: "iq_36",
    category: "Đồng Hồ Góc",
    q: "Góc tạo bởi kim giờ và kim phút trên mặt đồng hồ lúc 3 giờ đúng bằng bao nhiêu độ?",
    a: "90",
    hint: "Một góc vuông hoàn hảo.",
    explanation: "Lúc 3 giờ đúng, kim phút chỉ số 12 và kim giờ chỉ số 3, tạo thành góc vuông 90 độ!"
  },
  {
    id: "iq_37",
    category: "Đồng Hồ Góc",
    q: "Góc tạo bởi kim giờ và kim phút lúc 6 giờ đúng bằng bao nhiêu độ?",
    a: "180",
    hint: "Hai kim nằm trên cùng một đường thẳng đối diện nhau.",
    explanation: "Kim phút chỉ số 12, kim giờ chỉ số 6, tạo thành một góc bẹt 180 độ!"
  },
  {
    id: "iq_38",
    category: "Đồng Hồ Góc",
    q: "Góc tạo bởi kim giờ và kim phút lúc 4 giờ đúng bằng bao nhiêu độ?",
    a: "120",
    hint: "Mỗi khoảng giữa hai số trên đồng hồ là 30 độ (360 / 12).",
    explanation: "Từ số 12 đến số 4 có 4 khoảng: 4 × 30° = 120 độ!"
  },
  {
    id: "iq_39",
    category: "Thiên Văn Học Lịch",
    q: "Một năm nhuận theo Dương lịch có tổng cộng bao nhiêu ngày?",
    a: "366",
    hint: "Tháng 2 năm nhuận có thêm ngày 29.",
    explanation: "Năm thường có 365 ngày, năm nhuận có 366 ngày!"
  },
  {
    id: "iq_40",
    category: "Quy Đổi Thời Gian",
    q: "Một giờ đồng hồ có bao nhiêu giây?",
    a: "3600",
    hint: "1 giờ = 60 phút, 1 phút = 60 giây.",
    explanation: "60 × 60 = 3600 giây!"
  },
  {
    id: "iq_41",
    category: "Hình Học Không Gian",
    q: "Một hình lập phương có tổng cộng bao nhiêu mặt phẳng?",
    a: "6",
    hint: "Giống như các mặt của một viên xúc xắc.",
    explanation: "Hình lập phương có đúng 6 mặt vuông bằng nhau!"
  },
  {
    id: "iq_42",
    category: "Hình Học Không Gian",
    q: "Một khối lập phương có bao nhiêu đỉnh nhọn?",
    a: "8",
    hint: "4 đỉnh ở mặt trên và 4 đỉnh ở mặt dưới.",
    explanation: "Khối lập phương có đúng 8 đỉnh!"
  },
  {
    id: "iq_43",
    category: "Hình Học Không Gian",
    q: "Một khối lập phương có tổng cộng bao nhiêu cạnh?",
    a: "12",
    hint: "4 cạnh đáy trên, 4 cạnh đáy dưới và 4 cạnh bên.",
    explanation: "Tổng số cạnh của khối lập phương là 12 cạnh!"
  },
  {
    id: "iq_44",
    category: "Bẫy Khối Lượng",
    q: "Lấy 1kg sắt trừ đi 1kg bông gòn thì khối lượng chênh lệch bằng bao nhiêu kg?",
    a: "0",
    hint: "Cả hai đều nặng đúng 1kg!",
    explanation: "1kg sắt và 1kg bông có khối lượng bằng nhau (đều là 1kg), nên hiệu bằng 0kg!"
  },
  {
    id: "iq_45",
    category: "Hình Học Xếp Hình",
    q: "Cần ít nhất bao nhiêu chiếc que diêm thẳng có độ dài bằng nhau để ghép thành 4 hình tam giác đều?",
    a: "6",
    hint: "Hãy suy nghĩ trong không gian 3 chiều (hình tứ diện)!",
    explanation: "Xếp 6 que diêm thành hình tứ diện đều trong không gian 3 chiều sẽ tạo ra đúng 4 mặt tam giác đều!"
  },

  // === NHÓM 4: ĐỐ MẸO TƯ DUY NHANH & VĂN HÓA SỐ HỌC ===
  {
    id: "iq_46",
    category: "Đố Mẹo Bắt Chuột",
    q: "3 con mèo bắt được 3 con chuột trong 3 phút. Hỏi cần bao nhiêu con mèo để bắt được 100 con chuột trong 100 phút?",
    a: "3",
    hint: "Tốc độ săn chuột của mỗi con mèo.",
    explanation: "3 con mèo bắt 3 con chuột trong 3 phút, nghĩa là trung bình cứ 3 phút thì 3 con mèo bắt được 3 con chuột (1 phút bắt 1 con). Trong 100 phút, 3 con mèo đó sẽ bắt được đúng 100 con chuột!"
  },
  {
    id: "iq_47",
    category: "Đố Mẹo Trứng Gà",
    q: "1 con gà mái đẻ 1 quả trứng trong 1 ngày. Hỏi 5 con gà mái như vậy trong 5 ngày đẻ được bao nhiêu quả trứng?",
    a: "25",
    hint: "Mỗi ngày 5 con gà đẻ được 5 quả.",
    explanation: "5 con gà mỗi ngày đẻ 5 quả trứng, sau 5 ngày đẻ được: 5 × 5 = 25 quả trứng!"
  },
  {
    id: "iq_48",
    category: "Bẫy Đập Trứng",
    q: "Bạn có 12 quả trứng gà. Bạn làm vỡ 4 quả, nấu chín 4 quả, và ăn 4 quả. Hỏi bạn còn lại bao nhiêu quả trứng?",
    a: "8",
    hint: "4 quả bạn làm vỡ chính là 4 quả bạn đem nấu và ăn!",
    explanation: "4 quả làm vỡ được đem nấu và ăn chính là cùng 4 quả đó! Bạn chỉ dùng hết 4 quả, còn lại: 12 - 4 = 8 quả!"
  },
  {
    id: "iq_49",
    category: "Văn Hóa Dân Gian",
    q: "Thành ngữ 'Thất thập cổ lai hy' dùng để chỉ người sống thọ đến bao nhiêu tuổi?",
    a: "70",
    hint: "'Thất' trong tiếng Hán Việt có nghĩa là số 7.",
    explanation: "'Thất thập' là 70 tuổi (xưa nay người sống thọ đến 70 tuổi là điều hiếm thấy)!"
  },
  {
    id: "iq_50",
    category: "Văn Hóa Dân Gian",
    q: "Lễ mừng thọ 'Lục tuần' trong văn hóa truyền thống tương ứng với bao nhiêu tuổi?",
    a: "60",
    hint: "'Lục' trong Hán Việt là số 6.",
    explanation: "'Lục tuần' tương ứng với tuổi 60!"
  },
  {
    id: "iq_51",
    category: "Tín Ngưỡng Dân Gian",
    q: "Truyền thuyết 'Tứ bất tử' của Việt Nam (Sơn Tinh, Thánh Gióng, Chử Đồng Tử, Liễu Hạnh) gồm bao nhiêu vị thánh?",
    a: "4",
    hint: "'Tứ' có nghĩa là số 4.",
    explanation: "'Tứ bất tử' gồm đúng 4 vị thánh linh thiêng bất tử trong tín ngưỡng Việt Nam!"
  },
  {
    id: "iq_52",
    category: "Trò Chơi Trí Tuệ",
    q: "Một ván cờ vua tiêu chuẩn lúc mới bắt đầu xếp cờ có tổng cộng bao nhiêu quân cờ trên bàn?",
    a: "32",
    hint: "Mỗi bên Trắng và Đen sở hữu 16 quân cờ.",
    explanation: "16 quân Trắng + 16 quân Đen = 32 quân cờ!"
  },
  {
    id: "iq_53",
    category: "Bộ Bài Quốc Tế",
    q: "Một bộ bài Tây tiêu chuẩn quốc tế (không tính 2 lá Phăng teo / Joker) có bao nhiêu lá bài?",
    a: "52",
    hint: "Có 4 chất (Cơ, Rô, Chuồn, Bích), mỗi chất 13 lá.",
    explanation: "4 chất × 13 lá = 52 lá bài!"
  },
  {
    id: "iq_54",
    category: "Thiên Văn Vũ Trụ",
    q: "Trong Hệ Mặt Trời của chúng ta hiện nay được công nhận chính thức có bao nhiêu hành tinh lớn?",
    a: "8",
    hint: "Sao Diêm Vương (Pluto) đã được phân loại thành hành tinh lùn từ năm 2006.",
    explanation: "Hệ Mặt Trời có 8 hành tinh: Thủy, Kim, Trái Đất, Hỏa, Mộc, Thổ, Thiên Vương, Hải Vương!"
  },
  {
    id: "iq_55",
    category: "Vật Lý Cơ Bản",
    q: "Ở điều kiện áp suất tiêu chuẩn, nước tinh khiết sôi và bốc hơi ở bao nhiêu độ C (°C)?",
    a: "100",
    hint: "Nhiệt độ sôi tròn trĩnh quen thuộc.",
    explanation: "Nhiệt độ sôi của nước tinh khiết là 100°C!"
  },
  {
    id: "iq_56",
    category: "Vật Lý Cơ Bản",
    q: "Ở áp suất tiêu chuẩn, nước tinh khiết bắt đầu đóng băng thành thể rắn ở bao nhiêu độ C (°C)?",
    a: "0",
    hint: "Điểm đóng băng trên thang đo Celsius.",
    explanation: "Điểm đóng băng của nước là 0°C!"
  },
  {
    id: "iq_57",
    category: "Sinh Học Cơ Thể",
    q: "Một người trưởng thành phát triển đầy đủ bình thường có tối đa bao nhiêu chiếc răng vĩnh viễn (kể cả răng khôn)?",
    a: "32",
    hint: "Hàm trên 16 chiếc và hàm dưới 16 chiếc.",
    explanation: "Bộ răng người trưởng thành hoàn chỉnh có 32 chiếc răng!"
  },
  {
    id: "iq_58",
    category: "Toán Nhanh Thực Tế",
    q: "Một sợi dây dù dài 24m được cắt thành các đoạn dây nhỏ dài 4m. Hỏi cần thực hiện bao nhiêu nhát cắt?",
    a: "5",
    hint: "Số nhát cắt ít hơn số đoạn tạo thành 1 đơn vị.",
    explanation: "Chia thành 24 / 4 = 6 đoạn, do đó chỉ cần thực hiện 5 nhát cắt!"
  },
  {
    id: "iq_59",
    category: "Năng Suất Lao Động",
    q: "Một người thợ xây cần 8 ngày để xây xong một bức tường. Hỏi 4 người thợ có cùng năng suất sẽ xây xong bức tường đó trong bao nhiêu ngày?",
    a: "2",
    hint: "Nhiều người hơn thì thời gian giảm đi tương ứng tỉ lệ nghịch.",
    explanation: "Tổng công sức là 8 ngày-công. Khi có 4 người làm: 8 / 4 = 2 ngày!"
  },
  {
    id: "iq_60",
    category: "Logic Hình Học",
    q: "Hai đường thẳng phân biệt cắt nhau tại một điểm duy nhất sẽ tạo thành bao nhiêu góc (không tính góc bẹt)?",
    a: "4",
    hint: "Gồm hai cặp góc đối đỉnh.",
    explanation: "Giao điểm của 2 đường thẳng tạo thành 4 góc!"
  },
  {
    id: "iq_61",
    category: "Hình Học Tam Giác",
    q: "Tổng số đo ba góc trong của bất kỳ một hình tam giác nào luôn luôn bằng bao nhiêu độ?",
    a: "180",
    hint: "Định lý tổng 3 góc trong tam giác cơ bản.",
    explanation: "Tổng 3 góc trong tam giác luôn bằng 180 độ!"
  },
  {
    id: "iq_62",
    category: "Hình Học Tứ Giác",
    q: "Tổng số đo bốn góc trong của bất kỳ một hình tứ giác lồi nào luôn bằng bao nhiêu độ?",
    a: "360",
    hint: "Bằng 2 lần tổng số đo góc của tam giác.",
    explanation: "Tổng 4 góc trong tứ giác bằng 360 độ!"
  },
  {
    id: "iq_63",
    category: "Đa Giác Đều",
    q: "Một hình lục giác đều có tổng cộng bao nhiêu cạnh?",
    a: "6",
    hint: "'Lục' có nghĩa là số 6.",
    explanation: "Hình lục giác có đúng 6 cạnh!"
  },
  {
    id: "iq_64",
    category: "Đa Giác Đều",
    q: "Một hình bát giác có tổng cộng bao nhiêu góc?",
    a: "8",
    hint: "'Bát' có nghĩa là số 8.",
    explanation: "Hình bát giác có 8 cạnh và 8 góc!"
  },
  {
    id: "iq_65",
    category: "Đố Mẹo Số Học",
    q: "Nửa số 8 nằm ngang (cắt đôi số 8 theo chiều ngang) trông giống chữ số nào nhất?",
    a: "0",
    hint: "Nhìn phần trên hoặc phần dưới của số 8.",
    explanation: "Khi cắt ngang số 8 làm đôi, nửa trên hoặc nửa dưới tạo thành chữ số 0 tròn trĩnh!"
  },
  {
    id: "iq_66",
    category: "Toán Nhanh Tỉ Lệ",
    q: "Một lớp học có 40 học sinh, trong đó có 25 bạn nữ. Hỏi trong lớp có bao nhiêu bạn nam?",
    a: "15",
    hint: "Lấy tổng số học sinh trừ đi số học sinh nữ.",
    explanation: "40 - 25 = 15 bạn nam!"
  },
  {
    id: "iq_67",
    category: "Bẫy Logic Cờ Vua",
    q: "Hai đại kiện tướng cờ vua thi đấu với nhau trong 5 ván. Mỗi người đều thắng 3 ván mà không có ván hòa. Hỏi có bao nhiêu người tham gia thi đấu?",
    a: "2",
    hint: "Họ không nhất thiết phải thi đấu với nhau trong cùng một giải!",
    explanation: "Họ thi đấu với các đối thủ khác trong giải đấu chứ không đấu trực tiếp với nhau, nên cả hai đều thắng 3 ván!"
  },
  {
    id: "iq_68",
    category: "Đồng Hồ Sai Giờ",
    q: "Một chiếc đồng hồ chạy chậm đúng 5 phút mỗi ngày. Hỏi sau bao nhiêu ngày thì chiếc đồng hồ đó lại chỉ đúng giờ như ban đầu?",
    a: "144",
    hint: "Đồng hồ 12 giờ cần lệch đủ 12 tiếng (720 phút) để kim quay về vị trí ban đầu.",
    explanation: "12 giờ = 720 phút. Để chạy chậm hết một vòng mặt đồng hồ: 720 / 5 = 144 ngày!"
  },
  {
    id: "iq_69",
    category: "Câu Đố Nhân Thân",
    q: "Bố chở 2 con đi học trên xe máy. Hỏi trên xe máy lúc đó có bao nhiêu người?",
    a: "3",
    hint: "1 người bố và 2 người con.",
    explanation: "1 bố + 2 con = 3 người trên xe!"
  },
  {
    id: "iq_70",
    category: "Đố Mẹo Nhân Sư",
    q: "Câu đố nhân sư cổ đại: 'Sáng 4 chân, trưa 2 chân, chiều 3 chân'. Hỏi người già lúc về chiều chống gậy bước đi bằng mấy chân?",
    a: "3",
    hint: "2 chân của người cộng thêm 1 chiếc gậy chống.",
    explanation: "2 chân người + 1 cây gậy chống = 3 chân!"
  },
  {
    id: "iq_71",
    category: "Đố Vui Cắt Bánh",
    q: "Cắt 3 nhát dao thẳng xuyên qua một chiếc bánh sinh nhật hình tròn có thể chia thành tối đa bao nhiêu miếng bánh?",
    a: "7",
    hint: "1 nhát -> 2 miếng, 2 nhát -> 4 miếng, 3 nhát giao nhau -> ?",
    explanation: "3 nhát cắt không đồng quy chia mặt phẳng tròn thành tối đa 7 phần!"
  },
  {
    id: "iq_72",
    category: "Đố Mẹo Thủy Triều",
    q: "Một con tàu thả neo, mạn thuyền có thang dây 10 bậc, mỗi bậc cách nhau 30cm. Thủy triều dâng lên 60cm. Hỏi nước ngập thêm bao nhiêu bậc thang?",
    a: "0",
    hint: "Con tàu nổi trên mặt nước!",
    explanation: "Vì thuyền nổi trên mặt nước nên khi thủy triều dâng lên, thuyền cũng dâng lên theo, số bậc thang ngập nước không đổi (0 bậc)!"
  },
  {
    id: "iq_73",
    category: "Bẫy Bắt Tay",
    q: "Có 5 người bạn gặp nhau, mỗi người đều bắt tay với từng người còn lại đúng 1 lần. Hỏi có tất cả bao nhiêu cái bắt tay?",
    a: "10",
    hint: "Công thức tổ hợp chập 2 của 5 người: 5 × 4 / 2.",
    explanation: "(5 × 4) / 2 = 10 cái bắt tay!"
  },
  {
    id: "iq_74",
    category: "Logic Tuổi Tác",
    q: "Năm nay mẹ 30 tuổi, con 6 tuổi. Hỏi sau bao nhiêu năm nữa thì tuổi mẹ gấp 3 lần tuổi con?",
    a: "6",
    hint: "Hiệu số tuổi của hai mẹ con luôn không đổi (24 tuổi).",
    explanation: "Mẹ hơn con: 30 - 6 = 24 tuổi. Khi mẹ gấp 3 lần con, tuổi con là: 24 / 2 = 12 tuổi. Sau: 12 - 6 = 6 năm!"
  },
  {
    id: "iq_75",
    category: "Bẫy Chữ Số",
    q: "Số tự nhiên lớn nhất có 2 chữ số khác nhau là số nào?",
    a: "98",
    hint: "Chữ số hàng chục lớn nhất là 9, chữ số hàng đơn vị khác 9 lớn nhất là...",
    explanation: "Số lớn nhất có 2 chữ số khác nhau là 98 (chứ không phải 99 vì 99 có 2 chữ số giống nhau)!"
  }
];

export const QUESTIONS_PER_ROUND = 10;

// Hàm xáo trộn mảng
export const shuffleQuestions = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
