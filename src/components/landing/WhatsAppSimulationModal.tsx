import React, { useState } from 'react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  MessageCircle, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  LayoutDashboard 
} from 'lucide-react';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export const WhatsAppSimulationModal: React.FC<Props> = ({ product, onClose }) => {
  const { setActiveView, setDashboardTab, setActiveConversationId, showToast, addLead } = useApp();
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const prefilledMessage = `Olá, equipe da Mais Papelaria! Vi o catálogo digital MAIS CONNECT e gostaria de mais informações sobre:

*Produto:* ${product.name}
*Categoria:* ${product.category}
*Código SKU:* ${product.sku}
*Valor de Referência:* R$ ${product.price.toFixed(2).replace('.', ',')}

Gostaria de verificar as opções de cores/modelos disponíveis para retirada na loja física de Planaltina-DF!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prefilledMessage);
    setCopied(true);
    showToast('Mensagem de consulta copiada com sucesso!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenInDashboard = () => {
    // Automatically register this demonstration lead in the CRM
    addLead({
      name: 'Cliente Interessado (Simulação Web)',
      phone: '(61) 9' + Math.floor(10000000 + Math.random() * 90000000),
      channel: 'WhatsApp',
      categoryInterest: product.category,
      productInterest: product.name,
      status: 'Novo contato',
      nextAction: 'Confirmar disponibilidade de cores no estoque físico',
      notes: `Consulta originada no catálogo digital MAIS CONNECT para o item: ${product.name} (${product.sku}).`,
      estimatedValue: product.price
    });

    onClose();
    setActiveView('dashboard');
    setDashboardTab('inbox');
    showToast(`Oportunidade gerada e redirecionada para a Central de Atendimento!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WhatsApp Styled Header */}
        <div className="bg-[#075e54] text-white px-5 py-3.5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30 bg-white p-0.5">
              <img 
                src="/logo-mais-papelaria.png" 
                alt="Mais Papelaria" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm tracking-wide">
                <span>Atendimento Mais Papelaria</span>
                <span className="w-3.5 h-3.5 bg-emerald-400 text-slate-900 rounded-full flex items-center justify-center text-[9px] font-black" title="Conta Verificada">
                  ✓
                </span>
              </div>
              <div className="text-[11px] text-emerald-200 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                Online &bull; Planaltina-DF
              </div>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: WhatsApp Chat Simulation */}
        <div className="p-5 bg-[#efeae2] overflow-y-auto space-y-4 min-h-[220px]">
          
          {/* Simulation disclaimer badge */}
          <div className="text-center">
            <span className="inline-block bg-amber-100 text-amber-900 text-[11px] font-semibold px-3 py-1 rounded-full border border-amber-300/60 shadow-sm">
              Simulação Interativa &bull; Canal WhatsApp Mais Papelaria
            </span>
          </div>

          {/* Product Mini Preview Bubble */}
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/60 flex items-center gap-3 max-w-sm mx-auto">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-slate-100"
            />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-bold text-brand-600 block truncate">
                {product.category}
              </span>
              <h4 className="text-xs font-bold text-slate-900 truncate">
                {product.name}
              </h4>
              <span className="text-sm font-extrabold text-slate-900 block">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* Simulated WhatsApp outgoing message */}
          <div className="flex justify-end">
            <div className="bg-[#dcf8c6] text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-none shadow-sm max-w-[90%] space-y-1.5 border border-[#c4e3b1]">
              <p className="whitespace-pre-line leading-relaxed">
                {prefilledMessage}
              </p>
              <div className="flex items-center justify-end gap-1 text-[10px] text-slate-500 pt-1">
                <span>Agora</span>
                <span className="text-blue-500 font-bold">✓✓</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Controls */}
        <div className="p-4 bg-white border-t border-slate-200 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={handleCopy}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
              <span>{copied ? 'Mensagem Copiada!' : 'Copiar Texto'}</span>
            </button>

            {/* Seamless connection to the SaaS Dashboard */}
            <button
              onClick={handleOpenInDashboard}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md group"
            >
              <LayoutDashboard className="w-4 h-4 text-brand-500 group-hover:rotate-6 transition-transform" />
              <span>Ver no Painel do Atendente</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-500 text-center leading-snug">
            Esta demonstração simula a ponte entre o interesse do cliente no catálogo e a central de atendimento omnichannel da <strong>Mais Papelaria</strong>.
          </p>
        </div>

      </div>
    </div>
  );
};
