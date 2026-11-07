import React from 'react';
import { useApp } from '../../context/AppContext';
import { LayoutDashboard, ArrowRight, Sparkles } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const { setActiveView, setDashboardTab } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-600 via-brand-500 to-rose-600 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brandYellow-300" />
          Evolução Digital da Mais Papelaria
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          Sua papelaria conectada a novas oportunidades.
        </h2>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
          Uma experiência digital pensada para aproximar clientes, facilitar o atendimento e fortalecer o relacionamento com a <strong>Mais Papelaria</strong>.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveView('dashboard');
              setDashboardTab('overview');
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-slate-900 font-extrabold text-base shadow-xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-100 group"
          >
            <LayoutDashboard className="w-5 h-5 text-brand-600 group-hover:rotate-6 transition-transform" />
            <span>Explorar Demonstração</span>
            <ArrowRight className="w-4 h-4 ml-0.5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
};
