import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, CheckCircle2, X, RefreshCw, Trophy, Sparkles, 
  MapPin, Compass, Flag, Award, ArrowRight, Play, Pause, 
  ChevronRight, ChevronLeft, Eye, Volume2, ShieldCheck, Flame
} from 'lucide-react';
import { VIETNAM_LANDMARKS, CAMPAIGN_STAGES } from './data/vietnamLandmarksData';

// Ngân hàng 50+ câu hỏi trắc nghiệm Lịch sử & Địa lý THCS (Lớp 6-9)
const QUESTIONS = [
  // Lịch sử 6
  { type: 'his', text: 'Nhà nước Văn Lang do ai đứng đầu?', options: ['Hùng Vương', 'An Dương Vương', 'Lý Nam Đế', 'Mai Thúc Loan'], correct: 'Hùng Vương' },
  { type: 'his', text: 'Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo đánh tan quân Nam Hán?', options: ['Ngô Quyền', 'Lê Hoàn', 'Trần Hưng Đạo', 'Lý Thường Kiệt'], correct: 'Ngô Quyền' },
  { type: 'his', text: 'Cuộc khởi nghĩa Hai Bà Trưng bùng nổ vào năm nào sau Công nguyên?', options: ['Năm 40', 'Năm 248', 'Năm 542', 'Năm 938'], correct: 'Năm 40' },
  { type: 'his', text: 'Kinh đô của nhà nước Âu Lạc thời An Dương Vương đóng tại đâu?', options: ['Cổ Loa (Đông Anh, Hà Nội)', 'Phong Châu (Phú Thọ)', 'Hoa Lư (Ninh Bình)', 'Mê Linh (Hà Nội)'], correct: 'Cổ Loa (Đông Anh, Hà Nội)' },
  { type: 'his', text: 'Năm 968, ai là người có công dẹp loạn 12 sứ quân, thống nhất đất nước và lập nên nhà nước Đại Cồ Việt?', options: ['Đinh Bộ Lĩnh', 'Ngô Quyền', 'Lê Hoàn', 'Lý Công Uẩn'], correct: 'Đinh Bộ Lĩnh' },

  // Lịch sử 7
  { type: 'his', text: 'Năm 1010, vị vua nào đã ban "Chiếu dời đô" chuyển kinh đô từ Hoa Lư về Thăng Long?', options: ['Lý Thái Tổ (Lý Công Uẩn)', 'Lý Thánh Tông', 'Trần Thái Tông', 'Lê Lợi'], correct: 'Lý Thái Tổ (Lý Công Uẩn)' },
  { type: 'his', text: 'Ai là tác giả của áng thiên cổ hùng văn "Hịch tướng sĩ"?', options: ['Trần Quốc Tuấn (Trần Hưng Đạo)', 'Trần Thủ Độ', 'Nguyễn Trãi', 'Lý Thường Kiệt'], correct: 'Trần Quốc Tuấn (Trần Hưng Đạo)' },
  { type: 'his', text: 'Cuộc khởi nghĩa Lam Sơn (1418 - 1427) do ai khởi xướng và lãnh đạo?', options: ['Lê Lợi', 'Nguyễn Trãi', 'Quang Trung', 'Lê Hoàn'], correct: 'Lê Lợi' },
  { type: 'his', text: 'Bộ luật Hồng Đức (Quốc triều hình luật) được ban hành dưới triều vua nào?', options: ['Lê Thánh Tông', 'Lê Thái Tổ', 'Lý Thái Tổ', 'Trần Nhân Tông'], correct: 'Lê Thánh Tông' },
  { type: 'his', text: 'Chiến thắng Rạch Gầm - Xoài Mút năm 1785 do vị tướng tài ba nào chỉ huy đánh tan 5 vạn quân Xiêm?', options: ['Nguyễn Huệ (Quang Trung)', 'Nguyễn Nhạc', 'Nguyễn Lữ', 'Trần Hưng Đạo'], correct: 'Nguyễn Huệ (Quang Trung)' },
  { type: 'his', text: 'Mùa xuân năm Kỷ Dậu 1789, vua Quang Trung đại phá 29 vạn quân xâm lược nào?', options: ['Quân Thanh', 'Quân Minh', 'Quân Xiêm', 'Quân Mông - Nguyên'], correct: 'Quân Thanh' },

  // Lịch sử 8
  { type: 'his', text: 'Thực dân Pháp chính thức nổ súng xâm lược Việt Nam tại bán đảo Sơn Trà (Đà Nẵng) vào năm nào?', options: ['Năm 1858', 'Năm 1884', 'Năm 1867', 'Năm 1873'], correct: 'Năm 1858' },
  { type: 'his', text: 'Phong trào Cần Vương giúp vua cứu nước bùng nổ sau khi Tôn Thất Thuyết lấy danh nghĩa vị vua nào ban chiếu?', options: ['Vua Hàm Nghi', 'Vua Duy Tân', 'Vua Thành Thái', 'Vua Bảo Đại'], correct: 'Vua Hàm Nghi' },
  { type: 'his', text: 'Cuộc khởi nghĩa nông dân Yên Thế kiên cường suốt 30 năm do ai lãnh đạo?', options: ['Hoàng Hoa Thám (Đề Thám)', 'Phan Đình Phùng', 'Nguyễn Thái Học', 'Đinh Công Tráng'], correct: 'Hoàng Hoa Thám (Đề Thám)' },
  { type: 'his', text: 'Người thanh niên yêu nước Nguyễn Tất Thành ra đi tìm đường cứu nước từ Bến Nhà Rồng vào ngày tháng năm nào?', options: ['5/6/1911', '3/2/1930', '19/8/1945', '2/9/1945'], correct: '5/6/1911' },

  // Lịch sử 9
  { type: 'his', text: 'Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào dưới sự chủ trì của lãnh tụ Nguyễn Ái Quốc?', options: ['3/2/1930', '19/8/1945', '2/9/1945', '22/12/1944'], correct: '3/2/1930' },
  { type: 'his', text: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa vào ngày nào?', options: ['2/9/1945', '19/8/1945', '7/5/1954', '30/4/1975'], correct: '2/9/1945' },
  { type: 'his', text: 'Chiến thắng Điện Biên Phủ "Lừng lẫy năm châu, chấn động địa cầu" diễn ra vào năm nào?', options: ['Năm 1954', 'Năm 1945', 'Năm 1975', 'Năm 1972'], correct: 'Năm 1954' },
  { type: 'his', text: 'Chiến dịch lịch sử giải phóng hoàn toàn miền Nam thống nhất đất nước mang tên ai?', options: ['Chiến dịch Hồ Chí Minh', 'Chiến dịch Tây Nguyên', 'Chiến dịch Huế - Đà Nẵng', 'Chiến dịch Điện Biên Phủ'], correct: 'Chiến dịch Hồ Chí Minh' },
  { type: 'his', text: 'Ngày Giải phóng hoàn toàn miền Nam, thống nhất non sông đất nước là ngày nào?', options: ['30/4/1975', '7/5/1954', '2/9/1945', '27/1/1973'], correct: '30/4/1975' },

  // Địa lý 6
  { type: 'geo', text: 'Đường xích đạo chia Trái Đất thành hai nửa bán cầu nào?', options: ['Bán cầu Bắc và Bán cầu Nam', 'Bán cầu Đông và Bán cầu Tây', 'Bán cầu Lục địa và Đại dương', 'Bán cầu Nóng và Lạnh'], correct: 'Bán cầu Bắc và Bán cầu Nam' },
  { type: 'geo', text: 'Lục địa nào có diện tích rộng lớn nhất trên Trái Đất?', options: ['Lục địa Á - Âu', 'Lục địa Phi', 'Lục địa Bắc Mỹ', 'Lục địa Nam Cực'], correct: 'Lục địa Á - Âu' },
  { type: 'geo', text: 'Trái Đất tự quay quanh trục theo hướng nào?', options: ['Từ Tây sang Đông', 'Từ Đông sang Tây', 'Từ Bắc xuống Nam', 'Từ Nam lên Bắc'], correct: 'Từ Tây sang Đông' },

  // Địa lý 7
  { type: 'geo', text: 'Châu Phi có khí hậu chủ yếu là gì do phần lớn lãnh thổ nằm giữa hai đường chí tuyến?', options: ['Nóng và khô hạn', 'Lạnh giá quanh năm', 'Ôn hòa ẩm ướt', 'Mát mẻ mưa nhiều'], correct: 'Nóng và khô hạn' },
  { type: 'geo', text: 'Dãy núi nào được coi là ranh giới tự nhiên ngăn cách giữa châu Âu và châu Á?', options: ['Dãy U-ran', 'Dãy An-pơ', 'Dãy Hi-ma-lay-a', 'Dãy An-đét'], correct: 'Dãy U-ran' },
  { type: 'geo', text: 'Rừng nhiệt đới lớn nhất hành tinh là rừng A-ma-dôn nằm ở châu lục nào?', options: ['Châu Nam Mỹ', 'Châu Phi', 'Châu Á', 'Châu Đại Dương'], correct: 'Châu Nam Mỹ' },

  // Địa lý 8
  { type: 'geo', text: 'Đỉnh núi cao nhất Việt Nam và toàn Đông Dương là đỉnh núi nào?', options: ['Fansipan (3.143m)', 'Bạch Mã', 'Langbiang', 'Ngọc Linh'], correct: 'Fansipan (3.143m)' },
  { type: 'geo', text: 'Nước Việt Nam ta nằm trong đới khí hậu nào?', options: ['Nhiệt đới gió mùa', 'Ôn đới lục địa', 'Hàn đới', 'Cận nhiệt đới khô'], correct: 'Nhiệt đới gió mùa' },
  { type: 'geo', text: 'Vùng biển Việt Nam có diện tích khoảng bao nhiêu km² trên Biển Đông?', options: ['Khoảng 1 triệu km²', 'Khoảng 500 nghìn km²', 'Khoảng 2 triệu km²', 'Khoảng 330 nghìn km²'], correct: 'Khoảng 1 triệu km²' },
  { type: 'geo', text: 'Hai quần đảo xa bờ thiêng liêng thuộc chủ quyền của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là gì?', options: ['Quần đảo Hoàng Sa và Trường Sa', 'Quần đảo Phú Quốc và Côn Đảo', 'Quần đảo Cát Bà và Cô Tô', 'Quần đảo Nam Du và Thổ Chu'], correct: 'Quần đảo Hoàng Sa và Trường Sa' },

  // Địa lý 9
  { type: 'geo', text: 'Vùng kinh tế nào là vựa lúa và vựa thủy sản lớn nhất cả nước ta?', options: ['Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng', 'Đông Nam Bộ', 'Bắc Trung Bộ'], correct: 'Đồng bằng sông Cửu Long' },
  { type: 'geo', text: 'Cây công nghiệp lâu năm số một được trồng nhiều nhất ở vùng đất đỏ bazan Tây Nguyên là cây gì?', options: ['Cây Cà phê', 'Cây Chè', 'Cây Bông vải', 'Cây Mía đường'], correct: 'Cây Cà phê' },
  { type: 'geo', text: 'Vùng kinh tế dẫn đầu cả nước về GDP, công nghiệp và thu hút đầu tư nước ngoài là vùng nào?', options: ['Đông Nam Bộ', 'Đồng bằng sông Hồng', 'Duyên hải Nam Trung Bộ', 'Trung du và miền núi Bắc Bộ'], correct: 'Đông Nam Bộ' },
  { type: 'geo', text: 'Điểm cực Nam trên đất liền của Tổ quốc ta thuộc tỉnh nào?', options: ['Tỉnh Cà Mau (Mũi Cà Mau)', 'Tỉnh Kiên Giang', 'Tỉnh Bạc Liêu', 'Tỉnh Sóc Trăng'], correct: 'Tỉnh Cà Mau (Mũi Cà Mau)' },
  { type: 'geo', text: 'Điểm cực Bắc trên đất liền của Việt Nam thuộc tỉnh nào?', options: ['Tỉnh Hà Giang (Lũng Cú)', 'Tỉnh Cao Bằng', 'Tỉnh Lào Cai', 'Tỉnh Lạng Sơn'], correct: 'Tỉnh Hà Giang (Lũng Cú)' }
];

const BOARD_SIZE = 8; // Bàn cờ 8x8 tương ứng 64 ô
const WIN_CONDITION = 5; // Cần 5 dấu liên tiếp thẳng hàng (Ngang, Dọc, Chéo) để thắng!
const REQUIRED_WINS_FOR_GRAND_VICTORY = 3; // Thắng 3 hiệp để đoạt ĐẠI THẮNG

// Âm thanh kèn chiến thắng (Web Audio API)
const playVictoryAudio = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const notes = [
      { f: 523.25, t: 0, d: 0.14 },    // C5
      { f: 659.25, t: 0.15, d: 0.14 }, // E5
      { f: 783.99, t: 0.30, d: 0.18 }, // G5
      { f: 1046.50, t: 0.50, d: 0.35 },// C6
      { f: 880.00, t: 0.90, d: 0.15 }, // A5
      { f: 1046.50, t: 1.08, d: 0.55 },// C6
      { f: 1318.51, t: 1.65, d: 0.70 } // E6
    ];
    notes.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, ctx.currentTime + t);
      gain.gain.setValueAtTime(0.25, ctx.currentTime + t);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + t + d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + t);
      osc.stop(ctx.currentTime + t + d);
    });
  } catch (e) {
    console.warn("Audio error:", e);
  }
};

