const fs = require('fs');
let content = fs.readFileSync('src/TownBuilder.jsx', 'utf8');

if (!content.includes('InteractivePlanet3D')) {
  content = content.replace("import { Map, Lock, CheckCircle2 } from 'lucide-react';", "import { Map, Lock, CheckCircle2 } from 'lucide-react';\nimport InteractivePlanet3D from './InteractivePlanet3D';");
}

const svgsToRemove = [
  'PlanetPhaseAsteroid', 'PlanetPhaseCore', 'PlanetPhaseAtmosphere',
  'PlanetLevel1', 'PlanetLevel2', 'PlanetLevel3', 'PlanetLevel4'
];

svgsToRemove.forEach(svg => {
  const regex = new RegExp(`const ${svg} = \\(\\) => \\([\\s\\S]*?<\\/svg>\\n\\);`, 'g');
  content = content.replace(regex, '');
});

const getPlanetRegex = /const getPlanetSvg = \([\s\S]*?return <PlanetLevel4 \/>;\n  \};/m;
content = content.replace(getPlanetRegex, '');

content = content.replace(/{getPlanetSvg\(comp, tot, index\)}/g, '<div className="absolute inset-0 z-10 w-[150%] h-[150%] -top-[25%] -left-[25%]"><InteractivePlanet3D completed={comp} total={tot} index={index} /></div>');

fs.writeFileSync('src/TownBuilder.jsx', content, 'utf8');
console.log('TownBuilder patched!');
