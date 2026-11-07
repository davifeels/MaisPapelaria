import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Campaign } from '../../types';
import { 
  Megaphone, 
  Plus, 
  Calendar, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  X, 
  Save, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

export const DashboardCampaigns: React.FC = () => {
  const { campaigns, addCampaign } = useApp();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [channel, setChannel] = useState<'WhatsApp' | 'Instagram' | 'Multi-canal'>('Multi-canal');
  const [status, setStatus] = useState<'Ativa' | 'Agendada' | 'Concluída' | 'Rascunho'>('Agendada');
  const [scheduledDate, setScheduledDate] = useState('20/12/2026');
  const [estimatedReach, setEstimatedReach] = useState('1500');
  const [conversionRate, setConversionRate] = useState('16%');
  const [description, setDescription] = useState('');

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addCampaign({
      name: name.trim(),
      targetAudience: targetAudience.trim() || 'Clientes cadastrados no clube',
      channel,
      status,
      scheduledDate,
      estimatedReach: parseInt(estimatedReach) || 1000,
      conversionRate,
      description: description.trim() || 'Divulgação de novidades autorizada pela LGPD.',
      lgpdCompliant: true
    });

    setIsModalOpen(false);
    setName('');
    setDescription('');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Campanhas de Relacionamento Comercial
          </h2>
          <p className="text-xs text-slate-500">
            Gerencie divulgações sazonais autorizadas para o público de Planaltina-DF com foco em listas escolares e novidades.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all flex items-center gap-2 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Nova Campanha</span>
        </button>
      </div>

      {/* LGPD Governance Banner */}
      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/90 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs">
            <span className="font-bold block text-emerald-900">Políticas de Privacidade & Consentimento (LGPD)</span>
            <span className="text-emerald-700">Todas as campanhas utilizam base própria de contatos com opt-in explícito e link direto de descadastramento.</span>
          </div>
        </div>
        <span className="text-[10px] bg-emerald-200/60 font-mono font-bold text-emerald-900 px-2.5 py-1 rounded-md">
          Conformidade Ativa
        </span>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {campaigns.map((camp) => (
          <div
            key={camp.id}
            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-card transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                    camp.channel === 'WhatsApp' ? 'bg-emerald-50 text-emerald-700' :
                    camp.channel === 'Instagram' ? 'bg-pink-50 text-pink-700' :
                    'bg-purple-50 text-purple-700'
                  }`}>
                    {camp.channel}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {camp.name}
                  </h3>
                </div>

                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  camp.status === 'Ativa' ? 'bg-emerald-100 text-emerald-800' :
                  camp.status === 'Agendada' ? 'bg-blue-100 text-blue-800' :
                  camp.status === 'Em andamento' ? 'bg-amber-100 text-amber-800' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {camp.status}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {camp.description}
              </p>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Público-Alvo:</span>
                  <span className="font-semibold text-slate-800">{camp.targetAudience}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Data Prevista:</span>
                  <span className="font-semibold text-slate-800">{camp.scheduledDate}</span>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-center">
              <div className="p-2 rounded-xl bg-slate-50">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Alcance Estimado</div>
                <div className="text-sm font-black text-slate-900">
                  {camp.estimatedReach.toLocaleString('pt-BR')} contatos
                </div>
              </div>
              <div className="p-2 rounded-xl bg-slate-50">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Conversão Ilustrativa</div>
                <div className="text-sm font-black text-emerald-600">
                  {camp.conversionRate}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Campaign Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                Criar Campanha Demonstrativa
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateCampaign} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nome da Campanha
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Volta às Aulas 2026 - Lote Promocional"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Canal Principal
                  </label>
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Multi-canal">Multi-canal</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Agendada">Agendada</option>
                    <option value="Ativa">Ativa</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Rascunho">Rascunho</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Público Alvo
                </label>
                <input
                  type="text"
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="Ex: Pais com filhos em escolas de Planaltina"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Descrição da Mensagem e Benefício
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descreva a oferta ou o comunicado..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-md shadow-brand-500/25"
                >
                  Criar Campanha
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
