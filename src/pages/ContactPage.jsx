import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/common/ScrollReveal';
import LocationSection, { contactChannels } from '../components/LocationSection';
import FAQ from '../components/FAQ';
import { siteData } from '../data/siteData';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Liên hệ"
        subtitle="Nhắn tin cho MERCI qua Zalo, Messenger hoặc gọi hotline — studio luôn sẵn sàng tư vấn concept cho bạn."
      />

      {/* Kênh liên hệ nhanh + bản đồ */}
      <section className="bg-cream-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <ScrollReveal direction="left" duration={650} className="lg:col-span-2 space-y-3">
            {contactChannels.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-4 bg-white rounded-2xl border border-cream-200 shadow-soft px-5 py-4 hover:border-amber-300 hover:shadow-card transition-all group"
              >
                <span className="w-11 h-11 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-amber-700 font-bold">{label}</span>
                  <span className="block text-sm font-bold text-ink-950 break-words">{value}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-amber-600 transition-colors" />
              </a>
            ))}
          </ScrollReveal>

          <ScrollReveal direction="right" duration={650} className="lg:col-span-3 rounded-3xl overflow-hidden border border-cream-200 shadow-card bg-cream-200 min-h-[320px] lg:min-h-0">
            <iframe
              title="Bản đồ MERCI studio"
              src={siteData.mapEmbed}
              className="w-full h-full min-h-[320px] lg:min-h-[460px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </ScrollReveal>
        </div>
      </section>

      <LocationSection />
      <FAQ />
    </>
  );
}
