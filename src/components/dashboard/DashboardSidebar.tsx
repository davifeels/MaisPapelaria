import React from 'react';
import { useApp } from '../../context/AppContext';
import { DashboardTab } from '../../types';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Headphones, 
  MessageSquare, 
  Zap, 
  Megaphone, 
  HeartHandshake, 
  BarChart3, 
  Settings, 
  ExternalLink, 
  ChevronRight, 
  X,
  Sparkles
} from 'lucide-react';

interface Props {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const DashboardSidebar: React.FC<Props> = ({ mobileOpen, setMobileOpen }) => {
  const { dashboardTab, setDashboardTab, setActiveView, leads, conversations } = useApp();

  const newLeadsCount = leads.filter(l => l.status === 'Novo contato').length;
  const unreadMessagesCount = conversations.reduce((acc, c) => acc + c.unreadCount, 0);

  const menuItems: { id: DashboardTab; label: string; icon: any; badge?: number | string; badgeColor?: string }[] = [
    { id: 'overview', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'catalog', label: 'Catálogo', icon: ShoppingBag },
    { id: 'leads', label: 'Interessados', icon: Users, badge: newLeadsCount > 0 ? newLeadsCount : undefined, badgeColor: 'bg-brand-500 text-white' },
    { id: 'inbox', label: 'Atendimento & Chat', icon: Headphones, badge: unreadMessagesCount > 0 ? unreadMessagesCount : undefined, badgeColor: 'bg-emerald-500 text-white' },
    { id: 'automations', label: 'Automações', icon: Zap },
    { id: 'campaigns', label: 'Campanhas', icon: Megaphone },
    { id: 'reports', label: 'Relatórios', icon: BarChart3 },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const handleSelectTab = (tab: DashboardTab) => {
    setDashboardTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 text-slate-300 flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-slate-800 lg:static lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header */}
        <div>
          <div className="h-16 px-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-white/20 flex-shrink-0">
                <img 
                  src="/logo-mais-papelaria.png" 
                  alt="Mais Papelaria" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold text-white tracking-tight">
                    MAIS <span className="text-brand-500">CONNECT</span>
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  SaaS Gestor &bull; v2.4
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Demonstration Environment Pill */}
          <div className="p-3">
            <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-bold text-slate-200">Painel Ativo</span>
              </div>
              <span className="text-[9px] bg-brand-500/20 text-brand-400 border border-brand-500/30 px-1.5 py-0.5 rounded font-mono font-bold">
                DEMO
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 py-2 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = dashboardTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${item.badgeColor || 'bg-slate-700 text-slate-200'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions: Switch to Landing Page & Store Info */}
        <div className="p-4 border-t border-slate-800 space-y-3">
          <button
            onClick={() => setActiveView('landing')}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors border border-slate-700"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-brand-400" />
              <span>Ver Landing Page</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <div className="text-[10px] text-slate-500 text-center leading-relaxed">
            Mais Papelaria &bull; Planaltina-DF<br />
            Demonstração por Davi Anderson
          </div>
        </div>
      </aside>
    </>
  );
};
