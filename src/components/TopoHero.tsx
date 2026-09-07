import { ReactNode } from 'react';

interface TopoHeroProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function TopoHero({ children, className = '', dark = false }: TopoHeroProps) {
  return (
    <div className={`relative overflow-hidden ${dark ? 'bg-[#1D2E44]' : 'bg-[#23412F]'} ${className}`}>
      {/* Topographic SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="#E6DDCB" strokeWidth="1">
          <ellipse cx="600" cy="300" rx="580" ry="280"/>
          <ellipse cx="600" cy="300" rx="500" ry="230"/>
          <ellipse cx="600" cy="300" rx="420" ry="185"/>
          <ellipse cx="600" cy="300" rx="340" ry="145"/>
          <ellipse cx="600" cy="300" rx="260" ry="110"/>
          <ellipse cx="600" cy="300" rx="180" ry="80"/>
          <ellipse cx="600" cy="300" rx="100" ry="50"/>
          <ellipse cx="600" cy="300" rx="40" ry="22"/>
          <path d="M0 200 Q200 150 400 180 Q600 210 800 170 Q1000 130 1200 160"/>
          <path d="M0 250 Q200 200 400 230 Q600 260 800 220 Q1000 180 1200 210"/>
          <path d="M0 300 Q200 250 400 280 Q600 310 800 270 Q1000 230 1200 260"/>
          <path d="M0 350 Q200 300 400 330 Q600 360 800 320 Q1000 280 1200 310"/>
          <path d="M0 400 Q200 350 400 380 Q600 410 800 370 Q1000 330 1200 360"/>
          <path d="M0 450 Q200 400 400 430 Q600 460 800 420 Q1000 380 1200 410"/>
          {/* Grid lines */}
          <line x1="0" y1="0" x2="0" y2="600" strokeDasharray="4 8" opacity="0.5"/>
          <line x1="200" y1="0" x2="200" y2="600" strokeDasharray="4 8" opacity="0.5"/>
          <line x1="400" y1="0" x2="400" y2="600" strokeDasharray="4 8" opacity="0.5"/>
          <line x1="600" y1="0" x2="600" y2="600" strokeDasharray="4 8" opacity="0.5"/>
          <line x1="800" y1="0" x2="800" y2="600" strokeDasharray="4 8" opacity="0.5"/>
          <line x1="1000" y1="0" x2="1000" y2="600" strokeDasharray="4 8" opacity="0.5"/>
          <line x1="1200" y1="0" x2="1200" y2="600" strokeDasharray="4 8" opacity="0.5"/>
        </g>
        {/* Coordinate markers */}
        <text x="16" y="596" fill="#E6DDCB" fontSize="9" fontFamily="Space Mono, monospace" opacity="0.4">90°00'N</text>
        <text x="1100" y="596" fill="#E6DDCB" fontSize="9" fontFamily="Space Mono, monospace" opacity="0.4">180°00'E</text>
        <text x="16" y="14" fill="#E6DDCB" fontSize="9" fontFamily="Space Mono, monospace" opacity="0.4">0°00'N</text>
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
