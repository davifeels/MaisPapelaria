import React from 'react';
import { 
  CheckCircle, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  Clock, 
  Users2, 
  Target, 
  Sparkles, 
  Award 
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Layers,
      title: 'Experiência Centralizada',
      description: 'Landing page institucional, catálogo digital e canais de contato unificados em uma única presença profissional e moderna.',
      color: 'text-brand-500 bg-brand-50 border-brand-200'
    },
    {
      icon: Smartphone,
      title: 'Praticidade para o Cliente',
      description: 'O morador de Planaltina consulta preços, modelos e itens escolares diretamente do celular, com agilidade e comodidade.',
      color: 'text-blue-500 bg-blue-50 border-blue-200'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil e Organizado',
      description: 'Triagem inteligente de listas e dúvidas comuns, poupando tempo da equipe e eliminando perguntas repetitivas.',
      color: 'text-amber-500 bg-amber-50 border-amber-200'
    },
    {
      icon: Sparkles,
      title: 'Catálogo Acessível 24 Horas',
      description: 'Vitrine digital com fotos de alta qualidade, categorias claras e botões imediatos de consulta via WhatsApp.',
      color: 'text-emerald-500 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Target,
      title: 'Retenção de Oportunidades',
      description: 'Nenhum orçamento ou lista escolar fica esquecido. Controle de status no CRM para acompanhamento de vendas.',
      color: 'text-purple-500 bg-purple-50 border-purple-200'
    },
    {
      icon: Users2,
      title: 'Relacionamento Contínuo',
      description: 'Comunicação pontual nas épocas certas: Volta às Aulas, Mês dos Professores, organização de início de ano e lançamentos.',
      color: 'text-rose-500 bg-rose-50 border-rose-200'
    }
  ];

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Por que o MAIS CONNECT?
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vantagens claras para o seu negócio e para os seus clientes.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Uma ponte estratégica entre a reputação de mais de 6 anos da Mais Papelaria e o futuro digital do comércio local em Planaltina-DF.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col space-y-3 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${b.color} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 pt-1">
                  {b.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
