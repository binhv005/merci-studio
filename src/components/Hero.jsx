import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData, img } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';
import ScrollReveal from './common/ScrollReveal';

export default function Hero() {
  const { hero } = siteData;
  const [active, setActive] = useState(0);

  // Slideshow nhẹ: chuyển ảnh mỗi 5 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % hero.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [hero.slides.length]);

  return (
    <section id="hero" className="relative w-full h-[100svh] min-h-[520px] md:h-auto md:min-h-[620px] lg:min-h-0 md:aspect-[16/9] flex items-end justify-center overflow-hidden bg-ink-950 pt-16 md:pt-0">
      {/* Background slides: 1 ảnh dọc cho mobile, 2 ảnh ghép cạnh nhau cho desktop (giữ ảnh nét) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {hero.slides.map((slide, idx) => (
          <div
            key={slide.tall}
            style={{ ['--pos-wide']: slide.posWide, ['--pos-tall']: slide.posTall }}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === active ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img(slide.tall)}
              alt={slide.alt}
              loading={idx === 0 ? 'eager' : 'lazy'}
              className="md:hidden w-full h-full object-cover [object-position:var(--pos-tall)]"
            />
            <div className="hidden md:grid grid-cols-2 w-full h-full">
              {slide.wide.map((id) => (
                <img
                  key={id}
                  src={img(id)}
                  alt={slide.alt}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover [object-position:var(--pos-wide)]"
                />
              ))}
            </div>
          </div>
        ))}
        {/* Overlay đậm dần về phía dưới để chữ dễ đọc mà không che khuôn mặt */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-24 md:pb-10 lg:pb-14 text-center flex flex-col items-center justify-center">
        <ScrollReveal direction="down" duration={750} delay={100}>
          <h1 className="flex flex-col items-center justify-center mb-4 sm:mb-5 select-none">
            <span className="font-script text-[1.9rem] min-[380px]:text-4xl sm:text-6xl md:text-6xl lg:text-7xl text-amber-300 font-bold -rotate-2 transform tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] leading-[1.1] block">
              {hero.title}
            </span>
            <span className="font-script text-[1.9rem] min-[380px]:text-4xl sm:text-6xl md:text-6xl lg:text-7xl text-white font-bold tracking-wide drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] leading-[1.1] block">
              {hero.titleAccent}
            </span>
          </h1>
          <p className="hidden sm:block text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-relaxed">
            {hero.description}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={700} delay={250} className="flex flex-row items-center justify-center gap-2.5 sm:gap-5 mt-4 sm:mt-6">
          <Link
            to={ROUTES.concepts}
            className="px-5 sm:px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <Link
            to={ROUTES.booking}
            className="px-5 sm:px-7 py-3 rounded-full border border-white/70 hover:bg-white/15 text-white font-bold text-sm sm:text-base tracking-wide backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center whitespace-nowrap"
          >
            {hero.ctaSecondary}
          </Link>
        </ScrollReveal>

        {/* Slide indicators */}
        <div className="flex items-center gap-2 mt-4 sm:mt-6" aria-hidden="true">
          {hero.slides.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === active ? 'w-6 bg-amber-300' : 'w-1.5 bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
