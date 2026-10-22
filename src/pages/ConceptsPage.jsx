import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/common/ScrollReveal';
import Decor from '../components/common/Decor';
import ConceptCard from '../components/ConceptCard';
import FinalCTA from '../components/FinalCTA';
import { concepts, categories } from '../data/siteData';
import { navigate, ROUTES } from '../lib/router';

export default function ConceptsPage({ query }) {
  // Nhóm đang lọc nằm trên URL (#/concept?nhom=co-trang) để chia sẻ được link
  const active = categories.some((c) => c.id === query.nhom) ? query.nhom : 'all';
  const list = active === 'all' ? concepts : concepts.filter((c) => c.category === active);
  const activeCategory = categories.find((c) => c.id === active);

  const filters = [{ id: 'all', name: 'Tất cả' }, ...categories];

  return (
    <>
      <PageHeader
        title="Danh sách concept"
        crumb="Concept"
        subtitle="Khám phá các concept của MERCI — từ chân dung trong trẻo, áo dài cổ phong đến những bộ ảnh nghệ thuật theo chủ đề riêng."
      />

      <section className="py-10 md:py-14 bg-sage-50 relative overflow-hidden min-h-[60vh]">
        <Decor tone="gray" variant="b" flipY />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Bộ lọc */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => navigate(ROUTES.concepts, f.id === 'all' ? undefined : { nhom: f.id })}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
                  active === f.id
                    ? 'bg-ink-950 text-white border-ink-950 shadow-md'
                    : 'bg-white text-ink-800 border-cream-300 hover:border-amber-400 hover:text-amber-700'
                }`}
              >
                {f.name}
                <span className="ml-1.5 opacity-60">
                  {f.id === 'all' ? concepts.length : concepts.filter((c) => c.category === f.id).length}
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-sm text-ink-700 mb-8 min-h-[1.25rem]">
            {activeCategory ? activeCategory.desc : `${concepts.length} concept đang có tại MERCI studio`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {list.map((concept, idx) => (
              <ScrollReveal key={concept.slug} direction="up" delay={(idx % 3) * 120} duration={600} once className="h-full">
                <ConceptCard concept={concept} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
