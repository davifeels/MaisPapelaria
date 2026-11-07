import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AutomationRule } from '../../types';
import { 
  Zap, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  UserCheck, 
  ArrowRight, 
  Edit3, 
  Sparkles, 
  Sliders, 
  HelpCircle, 
  X, 
  Save 
} from 'lucide-react';

export const DashboardAutomations: React.FC = () => {
  const { automations, toggleAutomation, updateAutomation } = useApp();

  const [activeRule, setActiveRule] = useState<AutomationRule | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editReply, setEditReply] = useState('');

  const handleOpenEdit = (rule: AutomationRule) => {
    setActiveRule(rule);
    setEditTitle(rule.title);
    setEditReply(rule.defaultReply || '');
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeRule) return;

    updateAutomation({
      ...activeRule,
      title: editTitle,
      defaultReply: editReply
    });

    setActiveRule(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Automações & Robôs de Atendimento
          </h2>
          <p className="text-xs text-slate-500">
            Configure regras de resposta automática, triagem de listas escolares e roteamento para a equipe de Planaltina.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {automations.filter(a => a.enabled).length} de {automations.length} Fluxos Ativos
          </span>
        </div>
      </div>

      {/* Visual Workflow Steps (1 to 6) */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-500" />
          <span>Estrutura do Fluxo de Atendimento Demonstrativo</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 pt-1">
          {[
            { step: '1', title: 'Novo Contato', desc: 'Entrada via WhatsApp ou Instagram' },
            { step: '2', title: 'Triagem', desc: 'Identifica se é lista, produto ou dúvida' },
            { step: '3', title: 'Resposta Inicial', desc: 'Saudação e envio de opções imediatas' },
            { step: '4', title: 'Direcionamento', desc: 'Transfere para o atendente do balcão' },
            { step: '5', title: 'Follow-up', desc: 'Acompanhamento do orçamento após 24h' },
            { step: '6', title: 'Registro no CRM', desc: 'Status atualizado com valor estimado' },
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-1 relative">
              <div className="flex items-center justify-between">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-black">
                  {item.step}
                </span>
                {idx < 5 && (
                  <span className="hidden lg:block text-slate-300 text-xs font-bold">&rarr;</span>
                )}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automations Rules Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {automations.map((rule) => (
          <div
            key={rule.id}
            className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-4 bg-white ${
              rule.enabled 
                ? 'border-slate-200/90 shadow-sm hover:border-brand-300' 
                : 'border-dashed border-slate-300 opacity-70 bg-slate-50/50'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    rule.category === 'Atendimento' ? 'bg-blue-50 text-blue-700' :
                    rule.category === 'Triagem' ? 'bg-purple-50 text-purple-700' :
                    rule.category === 'FAQ' ? 'bg-amber-50 text-amber-700' :
                    'bg-emerald-50 text-emerald-700'
                  }`}>
                    <Zap className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {rule.title}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {rule.category}
                    </span>
                  </div>
                </div>

                {/* Switch Toggle */}
                <button
                  onClick={() => toggleAutomation(rule.id)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 focus:outline-none flex-shrink-0 ${
                    rule.enabled ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                  title={rule.enabled ? 'Desativar automação' : 'Ativar automação'}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      rule.enabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Trigger & Action description */}
              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div>
                  <strong className="text-slate-800">Gatilho:</strong> {rule.trigger}
                </div>
                <div>
                  <strong className="text-slate-800">Ação:</strong> {rule.action}
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                {rule.description}
              </p>

              {rule.defaultReply && (
                <div className="p-3 rounded-xl bg-slate-100/70 border border-slate-200/80 text-[11px] text-slate-700 space-y-1">
                  <span className="font-bold text-slate-900 block">Resposta Automática Configurada:</span>
                  <p className="italic text-slate-600">"{rule.defaultReply}"</p>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                Status: {rule.enabled ? 'Ativo em produção (simulada)' : 'Desativado'}
              </span>
              <button
                onClick={() => handleOpenEdit(rule)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Configurar Resposta</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Automation Modal */}
      {activeRule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                Configurar Mensagem do Robô
              </h3>
              <button
                onClick={() => setActiveRule(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="p-5 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nome da Automação
                </label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Texto da Resposta Automática
                </label>
                <textarea
                  rows={4}
                  value={editReply}
                  onChange={(e) => setEditReply(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveRule(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-md shadow-brand-500/25"
                >
                  Salvar Regra
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
