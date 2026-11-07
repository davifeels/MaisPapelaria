import React from 'react';
import { useApp } from '../../context/AppContext';
import logoMaisPapelaria from '../../assets/logo';
import { 
  Clock, 
  MapPin, 
  HelpCircle, 
  UserCheck, 
  PackageCheck, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Store 
} from 'lucide-react';

export const PracticalSupportSection: React.FC = () => {
  const { setActiveView, setDashboardTab } = useApp();

  const supportFeatures = [
    {
      icon: Clock,
      title: 'Horários e Localização Imediatos',
      desc: 'Clientes descobrem instantaneamente nosso endereço em Planaltina-DF e horários de funcionamento, sem esperar na fila.',
      badge: 'Agilidade'
    },
    {
      icon: PackageCheck,
      title: 'Consulta Ágil de Disponibilidade',
      desc: 'Verificação rápida de modelos de cadernos, canetas e materiais específicos diretamente pelo catálogo ou WhatsApp.',
      badge: 'Estoque'
    },
    {
      icon: HelpCircle,
      title: 'Dúvidas Frequentes Automatizadas',
      desc: 'Respostas prontas para orçamentos de listas escolares, marcas homologadas e formas de pagamento aceitas.',
      badge: 'Automação'
    },
    {
      icon: UserCheck,
      title: 'Transição Suave para Atendente Humano',
      desc: 'Quando a solicitação exige personalização, o cliente é encaminhado ao balcão da loja com todo o histórico já registrado.',
      badge: 'Humanizado'
    }
  ];

  return (
    <section id="atendimento" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              Experiência de Atendimento
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Atendimento mais prático, rápido e próximo de você.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              O <strong>MAIS CONNECT</strong> conecta a simpatia e tradição do balcão da Mais Papelaria à rapidez do mundo digital. Reduza o tempo de espera do cliente e organize as cotações em um único canal integrado.
            </p>

            {/* Grid of 4 support pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {supportFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2 hover:border-brand-200 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {feat.badge}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA to view support dashboard */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveView('dashboard');
                  setDashboardTab('inbox');
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline group"
              >
                <span>Conhecer a Central de Atendimento no Painel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Showcase: Interactive WhatsApp/Omnichannel Experience Box */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              
              {/* Box Top Header */}
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white p-0.5 border border-white/20">
                    <img 
                      src={logoMaisPapelaria} 
                      alt="Mais Papelaria" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold flex items-center gap-1.5">
                      Mais Papelaria &bull; Planaltina-DF
                    </h3>
                    <p className="text-[11px] text-emerald-400 font-medium">
                      Atendimento Híbrido: Bot Inteligente + Atendente
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded-md font-mono text-slate-300">
                  MAIS CONNECT
                </span>
              </div>

              {/* Chat Flow Simulation */}
              <div className="p-4 bg-[#f8fafc] space-y-3 text-xs">
                
                {/* Step 1: Customer inquiry */}
                <div className="flex justify-end">
                  <div className="bg-brand-500 text-white p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] space-y-1">
                    <p className="font-medium">
                      "Bom dia! Vocês ainda estão cotando a lista de material escolar para o Colégio Estadual em Planaltina?"
                    </p>
                    <span className="text-[10px] text-white/70 block text-right">09:12</span>
                  </div>
                </div>

                {/* Step 2: Instant Smart Flow Response */}
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 max-w-[85%] space-y-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-600">
                      <Sparkles className="w-3.5 h-3.5" />
                      Triagem MAIS CONNECT
                    </div>
                    <p className="leading-relaxed">
                      "Com certeza! Pode nos enviar a foto da lista por aqui. Se preferir, temos opções de marcas premium (Faber-Castell, Tilibra) ou linhas de excelente custo-benefício."
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-700">
                        1. Enviar Foto
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-700">
                        2. Ver Catálogo Online
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 block text-right">09:12 &bull; Automático</span>
                  </div>
                </div>

                {/* Step 3: Human Attendant Handover */}
                <div className="flex justify-start">
                  <div className="bg-emerald-50 text-emerald-950 p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-200 max-w-[85%] space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                      <UserCheck className="w-3.5 h-3.5" />
                      Atendente da Loja Física assumiu o chat
                    </div>
                    <p className="leading-relaxed font-medium">
                      "Olá! Sou a Mariana aqui da Mais Papelaria. Já recebi sua lista e estou separando o orçamento com 5% de desconto à vista. Posso te mandar o PDF em 10 minutinhos?"
                    </p>
                    <span className="text-[10px] text-emerald-600 block text-right">09:14</span>
                  </div>
                </div>

              </div>

              {/* Bottom Feature summary */}
              <div className="p-3.5 bg-slate-100/80 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Store className="w-4 h-4 text-brand-500" />
                  Balcão + Digital integrados
                </span>
                <span className="text-[11px] font-bold text-brand-600">
                  Zero mensagens perdidas
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
