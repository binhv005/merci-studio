import React from 'react';
import { Phone, MapPin, Camera } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';
import ScrollReveal from './common/ScrollReveal';
import { FacebookIcon } from './common/BrandIcons';

export default function Footer() {
  return (
    <footer className="relative bg-[#2a2420] text-cream-100 pt-10 sm:pt-14 lg:pt-16 pb-6">
      {/* Top Organic Curved Wave Transition from FinalCTA */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 text-[#2a2420]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 L1440,70 L1440,25 C1080,72 520,-5 0,40 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/15">

          {/* Col 1: Logo & Brand */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0} duration={600} className="space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center justify-center shrink-0">
                  <img
                    src={siteData.logoLight}
                    alt="Logo MERCI studio"
                    loading="lazy"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
              </div>

              <p className="text-sm text-cream-100/90 font-normal max-w-sm leading-relaxed">
                MERCI studio — tiệm chụp ảnh concept cá nhân, nghệ thuật, cổ trang và chân dung tại {siteData.city}. Mỗi khung hình là một câu chuyện của riêng bạn.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteData.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-ink-950/80 border border-white/20 hover:bg-amber-500 hover:text-white text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteData.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-ink-950/80 border border-white/20 hover:bg-amber-500 hover:text-white text-white flex items-center justify-center transition-all shadow-sm hover:scale-105"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Col 2: Quick Links (Hidden on Mobile) */}
          <div className="hidden md:block lg:col-span-3">
            <ScrollReveal direction="up" delay={100} duration={600} className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 drop-shadow-sm">
                Khám Phá
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  ['Giới thiệu', ROUTES.about],
                  ['Danh sách concept', ROUTES.concepts],
                  ['Bảng giá theo gói', ROUTES.pricing],
                  ['Bộ sưu tập ảnh', ROUTES.gallery],
                  ['Đặt lịch chụp', ROUTES.booking],
                  ['Liên hệ', ROUTES.contact],
                ].map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-cream-100/85 hover:text-amber-300 font-medium transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={200} duration={600} className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 drop-shadow-sm">
                Thông Tin Liên Hệ
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${siteData.hotline}`}
                  className="flex items-center gap-3 text-cream-100/90 hover:text-amber-300 font-medium transition-colors group"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Hotline: <strong className="text-white font-bold">{siteData.hotlineFormatted}</strong></span>
                </a>

                {siteData.branches.map((branch) => (
                  <div key={branch.name} className="flex items-start gap-3 text-cream-100/90">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-white font-bold block">{branch.name}</strong>
                      {branch.address}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Copyright & Slogan */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-200/70">
          <p>
            © {new Date().getFullYear()} MERCI studio. All rights reserved.
            {' · '}
            <Link to={ROUTES.admin} className="hover:text-amber-300 transition-colors">Quản lý đặt lịch</Link>
          </p>
          <p className="flex items-center gap-1.5 text-amber-300 font-medium text-center sm:text-right">
            <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{siteData.slogan}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
