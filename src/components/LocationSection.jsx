import React from 'react';
import { MapPin, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import { ZaloIcon, FacebookIcon } from './common/BrandIcons';

// Các kênh liên hệ — dùng cho trang Liên hệ
export const contactChannels = [
  { label: 'Hotline', value: siteData.hotlineFormatted, href: `tel:${siteData.hotline}`, icon: Phone },
  { label: 'Zalo', value: `Nhắn Zalo ${siteData.hotlineFormatted}`, href: siteData.zaloLink, icon: ZaloIcon, external: true },
  { label: 'Messenger', value: 'Nhắn tin fanpage MERCI studio', href: siteData.messengerLink, icon: MessageCircle, external: true },
  { label: 'Facebook', value: siteData.facebookLabel, href: siteData.facebookLink, icon: FacebookIcon, external: true },
  { label: 'Địa chỉ', value: `MERCI studio – Tiệm Chụp Ảnh, ${siteData.city}`, href: siteData.googleMapsLink, icon: MapPin, external: true },
];

export default function LocationSection() {
  const { locationSection, branches } = siteData;

  return (
    <section id="location" className="relative bg-ink-950 py-16 sm:py-20 lg:py-24 text-white overflow-hidden min-h-[520px] lg:min-h-[600px] flex items-center">
      {/* 1. Background photo (ẩn trên mobile) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src={locationSection.background}
          alt="Bộ ảnh của MERCI studio"
          loading="lazy"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/80 to-ink-950/55 z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT COLUMN: Tiêu đề, hotline, Facebook, bản đồ */}
          <ScrollReveal direction="left" duration={700} className="lg:col-span-6 flex flex-col items-start max-w-xl">

            <h2 className="font-serif italic font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6 drop-shadow-md">
              {locationSection.title}
            </h2>

            <p className="text-sm sm:text-base text-cream-100/90 font-normal leading-relaxed mb-6 max-w-lg drop-shadow-sm">
              {locationSection.intro}
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-8">
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 drop-shadow-sm">Hotline / Zalo</span>
                <a
                  href={`tel:${siteData.hotline}`}
                  className="inline-flex items-center gap-2 text-base sm:text-lg text-white font-bold hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  {siteData.hotlineFormatted}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-amber-400 font-bold mb-1 drop-shadow-sm">Facebook</span>
                <a
                  href={siteData.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-cream-100/90 font-medium leading-relaxed hover:text-amber-300 transition-colors break-all"
                >
                  {siteData.facebookLabel}
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={siteData.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_10px_25px_rgba(165,127,94,0.45)] hover:shadow-[0_15px_30px_rgba(165,127,94,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
              >
                <span>{locationSection.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${siteData.hotline}`}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/70 hover:bg-white/15 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Gọi ngay</span>
              </a>
            </div>

          </ScrollReveal>

          {/* RIGHT COLUMN: Thông tin studio & kênh nhắn tin */}
          <ScrollReveal direction="right" duration={750} delay={150} className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full max-w-[520px] space-y-4">
              {branches.map((branch, idx) => (
                <a
                  key={branch.name}
                  href={branch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-white/95 text-ink-950 p-5 shadow-elevated border border-white/60 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md font-extrabold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-ink-950 leading-tight mb-1">{branch.name}</h3>
                    <p className="flex items-start gap-1.5 text-sm text-ink-800 leading-relaxed">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
