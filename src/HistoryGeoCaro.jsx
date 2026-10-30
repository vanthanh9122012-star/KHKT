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

const BOARD_SIZE = 8; // Bàn cờ 8x8 (64 địa danh tương ứng với 64 tỉnh thành & biển đảo Việt Nam)
const WIN_CONDITION = 5; // Luật mới: Cần 5 dấu liên tiếp thẳng hàng (Ngang, Dọc, Chéo) để thắng!
const REQUIRED_WINS_FOR_GRAND_VICTORY = 3; // Thể thức 3 Lượt chơi: Phải thắng 3 hiệp để đoạt ĐẠI THẮNG CHIẾN DỊCH

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
  // Bàn cờ 8x8 = 64 ô
  const [board, setBoard] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [activeCell, setActiveCell] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [msg, setMsg] = useState({ text: 'Lượt của bạn: Hãy chọn 1 địa danh trên bản đồ Việt Nam để nhận thử thách!', type: 'info' });
  const [roundWinner, setRoundWinner] = useState(null); // 'user' | 'bot' | null
  const [winLine, setWinLine] = useState([]);
  
  // Hệ thống 3 Vòng chơi (3 Lượt Thắng để giành Đại Thắng Chiến Dịch)
  const [userWinCount, setUserWinCount] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [isGrandVictory, setIsGrandVictory] = useState(false);

  // Màn hình Hành Trình Ảo
  const [showVirtualJourney, setShowVirtualJourney] = useState(false);
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [isAutoTourRunning, setIsAutoTourRunning] = useState(false);
  const [viewMode, setViewMode] = useState('vietnam_map'); // 'vietnam_map' | 'tactical_grid'

  // Kiểm tra 5 ô liên tiếp thẳng hàng (Ngang, Dọc, Chéo chính, Chéo phụ)
  const checkWinner = (squares) => {
    // 1. Kiểm tra hàng ngang (Horizontal)
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

    // 2. Kiểm tra hàng dọc (Vertical)
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
      text: `Đang chiếm đóng: ${landmark.name} (${landmark.province})! Trả lời đúng để cắm cờ Tổ quốc!`, 
      type: 'info' 
    });
  };

  const handleAnswer = (option) => {
    if (!currentQuestion) return;

    if (option === currentQuestion.correct) {
      const landmark = VIETNAM_LANDMARKS[activeCell] || VIETNAM_LANDMARKS[0];
      const newBoard = [...board];
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
        // Thắng hiệp này!
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
          setMsg({ text: `🎉 CHIẾN THẮNG HIỆP ${currentRound}! Bạn đã đạt 5 ô thẳng hàng liên tiếp (+60 XP). Chuẩn bị bước vào hành trình tiếp theo!`, type: 'success' });
          if (addReward) addReward(60, 10);
        }

        // Tự động mở Hành trình ảo sau 1.5 giây
        setTimeout(() => {
          setShowVirtualJourney(true);
        }, 1500);

      } else {
        setMsg({ text: 'Lượt của Máy (Đối thủ đang suy nghĩ nước cờ)...', type: 'info' });
        setIsXNext(false);
      }
    } else {
      setMsg({ text: `Rất tiếc! Câu trả lời chưa chính xác. Đáp án đúng là "${currentQuestion.correct}". Bạn mất lượt cờ này!`, type: 'error' });
      setActiveCell(null);
      setCurrentQuestion(null);
      setTimeout(() => {
        setMsg({ text: 'Lượt của Máy đang tiến hành chiếm điểm...', type: 'info' });
        setIsXNext(false);
      }, 1800);
    }
  };

  // Nước đi của máy (Bot AI)
  useEffect(() => {
    if (!isXNext && !roundWinner) {
      const timer = setTimeout(() => {
        const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(val => val !== null);
        if (emptyCells.length === 0) {
          setRoundWinner('draw');
          setMsg({ text: 'Bàn cờ đã kín ô! Hai bên hòa nhau hiệp này.', type: 'info' });
          return;
        }

        let botMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        
        // Bot kiểm tra nếu có thể chặn chuỗi 4 ô của người chơi
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
          setMsg({ text: 'Rất tiếc! Máy đã hoàn thành chuỗi 5 ô liên tiếp trước. Hãy bấm Chơi lại để phục thù!', type: 'error' });
        } else {
          setIsXNext(true);
          setMsg({ text: 'Lượt của bạn: Chọn 1 địa danh chiến lược để nối dài chuỗi 5 ô thẳng hàng!', type: 'info' });
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, roundWinner]);

  // Sang hiệp đấu mới
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
    setMsg({ text: `Bước vào Hiệp ${currentRound + 1}! Hãy ghi được 5 ô thẳng hàng để tiến gần đến Cúp Đại Thắng!`, type: 'info' });
  };

  // Khởi động lại toàn bộ ván đấu
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
    setMsg({ text: 'Khởi động trận đấu mới! Đạt 5 ô thẳng hàng trong 3 lượt chơi để giành Đại Thắng!', type: 'info' });
  };

  // Lọc danh sách địa danh trong Hành trình ảo (các ô do người chơi 'X' chiếm đóng)
  const journeyStations = board
    .map((cell, idx) => cell && cell.player === 'X' ? { ...cell, cellIndex: idx, isWinningPiece: winLine.includes(idx) } : null)
    .filter(Boolean)
    .sort((a, b) => {
      // Ưu tiên các ô trong đường thắng 5 ô lên đầu, sau đó sắp xếp theo thứ tự địa lý từ Bắc vào Nam
      if (a.isWinningPiece && !b.isWinningPiece) return -1;
      if (!a.isWinningPiece && b.isWinningPiece) return 1;
      return a.cellIndex - b.cellIndex;
    });

  // Tự động chạy Hành trình ảo (Auto Tour)
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
    <div className="bg-surface rounded-3xl p-4 sm:p-7 shadow-sm border border-gray-100 max-w-6xl mx-auto animate-fade-in relative overflow-hidden font-sans">
      
      {/* Hiệu ứng pháo hoa rực rỡ khi chiến thắng */}
      <FireworksEffect active={roundWinner === 'user' || isGrandVictory} />

      {/* Header Game & Tiến trình 3 Lượt Thắng */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-2">
              <Compass className="text-red-600 animate-spin-slow" />
              <span>Cờ Caro Bản Đồ Việt Nam: Khám Phá Lịch Sử & Địa Lý</span>
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-red-100 text-red-700 border border-red-200">
              Chữ S Thiêng Liêng
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Quy tắc: Tạo chuỗi <strong>5 dấu thẳng hàng liên tiếp</strong> (Ngang, Dọc, Chéo) trong <strong>3 lượt chơi</strong> để giành Đại Thắng Non Sông!
          </p>
        </div>

        {/* Thanh trạng thái 3 Lượt Thắng */}
        <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-1.5">
            <Trophy size={18} className="text-amber-500" />
            <span className="text-xs font-bold text-slate-700">Chiến dịch:</span>
            <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-200">
              Thắng {userWinCount}/{REQUIRED_WINS_FOR_GRAND_VICTORY} Hiệp
            </span>
          </div>

          <div className="flex gap-1">
            {[1, 2, 3].map(step => (
              <div 
                key={step} 
                className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center transition-all ${
                  userWinCount >= step 
                    ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300' 
                    : currentRound === step 
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-200 animate-pulse' 
                      : 'bg-slate-200 text-slate-400'
                }`}
                title={`Hiệp ${step}`}
              >
                {step}
              </div>
            ))}
          </div>

          <button 
            onClick={resetEntireGame}
            className="p-2 bg-white text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition border border-slate-200 cursor-pointer"
            title="Chơi lại từ đầu"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* Chuyển đổi góc nhìn Bản Đồ / Lưới Chiến Thuật */}
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('vietnam_map')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              viewMode === 'vietnam_map' 
                ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Flag size={14} className="text-yellow-300" />
            <span>Dáng Hình Chữ S Việt Nam</span>
          </button>

          <button
            onClick={() => setViewMode('tactical_grid')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              viewMode === 'tactical_grid' 
                ? 'bg-slate-800 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Target size={14} />
            <span>Lưới Chiến Thuật 8x8</span>
          </button>
        </div>

        {/* Nút xem Hành trình ảo nếu đã có địa danh */}
        {journeyStations.length > 0 && (
          <button
            onClick={() => setShowVirtualJourney(true)}
            className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-black rounded-xl border border-indigo-200 transition cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span>Xem Hành Trình Ảo Xuyên Việt ({journeyStations.length} trạm)</span>
          </button>
        )}
      </div>

      {/* Khung chính: Bàn cờ Bản đồ Việt Nam + Bảng câu hỏi */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* KHUNG BÀN CỜ BẢN ĐỒ VIỆT NAM (8x8) */}
        <div className="flex-1 w-full relative">
          
          {/* Card bao bọc bản đồ */}
          <div className="relative rounded-3xl p-3 sm:p-5 border-2 border-slate-200 shadow-xl overflow-hidden bg-gradient-to-b from-sky-900 via-indigo-950 to-slate-900 text-white">
            
            {/* Đồ họa trang trí Biển Đông & Dải đất hình chữ S */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 400 600" className="w-full h-full text-amber-400 stroke-current fill-none stroke-[2]">
                {/* Đường cong chữ S uốn lượn biểu trưng cho dải đất Việt Nam */}
                <path d="M 160 30 Q 230 40 210 90 T 170 170 T 180 240 T 230 330 T 210 420 T 140 480 T 110 540" />
              </svg>
            </div>

            {/* Header nhỏ trên bàn cờ */}
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-sky-200 px-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Bàn Cờ 64 Tọa Độ Địa Danh</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-300 flex items-center gap-1">
                  ⭐ Bạn: <strong>5 ô cờ đỏ sao vàng</strong>
                </span>
                <span className="text-sky-300">
                  ⚪ Máy: <strong>5 ô tròn xanh</strong>
                </span>
              </div>
            </div>

            {/* LƯỚI BÀN CỜ 8x8 */}
            <div className="grid grid-cols-8 gap-1 sm:gap-1.5 p-1.5 bg-slate-950/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-inner aspect-square w-full max-w-[540px] mx-auto">
              {board.map((cell, idx) => {
                const landmark = VIETNAM_LANDMARKS[idx] || VIETNAM_LANDMARKS[0];
                const isSelected = activeCell === idx;
                const isWinPiece = winLine.includes(idx);
                const isUser = cell?.player === 'X';
                const isBot = cell?.player === 'O';

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCellClick(idx)}
                    disabled={cell !== null || roundWinner !== null || !isXNext || activeCell !== null}
                    className={`
                      relative group flex flex-col items-center justify-between rounded-xl p-1 transition-all duration-200 overflow-hidden cursor-pointer
                      ${cell ? 'shadow-md' : 'hover:scale-105 hover:z-10'}
                      ${!cell && !isSelected ? 'bg-white/10 hover:bg-white/20 border border-white/15' : ''}
                      ${isSelected ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-300 scale-105 z-20 animate-pulse font-black' : ''}
                      ${isWinPiece ? 'ring-4 ring-yellow-400 z-30 scale-110 shadow-2xl animate-bounce' : ''}
                      ${isUser ? 'bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 border border-yellow-300' : ''}
                      ${isBot ? 'bg-gradient-to-br from-sky-600 via-indigo-700 to-slate-800 border border-sky-300' : ''}
                    `}
                    title={`${landmark.name} (${landmark.province}) - ${landmark.region}`}
                  >
                    {/* Ảnh nền mờ nhẹ nếu ô đã được chiếm */}
                    {cell && (
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                        style={{ backgroundImage: `url(${cell.image})` }}
                      />
                    )}

                    {/* Vùng miền & số thứ tự */}
                    <div className="w-full flex items-center justify-between text-[7px] sm:text-[9px] font-bold opacity-75 z-10">
                      <span>{idx + 1}</span>
                      <span className="truncate max-w-[32px]">{landmark.province.slice(0, 5)}</span>
                    </div>

                    {/* Biểu tượng trung tâm (X - Cờ đỏ sao vàng / O - Huy hiệu máy) */}
                    <div className="my-auto z-10 flex flex-col items-center justify-center">
                      {isUser && (
                        <div className="text-yellow-300 font-black text-sm sm:text-xl drop-shadow-md flex items-center justify-center">
                          ⭐
                        </div>
                      )}
                      {isBot && (
                        <div className="text-sky-300 font-black text-xs sm:text-lg drop-shadow-md">
                          ⭕
                        </div>
                      )}
                      {!cell && (
                        <div className="text-white/40 text-[9px] sm:text-xs font-semibold group-hover:text-yellow-300 transition-colors">
                          <MapPin size={12} className="mx-auto mb-0.5 opacity-60 group-hover:opacity-100" />
                        </div>
                      )}
                    </div>

                    {/* Tên địa danh rút gọn */}
                    <span className="text-[6px] sm:text-[8px] font-black uppercase tracking-tighter truncate w-full text-center z-10 leading-none">
                      {landmark.name.length > 8 ? landmark.name.slice(0, 7) + '..' : landmark.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Phụ đề 2 Quần đảo Hoàng Sa & Trường Sa thiêng liêng */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-sky-200">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <Flag size={13} className="text-red-500 fill-red-500" />
                <span>Quần đảo Hoàng Sa & Trường Sa là của Việt Nam!</span>
              </div>
              <span className="text-slate-400 text-[10px]">
                {winLine.length > 0 ? `Đường thắng 5 ô: [${winLine.map(i => i + 1).join(', ')}]` : 'Mục tiêu: 5 ô thẳng hàng'}
              </span>
            </div>

          </div>
        </div>

        {/* KHUNG CÂU HỎI THỬ THÁCH & BẢNG TIN TỨC */}
        <div className="w-full lg:w-[380px] flex flex-col space-y-4">
          
          {/* Thông báo lượt chơi */}
          <div className={`p-4 rounded-2xl font-bold flex items-center gap-2.5 text-xs sm:text-sm shadow-sm transition-all ${
            msg.type === 'info' ? 'bg-sky-50 text-sky-800 border border-sky-200' :
            msg.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-2 border-emerald-300 animate-pulse' :
            'bg-rose-50 text-rose-800 border border-rose-200'
          }`}>
            {msg.type === 'success' && <Trophy size={20} className="text-emerald-600 flex-shrink-0" />}
            {msg.type === 'error' && <X size={20} className="text-rose-600 flex-shrink-0" />}
            {msg.type === 'info' && <Compass size={20} className="text-sky-600 flex-shrink-0" />}
            <span className="leading-relaxed">{msg.text}</span>
          </div>

          {/* Hộp câu hỏi thử thách khi chọn ô */}
          {currentQuestion ? (
            <div className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-indigo-400 shadow-xl animate-fade-in flex flex-col space-y-4">
              
              {/* Header câu hỏi */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                    currentQuestion.type === 'his' 
                      ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    {currentQuestion.type === 'his' ? '🏛️ LỊCH SỬ VIỆT NAM' : '🌏 ĐỊA LÝ VIỆT NAM'}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">Ô số {activeCell + 1}</span>
                </div>
                <button
                  onClick={() => { setActiveCell(null); setCurrentQuestion(null); }}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
                  title="Hủy chọn ô này"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Thông tin địa danh đang tranh chấp */}
              {currentQuestion.targetLandmark && (
                <div className="p-3 bg-indigo-50/70 rounded-2xl border border-indigo-100 flex items-center gap-3">
                  <img 
                    src={currentQuestion.targetLandmark.image} 
                    alt={currentQuestion.targetLandmark.name}
                    className="w-12 h-12 rounded-xl object-cover shadow-sm flex-shrink-0" 
                  />
                  <div className="text-xs">
                    <span className="text-indigo-600 font-bold block text-[10px] uppercase">Địa danh chiếm đóng:</span>
                    <strong className="text-slate-800 font-black text-sm">{currentQuestion.targetLandmark.name}</strong>
                    <span className="text-slate-500 block text-[11px]">{currentQuestion.targetLandmark.province} • {currentQuestion.targetLandmark.region}</span>
                  </div>
                </div>
              )}

              {/* Nội dung câu hỏi */}
              <h3 className="text-sm sm:text-base font-black text-slate-800 leading-relaxed">
                {currentQuestion.text}
              </h3>

              {/* 4 Phương án trả lời */}
              <div className="space-y-2 pt-1">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleAnswer(opt)}
                    className="w-full text-left p-3 rounded-2xl border-2 border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 font-bold text-xs sm:text-sm text-slate-700 transition flex items-center gap-2.5 cursor-pointer group active:scale-98"
                  >
                    <span className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white text-slate-600 font-black text-xs flex items-center justify-center flex-shrink-0 transition-colors">
                      {['A', 'B', 'C', 'D'][idx]}
                    </span>
                    <span className="leading-snug">{opt}</span>
                  </button>
                ))}
              </div>

            </div>
          ) : (
            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-dashed border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-sm">
                <Target size={26} />
              </div>
              <h4 className="text-sm font-black text-slate-800">Sẵn Sàng Nhận Lệnh Xuất Quân!</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hãy click vào 1 ô vuông trên Bản đồ Việt Nam để nhận câu hỏi Lịch sử/Địa lý. 
                Trả lời đúng sẽ cắm cờ Tổ quốc và kích hoạt địa danh đó!
              </p>
              <div className="text-[11px] font-bold text-amber-700 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                💡 Mục tiêu: Đạt 5 ô cờ đỏ sao vàng thẳng hàng liên tiếp để chiến thắng!
              </div>
            </div>
          )}

          {/* Nút hành động chuyển hiệp khi thắng một hiệp */}
          {roundWinner === 'user' && !isGrandVictory && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-center space-y-2 animate-fade-in shadow-md">
              <h4 className="text-sm font-black text-emerald-900">Chiến Thắng Hiệp {currentRound}!</h4>
              <p className="text-xs text-emerald-700">Bạn đã hoàn thành 5 ô thẳng hàng. Hãy tiếp tục để giành Cúp Đại Thắng!</p>
              <button
                type="button"
                onClick={startNextRound}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-md hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tiến Vào Hiệp {currentRound + 1} Tiếp Theo</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Nút hành động khi Đại thắng 3 Hiệp */}
          {isGrandVictory && (
            <div className="p-4 bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 text-white rounded-2xl shadow-xl text-center space-y-2 animate-bounce">
              <h4 className="text-base font-black">🏆 ĐẠI THẮNG CHIẾN DỊCH XUYÊN VIỆT!</h4>
              <p className="text-xs text-amber-100">Bạn đã xuất sắc thắng trọn vẹn 3 hiệp chơi!</p>
              <button
                type="button"
                onClick={() => setShowVirtualJourney(true)}
                className="w-full py-3 bg-white text-orange-700 font-black text-xs sm:text-sm rounded-xl shadow-lg hover:bg-amber-50 transition cursor-pointer"
              >
                🌟 Khám Phá Toàn Diện Hành Trình Ảo Xuyên Việt
              </button>
            </div>
          )}

        </div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL: HÀNH TRÌNH ẢO XUYÊN VIỆT - TỔNG KẾT ĐỊA DANH & LỊCH SỬ HÀO HÙNG     */}
      {/* ========================================================================= */}
      {showVirtualJourney && (
        <div className="fixed inset-0 z-[999999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in">
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white p-4 sm:px-7 sm:py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-yellow-300 flex items-center justify-center font-black text-2xl shadow-inner flex-shrink-0">
                  🗺️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full text-yellow-200">
                      Tổng Kết Sau Trận Đấu
                    </span>
                    <span className="text-xs font-semibold text-rose-100">
                      {journeyStations.length} Trạm Dừng Chân Đã Mở Khóa
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                    Hành Trình Ảo Xuyên Việt: Dấu Ấn Lịch Sử & Non Sông Gấm Vóc
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowVirtualJourney(false)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-2xl transition cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Sub-bar điều khiển Auto Tour */}
            <div className="bg-slate-100 p-2.5 px-4 sm:px-7 flex items-center justify-between border-b border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoTourRunning(!isAutoTourRunning)}
                  className={`px-3 py-1.5 rounded-xl font-black flex items-center gap-1.5 transition cursor-pointer ${
                    isAutoTourRunning 
                      ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300' 
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
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
                  className="p-1.5 bg-white text-slate-700 hover:bg-slate-200 rounded-lg border border-slate-300 transition"
                  title="Trạm trước"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStationIndex(prev => (prev + 1) % journeyStations.length)}
                  className="p-1.5 bg-white text-slate-700 hover:bg-slate-200 rounded-lg border border-slate-300 transition"
                  title="Trạm tiếp theo"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* NỘI DUNG HÀNH TRÌNH ẢO CHI TIẾT */}
            <div className="p-4 sm:p-7 overflow-y-auto flex-1 space-y-6">
              
              {journeyStations.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  Chưa có địa danh nào được cắm cờ. Hãy quay lại chơi và trả lời đúng các câu hỏi để mở khóa hành trình!
                </div>
              ) : (() => {
                const currentStation = journeyStations[activeStationIndex] || journeyStations[0];

                return (
                  <div className="space-y-6">
                    
                    {/* KHUNG THẺ CHI TIẾT ĐỊA DANH ĐANG XEM */}
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-5 sm:p-7 shadow-xl border border-white/10 relative overflow-hidden flex flex-col md:flex-row gap-6">
                      
                      {/* Ảnh minh họa địa danh */}
                      <div className="w-full md:w-2/5 flex-shrink-0 relative rounded-2xl overflow-hidden aspect-video md:aspect-auto shadow-lg border border-white/20">
                        <img 
                          src={currentStation.image} 
                          alt={currentStation.landmark}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] font-black bg-red-600 text-white shadow-md flex items-center gap-1">
                          <Flag size={12} className="text-yellow-300" />
                          <span>{currentStation.region}</span>
                        </div>
                        {currentStation.isWinningPiece && (
                          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl text-[11px] font-black bg-amber-500/90 text-slate-950 backdrop-blur-md shadow-md text-center">
                            ⭐ Thuộc Chuỗi 5 Ô Quyết Định Chiến Thắng!
                          </div>
                        )}
                      </div>

                      {/* Nội dung Tóm Tắt Địa Lý & Kể Về Giai Đoạn Lịch Sử */}
                      <div className="flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-amber-300 font-bold mb-1">
                            <MapPin size={15} />
                            <span>Tỉnh {currentStation.province} • Tọa độ ô cờ: #{currentStation.cellIndex + 1}</span>
                          </div>
                          <h4 className="text-xl sm:text-2xl font-black text-white">
                            {currentStation.landmark}
                          </h4>
                        </div>

                        {/* TÓM TẮT ĐỊA LÝ (DESCRIPTION) */}
                        <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10 space-y-1 backdrop-blur-sm">
                          <span className="text-[11px] font-black uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                            <Compass size={14} />
                            <span>Tóm tắt Địa lý & Cảnh quan thiên nhiên:</span>
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                            {currentStation.desc}
                          </p>
                        </div>

                        {/* KỂ VỀ GIAI ĐOẠN LỊCH SỬ HÀO HÙNG */}
                        <div className="bg-amber-400/15 p-3.5 rounded-2xl border border-amber-300/30 space-y-1 backdrop-blur-sm">
                          <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                            <Award size={14} />
                            <span>Giai đoạn & Dấu ấn Lịch sử hào hùng:</span>
                          </span>
                          <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-medium">
                            {currentStation.history}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* DẢI TIẾN TRÌNH TUYẾN HÀNH TRÌNH (TIMELINE STRIP) */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-black text-slate-700">
                        <span>LỘ TRÌNH DỌC DẢI ĐẤT HÌNH CHỮ S ({journeyStations.length} ĐIỂM DỪNG CHÂN):</span>
                        <span className="text-indigo-600">Nhấn vào từng trạm để khám phá</span>
                      </div>

                      <div className="flex gap-2 overflow-x-auto pb-3 pt-1 hide-scrollbar">
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
                              className={`flex-shrink-0 p-2.5 rounded-2xl border-2 transition-all text-left flex items-center gap-2.5 cursor-pointer ${
                                isActive 
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-105' 
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center flex-shrink-0 ${
                                isActive ? 'bg-white text-indigo-700' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {sIdx + 1}
                              </div>
                              <div className="text-xs pr-2">
                                <strong className="block truncate max-w-[120px]">{st.landmark}</strong>
                                <span className={`text-[10px] block ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
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
            <div className="p-4 sm:px-7 sm:py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                ⭐ Chúc mừng bạn đã mở rộng hiểu biết về non sông đất nước Việt Nam!
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                {roundWinner === 'user' && !isGrandVictory && (
                  <button
                    type="button"
                    onClick={startNextRound}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs sm:text-sm rounded-xl shadow-md hover:brightness-110 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Tiếp Tục Hiệp {currentRound + 1}</span>
                    <ArrowRight size={16} />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setShowVirtualJourney(false)}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-black text-xs sm:text-sm rounded-xl transition cursor-pointer"
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
