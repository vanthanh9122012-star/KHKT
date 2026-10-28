import React, { useState, useEffect, useRef } from 'react';
import { 
  Trophy, Clock, Star, Medal, Users, AlertCircle, CheckCircle2, 
  ChevronRight, Swords, Zap, Snowflake, Shield, Sparkles, Brain, Cpu, Flame, Eye, RefreshCw, Award
} from 'lucide-react';
import { QUIZ_DATA } from './data/quizData';

const BOT_NAMES = [
  "Bảo Nam", "Hải Đăng", "Gia Bảo", "Khôi Nguyên", "Minh Khang", 
  "Thảo Phương", "Bích Ngọc", "Quỳnh Anh", "Diệp Chi", "Mai Lan",
  "Trọng Tấn", "Đức Huy", "Hoàng Việt", "Nhật Minh", "Thanh Hải",
  "Nguyệt Minh", "Thu Trà", "Trúc Đào", "Hương Ly"
];

// Combine all questions from quizData and generate options for fill_blank
const RAW_QUESTIONS = QUIZ_DATA.reduce((acc, qz) => [...acc, ...qz.questions.map(q => ({...q, subject: qz.subject}))], []);

const ALL_QUESTIONS = RAW_QUESTIONS.map(q => {
  if (!q.options || q.options.length < 2) {
    let subjectPool = RAW_QUESTIONS
      .filter(other => other.subject === q.subject && other.correct && other.correct !== q.correct)
      .map(other => other.correct);
    
    // Deduplicate
    subjectPool = [...new Set(subjectPool)];
    
    let options = [q.correct];
    for (let i = 0; i < 3; i++) {
      if (subjectPool.length > 0) {
         const randIdx = Math.floor(Math.random() * subjectPool.length);
         options.push(subjectPool[randIdx]);
         subjectPool.splice(randIdx, 1);
      } else {
         options.push('Phương án nhiễu ' + (i+1));
      }
    }
    options.sort(() => 0.5 - Math.random());
    return { ...q, options };
  }
  return q;
});

// Support Card Definitions
const CARD_DEFINITIONS = {
  double_score: {
    id: 'double_score',
    name: 'Nhân Đôi Điểm',
    icon: Zap,
    symbol: '⚡',
    gradient: 'from-amber-400 to-orange-500',
    border: 'border-amber-400',
    bgBadge: 'bg-amber-100 text-amber-800',
    description: 'Nhân x2 toàn bộ điểm số ghi được ở câu hỏi này!',
    toast: '⚡ Đã kích hoạt Nhân Đôi Điểm!'
  },
  freeze_bots: {
    id: 'freeze_bots',
    name: 'Đóng Băng Đối Thủ',
    icon: Snowflake,
    symbol: '❄️',
    gradient: 'from-cyan-400 to-blue-500',
    border: 'border-cyan-400',
    bgBadge: 'bg-cyan-100 text-cyan-800',
    description: 'Đóng băng mọi đối thủ trong 3 giây! Làm chậm giải thuật và giảm 50% điểm số bot!',
    toast: '❄️ Đã đóng băng tất cả đối thủ trong 3 giây!'
  },
  shield: {
    id: 'shield',
    name: 'Khiên Bảo Vệ',
    icon: Shield,
    symbol: '🛡️',
    gradient: 'from-emerald-400 to-teal-500',
    border: 'border-emerald-400',
    bgBadge: 'bg-emerald-100 text-emerald-800',
    description: 'Bảo vệ bạn nếu trả lời sai hoặc hết giờ, không bị phạt điểm và bảo toàn chuỗi thắng!',
    toast: '🛡️ Khiên bảo hộ đã sẵn sàng!'
  },
  extra_time: {
    id: 'extra_time',
    name: '+5 Giây Thời Gian',
    icon: Clock,
    symbol: '⏳',
    gradient: 'from-purple-400 to-indigo-500',
    border: 'border-purple-400',
    bgBadge: 'bg-purple-100 text-purple-800',
    description: 'Lập tức cộng thêm +5 giây quý giá vào đồng hồ đếm ngược!',
    toast: '⏳ Đã cộng thêm +5 giây thời gian!'
  },
  fifty_fifty: {
    id: 'fifty_fifty',
    name: 'Kính Lúp 50/50',
    icon: Eye,
    symbol: '🎯',
    gradient: 'from-rose-400 to-pink-500',
    border: 'border-rose-400',
    bgBadge: 'bg-rose-100 text-rose-800',
    description: 'Lập tức loại bỏ 2 phương án sai, giúp bạn dễ dàng chọn phương án tối ưu!',
    toast: '🎯 Đã loại bỏ 2 đáp án sai!'
  }
};

const CARD_KEYS = Object.keys(CARD_DEFINITIONS);

