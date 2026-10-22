import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { img } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';

// Thẻ concept — giữ nguyên markup thẻ catalog của thiết kế gốc
export default function ConceptCard({ concept, featured = false, badge }) {
  const [main, ...rest] = concept.images;
  const thumbs = rest.slice(0, 3);

  return (
    <div
      className={`h-full bg-white rounded-3xl p-0 flex flex-col relative group overflow-hidden transition-all duration-300 ${
        featured
          ? 'border-2 border-amber-400 shadow-elevated'
          : 'border border-ink-100 shadow-soft hover:shadow-card'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-[10px] px-3 py-1 rounded-full shadow-md flex items-center gap-1 z-20">
          <Sparkles className="w-3 h-3" />
          <span>{badge}</span>
        </div>
      )}

      {/* Main photo */}
      <div className="aspect-[4/3] overflow-hidden bg-ink-100">
        <img
          src={img(main)}
          alt={`Concept ${concept.name}`}
          loading="lazy"
          style={{ objectPosition: 'center 25%' }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-2 mt-2 px-4 sm:px-5">
        {thumbs.map((id) => (
          <div key={id} className="aspect-square rounded-xl overflow-hidden bg-ink-100">
            <img
              src={img(id)}
              alt={`Concept ${concept.name}`}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-1 pt-4 px-4 sm:px-5 pb-4 sm:pb-5">
        <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-ink-950 tracking-tight mb-2">
          {concept.name}
        </h3>
        <p className="text-sm text-ink-800/85 leading-relaxed mb-5">
          {concept.desc}
        </p>

        <Link
          to={`${ROUTES.concepts}/${concept.slug}`}
          className={`mt-auto w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide text-center transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${
            featured
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white'
              : 'bg-ink-900 hover:bg-ink-800 text-white'
          }`}
        >
          <span>Khám phá concept</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
