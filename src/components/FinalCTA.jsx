import React from 'react';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';
import ScrollReveal from './common/ScrollReveal';

export default function FinalCTA() {
  const { finalCta } = siteData;

  return (
    <section className="relative py-[60px] sm:py-[76px] lg:py-[92px] text-white overflow-hidden">
      {/* Background Panoramic Landscape Image */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src={finalCta.background}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft, minimal overlay to keep background landscape vivid and crystal clear */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Handwriting accent phrase */}
        <ScrollReveal direction="down" duration={600}>
          <p className="font-script text-3xl sm:text-4xl md:text-5xl text-amber-300 font-bold mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {finalCta.kicker}
          </p>
        </ScrollReveal>

        {/* Big Editorial Heading */}
        <ScrollReveal direction="up" delay={100} duration={650}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight mb-4 whitespace-pre-line drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {finalCta.heading}
          </h2>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={200} duration={650}>
          <p className="text-base sm:text-lg md:text-xl text-white font-medium max-w-2xl mx-auto mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            {finalCta.subheading}
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal direction="up" delay={300} duration={650}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Link
              to={ROUTES.booking}
              className="w-auto px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>{finalCta.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={siteData.zaloLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex px-8 py-3.5 sm:py-4 rounded-full bg-ink-950/80 hover:bg-ink-900 border border-white/30 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 items-center justify-center gap-2 whitespace-nowrap backdrop-blur-sm"
            >
              <MessageSquareQuote className="w-5 h-5 text-amber-300" />
              <span>{finalCta.ctaSecondary}</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
