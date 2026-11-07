import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardOverview } from './DashboardOverview';
import { DashboardCatalog } from './DashboardCatalog';
import { DashboardLeads } from './DashboardLeads';
import { DashboardInbox } from './DashboardInbox';
import { DashboardAutomations } from './DashboardAutomations';
import { DashboardCampaigns } from './DashboardCampaigns';
import { DashboardReports } from './DashboardReports';
import { DashboardSettings } from './DashboardSettings';
import { 
  Menu, 
  ExternalLink, 
  Bell, 
  Search, 
  User, 
  ChevronRight, 
  Sparkles,
  Store
} from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const { dashboardTab, setActiveView } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const getTabTitle = () => {
    switch (dashboardTab) {
      case 'overview': return 'Visão Geral & Indicadores';
      case 'catalog': return 'Catálogo de Produtos';
      case 'leads': return 'Gestão de Interessados (CRM)';
      case 'inbox': return 'Central de Atendimento & Chat';
      case 'automations': return 'Automações & FAQ Bots';
      case 'campaigns': return 'Campanhas de Relacionamento';
      case 'reports': return 'Relatórios de Desempenho';
      case 'settings': return 'Configurações da Loja';
      default: return 'Painel Gestor';
    }
  };

  const renderActiveView = () => {
    switch (dashboardTab) {
      case 'overview': return <DashboardOverview />;
      case 'catalog': return <DashboardCatalog />;
      case 'leads': return <DashboardLeads />;
      case 'inbox': return <DashboardInbox />;
      case 'automations': return <DashboardAutomations />;
      case 'campaigns': return <DashboardCampaigns />;
      case 'reports': return <DashboardReports />;
      case 'settings': return <DashboardSettings />;
      default: return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100/70 flex selection:bg-brand-500 selection:text-white">
      
      {/* Sidebar Navigation */}
      <DashboardSidebar 
        mobileOpen={mobileSidebarOpen} 
        setMobileOpen={setMobileSidebarOpen} 
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="font-bold text-slate-900 hidden sm:inline">MAIS CONNECT</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
              <span className="font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                {getTabTitle()}
              </span>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            
            {/* Direct Switch to Landing Page */}
            <button
              onClick={() => setActiveView('landing')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors border border-slate-200"
              title="Voltar para a Landing Page pública"
            >
              <Store className="w-3.5 h-3.5 text-brand-500" />
              <span className="hidden sm:inline">Ver Loja Pública</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors relative"
                aria-label="Notificações"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500 ring-2 ring-white"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 text-xs space-y-2 animate-fade-in">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100 font-bold text-slate-900">
                    <span>Notificações da Loja</span>
                    <span className="text-[10px] bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded">2 novas</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="font-bold text-slate-900">Novo lead captado via Landing Page</div>
                      <div className="text-[11px] text-slate-500">Juliana Vasconcelos solicitou cotação.</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="font-bold text-slate-900">Mensagem no WhatsApp</div>
                      <div className="text-[11px] text-slate-500">Camila Fernandes perguntou sobre lista do 6º ano.</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                MP
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900 leading-tight">
                  Mais Papelaria
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  Planaltina - DF
                </span>
              </div>
            </div>

          </div>

        </header>

        {/* Dynamic Tab Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderActiveView()}
        </main>

        {/* Small Dashboard Footer */}
        <footer className="p-4 bg-white border-t border-slate-200 text-center text-xs text-slate-400">
          MAIS CONNECT &bull; Painel de demonstração conceitual por Davi Anderson para Mais Papelaria (Planaltina-DF).
        </footer>

      </div>

    </div>
  );
};
