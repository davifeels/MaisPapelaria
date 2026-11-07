import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/initialData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { setWhatsappModalProduct, products } = useApp();

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 scroll-mt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
            Tire Suas Dúvidas
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Respostas imediatas sobre funcionamento, orçamentos, formas de pagamento e localização da Mais Papelaria.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 bg-slate-50/50"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-brand-600 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : 'bg-white text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-brand-50/60 border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Não encontrou o que procurava?
            </h4>
            <p className="text-xs text-slate-600">
              Nossa equipe de Planaltina-DF está pronta para te atender diretamente no WhatsApp.
            </p>
          </div>
          <button
            onClick={() => setWhatsappModalProduct(products[0])}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-sm flex-shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chamar no WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
