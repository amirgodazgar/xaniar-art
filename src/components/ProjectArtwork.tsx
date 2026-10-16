import React from 'react';

interface ProjectArtworkProps {
  projectId: string;
  title: string;
  aspectRatio?: '16:9' | '2.39:1' | '4:3' | '9:16';
  className?: string;
  showCaption?: boolean;
  captionText?: string;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({
  projectId,
  title,
  aspectRatio = '16:9',
  className = '',
  showCaption = false,
  captionText = '',
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case '2.39:1':
        return 'cinema-aspect';
      case '4:3':
        return 'aspect-[4/3]';
      case '9:16':
        return 'aspect-[9/16]';
      case '16:9':
      default:
        return 'standard-aspect';
    }
  };

  // Bespoke visual styling for each project
  const renderVisual = () => {
    switch (projectId) {
      case 'polestar-aerolight':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="675" fill="#121211" />
            <radialGradient id="poleGlow" cx="50%" cy="55%" r="45%">
              <stop offset="0%" stopColor="#4A4A45" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#1E1E1C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#121211" stopOpacity="0" />
            </radialGradient>
            <circle cx="600" cy="370" r="400" fill="url(#poleGlow)" />
            {/* Aerodynamic wind-tunnel lines */}
            {[...Array(14)].map((_, i) => (
              <path
                key={i}
                d={`M -50 ${220 + i * 22} C 350 ${230 + i * 18}, 520 ${280 + i * 12}, 780 ${300 + i * 10} C 940 ${310 + i * 8}, 1120 ${290 + i * 15}, 1250 ${320 + i * 16}`}
                stroke="#FAFAF8"
                strokeWidth={i === 6 || i === 7 ? "2" : "0.75"}
                strokeOpacity={0.12 + (i % 3) * 0.15}
                strokeDasharray={i % 2 === 0 ? "8 6" : "none"}
              />
            ))}
            {/* Anamorphic vehicle silhouette & light bar */}
            <path
              d="M 280 430 C 420 400, 560 365, 740 375 C 880 382, 980 420, 1040 435 L 1020 455 C 920 455, 780 460, 600 460 C 440 460, 320 455, 260 452 Z"
              fill="#191918"
              stroke="#2C2C29"
              strokeWidth="1.5"
            />
            {/* Razor sharp LED horizontal light blade */}
            <line x1="340" y1="415" x2="860" y2="415" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <line x1="380" y1="415" x2="820" y2="415" stroke="#FAFAF8" strokeWidth="8" strokeOpacity="0.4" strokeLinecap="round" filter="blur(4px)" />
            {/* Studio reflections */}
            <line x1="100" y1="480" x2="1100" y2="480" stroke="#333330" strokeWidth="1" strokeDasharray="4 8" />
            <text x="60" y="80" fill="#737373" fontSize="13" fontFamily="Space Mono" letterSpacing="0.2em">CAMPAIGN FILM // 2.39:1 SCOPE</text>
            <text x="60" y="610" fill="#FAFAF8" opacity="0.6" fontSize="14" fontFamily="Plus Jakarta Sans" fontWeight="600">POLESTAR AUTOMOTIVE · AERO ARCHITECTURE</text>
          </svg>
        );

      case 'solaris-digital-monolith':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="675" fill="#0C0C0B" />
            <radialGradient id="solarisCore" cx="50%" cy="50%" r="40%">
              <stop offset="0%" stopColor="#2A2A26" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#141412" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0C0C0B" stopOpacity="0" />
            </radialGradient>
            <circle cx="600" cy="337" r="320" fill="url(#solarisCore)" />
            {/* Parametric crystal lattice rings */}
            {[70, 130, 190, 260, 330].map((radius, idx) => (
              <g key={idx} transform="translate(600, 337)">
                <ellipse rx={radius * 1.4} ry={radius * 0.75} stroke="#E8E8E6" strokeWidth={idx === 1 ? "1.5" : "0.75"} strokeOpacity={0.25 + idx * 0.08} transform={`rotate(${idx * 28 - 20})`} />
                <ellipse rx={radius * 1.1} ry={radius * 0.9} stroke="#A3A3A0" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="6 10" transform={`rotate(${-idx * 35})`} />
              </g>
            ))}
            {/* Central obsidian floating monolith */}
            <polygon points="600,180 690,320 600,490 510,320" fill="#181817" stroke="#FAFAF8" strokeWidth="1.5" />
            <line x1="600" y1="180" x2="600" y2="490" stroke="#FAFAF8" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="510" y1="320" x2="690" y2="320" stroke="#FAFAF8" strokeWidth="0.8" strokeOpacity="0.6" />
            <text x="60" y="80" fill="#737373" fontSize="13" fontFamily="Space Mono" letterSpacing="0.2em">EXHIBITION COMMISSION // 8K DUAL LASER</text>
            <text x="60" y="610" fill="#FAFAF8" opacity="0.6" fontSize="14" fontFamily="Plus Jakarta Sans" fontWeight="600">SOLARIS: PHASE TRANSITIONS · ZURICH</text>
          </svg>
        );