// Hiệu ứng pháo hoa bằng Canvas
function FireworksEffect({ active }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    const colors = ['#ef4444', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#ec4899', '#fbbf24', '#ffffff'];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const createExplosion = (x, y) => {
      const count = 45;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
        const speed = Math.random() * 6 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          size: Math.random() * 3 + 2,
          gravity: 0.08,
          decay: Math.random() * 0.015 + 0.01
        });
      }
    };

    let launchTimer = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      launchTimer++;
      if (launchTimer % 22 === 0) {
        const x = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
        const y = Math.random() * (canvas.height * 0.5) + canvas.height * 0.1;
        createExplosion(x, y);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!active) return null;
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}

export default function HistoryGeoCaro({ addReward }) {
  // Bàn cờ 8x8 với ban đầu toàn bộ 64 ô màu trắng tinh
  const [board, setBoard] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [activeCell, setActiveCell] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [msg, setMsg] = useState({ text: 'Lượt của bạn: Vui lòng chọn 1 ô vuông trên bàn cờ để nhận câu hỏi!', type: 'info' });
  const [roundWinner, setRoundWinner] = useState(null); // 'user' | 'bot' | null
  const [winLine, setWinLine] = useState([]);
  
  // Tiến trình 3 Lượt Thắng để giành Đại Thắng
  const [userWinCount, setUserWinCount] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [isGrandVictory, setIsGrandVictory] = useState(false);

  // Màn hình Hành Trình Ảo sau khi chiến thắng
  const [showVirtualJourney, setShowVirtualJourney] = useState(false);
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [isAutoTourRunning, setIsAutoTourRunning] = useState(false);

  // Thuật toán kiểm tra 5 ô liên tiếp thẳng hàng (Ngang, Dọc, Chéo)
  const checkWinner = (squares) => {
    // 1. Kiểm tra hàng ngang
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c <= BOARD_SIZE - WIN_CONDITION; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = r * BOARD_SIZE + c + i;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    // 2. Kiểm tra hàng dọc
    for (let r = 0; r <= BOARD_SIZE - WIN_CONDITION; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = (r + i) * BOARD_SIZE + c;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    // 3. Đường chéo xuôi (Top-Left to Bottom-Right)
    for (let r = 0; r <= BOARD_SIZE - WIN_CONDITION; r++) {
      for (let c = 0; c <= BOARD_SIZE - WIN_CONDITION; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = (r + i) * BOARD_SIZE + c + i;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    // 4. Đường chéo ngược (Top-Right to Bottom-Left)
    for (let r = 0; r <= BOARD_SIZE - WIN_CONDITION; r++) {
      for (let c = WIN_CONDITION - 1; c < BOARD_SIZE; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;
        let win = true;
        let line = [];
        for (let i = 0; i < WIN_CONDITION; i++) {
          const idx = (r + i) * BOARD_SIZE + c - i;
          if (squares[idx]?.player !== player) { win = false; break; }
          line.push(idx);
        }
        if (win) return { player, line };
      }
    }

    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || roundWinner || !isXNext || activeCell !== null) return;

    setActiveCell(index);
    const landmark = VIETNAM_LANDMARKS[index] || VIETNAM_LANDMARKS[0];
    const randomQ = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    const shuffledQ = { 
      ...randomQ, 
      options: [...randomQ.options].sort(() => 0.5 - Math.random()),
      targetLandmark: landmark
    };
    setCurrentQuestion(shuffledQ);
    setMsg({ 
      text: 'Trả lời đúng để chiếm ô vuông và hiển thị Địa danh này!', 
      type: 'info' 
    });
  };

  const handleAnswer = (option) => {
    if (!currentQuestion) return;

    if (option === currentQuestion.correct) {
      const landmark = VIETNAM_LANDMARKS[activeCell] || VIETNAM_LANDMARKS[0];
      const newBoard = [...board];
      // CHỈ KHI TRẢ LỜI ĐÚNG MỚI HIỆN LÊN ĐỊA DANH
      newBoard[activeCell] = { 
        player: 'X', 
        landmark: landmark.name, 
        province: landmark.province,
        region: landmark.region,
        image: landmark.image,
        desc: landmark.desc,
        history: landmark.history
      };
      setBoard(newBoard);
      setActiveCell(null);
      setCurrentQuestion(null);
      
      const winnerData = checkWinner(newBoard);
      if (winnerData && winnerData.player === 'X') {
        setRoundWinner('user');
        setWinLine(winnerData.line);
        playVictoryAudio();

        const newWins = userWinCount + 1;
        setUserWinCount(newWins);

        if (newWins >= REQUIRED_WINS_FOR_GRAND_VICTORY) {
          setIsGrandVictory(true);
          setMsg({ text: '🎉 ĐẠI THẮNG TOÀN DIỆN! Bạn đã hoàn thành 3/3 lượt chơi và làm chủ dải đất hình chữ S (+150 XP, +30 💎)', type: 'success' });
          if (addReward) addReward(150, 30);
        } else {
          setMsg({ text: `🎉 CHIẾN THẮNG HIỆP ${currentRound}! Bạn đã đạt 5 ô thẳng hàng liên tiếp (+60 XP).`, type: 'success' });
          if (addReward) addReward(60, 10);
        }

        setTimeout(() => {
          setShowVirtualJourney(true);
        }, 1200);

      } else {
        setMsg({ text: 'Lượt của Máy (Đối thủ đang đi nước cờ)...', type: 'info' });
        setIsXNext(false);
      }
    } else {
      setMsg({ text: `Sai rồi! Đáp án đúng là "${currentQuestion.correct}". Bạn mất lượt cờ này!`, type: 'error' });
      setActiveCell(null);
      setCurrentQuestion(null);
      setTimeout(() => {
        setMsg({ text: 'Lượt của Máy...', type: 'info' });
        setIsXNext(false);
      }, 1500);
    }
  };

  // Nước đi của bot
  useEffect(() => {
    if (!isXNext && !roundWinner) {
      const timer = setTimeout(() => {
        const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(val => val !== null);
        if (emptyCells.length === 0) {
          setRoundWinner('draw');
          setMsg({ text: 'Hòa nhau hiệp này!', type: 'info' });
          return;
        }

        let botMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        
        // Thử chặn chuỗi 4 ô của người chơi
        for (const idx of emptyCells) {
          const testBoard = [...board];
          testBoard[idx] = { player: 'X' };
          const winTest = checkWinner(testBoard);
          if (winTest && winTest.player === 'X') {
            botMove = idx;
            break;
          }
        }

        const landmark = VIETNAM_LANDMARKS[botMove] || VIETNAM_LANDMARKS[0];
        const newBoard = [...board];
        newBoard[botMove] = { 
          player: 'O', 
          landmark: landmark.name, 
          province: landmark.province,
          region: landmark.region,
          image: landmark.image,
          desc: landmark.desc,
          history: landmark.history
        };
        setBoard(newBoard);
        
        const winnerData = checkWinner(newBoard);
        if (winnerData && winnerData.player === 'O') {
          setRoundWinner('bot');
          setWinLine(winnerData.line);
          setMsg({ text: 'Rất tiếc! Máy đã thắng hiệp này.', type: 'error' });
        } else {
          setIsXNext(true);
          setMsg({ text: 'Lượt của Bạn (Chọn 1 ô vuông màu trắng để nhận câu hỏi)', type: 'info' });
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, roundWinner]);

  // Sang hiệp đấu tiếp theo
  const startNextRound = () => {
    setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    setIsXNext(true);
    setActiveCell(null);
    setCurrentQuestion(null);
    setRoundWinner(null);
    setWinLine([]);
    setShowVirtualJourney(false);
    setIsAutoTourRunning(false);
    setActiveStationIndex(0);
    setCurrentRound(r => r + 1);
    setMsg({ text: `Bước vào Hiệp ${currentRound + 1}! Đạt 5 ô thẳng hàng để tiến tới Cúp Đại Thắng!`, type: 'info' });
  };

  // Khởi động lại toàn bộ
  const resetEntireGame = () => {
    setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    setIsXNext(true);
    setActiveCell(null);
    setCurrentQuestion(null);
    setRoundWinner(null);
    setWinLine([]);
    setUserWinCount(0);
    setCurrentRound(1);
    setIsGrandVictory(false);
    setShowVirtualJourney(false);
    setIsAutoTourRunning(false);
    setActiveStationIndex(0);
    setMsg({ text: 'Lượt của Bạn (Chọn 1 ô vuông màu trắng để nhận câu hỏi)', type: 'info' });
  };

  // Lọc các địa danh đã được chiếm đóng trong ván chơi
  const journeyStations = board
    .map((cell, idx) => cell && cell.player === 'X' ? { ...cell, cellIndex: idx, isWinningPiece: winLine.includes(idx) } : null)
    .filter(Boolean)
    .sort((a, b) => {
      if (a.isWinningPiece && !b.isWinningPiece) return -1;
      if (!a.isWinningPiece && b.isWinningPiece) return 1;
      return a.cellIndex - b.cellIndex;
    });

  // Tự động lướt hành trình
  useEffect(() => {
    let timer;
    if (isAutoTourRunning && journeyStations.length > 0) {
      timer = setInterval(() => {
        setActiveStationIndex(prev => (prev + 1) % journeyStations.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isAutoTourRunning, journeyStations.length]);

  return (
    <div className="bg-surface rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-5xl mx-auto animate-fade-in relative font-sans">
      
      {/* Hiệu ứng pháo hoa khi chiến thắng */}
      <FireworksEffect active={roundWinner === 'user' || isGrandVictory} />

      {/* Header Game sáng sủa như phiên bản đầu */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Target className="text-primary" />
            <span>Cờ Caro Lịch sử & Địa lý</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Ghi được <strong>5 dấu thẳng hàng liên tiếp</strong> trong <strong>3 lượt chơi</strong> để giành Đại Thắng!
          </p>
        </div>

        {/* Tiến trình 3 Lượt Thắng */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-800 shadow-sm">
            <Trophy size={16} className="text-amber-500" />
            <span>Chiến dịch: Thắng {userWinCount}/{REQUIRED_WINS_FOR_GRAND_VICTORY} Hiệp</span>
          </div>

          {journeyStations.length > 0 && (
            <button
              onClick={() => setShowVirtualJourney(true)}
              className="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition cursor-pointer flex items-center gap-1 shadow-sm"
            >
              <Sparkles size={14} className="text-amber-500" />
              <span>Hành Trình Ảo ({journeyStations.length})</span>
            </button>
          )}

          <button 
            onClick={resetEntireGame}
            className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition cursor-pointer"
            title="Chơi lại"
          >
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* ========================================================================= */}
        {/* BÀN CỜ VỚI HÌNH CHÌM BẢN ĐỒ VIỆT NAM (KHÔNG QUÁ NỔI BẬT NHƯNG ĐỦ THẤY)   */}
        {/* ========================================================================= */}
        <div className="flex-1 max-w-lg mx-auto w-full relative">
          
          {/* Khung chứa bàn cờ nền sáng */}
          <div className="relative p-2.5 sm:p-3 bg-gray-100/90 rounded-2xl border border-gray-200 shadow-inner overflow-hidden aspect-square">
            
            {/* HÌNH CHÌM BẢN ĐỒ VIỆT NAM (SUBTLE WATERMARK ĐỦ THẤY) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-3 select-none">
              <svg 
                viewBox="0 0 350 480" 
                className="w-full h-full text-indigo-900/[0.12] fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dải đất hình chữ S Việt Nam */}
                <path d="M 120 30 C 145 25, 175 35, 185 55 C 190 70, 170 85, 155 95 C 140 105, 145 125, 150 145 C 155 165, 170 185, 180 205 C 195 235, 205 265, 200 295 C 195 325, 180 345, 160 365 C 140 385, 125 410, 115 435 C 105 455, 85 465, 75 450 C 65 435, 75 415, 85 395 C 95 375, 110 355, 120 335 C 130 315, 140 285, 135 255 C 130 225, 115 205, 105 185 C 95 165, 90 135, 95 115 C 100 85, 95 55, 120 30 Z" />
                
                {/* Quần đảo Hoàng Sa */}
                <g className="text-amber-700/[0.22]">
                  <circle cx="270" cy="190" r="8" />
                  <circle cx="283" cy="183" r="5" />
                  <circle cx="265" cy="202" r="5" />
                  <text x="235" y="172" fontSize="11" fontWeight="bold" fill="currentColor">Q.Đ Hoàng Sa</text>
                </g>

                {/* Quần đảo Trường Sa */}
                <g className="text-amber-700/[0.22]">
                  <circle cx="250" cy="340" r="7" />
                  <circle cx="265" cy="355" r="6" />
                  <circle cx="240" cy="365" r="5" />
                  <circle cx="275" cy="330" r="6" />
                  <text x="220" y="322" fontSize="11" fontWeight="bold" fill="currentColor">Q.Đ Trường Sa</text>
                </g>

                {/* Đảo Phú Quốc & Côn Đảo */}
                <circle cx="65" cy="425" r="8" className="text-indigo-900/[0.15]" />
                <circle cx="160" cy="445" r="6" className="text-indigo-900/[0.15]" />
              </svg>
            </div>

            {/* LƯỚI 8x8: CÁC Ô VUÔNG MÀU TRẮNG TINH (CHỈ HIỆN ĐỊA DANH KHI TRẢ LỜI ĐÚNG) */}
            <div className="grid grid-cols-8 gap-1 sm:gap-1.5 h-full w-full relative z-10">
              {board.map((cell, idx) => {
                const isSelected = activeCell === idx;
                const isWinPiece = winLine.includes(idx);
                const isUser = cell?.player === 'X';

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCellClick(idx)}
                    disabled={cell !== null || roundWinner !== null || !isXNext || activeCell !== null}
                    className={`
                      relative flex flex-col items-center justify-center rounded-xl font-bold transition-all duration-200 cursor-pointer overflow-hidden
                      ${!cell ? 'bg-white hover:bg-sky-50 shadow-sm border border-gray-200/90' : 'bg-white shadow-md border border-gray-300'}
                      ${isSelected ? 'bg-sky-100 ring-2 ring-primary animate-pulse z-20 scale-105' : ''}
                      ${isWinPiece ? 'bg-green-200 ring-4 ring-green-500 z-30 scale-110 shadow-lg animate-bounce' : ''}
                      h-full w-full
                    `}
                    style={{
                      backgroundImage: cell ? `url(${cell.image})` : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* CHỈ KHI TRẢ LỜI ĐÚNG MỚI HIỆN LÊN ĐỊA DANH & KÝ HIỆU */}
                    {cell && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[0.5px] rounded-xl p-0.5 animate-fade-in">
                        <span className={`font-black text-xs sm:text-base drop-shadow-md ${isUser ? 'text-sky-300' : 'text-red-400'}`}>
                          {cell.player}
                        </span>
                        <span 
                          className="text-[6.5px] sm:text-[8px] text-white font-bold uppercase px-0.5 w-full text-center truncate leading-tight mt-0.5" 
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.9)' }}
                        >
                          {cell.landmark}
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          <div className="text-center mt-3 font-bold text-gray-600 text-xs sm:text-sm">
            Luật: Đạt <strong>5 ô liên tiếp</strong> (Ngang, Dọc, Chéo) trong <strong>3 lượt chơi</strong> để chiến thắng!
          </div>
        </div>

        {/* ========================================================================= */}
        {/* KHUNG CÂU HỎI & THÔNG BÁO (GIỮ NGUYÊN PHONG CÁCH SÁNG SỦA BAN ĐẦU)        */}
        {/* ========================================================================= */}
        <div className="flex-1 flex flex-col">
          
          {/* Thanh thông báo lượt chơi */}
          <div className={`p-4 rounded-xl mb-6 font-bold flex items-center justify-center gap-2 text-center text-sm shadow-sm transition-all ${
            msg.type === 'info' ? 'bg-sky-50 text-sky-700 border border-sky-100' : 
            msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 
            'bg-red-50 text-red-600 border border-red-200'
          }`}>
            {msg.type === 'success' && <Trophy size={20} className="text-green-600" />}
            {msg.type === 'error' && <X size={20} />}
            {msg.type === 'info' && <Target size={18} className="text-sky-600" />}
            <span>{msg.text}</span>
          </div>

          {/* Khung câu hỏi thử thách khi bấm vào 1 ô vuông trắng */}
          {currentQuestion ? (
            <div className="bg-white p-6 rounded-2xl border-2 border-primary shadow-lg shadow-sky-100 animate-slide-up flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    currentQuestion.type === 'his' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {currentQuestion.type === 'his' ? 'LỊCH SỬ' : 'ĐỊA LÝ'}
                  </span>
                  <span className="text-gray-400 text-xs font-medium">THCS (Lớp 6-9)</span>
                </div>
                <button
                  type="button"
                  onClick={() => { setActiveCell(null); setCurrentQuestion(null); }}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                  title="Hủy chọn ô"
                >
                  <X size={16} />
                </button>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-6 flex-1 leading-relaxed">
                {currentQuestion.text}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAnswer(opt)}
                    className="p-3.5 text-left rounded-xl border border-gray-200 hover:border-primary hover:bg-sky-50 hover:text-primary font-medium text-gray-700 text-xs sm:text-sm transition cursor-pointer active:scale-98"
                  >
                    <span className="font-bold mr-2 text-primary">{['A', 'B', 'C', 'D'][idx]}.</span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center">
              <div className="text-gray-400">
                <Target size={48} className="mx-auto mb-4 opacity-50 text-primary" />
                <p className="font-medium text-gray-700">Vui lòng chọn 1 ô vuông trên bàn cờ để nhận câu hỏi.</p>
                <p className="text-sm mt-2 text-gray-500">Trả lời đúng sẽ chiếm được ô vuông và đặt Địa danh của bạn!</p>
              </div>
            </div>
          )}

          {/* Nút hành động chuyển Hiệp khi thắng */}
          {roundWinner === 'user' && !isGrandVictory && (
            <div className="mt-4 p-4 bg-green-50 rounded-2xl border border-green-200 text-center space-y-2 animate-fade-in">
              <p className="text-xs font-bold text-green-800">
                Bạn đã thắng Hiệp {currentRound}! Hãy tiếp tục để giành Cúp Đại Thắng trong 3 lượt chơi.
              </p>
              <button
                type="button"
                onClick={startNextRound}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm rounded-xl shadow-md hover:brightness-110 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Bước Sang Hiệp {currentRound + 1} Tiếp Theo</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Nút khi Đại thắng 3 Hiệp */}
          {isGrandVictory && (
            <div className="mt-4 p-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-lg text-center space-y-2 animate-bounce">
              <h4 className="text-base font-black">🏆 ĐẠI THẮNG CHIẾN DỊCH XUYÊN VIỆT!</h4>
              <button
                type="button"
                onClick={() => setShowVirtualJourney(true)}
                className="w-full py-2.5 bg-white text-orange-600 font-bold text-xs sm:text-sm rounded-xl shadow hover:bg-amber-50 transition cursor-pointer"
              >
                Xem Tổng Kết Hành Trình Ảo Xuyên Việt
              </button>
            </div>
          )}

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL: HÀNH TRÌNH ẢO XUYÊN VIỆT - TỔNG KẾT ĐỊA DANH & LỊCH SỬ HÀO HÙNG     */}
      {/* ========================================================================= */}
      {showVirtualJourney && (
        <div className="fixed inset-0 z-[999999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-4 sm:px-7 sm:py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/20 text-yellow-300 flex items-center justify-center font-black text-xl shadow-inner flex-shrink-0">
                  🗺️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-white">
                      Tổng Kết Sau Trận Đấu
                    </span>
                    <span className="text-xs text-sky-100">
                      {journeyStations.length} Trạm Dừng Chân Đã Mở Khóa
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    Hành Trình Ảo: Khám Phá Địa Danh & Lịch Sử Việt Nam
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowVirtualJourney(false)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-xl transition cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Sub-bar điều khiển Auto Tour */}
            <div className="bg-slate-50 p-2.5 px-4 sm:px-7 flex items-center justify-between border-b border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoTourRunning(!isAutoTourRunning)}
                  className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition cursor-pointer ${
                    isAutoTourRunning 
                      ? 'bg-amber-500 text-white shadow-sm' 
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                  }`}
                >
                  {isAutoTourRunning ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isAutoTourRunning ? 'Tạm Dừng Thuyết Minh' : '🚀 Chạy Tự Động Hành Trình (Auto Tour)'}</span>
                </button>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="text-slate-500 hidden sm:inline">
                  Đang xem trạm <strong>{activeStationIndex + 1}</strong> / {journeyStations.length}
                </span>
              </div>

              {/* Nút lùi/tiến trạm */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setActiveStationIndex(prev => (prev - 1 + journeyStations.length) % journeyStations.length)}
                  className="p-1.5 bg-white text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-300 transition"
                  title="Trạm trước"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStationIndex(prev => (prev + 1) % journeyStations.length)}
                  className="p-1.5 bg-white text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-300 transition"
                  title="Trạm tiếp theo"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* NỘI DUNG HÀNH TRÌNH ẢO CHI TIẾT */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5">
              
              {journeyStations.length === 0 ? (
                <div className="text-center py-10 text-slate-400 text-xs">
                  Chưa có địa danh nào được cắm cờ trong ván này. Hãy trả lời đúng các câu hỏi để mở khóa hành trình!
                </div>
              ) : (() => {
                const currentStation = journeyStations[activeStationIndex] || journeyStations[0];

                return (
                  <div className="space-y-5">
                    
                    {/* THẺ CHI TIẾT ĐỊA DANH ĐANG XEM */}
                    <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-lg border border-slate-800 flex flex-col md:flex-row gap-5">
                      
                      {/* Ảnh minh họa địa danh */}
                      <div className="w-full md:w-2/5 flex-shrink-0 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto shadow border border-white/10">
                        <img 
                          src={currentStation.image} 
                          alt={currentStation.landmark}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white shadow flex items-center gap-1">
                          <Flag size={11} className="text-yellow-300" />
                          <span>{currentStation.region}</span>
                        </div>
                        {currentStation.isWinningPiece && (
                          <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-xl text-[10px] font-black bg-amber-400 text-slate-950 text-center shadow">
                            ⭐ Nằm trong Chuỗi 5 Ô Thắng Trận!
                          </div>
                        )}
                      </div>

                      {/* Thông tin mô tả địa lý & giai đoạn lịch sử */}
                      <div className="flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold mb-1">
                            <MapPin size={14} />
                            <span>Tỉnh {currentStation.province}</span>
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-white">
                            {currentStation.landmark}
                          </h4>
                        </div>

                        {/* TÓM TẮT ĐỊA LÝ (DESCRIPTION) */}
                        <div className="bg-white/10 p-3 rounded-xl border border-white/10 space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 flex items-center gap-1">
                            <Compass size={13} />
                            <span>Tóm tắt Địa lý & Cảnh quan thiên nhiên:</span>
                          </span>
                          <p className="text-xs text-slate-200 leading-relaxed font-medium">
                            {currentStation.desc}
                          </p>
                        </div>

                        {/* KỂ VỀ GIAI ĐOẠN LỊCH SỬ HÀO HÙNG */}
                        <div className="bg-amber-400/10 p-3 rounded-xl border border-amber-300/20 space-y-1">
                          <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1">
                            <Award size={13} />
                            <span>Giai đoạn & Dấu ấn Lịch sử hào hùng:</span>
                          </span>
                          <p className="text-xs text-amber-100 leading-relaxed font-medium">
                            {currentStation.history}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* DẢI TIẾN TRÌNH LỘ TRÌNH DỌC BẮC NAM */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>LỘ TRÌNH ĐỊA DANH ĐÃ XUẤT HIỆN TRONG LƯỢT CHƠI ({journeyStations.length} ĐIỂM):</span>
                        <span className="text-primary text-[11px]">Bấm vào từng trạm để xem</span>
                      </div>

                      <div className="flex gap-2 overflow-x-auto pb-2 pt-1 hide-scrollbar">
                        {journeyStations.map((st, sIdx) => {
                          const isActive = sIdx === activeStationIndex;
                          return (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={() => {
                                setActiveStationIndex(sIdx);
                                setIsAutoTourRunning(false);
                              }}
                              className={`flex-shrink-0 p-2 rounded-xl border transition-all text-left flex items-center gap-2 cursor-pointer ${
                                isActive 
                                  ? 'bg-primary text-white border-primary shadow-sm scale-105' 
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-primary/50 hover:bg-sky-50/50'
                              }`}
                            >
                              <div className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center flex-shrink-0 ${
                                isActive ? 'bg-white text-primary' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {sIdx + 1}
                              </div>
                              <div className="text-xs pr-1">
                                <strong className="block truncate max-w-[110px]">{st.landmark}</strong>
                                <span className={`text-[9px] block ${isActive ? 'text-sky-100' : 'text-slate-400'}`}>
                                  {st.province}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                );
              })()}

            </div>

            {/* Footer Modal Action */}
            <div className="p-3 sm:px-6 sm:py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                ⭐ Tích lũy kiến thức qua mỗi bước đi trên dải đất non sông Việt Nam!
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {roundWinner === 'user' && !isGrandVictory && (
                  <button
                    type="button"
                    onClick={startNextRound}
                    className="flex-1 sm:flex-none px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow hover:brightness-110 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Tiếp Tục Hiệp {currentRound + 1}</span>
                    <ArrowRight size={15} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setShowVirtualJourney(false)}
                  className="flex-1 sm:flex-none px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-xl transition cursor-pointer"
                >
                  Đóng Hành Trình
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
