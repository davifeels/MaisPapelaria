import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Settings, 
  Store, 
  MapPin, 
  Clock, 
  MessageCircle, 
  RotateCcw, 
  ShieldAlert, 
  Save, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';

export const DashboardSettings: React.FC = () => {
  const { resetAllToDefaults, showToast } = useApp();

  const [storeName, setStoreName] = useState('Mais Papelaria');
  const [location, setLocation] = useState('Planaltina - Distrito Federal (DF)');
  const [instagram, setInstagram] = useState('@mais_papelaria');
  const [whatsappNumber, setWhatsappNumber] = useState('(61) 98400-0000');
  const [workingHours, setWorkingHours] = useState('Seg a Sex: 08h às 18h30 | Sáb: 08h às 13h');
  const [slogan, setSlogan] = useState('Tudo para o seu dia a dia!');

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Configurações da loja salvas localmente.');
  };

  const handleConfirmReset = () => {
    if (window.confirm('Tem certeza que deseja restaurar todos os dados da demonstração (produtos, leads, conversas) para o padrão original?')) {
      resetAllToDefaults();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      
      {/* Header */}
      <div>
        <h2 className="text-xl font-black text-slate-900 tracking-tight">
          Configurações da Plataforma MAIS CONNECT
        </h2>
        <p className="text-xs text-slate-500">
          Personalize as informações da Mais Papelaria, canais de contato e parâmetros de privacidade.
        </p>
      </div>

      {/* Main Settings Form */}
      <form onSubmit={handleSaveSettings} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 text-xs">
        
        {/* Section 1: Store identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Store className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-bold text-slate-900">
              Dados Institucionais da Loja
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Nome Comercial da Papelaria
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Slogan Oficial
              </label>
              <input
                type="text"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Localização Física
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Horário de Atendimento
              </label>
              <input
                type="text"
                value={workingHours}
                onChange={(e) => setWorkingHours(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Channels */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <h3 className="text-sm font-bold text-slate-900">
              Canais de Contato Integrados
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Número do WhatsApp Comercial (Simulado)
              </label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Instagram da Papelaria
              </label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/25 flex items-center gap-1.5 transition-all active:scale-95"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Salvar Parâmetros</span>
          </button>
        </div>

      </form>

      {/* Demo Reset Card */}
      <div className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <RotateCcw className="w-4 h-4 text-amber-600" />
            <span>Restaurar Dados Demonstrativos</span>
          </h3>
          <p className="text-xs text-slate-500">
            Reinicia a base local de produtos, contatos de exemplo, conversas e regras para a demonstração original.
          </p>
        </div>

        <button
          onClick={handleConfirmReset}
          className="px-4 py-2.5 rounded-xl border border-amber-300 text-amber-800 bg-amber-50 hover:bg-amber-100 font-bold text-xs transition-colors shadow-xs flex-shrink-0"
        >
          Restaurar Padrões da Demo
        </button>
      </div>

      {/* Mandatory Transparency Box */}
      <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-2 border border-slate-800 text-xs">
        <div className="flex items-center gap-2 text-brandYellow-300 font-bold">
          <ShieldAlert className="w-4 h-4" />
          <span>Nota de Encerramento do Projeto Demonstrativo</span>
        </div>
        <p className="text-slate-200 leading-relaxed font-semibold">
          Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Mais Papelaria.
        </p>
        <p className="text-slate-400 text-[11px] leading-relaxed">
          Todos os produtos, preços, estoque, contatos e indicadores são simulados para ilustrar a arquitetura de uma solução integrada de presença digital, catálogo interativo e gestão de relacionamento comercial para a Mais Papelaria de Planaltina-DF.
        </p>
      </div>

    </div>
  );
};
