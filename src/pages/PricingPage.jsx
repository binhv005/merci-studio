import React from 'react';
import PageHeader from '../components/common/PageHeader';
import Pricing from '../components/Pricing';
import ProcessSteps from '../components/ProcessSteps';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import { siteData } from '../data/siteData';

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Bảng giá"
        crumb="Bảng giá theo gói"
        subtitle={siteData.packages.description}
        photos={['833337010', '846073342', '842822144', '848307513', '844979267']}
      />
      <Pricing showHeader={false} />
      <ProcessSteps />
      <FAQ />
      <FinalCTA />
    </>
  );
}
