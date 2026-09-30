import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, X, RefreshCw, Trophy } from 'lucide-react';

const QUESTIONS = [
  // Lịch sử 6
  { type: 'his', text: 'Nhà nước Văn Lang do ai đứng đầu?', options: ['An Dương Vương', 'Hùng Vương', 'Lý Nam Đế', 'Mai Thúc Loan'], correct: 'Hùng Vương' },
  { type: 'his', text: 'Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?', options: ['Lê Hoàn', 'Ngô Quyền', 'Trần Hưng Đạo', 'Lý Thường Kiệt'], correct: 'Ngô Quyền' },
  { type: 'his', text: 'Cuộc khởi nghĩa Hai Bà Trưng nổ ra năm nào?', options: ['Năm 40', 'Năm 248', 'Năm 542', 'Năm 938'], correct: 'Năm 40' },
  
  // Lịch sử 7
  { type: 'his', text: 'Ai là tác giả của "Hịch tướng sĩ"?', options: ['Trần Quốc Tuấn', 'Trần Thủ Độ', 'Nguyễn Trãi', 'Lý Thường Kiệt'], correct: 'Trần Quốc Tuấn' },
  { type: 'his', text: 'Cuộc khởi nghĩa Lam Sơn do ai lãnh đạo?', options: ['Lê Lợi', 'Nguyễn Trãi', 'Quang Trung', 'Lê Hoàn'], correct: 'Lê Lợi' },
  { type: 'his', text: 'Bộ luật Hồng Đức được ban hành dưới triều vua nào?', options: ['Lê Thái Tổ', 'Lê Thánh Tông', 'Lý Thái Tổ', 'Trần Nhân Tông'], correct: 'Lê Thánh Tông' },
  
  // Lịch sử 8
  { type: 'his', text: 'Thực dân Pháp bắt đầu nổ súng xâm lược Việt Nam vào năm nào?', options: ['1858', '1884', '1867', '1873'], correct: '1858' },
  { type: 'his', text: 'Phong trào Cần Vương bùng nổ vào năm nào?', options: ['1885', '1858', '1884', '1890'], correct: '1885' },
  { type: 'his', text: 'Khởi nghĩa Yên Thế do ai lãnh đạo?', options: ['Phan Đình Phùng', 'Hoàng Hoa Thám', 'Nguyễn Thái Học', 'Tôn Thất Thuyết'], correct: 'Hoàng Hoa Thám' },

  // Lịch sử 9
  { type: 'his', text: 'Đảng Cộng sản Việt Nam ra đời ngày tháng năm nào?', options: ['3/2/1930', '19/8/1945', '2/9/1945', '7/5/1954'], correct: '3/2/1930' },
  { type: 'his', text: 'Bác Hồ đọc bản Tuyên ngôn Độc lập vào ngày nào?', options: ['2/9/1945', '19/8/1945', '7/5/1954', '30/4/1975'], correct: '2/9/1945' },
  { type: 'his', text: 'Chiến thắng Điện Biên Phủ diễn ra vào năm nào?', options: ['1954', '1945', '1975', '1930'], correct: '1954' },
  { type: 'his', text: 'Chiến dịch Hồ Chí Minh toàn thắng vào thời gian nào?', options: ['30/4/1975', '7/5/1954', '2/9/1945', '27/1/1973'], correct: '30/4/1975' },

  // Địa lý 6
  { type: 'geo', text: 'Trái Đất có hình gì?', options: ['Hình cầu', 'Hình tròn', 'Hình bầu dục', 'Hình nón'], correct: 'Hình cầu' },
  { type: 'geo', text: 'Lục địa nào có diện tích lớn nhất?', options: ['Á - Âu', 'Châu Phi', 'Bắc Mỹ', 'Nam Mỹ'], correct: 'Á - Âu' },
  { type: 'geo', text: 'Lớp vỏ Trái Đất có độ dày khoảng bao nhiêu?', options: ['5 - 70km', '100 - 200km', '2900km', '5100km'], correct: '5 - 70km' },

  // Địa lý 7
  { type: 'geo', text: 'Châu Phi có khí hậu chủ yếu là gì?', options: ['Nóng, khô', 'Lạnh giá', 'Ôn hòa', 'Mát mẻ'], correct: 'Nóng, khô' },
  { type: 'geo', text: 'Dân cư châu Nam Cực chủ yếu là ai?', options: ['Không có dân cư thường xuyên', 'Người da trắng', 'Người da vàng', 'Người da đen'], correct: 'Không có dân cư thường xuyên' },
  { type: 'geo', text: 'Châu Âu nằm ở đới khí hậu nào?', options: ['Đới ôn hòa', 'Đới nóng', 'Đới lạnh', 'Nhiệt đới gió mùa'], correct: 'Đới ôn hòa' },

  // Địa lý 8
  { type: 'geo', text: 'Đỉnh núi cao nhất Việt Nam là?', options: ['Fansipan', 'Bạch Mã', 'Langbiang', 'Tây Côn Lĩnh'], correct: 'Fansipan' },
  { type: 'geo', text: 'Sông dài nhất chảy trên lãnh thổ Việt Nam là?', options: ['Sông Đồng Nai', 'Sông Hồng', 'Sông Mê Kông', 'Sông Thái Bình'], correct: 'Sông Đồng Nai' },
  { type: 'geo', text: 'Nước ta nằm ở đới khí hậu nào?', options: ['Nhiệt đới gió mùa', 'Ôn đới', 'Hàn đới', 'Cận nhiệt đới'], correct: 'Nhiệt đới gió mùa' },

  // Địa lý 9
  { type: 'geo', text: 'Vùng nào trồng nhiều lúa gạo nhất nước ta?', options: ['Đồng bằng sông Cửu Long', 'Đồng bằng sông Hồng', 'Đông Nam Bộ', 'Tây Nguyên'], correct: 'Đồng bằng sông Cửu Long' },
  { type: 'geo', text: 'Cây công nghiệp lâu năm được trồng nhiều nhất ở Tây Nguyên là gì?', options: ['Cà phê', 'Cao su', 'Hồ tiêu', 'Chè'], correct: 'Cà phê' },
  { type: 'geo', text: 'Vùng nào có sản lượng thủy sản lớn nhất nước ta?', options: ['Đồng bằng sông Cửu Long', 'Duyên hải Nam Trung Bộ', 'Bắc Trung Bộ', 'Đồng bằng sông Hồng'], correct: 'Đồng bằng sông Cửu Long' },
];

