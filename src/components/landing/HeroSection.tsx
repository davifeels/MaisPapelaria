import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  ShoppingBag, 
  CheckCircle2, 
  Truck, 
  FileText, 
  CreditCard, 
  Building2, 
  Star, 
  Zap, 
  ChevronRight,
  Clock,
  BadgePercent
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setWhatsappModalProduct, products, setSelectedCatalogCategory } = useApp();
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    {
      tag: 'VOLTA ÀS AULAS 2026',
      title: 'Tudo para o seu ano letivo com economia e praticidade.',
      subtitle: 'Traga ou envie sua lista escolar por foto no WhatsApp e receba a cotação completa com marcas líderes (Faber-Castell, Tilibra, Stabilo).',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
      cta: 'Cotas Lista Escolar',
      category: 'Material Escolar',
      promo: 'Até 15% OFF em listas completas'
    },
    {
      tag: 'LINHA PASTEL & LETTERING',
      title: 'Cadernos inteligentes de disco, planners e canetas especiais.',
      subtitle: 'As coleções mais amadas para organizar seus estudos e rotina de trabalho com muito estilo e criatividade.',
      image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1200&q=80',
      cta: 'Explorar Linha Pastel',
      category: 'Agendas e Cadernos',
      promo: 'Novidades Exclusivas em Planaltina'
    },
    {
      tag: 'ESCRITÓRIOS & EMPRESAS',
      title: 'Suprimentos corporativos com faturamento para empresas de Planaltina.',
      subtitle: 'Papel A4, pastas organizadoras, grampeadores de alta durabilidade e suprimentos com entrega rápida agendada.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      cta: 'Ver Linha Corporativa',
      category: 'Escritório',
      promo: 'Condições Especiais para CNPJ'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner(prev => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const current = banners[activeBanner];

  const handleBannerAction = () => {
    setSelectedCatalogCategory(current.category);
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    {
      icon: Truck,
      title: 'Retirada Expressa em 2h',
      desc: 'Peça no WhatsApp e retire no balcão em Planaltina-DF',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      icon: FileText,
      title: 'Cotação de Lista em 15 min',
      desc: 'Envie a foto da lista escolar e receba o orçamento',
      color: 'text-brand-600 bg-brand-50'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Facilitado',
      desc: 'Pix com desconto ou até 10x sem juros na loja',
      color: 'text-amber-600 bg-amber-50'
    },
    {
      icon: Building2,
      title: 'Vendas Corporativas B2B',
      desc: 'Faturamento direto e notas fiscais para empresas',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: ShieldCheck,
      title: 'Mais de 6 Anos de Tradição',
      desc: 'Qualidade • Preço • Confiança em Planaltina-DF',
      color: 'text-purple-600 bg-purple-50'
    }
  ];

  return (
    <section id="hero" className="bg-slate-100/60 pb-8 sm:pb-12 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Main Grid: Main Promotional Banner + 2 Secondary Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Giant Showcase Banner (8 cols) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-card border border-slate-200/80 min-h-[380px] sm:min-h-[440px] flex flex-col justify-end text-white group">
            
            {/* Background Image with smooth transition */}
            <img
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dark & Brand Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>

            {/* Banner Top Ribbon */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-500 text-white text-xs font-black uppercase tracking-wider shadow-md">
                <BadgePercent className="w-3.5 h-3.5" />
                {current.promo}
              </span>

              {/* Dots indicator */}
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                {banners.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveBanner(idx)}
                    className={`h-2 rounded-full transition-all ${activeBanner === idx ? 'w-6 bg-brand-500' : 'w-2 bg-white/60'}`}
                    aria-label={`Banner ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Banner Bottom Content */}
            <div className="relative z-10 p-6 sm:p-10 space-y-3.5 max-w-2xl">
              <span className="text-xs font-extrabold text-brandYellow-300 tracking-wider uppercase block">
                {current.tag}
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {current.title}
              </h1>

              <p className="text-xs sm:text-base text-slate-200 line-clamp-2 leading-relaxed">
                {current.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={handleBannerAction}
                  className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{current.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setWhatsappModalProduct(products[0])}
                  className="px-5 py-3 rounded-xl bg-white/95 hover:bg-white text-slate-900 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chamar no WhatsApp</span>
                </button>
              </div>
            </div>

          </div>

          {/* 2 Right Promo Cards (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            
            {/* Promo Card 1: School List Fast Track */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white flex flex-col justify-between shadow-soft relative overflow-hidden group">
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>

              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full">
                    Serviço Exclusivo
                  </span>
                  <FileText className="w-6 h-6 text-amber-200" />
                </div>
                <h3 className="text-lg font-black leading-snug">
                  Cote sua Lista Escolar em 1 Clique
                </h3>
                <p className="text-xs text-amber-100 leading-relaxed">
                  Envie a foto da lista da escola do seu filho. Nossa equipe em Planaltina-DF separa tudo com os melhores preços!
                </p>
              </div>

              <div className="pt-4 relative z-10">
                <a
                  href="#lista-escolar"
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-900 hover:bg-slate-50 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
                >
                  <span>Enviar Foto da Lista</span>
                  <ChevronRight className="w-4 h-4 text-amber-600" />
                </a>
              </div>
            </div>

            {/* Promo Card 2: B2B / Corporate Store */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col justify-between shadow-soft relative overflow-hidden group">
              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/10 text-emerald-400 px-2.5 py-0.5 rounded-full">
                    Atendimento Corporativo
                  </span>
                  <Building2 className="w-6 h-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-black leading-snug">
                  Papelaria & Suprimentos para Empresas
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Faturamento corporativo, caixas fechadas de papel A4 e entrega programada para consultórios e escritórios.
                </p>
              </div>

              <div className="pt-4 relative z-10">
                <button
                  onClick={() => setWhatsappModalProduct(products[3] || products[0])}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com Vendas B2B</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 5 Enterprise Trust Badges Bar (Padrão Kalunga / Lepok) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className={`flex items-center gap-3 ${idx > 0 ? 'sm:pl-4' : ''} ${idx >= 2 ? 'pt-3 sm:pt-0' : ''}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${badge.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {badge.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
