import React, { useEffect, useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Check, MessageCircle } from 'lucide-react';
import { siteData, concepts, getConcept, img } from '../data/siteData';
import { addBooking, formatDate } from '../lib/bookingStore';
import ScrollReveal from './common/ScrollReveal';
import Decor from './common/Decor';
import { ZaloIcon } from './common/BrandIcons';

const today = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const emptyForm = (concept = '', pkg = '') => ({
  fullName: '',
  phone: '',
  channel: 'Zalo',
  concept,
  package: pkg,
  shootDate: '',
  timeSlot: '',
  people: '1',
  notes: '',
});

const inputClass = (hasError) =>
  `w-full px-4 py-2.5 rounded-xl bg-ink-50/60 border ${
    hasError ? 'border-red-400' : 'border-ink-200/80'
  } text-ink-950 placeholder-ink-700/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm transition-all`;

function FieldError({ message }) {
  if (!message) return null;
  return (
    <span className="flex items-center gap-1 text-xs text-red-500 mt-1">
      <AlertCircle className="w-3.5 h-3.5" />
      {message}
    </span>
  );
}

/**
 * showPicker: hiển thị lưới "Chọn concept" bằng ảnh (trang Đặt lịch).
 * showHeader: ẩn tiêu đề khi trang đã có PageHeader riêng.
 * initialConcept / initialPackage: chọn sẵn khi đi từ trang concept hoặc bảng giá.
 */