const LANDMARKS = [
  "Hạ Long", "Hội An", "Cố đô Huế", "Tràng An", "Phong Nha", 
  "Mỹ Sơn", "Sapa", "Đà Lạt", "Phú Quốc", "Nha Trang", 
  "Côn Đảo", "Bà Nà", "Fansipan", "Mũi Né", "Cát Bà", 
  "Bến Thành", "Hồ Gươm", "Lăng Bác", "Tam Cốc", "Pù Luông",
  "Đồng Văn", "Bản Giốc", "Cần Thơ", "Chợ Nổi", "Địa Đạo"
];

const BOARD_SIZE = 7; // 7x7 board
const WIN_CONDITION = 4; // 4 in a row to win

export default function HistoryGeoCaro({ addReward }) {
  const [board, setBoard] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
  const [isXNext, setIsXNext] = useState(true); // User is X
  const [activeCell, setActiveCell] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [msg, setMsg] = useState({ text: 'Lượt của Bạn (Chọn ô vuông để trả lời)', type: 'info' });
  const [gameOver, setGameOver] = useState(false);
  const [winLine, setWinLine] = useState([]);

  const checkWinner = (squares) => {
    // Check horizontal, vertical, diagonal for 4 in a row
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        const player = squares[r * BOARD_SIZE + c]?.player;
        if (!player) continue;

        // Right
        if (c <= BOARD_SIZE - WIN_CONDITION) {
          let win = true;
          let line = [];
          for (let i = 0; i < WIN_CONDITION; i++) {
            if (squares[r * BOARD_SIZE + c + i]?.player !== player) win = false;
            line.push(r * BOARD_SIZE + c + i);
          }
          if (win) return { player, line };
        }
        // Down
        if (r <= BOARD_SIZE - WIN_CONDITION) {
          let win = true;
          let line = [];
          for (let i = 0; i < WIN_CONDITION; i++) {
            if (squares[(r + i) * BOARD_SIZE + c]?.player !== player) win = false;
            line.push((r + i) * BOARD_SIZE + c);
          }
          if (win) return { player, line };
        }
        // Diagonal Right-Down
        if (r <= BOARD_SIZE - WIN_CONDITION && c <= BOARD_SIZE - WIN_CONDITION) {
          let win = true;
          let line = [];
          for (let i = 0; i < WIN_CONDITION; i++) {
            if (squares[(r + i) * BOARD_SIZE + c + i]?.player !== player) win = false;
            line.push((r + i) * BOARD_SIZE + c + i);
          }
          if (win) return { player, line };
        }
        // Diagonal Left-Down
        if (r <= BOARD_SIZE - WIN_CONDITION && c >= WIN_CONDITION - 1) {
          let win = true;
          let line = [];
          for (let i = 0; i < WIN_CONDITION; i++) {
            if (squares[(r + i) * BOARD_SIZE + c - i]?.player !== player) win = false;
            line.push((r + i) * BOARD_SIZE + c - i);
          }
          if (win) return { player, line };
        }
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || gameOver || !isXNext || activeCell !== null) return;

    setActiveCell(index);
    const randomQ = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
    // Randomize options
    const shuffledQ = { ...randomQ, options: [...randomQ.options].sort(() => 0.5 - Math.random()) };
    setCurrentQuestion(shuffledQ);
    setMsg({ text: 'Trả lời đúng để chiếm ô này!', type: 'info' });
  };

  const handleAnswer = (option) => {
    if (option === currentQuestion.correct) {
      const newBoard = [...board];
      const randomLandmark = LANDMARKS[Math.floor(Math.random() * LANDMARKS.length)];
      newBoard[activeCell] = { player: 'X', landmark: randomLandmark };
      setBoard(newBoard);
      setActiveCell(null);
      setCurrentQuestion(null);
      
      const winnerData = checkWinner(newBoard);
      if (winnerData) {
        setGameOver(true);
        setWinLine(winnerData.line);
        setMsg({ text: 'Tuyệt vời! Bạn đã CHIẾN THẮNG (+50 XP)', type: 'success' });
        addReward(50, 10);
      } else {
        setMsg({ text: 'Lượt của Máy...', type: 'info' });
        setIsXNext(false);
      }
    } else {
      setMsg({ text: 'Sai rồi! Bạn mất lượt cờ này.', type: 'error' });
      setActiveCell(null);
      setCurrentQuestion(null);
      setTimeout(() => {
        setMsg({ text: 'Lượt của Máy...', type: 'info' });
        setIsXNext(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (!isXNext && !gameOver) {
      const timer = setTimeout(() => {
        const emptyCells = board.map((cell, idx) => cell === null ? idx : null).filter(val => val !== null);
        if (emptyCells.length === 0) {
          setGameOver(true);
          setMsg({ text: 'Hòa nhau!', type: 'info' });
          return;
        }

        // Bot plays a random empty cell
        let botMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        
        // Simple Bot AI: Try to block user or win (optional enhancement, currently random for MVP)
        // Just pick a random landmark for Bot too (maybe international landmarks, but we'll use same array or generic "BOT")
        const randomLandmark = LANDMARKS[Math.floor(Math.random() * LANDMARKS.length)];

        const newBoard = [...board];
        newBoard[botMove] = { player: 'O', landmark: randomLandmark };
        setBoard(newBoard);
        
        const winnerData = checkWinner(newBoard);
        if (winnerData) {
          setGameOver(true);
          setWinLine(winnerData.line);
          setMsg({ text: 'Rất tiếc! Máy đã thắng.', type: 'error' });
        } else {
          setIsXNext(true);
          setMsg({ text: 'Lượt của Bạn (Chọn ô vuông để trả lời)', type: 'info' });
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isXNext, board, gameOver]);

  const resetGame = () => {
    setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    setIsXNext(true);
    setActiveCell(null);
    setCurrentQuestion(null);
    setGameOver(false);
    setWinLine([]);
    setMsg({ text: 'Lượt của Bạn (Chọn ô vuông để trả lời)', type: 'info' });
  };

  return (
    <div className="bg-surface rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Target className="text-primary" /> Cờ Caro Lịch sử & Địa lý
        </h2>
        <button 
          onClick={resetGame}
          className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition"
          title="Chơi lại"
        >
          <RefreshCw size={20} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Bàn cờ 7x7 */}
        <div className="flex-1 max-w-md mx-auto w-full relative">
          <div className="grid grid-cols-7 gap-1 bg-gray-200 p-1 rounded-xl shadow-inner mx-auto" style={{ width: '100%', aspectRatio: '1/1' }}>
            {board.map((cell, idx) => (
              <button
                key={idx}
                onClick={() => handleCellClick(idx)}
                disabled={cell !== null || gameOver || !isXNext || activeCell !== null}
                className={`
                  relative flex flex-col items-center justify-center rounded-md font-bold text-xs md:text-sm transition-all
                  ${cell ? 'bg-white shadow-sm' : 'bg-white hover:bg-sky-50'}
                  ${activeCell === idx ? 'bg-sky-100 ring-2 ring-primary animate-pulse' : ''}
                  ${winLine.includes(idx) ? 'bg-green-200 ring-2 ring-green-500 z-10 scale-105' : ''}
                  h-full w-full
                `}
                style={{ minHeight: '3rem' }}
              >
                {cell && (
                  <span className={`text-center leading-tight ${cell.player === 'X' ? 'text-sky-600' : 'text-red-500'}`}>
                    <span className="block font-black text-sm md:text-lg mb-0.5">{cell.player}</span>
                    <span className="block text-[8px] md:text-[10px] uppercase truncate px-0.5 w-full">{cell.landmark}</span>
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="text-center mt-4 font-bold text-gray-600 text-sm">
            Luật: Đạt 4 ô liên tiếp (Ngang, Dọc, Chéo) để chiến thắng!
          </div>
        </div>

        {/* Khung câu hỏi / Thông báo */}
        <div className="flex-1 flex flex-col">
          <div className={`p-4 rounded-xl mb-6 font-bold flex items-center justify-center gap-2 text-center shadow-sm
            ${msg.type === 'info' ? 'bg-sky-50 text-sky-700 border border-sky-100' : 
              msg.type === 'success' ? 'bg-green-50 text-green-600 border border-green-200' : 
              'bg-red-50 text-red-600 border border-red-200'}
          `}>
            {msg.type === 'success' && <Trophy size={20} />}
            {msg.type === 'error' && <X size={20} />}
            {msg.text}
          </div>

          {currentQuestion ? (
            <div className="bg-white p-6 rounded-2xl border-2 border-primary shadow-lg shadow-sky-100 animate-slide-up flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2 py-1 rounded text-xs font-bold ${currentQuestion.type === 'his' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {currentQuestion.type === 'his' ? 'LỊCH SỬ' : 'ĐỊA LÝ'}
                </span>
                <span className="text-gray-400 text-xs font-medium">THCS (Lớp 6-9)</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex-1">
                {currentQuestion.text}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(opt)}
                    className="p-3 text-left rounded-xl border border-gray-200 hover:border-primary hover:bg-sky-50 hover:text-primary font-medium text-gray-700 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-8 text-center">
              <div className="text-gray-400">
                <Target size={48} className="mx-auto mb-4 opacity-50" />
                <p className="font-medium">Vui lòng chọn 1 ô vuông trên bàn cờ để nhận câu hỏi.</p>
                <p className="text-sm mt-2">Trả lời đúng sẽ chiếm được ô vuông và đặt Địa danh của bạn!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
