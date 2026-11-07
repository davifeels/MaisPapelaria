import React from 'react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';
import { X, MessageCircle, CheckCircle2, AlertCircle, ShoppingBag, Tag, Sparkles } from 'lucide-react';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<Props> = ({ product, onClose }) => {
  const { setWhatsappModalProduct } = useApp();

  if (!product) return null;

  const handleConsultWhatsApp = () => {
    onClose();
    setWhatsappModalProduct(product);
  };

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-200">
              {product.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              SKU: {product.sku}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-square">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover" 
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {product.badge}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl font-black text-brand-600">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>
              </div>

              {/* Demonstrative Availability Badge */}
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getStockBadgeColor(product.stockStatus)}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {product.stockStatus} (Demonstrativo)
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((tag, idx) => (
                  <span key={idx} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Tag className="w-3 h-3 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Box */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Aviso de Demonstração Comercial:</strong> Os produtos, especificações, preços e disponibilidades acima são puramente ilustrativos para demonstrar as funcionalidades da plataforma MAIS CONNECT e não refletem necessariamente o estoque em tempo real da Mais Papelaria.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
            Retirada na loja física em Planaltina-DF ou entrega local
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Fechar
            </button>
            <button
              onClick={handleConsultWhatsApp}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
