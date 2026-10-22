import React from 'react';
import { siteData } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';

// Quy trình 4 bước từ chọn concept đến nhận ảnh
export default function ProcessSteps({ title = 'Quy Trình Đặt Lịch', className = 'bg-cream-50' }) {
  return (
    <section className={`py-10 md:py-14 relative overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={600} className="text-center mb-8 md:mb-10">
          <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight">{title}</h2>
        </ScrollReveal>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {siteData.steps.map((step, idx) => (
            <ScrollReveal
              as="li"
              key={step.title}
              direction="up"
              delay={idx * 100}
              duration={600}
              className="relative bg-white rounded-3xl border border-cream-200 shadow-soft p-5 sm:p-6"
            >
              <span className="block font-display text-4xl text-amber-200 leading-none mb-3">0{idx + 1}</span>
              <h3 className="text-base sm:text-lg font-extrabold text-ink-950 mb-1.5">{step.title}</h3>
              <p className="text-sm text-ink-700 leading-relaxed">{step.text}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
