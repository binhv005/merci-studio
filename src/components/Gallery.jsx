import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { Link, ROUTES } from '../lib/router';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

/**
 * images: danh sách ảnh dùng chung với Lightbox ({ src, title, category }).
 * limit: số ảnh tối đa ở lưới masonry (trang chủ chỉ hiện một phần).
 * filters: nút lọc theo nhóm (trang Bộ sưu tập).
 */
export default function Gallery({
  images,
  onOpenLightbox,
  heading = 'Thư Viện Ảnh',
  title = 'Hình ảnh thực tế từ các bộ ảnh của MERCI studio',
  moreTitle = 'Thêm nhiều câu chuyện từ MERCI',
  limit,
  filters,
  activeFilter,
  onFilter,
}) {
  const gallery = { images };

  // 5 panel cong kiểu panorama — chọn theo chỉ số trong images (dùng chung với Lightbox)
  const panelLayout = [
    {
      idx: 0,
      heightClass: 'h-[360px] sm:h-[440px] lg:h-[500px]',
      translateClass: 'lg:translate-y-0',
      radiusClass: 'rounded-2xl lg:rounded-l-3xl lg:rounded-r-md',
      pos: 'center 25%',
    },
    {
      idx: 3,
      heightClass: 'h-[320px] sm:h-[390px] lg:h-[440px]',
      translateClass: 'lg:translate-y-6',
      radiusClass: 'rounded-2xl lg:rounded-md',
      pos: 'center 35%',
    },
    {
      idx: 6,
      heightClass: 'h-[280px] sm:h-[340px] lg:h-[380px]',
      translateClass: 'lg:translate-y-12',
      radiusClass: 'rounded-2xl lg:rounded-md',
      pos: 'center 30%',
    },
    {
      idx: 1,
      heightClass: 'h-[320px] sm:h-[390px] lg:h-[440px]',
      translateClass: 'lg:translate-y-6',
      radiusClass: 'rounded-2xl lg:rounded-md',
      pos: 'center 30%',
    },
    {
      idx: 4,
      heightClass: 'h-[360px] sm:h-[440px] lg:h-[500px]',
      translateClass: 'lg:translate-y-0',
      radiusClass: 'rounded-2xl lg:rounded-r-3xl lg:rounded-l-md',
      pos: 'center 40%',
    },
  ];

  // Chỉ dựng panorama khi đủ ảnh, nếu không thì hiển thị toàn bộ ở lưới masonry
  const showPanels = images.length >= 12;
  const panelIdx = new Set(showPanels ? panelLayout.map((p) => p.idx) : []);
  const allRest = images
    .map((image, idx) => ({ ...image, idx }))
    .filter((image) => !panelIdx.has(image.idx));
  const restImages = limit ? allRest.slice(0, limit) : allRest;

  return (
    <section id="gallery" className="py-12 md:py-18 bg-white relative overflow-hidden">
      <Decor tone="white" variant="a" flipY />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Centered */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-2">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-700/85 font-medium">
            {title}
          </p>
        </ScrollReveal>

        {/* Bộ lọc theo nhóm concept */}
        {filters && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => onFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                  activeFilter === f.id
                    ? 'bg-ink-950 text-white border-ink-950 shadow-md'
                    : 'bg-white text-ink-800 border-cream-300 hover:border-amber-400 hover:text-amber-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* 5-Panel Panoramic Gallery */}
        {showPanels && (
        <div className="relative pt-2 pb-6 lg:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-3 items-center justify-center">
            {panelLayout.map((panel, order) => {
              const item = gallery.images[panel.idx];
              return (
                <ScrollReveal
                  key={item.src}
                  direction="up"
                  delay={order * 80}
                  duration={650}
                  className={`w-full transition-transform duration-500 ${panel.translateClass}`}
                >
                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox(panel.idx)}
                    className={`group relative overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-ink-900 border border-white/60 hover:scale-[1.04] hover:z-30 w-full ${panel.heightClass} ${panel.radiusClass}`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      style={{ objectPosition: panel.pos }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent group-hover:from-ink-950/95 transition-colors duration-300" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-11 h-11 rounded-full bg-white/95 text-ink-950 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white z-10">
                      <span className="text-[10px] sm:text-xs font-bold text-amber-300 tracking-wider uppercase block drop-shadow mb-1.5">
                        {item.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-sans font-bold text-white leading-snug line-clamp-2 drop-shadow group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        )}

        {/* Masonry grid: nhiều ảnh hơn, giữ nguyên tỷ lệ gốc để không cắt mất khuôn mặt */}
        {showPanels && (
          <ScrollReveal direction="up" duration={600} className="text-center mt-4 mb-6 md:mb-8">
            <h3 className="font-script font-bold text-3xl sm:text-4xl text-amber-500 leading-tight">
              {moreTitle}
            </h3>
          </ScrollReveal>
        )}

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {restImages.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => onOpenLightbox && onOpenLightbox(item.idx)}
              className="group relative block w-full mb-3 sm:mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-ink-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              aria-label={`Xem ảnh: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="block text-[10px] font-bold text-amber-300 tracking-wider uppercase">{item.category}</span>
                <span className="block text-xs font-semibold leading-snug line-clamp-2">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {limit && allRest.length > limit && (
          <div className="text-center mt-8">
            <Link
              to={ROUTES.gallery}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold text-sm tracking-wide shadow-md transition-all duration-300 group"
            >
              <span>Xem toàn bộ bộ sưu tập</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
