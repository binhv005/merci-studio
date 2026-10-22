import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Gallery from '../components/Gallery';
import FinalCTA from '../components/FinalCTA';
import { useLightbox } from '../components/LightboxModal';
import { allPhotos, categories, categoryName } from '../data/siteData';
import { navigate, ROUTES } from '../lib/router';

export default function GalleryPage({ query }) {
  const active = categories.some((c) => c.id === query.nhom) ? query.nhom : 'all';
  const photos = active === 'all' ? allPhotos : allPhotos.filter((p) => p.category === categoryName(active));
  const [openLightbox, lightbox] = useLightbox(photos);

  const filters = [
    { id: 'all', label: `Tất cả (${allPhotos.length})` },
    ...categories.map((c) => ({
      id: c.id,
      label: `${c.name} (${allPhotos.filter((p) => p.category === c.name).length})`,
    })),
  ];

  return (
    <>
      <PageHeader
        title="Bộ sưu tập"
        crumb="Bộ sưu tập ảnh"
        subtitle="Những khung hình thật từ các buổi chụp tại MERCI studio — bấm vào ảnh để xem lớn."
      />
      <Gallery
        key={active}
        images={photos}
        onOpenLightbox={openLightbox}
        heading="Mọi câu chuyện"
        title="Lọc theo nhóm dịch vụ để tìm phong cách bạn yêu thích"
        filters={filters}
        activeFilter={active}
        onFilter={(id) => navigate(ROUTES.gallery, id === 'all' ? undefined : { nhom: id })}
      />
      <FinalCTA />
      {lightbox}
    </>
  );
}
