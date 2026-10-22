import React from 'react';
import { ArrowLeft, CalendarHeart, Sparkles, Eye } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import Decor from '../components/common/Decor';
import { ZaloIcon } from '../components/common/BrandIcons';
import ConceptCard from '../components/ConceptCard';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import { useLightbox } from '../components/LightboxModal';
import { concepts, getConcept, categoryName, img, siteData } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';
import NotFoundPage from './NotFoundPage';

export default function ConceptDetailPage({ slug }) {
  const concept = getConcept(slug);
  const photos = concept
    ? concept.images.map((id) => ({ src: img(id), title: concept.name, category: categoryName(concept.category) }))
    : [];
  const [openLightbox, lightbox] = useLightbox(photos);

  if (!concept) return <NotFoundPage />;

  // Gợi ý concept cùng nhóm trước, sau đó bổ sung concept khác cho đủ 3
  const related = [
    ...concepts.filter((c) => c.slug !== slug && c.category === concept.category),
    ...concepts.filter((c) => c.slug !== slug && c.category !== concept.category),
  ].slice(0, 3);

  return (
    <>
      {/* Hero chi tiết */}
      <section className="relative bg-cream-100 pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <Decor tone="white" variant="a" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to={ROUTES.concepts}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-ink-700 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Tất cả concept
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <ScrollReveal direction="left" duration={650} once className="md:col-span-5 flex justify-center">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="relative w-[240px] sm:w-[290px] aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden border-[6px] border-white shadow-elevated bg-cream-200 group"
                aria-label={`Xem ảnh concept ${concept.name}`}
              >
                <img src={img(concept.images[0])} alt={`Concept ${concept.name}`} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </button>
            </ScrollReveal>

            <ScrollReveal direction="right" duration={650} once className="md:col-span-7">
              <span className="badge-pill mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {categoryName(concept.category)}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-950 tracking-tight mb-1">{concept.name}</h1>
              <p className="font-script text-3xl sm:text-4xl text-amber-600 font-bold mb-4">{concept.tagline}</p>
              <p className="text-base text-ink-800/90 leading-relaxed mb-5 max-w-xl">{concept.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {concept.mood.map((m) => (
                  <span key={m} className="px-3 py-1 rounded-full bg-white border border-cream-300 text-xs font-bold text-ink-800">
                    #{m}
                  </span>
                ))}
              </div>

              <p className="text-sm text-ink-800 mb-7">
                <strong className="text-ink-950">Phù hợp:</strong> {concept.suitable}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={ROUTES.booking}
                  query={{ concept: concept.slug }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-sm tracking-wide shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <CalendarHeart className="w-4 h-4" />
                  Chọn concept này
                </Link>
                <a
                  href={siteData.zaloLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-ink-900/70 hover:bg-ink-950 hover:text-white text-ink-950 font-bold text-sm tracking-wide transition-all flex items-center gap-2"
                >
                  <ZaloIcon className="w-6 h-6" />
                  Tư vấn qua Zalo
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ảnh trong concept */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={600} className="text-center mb-8">
            <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight mb-2">Ảnh trong concept</h2>
            <p className="text-sm sm:text-base text-ink-700">{concept.images.length} khung hình từ các buổi chụp thực tế</p>
          </ScrollReveal>

          <div className={`grid gap-3 sm:gap-4 ${concept.collage ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3'}`}>
            {photos.map((photo, idx) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-200 shadow-sm hover:shadow-xl transition-shadow"
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <img src={photo.src} alt={`${concept.name} ${idx + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 group-hover:bg-ink-950/30 transition-colors">
                  <span className="w-11 h-11 rounded-full bg-white/95 text-ink-950 flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      {/* Concept liên quan */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={600} className="text-center mb-8">
            <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight">Có thể bạn cũng thích</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {related.map((c) => (
              <ConceptCard key={c.slug} concept={c} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      {lightbox}
    </>
  );
}
