import React from 'react';
import { LandingHeader } from './LandingHeader';
import { HeroSection } from './HeroSection';
import { BrandCarouselSection } from './BrandCarouselSection';
import { SchoolListQuoteSection } from './SchoolListQuoteSection';
import { CatalogSection } from './CatalogSection';
import { PracticalSupportSection } from './PracticalSupportSection';
import { RelationshipSection } from './RelationshipSection';
import { BenefitsSection } from './BenefitsSection';
import { FaqSection } from './FaqSection';
import { LeadCaptureSection } from './LeadCaptureSection';
import { CtaBanner } from './CtaBanner';
import { LandingFooter } from './LandingFooter';
import { WhatsAppSimulationModal } from './WhatsAppSimulationModal';
import { useApp } from '../../context/AppContext';

export const LandingView: React.FC = () => {
  const { whatsappModalProduct, setWhatsappModalProduct } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/50 selection:bg-brand-500 selection:text-white">
      {/* Top Navigation Bar with Mega Menu */}
      <LandingHeader />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <BrandCarouselSection />
        <SchoolListQuoteSection />
        <CatalogSection />
        <PracticalSupportSection />
        <RelationshipSection />
        <BenefitsSection />
        <FaqSection />
        <LeadCaptureSection />
        <CtaBanner />
      </main>

      {/* Enterprise Footer with disclaimers */}
      <LandingFooter />

      {/* WhatsApp Inquiry Simulation Modal */}
      <WhatsAppSimulationModal
        product={whatsappModalProduct}
        onClose={() => setWhatsappModalProduct(null)}
      />
    </div>
  );
};
