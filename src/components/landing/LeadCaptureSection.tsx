import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  Send, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Gift, 
  LayoutDashboard 
} from 'lucide-react';

export const LeadCaptureSection: React.FC = () => {
  const { addLead, setActiveView, setDashboardTab, showToast } = useApp();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryInterest, setCategoryInterest] = useState('Material Escolar');
  const [lgpdAccepted, setLgpdAccepted] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !lgpdAccepted) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // Non-critical if canvas fails
    }

    // Add to context (persisted to localStorage)
    addLead({
      name: name.trim(),
      phone: phone.trim(),
      channel: 'Landing Page',
      categoryInterest,
      productInterest: `Interesse em ${categoryInterest} (Cadastrado no Clube de Novidades)`,
      status: 'Novo contato',
      nextAction: 'Enviar mensagem de boas-vindas e catálogo da categoria',
      notes: 'Cadastro voluntário via formulário de captação da Landing Page com consentimento LGPD.',
      estimatedValue: 120.00
    });

    setSubmitted(true);
    showToast(`Obrigado, ${name}! Seu cadastro foi sincronizado com o painel MAIS CONNECT.`);
  };

  return (
    <section id="captacao" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brandYellow-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brandYellow-300 border border-white/15 text-xs font-bold uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5" />
              Clube Mais Vantagens
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Receba novidades, listas e condições especiais em primeira mão.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Faça parte da nossa lista VIP da <strong>Mais Papelaria</strong> em Planaltina-DF. Receba avisos de reposição de itens concorridos, períodos de volta às aulas e promoções sazonais.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cotação prioritária de listas escolares</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sem spam: apenas comunicações relevantes e autorizadas</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Simulação em tempo real integrada ao CRM do lojista</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form Box */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-6 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900">
                    Interesse Registrado com Sucesso!
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Parabéns, <strong>{name}</strong>! Este contato acabou de ser transmitido em tempo real para a tabela de <strong>Gestão de Interessados (CRM)</strong> do painel MAIS CONNECT.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setActiveView('dashboard');
                        setDashboardTab('leads');
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md group"
                    >
                      <LayoutDashboard className="w-4 h-4 text-brand-500 group-hover:rotate-6 transition-transform" />
                      <span>Ver Lead no Painel CRM</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                      }}
                      className="text-xs text-slate-500 hover:text-slate-800 font-semibold"
                    >
                      Cadastrar outro contato
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-base font-bold text-slate-900">
                      Cadastre seu interesse (Simulação)
                    </h3>
                    <p className="text-xs text-slate-500">
                      Preencha os campos para testar a captação de leads.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Ana Clara Martins"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(61) 99999-9999"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Principal Categoria de Interesse
                    </label>
                    <select
                      value={categoryInterest}
                      onChange={(e) => setCategoryInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="Material Escolar">Material Escolar e Listas</option>
                      <option value="Escritório">Escritório & Suprimentos Corporativos</option>
                      <option value="Escrita">Canetas Especiais, Marcadores & Lettering</option>
                      <option value="Agendas e Cadernos">Cadernos Inteligentes de Disco & Planners</option>
                      <option value="Arte e Criatividade">Aquarela, Pintura & Desenho</option>
                      <option value="Organização">Organizadores e Acessórios</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="lgpdConsent"
                      checked={lgpdAccepted}
                      onChange={(e) => setLgpdAccepted(e.target.checked)}
                      className="mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
                    />
                    <label htmlFor="lgpdConsent" className="text-[11px] text-slate-500 leading-tight">
                      Autorizo o contato comercial da Mais Papelaria exclusivamente para a categoria selecionada, nos termos da LGPD. Posso cancelar o recebimento a qualquer momento.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!lgpdAccepted || !name.trim() || !phone.trim()}
                    className="w-full py-3 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar e Testar Integração no Painel</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
