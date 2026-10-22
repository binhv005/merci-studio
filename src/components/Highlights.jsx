import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteData, img } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

export default function Highlights() {
  const { about } = siteData;
  const [imgLeft, imgTopRight, imgBottomRight] = about.images;

  return (
    <section id="highlights" className="relative bg-amber-100 text-ink-950 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <Decor tone="peach" variant="a" />
      {/* Decorative soft shapes: đường cong mềm & vòng tròn gợi khung ảnh */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Staggered Organic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Top Editorial Text + Bottom Landscape Photo & Sub-Story */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Top-Left: Main Header Block */}
            <ScrollReveal direction="left" duration={650} className="max-w-lg">
              <h2 className="font-script font-bold text-5xl sm:text-6xl lg:text-7xl text-amber-500 leading-tight mb-3">
                {about.headline}
              </h2>
              
              <p className="text-base sm:text-lg text-ink-800/85 leading-relaxed font-normal">
                {about.intro}
              </p>
            </ScrollReveal>

            {/* Bottom-Left: Organic Blob Photo + Sub-Headline & Link */}
            <ScrollReveal direction="up" delay={150} duration={650} className="max-w-lg">
              {/* Organic Oval/Bean Pebble Shape Photo */}
              <div 
                style={{ borderRadius: '58% 42% 52% 48% / 46% 56% 44% 54%' }}
                className="relative overflow-hidden shadow-[0_12px_32px_-8px_rgba(43,37,34,0.14)] bg-ink-900 h-[220px] sm:h-[270px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={img(imgLeft.id)}
                  alt="Bộ ảnh concept tại MERCI studio"
                  loading="lazy"
                  style={{ objectPosition: imgLeft.pos }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Sub-Headline & Link */}
              <div className="mt-5 sm:mt-6">
                <h3 className="font-script font-bold text-3xl sm:text-4xl text-amber-500 leading-tight mb-2">
                  {about.subHeadline}
                </h3>
                
                <Link
                  to={ROUTES.about}
                  className="inline-flex items-center gap-2 text-ink-900 hover:text-amber-600 font-bold text-sm sm:text-base transition-colors group"
                >
                  <span>{about.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT COLUMN: Top Large Photo + Bottom Wide Photo */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Top-Right: Large Arch Organic Photo  */}
            <ScrollReveal direction="right" duration={650} className="relative">
              <div 
                style={{ borderRadius: '46% 54% 68% 32% / 38% 42% 58% 62%' }}
                className="relative overflow-hidden shadow-[0_16px_40px_-10px_rgba(43,37,34,0.16)] bg-ink-900 h-[280px] sm:h-[350px] lg:h-[390px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={img(imgTopRight.id)}
                  alt="Bộ ảnh concept tại MERCI studio"
                  loading="lazy"
                  style={{ objectPosition: imgTopRight.pos }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            {/* Bottom-Right: Wide Landscape Kidney-Shaped Photo */}
            <ScrollReveal direction="up" delay={200} duration={650} className="relative">
              <div 
                style={{ borderRadius: '68% 32% 44% 56% / 46% 62% 38% 54%' }}
                className="relative overflow-hidden shadow-[0_14px_35px_-8px_rgba(43,37,34,0.15)] bg-ink-900 h-[220px] sm:h-[270px] lg:h-[290px] group transition-transform duration-500 hover:scale-[1.02]"
              >
                <img
                  src={img(imgBottomRight.id)}
                  alt="Bộ ảnh concept tại MERCI studio"
                  loading="lazy"
                  style={{ objectPosition: imgBottomRight.pos }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
