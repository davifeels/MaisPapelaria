import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ShoppingBag, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Zap, 
  Star 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setWhatsappModalProduct, products } = useApp();

  const handleWhatsappHero = () => {
    // Open modal with representative product or general contact
    setWhatsappModalProduct(products[0]);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-brand-50/40 via-white to-slate-50">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brandYellow-200/40 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-brand-200/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copywriting and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200 shadow-sm text-xs font-semibold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-brand-600 font-bold uppercase tracking-wider text-[11px]">MAIS CONNECT</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">Presença Digital Integrada &bull; Planaltina-DF</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Tudo o que você precisa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-500">estudar</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandYellow-500 to-amber-600">criar</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">organizar</span> suas ideias.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Conheça uma experiência digital mais prática para descobrir produtos, consultar informações e entrar em contato com a <strong>Mais Papelaria</strong>.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#catalogo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-base shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <button
                onClick={handleWhatsappHero}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-700 font-bold text-base border-2 border-emerald-500/40 shadow-sm hover:border-emerald-600 transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>Falar pelo WhatsApp</span>
              </button>
            </div>

            {/* Brand Proof Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 tracking-tight">6 Anos</span>
                <span className="text-xs text-slate-500 font-medium">De tradição em Planaltina-DF</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <span className="text-2xl font-black text-brand-600 tracking-tight">~9,2 mil</span>
                <span className="text-xs text-slate-500 font-medium">Seguidores no Instagram</span>
              </div>
              <div className="flex flex-col border-l border-slate-200 pl-4">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-black text-slate-900">100%</span>
                </div>
                <span className="text-xs text-slate-500 font-medium">Qualidade &bull; Preço &bull; Confiança</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80"
                  alt="Materiais de papelaria organizados e estéticos"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/10"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card-dark text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-brandYellow-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Linha Criativa &bull; Volta às Aulas
                    </span>
                    <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                      Planaltina-DF
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    Cadernos inteligentes, marcadores em tons pastéis e organização completa para sua rotina.
                  </p>
                </div>
              </div>

              {/* Floating Interactive Badge 1: WhatsApp consultation simulated */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/25">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Atendimento Rápido</div>
                  <div className="text-xs font-bold text-slate-900">Cotação de lista escolar</div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Resposta média em minutos
                  </div>
                </div>
              </div>

              {/* Floating Interactive Badge 2: Product Highlight */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-500/25">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Catálogo Digital</div>
                  <div className="text-xs font-bold text-slate-900">Mais de 120 itens ilustrativos</div>
                  <div className="text-[10px] text-brand-600 font-semibold">
                    Consulte preços e estoque
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
