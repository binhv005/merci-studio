import React from 'react';
import { siteData, img } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

export default function Activities({ onSelectImage }) {

  const P = (id) => img(id);
  const mosaicItems = [
    // Column 1: Left
    {
      type: 'col1',
      img1: {
        id: 'act-thu-vang',
        title: 'Thu Vàng',
        sub: 'Couple giữa thảm lá mùa thu',
        image: P('844190551'),
        pos: 'center 30%',
      },
      img2: {
        id: 'act-cuc-hoa-mi',
        title: 'Cúc Họa Mi',
        sub: 'Khăn voan hoa nhí tinh nghịch',
        image: P('845682499'),
        pos: 'center 30%',
      },
    },
    // Column 2: Center-Left Tall Feature
    {
      type: 'tall-feature',
      item: {
        id: 'act-khu-vuon',
        title: 'Khu Vườn Bí Mật',
        scriptTitle: 'MERCI studio',
        sub: 'Bộ ảnh fine-art mộng mơ giữa những đóa hoa dại',
        image: P('848241156'),
        pos: 'center 40%',
      },
    },
    // Column 3: Center Column
    {
      type: 'col3',
      img1: {
        id: 'act-xuan-thi',
        title: 'Xuân Thì',
        sub: 'Áo dài cổ phong',
        image: P('842995258'),
        pos: 'center 25%',
      },
      badge: {
        logo: siteData.logo,
        text: 'MERCI STUDIO',
      },
      img2: {
        id: 'act-trong-treo',
        title: 'Trong Trẻo',
        sub: 'Chân dung beauty',
        image: P('840520650'),
        pos: 'center 30%',
      },
    },
    // Column 4: Center-Right
    {
      type: 'col4',
      miniBadge: {
        text: 'MERCI STUDIO',
        sub: 'Hồ Chí Minh',
      },
      circleImg: {
        id: 'act-red-balloon',
        title: 'Red Balloon',
        sub: 'Giáng sinh rực rỡ',
        image: P('849589321'),
        pos: 'center 40%',
      },
      img2: {
        id: 'act-ha-vintage',
        title: 'Hạ Vintage',
        sub: 'Mũ len móc, nắng vàng',
        image: P('841866037'),
        pos: 'center 30%',
      },
    },
    // Column 5: Right Column
    {
      type: 'col5',
      img1: {
        id: 'act-black-mood',
        title: 'Black Mood',
        sub: 'Cá tính, thời trang',
        image: P('846432725'),
        pos: 'center 30%',
      },
      img2: {
        id: 'act-voan-trang',
        title: 'Voan Trắng',
        sub: 'Tinh khôi như nàng thơ',
        image: P('836118379'),
        pos: 'center 25%',
      },
      miniFlagBadge: {
        text: 'HỒ CHÍ MINH',
      },
    },
  ];

  return (
    <section id="activities" className="py-12 md:py-16 bg-amber-100 relative overflow-hidden">
      <Decor tone="peach" variant="b" flipY />
      {/* Decorative soft shape */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-3">
            {siteData.mosaic.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-800/80 font-medium">
            {siteData.mosaic.description}
          </p>
        </ScrollReveal>

        {/* Artistic Mosaic Gallery Layout (Matching Reference) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 items-start">
          
          {/* Column 1: Dot + 2 Images (Width: 3 cols -> cols 1-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Decorative circle */}
            <div className="flex justify-center pb-1">
              <div className="w-8 h-8 rounded-full bg-amber-500 shadow-md transform hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Image 1 */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[0].img1.image, mosaicItems[0].img1.title)}
              className="group relative aspect-[4/3] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[0].img1.pos }}
                loading="lazy"
                src={mosaicItems[0].img1.image}
                alt={mosaicItems[0].img1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold tracking-wide">{mosaicItems[0].img1.title}</p>
                <p className="text-[11px] text-cream-200/90 font-light truncate">{mosaicItems[0].img1.sub}</p>
              </div>
            </div>

            {/* Image 2 */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[0].img2.image, mosaicItems[0].img2.title)}
              className="group relative aspect-square rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[0].img2.pos }}
                loading="lazy"
                src={mosaicItems[0].img2.image}
                alt={mosaicItems[0].img2.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold tracking-wide">{mosaicItems[0].img2.title}</p>
                <p className="text-[11px] text-cream-200/90 font-light truncate">{mosaicItems[0].img2.sub}</p>
              </div>
            </div>
          </div>

          {/* Column 2: Tall Feature Card (Width: 3 cols -> cols 4-6) */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[1].item.image, mosaicItems[1].item.title)}
              className="group relative h-[520px] rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-ink-950"
            >
              <img
                style={{ objectPosition: mosaicItems[1].item.pos }}
                loading="lazy"
                src={mosaicItems[1].item.image}
                alt={mosaicItems[1].item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Top Handwritten Script Title like 'Michelangelo' in sample */}
              <div className="absolute top-4 inset-x-0 text-center z-10">
                <span className="font-script text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-wide">
                  {mosaicItems[1].item.scriptTitle}
                </span>
              </div>

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-black/30 opacity-85 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-5 left-4 right-4 text-white z-10">
                <span className="inline-block px-2.5 py-0.5 rounded-none bg-amber-500/90 text-white font-bold text-[10px] tracking-wider uppercase mb-1.5">
                  MERCI STUDIO
                </span>
                <p className="text-lg font-bold tracking-wide">{mosaicItems[1].item.title}</p>
                <p className="text-xs text-cream-200/90 font-light leading-relaxed mt-0.5">
                  {mosaicItems[1].item.sub}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Center Column (Width: 2 cols -> cols 7-8) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {/* Top Image */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[2].img1.image, mosaicItems[2].img1.title)}
              className="group relative aspect-[4/3] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[2].img1.pos }}
                loading="lazy"
                src={mosaicItems[2].img1.image}
                alt={mosaicItems[2].img1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[2].img1.title}</p>
                <p className="text-[10px] text-cream-200/90 font-light truncate">{mosaicItems[2].img1.sub}</p>
              </div>
            </div>

            {/* Logo Badge */}
            <div className="flex items-center justify-center p-2 rounded-none bg-white/90 backdrop-blur-sm border border-ink-100 shadow-sm">
              <img src={mosaicItems[2].badge.logo} alt="Logo MERCI studio" className="h-7 w-auto object-contain mr-2" />
              <span className="text-[11px] font-bold text-ink-900 tracking-wider">
                {mosaicItems[2].badge.text}
              </span>
            </div>

            {/* Bottom Image (New: fills empty bottom gap) */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[2].img2.image, mosaicItems[2].img2.title)}
              className="group relative aspect-square rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[2].img2.pos }}
                loading="lazy"
                src={mosaicItems[2].img2.image}
                alt={mosaicItems[2].img2.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[2].img2.title}</p>
                <p className="text-[10px] text-cream-200/90 font-light truncate">{mosaicItems[2].img2.sub}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Center-Right Column with Circular Frame & Bottom Image (Width: 2 cols -> cols 9-10) */}
          <div className="lg:col-span-2 flex flex-col items-center gap-3">
            {/* Top Mini Square Badge */}
            <div className="w-full py-1.5 px-3 rounded-none bg-ink-900 text-cream-100 text-center shadow-sm">
              <p className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                {mosaicItems[3].miniBadge.text}
              </p>
              <p className="text-[9px] text-cream-200/70">{mosaicItems[3].miniBadge.sub}</p>
            </div>

            {/* Square/Non-rounded Image */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[3].circleImg.image, mosaicItems[3].circleImg.title)}
              className="group relative w-36 h-36 rounded-none overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-amber-400/40 bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[3].circleImg.pos }}
                loading="lazy"
                src={mosaicItems[3].circleImg.image}
                alt={mosaicItems[3].circleImg.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-2 bottom-2.5 text-center text-white">
                <p className="text-[11px] font-bold tracking-wide">{mosaicItems[3].circleImg.title}</p>
                <p className="text-[8px] text-cream-200/90 font-light truncate">{mosaicItems[3].circleImg.sub}</p>
              </div>
            </div>

            {/* Floating Red/Amber Dots */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-amber-500 shadow-md transform hover:scale-125 transition-transform" />
              <div className="w-3 h-3 rounded-full bg-amber-300 shadow-sm" />
            </div>

            {/* Bottom Image (New: fills empty space under square) */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[3].img2.image, mosaicItems[3].img2.title)}
              className="w-full group relative aspect-[4/3] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[3].img2.pos }}
                loading="lazy"
                src={mosaicItems[3].img2.image}
                alt={mosaicItems[3].img2.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[3].img2.title}</p>
                <p className="text-[10px] text-cream-200/90 font-light truncate">{mosaicItems[3].img2.sub}</p>
              </div>
            </div>
          </div>

          {/* Column 5: Right Column (Width: 2 cols -> cols 11-12) */}
          <div className="lg:col-span-2 flex flex-col gap-3.5">
            {/* Top Horizontal Image */}
            <div
              onClick={() => onSelectImage && onSelectImage(mosaicItems[4].img1.image, mosaicItems[4].img1.title)}
              className="group relative aspect-[16/11] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
            >
              <img
                style={{ objectPosition: mosaicItems[4].img1.pos }}
                loading="lazy"
                src={mosaicItems[4].img1.image}
                alt={mosaicItems[4].img1.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold tracking-wide">{mosaicItems[4].img1.title}</p>
              </div>
            </div>

            {/* Bottom Portrait Image & Small Badge */}
            <div className="relative">
              <div
                onClick={() => onSelectImage && onSelectImage(mosaicItems[4].img2.image, mosaicItems[4].img2.title)}
                className="group relative aspect-[3/4] rounded-none overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-ink-900"
              >
                <img
                  style={{ objectPosition: mosaicItems[4].img2.pos }}
                  loading="lazy"
                  src={mosaicItems[4].img2.image}
                  alt={mosaicItems[4].img2.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-xs font-bold tracking-wide">{mosaicItems[4].img2.title}</p>
                  <p className="text-[9px] text-cream-200/90 font-light truncate">{mosaicItems[4].img2.sub}</p>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-2 -right-1 bg-amber-500 text-white font-bold text-[9px] px-2 py-0.5 rounded-none shadow-md">
                {mosaicItems[4].miniFlagBadge.text}
              </div>
            </div>
          </div>

        </div>

        {/* Responsive Mobile / Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {/* Highlight Tall Card */}
          <div
            onClick={() => onSelectImage && onSelectImage(mosaicItems[1].item.image, mosaicItems[1].item.title)}
            className="sm:col-span-2 group relative h-72 rounded-none overflow-hidden shadow-lg cursor-pointer bg-ink-950"
          >
            <img
              style={{ objectPosition: mosaicItems[1].item.pos }}
              loading="lazy"
              src={mosaicItems[1].item.image}
              alt={mosaicItems[1].item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 inset-x-0 text-center z-10">
              <span className="font-script text-3xl font-bold text-white drop-shadow-md">
                {mosaicItems[1].item.scriptTitle}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-black/30 opacity-90" />
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <p className="text-lg font-bold">{mosaicItems[1].item.title}</p>
              <p className="text-xs text-cream-200/90">{mosaicItems[1].item.sub}</p>
            </div>
          </div>

          {/* Grid items for mobile */}
          {[
            mosaicItems[0].img1,
            mosaicItems[0].img2,
            mosaicItems[2].img1,
            mosaicItems[2].img2,
            mosaicItems[3].img2,
            mosaicItems[4].img1,
            mosaicItems[4].img2,
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage && onSelectImage(item.image, item.title)}
              className="group relative h-48 rounded-none overflow-hidden shadow-md cursor-pointer bg-ink-900"
            >
              <img src={item.image} alt={item.title} loading="lazy" style={{ objectPosition: item.pos }} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="text-sm font-bold">{item.title}</p>
                {item.sub && <p className="text-xs text-cream-200/80 truncate">{item.sub}</p>}
              </div>
            </div>
          ))}

          {/* Birthday card on mobile */}
          <div
            onClick={() => onSelectImage && onSelectImage(mosaicItems[3].circleImg.image, mosaicItems[3].circleImg.title)}
            className="sm:col-span-2 flex items-center gap-4 p-4 rounded-none bg-white shadow-md border border-ink-100 cursor-pointer"
          >
            <img
              style={{ objectPosition: mosaicItems[3].circleImg.pos }}
              loading="lazy"
              src={mosaicItems[3].circleImg.image}
              alt={mosaicItems[3].circleImg.title}
              className="w-20 h-20 rounded-none object-cover border-2 border-amber-400"
            />
            <div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">MERCI STUDIO</span>
              <p className="text-base font-bold text-ink-900">{mosaicItems[3].circleImg.title}</p>
              <p className="text-xs text-ink-700/80">{mosaicItems[3].circleImg.sub}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


