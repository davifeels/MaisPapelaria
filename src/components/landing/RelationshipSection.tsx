import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  Send, 
  ShieldCheck, 
  Calendar, 
  BookOpen, 
  Briefcase, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake 
} from 'lucide-react';

export const RelationshipSection: React.FC = () => {
  const { setActiveView, setDashboardTab } = useApp();

  const seasonalCampaigns = [
    {
      icon: BookOpen,
      title: 'Volta às Aulas 2026',
      tag: 'Campanha Sazonal',
      audience: 'Pais, responsáveis e estudantes',
      benefit: 'Envio antecipado de orçamentos de listas escolares com desconto progressivo para compras em dezembro e janeiro.',
      color: 'bg-red-50 text-brand-600 border-red-200'
    },
    {
      icon: Briefcase,
      title: 'Organização de Escritório & Home Office',
      tag: 'Corporativo & B2B',
      audience: 'Profissionais liberais, contabilidades e escritórios de Planaltina',
      benefit: 'Condições especiais em papéis A4, pastas de arquivo e organizadores de mesa com faturamento corporativo.',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      icon: Palette,
      title: 'Festival Criativo & Lettering',
      tag: 'Comunidade & Hobbies',
      audience: 'Artistas, ilustradores e amantes de papelaria fofa',
      benefit: 'Divulgação exclusiva de lançamentos de brush pens, marcadores pastéis e blocos de desenho de alta gramatura.',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      icon: Sparkles,
      title: 'Especial Agendas & Planners',
      tag: 'Planejamento Anual',
      audience: 'Professores, universitários e entusiastas de produtividade',
      benefit: 'Aviso prioritário de reposição de cadernos inteligentes de disco e planners semanais.',
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    }
  ];

  return (
    <section id="relacionamento" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 scroll-mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            Relacionamento Comercial Inteligente
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mais do que vender produtos: construir relacionamentos duradouros.
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Acompanhe o interesse dos seus clientes de Planaltina-DF ao longo do ano inteiro. Organize o histórico de preferências e comunique novidades no momento exato com total respeito à privacidade.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {seasonalCampaigns.map((camp, idx) => {
            const Icon = camp.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:shadow-soft transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${camp.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-slate-200">
                      {camp.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {camp.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {camp.benefit}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 font-medium">
                  <strong>Público:</strong> {camp.audience}
                </div>
              </div>
            );
          })}
        </div>

        {/* LGPD and Consent Highlight Card */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                100% em Conformidade com a LGPD (Lei nº 13.709/2018)
              </div>
              <h3 className="text-xl font-bold text-white">
                Comunicação autorizada, segura e com valor real para o cliente.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Todas as campanhas demonstrativas do <strong>MAIS CONNECT</strong> dependem do consentimento prévio do cliente, com opção simplificada de descadastramento a qualquer momento. Respeitamos a privacidade e prezamos pela confiança de mais de 6 anos de história em Planaltina-DF.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <button
                onClick={() => {
                  setActiveView('dashboard');
                  setDashboardTab('campaigns');
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-slate-100 transition-colors shadow-md group"
              >
                <span>Ver Módulo de Campanhas no Painel</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
