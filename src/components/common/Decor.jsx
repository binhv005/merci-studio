import React from 'react';

/**
 * Decor - họa tiết nền: mảng màu bo cong, chấm tròn và đường cong mảnh.
 * Nằm ở lớp sau cùng (z-0), mờ, không nhận click.
 * tone: màu nền của section ('white' | 'gray' | 'peach' | 'orange') để chọn màu họa tiết phù hợp.
 * variant: 'a' | 'b' đổi vị trí chấm tròn; flipX / flipY lật hình để mỗi section một khác.
 */
const TONES = {
  white: { blob: '#f6f0e8', dot: '#e9dac7', dotSoft: '#f4ece2', line: '#e9dac7' },
  gray: { blob: '#fffdf9', dot: '#e5d3bd', dotSoft: '#f4ece2', line: '#e2cfb8' },
  orange: { blob: '#b58d6b', dot: '#ffffff', dotSoft: '#dcc3a6', line: '#ffffff' },
  peach: { blob: '#fffdf9', dot: '#dcc3a6', dotSoft: '#fffdf9', line: '#fffdf9' },
};

export default function Decor({ tone = 'white', variant = 'a', flipX = false, flipY = false }) {
  const c = TONES[tone] || TONES.white;
  const dots =
    variant === 'a'
      ? [
          { x: 150, y: 235, r: 30, k: 'dot' },
          { x: 70, y: 70, r: 20, k: 'dotSoft' },
          { x: 340, y: 120, r: 11, k: 'dot' },
          { x: 1010, y: 560, r: 13, k: 'dot' },
          { x: 905, y: 700, r: 36, k: 'dot' },
          { x: 1130, y: 430, r: 22, k: 'dotSoft' },
          { x: 60, y: 520, r: 26, k: 'dotSoft' },
        ]
      : [
          { x: 230, y: 175, r: 14, k: 'dot' },
          { x: 120, y: 305, r: 34, k: 'dot' },
          { x: 1080, y: 90, r: 22, k: 'dotSoft' },
          { x: 960, y: 620, r: 12, k: 'dot' },
          { x: 1090, y: 690, r: 30, k: 'dotSoft' },
          { x: 560, y: 740, r: 16, k: 'dot' },
          { x: 40, y: 600, r: 12, k: 'dot' },
        ];

  const flip = `${flipX ? '-scale-x-100' : ''} ${flipY ? '-scale-y-100' : ''}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none select-none z-0 opacity-70 ${flip}`}
    >
      {/* Mảng bo cong góc trên trái */}
      <path
        d="M0,0 H560 C540,70 470,125 390,100 C300,72 235,120 195,215 C155,310 70,345 0,310 Z"
        fill={c.blob}
        fillOpacity="0.9"
      />
      {/* Mảng bo cong góc dưới phải */}
      <path
        d="M1200,800 H740 C730,730 790,670 860,690 C940,712 985,650 1040,590 C1100,525 1160,560 1200,590 Z"
        fill={c.blob}
        fillOpacity="0.9"
      />
      {/* Đường cong mảnh */}
      <path
        d="M-10,330 C90,330 160,240 235,160 C310,80 400,150 470,205"
        fill="none"
        stroke={c.line}
        strokeWidth="2"
      />
      <path
        d="M1210,640 C1110,640 1030,720 960,745 C890,770 840,720 790,690"
        fill="none"
        stroke={c.line}
        strokeWidth="2"
      />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={c[d.k]} fillOpacity={d.k === 'dot' ? 0.75 : 0.85} />
      ))}
    </svg>
  );
}
