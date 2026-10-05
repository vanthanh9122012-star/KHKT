const fs = require('fs');

let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

// 1. Replace SVG Definitions
const oldSvgsRegex = /const IsoTile = \([\s\S]*?const HouseLevel3 = \([\s\S]*?<\/svg>\n\);/m;

const newSvgs = `const PlanetPhaseAsteroid = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(100,116,139,0.5)] animate-pulse">
    <circle cx="50" cy="50" r="30" fill="#475569" />
    <circle cx="40" cy="40" r="5" fill="#334155" />
    <circle cx="60" cy="55" r="7" fill="#334155" />
    <circle cx="45" cy="65" r="4" fill="#334155" />
  </svg>
);

const PlanetPhaseCore = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] transform transition-transform hover:scale-105">
    <circle cx="50" cy="50" r="35" fill="#B45309" />
    <circle cx="50" cy="50" r="28" fill="#D97706" />
    <circle cx="50" cy="50" r="20" fill="#F59E0B" />
    <circle cx="40" cy="40" r="4" fill="#78350F" />
    <circle cx="60" cy="60" r="6" fill="#78350F" />
  </svg>
);

const PlanetPhaseAtmosphere = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_25px_rgba(56,189,248,0.5)] transform transition-transform hover:scale-105">
    <circle cx="50" cy="50" r="40" fill="#0EA5E9" />
    <path d="M 20 40 Q 50 20 80 40" fill="none" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" />
    <path d="M 15 60 Q 50 80 85 60" fill="none" stroke="#BAE6FD" strokeWidth="4" strokeLinecap="round" />
    <path d="M 30 50 Q 50 40 70 50" fill="none" stroke="#7DD3FC" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const PlanetLevel1 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(34,197,94,0.6)] transform transition-transform hover:rotate-12">
    <circle cx="50" cy="50" r="42" fill="#3B82F6" />
    <path d="M 20 40 Q 30 20 50 30 T 70 20 Q 80 40 60 50 T 20 40" fill="#22C55E" />
    <path d="M 40 70 Q 50 90 70 80 T 90 60 Q 80 50 60 60 T 40 70" fill="#16A34A" />
    <circle cx="30" cy="65" r="8" fill="#22C55E" />
    <circle cx="75" cy="35" r="6" fill="#22C55E" />
    <path d="M 15 25 Q 50 0 85 25" fill="none" stroke="#EFF6FF" strokeWidth="2" strokeDasharray="4 4" opacity="0.5"/>
  </svg>
);

const PlanetLevel2 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_35px_rgba(168,85,247,0.6)] transform transition-transform hover:rotate-12">
    <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="#D8B4FE" strokeWidth="6" transform="rotate(-20 50 50)" />
    <ellipse cx="50" cy="50" rx="52" ry="20" fill="none" stroke="#C084FC" strokeWidth="2" transform="rotate(-20 50 50)" opacity="0.6"/>
    <circle cx="50" cy="50" r="35" fill="#A855F7" />
    <path d="M 18 40 Q 50 30 82 40" fill="none" stroke="#9333EA" strokeWidth="5" />
    <path d="M 16 55 Q 50 65 84 55" fill="none" stroke="#7E22CE" strokeWidth="7" />
    <path d="M 22 70 Q 50 75 78 70" fill="none" stroke="#6B21A8" strokeWidth="3" />
  </svg>
);

const PlanetLevel3 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_40px_rgba(6,182,212,0.7)] transform transition-transform hover:scale-110">
    <circle cx="50" cy="50" r="42" fill="#06B6D4" />
    <circle cx="50" cy="50" r="42" fill="url(#ice-grad)" opacity="0.5" />
    <path d="M 10 50 A 40 40 0 0 1 90 50 A 40 40 0 0 1 10 50" fill="none" stroke="#67E8F9" strokeWidth="2" strokeDasharray="5 5" />
    <path d="M 30 20 L 40 35 L 25 45 Z" fill="#CFFAFE" opacity="0.8" />
    <path d="M 60 70 L 75 60 L 80 80 Z" fill="#CFFAFE" opacity="0.8" />
    <path d="M 70 30 L 85 20 L 90 40 Z" fill="#A5F3FC" opacity="0.7" />
    <defs>
      <radialGradient id="ice-grad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const PlanetLevel4 = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_50px_rgba(244,63,94,0.8)] transform transition-transform hover:rotate-90 hover:scale-110 duration-700">
    <defs>
      <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFE4E6" />
        <stop offset="40%" stopColor="#FDA4AF" />
        <stop offset="70%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#9F1239" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="45" fill="url(#star-glow)" />
    <circle cx="50" cy="50" r="45" fill="none" stroke="#FECDD3" strokeWidth="1" strokeDasharray="2 4" className="animate-spin-slow" />
    <path d="M 50 5 L 55 45 L 95 50 L 55 55 L 50 95 L 45 55 L 5 50 L 45 45 Z" fill="#FFF1F2" opacity="0.6" className="animate-pulse" />
  </svg>
);`;

content = content.replace(oldSvgsRegex, newSvgs);

// 2. Replace getBuildingSvg
const oldGetBuilding = /const getBuildingSvg = \([\s\S]*?return <HouseLevel3 \/>;\n  \};/m;
const newGetPlanet = `const getPlanetSvg = (completed, total, index) => {
    if (completed === 0) return <PlanetPhaseAsteroid />;
    if (completed <= 2) return <PlanetPhaseCore />;
    if (completed < total) return <PlanetPhaseAtmosphere />;
    
    if (index === 0) return <PlanetLevel1 />;
    if (index === 1) return <PlanetLevel2 />;
    if (index === 2) return <PlanetLevel3 />;
    return <PlanetLevel4 />;
  };`;
content = content.replace(oldGetBuilding, newGetPlanet);

// 3. Replace getPhaseName
const oldPhaseName = /const getPhaseName = \([\s\S]*?return 'Hoàn thiện';\n  \};/m;
const newPhaseName = `const getPhaseName = (completed, total) => {
    if (completed === 0) return 'Tiểu hành tinh';
    if (completed <= 2) return 'Hình thành lõi';
    if (completed < total) return 'Tạo khí quyển';
    return 'Tiến hóa hoàn tất';
  };`;
content = content.replace(oldPhaseName, newPhaseName);

// 4. Update UI Text
content = content.replace(/>\s*Thị trấn nhỏ\s*<\/h1>/g, '> My Universe</h1>');
content = content.replace(/Xây dựng các công trình\. Kiến trúc sẽ ngy cng sang trọng!/g, 'khám phá các hành tinh. Vũ trụ của bạn sẽ ngày càng rực rỡ!');
content = content.replace(/bg-gradient-to-br from-sky-50 to-indigo-100/g, 'bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900');
content = content.replace(/{getBuildingSvg\(comp, tot, index\)}/g, '{getPlanetSvg(comp, tot, index)}');

fs.writeFileSync('src/TownBuilder.jsx', content, 'utf8');
console.log('TownBuilder replaced with My Universe SVGs!');
