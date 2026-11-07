import React from 'react';
import { LandingHeader } from './LandingHeader';
import { HeroSection } from './HeroSection';
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
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-brand-500 selection:text-white">
      {/* Top Navigation */}
      <LandingHeader />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <CatalogSection />
        <PracticalSupportSection />
        <RelationshipSection />
        <BenefitsSection />
        <FaqSection />
        <LeadCaptureSection />
        <CtaBanner />
      </main>

      {/* Footer with mandatory disclaimers */}
      <LandingFooter />

      {/* Global WhatsApp Simulation Modal */}
      <WhatsAppSimulationModal
        product={whatsappModalProduct}
        onClose={() => setWhatsappModalProduct(null)}
      />
    </div>
  );
};
