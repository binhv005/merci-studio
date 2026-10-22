import React from 'react';
import { ChevronRight } from 'lucide-react';
import { img } from '../../data/siteData';
import { Link, ROUTES } from '../../lib/router';
import ScrollReveal from './ScrollReveal';
import Decor from './Decor';

/**
 * Tiêu đề cho các trang con: nền kem, tiêu đề chữ viết tay, breadcrumb
 * và dải ảnh tròn nhỏ (ảnh gốc nhỏ nên chỉ hiển thị ở kích thước vừa phải).
 */
export default function PageHeader({ title, subtitle, crumb, photos = [] }) {
  return (
    <section className="relative bg-cream-100 pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
      <Decor tone="white" variant="a" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal direction="down" duration={650} once>
          <nav className="flex items-center justify-center gap-1.5 text-xs font-semibold text-ink-600 mb-3" aria-label="Breadcrumb">
            <Link to={ROUTES.home} className="hover:text-amber-700 transition-colors">Trang chủ</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-700">{crumb || title}</span>
          </nav>
          <h1 className="font-script font-bold text-5xl sm:text-6xl md:text-7xl text-amber-600 leading-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-ink-800/85 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </ScrollReveal>

        {photos.length > 0 && (
          <ScrollReveal direction="up" delay={150} duration={650} once className="flex justify-center -space-x-3 sm:-space-x-4 mt-7">
            {photos.map((id, i) => (
              <div
                key={id}
                className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-cream-50 shadow-card"
                style={{ transform: `translateY(${i % 2 ? 8 : 0}px)` }}
              >
                <img src={img(id)} alt="" aria-hidden="true" className="w-full h-full object-cover object-top" />
              </div>
            ))}
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
