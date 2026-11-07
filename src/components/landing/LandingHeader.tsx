import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import logoMaisPapelaria from '../../assets/logo';
import { 
  MessageCircle, 
  LayoutDashboard, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Search, 
  ShoppingBag, 
  Phone, 
  CreditCard, 
  ShieldCheck, 
  Building2, 
  FileText, 
  ChevronDown,
  Sparkles,
  Zap,
  BookOpen,
  Briefcase,
  PenTool,
  Palette,
  FolderOpen
} from 'lucide-react';

export const LandingHeader: React.FC = () => {
  const { 
    setActiveView, 
    setDashboardTab, 
    setWhatsappModalProduct, 
    products, 
    searchCatalogQuery, 
    setSearchCatalogQuery,
    setSelectedCatalogCategory 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

  const departments = [
    { label: 'Volta às Aulas 2026', cat: 'Material Escolar', icon: BookOpen, badge: 'Alta Demanda' },
    { label: 'Cadernos de Disco & Planners', cat: 'Agendas e Cadernos', icon: BookOpen, badge: 'Tendência' },
    { label: 'Canetas & Lettering', cat: 'Escrita', icon: PenTool },
    { label: 'Papéis & Escritório B2B', cat: 'Escritório', icon: Briefcase },
    { label: 'Arte, Desenho & Pintura', cat: 'Arte e Criatividade', icon: Palette },
    { label: 'Pastas & Organização', cat: 'Organização', icon: FolderOpen },
  ];

  const handleSelectDepartment = (cat: string) => {
    setSelectedCatalogCategory(cat);
    setDepartmentsOpen(false);
    setMobileMenuOpen(false);
    const catalogEl = document.getElementById('catalogo');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGeneralWhatsapp = () => {
    setWhatsappModalProduct(products[0]);
  };

  return (
    <header className="relative z-40 w-full bg-white shadow-sm border-b border-slate-200">
      
      {/* 1. Super-Top Utility Bar (Padrão Grandes Redes Brasileiras) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              Loja Física: Planaltina - DF &bull; Retirada expressa em 2h
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-brandYellow-400" />
              Seg a Sex: 08h às 18h30 | Sáb: 08h às 13h
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              Vendas Corporativas & Faturamento B2B
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/mais_papelaria" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-300 hover:text-white transition-colors hidden sm:inline"
            >
              Instagram: <strong className="text-white">@mais_papelaria</strong> (~9,2k)
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded text-[10px] font-bold border border-emerald-700/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              Balcão Online Aberto
            </span>
          </div>

        </div>
      </div>

      {/* 2. Main E-Commerce Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Logo & Tradition Badge */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-500 shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform flex items-center justify-center">
              <img 
                src={logoMaisPapelaria} 
                alt="Mais Papelaria" 
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                  MAIS <span className="text-brand-500">PAPELARIA</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-wider bg-brand-100 text-brand-700 px-2 py-0.5 rounded-md border border-brand-200">
                  CONNECT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold">
                  Tudo para o seu dia a dia!
                </span>
                <span className="text-[10px] text-amber-600 font-bold bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200 hidden md:inline">
                  6 Anos em Planaltina-DF
                </span>
              </div>
            </div>
          </a>

          {/* Central Enterprise Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <div className="relative w-full">
              <input
                type="text"
                value={searchCatalogQuery}
                onChange={(e) => setSearchCatalogQuery(e.target.value)}
                placeholder="O que você está procurando hoje? Ex: Caderno inteligente, marca-texto pastel, papel A4..."
                className="w-full pl-4 pr-28 py-2.5 rounded-2xl border-2 border-slate-200 focus:border-brand-500 focus:ring-0 text-xs sm:text-sm bg-slate-50/70 transition-colors placeholder:text-slate-400"
              />
              <button
                onClick={() => {
                  const catalogEl = document.getElementById('catalogo');
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Buscar</span>
              </button>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick School List Quote CTA */}
            <a
              href="#lista-escolar"
              className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <FileText className="w-4 h-4 text-brand-600" />
              <span>Cotação de Lista</span>
            </a>

            {/* WhatsApp Fast Consultation */}
            <button
              onClick={handleGeneralWhatsapp}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300 transition-all shadow-xs active:scale-95"
              title="Atendimento Imediato via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span className="hidden sm:inline">WhatsApp Oficial</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>

            {/* SaaS Management Dashboard Toggle */}
            <button
              onClick={() => {
                setActiveView('dashboard');
                setDashboardTab('overview');
              }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black bg-slate-900 hover:bg-black text-white shadow-md transition-all active:scale-95 group"
            >
              <LayoutDashboard className="w-4 h-4 text-brandYellow-400 group-hover:rotate-6 transition-transform" />
              <span className="hidden sm:inline">Painel MAIS CONNECT</span>
              <span className="text-[10px] bg-brand-500 text-white px-1.5 py-0.5 rounded font-bold uppercase">
                SaaS
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Input */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              value={searchCatalogQuery}
              onChange={(e) => setSearchCatalogQuery(e.target.value)}
              placeholder="Buscar cadernos, canetas, listas..."
              className="w-full pl-3 pr-20 py-2 rounded-xl border border-slate-300 text-xs bg-slate-50"
            />
            <button
              onClick={() => {
                const catalogEl = document.getElementById('catalogo');
                if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-brand-500 text-white font-bold text-xs"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mega Category Bar (Estilo Kalunga / Varejão de Papelaria) */}
      <div className="bg-slate-50/90 border-t border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center justify-between text-xs font-bold text-slate-700">
            
            {/* All Departments Button */}
            <div className="relative">
              <button
                onClick={() => setDepartmentsOpen(!departmentsOpen)}
                className="py-2.5 px-3 bg-brand-500 hover:bg-brand-600 text-white rounded-t-lg flex items-center gap-2 transition-colors"
              >
                <Menu className="w-4 h-4" />
                <span>TODOS OS DEPARTAMENTOS</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Dropdown Menu */}
              {departmentsOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-b-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-fade-in space-y-1">
                  {departments.map((dep, idx) => {
                    const Icon = dep.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectDepartment(dep.cat)}
                        className="w-full px-3 py-2.5 rounded-xl hover:bg-slate-100 flex items-center justify-between text-left transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
                          <span className="text-xs font-semibold text-slate-800 group-hover:text-brand-600">
                            {dep.label}
                          </span>
                        </div>
                        {dep.badge && (
                          <span className="text-[9px] bg-brand-50 text-brand-600 border border-brand-200 px-1.5 py-0.5 rounded font-bold">
                            {dep.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Direct Category Shortcuts */}
            <div className="flex items-center gap-6 overflow-x-auto py-2.5 scrollbar-none">
              <a 
                href="#catalogo" 
                onClick={() => setSelectedCatalogCategory('Material Escolar')}
                className="hover:text-brand-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🎒 Material Escolar</span>
              </a>
              <a 
                href="#catalogo" 
                onClick={() => setSelectedCatalogCategory('Agendas e Cadernos')}
                className="hover:text-brand-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>📓 Cadernos & Planners</span>
              </a>
              <a 
                href="#catalogo" 
                onClick={() => setSelectedCatalogCategory('Escrita')}
                className="hover:text-brand-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>✍️ Canetas & Lettering</span>
              </a>
              <a 
                href="#catalogo" 
                onClick={() => setSelectedCatalogCategory('Escritório')}
                className="hover:text-brand-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>💼 Escritório & Papéis</span>
              </a>
              <a 
                href="#catalogo" 
                onClick={() => setSelectedCatalogCategory('Arte e Criatividade')}
                className="hover:text-brand-600 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>🎨 Artes & Desenho</span>
              </a>
              <a 
                href="#lista-escolar" 
                className="text-brand-600 hover:text-brand-700 transition-colors flex items-center gap-1.5 whitespace-nowrap font-black"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>COTAÇÃO DE LISTA EXPRESSA</span>
              </a>
            </div>

          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-fade-in">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2">
              Departamentos
            </span>
            {departments.map((dep, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectDepartment(dep.cat)}
                className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-slate-800 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>{dep.label}</span>
                {dep.badge && (
                  <span className="text-[9px] bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-bold">
                    {dep.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleGeneralWhatsapp();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp Oficial</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveView('dashboard');
                setDashboardTab('overview');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black bg-slate-900 text-white"
            >
              <LayoutDashboard className="w-4 h-4 text-brandYellow-400" />
              <span>Acessar Painel MAIS CONNECT</span>
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
