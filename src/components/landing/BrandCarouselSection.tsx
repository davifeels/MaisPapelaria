import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export const BrandCarouselSection: React.FC = () => {
  const brands = [
    { name: 'Faber-Castell', subtitle: 'Lápis, cores & ecolápis' },
    { name: 'Tilibra', subtitle: 'Cadernos & agendas líderes' },
    { name: 'Stabilo', subtitle: 'Boss pastel & point 88' },
    { name: 'Caderno Inteligente', subtitle: 'Sistema original de disco' },
    { name: 'Chamex', subtitle: 'Papel A4 multiuso líder' },
    { name: 'BIC', subtitle: 'Escrita diária de precisão' },
    { name: 'CIS', subtitle: 'Spiro, brush & lettering' },
    { name: 'Pilot', subtitle: 'G-2 gel & fineliners' },
    { name: 'Post-it (3M)', subtitle: 'Notas adesivas originais' },
    { name: 'Dello', subtitle: 'Pastas & organização' },
    { name: 'Pentel', subtitle: 'Lapiseiras técnicas & arte' },
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Marcas Oficiais e Homologadas
              </h3>
              <p className="text-xs text-slate-500">
                Garantia de procedência, qualidade e durabilidade que você encontra na Mais Papelaria
              </p>
            </div>
          </div>

          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            100% Produtos Originais
          </span>
        </div>

        {/* Carousel pills */}
        <div className="flex items-center gap-3 overflow-x-auto py-2 scrollbar-none">
          {brands.map((b, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-all hover:-translate-y-0.5 cursor-default flex flex-col items-center justify-center min-w-[140px]"
            >
              <span className="text-xs font-black text-slate-900 tracking-tight">
                {b.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {b.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