export default function BookingForm({ showPicker = false, showHeader = true, initialConcept = '', initialPackage = '' }) {
  const { bookingForm, packages } = siteData;
  const [formData, setFormData] = useState(() => emptyForm(initialConcept, initialPackage));
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);

  // Cập nhật khi người dùng đi từ trang khác tới với concept/gói khác
  useEffect(() => {
    setFormData((f) => ({ ...f, concept: initialConcept || f.concept, package: initialPackage || f.package }));
  }, [initialConcept, initialPackage]);

  const set = (key) => (e) => setFormData({ ...formData, [key]: e.target.value });
  const selectedConcept = getConcept(formData.concept);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^(\+?84|0)[0-9 .]{8,13}$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.concept) errs.concept = 'Vui lòng chọn concept';
    if (!formData.shootDate) {
      errs.shootDate = 'Vui lòng chọn ngày chụp';
    } else if (formData.shootDate < today()) {
      errs.shootDate = 'Ngày chụp không được ở quá khứ';
    }
    if (!formData.timeSlot) errs.timeSlot = 'Vui lòng chọn khung giờ';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Lưu yêu cầu (localStorage) — thay bằng API khi có backend
    setTimeout(() => {
      const pkg = packages.items.find((p) => p.id === formData.package);
      const booking = addBooking({
        ...formData,
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        conceptName: selectedConcept?.name || '',
        packageName: pkg?.name || 'Cần tư vấn',
      });
      setLoading(false);
      setSubmitted(booking);
    }, 700);
  };

  // Tin nhắn soạn sẵn để khách gửi kèm qua Zalo/Messenger
  const summary = submitted
    ? `Chào MERCI, mình là ${submitted.fullName} (${submitted.phone}). Mình vừa đặt lịch mã ${submitted.id}: concept ${submitted.conceptName}, ${submitted.packageName}, ngày ${formatDate(submitted.shootDate)} lúc ${submitted.timeSlot}.`
    : '';

  return (
    <section id="booking" className="py-8 sm:py-10 md:py-12 bg-amber-100 text-ink-950 relative overflow-hidden">
      <Decor tone="peach" variant="b" flipX />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        {showHeader && (
        <ScrollReveal direction="up" duration={600} className="text-center mb-4 sm:mb-6">
          <p className="font-handwriting text-2xl sm:text-3xl text-amber-600 font-semibold mb-0.5 sm:mb-1">
            {bookingForm.cursiveHeader}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-ink-950 tracking-tight mb-1.5">
            {bookingForm.heading}
          </h2>
          <p className="text-xs sm:text-sm text-ink-800/80 max-w-xl mx-auto">
            {bookingForm.subheading}
          </p>
        </ScrollReveal>
        )}

        {/* Bước 1: Chọn concept bằng ảnh */}
        {showPicker && !submitted && (
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-800 mb-3">
              <span className="text-amber-600">Bước 1 ·</span> Chọn concept
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
              {concepts.map((c) => {
                const active = formData.concept === c.slug;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setFormData({ ...formData, concept: c.slug })}
                    aria-pressed={active}
                    className={`group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 transition-all ${
                      active ? 'border-amber-500 shadow-card scale-[1.03]' : 'border-transparent hover:border-amber-300'
                    }`}
                  >
                    <img src={img(c.images[0])} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 right-2 text-left text-white text-xs font-bold leading-tight">{c.name}</span>
                    {active && (
                      <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <FieldError message={errors.concept} />
          </div>
        )}

        {showPicker && !submitted && (
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-800 mb-3">
            <span className="text-amber-600">Bước 2 ·</span> Thông tin đặt lịch
          </h3>
        )}

        {/* Main 50/50 Split Card (Light/White Theme, No Rounded Corners) */}
        <div className="bg-white text-ink-950 border border-ink-100 shadow-card rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* Left Column: ảnh concept đang chọn (absolute positioned to prevent grid height expansion) */}
          <ScrollReveal direction="left" duration={650} className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-0 overflow-hidden group">
            <div className="absolute inset-0">
              <img
                key={selectedConcept?.slug || 'default'}
                src={img(selectedConcept ? selectedConcept.images[0] : bookingForm.image)}
                alt={selectedConcept ? `Concept ${selectedConcept.name}` : 'MERCI studio'}
                loading="lazy"
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-10">
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug drop-shadow-md">
                {selectedConcept ? `Concept ${selectedConcept.name}` : bookingForm.imageTitle}
              </h4>
              <p className="text-xs text-cream-200/90 font-light mt-0.5 max-w-md">
                {selectedConcept ? selectedConcept.tagline : bookingForm.imageText}
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: 50% Form (Light Theme) */}
          <ScrollReveal direction="right" delay={150} duration={650} className="p-5 sm:p-6 lg:p-7 flex flex-col justify-start bg-white">
            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink-950">
                  Đã nhận yêu cầu đặt lịch!
                </h3>
                <p className="text-ink-700 text-sm max-w-md mx-auto">
                  Mã đặt lịch của bạn: <span className="font-bold text-amber-700">{submitted.id}</span>.
                  MERCI sẽ liên hệ qua <span className="font-bold">{submitted.channel}</span> theo số{' '}
                  <span className="font-bold text-amber-700">{submitted.phone}</span> để tư vấn và xác nhận lịch chụp.
                </p>

                <div className="rounded-2xl bg-cream-100 border border-cream-200 p-4 text-left text-xs text-ink-800 space-y-1">
                  <p><strong>Concept:</strong> {submitted.conceptName}</p>
                  <p><strong>Gói:</strong> {submitted.packageName}</p>
                  <p><strong>Thời gian:</strong> {formatDate(submitted.shootDate)} · {submitted.timeSlot}</p>
                </div>

                <p className="text-xs text-ink-700">Muốn được phản hồi nhanh hơn? Gửi thông tin cho MERCI qua:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <a
                    href={siteData.zaloLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => navigator.clipboard?.writeText(summary).catch(() => {})}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0068ff] hover:bg-[#0056d6] text-white text-xs font-bold transition-colors"
                  >
                    <ZaloIcon className="w-5 h-5" />
                    Nhắn Zalo
                  </a>
                  <a
                    href={siteData.messengerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => navigator.clipboard?.writeText(summary).catch(() => {})}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-900 hover:bg-ink-800 text-white text-xs font-bold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Nhắn Messenger
                  </a>
                </div>
                <p className="text-[11px] text-ink-500">Nội dung đặt lịch đã được sao chép — chỉ cần dán vào khung chat.</p>

                <button
                  onClick={() => {
                    setSubmitted(null);
                    setFormData(emptyForm());
                  }}
                  className="mt-2 px-6 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-ink-900 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Đặt lịch khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5" noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {/* Họ và tên */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      placeholder="Ví dụ: Nguyễn Thu Hà"
                      value={formData.fullName}
                      onChange={set('fullName')}
                      className={inputClass(errors.fullName)}
                    />
                    <FieldError message={errors.fullName} />
                  </div>

                  {/* Số điện thoại */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      placeholder="Ví dụ: 098 194 91 08"
                      value={formData.phone}
                      onChange={set('phone')}
                      className={inputClass(errors.phone)}
                    />
                    <FieldError message={errors.phone} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                  {/* Concept */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Concept *
                    </label>
                    <select value={formData.concept} onChange={set('concept')} className={inputClass(errors.concept)}>
                      <option value="">Chọn concept</option>
                      {concepts.map((c) => (
                        <option key={c.slug} value={c.slug}>{c.name}</option>
                      ))}
                    </select>
                    {!showPicker && <FieldError message={errors.concept} />}
                  </div>

                  {/* Gói chụp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Gói chụp
                    </label>
                    <select value={formData.package} onChange={set('package')} className={inputClass(false)}>
                      <option value="">Cần tư vấn thêm</option>
                      {packages.items.map((p) => (
                        <option key={p.id} value={p.id}>{p.name} – {p.price}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-3.5">
                  {/* Ngày chụp */}
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Ngày chụp *
                    </label>
                    <input
                      type="date"
                      min={today()}
                      value={formData.shootDate}
                      onChange={set('shootDate')}
                      className={inputClass(errors.shootDate)}
                    />
                    <FieldError message={errors.shootDate} />
                  </div>

                  {/* Khung giờ */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Khung giờ *
                    </label>
                    <select value={formData.timeSlot} onChange={set('timeSlot')} className={inputClass(errors.timeSlot)}>
                      <option value="">Chọn giờ</option>
                      {bookingForm.timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <FieldError message={errors.timeSlot} />
                  </div>

                  {/* Số người */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                      Số người
                    </label>
                    <select value={formData.people} onChange={set('people')} className={inputClass(false)}>
                      {['1', '2', '3', '4', '5+'].map((n) => (
                        <option key={n} value={n}>{n} người</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Kênh liên hệ ưa thích */}
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1.5">
                    MERCI liên hệ bạn qua
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Zalo', 'Messenger', 'Gọi điện'].map((ch) => (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => setFormData({ ...formData, channel: ch })}
                        aria-pressed={formData.channel === ch}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                          formData.channel === ch
                            ? 'bg-amber-500 border-amber-500 text-white'
                            : 'bg-white border-cream-300 text-ink-800 hover:border-amber-400'
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ghi chú */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink-800 mb-1">
                    Ghi chú
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Ý tưởng riêng, dịp chụp (sinh nhật, kỷ niệm…), size trang phục…"
                    value={formData.notes}
                    onChange={set('notes')}
                    className={inputClass(false)}
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-1.5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{bookingForm.cta}</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Hotline note */}
                <div className="text-center pt-0.5">
                  <a
                    href={`tel:${siteData.hotline}`}
                    className="inline-flex items-center gap-2 text-xs text-ink-700 hover:text-amber-600 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>HOTLINE: {siteData.hotlineFormatted}</span>
                  </a>
                </div>

              </form>
            )}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
