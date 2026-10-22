import React from 'react';
import { Heart, Palette, Users, WandSparkles, Check, ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/common/ScrollReveal';
import Decor from '../components/common/Decor';
import ProcessSteps from '../components/ProcessSteps';
import FinalCTA from '../components/FinalCTA';
import { siteData, categories, img } from '../data/siteData';
import { Link, ROUTES } from '../lib/router';

const VALUE_ICONS = [Palette, Users, Heart, WandSparkles];

export default function AboutPage() {
  const { about } = siteData;

  return (
    <>
      <PageHeader
        title="Giới thiệu"
        subtitle={about.intro}
        photos={['830946482', '842995258', '848715432', '845435843', '840520650']}
      />

      {/* Câu chuyện thương hiệu */}
      <section className="relative bg-amber-50 py-12 sm:py-16 overflow-hidden">
        <Decor tone="peach" variant="b" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal direction="left" duration={650} className="flex justify-center gap-4">
            <div
              style={{ borderRadius: '46% 54% 68% 32% / 38% 42% 58% 62%' }}
              className="w-[56%] aspect-[3/4] overflow-hidden shadow-card bg-cream-200"
            >
              <img src={img('847747712')} alt="Concept Khu Vườn Bí Mật" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="w-[40%] flex flex-col gap-4 pt-10">
              <div className="aspect-square rounded-full overflow-hidden shadow-card border-4 border-white bg-cream-200">
                <img src={img('836262246')} alt="Concept Voan Trắng" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-card bg-cream-200">
                <img src={img('844737601')} alt="Concept Xuân Thì" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={650}>
            <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight mb-4">
              {about.headline}
            </h2>
            {about.story.map((p) => (
              <p key={p.slice(0, 20)} className="text-base text-ink-800/90 leading-relaxed mb-4">{p}</p>
            ))}
            <p className="font-script text-2xl text-ink-950 font-bold mt-2">{about.subHeadline}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Giá trị */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={600} className="text-center mb-8 md:mb-10">
            <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight mb-2">Điều MERCI mang đến</h2>
            <p className="text-base text-ink-800/80">Mỗi buổi chụp là sự chăm chút từ ý tưởng đến tấm ảnh cuối cùng</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {about.values.map((v, idx) => {
              const Icon = VALUE_ICONS[idx % VALUE_ICONS.length];
              return (
                <ScrollReveal
                  key={v.title}
                  direction="up"
                  delay={idx * 100}
                  duration={600}
                  className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 hover:shadow-card transition-shadow"
                >
                  <span className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-extrabold text-ink-950 mb-1.5">{v.title}</h3>
                  <p className="text-sm text-ink-700 leading-relaxed">{v.text}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dịch vụ & khách hàng */}
      <section className="bg-sage-50 py-12 sm:py-16 relative overflow-hidden">
        <Decor tone="gray" variant="a" flipX />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal direction="left" duration={650}>
            <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight mb-5">Dịch vụ chụp ảnh</h2>
            <div className="space-y-3">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={ROUTES.concepts}
                  query={{ nhom: c.id }}
                  className="flex items-center justify-between gap-4 bg-white rounded-2xl border border-cream-200 px-5 py-4 shadow-soft hover:border-amber-300 transition-colors group"
                >
                  <span>
                    <span className="block font-extrabold text-ink-950">{c.name}</span>
                    <span className="block text-sm text-ink-700">{c.desc}</span>
                  </span>
                  <ArrowRight className="w-5 h-5 text-amber-600 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={650}>
            <h2 className="font-script font-bold text-4xl sm:text-5xl text-amber-600 leading-tight mb-5">MERCI dành cho bạn</h2>
            <ul className="bg-white rounded-3xl border border-cream-200 shadow-soft p-6 space-y-4">
              {about.audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-ink-800">
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3 mt-5">
              {['831576560', '843074233', '848391000'].map((id) => (
                <div key={id} className="aspect-square rounded-2xl overflow-hidden shadow-soft bg-cream-200">
                  <img src={img(id)} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ProcessSteps title="Hành trình cùng MERCI" />
      <FinalCTA />
    </>
  );
}