// High-Order Reasoning Challenges for Final Round (Round 5: Siêu AI Challenge)
const AI_CHALLENGES = [
  {
    id: 'ai_iss_life_support',
    field: 'KHTN - Hóa Học & Vật Lý Không Gian',
    difficulty: 'Tư Duy Bậc Cao (Cực Đại)',
    title: 'Cân Bằng Sinh Mệnh Trạm Vũ Trụ ISS',
    scenario: 'Trạm không gian liên hành tinh gặp sự cố rò rỉ khí quyển nghiêm trọng. Để duy trì sự sống cho phi hành đoàn 4 người trong 48 giờ, Siêu AI yêu cầu cân bằng giữa phản ứng hấp thụ CO2 bằng Kali Superoxit (4KO2 + 2CO2 → 2K2CO3 + 3O2) và hệ thống điện phân nước (2H2O → 2H2 + O2). Mỗi phi hành gia tiêu thụ 550 lít O2/ngày và thải ra 450 lít CO2/ngày. Giao thức điều phối năng lượng nào sau đây đảm bảo nồng độ khí thở cân bằng tối ưu với mức hao phí điện phân thấp nhất?',
    options: [
      'A. Vận hành KO2 xử lý 1200L CO2/ngày (sinh 1800L O2), điện phân nước bổ sung 400L O2/ngày và dùng màng lọc nano tái sinh xử lý 600L CO2 còn lại.',
      'B. Sử dụng 100% dung lượng pin trạm chỉ để điện phân nước tạo O2, xả toàn bộ khí CO2 trực tiếp ra chân không ngoài vũ trụ.',
      'C. Vận hành KO2 ở 100% công suất để tạo ra 2700L O2 dư thừa và đốt cháy phần khí thừa bằng phản ứng nhiệt nhôm.',
      'D. Khóa toàn bộ van lưu thông khí và hạ nhiệt độ khoang lái xuống 0°C để ngừng hoàn toàn quá trình hô hấp tế bào.'
    ],
    correct: 'A. Vận hành KO2 xử lý 1200L CO2/ngày (sinh 1800L O2), điện phân nước bổ sung 400L O2/ngày và dùng màng lọc nano tái sinh xử lý 600L CO2 còn lại.',
    explanation: 'Tổng CO2 cần xử lý: 4 × 450 = 1800L/ngày; Tổng O2 cần: 4 × 550 = 2200L/ngày. Nếu dùng 100% KO2 sẽ sinh ra 1800 × 1.5 = 2700L O2 (quá nồng độ an toàn gây nguy cơ cháy nổ oxy cao áp). Phương án A tối ưu hóa điều tiết KO2 ở mức an toàn, bù đắp chính xác phần O2 thiếu hụt bằng điện phân nước và lọc phần CO2 còn lại.'
  },
  {
    id: 'ai_quantum_encryption',
    field: 'Toán Học - Lý Thuyết Số & Cấu Tạo Hóa Học',
    difficulty: 'Tư Duy Bậc Cao (Cực Đại)',
    title: 'Giải Mã Khóa Lượng Tử Ma Trận Ba Lớp',
    scenario: 'Hệ thống tường lửa Siêu AI đang bị mã độc khóa chặt. Để khởi động lại hệ thống, bạn cần giải mã Khóa Lượng Tử 3 Tầng: Tầng 1 là Số nguyên tố thứ 7 trong tập hợp N*. Tầng 2 là Tổng các góc trong của một hình Bát giác lồi đều (n=8). Tầng 3 là Nguyên tử khối của nguyên tố phi kim có cấu hình electron [Ne] 3s² 3p⁴ (Lưu huỳnh). Mã kích hoạt bí mật tuân theo thuật toán: Mã PIN = (Tầng 1 × Tầng 3) + Tầng 2. Hãy xác định mã PIN chính xác?',
    options: [
      'A. Mã PIN: 1624 — Cấu trúc tính toán: (17 × 32) + 1080 = 544 + 1080 = 1624',
      'B. Mã PIN: 1480 — Số nguyên tố thứ 7 lấy là 13 và góc bát giác tính sai thành 720°',
      'C. Mã PIN: 1735 — Nguyên tử khối tầng 3 nhầm sang Photpho (P = 31)',
      'D. Mã PIN: 1544 — Quên không cộng thêm giá trị tổng góc bát giác ở tầng 2'
    ],
    correct: 'A. Mã PIN: 1624 — Cấu trúc tính toán: (17 × 32) + 1080 = 544 + 1080 = 1624',
    explanation: 'Dãy số nguyên tố: 2, 3, 5, 7, 11, 13, 17 (số thứ 7 là 17). Tổng các góc hình bát giác đều: (8 - 2) × 180° = 1080°. Cấu hình [Ne] 3s² 3p⁴ có Z = 16 (Lưu huỳnh S), nguyên tử khối = 32. Vậy: (17 × 32) + 1080 = 544 + 1080 = 1624.'
  },
  {
    id: 'ai_smart_grid_logistics',
    field: 'Toán Rời Rạc & Tối Ưu Hóa Chi Phí Lưới Điện',
    difficulty: 'Tư Duy Bậc Cao (Cực Đại)',
    title: 'Định Tuyến Năng Lượng Tái Tạo Siêu Đô Thị',
    scenario: 'Một siêu đô thị thông minh cần truyền tải điện từ 3 trạm phát (Mặt trời: 100MW, Gió: 60MW, Thủy điện: 140MW) đến 2 trung tâm AI: Khu A (nhu cầu 150MW) và Khu B (nhu cầu 150MW). Chi phí truyền dẫn siêu dẫn (triệu USD/MW) lần lượt là: Mặt trời→A: $2, Mặt trời→B: $4; Gió→A: $3, Gió→B: $1; Thủy điện→A: $4, Thủy điện→B: $2. Thuật toán phân bổ nào đạt chi phí vận hành thấp nhất mà không gây quá tải lưới?',
    options: [
      'A. Gió cấp 60MW cho B ($60); Mặt trời cấp 100MW cho A ($200); Thủy điện cấp 50MW cho A ($200) và 90MW cho B ($180). Tổng chi phí cực tiểu = $640 triệu USD.',
      'B. Mặt trời chia đều 50MW cho A và 50MW cho B; Thủy điện dồn hết cho A; Gió cấp cho B. Tổng chi phí = $850 triệu USD.',
      'C. Thủy điện cấp 140MW cho B; Gió cấp 10MW cho B và 50MW cho A; Mặt trời cấp 100MW cho A. Tổng chi phí = $780 triệu USD.',
      'D. Chia đều mỗi trạm 50% công suất sang cả 2 khu A và B. Tổng chi phí = $890 triệu USD.'
    ],
    correct: 'A. Gió cấp 60MW cho B ($60); Mặt trời cấp 100MW cho A ($200); Thủy điện cấp 50MW cho A ($200) và 90MW cho B ($180). Tổng chi phí cực tiểu = $640 triệu USD.',
    explanation: 'Theo thuật toán cước phí cực tiểu (Least Cost Method): Tuyến Gió→B rẻ nhất ($1/MW) nên ưu tiên cấp hết 60MW cho B. Tuyến Mặt trời→A rẻ thứ nhì ($2/MW) nên cấp hết 100MW cho A. Thủy điện còn 140MW bù vào phần thiếu: 50MW cho A ($4/MW) và 90MW cho B ($2/MW). Tổng chi phí tối ưu = (60×1) + (100×2) + (50×4) + (90×2) = 60 + 200 + 200 + 180 = $640 triệu USD.'
  },
  {
    id: 'ai_crispr_base_editing',
    field: 'KHTN - Công Nghệ Sinh Học & Di Truyền Học',
    difficulty: 'Tư Duy Bậc Cao (Cực Đại)',
    title: 'Khôi Phục Chuỗi Polypeptide Kháng Thể Đột Biến',
    scenario: 'Một chủng vi khuẩn biến đổi gen sản xuất enzyme kháng thể sinh học bị đột biến thay thế nucleotide ở codon thứ 30 trên phân tử mRNA: bộ ba UAU (mã hóa Tyrosine) biến thành bộ ba vô nghĩa UAG (mã kết thúc - Stop codon). Đột biến này làm gián đoạn chuỗi polypeptide khiến sản phẩm mất hoạt tính. Giải pháp công nghệ sinh học phân tử tối ưu nào sau đây được Siêu AI khuyến nghị để khôi phục cấu trúc protein mà không cắt đứt mạch đôi DNA?',
    options: [
      'A. Sử dụng kỹ thuật Chỉnh sửa Base (Base Editing - CRISPR/Cas deaminase) để chuyển đổi G → U tại vị trí nucleotide thứ 3 của codon 30, khôi phục UAG thành UAU.',
      'B. Thêm kháng sinh liều cực cao vào môi trường nuôi cấy để ức chế tiểu đơn vị ribosome 30S.',
      'C. Chiếu tia phóng xạ gamma toàn phần để kích thích vi khuẩn tự sửa chữa ngẫu nhiên.',
      'D. Hạ nhiệt độ môi trường nuôi cấy xuống -10°C để ép ribosome bỏ qua mã Stop codon.'
    ],
    correct: 'A. Sử dụng kỹ thuật Chỉnh sửa Base (Base Editing - CRISPR/Cas deaminase) để chuyển đổi G → U tại vị trí nucleotide thứ 3 của codon 30, khôi phục UAG thành UAU.',
    explanation: 'Codon UAG là một trong 3 mã kết thúc dịch mã (Amber codon). Kỹ thuật Base Editing cho phép chuyển đổi chuẩn xác nucleotide đơn lẻ (G thành U) mà không gây đứt gãy mạch đôi DNA (DSB), giúp phục hồi hoàn toàn axit amin Tyrosine ban đầu mà không gây đột biến ngoài mục tiêu (off-target).'
  },
  {
    id: 'ai_laser_space_telecom',
    field: 'Vật Lý Laser & Truyền Dẫn Quang Học Vũ Trụ',
    difficulty: 'Tư Duy Bậc Cao (Cực Đại)',
    title: 'Tối Ưu Hóa Kênh Truyền Laser Địa Tĩnh 36.000km',
    scenario: 'Để truyền gói dữ liệu 100 Petabyte từ trạm mặt đất lên vệ tinh địa tĩnh ở khoảng cách 36.000 km, trạm sử dụng chùm tia laser bước sóng λ = 1550 nm với khẩu độ kính phát D = 1.0 m. Góc nhiễu xạ phân kỳ là θ = 1.22 (λ/D). Giải pháp công nghệ nào sau đây giúp kiểm soát kích thước vết sáng và thu nhận tối đa tín hiệu xuyên qua lớp khí quyển nhiễu loạn?',
    options: [
      'A. Đường kính vết sáng đạt ~88 mét; Sử dụng hệ thống Quang học thích ứng (Adaptive Optics) kết hợp bước sóng hồng ngoại 1550 nm để khử méo pha do khí quyển.',
      'B. Chùm tia laser truyền trong chân không có góc tán xạ bằng 0, không cần bất kỳ bộ hiệu chỉnh nào.',
      'C. Đường kính vết sáng đạt ~15 km; Phủ lớp gương phản xạ toàn phần trên mặt đất để thu hồi ánh sáng tán xạ.',
      'D. Chuyển sang dùng tia tử ngoại bước sóng ngắn để tăng hiện tượng tán xạ Rayleigh trong sương mù.'
    ],
    correct: 'A. Đường kính vết sáng đạt ~88 mét; Sử dụng hệ thống Quang học thích ứng (Adaptive Optics) kết hợp bước sóng hồng ngoại 1550 nm để khử méo pha do khí quyển.',
    explanation: 'Góc phân kỳ θ = 1.22 × (1550 × 10^-9 / 1.0) ≈ 1.89 × 10^-6 rad. Ở khoảng cách R = 36.000 km, bán kính vệt sáng r ≈ R × (θ/2) ≈ 44 m -> đường kính vệt sáng ≈ 88 m. Bước sóng 1550 nm có độ xuyên thấu khí quyển cao, kết hợp Quang học thích ứng (Adaptive Optics) giúp bù trừ biến dạng sóng ánh sáng do nhiệt độ và gió trong khí quyển.'
  },
  {
    id: 'ai_haber_green_ammonia',
    field: 'Hóa Học Vô Cơ & Nhiệt Động Lực Học Xúc Tác',
    difficulty: 'Tư Duy Bậc Cao (Cực Đại)',
    title: 'Quy Trình Xúc Tác Tổng Hợp Amoniac Xanh',
    scenario: 'Trong hệ thống tổng hợp Amoniac xanh (NH3) theo phản ứng thuận nghịch: N2(k) + 3H2(k) ⇌ 2NH3(k) (ΔH = -92 kJ/mol). Để đạt độ chuyển hóa tối ưu trong công nghiệp với chi phí năng lượng gia nhiệt và nén áp suất thấp nhất, Siêu AI điều khiển quy trình theo thông số kỹ thuật nào?',
    options: [
      'A. Duy trì áp suất 150-200 atm, nhiệt độ tối ưu 400-450°C với xúc tác Fe biến tính (Fe/K2O/Al2O3), đồng thời liên tục ngưng tụ tách NH3 lỏng và tuần hoàn hỗn hợp khí N2, H2.',
      'B. Đẩy nhiệt độ lên 1200°C và giảm áp suất về 1 atm để phản ứng diễn ra tự phát theo chiều thuận.',
      'C. Làm lạnh hệ thống về 0°C và không dùng chất xúc tác để dịch chuyển cân bằng hoàn toàn sang phía NH3.',
      'D. Bổ sung khí trơ Argon nồng độ cao vào buồng phản ứng để làm chậm sự phân hủy của amoniac.'
    ],
    correct: 'A. Duy trì áp suất 150-200 atm, nhiệt độ tối ưu 400-450°C với xúc tác Fe biến tính (Fe/K2O/Al2O3), đồng thời liên tục ngưng tụ tách NH3 lỏng và tuần hoàn hỗn hợp khí N2, H2.',
    explanation: 'Phản ứng tỏa nhiệt (ΔH < 0) và giảm thể tích khí (4 mol khí → 2 mol khí). Nhiệt độ 400-450°C là mức thỏa hiệp tối ưu giữa tốc độ phản ứng xúc tác và vị trí cân bằng hóa học. Việc liên tục ngưng tụ tách NH3 lỏng làm giảm nồng độ sản phẩm, liên tục kéo cân bằng dịch chuyển sang chiều thuận theo nguyên lý Le Chatelier.'
  }
];

