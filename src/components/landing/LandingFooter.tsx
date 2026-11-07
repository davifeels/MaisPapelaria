import React from 'react';
import { useApp } from '../../context/AppContext';
import { MapPin, Clock, MessageCircle, Heart, ShieldAlert, Store } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';

export const LandingFooter: React.FC = () => {
  const { setActiveView, setDashboardTab, setWhatsappModalProduct, products } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border border-white/20">
                <img 
                  src="/logo-mais-papelaria.png" 
                  alt="Mais Papelaria" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-tight">
                  MAIS <span className="text-brand-500">PAPELARIA</span>
                </h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  Tudo para o seu dia a dia! &bull; Planaltina-DF
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Mais de 6 anos oferecendo materiais escolares, escritório, arte e presentes com o carinho e a proximidade que a comunidade de Planaltina conhece e confia.
            </p>

            <div className="flex items-center gap-3 pt-2">
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

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">Catálogo Digital</a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-white transition-colors">Atendimento Prático</a>
              </li>
              <li>
                <a href="#relacionamento" className="hover:text-white transition-colors">Relacionamento & Campanhas</a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors">Benefícios MAIS CONNECT</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Location & Store Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Loja Física
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                <span>Planaltina - Distrito Federal (DF)</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brandYellow-400 flex-shrink-0 mt-0.5" />
                <span>
                  Segunda a Sexta: 08:00 às 18:30<br />
                  Sábados: 08:00 às 13:00
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Store className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Qualidade &bull; Preço &bull; Confiança</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveView('dashboard');
                  setDashboardTab('overview');
                }}
                className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 font-bold transition-colors"
              >
                <span>Acessar Painel MAIS CONNECT &rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Mandatory Transparency & Disclaimer Box */}
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

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} MAIS CONNECT &bull; Demonstração Conceitual para a Mais Papelaria.
            </div>
            <div className="text-slate-400 font-medium">
              Desenvolvido com carinho para o comércio de Planaltina-DF
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
