import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

export default function FAQ() {
  const faqs = { items: siteData.faqs };
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const mid = Math.ceil(faqs.items.length / 2);
  const col1 = faqs.items.slice(0, mid);
  const col2 = faqs.items.slice(mid);

  const renderItem = (item, realIdx) => {
    const isOpen = openIdx === realIdx;
    return (
      <ScrollReveal
        key={realIdx}
        direction="up"
        delay={(realIdx % mid) * 60}
        duration={550}
        className={`rounded-none transition-all duration-300 border ${
          isOpen
            ? 'bg-white border-amber-300 shadow-soft'
            : 'bg-white/70 border-cream-300 hover:bg-white hover:border-ink-200'
        }`}
      >
        <button
          onClick={() => toggleFAQ(realIdx)}
          className="w-full text-left px-5 py-4 sm:px-6 sm:py-4.5 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-sm sm:text-base font-bold text-ink-950 leading-snug">
            {item.q}
          </span>
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-none flex items-center justify-center shrink-0 transition-transform duration-300 ${
              isOpen
                ? 'bg-amber-500 text-white rotate-180'
                : 'bg-amber-100 text-amber-700'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {isOpen && (
          <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-5 text-sm text-ink-800/85 leading-relaxed border-t border-cream-200 animate-fadeIn">
            {item.a}
          </div>
        )}
      </ScrollReveal>
    );
  };

  return (
    <section id="faq" className="pt-10 md:pt-14 pb-8 md:pb-12 bg-white relative overflow-hidden">
      <Decor tone="white" variant="b" flipX flipY />
      {/* Decorative soft shapes */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center mb-8 md:mb-10">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-3">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-base sm:text-lg text-ink-800/80">
            Giải đáp những thắc mắc phổ biến trước khi bạn đặt lịch chụp tại MERCI studio
          </p>
        </ScrollReveal>

        {/* 2-Column Accordion List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          <div className="space-y-4 sm:space-y-5">
            {col1.map((item, idx) => renderItem(item, idx))}
          </div>
          <div className="space-y-4 sm:space-y-5">
            {col2.map((item, idx) => renderItem(item, mid + idx))}
          </div>
        </div>

      </div>
    </section>
  );
}