const TournamentManager = ({ addReward, currentUser }) => {
  const [stage, setStage] = useState('lobby'); // lobby, playing, roundResult, aiChallenge, tournamentEnd
  const [round, setRound] = useState(1);
  const [participants, setParticipants] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [roundScore, setRoundScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Support Cards & Buffs System
  const [playerCards, setPlayerCards] = useState({
    double_score: 1, // 1 starter card
    freeze_bots: 0,
    shield: 0,
    extra_time: 0,
    fifty_fifty: 0
  });
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [activeBuffs, setActiveBuffs] = useState({
    doubleScore: false,
    freezeBots: false,
    shield: false
  });
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [earnedCardModal, setEarnedCardModal] = useState(null);

  // Round 5 Siêu AI Challenge States
  const [aiChallengeQ, setAiChallengeQ] = useState(null);
  const [botAProgress, setBotAProgress] = useState(0);
  const [botBProgress, setBotBProgress] = useState(0);
  const [aiPlayerStatus, setAiPlayerStatus] = useState('solving'); // solving, correct, wrong
  const [aiWinner, setAiWinner] = useState(null);
  const [botFreezeRemaining, setBotFreezeRemaining] = useState(0);

  const ROUND_NAMES = [
    "Sơ lọc (Top 20 → 12)", 
    "Tuyển chọn (Top 12 → 8)", 
    "Tứ kết (Top 8 → 5)", 
    "Bán kết (Top 5 → 3)", 
    "Chung kết: Siêu AI Challenge"
  ];
  const ADVANCE_COUNTS = [12, 8, 5, 3, 1]; // R4 advances Top 3 to Round 5

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const startTournament = () => {
    const initialParticipants = BOT_NAMES.map((name, i) => ({
      id: `bot_${i}`,
      name: name,
      isBot: true,
      score: 0,
      totalScore: 0
    }));
    initialParticipants.push({
      id: 'player',
      name: currentUser?.username || 'Bạn',
      isBot: false,
      score: 0,
      totalScore: 0
    });

    // Provide 1 random starter card to introduce the card mechanics!
    const randomStarter = CARD_KEYS[Math.floor(Math.random() * CARD_KEYS.length)];
    setPlayerCards({
      double_score: 0,
      freeze_bots: 0,
      shield: 0,
      extra_time: 0,
      fifty_fifty: 0,
      [randomStarter]: 1
    });

    setCorrectAnswerCount(0);
    setActiveBuffs({ doubleScore: false, freezeBots: false, shield: false });
    setEliminatedOptions([]);
    setParticipants(initialParticipants);
    setRound(1);
    startRound(1, initialParticipants);
  };

  const startRound = (r, currentPlayers) => {
    setStage('playing');
    setRoundScore(0);
    setCurrentQIndex(0);
    setHasAnswered(false);
    setSelectedAnswer(null);
    setTimeLeft(10);
    setActiveBuffs({ doubleScore: false, freezeBots: false, shield: false });
    setEliminatedOptions([]);

    // Pick 3 random questions for the round
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 3));
  };

  // Card Activation Handlers
  const activateCard = (cardId) => {
    if ((playerCards[cardId] || 0) <= 0 || hasAnswered) return;

    // Deduct 1 card
    setPlayerCards(prev => ({
      ...prev,
      [cardId]: Math.max(0, (prev[cardId] || 0) - 1)
    }));

    const card = CARD_DEFINITIONS[cardId];
    showToast(card.toast);

    if (cardId === 'double_score') {
      setActiveBuffs(prev => ({ ...prev, doubleScore: true }));
    } else if (cardId === 'freeze_bots') {
      setActiveBuffs(prev => ({ ...prev, freezeBots: true }));
      setBotFreezeRemaining(3);
    } else if (cardId === 'shield') {
      setActiveBuffs(prev => ({ ...prev, shield: true }));
    } else if (cardId === 'extra_time') {
      setTimeLeft(prev => prev + 5);
    } else if (cardId === 'fifty_fifty') {
      const curQ = stage === 'aiChallenge' ? aiChallengeQ : currentQuestions[currentQIndex];
      if (curQ && curQ.options) {
        const wrongOpts = curQ.options.filter(opt => opt !== curQ.correct);
        const shuffledWrongs = [...wrongOpts].sort(() => 0.5 - Math.random());
        setEliminatedOptions(shuffledWrongs.slice(0, 2));
      }
    }
  };

  // Timer for Standard Playing (Rounds 1-4)
  useEffect(() => {
    let timer;
    if (stage === 'playing' && timeLeft > 0 && !hasAnswered) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (stage === 'playing' && timeLeft === 0 && !hasAnswered) {
      handleAnswer(null); // Timeout
    }
    return () => clearTimeout(timer);
  }, [timeLeft, stage, hasAnswered]);

  // Freeze bots timer countdown
  useEffect(() => {
    if (botFreezeRemaining > 0) {
      const t = setTimeout(() => setBotFreezeRemaining(prev => prev - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [botFreezeRemaining]);

  const handleAnswer = (option) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setSelectedAnswer(option);

    const curQ = currentQuestions[currentQIndex];
    const isCorrect = option === curQ?.correct;

    if (isCorrect) {
      const nextCorrect = correctAnswerCount + 1;
      setCorrectAnswerCount(nextCorrect);

      let gained = 100 + (timeLeft * 10);
      if (activeBuffs.doubleScore) {
        gained *= 2;
      }
      setRoundScore(prev => prev + gained);

      // Check for Card Drop (every 5 correct answers)
      if (nextCorrect % 5 === 0) {
        const awardedKey = CARD_KEYS[Math.floor(Math.random() * CARD_KEYS.length)];
        const awardedCard = CARD_DEFINITIONS[awardedKey];
        setPlayerCards(prev => ({
          ...prev,
          [awardedKey]: (prev[awardedKey] || 0) + 1
        }));
        setEarnedCardModal(awardedCard);
      }
    } else {
      // Wrong or timeout
      if (activeBuffs.shield) {
        setRoundScore(prev => prev + 50); // Shield provides safety points
        showToast("🛡️ Khiên bảo vệ đã cứu nguy! Nhận 50 điểm an toàn.");
      }
    }

    setTimeout(() => {
      // Reset single-question buffs
      setActiveBuffs(prev => ({ ...prev, doubleScore: false, shield: false }));
      setEliminatedOptions([]);

      if (currentQIndex < 2) {
        setCurrentQIndex(prev => prev + 1);
        setHasAnswered(false);
        setSelectedAnswer(null);
        setTimeLeft(10);
      } else {
        finishRound();
      }
    }, 2000);
  };

  const finishRound = () => {
    const updatedParticipants = participants.map(p => {
      if (!p.isBot) {
        return { ...p, score: roundScore, totalScore: p.totalScore + roundScore };
      }
      // If bots are frozen, bot score is heavily reduced
      let botScore = Math.floor(Math.random() * 260) + 60;
      if (activeBuffs.freezeBots) {
        botScore = Math.floor(botScore * 0.5);
      }
      return { ...p, score: botScore, totalScore: p.totalScore + botScore };
    });

    updatedParticipants.sort((a, b) => b.score - a.score);
    setParticipants(updatedParticipants);
    setStage('roundResult');
  };

  const nextRound = () => {
    const advanceCount = ADVANCE_COUNTS[round - 1];
    const advancedPlayers = participants.slice(0, advanceCount);
    const playerAdvanced = advancedPlayers.find(p => !p.isBot);

    if (!playerAdvanced) {
      handleElimination(round);
      return;
    }

    if (round === 4) {
      // Advancing to Round 5: Siêu AI Challenge (Top 3 Finalists)
      setParticipants(advancedPlayers);
      setRound(5);
      startAiChallenge(advancedPlayers);
      return;
    }

    if (round === 5) {
      // Completed Round 5
      handleElimination(6);
      return;
    }

    setParticipants(advancedPlayers);
    setRound(prev => prev + 1);
    startRound(round + 1, advancedPlayers);
  };

  // Start Round 5: Siêu AI Challenge
  const startAiChallenge = (finalists) => {
    setStage('aiChallenge');
    setTimeLeft(35);
    setRoundScore(0);
    setHasAnswered(false);
    setSelectedAnswer(null);
    setBotAProgress(0);
    setBotBProgress(0);
    setAiPlayerStatus('solving');
    setAiWinner(null);
    setActiveBuffs({ doubleScore: false, freezeBots: false, shield: false });
    setEliminatedOptions([]);

    // Select random high-order reasoning challenge
    const randChallenge = AI_CHALLENGES[Math.floor(Math.random() * AI_CHALLENGES.length)];
    setAiChallengeQ(randChallenge);
  };

  // Round 5 AI Competitor Simulation
  useEffect(() => {
    let interval;
    if (stage === 'aiChallenge' && !aiWinner && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleAiTimeout();
            return 0;
          }
          return prev - 1;
        });

        // Bots progress only if NOT frozen
        if (botFreezeRemaining <= 0) {
          setBotAProgress(prev => {
            if (prev >= 100) return 100;
            // Bot A solves in ~20-24s (approx 4.5% per second)
            const inc = Math.random() * 3 + 3.5;
            const next = prev + inc;
            if (next >= 100) {
              handleBotSolved('bot_a');
              return 100;
            }
            return next;
          });

          setBotBProgress(prev => {
            if (prev >= 100) return 100;
            // Bot B solves in ~23-28s (approx 4% per second)
            const inc = Math.random() * 2.8 + 2.8;
            const next = prev + inc;
            if (next >= 100) {
              handleBotSolved('bot_b');
              return 100;
            }
            return next;
          });
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stage, aiWinner, timeLeft, botFreezeRemaining]);

  const handleBotSolved = (botKey) => {
    // If player hasn't answered yet, bot finished first!
    if (!hasAnswered) {
      // Find bot name
      const bots = participants.filter(p => p.isBot);
      const winnerBot = botKey === 'bot_a' ? (bots[0] || { name: 'Bảo Nam' }) : (bots[1] || { name: 'Hải Đăng' });
      showToast(`⚠️ ${winnerBot.name} đã hoàn tất phân tích Siêu AI Challenge!`);
    }
  };

  const handleAiAnswer = (option) => {
    if (hasAnswered || stage !== 'aiChallenge') return;
    setHasAnswered(true);
    setSelectedAnswer(option);

    const isCorrect = option === aiChallengeQ.correct;

    if (isCorrect) {
      setAiPlayerStatus('correct');
      const nextCorrect = correctAnswerCount + 1;
      setCorrectAnswerCount(nextCorrect);

      let finalScore = 1000 + (timeLeft * 30);
      if (activeBuffs.doubleScore) finalScore *= 2;

      // Determine rank
      const bothBotsFinished = botAProgress >= 100 && botBProgress >= 100;
      const oneBotFinished = botAProgress >= 100 || botBProgress >= 100;

      let playerRank = 1;
      if (bothBotsFinished) playerRank = 3;
      else if (oneBotFinished) playerRank = 2;

      setAiWinner(playerRank === 1 ? 'player' : (playerRank === 2 ? 'runner_up' : 'third'));

      // Award prizes based on finish
      setTimeout(() => {
        if (playerRank === 1) {
          handleElimination(6); // Winner
        } else if (playerRank === 2) {
          handleElimination(5); // Runner-up
        } else {
          handleElimination(4); // Third
        }
      }, 3000);

    } else {
      // Answered wrong
      if (activeBuffs.shield) {
        setAiPlayerStatus('solving');
        setHasAnswered(false);
        setSelectedAnswer(null);
        showToast("🛡️ Khiên bảo vệ đã hóa giải lỗi sai! Bạn có cơ hội chọn lại một phương án khác!");
        setActiveBuffs(prev => ({ ...prev, shield: false }));
        return;
      }

      setAiPlayerStatus('wrong');
      setAiWinner('eliminated');
      setTimeout(() => {
        handleElimination(5); // 2nd or 3rd
      }, 3000);
    }
  };

  const handleAiTimeout = () => {
    if (hasAnswered) return;
    setHasAnswered(true);
    setAiPlayerStatus('wrong');
    setAiWinner('eliminated');
    setTimeout(() => {
      handleElimination(4);
    }, 2500);
  };

  const handleElimination = (eliminatedAfterRound) => {
    setStage('tournamentEnd');

    if (eliminatedAfterRound === 6) {
      addReward(500, 20, '🌟 Quán Quân Khóa Thi');
    } else if (eliminatedAfterRound === 5) {
      addReward(300, 10);
    } else if (eliminatedAfterRound === 4) {
      addReward(150, 5);
    }
  };

  return (
    <div className="p-3 md:p-6 max-w-5xl mx-auto min-h-screen relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white font-bold px-6 py-3 rounded-2xl shadow-2xl border border-indigo-400 flex items-center gap-3 animate-bounce">
          <Sparkles className="text-amber-400" size={20} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Support Card Earned Modal */}
      {earnedCardModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-4 border-amber-300 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-600"></div>
            
            <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-4xl shadow-lg shadow-orange-200">
              {earnedCardModal.symbol}
            </div>

            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-black px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              ⭐ Tích Lũy 5 Câu Trả Lời Đúng!
            </div>

            <h3 className="text-2xl font-black text-slate-800 mb-2">
              Nhận Thẻ Bài Hỗ Trợ: {earnedCardModal.name}
            </h3>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {earnedCardModal.description}
            </p>

            <button
              onClick={() => setEarnedCardModal(null)}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black rounded-2xl shadow-lg shadow-orange-300 hover:brightness-110 active:scale-95 transition-all text-lg"
            >
              Thu Nhận & Tiếp Tục
            </button>
          </div>
        </div>
      )}

      {/* LOBBY STAGE */}
      {stage === 'lobby' && (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
            <Trophy size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 mb-4">Giải Đấu Liên Trường</h1>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Quy tụ <strong>20 thí sinh xuất sắc nhất</strong>. Trải qua 4 vòng loại gay cấn để bước vào 
            <span className="text-indigo-600 font-black"> Vòng 5: Siêu AI Challenge</span> đối đầu trực tiếp cùng các cỗ máy tính toán thông minh nhất!
          </p>

          {/* Cards & Special Mechanics Promo */}
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 mb-8 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="bg-indigo-600 text-white p-3 rounded-2xl shrink-0">
              <Zap size={28} />
            </div>
            <div>
              <h4 className="font-black text-indigo-900 text-base">Hệ Thống Thẻ Bài Hỗ Trợ & Siêu AI</h4>
              <p className="text-xs text-indigo-700 leading-relaxed">
                Mỗi <strong>5 câu trả lời đúng</strong>, bạn sẽ nhận được 1 <strong>Thẻ bài hỗ trợ ngẫu nhiên</strong> (x2 Điểm, Đóng băng đối thủ 3s, Khiên bảo vệ, Thêm thời gian, 50/50). Hãy giữ lại thẻ chiến lược cho Vòng 5 Siêu AI Challenge!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-300">
              <div className="flex items-center gap-2 mb-2">
                <CrownIcon />
                <h3 className="font-black text-amber-700 text-xl">Quán Quân (Top 1)</h3>
              </div>
              <ul className="text-amber-800 font-semibold space-y-1 text-sm">
                <li>• 20 Ruby</li>
                <li>• Danh hiệu: 🌟 Quán Quân Khóa Thi</li>
                <li>• 500 XP</li>
                <li>• Khắc tên vào Bảng Vàng Siêu AI</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-300">
              <h3 className="font-black text-slate-700 text-xl mb-2">Á Quân (Hạng 2)</h3>
              <ul className="text-slate-700 font-semibold space-y-1 text-sm">
                <li>• 10 Ruby</li>
                <li>• Huy chương Bạc Trí Tuệ</li>
                <li>• 300 XP</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <h3 className="font-black text-orange-700 text-xl mb-2">Hạng 3 Chung Cuộc</h3>
              <ul className="text-orange-800 font-semibold space-y-1 text-sm">
                <li>• 5 Ruby</li>
                <li>• Huy chương Đồng</li>
                <li>• 150 XP</li>
              </ul>
            </div>
          </div>

          <button 
            onClick={startTournament}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-black rounded-full text-xl hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1 transition-all active:scale-95"
          >
            Bắt đầu thi đấu ngay (Tặng 1 Thẻ Khởi Đầu)
          </button>
        </div>
      )}

      {/* PLAYING STAGE (ROUNDS 1-4) */}
      {stage === 'playing' && (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-100 max-w-3xl mx-auto animate-fade-in relative overflow-hidden">
          {/* Progress bar timer */}
          <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
            <div 
              className={`h-full transition-all duration-1000 ease-linear ${
                timeLeft <= 3 ? 'bg-rose-500 animate-pulse' : 'bg-indigo-600'
              }`}
              style={{ width: `${(timeLeft / 10) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex flex-wrap justify-between items-center mb-6 mt-2 gap-3">
            <div className="bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-2 rounded-xl font-black text-sm flex items-center gap-2">
              <Swords size={18} />
              Vòng {round}: {ROUND_NAMES[round-1]}
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                Đúng tích lũy: <strong className="text-indigo-600">{correctAnswerCount}</strong> câu
              </div>
              <div className="flex items-center gap-2 text-rose-500 font-black text-xl">
                <Clock size={22} className={timeLeft <= 3 ? 'animate-spin' : ''} /> 00:{timeLeft.toString().padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Active Buff Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {activeBuffs.doubleScore && (
              <span className="bg-amber-100 text-amber-800 border border-amber-300 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                ⚡ Đang nhân đôi điểm (x2)
              </span>
            )}
            {activeBuffs.freezeBots && (
              <span className="bg-cyan-100 text-cyan-800 border border-cyan-300 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                ❄️ Đang đóng băng đối thủ ({botFreezeRemaining}s)
              </span>
            )}
            {activeBuffs.shield && (
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                🛡️ Khiên bảo vệ đang kích hoạt
              </span>
            )}
          </div>

          {/* Question Display */}
          <div className="mb-6">
            <span className="text-xs font-black text-slate-400 mb-2 block uppercase tracking-wider">
              Câu hỏi {currentQIndex + 1}/3 • Môn: {currentQuestions[currentQIndex]?.subject || 'Tổng hợp'}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 leading-snug">
              {currentQuestions[currentQIndex]?.text}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {currentQuestions[currentQIndex]?.options?.map((opt, i) => {
              const isEliminated = eliminatedOptions.includes(opt);
              let btnClass = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300";
              
              if (isEliminated) {
                btnClass = "bg-slate-100 border-dashed border-slate-300 text-slate-300 opacity-30 cursor-not-allowed line-through";
              } else if (hasAnswered) {
                if (opt === currentQuestions[currentQIndex].correct) {
                  btnClass = "bg-green-100 border-green-500 text-green-900 shadow-md font-black";
                } else if (opt === selectedAnswer) {
                  btnClass = "bg-red-100 border-red-500 text-red-900 font-black";
                } else {
                  btnClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-40";
                }
              }

              return (
                <button
                  key={i}
                  disabled={hasAnswered || isEliminated}
                  onClick={() => handleAnswer(opt)}
                  className={`p-4 text-left border-2 rounded-2xl font-bold transition-all text-sm md:text-base ${btnClass}`}
                >
                  <span className="inline-block w-6 text-indigo-500 font-black">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Support Cards Tray HUD */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-500" />
                Túi Thẻ Bài Hỗ Trợ (Bấm để dùng)
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Còn {5 - (correctAnswerCount % 5)} câu đúng nữa để nhận thẻ mới
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {CARD_KEYS.map(key => {
                const card = CARD_DEFINITIONS[key];
                const count = playerCards[key] || 0;
                const isUsable = count > 0 && !hasAnswered;

                return (
                  <button
                    key={key}
                    disabled={!isUsable}
                    onClick={() => activateCard(key)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-all relative ${
                      isUsable 
                        ? 'bg-white hover:bg-indigo-50 border-indigo-200 hover:border-indigo-400 hover:shadow-md cursor-pointer' 
                        : 'bg-slate-100 border-slate-200 opacity-40 cursor-not-allowed'
                    }`}
                    title={card.description}
                  >
                    <span className="text-xl mb-1">{card.symbol}</span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1">{card.name}</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full mt-1 ${
                      count > 0 ? 'bg-indigo-600 text-white' : 'bg-slate-300 text-slate-600'
                    }`}>
                      x{count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ROUND 5: SIÊU AI CHALLENGE (HIGH-ORDER REASONING BOSS STAGE) */}
      {stage === 'aiChallenge' && (
        <div className="bg-slate-950 text-white rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-cyan-500/50 max-w-4xl mx-auto animate-fade-in relative overflow-hidden">
          {/* Cyberpunk Glow Background */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b border-cyan-500/30 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                <Brain size={14} className="animate-pulse" />
                VÒNG 5 • CHUNG KẾT TỐI THƯỢNG
              </div>
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
                SIÊU AI CHALLENGE
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Thời gian suy luận</span>
                <span className={`text-2xl font-black ${timeLeft <= 10 ? 'text-rose-400 animate-pulse' : 'text-cyan-400'}`}>
                  00:{timeLeft.toString().padStart(2, '0')}
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-inner">
                <Cpu size={26} className="animate-spin" style={{ animationDuration: '8s' }} />
              </div>
            </div>
          </div>

          {/* Top 3 Finalists Real-time Racing HUD */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {/* Player Progress Card */}
            <div className="bg-slate-900/90 border border-cyan-500/40 rounded-2xl p-3.5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
                  {currentUser?.username || 'Bạn'} (Thí sinh)
                </span>
                <span className="text-[11px] font-bold text-cyan-400">
                  {aiPlayerStatus === 'correct' ? '✅ ĐÃ GIẢI XONG' : (aiPlayerStatus === 'wrong' ? '❌ SAI' : 'Đang phân tích...')}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-300"
                  style={{ width: aiPlayerStatus === 'correct' ? '100%' : '50%' }}
                ></div>
              </div>
            </div>

            {/* Bot 1 Progress Card */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-3.5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  🤖 {participants.filter(p => p.isBot)[0]?.name || 'Bảo Nam (AI)'}
                </span>
                <span className={`text-[11px] font-bold ${
                  botFreezeRemaining > 0 ? 'text-cyan-400' : (botAProgress >= 100 ? 'text-amber-400' : 'text-slate-400')
                }`}>
                  {botFreezeRemaining > 0 ? `🧊 Đóng băng ${botFreezeRemaining}s` : `${Math.round(botAProgress)}%`}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    botFreezeRemaining > 0 ? 'bg-cyan-400' : 'bg-gradient-to-r from-purple-500 to-indigo-500'
                  }`}
                  style={{ width: `${botAProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Bot 2 Progress Card */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-2xl p-3.5">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                  🤖 {participants.filter(p => p.isBot)[1]?.name || 'Hải Đăng (AI)'}
                </span>
                <span className={`text-[11px] font-bold ${
                  botFreezeRemaining > 0 ? 'text-cyan-400' : (botBProgress >= 100 ? 'text-amber-400' : 'text-slate-400')
                }`}>
                  {botFreezeRemaining > 0 ? `🧊 Đóng băng ${botFreezeRemaining}s` : `${Math.round(botBProgress)}%`}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    botFreezeRemaining > 0 ? 'bg-cyan-400' : 'bg-gradient-to-r from-pink-500 to-purple-500'
                  }`}
                  style={{ width: `${botBProgress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Challenge Box */}
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
                {aiChallengeQ?.field}
              </span>
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase">
                {aiChallengeQ?.difficulty}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-black text-cyan-200 mb-3">
              {aiChallengeQ?.title}
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
              {aiChallengeQ?.scenario}
            </p>

            {/* Answer Options */}
            <div className="space-y-3">
              {aiChallengeQ?.options?.map((opt, i) => {
                const isEliminated = eliminatedOptions.includes(opt);
                let btnClass = "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-cyan-950/60 hover:border-cyan-400";

                if (isEliminated) {
                  btnClass = "bg-slate-900 border-dashed border-slate-800 text-slate-600 line-through opacity-30 cursor-not-allowed";
                } else if (hasAnswered) {
                  if (opt === aiChallengeQ.correct) {
                    btnClass = "bg-emerald-950 border-emerald-400 text-emerald-200 font-black shadow-lg shadow-emerald-900/50";
                  } else if (opt === selectedAnswer) {
                    btnClass = "bg-rose-950 border-rose-400 text-rose-200 font-black";
                  } else {
                    btnClass = "bg-slate-900 border-slate-800 text-slate-600 opacity-30";
                  }
                }

                return (
                  <button
                    key={i}
                    disabled={hasAnswered || isEliminated}
                    onClick={() => handleAiAnswer(opt)}
                    className={`w-full p-4 text-left border-2 rounded-2xl text-xs md:text-sm transition-all leading-relaxed ${btnClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* In-battle Cards HUD */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2.5">
              <span className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={14} className="text-cyan-400" />
                Thẻ Bài Hỗ Trợ Đang Có (Kích hoạt ngay trong Vòng Chung kết)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {CARD_KEYS.map(key => {
                const card = CARD_DEFINITIONS[key];
                const count = playerCards[key] || 0;
                const isUsable = count > 0 && !hasAnswered;

                return (
                  <button
                    key={key}
                    disabled={!isUsable}
                    onClick={() => activateCard(key)}
                    className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-all ${
                      isUsable 
                        ? 'bg-slate-800 hover:bg-cyan-950 border-cyan-500/50 hover:border-cyan-300 cursor-pointer shadow-md' 
                        : 'bg-slate-900 border-slate-800 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <span className="text-xl mb-1">{card.symbol}</span>
                    <span className="text-xs font-bold text-slate-200 line-clamp-1">{card.name}</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full mt-1 ${
                      count > 0 ? 'bg-cyan-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-500'
                    }`}>
                      x{count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ROUND RESULT STAGE (ROUNDS 1-4) */}
      {stage === 'roundResult' && (
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100 max-w-2xl mx-auto animate-fade-in text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-2">Kết quả Vòng {round}</h2>
          <p className="text-slate-500 mb-8 font-medium">
            Top {ADVANCE_COUNTS[round-1]} thí sinh xuất sắc nhất sẽ giành vé đi tiếp!
          </p>
          
          <div className="space-y-3 mb-8 text-left">
            {participants.map((p, i) => {
              const willAdvance = i < ADVANCE_COUNTS[round-1];
              return (
                <div 
                  key={p.id} 
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    willAdvance 
                      ? (!p.isBot ? 'bg-indigo-50 border-indigo-300' : 'bg-green-50 border-green-200') 
                      : (!p.isBot ? 'bg-red-50 border-red-200 opacity-80' : 'bg-slate-50 border-slate-200 opacity-40')
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-black text-xl w-6 ${i < 3 ? 'text-amber-500' : 'text-slate-400'}`}>
                      #{i+1}
                    </span>
                    <span className={`font-bold ${!p.isBot ? 'text-indigo-800 font-black' : 'text-slate-700'}`}>
                      {p.name} {!p.isBot && '(Bạn)'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="font-black text-slate-800">
                      {p.score} <span className="text-xs text-slate-400 font-medium">điểm</span>
                    </div>
                    {willAdvance ? (
                      <span className="text-xs font-black text-green-700 bg-green-100 px-2.5 py-1 rounded-lg">
                        Đi tiếp
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                        Bị loại
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={nextRound}
            className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl text-lg hover:bg-slate-800 hover:shadow-lg transition-all w-full md:w-auto"
          >
            {round === 4 ? 'Tiến Vào Vòng 5: Siêu AI Challenge 🚀' : 'Tiếp tục vòng sau'}
          </button>
        </div>
      )}

      {/* TOURNAMENT END STAGE */}
      {stage === 'tournamentEnd' && (
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100 max-w-2xl mx-auto animate-fade-in text-center">
          {(() => {
            const isWinner = aiWinner === 'player' || (round === 5 && aiPlayerStatus === 'correct' && botAProgress < 100);
            const isRunnerUp = aiWinner === 'runner_up';
            const isThird = aiWinner === 'third' || round === 4;

            if (isWinner) {
              return (
                <>
                  <div className="bg-amber-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce">
                    <Trophy size={64} className="text-amber-500" />
                  </div>
                  <div className="inline-block bg-amber-100 text-amber-800 text-xs font-black px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
                    🌟 CHIẾN THẮNG ÁP ĐẢO SIÊU AI
                  </div>
                  <h2 className="text-4xl font-black text-amber-600 mb-3">Quán Quân Giải Đấu!</h2>
                  <p className="text-base text-slate-600 mb-6 font-medium max-w-md mx-auto leading-relaxed">
                    Bạn đã xuất sắc giải mã bài toán tư duy bậc cao nhanh hơn các cỗ máy thông minh nhất để giành vị trí <strong>Top 1 Tối Thượng</strong>!
                  </p>
                  <div className="bg-amber-50 border-2 border-amber-300 p-6 rounded-2xl inline-block text-left mb-8 w-full max-w-md">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <Sparkles size={18} className="text-amber-500" /> Phần thưởng vinh danh:
                    </h4>
                    <ul className="text-amber-800 font-semibold space-y-2 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> 20 Ruby</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> Danh hiệu: 🌟 Quán Quân Khóa Thi</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> 500 XP</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> Huy hiệu: 🧠 Bậc Thầy Trí Tuệ Siêu Cấp</li>
                    </ul>
                  </div>
                </>
              );
            } else if (isRunnerUp) {
              return (
                <>
                  <div className="bg-slate-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Medal size={64} className="text-slate-500" />
                  </div>
                  <h2 className="text-4xl font-black text-slate-700 mb-4">Á Quân (Hạng 2)</h2>
                  <p className="text-base text-slate-600 mb-6 font-medium max-w-md mx-auto leading-relaxed">
                    Bạn đã kiên cường chiến đấu tới những giây cuối cùng của Vòng 5 Siêu AI Challenge. Chỉ một chút xíu nữa thôi là chạm tay vào cúp vàng!
                  </p>
                  <div className="bg-slate-50 border-2 border-slate-300 p-6 rounded-2xl inline-block text-left mb-8 w-full max-w-md">
                    <h4 className="font-bold text-slate-800 mb-3">Phần thưởng đã nhận:</h4>
                    <ul className="text-slate-700 font-medium space-y-2 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> 10 Ruby</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> 300 XP</li>
                    </ul>
                  </div>
                </>
              );
            } else if (isThird) {
              return (
                <>
                  <div className="bg-orange-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <Medal size={64} className="text-orange-500" />
                  </div>
                  <h2 className="text-4xl font-black text-orange-600 mb-4">Hạng 3 Chung Cuộc</h2>
                  <p className="text-base text-slate-600 mb-6 font-medium max-w-md mx-auto leading-relaxed">
                    Bạn đã xuất sắc lọt vào Top 3 cao thủ giải đấu. Đừng nản lòng, hãy nâng cấp thêm thẻ bài hỗ trợ và phục thù ở giải sau nhé!
                  </p>
                  <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl inline-block text-left mb-8 w-full max-w-md">
                    <h4 className="font-bold text-orange-800 mb-3">Phần thưởng khuyến khích:</h4>
                    <ul className="text-orange-700 font-medium space-y-2 text-sm">
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> 5 Ruby</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600"/> 150 XP</li>
                    </ul>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="bg-rose-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <AlertCircle size={64} className="text-rose-400" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-700 mb-4">Dừng Bước Ở Vòng {round}</h2>
                  <p className="text-base text-slate-600 mb-8 font-medium max-w-md mx-auto leading-relaxed">
                    Cuộc thi quy tụ các thí sinh hàng đầu và độ khó tăng dần qua từng vòng. Hãy ôn luyện kiến thức trong bài tập và quay trở lại chinh phục nhé!
                  </p>
                </>
              );
            }
          })()}
          
          <div>
            <button 
              onClick={() => setStage('lobby')}
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-all"
            >
              Về Sảnh Chờ Thi Đấu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CrownIcon = () => (
  <svg className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 24 24">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
  </svg>
);

export default TournamentManager;
