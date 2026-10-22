import React from 'react';
import { Sparkles, ArrowRight, Check, Info } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';

export default function Pricing({ showHeader = true }) {
  const { packages } = siteData;

  return (
    <section id="pricing" className="py-10 md:py-14 bg-sage-50 relative overflow-hidden">
      <Decor tone="gray" variant="b" flipX />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-600 leading-tight mb-3">
              {packages.title}
            </h2>
            <p className="text-base sm:text-lg text-ink-800/80">
              {packages.description}
            </p>
          </ScrollReveal>
        )}

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {packages.items.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={100 + idx * 120}
              duration={650}
              className={`bg-white rounded-3xl p-5 sm:p-6 ${item.featured ? 'pt-9 sm:pt-10' : ''} flex flex-col relative group overflow-hidden transition-all duration-300 ${
                item.featured
                  ? 'border-2 border-amber-400 shadow-elevated'
                  : 'border border-cream-200 shadow-soft hover:shadow-card'
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-b-xl shadow-md flex items-center gap-1 z-20 whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.badge}</span>
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-sans font-extrabold text-ink-950 tracking-tight mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-ink-700 leading-relaxed mb-4 min-h-[2.5rem]">
                {item.desc}
              </p>

              <div className="flex flex-wrap items-end gap-x-1 mb-5 pb-5 border-b border-cream-200">
                <span className="text-3xl font-extrabold text-amber-700 tracking-tight">{item.price}</span>
                <span className="text-sm text-ink-600 mb-1 whitespace-nowrap">{item.unit}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {item.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-800">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-px">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={ROUTES.booking}
                query={{ goi: item.id }}
                className={`mt-auto w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide text-center transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${
                  item.featured
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white'
                    : 'bg-ink-900 hover:bg-ink-800 text-white'
                }`}
              >
                <span>Chọn gói này</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <p className="flex items-start sm:items-center justify-center gap-2 text-xs sm:text-sm text-ink-700 mt-6 text-center">
          <Info className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{packages.note}</span>
        </p>
      </div>
    </section>
  );
}
