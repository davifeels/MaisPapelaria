import React, { useState } from 'react';
import type { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  Tag, 
  Sparkles, 
  Star, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  Store,
  Share2
} from 'lucide-react';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<Props> = ({ product, onClose }) => {
  const { setWhatsappModalProduct, showToast } = useApp();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleConsultWhatsApp = () => {
    onClose();
    setWhatsappModalProduct(product);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Link do produto copiado!');
  };

  const installmentValue = ((product.price * quantity) / 3).toFixed(2).replace('.', ',');

  const getStockBadgeColor = (status: string) => {
    switch (status) {
      case 'Em Estoque':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Últimas Unidades':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Sob Encomenda':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
              {product.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Código: {product.sku}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title="Copiar link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            
            {/* Left: Product Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {product.badge}
                </div>
              )}
            </div>

            {/* Right: Commercial Information */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                  <div className="flex">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 ml-1">5.0 (42 avaliações no balcão)</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {product.name}
                </h3>
              </div>

              {/* Price Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                {product.oldPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    De: R$ {(product.oldPrice * quantity).toFixed(2).replace('.', ',')}
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">
                    R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    5% OFF no Pix
                  </span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-1.5 pt-1">
                  <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                  <span>ou em até <strong>3x de R$ {installmentValue}</strong> sem juros</span>
                </div>
              </div>

              {/* Demonstrative Availability & Pickup */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold border ${getStockBadgeColor(product.stockStatus)}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {product.stockStatus}
                  </span>
                  <span className="text-slate-500 font-medium">
                    Pronta entrega em Planaltina-DF
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Retirada no balcão da loja em até <strong>2 horas úteis</strong></span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Tag className="w-3 h-3 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Mandatory Transparency Box */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Aviso de Demonstração Comercial:</strong> Os produtos, preços e estoques acima são puramente ilustrativos para demonstrar as funcionalidades da plataforma MAIS CONNECT e não refletem necessariamente o estoque em tempo real da Mais Papelaria.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
            <Store className="w-4 h-4 text-brand-500" />
            <span>Loja física em Planaltina-DF &bull; Qualidade • Preço • Confiança</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 w-full sm:w-auto"
            >
              Continuar Navegando
            </button>
            <button
              onClick={handleConsultWhatsApp}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar / Pedir no WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
