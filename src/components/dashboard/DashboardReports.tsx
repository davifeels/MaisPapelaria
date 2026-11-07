import React, { useState } from 'react';
import '../../utils/chartConfig';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Download, 
  Clock, 
  CheckCircle2, 
  Target, 
  Users, 
  AlertCircle,
  FileSpreadsheet
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DashboardReports: React.FC = () => {
  const { showToast } = useApp();
  const [period, setPeriod] = useState<'7d' | '30d' | 'mes' | 'ano'>('30d');

  // Chart: Monthly Conversions Funnel (Bar)
  const funnelData = {
    labels: ['Visitantes do Catálogo', 'Mensagens Recebidas', 'Orçamentos Elaborados', 'Retiradas & Compras Fechadas'],
    datasets: [
      {
        label: 'Volume de Pessoas / Ações',
        data: [1280, 384, 186, 126],
        backgroundColor: ['#94a3b8', '#3b82f6', '#f59e0b', '#10b981'],
        borderRadius: 8,
      }
    ]
  };

  // Chart: Response Time Trend (Line)
  const responseTimeData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    datasets: [
      {
        label: 'Tempo Médio de 1ª Resposta (minutos)',
        data: [14.2, 8.5, 4.1, 2.3],
        borderColor: '#e31e24',
        backgroundColor: 'rgba(227, 30, 36, 0.1)',
        tension: 0.3,
        fill: true,
      }
    ]
  };

  // Chart: Sales by category (Doughnut)
  const categorySalesData = {
    labels: ['Material Escolar (44%)', 'Agendas & Cadernos (22%)', 'Escrita & Lettering (16%)', 'Escritório (12%)', 'Arte (6%)'],
    datasets: [
      {
        data: [44, 22, 16, 12, 6],
        backgroundColor: ['#e31e24', '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981'],
        borderWidth: 2,
        borderColor: '#ffffff',
      }
    ]
  };

  const handleExportReport = () => {
    showToast('Relatório analítico consolidado gerado com sucesso (simulação PDF/Excel).');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Relatórios & Indicadores de Performance
          </h2>
          <p className="text-xs text-slate-500">
            Análise consolidada de volume de contatos, tempos de resposta e conversão comercial.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Period selector */}
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 text-xs font-semibold shadow-xs">
            <button
              onClick={() => setPeriod('7d')}
              className={`px-3 py-1 rounded-lg transition-colors ${period === '7d' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              7 Dias
            </button>
            <button
              onClick={() => setPeriod('30d')}
              className={`px-3 py-1 rounded-lg transition-colors ${period === '30d' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              30 Dias
            </button>
            <button
              onClick={() => setPeriod('mes')}
              className={`px-3 py-1 rounded-lg transition-colors ${period === 'mes' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Este Mês
            </button>
          </div>

          <button
            onClick={handleExportReport}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Exportar Relatório</span>
          </button>
        </div>
      </div>

      {/* 4 Summary Metric Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Tempo Médio 1ª Resposta</span>
            <Clock className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">2.3 min</div>
          <div className="text-[11px] text-emerald-600 font-bold">
            -83% com MAIS CONNECT Bot
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Taxa de Conversão</span>
            <Target className="w-4 h-4 text-brand-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">32.8%</div>
          <div className="text-[11px] text-slate-400">
            Orçamentos convertidos em vendas
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Ticket Médio Estimado</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-black text-slate-900">R$ 117,85</div>
          <div className="text-[11px] text-emerald-600 font-bold">
            +14% em listas completas
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>Satisfação do Cliente (CSAT)</span>
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">4.9 / 5.0</div>
          <div className="text-[11px] text-slate-400">
            Avaliações registradas no canal
          </div>
        </div>
      </div>

      {/* Detailed Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Funnel of Opportunities (8 cols) */}
        <div className="lg:col-span-8 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Funil de Oportunidades & Conversão Comercial
              </h3>
              <p className="text-xs text-slate-500">
                Da navegação no catálogo digital à retirada no balcão da Mais Papelaria
              </p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded">
              Demonstração
            </span>
          </div>

          <div className="h-64 w-full">
            <Bar 
              data={funnelData} 
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

        {/* Share by category (4 cols) */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Vendas Estimadas por Categoria
            </h3>
            <p className="text-xs text-slate-500">
              Proporção de receita por linha de produto
            </p>
          </div>

          <div className="h-52 flex items-center justify-center">
            <Doughnut 
              data={categorySalesData} 
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

          <div className="text-[11px] text-slate-500 text-center pt-2 border-t border-slate-100">
            Material Escolar e Cadernos representam 66% da demanda
          </div>
        </div>

      </div>

      {/* Response time reduction chart */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Queda no Tempo de Resposta com Automação Inicial
            </h3>
            <p className="text-xs text-slate-500">
              Evolução das primeiras 4 semanas de implementação do assistente inteligente
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Meta Atingida (&lt; 3 min)
          </span>
        </div>

        <div className="h-56 w-full">
          <Line 
            data={responseTimeData} 
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

    </div>
  );
};
