import React from 'react';
import { concepts } from '../data/siteData';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';
import ConceptCard from './ConceptCard';

export default function ConceptCatalog() {
  const featured = concepts.filter((c) => c.featured).slice(0, 3);

  return (
    <section id="pricing" className="py-10 md:py-14 bg-[#f5f4f2] relative overflow-hidden">
      <Decor tone="gray" variant="a" flipX flipY />
      {/* Background accent */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600} className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="font-script font-bold text-4xl sm:text-5xl md:text-6xl text-amber-500 leading-tight mb-3">
            Concept Nổi Bật
          </h2>
          <p className="text-base sm:text-lg text-ink-800/80">
            Concept cá nhân, nghệ thuật, cổ trang, chân dung và theo chủ đề tại MERCI studio
          </p>
        </ScrollReveal>

        {/* Catalog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featured.map((concept, idx) => (
            <ScrollReveal key={concept.slug} direction="up" delay={100 + idx * 150} duration={650}>
              <ConceptCard concept={concept} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
