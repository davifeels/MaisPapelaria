import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Product, ProductCategory } from '../../types';
import { 
  Search, 
  MessageCircle, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal,
  Info,
  Star,
  CreditCard,
  Truck,
  ShoppingBag,
  Zap
} from 'lucide-react';
import { ProductDetailModal } from './ProductDetailModal';

export const CatalogSection: React.FC = () => {
  const { 
    products, 
    selectedCatalogCategory, 
    setSelectedCatalogCategory, 
    searchCatalogQuery, 
    setSearchCatalogQuery,
    setWhatsappModalProduct 
  } = useApp();

  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc'>('relevance');

  const categories: { label: ProductCategory; icon: string }[] = [
    { label: 'Todos', icon: '✨' },
    { label: 'Material Escolar', icon: '🎒' },
    { label: 'Agendas e Cadernos', icon: '📓' },
    { label: 'Escrita', icon: '✍️' },
    { label: 'Escritório', icon: '💼' },
    { label: 'Arte e Criatividade', icon: '🎨' },
    { label: 'Organização', icon: '🗂️' },
  ];

  // Filtering and searching logic
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      const matchesCategory = 
        selectedCatalogCategory === 'Todos' || prod.category === selectedCatalogCategory;
      const matchesSearch = 
        prod.name.toLowerCase().includes(searchCatalogQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchCatalogQuery.toLowerCase()) ||
        prod.tags.some(t => t.toLowerCase().includes(searchCatalogQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [products, selectedCatalogCategory, searchCatalogQuery, sortBy]);

  const getStockTagClass = (status: string) => {
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
    <section id="catalogo" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-black text-brand-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Vitrine Digital & Catálogo Oficial
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Descubra as Melhores Marcas na Mais Papelaria
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Itens escolares, organizadores, cadernos de disco e materiais para escritório com qualidade comprovada e retirada expressa em Planaltina-DF.
          </p>

          {/* Demonstrative Transparency Alert */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium mt-1">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Vitrine Demonstrativa:</strong> Dados conceituais da plataforma <strong>MAIS CONNECT</strong> para simulação de compra e atendimento.
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchCatalogQuery}
                onChange={(e) => setSearchCatalogQuery(e.target.value)}
                placeholder="Buscar por item, marca ou SKU..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs sm:text-sm bg-slate-50/60"
              />
              {searchCatalogQuery && (
                <button
                  onClick={() => setSearchCatalogQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Counter and Sort Dropdown */}
            <div className="flex items-center justify-between sm:justify-end gap-4">
              <span className="text-xs text-slate-500 font-semibold">
                <strong>{filteredProducts.length}</strong> produtos
              </span>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                <label htmlFor="catalog-sort" className="text-xs font-semibold text-slate-500">Ordenar:</label>
                <select
                  id="catalog-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="relevance">Mais Populares</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                </select>
              </div>
            </div>

          </div>

          {/* Department Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((c) => {
              const count = products.filter(p => c.label === 'Todos' || p.category === c.label).length;
              const isSelected = selectedCatalogCategory === c.label;
              return (
                <button
                  key={c.label}
                  onClick={() => setSelectedCatalogCategory(c.label)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-xs'
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid - Enterprise Standard */}
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-dashed border-slate-200">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">Nenhum produto encontrado</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Não localizamos itens para "{searchCatalogQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchCatalogQuery('');
                  setSelectedCatalogCategory('Todos');
                }}
                className="px-4 py-2 rounded-xl bg-brand-50 text-brand-600 font-bold text-xs"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product) => {
                const discountPercent = product.oldPrice 
                  ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
                  : null;
                const installmentValue = (product.price / 3).toFixed(2).replace('.', ',');

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl border border-slate-200/90 hover:border-brand-500 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                  >
                    {/* Top Ribbon & Badges */}
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setActiveModalProduct(product)}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Discount ribbon */}
                      {discountPercent && (
                        <span className="absolute top-2.5 left-2.5 bg-brand-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-sm">
                          -{discountPercent}% OFF
                        </span>
                      )}

                      {/* Status badge */}
                      {product.badge && !discountPercent && (
                        <span className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md shadow-sm">
                          {product.badge}
                        </span>
                      )}

                      {/* Quick view button overlay */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveModalProduct(product);
                        }}
                        className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold"
                      >
                        <span className="bg-white text-slate-900 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg font-black text-xs hover:bg-slate-100">
                          <Eye className="w-3.5 h-3.5 text-brand-500" />
                          Espiar Produto
                        </span>
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                      
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-semibold uppercase">
                          <span className="text-brand-600 font-bold truncate">
                            {product.category}
                          </span>
                          <span className="font-mono">
                            {product.sku}
                          </span>
                        </div>

                        <h3 
                          onClick={() => setActiveModalProduct(product)}
                          className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                          title={product.name}
                        >
                          {product.name}
                        </h3>

                        {/* Star Rating Reviews (Padrão E-Commerce Líder) */}
                        <div className="flex items-center gap-1 text-amber-500 text-xs">
                          <div className="flex items-center">
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 ml-1">
                            5.0 (42)
                          </span>
                        </div>
                      </div>

                      {/* Pricing Box */}
                      <div className="pt-2 border-t border-slate-100 space-y-2">
                        <div>
                          {product.oldPrice && (
                            <span className="text-[11px] text-slate-400 line-through block">
                              De: R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs text-slate-500 font-bold">Por:</span>
                            <span className="text-xl font-black text-slate-900 tracking-tight">
                              R$ {product.price.toFixed(2).replace('.', ',')}
                            </span>
                            <span className="text-[10px] text-emerald-600 font-extrabold bg-emerald-50 px-1.5 py-0.2 rounded">
                              no Pix
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-1 pt-0.5">
                            <CreditCard className="w-3 h-3 text-slate-400" />
                            <span>ou até 3x de R$ {installmentValue} sem juros</span>
                          </div>
                        </div>

                        {/* Stock Tag */}
                        <div className="flex items-center justify-between text-[10px]">
                          <span className={`px-2 py-0.5 rounded-full font-bold border ${getStockTagClass(product.stockStatus)}`}>
                            {product.stockStatus}
                          </span>
                          <span className="text-slate-400 flex items-center gap-1">
                            <Truck className="w-3 h-3" />
                            Retire na loja
                          </span>
                        </div>

                        {/* Action CTA Button */}
                        <button
                          onClick={() => setWhatsappModalProduct(product)}
                          className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900 hover:bg-brand-500 text-white font-bold text-xs transition-colors active:scale-95 shadow-sm group/btn"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:text-white" />
                          <span>Consultar / Comprar</span>
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
