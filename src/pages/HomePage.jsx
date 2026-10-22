import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import ConceptCatalog from '../components/ConceptCatalog';
import Activities from '../components/Activities';
import Gallery from '../components/Gallery';
import LocationSection from '../components/LocationSection';
import BookingForm from '../components/BookingForm';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import { useLightbox } from '../components/LightboxModal';
import { allPhotos, img } from '../data/siteData';

// Thứ tự ảnh cho thư viện trang chủ — vị trí 0, 1, 3, 4, 6 là 5 panel panorama nên đặt ảnh đơn lên đầu
const LEAD = ['825267460', '842822144', '846432725', '845435843', '830946482', '846486077', '847747712'].map(img);
const HOME_PHOTOS = [
  ...LEAD.map((src) => allPhotos.find((p) => p.src === src)),
  ...allPhotos.filter((p) => !LEAD.includes(p.src)),
];

export default function HomePage() {
  const [openLightbox, lightbox] = useLightbox(HOME_PHOTOS);
  const [openMosaic, mosaicLightbox] = useLightbox(allPhotos);

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Giới thiệu */}
      <Highlights />

      {/* 3. Catalog concept */}
      <ConceptCatalog />

      {/* 4. Mosaic khung hình */}
      <Activities
        onSelectImage={(src) => {
          const idx = allPhotos.findIndex((item) => item.src === src);
          openMosaic(idx >= 0 ? idx : 0);
        }}
      />

      {/* 5. Thư viện ảnh */}
      <Gallery images={HOME_PHOTOS} onOpenLightbox={openLightbox} />

      {/* 6. Liên hệ */}
      <LocationSection />

      {/* 7. Form đặt lịch */}
      <BookingForm />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Final CTA */}
      <FinalCTA />

      {lightbox}
      {mosaicLightbox}
    </>
  );
}
