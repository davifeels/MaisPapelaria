import React from 'react';
import { useApp } from '../../context/AppContext';
import '../../utils/chartConfig';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { 
  Users, 
  MessageSquare, 
  Clock, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  Info, 
  Sparkles, 
  ChevronRight, 
  Plus, 
  Store 
} from 'lucide-react';

export const DashboardOverview: React.FC = () => {
  const { leads, products, conversations, setDashboardTab, setActiveConversationId } = useApp();

  const totalLeads = leads.length;
  const inProgressLeads = leads.filter(l => l.status === 'Em atendimento' || l.status === 'Novo contato').length;
  const pendingRequests = leads.filter(l => l.status === 'Aguardando resposta').length;
  const completedLeads = leads.filter(l => l.status === 'Concluído').length;

  // KPIs
  const kpis = [
    {
      title: 'Contatos Recebidos',
      value: '384',
      trend: '+18.4%',
      period: 'vs. mês anterior',
      icon: Users,
      color: 'text-brand-600 bg-brand-50 border-brand-200'
    },
    {
      title: 'Conversas em Andamento',
      value: `${inProgressLeads + 8}`,
      trend: '+12%',
      period: 'WhatsApp & Instagram',
      icon: MessageSquare,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      title: 'Solicitações Pendentes',
      value: `${pendingRequests + 4}`,
      trend: '-5%',
      period: 'Aguardando cotação',
      icon: Clock,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      title: 'Produtos Consultados',
      value: `${products.length * 11}`,
      trend: '+24.1%',
      period: 'Cliques no catálogo',
      icon: ShoppingBag,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      title: 'Oportunidades Comerciais',
      value: 'R$ 14.850',
      trend: '+15.7%',
      period: 'Valor total estimado',
      icon: TrendingUp,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      title: 'Conversões Registradas',
      value: '32.8%',
      trend: '+4.2%',
      period: `${completedLeads + 28} vendas fechadas`,
      icon: CheckCircle2,
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    }
  ];

  // Chart 1: Contacts Evolution (Line Chart)
  const contactsLineData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Contatos WhatsApp',
        data: [28, 35, 42, 38, 56, 68, 32],
        borderColor: '#059669', // Emerald
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Contatos Instagram',
        data: [15, 22, 18, 25, 34, 45, 28],
        borderColor: '#e31e24', // Brand Red
        backgroundColor: 'rgba(227, 30, 36, 0.08)',
        tension: 0.4,
        fill: true,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: { boxWidth: 12, font: { size: 11, family: 'Plus Jakarta Sans' } }
      }
    },
    scales: {
      y: {
        grid: { color: 'rgba(226, 232, 240, 0.6)' },
        ticks: { font: { size: 10 } }
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 } }
      }
    }
  };

  // Chart 2: Channel Origin (Doughnut Chart)
  const originDoughnutData = {
    labels: ['WhatsApp (52%)', 'Instagram (28%)', 'Landing Page (14%)', 'Loja Física (6%)'],
    datasets: [
      {
        data: [52, 28, 14, 6],
        backgroundColor: [
          '#10B981', // WhatsApp Green
          '#E11D48', // Instagram Pink/Red
          '#3B82F6', // Landing Page Blue
          '#F59E0B'  // Physical Store Yellow
        ],
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    ],
  };

  // Chart 3: Most consulted categories (Bar Chart)
  const categoriesBarData = {
    labels: ['Material Escolar', 'Agendas/Cadernos', 'Escrita & Lettering', 'Arte', 'Escritório'],
    datasets: [
      {
        label: 'Consultas no Catálogo',
        data: [142, 98, 76, 54, 48],
        backgroundColor: '#e31e24',
        borderRadius: 8,
      }
    ]
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner: Disclaimer and Store context */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brandYellow-300">
              Demonstração Interativa &bull; Mais Papelaria
            </span>
            <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-mono">
              Planaltina-DF
            </span>
          </div>
          <h2 className="text-xl font-black">
            Painel Geral de Oportunidades &bull; MAIS CONNECT
          </h2>
          <p className="text-xs text-slate-300">
            Acompanhe o fluxo de mensagens, orçamentos e interesse em produtos da loja em tempo real.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDashboardTab('catalog')}
            className="px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Plus className="w-3.5 h-3.5 text-brand-600" />
            <span>Novo Produto</span>
          </button>
          <button
            onClick={() => setDashboardTab('inbox')}
            className="px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Abrir Chat</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card transition-all flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 line-clamp-1">
                  {kpi.title}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${kpi.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] pt-1">
                  <span className="font-bold text-emerald-600">{kpi.trend}</span>
                  <span className="text-slate-400 truncate">{kpi.period}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Contacts Timeline (8 cols) */}
        <div className="lg:col-span-8 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Evolução dos Contatos Recebidos (Semanal)
              </h3>
              <p className="text-xs text-slate-500">
                Comparativo de mensagens originadas pelo WhatsApp vs. Direct do Instagram
              </p>
            </div>
            <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
              Dados Demonstrativos
            </span>
          </div>

          <div className="h-64 w-full">
            <Line data={contactsLineData} options={chartOptions} />
          </div>
        </div>

        {/* Chart 2: Channel Origin (4 cols) */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Origem dos Interessados
            </h3>
            <p className="text-xs text-slate-500">
              Distribuição por canal de entrada
            </p>
          </div>

          <div className="h-52 flex items-center justify-center">
            <Doughnut 
              data={originDoughnutData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: { boxWidth: 10, font: { size: 10 } }
                  }
                }
              }} 
            />
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 text-center">
            WhatsApp lidera com 52% das interações para listas
          </div>
        </div>

      </div>

      {/* Lower Row: Categories Bar Chart & Recent CRM Leads */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Categories Consultation (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Categorias Mais Consultadas no Catálogo
            </h3>
            <p className="text-xs text-slate-500">
              Volume de visualizações e consultas no mês
            </p>
          </div>

          <div className="h-64 w-full">
            <Bar 
              data={categoriesBarData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { grid: { color: 'rgba(226, 232, 240, 0.6)' }, ticks: { font: { size: 10 } } },
                  x: { grid: { display: false }, ticks: { font: { size: 10 } } }
                }
              }} 
            />
          </div>
        </div>

        {/* Recent Leads Preview (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Interessados Recentes (CRM Local)
              </h3>
              <p className="text-xs text-slate-500">
                Últimos contatos captados na demonstração
              </p>
            </div>
            <button
              onClick={() => setDashboardTab('leads')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <span>Ver todos ({leads.length})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="pb-2">Contato</th>
                  <th className="pb-2">Canal</th>
                  <th className="pb-2">Interesse</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.slice(0, 4).map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-2.5">
                      <div className="font-bold text-slate-900">{lead.name}</div>
                      <div className="text-[11px] text-slate-400">{lead.phone}</div>
                    </td>
                    <td className="py-2.5">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                        lead.channel === 'WhatsApp' ? 'bg-emerald-50 text-emerald-700' :
                        lead.channel === 'Instagram' ? 'bg-pink-50 text-pink-700' :
                        'bg-blue-50 text-blue-700'
                      }`}>
                        {lead.channel}
                      </span>
                    </td>
                    <td className="py-2.5 text-slate-700 font-medium">
                      {lead.categoryInterest}
                    </td>
                    <td className="py-2.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
};
