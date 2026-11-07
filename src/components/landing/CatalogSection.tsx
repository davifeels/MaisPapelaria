import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Product, ProductCategory } from '../../types';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  Eye, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  AlertCircle, 
  SlidersHorizontal,
  Info
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

  const categories: ProductCategory[] = [
    'Todos',
    'Material Escolar',
    'Escritório',
    'Escrita',
    'Organização',
    'Arte e Criatividade',
    'Agendas e Cadernos'
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
      // Default: featured first, then name
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
    <section id="catalogo" className="py-16 sm:py-24 bg-white border-t border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-600 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Catálogo Digital Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Descubra os destaques da Mais Papelaria
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Navegue por categorias, consulte itens escolares, escritório e arte, e simule um atendimento imediato com nossa equipe.
          </p>

          {/* Explicit Demonstrative Disclaimer Banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-medium max-w-2xl text-left sm:text-center mt-2">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>
              <strong>Nota de Transparência:</strong> Todos os produtos, valores e estoques exibidos são ilustrativos para demonstrar o potencial da solução <strong>MAIS CONNECT</strong>.
            </span>
          </div>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="mt-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchCatalogQuery}
                onChange={(e) => setSearchCatalogQuery(e.target.value)}
                placeholder="Buscar por caderno, caneta, marca-texto, mochila..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm bg-slate-50/50"
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

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <label htmlFor="catalog-sort" className="text-xs font-semibold text-slate-500">Ordenar por:</label>
              <select
                id="catalog-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-semibold bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="relevance">Destaques da Loja</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCatalogCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCatalogCategory === category
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-[1.02]'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-8">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Search className="w-10 h-10 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">Nenhum produto encontrado</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Não encontramos produtos para "{searchCatalogQuery}". Tente usar outro termo ou selecionar "Todos".
              </p>
              <button
                onClick={() => {
                  setSearchCatalogQuery('');
                  setSelectedCatalogCategory('Todos');
                }}
                className="px-4 py-2 rounded-xl bg-brand-50 text-brand-600 font-bold text-xs hover:bg-brand-100 transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-brand-300 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
                >
                  {/* Image Container with Badges */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setActiveModalProduct(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Floating badge */}
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-brand-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick view button overlay */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProduct(product);
                      }}
                      className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold"
                    >
                      <span className="bg-white/90 text-slate-900 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                        <Eye className="w-3.5 h-3.5 text-brand-500" />
                        Ver Detalhes
                      </span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                        <span className="text-brand-600 uppercase tracking-wider truncate">
                          {product.category}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStockTagClass(product.stockStatus)}`}>
                          {product.stockStatus}
                        </span>
                      </div>

                      <h3 
                        onClick={() => setActiveModalProduct(product)}
                        className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-2 border-t border-slate-100 space-y-2.5">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="text-xs text-slate-400 font-medium mr-1">R$</span>
                          <span className="text-lg font-black text-slate-900 tracking-tight">
                            {product.price.toFixed(2).replace('.', ',')}
                          </span>
                          {product.oldPrice && (
                            <span className="ml-1.5 text-xs text-slate-400 line-through">
                              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {product.sku}
                        </span>
                      </div>

                      {/* WhatsApp Simulation Action Button */}
                      <button
                        onClick={() => setWhatsappModalProduct(product)}
                        className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-600 font-bold text-xs transition-all duration-200 active:scale-95 shadow-sm group/btn"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:text-white transition-colors" />
                        <span>Consultar via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
