import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldAlert, 
  Store, 
  CreditCard, 
  Building2, 
  Phone, 
  CheckCircle2, 
  Award,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';

export const LandingFooter: React.FC = () => {
  const { setActiveView, setDashboardTab, setWhatsappModalProduct, products } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Value Banner */}
      <div className="border-b border-slate-900 bg-slate-900/40 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center flex-shrink-0">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">Tradição & Presença Física</span>
              <span className="text-[11px] text-slate-400">Loja estabelecida há 6 anos em Planaltina-DF</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">Atendimento Humanizado</span>
              <span className="text-[11px] text-slate-400">Balcão e WhatsApp com suporte ágil</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">Facilidade no Pagamento</span>
              <span className="text-[11px] text-slate-400">Pix com desconto e até 10x sem juros</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block">Vendas Corporativas B2B</span>
              <span className="text-[11px] text-slate-400">Faturamento para empresas e colégios</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5 border border-white/20">
                <img 
                  src="/logo-mais-papelaria.png" 
                  alt="Mais Papelaria" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-black text-xl tracking-tight">
                  MAIS <span className="text-brand-500">PAPELARIA</span>
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold">
                  Tudo para o seu dia a dia! &bull; Planaltina-DF
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mais de 6 anos oferecendo materiais escolares, escritório, arte e presentes com o carinho, a proximidade e os melhores preços que a comunidade de Planaltina-DF conhece e confia.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://instagram.com/mais_papelaria" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-brand-600 text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="Instagram @mais_papelaria"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setWhatsappModalProduct(products[0])}
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors border border-slate-800"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Department Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider">
              Departamentos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Material Escolar & Volta às Aulas</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Cadernos de Disco & Planners</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Canetas Especiais, Gel & Lettering</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Papéis & Suprimentos para Escritório</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Artes, Pintura & Desenho</a>
              </li>
              <li>
                <a href="#lista-escolar" className="text-brandYellow-400 hover:text-brandYellow-300 transition-colors font-bold">
                  ★ Cotação de Lista Escolar Expressa
                </a>
              </li>
            </ul>
          </div>

          {/* Institution & Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider">
              Atendimento
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#atendimento" className="hover:text-white transition-colors">Balcão da Loja</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Vantagens MAIS CONNECT</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="#captacao" className="hover:text-white transition-colors">Clube de Vantagens</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveView('dashboard');
                    setDashboardTab('overview');
                  }}
                  className="text-brand-400 hover:text-brand-300 font-bold text-left transition-colors"
                >
                  Painel Gestor (SaaS) &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Physical Store & Working Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-extrabold text-xs uppercase tracking-wider">
              Loja Física & Horários
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Planaltina - Distrito Federal (DF)</strong><br />
                  Ponto de fácil acesso com estacionamento
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brandYellow-400 flex-shrink-0 mt-0.5" />
                <span>
                  Segunda a Sexta: 08:00 às 18:30<br />
                  Sábados: 08:00 às 13:00
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-0.5">
                <span className="font-bold text-white block">Atendimento a Empresas</span>
                <span className="text-slate-400">Orçamentos corporativos e notas fiscais faturadas.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency Box */}
        <div className="mt-12 pt-8 border-t border-slate-900 space-y-4">
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 text-xs leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>Transparência e Limites do Projeto</span>
            </div>
            <p className="font-semibold text-white">
              Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Mais Papelaria.
            </p>
            <p className="text-[11px] text-slate-400">
              Todos os produtos, preços, estoques, contatos e indicadores apresentados são puramente fictícios para fins de demonstração da interface e arquitetura de software. Nenhuma integração com serviços externos (WhatsApp Business API oficial ou Meta Graph API) está em execução produtiva nesta simulação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} MAIS CONNECT &bull; Mais Papelaria (Planaltina-DF).
            </div>
            <div className="text-slate-400 font-medium">
              Demonstração de E-commerce & SaaS Enterprise
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