      case 'nike-velocity-matrix':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="675" fill="#171715" />
            {/* Kinetic typographic velocity grid */}
            {[...Array(9)].map((_, i) => (
              <g key={i}>
                <line x1={80 + i * 130} y1="0" x2={160 + i * 130} y2="675" stroke="#2B2B28" strokeWidth="1" strokeDasharray="5 8" />
                <line x1="0" y1={50 + i * 70} x2="1200" y2={50 + i * 70} stroke="#242421" strokeWidth="0.75" />
              </g>
            ))}
            {/* Large kinetic sliced typographic letterform */}
            <text x="220" y="380" fill="#FAFAF8" fontSize="160" fontFamily="Plus Jakarta Sans" fontWeight="800" letterSpacing="-0.06em" fillOpacity="0.85">
              VELOCITY
            </text>
            <text x="340" y="440" fill="#737373" fontSize="56" fontFamily="Space Mono" letterSpacing="0.1em" fillOpacity="0.7">
              VECTOR MATRIX / 240FPS
            </text>
            {/* Dynamic cutting slash line */}
            <line x1="160" y1="460" x2="1040" y2="240" stroke="#FAFAF8" strokeWidth="3" />
            <text x="60" y="80" fill="#A3A3A0" fontSize="13" fontFamily="Space Mono" letterSpacing="0.2em">GLOBAL LAUNCH // MOTION DESIGN SYSTEM</text>
            <text x="60" y="610" fill="#FAFAF8" opacity="0.6" fontSize="14" fontFamily="Plus Jakarta Sans" fontWeight="600">NIKE INNOVATION · KINETIC IDENTITY</text>
          </svg>
        );

      case 'kroma-sound-spatial':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="675" fill="#151514" />
            {/* Concentric soundwaves & cymatics ripples */}
            {[40, 80, 130, 190, 260, 340, 430].map((r, idx) => (
              <circle
                key={idx}
                cx="600"
                cy="337"
                r={r}
                stroke="#FAFAF8"
                strokeWidth={idx === 2 ? "1.5" : "0.75"}
                strokeOpacity={0.1 + (7 - idx) * 0.08}
                strokeDasharray={idx % 2 === 0 ? "12 8" : "none"}
              />
            ))}
            <circle cx="600" cy="337" r="16" fill="#FAFAF8" />
            <text x="60" y="80" fill="#737373" fontSize="13" fontFamily="Space Mono" letterSpacing="0.2em">ACOUSTIC CINEMA // 2.39:1</text>
            <text x="60" y="610" fill="#FAFAF8" opacity="0.6" fontSize="14" fontFamily="Plus Jakarta Sans" fontWeight="600">KROMA SOUND LAB · AURA SPATIAL LAUNCH</text>
          </svg>
        );

      case 'sony-playstation-convergence':
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="675" fill="#0E0E0D" />
            {/* Horizon curve & orbital mesh */}
            <path
              d="M -100 500 Q 600 240 1300 500"
              stroke="#FAFAF8"
              strokeWidth="2"
              strokeOpacity="0.8"
            />
            <path
              d="M -100 520 Q 600 280 1300 520"
              stroke="#A3A3A0"
              strokeWidth="1"
              strokeOpacity="0.4"
              strokeDasharray="4 6"
            />
            {/* Orbital telemetry grid */}
            {[...Array(7)].map((_, i) => (
              <line
                key={i}
                x1={200 + i * 130}
                y1={320}
                x2={150 + i * 150}
                y2={580}
                stroke="#383835"
                strokeWidth="0.75"
              />
            ))}
            <text x="60" y="80" fill="#737373" fontSize="13" fontFamily="Space Mono" letterSpacing="0.2em">REAL-TIME TEASER // UNREAL ENGINE 5.4</text>
            <text x="60" y="610" fill="#FAFAF8" opacity="0.6" fontSize="14" fontFamily="Plus Jakarta Sans" fontWeight="600">SONY PLAYSTATION · CONVERGENCE WORLD</text>
          </svg>
        );

      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="675" fill="#181816" />
            <circle cx="600" cy="337" r="240" stroke="#333330" strokeWidth="1" strokeDasharray="8 6" />
            <line x1="300" y1="337" x2="900" y2="337" stroke="#FAFAF8" strokeWidth="1" strokeOpacity="0.4" />
            <line x1="600" y1="150" x2="600" y2="525" stroke="#FAFAF8" strokeWidth="1" strokeOpacity="0.4" />
            <text x="60" y="80" fill="#737373" fontSize="13" fontFamily="Space Mono" letterSpacing="0.2em">CINEMATIC PROJECT // 4K MASTER</text>
            <text x="60" y="610" fill="#FAFAF8" opacity="0.6" fontSize="14" fontFamily="Plus Jakarta Sans" fontWeight="600">{title.toUpperCase()}</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#141414] text-[#FAFAFA] ${getAspectClass()} ${className}`}>
      {renderVisual()}
      {showCaption && captionText && (
        <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-[#A3A3A0] truncate">
          {captionText}
        </div>
      )}
    </div>
  );
};
