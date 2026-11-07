import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Product, ProductCategory, StockStatus } from '../../types';
import { 
  Search, 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  Filter, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Save, 
  Tag, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export const DashboardCatalog: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, setActiveView, setSelectedCatalogCategory } = useApp();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedStock, setSelectedStock] = useState<string>('Todos');

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form states
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState<ProductCategory>('Material Escolar');
  const [formPrice, setFormPrice] = useState('');
  const [formOldPrice, setFormOldPrice] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formBadge, setFormBadge] = useState('');
  const [formStockStatus, setFormStockStatus] = useState<StockStatus>('Em Estoque');
  const [formSku, setFormSku] = useState('');
  const [formTags, setFormTags] = useState('');

  const categories: ProductCategory[] = [
    'Todos',
    'Material Escolar',
    'Escritório',
    'Escrita',
    'Organização',
    'Arte e Criatividade',
    'Agendas e Cadernos'
  ];

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormName('');
    setFormCategory('Material Escolar');
    setFormPrice('29.90');
    setFormOldPrice('');
    setFormDescription('Descrição demonstrativa do produto para o catálogo da Mais Papelaria.');
    setFormImage('https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80');
    setFormBadge('Novo');
    setFormStockStatus('Em Estoque');
    setFormSku(`MP-NOVO-${Math.floor(100 + Math.random() * 900)}`);
    setFormTags('Papelaria, Novidade');
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (prod: Product) => {
    setEditingProduct(prod);
    setFormName(prod.name);
    setFormCategory(prod.category);
    setFormPrice(prod.price.toString());
    setFormOldPrice(prod.oldPrice ? prod.oldPrice.toString() : '');
    setFormDescription(prod.description);
    setFormImage(prod.image);
    setFormBadge(prod.badge || '');
    setFormStockStatus(prod.stockStatus);
    setFormSku(prod.sku);
    setFormTags(prod.tags.join(', '));
    setIsModalOpen(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPrice) return;

    const parsedPrice = parseFloat(formPrice.replace(',', '.')) || 0;
    const parsedOldPrice = formOldPrice ? parseFloat(formOldPrice.replace(',', '.')) : undefined;
    const tagArray = formTags.split(',').map(t => t.trim()).filter(Boolean);

    if (editingProduct) {
      updateProduct({
        ...editingProduct,
        name: formName.trim(),
        category: formCategory,
        price: parsedPrice,
        oldPrice: parsedOldPrice,
        description: formDescription.trim(),
        image: formImage.trim() || 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        badge: formBadge.trim() || undefined,
        stockStatus: formStockStatus,
        sku: formSku.trim() || editingProduct.sku,
        tags: tagArray.length > 0 ? tagArray : editingProduct.tags,
      });
    } else {
      addProduct({
        name: formName.trim(),
        category: formCategory,
        price: parsedPrice,
        oldPrice: parsedOldPrice,
        description: formDescription.trim(),
        image: formImage.trim() || 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
        badge: formBadge.trim() || undefined,
        stockStatus: formStockStatus,
        sku: formSku.trim() || `MP-PROD-${Date.now().toString().slice(-4)}`,
        tags: tagArray.length > 0 ? tagArray : ['Papelaria'],
        featured: false,
      });
    }

    setIsModalOpen(false);
  };

  const filtered = products.filter(p => {
    const matchesCat = selectedCategory === 'Todos' || p.category === selectedCategory;
    const matchesStock = selectedStock === 'Todos' || p.stockStatus === selectedStock;
    const matchesSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesStock && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Gestão do Catálogo de Produtos
          </h2>
          <p className="text-xs text-slate-500">
            Cadastre, edite e acompanhe itens demonstrativos refletidos na Landing Page pública.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all flex items-center gap-2 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Cadastrar Produto</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          
          <div className="sm:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquisar por nome, SKU ou descrição..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="Todos">Todos os Status</option>
              <option value="Em Estoque">Em Estoque</option>
              <option value="Últimas Unidades">Últimas Unidades</option>
              <option value="Sob Encomenda">Sob Encomenda</option>
            </select>
          </div>

        </div>

        <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
          <span>Exibindo <strong>{filtered.length}</strong> de {products.length} produtos cadastrados</span>
          <span className="text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
            Valores e estoques demonstrativos
          </span>
        </div>
      </div>

      {/* Products Table */}
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Item & SKU</th>
                <th className="py-3 px-4">Categoria</th>
                <th className="py-3 px-4">Preço (R$)</th>
                <th className="py-3 px-4">Disponibilidade</th>
                <th className="py-3 px-4">Destaque</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50/70 transition-colors">
                  
                  {/* Item Image and Name */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={prod.image} 
                        alt={prod.name} 
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-200" 
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-slate-900 truncate max-w-xs" title={prod.name}>
                          {prod.name}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {prod.sku}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3 px-4 font-semibold text-slate-700">
                    {prod.category}
                  </td>

                  {/* Price */}
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900">
                      R$ {prod.price.toFixed(2).replace('.', ',')}
                    </div>
                    {prod.oldPrice && (
                      <div className="text-[10px] text-slate-400 line-through">
                        R$ {prod.oldPrice.toFixed(2).replace('.', ',')}
                      </div>
                    )}
                  </td>

                  {/* Stock */}
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      prod.stockStatus === 'Em Estoque' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      prod.stockStatus === 'Últimas Unidades' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {prod.stockStatus}
                    </span>
                  </td>

                  {/* Badge */}
                  <td className="py-3 px-4">
                    {prod.badge ? (
                      <span className="text-[10px] font-semibold bg-brand-50 text-brand-700 border border-brand-200 px-2 py-0.5 rounded">
                        {prod.badge}
                      </span>
                    ) : (
                      <span className="text-slate-300 text-[10px]">-</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => handleOpenEditModal(prod)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                        title="Editar produto"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProduct(prod.id)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Excluir produto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-base font-bold text-slate-900">
                {editingProduct ? 'Editar Produto Demonstrativo' : 'Novo Produto para o Catálogo'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="p-6 overflow-y-auto space-y-4 text-xs">
              
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nome do Produto
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Ex: Caderno Espiral 10 Matérias Universitário"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Categoria
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as ProductCategory)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    {categories.filter(c => c !== 'Todos').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Código SKU
                  </label>
                  <input
                    type="text"
                    value={formSku}
                    onChange={(e) => setFormSku(e.target.value)}
                    placeholder="MP-CAD-102"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Preço (R$)
                  </label>
                  <input
                    type="text"
                    required
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    placeholder="49,90"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Preço Anterior (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formOldPrice}
                    onChange={(e) => setFormOldPrice(e.target.value)}
                    placeholder="59,90"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Disponibilidade
                  </label>
                  <select
                    value={formStockStatus}
                    onChange={(e) => setFormStockStatus(e.target.value as StockStatus)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Em Estoque">Em Estoque</option>
                    <option value="Últimas Unidades">Últimas Unidades</option>
                    <option value="Sob Encomenda">Sob Encomenda</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  URL da Imagem (Unsplash / Externa)
                </label>
                <input
                  type="url"
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Descrição do Produto
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Selo / Badge (Ex: Mais Vendido, Oferta)
                  </label>
                  <input
                    type="text"
                    value={formBadge}
                    onChange={(e) => setFormBadge(e.target.value)}
                    placeholder="Destaque"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tags (separadas por vírgula)
                  </label>
                  <input
                    type="text"
                    value={formTags}
                    onChange={(e) => setFormTags(e.target.value)}
                    placeholder="Escola, Volta às Aulas, Caderno"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold flex items-center gap-1.5 shadow-md shadow-brand-500/25 active:scale-95"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{editingProduct ? 'Salvar Alterações' : 'Adicionar ao Catálogo'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
