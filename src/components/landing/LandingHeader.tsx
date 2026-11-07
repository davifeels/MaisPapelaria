import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MessageCircle, 
  LayoutDashboard, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Sparkles, 
  PhoneCall, 
  ShoppingBag 
} from 'lucide-react';

export const LandingHeader: React.FC = () => {
  const { setActiveView, setDashboardTab, setWhatsappModalProduct, products } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGeneralWhatsapp = () => {
    // Select first product or generic consultation
    setWhatsappModalProduct(products[0]);
  };

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Catálogo Digital', href: '#catalogo' },
    { label: 'Atendimento Prático', href: '#atendimento' },
    { label: 'Relacionamento', href: '#relacionamento' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-sm">
      {/* Top micro-bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              Planaltina - DF &bull; Loja Física com mais de 6 anos
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brandYellow-400" />
              Seg a Sex: 08h às 18h30 | Sáb: 08h às 13h
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full text-[11px] font-medium border border-emerald-800/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Atendimento Online Ativo
            </span>
            <a 
              href="https://instagram.com/mais_papelaria" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              @mais_papelaria
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand identity with authentic logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500 shadow-sm flex-shrink-0 bg-white p-0.5 group-hover:scale-105 transition-transform">
            <img 
              src="/logo-mais-papelaria.png" 
              alt="Mais Papelaria" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                MAIS <span className="text-brand-500">PAPELARIA</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded">
                CONNECT
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Tudo para o seu dia a dia!
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={handleGeneralWhatsapp}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-sm active:scale-95"
            title="Simular consulta via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Falar no WhatsApp</span>
          </button>

          {/* Switch to SaaS Dashboard */}
          <button
            onClick={() => {
              setActiveView('dashboard');
              setDashboardTab('overview');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-brand-500 hover:bg-brand-600 text-white shadow-md shadow-brand-500/25 transition-all hover:shadow-lg active:scale-95 group"
          >
            <LayoutDashboard className="w-4 h-4 group-hover:rotate-6 transition-transform" />
            <span>Painel MAIS CONNECT</span>
            <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-normal">
              Demo SaaS
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => {
              setActiveView('dashboard');
              setDashboardTab('overview');
            }}
            className="p-2 rounded-lg bg-brand-50 text-brand-600 font-medium text-xs flex items-center gap-1 border border-brand-200"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Painel</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleGeneralWhatsapp();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp (Simulação)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveView('dashboard');
                setDashboardTab('overview');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white"
            >
              <LayoutDashboard className="w-4 h-4 text-brand-500" />
              <span>Acessar Painel MAIS CONNECT</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
