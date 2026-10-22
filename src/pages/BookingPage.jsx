import React from 'react';
import PageHeader from '../components/common/PageHeader';
import BookingForm from '../components/BookingForm';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import { getConcept, siteData } from '../data/siteData';

export default function BookingPage({ query }) {
  // Nhận concept/gói chọn sẵn từ URL: #/dat-lich?concept=voan-trang&goi=standard
  const concept = getConcept(query.concept) ? query.concept : '';
  const pkg = siteData.packages.items.some((p) => p.id === query.goi) ? query.goi : '';

  return (
    <>
      <PageHeader
        title="Đặt lịch chụp"
        subtitle="Chọn concept yêu thích, để lại thông tin và thời gian mong muốn — MERCI sẽ liên hệ xác nhận lịch cho bạn."
      />
      <BookingForm showPicker showHeader={false} initialConcept={concept} initialPackage={pkg} />
      <ProcessSteps />
      <FAQ />
    </>
  );
}
