export const INITIAL_TOWN = [
  {
    "id": 1,
    "title": "Ngôi nhà 1: Căn Nhà Gỗ",
    "rooms": [
      {
        "id": "1-math",
        "subject": "Toán",
        "title": "Căn bậc hai",
        "knowledge": "Căn bậc hai của số a không âm là x sao cho x² = a.",
        "completed": false,
        "questions": [
          {
            "id": "h1_m_q1",
            "type": "mcq",
            "text": "Tìm x biết √(2x - 1) = 3 (với x ≥ 0.5)?",
            "options": [
              "x = 2",
              "x = 3",
              "x = 4",
              "x = 5"
            ],
            "correct": "x = 5",
            "explanation": "Bình phương hai vế: 2x - 1 = 9 => 2x = 10 => x = 5"
          },
          {
            "id": "h1_m_q2",
            "type": "fill_blank",
            "text": "Rút gọn biểu thức: √( (√3 - 1)² ) + √( (√3 - 2)² ) = ...",
            "correct": "1",
            "explanation": "√( (√3 - 1)² ) = |√3 - 1| = √3 - 1. Và √( (√3 - 2)² ) = |√3 - 2| = 2 - √3. Cộng lại: (√3 - 1) + (2 - √3) = 1."
          },
          {
            "id": "h1_m_q3",
            "type": "true_false",
            "text": "Căn bậc hai số học của một số a dương luôn nhỏ hơn số a đó.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Sai",
            "explanation": "Ví dụ a = 0.25 (dương). Căn bậc hai số học của 0.25 là 0.5. Ta thấy 0.5 > 0.25. Nên khẳng định trên là Sai."
          },
          {
            "id": "1-math_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Căn bậc hai số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Toán."
          },
          {
            "id": "1-math_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Căn bậc hai là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-math_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Căn bậc hai: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-math_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Căn bậc hai.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-math_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Căn bậc hai số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Toán."
          },
          {
            "id": "1-math_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Căn bậc hai là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-math_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Căn bậc hai: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-lit",
        "subject": "Văn",
        "title": "Chuyện người con gái Nam Xương",
        "knowledge": "Phản ánh số phận bi kịch của người phụ nữ dưới chế độ phong kiến.",
        "completed": false,
        "questions": [
          {
            "id": "1-lit_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Chuyện người con gái Nam Xương là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-lit_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Chuyện người con gái Nam Xương: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-lit_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Chuyện người con gái Nam Xương.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-lit_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Chuyện người con gái Nam Xương số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Văn."
          },
          {
            "id": "1-lit_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Chuyện người con gái Nam Xương là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-lit_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Chuyện người con gái Nam Xương: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-lit_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Chuyện người con gái Nam Xương.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-lit_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Chuyện người con gái Nam Xương số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Văn."
          },
          {
            "id": "1-lit_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Chuyện người con gái Nam Xương là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-lit_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Chuyện người con gái Nam Xương: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-eng",
        "subject": "Anh",
        "title": "Unit 1: Local Environment",
        "knowledge": "Từ vựng về các làng nghề truyền thống và môi trường địa phương.",
        "completed": false,
        "questions": [
          {
            "id": "1-eng_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 1: Local Environment là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-eng_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 1: Local Environment: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-eng_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Unit 1: Local Environment.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-eng_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Unit 1: Local Environment số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Anh."
          },
          {
            "id": "1-eng_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 1: Local Environment là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-eng_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 1: Local Environment: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-eng_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Unit 1: Local Environment.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-eng_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Unit 1: Local Environment số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Anh."
          },
          {
            "id": "1-eng_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 1: Local Environment là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-eng_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 1: Local Environment: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-phys",
        "subject": "Vật lý",
        "title": "Định luật Ôm",
        "knowledge": "Cường độ dòng điện I tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R (I = U/R).",
        "completed": false,
        "questions": [
          {
            "id": "1-phys_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Định luật Ôm là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-phys_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Định luật Ôm: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-phys_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Định luật Ôm.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-phys_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Định luật Ôm số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Vật lý."
          },
          {
            "id": "1-phys_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Định luật Ôm là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-phys_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Định luật Ôm: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-phys_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Định luật Ôm.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-phys_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Định luật Ôm số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Vật lý."
          },
          {
            "id": "1-phys_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Định luật Ôm là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-phys_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Định luật Ôm: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-chem",
        "subject": "Hóa học",
        "title": "Tính chất của Oxit",
        "knowledge": "Oxit bazơ tác dụng với axit tạo muối & nước.",
        "completed": false,
        "questions": [
          {
            "id": "1-chem_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Oxit là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-chem_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Oxit: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-chem_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Tính chất của Oxit.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-chem_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Tính chất của Oxit số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Hóa học."
          },
          {
            "id": "1-chem_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Oxit là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-chem_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Oxit: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-chem_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Tính chất của Oxit.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-chem_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Tính chất của Oxit số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Hóa học."
          },
          {
            "id": "1-chem_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Oxit là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-chem_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Oxit: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-bio",
        "subject": "Sinh học",
        "title": "Di truyền học Menđen",
        "knowledge": "Lai một cặp tính trạng: F2 phân li theo tỉ lệ 3 trội : 1 lặn.",
        "completed": false,
        "questions": [
          {
            "id": "1-bio_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Di truyền học Menđen là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-bio_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Di truyền học Menđen: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-bio_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Di truyền học Menđen.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-bio_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Di truyền học Menđen số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sinh học."
          },
          {
            "id": "1-bio_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Di truyền học Menđen là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-bio_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Di truyền học Menđen: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-bio_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Di truyền học Menđen.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-bio_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Di truyền học Menđen số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sinh học."
          },
          {
            "id": "1-bio_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Di truyền học Menđen là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-bio_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Di truyền học Menđen: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-his",
        "subject": "Sử",
        "title": "Liên Xô & Đông Âu",
        "knowledge": "Công cuộc khôi phục kinh tế và xây dựng CNXH sau chiến tranh thế giới 2.",
        "completed": false,
        "questions": [
          {
            "id": "1-his_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Liên Xô & Đông Âu là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-his_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Liên Xô & Đông Âu: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-his_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Liên Xô & Đông Âu.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-his_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Liên Xô & Đông Âu số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sử."
          },
          {
            "id": "1-his_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Liên Xô & Đông Âu là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-his_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Liên Xô & Đông Âu: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-his_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Liên Xô & Đông Âu.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-his_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Liên Xô & Đông Âu số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sử."
          },
          {
            "id": "1-his_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Liên Xô & Đông Âu là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-his_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Liên Xô & Đông Âu: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "1-geo",
        "subject": "Địa",
        "title": "Dân tộc Việt Nam",
        "knowledge": "Việt Nam có 54 dân tộc, người Kinh chiếm đa số.",
        "completed": false,
        "questions": [
          {
            "id": "1-geo_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Dân tộc Việt Nam là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-geo_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Dân tộc Việt Nam: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-geo_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Dân tộc Việt Nam.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-geo_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Dân tộc Việt Nam số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Địa."
          },
          {
            "id": "1-geo_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Dân tộc Việt Nam là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-geo_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Dân tộc Việt Nam: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "1-geo_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Dân tộc Việt Nam.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "1-geo_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Dân tộc Việt Nam số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Địa."
          },
          {
            "id": "1-geo_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Dân tộc Việt Nam là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "1-geo_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Dân tộc Việt Nam: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Ngôi nhà 2: Biệt Thự",
    "rooms": [
      {
        "id": "2-math",
        "subject": "Toán",
        "title": "Hàm số bậc nhất",
        "knowledge": "Hàm số y = ax + b (a ≠ 0). Đồng biến khi a > 0.",
        "completed": false,
        "questions": [
          {
            "id": "2-math_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hàm số bậc nhất là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-math_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hàm số bậc nhất: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-math_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Hàm số bậc nhất.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-math_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Hàm số bậc nhất số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Toán."
          },
          {
            "id": "2-math_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hàm số bậc nhất là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-math_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hàm số bậc nhất: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-math_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Hàm số bậc nhất.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-math_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Hàm số bậc nhất số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Toán."
          },
          {
            "id": "2-math_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hàm số bậc nhất là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-math_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hàm số bậc nhất: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-lit",
        "subject": "Văn",
        "title": "Hoàng Lê nhất thống chí",
        "knowledge": "Tái hiện chân thực hình ảnh người anh hùng Nguyễn Huệ.",
        "completed": false,
        "questions": [
          {
            "id": "2-lit_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hoàng Lê nhất thống chí là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-lit_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hoàng Lê nhất thống chí: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-lit_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Hoàng Lê nhất thống chí.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-lit_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Hoàng Lê nhất thống chí số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Văn."
          },
          {
            "id": "2-lit_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hoàng Lê nhất thống chí là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-lit_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hoàng Lê nhất thống chí: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-lit_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Hoàng Lê nhất thống chí.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-lit_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Hoàng Lê nhất thống chí số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Văn."
          },
          {
            "id": "2-lit_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hoàng Lê nhất thống chí là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-lit_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hoàng Lê nhất thống chí: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-eng",
        "subject": "Anh",
        "title": "Unit 2: City Life",
        "knowledge": "Các tính từ miêu tả cuộc sống thành thị và ngữ pháp so sánh kép.",
        "completed": false,
        "questions": [
          {
            "id": "2-eng_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 2: City Life là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-eng_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 2: City Life: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-eng_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Unit 2: City Life.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-eng_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Unit 2: City Life số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Anh."
          },
          {
            "id": "2-eng_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 2: City Life là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-eng_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 2: City Life: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-eng_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Unit 2: City Life.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-eng_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Unit 2: City Life số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Anh."
          },
          {
            "id": "2-eng_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 2: City Life là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-eng_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 2: City Life: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-phys",
        "subject": "Vật lý",
        "title": "Đoạn mạch nối tiếp",
        "knowledge": "I = I1 = I2, U = U1 + U2, R = R1 + R2",
        "completed": false,
        "questions": [
          {
            "id": "2-phys_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Đoạn mạch nối tiếp là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-phys_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Đoạn mạch nối tiếp: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-phys_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Đoạn mạch nối tiếp.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-phys_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Đoạn mạch nối tiếp số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Vật lý."
          },
          {
            "id": "2-phys_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Đoạn mạch nối tiếp là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-phys_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Đoạn mạch nối tiếp: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-phys_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Đoạn mạch nối tiếp.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-phys_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Đoạn mạch nối tiếp số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Vật lý."
          },
          {
            "id": "2-phys_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Đoạn mạch nối tiếp là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-phys_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Đoạn mạch nối tiếp: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-chem",
        "subject": "Hóa học",
        "title": "Tính chất của Axit",
        "knowledge": "Làm quỳ tím hóa đỏ, tác dụng với kim loại giải phóng H2.",
        "completed": false,
        "questions": [
          {
            "id": "2-chem_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Axit là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-chem_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Axit: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-chem_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Tính chất của Axit.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-chem_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Tính chất của Axit số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Hóa học."
          },
          {
            "id": "2-chem_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Axit là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-chem_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Axit: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-chem_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Tính chất của Axit.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-chem_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Tính chất của Axit số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Hóa học."
          },
          {
            "id": "2-chem_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Axit là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-chem_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Axit: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-bio",
        "subject": "Sinh học",
        "title": "Nhiễm sắc thể",
        "knowledge": "Cấu trúc mang gen, có bản chất là ADN kết hợp prôtêin.",
        "completed": false,
        "questions": [
          {
            "id": "2-bio_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nhiễm sắc thể là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-bio_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nhiễm sắc thể: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-bio_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Nhiễm sắc thể.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-bio_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Nhiễm sắc thể số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sinh học."
          },
          {
            "id": "2-bio_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nhiễm sắc thể là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-bio_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nhiễm sắc thể: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-bio_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Nhiễm sắc thể.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-bio_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Nhiễm sắc thể số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sinh học."
          },
          {
            "id": "2-bio_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nhiễm sắc thể là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-bio_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nhiễm sắc thể: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-his",
        "subject": "Sử",
        "title": "Các nước Á, Phi, Mĩ Latinh",
        "knowledge": "Phong trào giải phóng dân tộc bùng nổ mạnh mẽ.",
        "completed": false,
        "questions": [
          {
            "id": "2-his_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Các nước Á, Phi, Mĩ Latinh là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-his_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Các nước Á, Phi, Mĩ Latinh: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-his_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Các nước Á, Phi, Mĩ Latinh.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-his_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Các nước Á, Phi, Mĩ Latinh số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sử."
          },
          {
            "id": "2-his_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Các nước Á, Phi, Mĩ Latinh là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-his_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Các nước Á, Phi, Mĩ Latinh: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-his_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Các nước Á, Phi, Mĩ Latinh.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-his_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Các nước Á, Phi, Mĩ Latinh số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sử."
          },
          {
            "id": "2-his_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Các nước Á, Phi, Mĩ Latinh là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-his_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Các nước Á, Phi, Mĩ Latinh: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "2-geo",
        "subject": "Địa",
        "title": "Dân cư và nguồn lao động",
        "knowledge": "Nguồn lao động dồi dào, tăng nhanh, cần nhiều việc làm.",
        "completed": false,
        "questions": [
          {
            "id": "2-geo_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Dân cư và nguồn lao động là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-geo_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Dân cư và nguồn lao động: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-geo_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Dân cư và nguồn lao động.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-geo_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Dân cư và nguồn lao động số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Địa."
          },
          {
            "id": "2-geo_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Dân cư và nguồn lao động là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-geo_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Dân cư và nguồn lao động: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "2-geo_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Dân cư và nguồn lao động.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "2-geo_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Dân cư và nguồn lao động số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Địa."
          },
          {
            "id": "2-geo_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Dân cư và nguồn lao động là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "2-geo_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Dân cư và nguồn lao động: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Ngôi nhà 3: Lâu Đài",
    "rooms": [
      {
        "id": "3-math",
        "subject": "Toán",
        "title": "Hệ phương trình bậc nhất 2 ẩn",
        "knowledge": "Sử dụng phương pháp thế hoặc cộng đại số để giải.",
        "completed": false,
        "questions": [
          {
            "id": "3-math_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hệ phương trình bậc nhất 2 ẩn là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-math_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hệ phương trình bậc nhất 2 ẩn: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-math_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Hệ phương trình bậc nhất 2 ẩn.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-math_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Hệ phương trình bậc nhất 2 ẩn số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Toán."
          },
          {
            "id": "3-math_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hệ phương trình bậc nhất 2 ẩn là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-math_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hệ phương trình bậc nhất 2 ẩn: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-math_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Hệ phương trình bậc nhất 2 ẩn.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-math_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Hệ phương trình bậc nhất 2 ẩn số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Toán."
          },
          {
            "id": "3-math_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Hệ phương trình bậc nhất 2 ẩn là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-math_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Hệ phương trình bậc nhất 2 ẩn: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-lit",
        "subject": "Văn",
        "title": "Truyện Kiều",
        "knowledge": "Đỉnh cao của văn học trung đại Việt Nam do Nguyễn Du sáng tác.",
        "completed": false,
        "questions": [
          {
            "id": "3-lit_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Truyện Kiều là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-lit_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Truyện Kiều: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-lit_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Truyện Kiều.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-lit_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Truyện Kiều số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Văn."
          },
          {
            "id": "3-lit_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Truyện Kiều là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-lit_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Truyện Kiều: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-lit_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Truyện Kiều.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-lit_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Truyện Kiều số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Văn."
          },
          {
            "id": "3-lit_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Truyện Kiều là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-lit_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Truyện Kiều: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-eng",
        "subject": "Anh",
        "title": "Unit 3: Teen stress",
        "knowledge": "Các kĩ năng ứng phó với áp lực tuổi vị thành niên.",
        "completed": false,
        "questions": [
          {
            "id": "3-eng_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 3: Teen stress là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-eng_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 3: Teen stress: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-eng_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Unit 3: Teen stress.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-eng_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Unit 3: Teen stress số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Anh."
          },
          {
            "id": "3-eng_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 3: Teen stress là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-eng_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 3: Teen stress: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-eng_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Unit 3: Teen stress.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-eng_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Unit 3: Teen stress số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Anh."
          },
          {
            "id": "3-eng_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Unit 3: Teen stress là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-eng_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Unit 3: Teen stress: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-phys",
        "subject": "Vật lý",
        "title": "Đoạn mạch song song",
        "knowledge": "U = U1 = U2, I = I1 + I2, 1/R = 1/R1 + 1/R2",
        "completed": false,
        "questions": [
          {
            "id": "3-phys_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Đoạn mạch song song là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-phys_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Đoạn mạch song song: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-phys_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Đoạn mạch song song.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-phys_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Đoạn mạch song song số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Vật lý."
          },
          {
            "id": "3-phys_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Đoạn mạch song song là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-phys_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Đoạn mạch song song: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-phys_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Đoạn mạch song song.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-phys_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Đoạn mạch song song số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Vật lý."
          },
          {
            "id": "3-phys_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Đoạn mạch song song là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-phys_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Đoạn mạch song song: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-chem",
        "subject": "Hóa học",
        "title": "Tính chất của Bazơ",
        "knowledge": "Làm quỳ tím hóa xanh, phenolphtalein hóa hồng.",
        "completed": false,
        "questions": [
          {
            "id": "3-chem_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Bazơ là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-chem_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Bazơ: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-chem_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Tính chất của Bazơ.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-chem_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Tính chất của Bazơ số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Hóa học."
          },
          {
            "id": "3-chem_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Bazơ là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-chem_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Bazơ: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-chem_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Tính chất của Bazơ.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-chem_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Tính chất của Bazơ số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Hóa học."
          },
          {
            "id": "3-chem_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Tính chất của Bazơ là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-chem_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Tính chất của Bazơ: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-bio",
        "subject": "Sinh học",
        "title": "ADN và bản chất gen",
        "knowledge": "Cấu trúc xoắn kép, nguyên tắc bổ sung A-T, G-X.",
        "completed": false,
        "questions": [
          {
            "id": "3-bio_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về ADN và bản chất gen là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-bio_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến ADN và bản chất gen: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-bio_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề ADN và bản chất gen.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-bio_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về ADN và bản chất gen số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sinh học."
          },
          {
            "id": "3-bio_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về ADN và bản chất gen là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-bio_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến ADN và bản chất gen: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-bio_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề ADN và bản chất gen.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-bio_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về ADN và bản chất gen số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sinh học."
          },
          {
            "id": "3-bio_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về ADN và bản chất gen là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-bio_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến ADN và bản chất gen: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-his",
        "subject": "Sử",
        "title": "Nước Mĩ sau CTTG 2",
        "knowledge": "Sự vươn lên thành siêu cường kinh tế số 1 thế giới.",
        "completed": false,
        "questions": [
          {
            "id": "3-his_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nước Mĩ sau CTTG 2 là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-his_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nước Mĩ sau CTTG 2: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-his_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Nước Mĩ sau CTTG 2.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-his_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Nước Mĩ sau CTTG 2 số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sử."
          },
          {
            "id": "3-his_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nước Mĩ sau CTTG 2 là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-his_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nước Mĩ sau CTTG 2: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-his_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Nước Mĩ sau CTTG 2.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-his_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Nước Mĩ sau CTTG 2 số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Sử."
          },
          {
            "id": "3-his_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nước Mĩ sau CTTG 2 là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-his_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nước Mĩ sau CTTG 2: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      },
      {
        "id": "3-geo",
        "subject": "Địa",
        "title": "Nông nghiệp Việt Nam",
        "knowledge": "Chuyển dịch cơ cấu cây trồng, ứng dụng công nghệ cao.",
        "completed": false,
        "questions": [
          {
            "id": "3-geo_q1",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nông nghiệp Việt Nam là Đúng hay Sai: Mở rộng kiến thức thực tế 1.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-geo_q2",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nông nghiệp Việt Nam: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-geo_q3",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 3 thuộc chuyên đề Nông nghiệp Việt Nam.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-geo_q4",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Nông nghiệp Việt Nam số 4?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Địa."
          },
          {
            "id": "3-geo_q5",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nông nghiệp Việt Nam là Đúng hay Sai: Mở rộng kiến thức thực tế 5.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-geo_q6",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nông nghiệp Việt Nam: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          },
          {
            "id": "3-geo_q7",
            "type": "essay",
            "text": "Bài tập tự luận nâng cao: Hãy phân tích sâu về vấn đề 7 thuộc chuyên đề Nông nghiệp Việt Nam.",
            "correct": "Gợi ý: Cần lập luận chặt chẽ, đưa ra dẫn chứng từ nhiều nguồn thực tế.",
            "explanation": "Giải thích: Yêu cầu khả năng tổng hợp và tư duy phản biện."
          },
          {
            "id": "3-geo_q8",
            "type": "mcq",
            "text": "[Nâng cao] Câu hỏi trắc nghiệm về Nông nghiệp Việt Nam số 8?",
            "options": [
              "Phương án A",
              "Phương án B",
              "Phương án C",
              "Phương án D"
            ],
            "correct": "Phương án A",
            "explanation": "Giải thích: Câu hỏi yêu cầu vận dụng cao kiến thức Địa."
          },
          {
            "id": "3-geo_q9",
            "type": "true_false",
            "text": "[Vận dụng] Nhận định sau về Nông nghiệp Việt Nam là Đúng hay Sai: Mở rộng kiến thức thực tế 9.",
            "options": [
              "Đúng",
              "Sai"
            ],
            "correct": "Đúng",
            "explanation": "Giải thích: Nhận định này mang tính chất suy luận logic."
          },
          {
            "id": "3-geo_q10",
            "type": "fill_blank",
            "text": "Điền từ thích hợp vào chỗ trống (nâng cao) liên quan đến Nông nghiệp Việt Nam: ... là chìa khóa.",
            "correct": "Đáp án",
            "explanation": "Giải thích: Cần đọc kỹ ngữ cảnh để tìm ra từ còn thiếu."
          }
        ]
      }
    ]
  }
];