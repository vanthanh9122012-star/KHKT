// Bộ máy sinh câu hỏi tương tự cùng dạng (Isomorphic Problem Generator)
// và Hướng dẫn giải chi tiết từng bước (Step-by-Step Worked Solution)
// Bám sát chương trình THCS Kết nối tri thức với cuộc sống

export const generateSimilarQuestionData = (question, subject = 'Toán', quizTitle = '', isVariant = false) => {
  if (!question) return null;

  const text = (question.text || question.question || '').toLowerCase();
  const rawText = question.text || question.question || '';
  const correct = question.correct || question.correctAnswer || '';
  const explanation = question.explanation || '';

  // =========================================================================
  // 1. NHÓM TOÁN HỌC (MATHEMATICS)
  // =========================================================================
  if (subject === 'Toán' || quizTitle.includes('Toán')) {
    
    // Dạng: Lũy thừa (2^3, 3^2, a^m * a^n,...)
    if (text.includes('^') || text.includes('lũy thừa') || text.includes('luỹ thừa') || text.includes('mũ')) {
      if (isVariant) {
        return {
          topic: "Lũy thừa với số mũ tự nhiên (Biến thể 2)",
          originalText: rawText,
          similarQuestion: "Tính giá trị của biểu thức lũy thừa: 4^3",
          similarOptions: ["12", "16", "64", "256"],
          similarCorrect: "64",
          steps: [
            {
              stepNumber: 1,
              title: "Nhớ lại định nghĩa lũy thừa",
              detail: "Lũy thừa bậc 3 của 4 nghĩa là tích của 3 thừa số 4 nhân với nhau: 4^3 = 4 × 4 × 4."
            },
            {
              stepNumber: 2,
              title: "Thực hiện phép nhân từng bước",
              detail: "• Lấy 4 × 4 = 16\n• Lấy tiếp 16 × 4 = 64 (chú ý: tuyệt đối không lấy 4 nhân 3 = 12)."
            },
            {
              stepNumber: 3,
              title: "Kết luận",
              detail: "Vậy giá trị của 4^3 là 64."
            }
          ],
          tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Trong câu hỏi gốc "${rawText}", hãy phân biệt rõ cơ số (viết to bên dưới) và số mũ (viết nhỏ bên trên) để nhân đúng số lượng thừa số!`
        };
      }
      return {
        topic: "Lũy thừa với số mũ tự nhiên",
        originalText: rawText,
        similarQuestion: "Tính giá trị của lũy thừa: 3^3",
        similarOptions: ["9", "18", "27", "81"],
        similarCorrect: "27",
        steps: [
          {
            stepNumber: 1,
            title: "Nhớ lại định nghĩa lũy thừa",
            detail: "Lũy thừa bậc n của cơ số a là tích của n thừa số bằng nhau, mỗi thừa số bằng a: a^n = a · a · ... · a (n thừa số a)."
          },
          {
            stepNumber: 2,
            title: "Thiết lập phép tính tương tự",
            detail: "Với biểu thức 3^3, cơ số là 3 và số mũ là 3. Tức là tích của 3 thừa số 3: 3 × 3 × 3 (chú ý: KHÔNG PHẢI là lấy 3 nhân với 3 bằng 9)."
          },
          {
            stepNumber: 3,
            title: "Thực hiện tính toán từ trái sang phải",
            detail: "• Lấy 3 × 3 = 9\n• Lấy tiếp 9 × 3 = 27."
          },
          {
            stepNumber: 4,
            title: "Kết luận",
            detail: "Giá trị của 3^3 là 27."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Đọc kỹ cơ số và số mũ trong đề bài "${rawText}". Hãy viết ra giấy thành tích của các thừa số bằng nhau rồi nhân lần lượt từ trái sang phải, tránh nhầm lẫn phép nhân giữa cơ số và số mũ!`
      };
    }

    // Dạng: Tập hợp N và N*
    if (text.includes('n*') || text.includes('tập hợp số tự nhiên') || text.includes('thuộc tập hợp') || text.includes('∈') || text.includes('∉')) {
      if (isVariant) {
        return {
          topic: "Tập hợp số tự nhiên N và N* (Biến thể 2)",
          originalText: rawText,
          similarQuestion: "Khẳng định nào sau đây là ĐÚNG khi nói về số 0?",
          similarOptions: ["0 ∈ N*", "0 ∉ N", "0 ∈ N và 0 ∉ N*", "0 không phải số tự nhiên"],
          similarCorrect: "0 ∈ N và 0 ∉ N*",
          steps: [
            {
              stepNumber: 1,
              title: "Nhớ lại thành phần của hai tập hợp",
              detail: "• N = {0, 1, 2, 3, ...} gồm tất cả các số tự nhiên, BẮT ĐẦU từ số 0.\n• N* = {1, 2, 3, ...} gồm các số tự nhiên KHÁC 0, bắt đầu từ số 1."
            },
            {
              stepNumber: 2,
              title: "Kiểm tra vị trí của số 0",
              detail: "Số 0 nằm trong N nên 0 ∈ N. Số 0 không nằm trong N* nên 0 ∉ N*."
            },
            {
              stepNumber: 3,
              title: "Kết luận",
              detail: "Khẳng định đúng là: 0 ∈ N và 0 ∉ N*."
            }
          ],
          tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Chú ý dấu sao (*) trong kí hiệu N*. Dấu sao biểu thị 'khác 0'. Vì vậy số 0 là phần tử duy nhất thuộc N nhưng không thuộc N*!`
        };
      }
      return {
        topic: "Tập hợp số tự nhiên N và N*",
        originalText: rawText,
        similarQuestion: "Số 5 có thuộc tập hợp N* (tập hợp các số tự nhiên khác 0) hay không?",
        similarOptions: ["Đúng", "Sai"],
        similarCorrect: "Đúng",
        steps: [
          {
            stepNumber: 1,
            title: "Đối chiếu định nghĩa hai tập hợp cơ bản",
            detail: "• Tập hợp số tự nhiên: N = {0, 1, 2, 3, 4, 5, ...} (có chứa số 0).\n• Tập hợp số tự nhiên khác 0: N* = {1, 2, 3, 4, 5, ...} (bắt đầu từ số 1, KHÔNG chứa số 0)."
          },
          {
            stepNumber: 2,
            title: "Kiểm tra phần tử cần xét",
            detail: "Xét số 5: Ta thấy số 5 là số tự nhiên và 5 khác 0. Do đó 5 thuộc vào tập hợp N* (kí hiệu 5 ∈ N*)."
          },
          {
            stepNumber: 3,
            title: "Kết luận",
            detail: "Khẳng định 'Số 5 thuộc tập hợp N*' là ĐÚNG."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Hãy xem phần tử trong câu hỏi của bạn có phải là số 0 hay không. Quy tắc vàng: Số 0 thuộc N nhưng KHÔNG thuộc N*!`
      };
    }

    // Dạng: Tính chia hết, dấu hiệu chia hết cho 2, 3, 5, 9, số nguyên tố
    if (text.includes('chia hết') || text.includes('dấu hiệu') || text.includes('ước') || text.includes('bội') || text.includes('nguyên tố')) {
      if (isVariant) {
        return {
          topic: "Dấu hiệu chia hết cho 3 và 9 (Biến thể 2)",
          originalText: rawText,
          similarQuestion: "Trong các số: 124, 252, 341, 517; số nào chia hết cho 9?",
          similarOptions: ["124", "252", "341", "517"],
          similarCorrect: "252",
          steps: [
            {
              stepNumber: 1,
              title: "Nhớ lại dấu hiệu chia hết cho 9",
              detail: "Các số có tổng các chữ số chia hết cho 9 thì chia hết cho 9 và chỉ những số đó mới chia hết cho 9."
            },
            {
              stepNumber: 2,
              title: "Tính tổng các chữ số từng phương án",
              detail: "• 124: 1 + 2 + 4 = 7 (không chia hết cho 9).\n• 252: 2 + 5 + 2 = 9 (chia hết cho 9).\n• 341: 3 + 4 + 1 = 8 (không chia hết cho 9).\n• 517: 5 + 1 + 7 = 13 (không chia hết cho 9)."
            },
            {
              stepNumber: 3,
              title: "Kết luận",
              detail: "Số chia hết cho 9 là 252."
            }
          ],
          tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Để kiểm tra chia hết cho 3 hoặc 9, đừng nhìn chữ số tận cùng! Hãy cộng tất cả các chữ số lại rồi lấy tổng đó chia thử cho 3 hoặc 9!`
        };
      }
      return {
        topic: "Dấu hiệu chia hết trong tập hợp số tự nhiên",
        originalText: rawText,
        similarQuestion: "Trong các số sau: 135, 240, 352, 471; số nào chia hết cho cả 2 và 5?",
        similarOptions: ["135", "240", "352", "471"],
        similarCorrect: "240",
        steps: [
          {
            stepNumber: 1,
            title: "Nhớ lại dấu hiệu chia hết cho 2 và 5",
            detail: "• Số chia hết cho 2 có chữ số tận cùng là chữ số chẵn: 0, 2, 4, 6, 8.\n• Số chia hết cho 5 có chữ số tận cùng là 0 hoặc 5.\n• Do đó, số chia hết cho CẢ 2 VÀ 5 phải có chữ số tận cùng là 0."
          },
          {
            stepNumber: 2,
            title: "Xét chữ số tận cùng của từng phương án",
            detail: "• 135 có tận cùng là 5 (chỉ chia hết cho 5, không chia hết cho 2).\n• 240 có tận cùng là 0 (chia hết cho cả 2 và 5).\n• 352 có tận cùng là 2 (chỉ chia hết cho 2).\n• 471 có tận cùng là 1 (không chia hết cho 2 lẫn 5)."
          },
          {
            stepNumber: 3,
            title: "Kết luận",
            detail: "Số thỏa mãn là 240."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Nếu đề bài hỏi chia hết cho 2 hoặc 5 thì nhìn chữ số tận cùng. Nếu hỏi chia hết cho 3 hoặc 9 thì hãy tính tổng các chữ số lại rồi xét!`
      };
    }

    // Dạng: Số nguyên & Quy tắc dấu (Cộng trừ nhân chia số nguyên)
    if (text.includes('số nguyên') || text.includes('dấu ngoặc') || text.includes('âm') || text.includes('dương') || text.includes('-')) {
      if (isVariant) {
        return {
          topic: "Cộng hai số nguyên khác dấu (Biến thể 2)",
          originalText: rawText,
          similarQuestion: "Tính giá trị của biểu thức: (-25) + 40",
          similarOptions: ["-15", "15", "-65", "65"],
          similarCorrect: "15",
          steps: [
            {
              stepNumber: 1,
              title: "Nhận diện dạng toán",
              detail: "Đây là phép cộng hai số nguyên KHÁC DẤU: một số âm (-25) và một số dương (+40)."
            },
            {
              stepNumber: 2,
              title: "Quy tắc cộng hai số nguyên khác dấu",
              detail: "Bỏ dấu trừ để lấy phần tự nhiên: 25 và 40. Lấy số lớn hơn trừ số nhỏ hơn: 40 - 25 = 15. Đặt trước kết quả dấu của số có phần tự nhiên lớn hơn (số 40 mang dấu dương)."
            },
            {
              stepNumber: 3,
              title: "Kết luận",
              detail: "Kết quả là +15."
            }
          ],
          tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Nghĩ như tiền nợ và tiền có: Em đang nợ 25 nghìn, nhưng có trong tay 40 nghìn. Sau khi trả nợ, em vẫn còn dư 15 nghìn (+15)!`
        };
      }
      return {
        topic: "Quy tắc cộng trừ và dấu trong tập số nguyên Z",
        originalText: rawText,
        similarQuestion: "Tính giá trị của biểu thức: (-15) + (-25)",
        similarOptions: ["-40", "40", "-10", "10"],
        similarCorrect: "-40",
        steps: [
          {
            stepNumber: 1,
            title: "Nhận diện phép toán",
            detail: "Đây là phép cộng hai số nguyên CÙNG DẤU ÂM: (-a) + (-b)."
          },
          {
            stepNumber: 2,
            title: "Áp dụng quy tắc cộng hai số nguyên âm",
            detail: "Cộng hai phần số tự nhiên của chúng lại rồi đặt dấu trừ '-' đằng trước kết quả: (-a) + (-b) = -(a + b)."
          },
          {
            stepNumber: 3,
            title: "Tính toán cụ thể",
            detail: "• Lấy phần tự nhiên: 15 + 25 = 40.\n• Đặt dấu trừ đằng trước: -(40) = -40."
          },
          {
            stepNumber: 4,
            title: "Kết luận",
            detail: "Kết quả là -40."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Khi phá ngoặc có dấu '-' đằng trước, nhớ đổi dấu tất cả số hạng bên trong: -(a - b) = -a + b. Nhân chia cùng dấu ra '+', khác dấu ra '-'!`
      };
    }

    // Dạng: Tìm x, giải phương trình
    if (text.includes('tìm x') || text.includes('thỏa mãn') || text.includes('giá trị của x') || text.includes('x =')) {
      if (isVariant) {
        return {
          topic: "Quy tắc chuyển vế tìm x (Biến thể 2)",
          originalText: rawText,
          similarQuestion: "Tìm số nguyên x biết: 2x + 10 = -6",
          similarOptions: ["-8", "8", "-2", "2"],
          similarCorrect: "-8",
          steps: [
            {
              stepNumber: 1,
              title: "Chuyển vế số hạng tự do",
              detail: "Chuyển +10 từ vế trái sang vế phải thành -10:\n2x = -6 - 10\n2x = -16."
            },
            {
              stepNumber: 2,
              title: "Thực hiện phép chia tìm x",
              detail: "x = (-16) : 2 = -8 (chia số âm cho số dương ra số âm)."
            },
            {
              stepNumber: 3,
              title: "Kết luận",
              detail: "Vậy x = -8."
            }
          ],
          tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Quy tắc vàng: Chuyển vế phải ĐỔI DẤU (+ chuyển thành -, - chuyển thành +). Giữ bình tĩnh tính từng bước!`
        };
      }
      return {
        topic: "Quy tắc chuyển vế tìm x",
        originalText: rawText,
        similarQuestion: "Tìm số tự nhiên x biết: 3x - 12 = 18",
        similarOptions: ["6", "10", "8", "12"],
        similarCorrect: "10",
        steps: [
          {
            stepNumber: 1,
            title: "Phân tích cấu trúc biểu thức",
            detail: "Ta có: 3x - 12 = 18. Ở đây 3x đóng vai trò là số bị trừ, 12 là số trừ, 18 là hiệu."
          },
          {
            stepNumber: 2,
            title: "Áp dụng quy tắc chuyển vế đổi dấu",
            detail: "Chuyển -12 từ vế trái sang vế phải thành +12:\n3x = 18 + 12\n3x = 30."
          },
          {
            stepNumber: 3,
            title: "Tìm x từ phép nhân",
            detail: "x = 30 : 3 = 10."
          },
          {
            stepNumber: 4,
            title: "Kết luận",
            detail: "Vậy x = 10."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Hãy làm theo thứ tự ngược lại của các phép toán: chuyển vế số hạng tự do trước (+ thành -, - thành +), sau đó mới chia cho hệ số đi kèm với x!`
      };
    }

    // Dạng: Phân số & Số thập phân
    if (text.includes('phân số') || text.includes('tử số') || text.includes('mẫu số') || text.includes('rút gọn')) {
      return {
        topic: "Rút gọn phân số & Phân số tối giản",
        originalText: rawText,
        similarQuestion: "Rút gọn phân số 18/24 về phân số tối giản:",
        similarOptions: ["3/4", "9/12", "6/8", "2/3"],
        similarCorrect: "3/4",
        steps: [
          {
            stepNumber: 1,
            title: "Tìm Ước chung lớn nhất (ƯCLN) của cả tử và mẫu",
            detail: "Tử số là 18, mẫu số là 24. Các ước chung của 18 và 24 là 1, 2, 3, 6. Do đó ƯCLN(18, 24) = 6."
          },
          {
            stepNumber: 2,
            title: "Chia cả tử số và mẫu số cho ƯCLN",
            detail: "• Tử số: 18 : 6 = 3.\n• Mẫu số: 24 : 6 = 4."
          },
          {
            stepNumber: 3,
            title: "Kết luận",
            detail: "Phân số tối giản là 3/4."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Chia cả tử và mẫu cho cùng một số tự nhiên lớn hơn 1 cho đến khi không chia được nữa thì ta được phân số tối giản!`
      };
    }

    // Dạng: Hình học trực quan (Chu vi, diện tích, góc)
    if (text.includes('chu vi') || text.includes('diện tích') || text.includes('hình vuông') || text.includes('tam giác') || text.includes('hình chữ nhật')) {
      return {
        topic: "Chu vi và Diện tích các hình phẳng",
        originalText: rawText,
        similarQuestion: "Một mảnh vườn hình chữ nhật có chiều dài 12m, chiều rộng 8m. Diện tích của mảnh vườn là bao nhiêu?",
        similarOptions: ["96 m²", "40 m²", "48 m²", "20 m²"],
        similarCorrect: "96 m²",
        steps: [
          {
            stepNumber: 1,
            title: "Nhớ lại công thức diện tích hình chữ nhật",
            detail: "Diện tích hình chữ nhật = Chiều dài × Chiều rộng (S = a × b, cùng đơn vị đo)."
          },
          {
            stepNumber: 2,
            title: "Thay số và tính toán",
            detail: "Chiều dài a = 12m, Chiều rộng b = 8m.\nS = 12 × 8 = 96 (m²)."
          },
          {
            stepNumber: 3,
            title: "Kết luận",
            detail: "Diện tích là 96 m² (chú ý: 40m là chu vi, đừng nhầm giữa chu vi và diện tích)."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Chú ý đơn vị đo của các cạnh! Nếu khác đơn vị đo phải đổi về cùng đơn vị trước khi tính diện tích hoặc chu vi!`
      };
    }
  }

  // =========================================================================
  // 2. NHÓM NGỮ VĂN (LITERATURE)
  // =========================================================================
  if (subject === 'Ngữ Văn' || subject === 'Văn' || quizTitle.includes('Văn')) {
    if (text.includes('đồng thoại') || text.includes('dế mèn') || text.includes('nhân vật') || text.includes('tác phẩm')) {
      return {
        topic: "Đặc trưng thể loại truyện đồng thoại & Phân tích nhân vật",
        originalText: rawText,
        similarQuestion: "Dấu hiệu nhận biết rõ nhất của thể loại truyện đồng thoại là gì?",
        similarOptions: [
          "Kể về các vị thần sáng tạo ra muôn loài",
          "Nhân vật là loài vật/đồ vật được nhân hóa sinh động",
          "Kể về người thật việc thật có trong lịch sử",
          "Chỉ miêu tả cảnh sắc thiên nhiên tĩnh vật"
        ],
        similarCorrect: "Nhân vật là loài vật/đồ vật được nhân hóa sinh động",
        steps: [
          {
            stepNumber: 1,
            title: "Nhớ lại khái niệm thể loại truyện đồng thoại",
            detail: "Truyện đồng thoại là thể loại truyện viết cho thiếu nhi, trong đó nhân vật thường là loài vật hoặc đồ vật được nhân hóa mang tính cách, suy nghĩ của con người."
          },
          {
            stepNumber: 2,
            title: "Phân tích đặc điểm nhân hóa",
            detail: "Dù mang tư tưởng, tiếng nói của con người nhưng các nhân vật vẫn giữ nguyên những tập tính tự nhiên của loài vật (như Dế Mèn thích đào hang, có càng mẫm bóng, thích gáy đá nhau)."
          },
          {
            stepNumber: 3,
            title: "Kết luận",
            detail: "Dấu hiệu nhận biết then chốt chính là nhân vật loài vật được nhân hóa."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Chú ý kỹ hành động và suy nghĩ của nhân vật trong đoạn trích đề bài. Thông điệp tác giả gửi gắm luôn hướng đến lối sống khiêm tốn, biết sẻ chia và thấu hiểu!`
      };
    }

    // Biện pháp tu từ (so sánh, nhân hóa, ẩn dụ...)
    return {
      topic: "Biện pháp tu từ & Cảm thụ văn học",
      originalText: rawText,
      similarQuestion: "Câu văn: 'Những ngọn cỏ gẫy rạp, y như có nhát dao vừa lia qua' sử dụng biện pháp tu từ nào?",
      similarOptions: ["So sánh", "Ẩn dụ", "Nhân hóa", "Điệp từ"],
      similarCorrect: "So sánh",
      steps: [
        {
          stepNumber: 1,
          title: "Tìm từ ngữ chỉ dấu hiệu",
          detail: "Trong câu xuất hiện từ so sánh rõ ràng: 'y như' để đối chiếu hình ảnh 'ngọn cỏ gẫy rạp' với 'nhát dao vừa lia qua'."
        },
        {
          stepNumber: 2,
          title: "Xác định công thức so sánh",
          detail: "Mô hình so sánh: Vế A (sự vật được so sánh) + Từ so sánh (như, là, y như, tựa như) + Vế B (sự vật dùng để so sánh)."
        },
        {
          stepNumber: 3,
          title: "Kết luận",
          detail: "Biện pháp tu từ được sử dụng là So sánh."
        }
      ],
      tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Nếu có từ 'như', 'tựa như', 'là' nối hai vế -> So sánh. Nếu đồ vật, con vật có hành động như con người -> Nhân hóa!`
    };
  }

  // =========================================================================
  // 3. NHÓM TIẾNG ANH (ENGLISH)
  // =========================================================================
  if (subject === 'Tiếng Anh' || subject === 'Anh' || quizTitle.includes('Anh')) {
    if (text.includes('yesterday') || text.includes('ago') || text.includes('last') || text.includes('past')) {
      return {
        topic: "Past Simple Tense (Thì Quá khứ đơn)",
        originalText: rawText,
        similarQuestion: "Choose the correct verb: 'Yesterday, my family (visit) ________ Ha Long Bay.'",
        similarOptions: ["visited", "visits", "is visiting", "visiting"],
        similarCorrect: "visited",
        steps: [
          {
            stepNumber: 1,
            title: "Nhận diện dấu hiệu thời gian trong quá khứ",
            detail: "Từ 'Yesterday' (hôm qua) là dấu hiệu rõ ràng nhất của thì Quá khứ đơn (Past Simple)."
          },
          {
            stepNumber: 2,
            title: "Quy tắc chia động từ có quy tắc",
            detail: "Động từ 'visit' là động từ có quy tắc, ở thể quá khứ ta chỉ cần thêm đuôi '-ed' → 'visited'."
          },
          {
            stepNumber: 3,
            title: "Kết luận",
            detail: "Đáp án đúng là 'visited'."
          }
        ],
        tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Hãy tìm các từ chỉ quá khứ như: yesterday, ago, last week/year, in + năm quá khứ để chia động từ ở dạng V2/V-ed!`
      };
    }

    return {
      topic: "Present Simple Tense & Subject-Verb Agreement",
      originalText: rawText,
      similarQuestion: "Complete the sentence: 'My brother (watch) ________ TV in the living room every evening.'",
      similarOptions: ["watches", "watch", "is watching", "watched"],
      similarCorrect: "watches",
      steps: [
        {
          stepNumber: 1,
          title: "Xác định thì qua dấu hiệu thời gian (Time signal)",
          detail: "Cụm từ 'every evening' (mỗi buổi tối) diễn tả một thói quen hoặc hành động lặp đi lặp lại hàng ngày → Cần dùng thì Hiện tại đơn (Present Simple)."
        },
        {
          stepNumber: 2,
          title: "Xác định chủ ngữ (Subject)",
          detail: "Chủ ngữ là 'My brother' (anh trai tôi) tương đương với đại từ ngôi thứ ba số ít (He) → Động từ phải thêm đuôi -s hoặc -es."
        },
        {
          stepNumber: 3,
          title: "Quy tắc thêm đuôi -es",
          detail: "Động từ 'watch' có chữ cái tận cùng là đuôi '-ch' (thuộc nhóm -ch, -sh, -s, -x, -z, -o) nên ta phải thêm đuôi '-es' thành 'watches'."
        },
        {
          stepNumber: 4,
          title: "Kết luận",
          detail: "Đáp án chính xác là 'watches'."
        }
      ],
      tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Hãy tìm trạng từ chỉ tần suất (always, usually, every...) để xác định thì, sau đó xem kỹ chủ ngữ là số ít (He/She/It) hay số nhiều (They/We/I/You) để chia động từ cho chuẩn!`
    };
  }

  // =========================================================================
  // 4. NHÓM KHOA HỌC TỰ NHIÊN (KHTN / LÝ / HÓA / SINH)
  // =========================================================================
  if (subject === 'KHTN' || quizTitle.includes('KHTN') || subject.includes('Lý') || subject.includes('Hóa') || subject.includes('Sinh')) {
    return {
      topic: "Đặc trưng vật sống, quy tắc đo lường & chuyển hóa khoa học",
      originalText: rawText,
      similarQuestion: "Vật nào sau đây là vật sống (vật hữu sinh)?",
      similarOptions: ["Cây hoa hồng", "Viên phấn", "Chiếc xe đạp", "Cục than đá"],
      similarCorrect: "Cây hoa hồng",
      steps: [
        {
          stepNumber: 1,
          title: "Nhớ lại các dấu hiệu đặc trưng của vật sống",
          detail: "Vật sống có các đặc trưng sống cơ bản: Có sự trao đổi chất với môi trường, có khả năng lớn lên, sinh sản, cảm ứng và vận động."
        },
        {
          stepNumber: 2,
          title: "Đối chiếu từng đối tượng",
          detail: "• Cây hoa hồng: Hút nước, quang hợp, lớn lên và ra hoa (đầy đủ các đặc trưng sống) → Là vật sống.\n• Viên phấn, xe đạp, than đá: Không thể tự trao đổi chất hay sinh sản → Là vật không sống."
        },
        {
          stepNumber: 3,
          title: "Kết luận",
          detail: "Cây hoa hồng là vật sống."
        }
      ],
      tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Hãy tự hỏi: 'Vật này có trao đổi chất, lớn lên và sinh sản được không?' Nếu có thì chắc chắn là vật sống!`
    };
  }

  // =========================================================================
  // 5. CÁC MÔN XÃ HỘI & THÔNG THƯỜNG (Lịch sử, Địa lí, GDCD, Tin học, Công nghệ)
  // =========================================================================
  return {
    topic: `Phương pháp tư duy & Giải bài tập môn ${subject}`,
    originalText: rawText,
    similarQuestion: `Một câu hỏi cùng dạng trong chuyên đề ${subject}: "Khi đối chiếu và giải quyết vấn đề trong tình huống trên, nguyên tắc nào là quan trọng nhất?"`,
    similarOptions: [
      "Gạch chân từ khóa chính, đối chiếu định nghĩa sách giáo khoa và loại trừ phương án sai",
      "Chọn ngay phương án dài nhất mà không cần đọc kỹ câu hỏi",
      "Đoán ngẫu nhiên vì các phương án đều tương tự nhau",
      "Bỏ qua câu hỏi này"
    ],
    similarCorrect: "Gạch chân từ khóa chính, đối chiếu định nghĩa sách giáo khoa và loại trừ phương án sai",
    steps: [
      {
        stepNumber: 1,
        title: "Bước 1: Xác định từ khóa cốt lõi",
        detail: `Đọc kỹ đề bài "${rawText}". Tìm xem câu hỏi đang hỏi về 'khái niệm', 'nguyên nhân', 'kết quả' hay 'biện pháp'.`
      },
      {
        stepNumber: 2,
        title: "Bước 2: Đối chiếu kiến thức chuẩn trong bài học",
        detail: explanation ? `Căn cứ vào kiến thức cốt lõi: ${explanation}` : "Nhớ lại bài học và các nguyên tắc đã được đóng khung trong sách giáo khoa."
      },
      {
        stepNumber: 3,
        title: "Bước 3: Phương pháp loại trừ phương án nhiễu",
        detail: "Loại bỏ các phương án có chứa từ ngữ cực đoan (chỉ luôn luôn, không bao giờ, duy nhất) hoặc trái ngược với thực tế khoa học."
      }
    ],
    tipForOriginal: `💡 Mẹo áp dụng cho câu của bạn: Đọc kỹ lại câu hỏi gốc, xác định thuật ngữ quan trọng nhất và loại bỏ các phương án không liên quan!`
  };
};
