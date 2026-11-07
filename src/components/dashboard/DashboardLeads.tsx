import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Lead, LeadStatus, LeadChannel } from '../../types';
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  Download, 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  PhoneCall, 
  AlertCircle, 
  Edit3, 
  Trash2, 
  X, 
  Save, 
  Check, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const DashboardLeads: React.FC = () => {
  const { leads, updateLeadStatus, deleteLead, addLead, showToast } = useApp();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('Todos');
  const [channelFilter, setChannelFilter] = useState<string>('Todos');

  // Modal edit lead status
  const [activeLead, setActiveLead] = useState<Lead | null>(null);
  const [modalStatus, setModalStatus] = useState<LeadStatus>('Novo contato');
  const [modalNextAction, setModalNextAction] = useState('');

  // Modal new lead
  const [isNewLeadOpen, setIsNewLeadOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newChannel, setNewChannel] = useState<LeadChannel>('WhatsApp');
  const [newCategory, setNewCategory] = useState('Material Escolar');
  const [newProduct, setNewProduct] = useState('');
  const [newNextAction, setNewNextAction] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [newValue, setNewValue] = useState('');

  const statuses: (LeadStatus | 'Todos')[] = [
    'Todos',
    'Novo contato',
    'Em atendimento',
    'Aguardando resposta',
    'Interesse identificado',
    'Concluído'
  ];

  const handleOpenStatusModal = (lead: Lead) => {
    setActiveLead(lead);
    setModalStatus(lead.status);
    setModalNextAction(lead.nextAction);
  };

  const handleSaveStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeLead) return;
    updateLeadStatus(activeLead.id, modalStatus, modalNextAction);
    setActiveLead(null);
  };

  const handleSaveNewLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newPhone.trim()) return;

    addLead({
      name: newName.trim(),
      phone: newPhone.trim(),
      channel: newChannel,
      categoryInterest: newCategory,
      productInterest: newProduct.trim() || undefined,
      status: 'Novo contato',
      nextAction: newNextAction.trim() || 'Fazer primeiro contato de apresentação',
      notes: newNotes.trim() || undefined,
      estimatedValue: newValue ? parseFloat(newValue.replace(',', '.')) : undefined
    });

    setIsNewLeadOpen(false);
    setNewName('');
    setNewPhone('');
    setNewProduct('');
    setNewNextAction('');
    setNewNotes('');
    setNewValue('');
  };

  const handleSimulateExport = () => {
    showToast('Relatório de interessados exportado com sucesso (simulação CSV).');
  };

  const getStatusBadgeClass = (status: LeadStatus) => {
    switch (status) {
      case 'Novo contato':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Em atendimento':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Aguardando resposta':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Interesse identificado':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Concluído':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesStatus = statusFilter === 'Todos' || lead.status === statusFilter;
    const matchesChannel = channelFilter === 'Todos' || lead.channel === channelFilter;
    const matchesSearch = 
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.toLowerCase().includes(search.toLowerCase()) ||
      lead.categoryInterest.toLowerCase().includes(search.toLowerCase()) ||
      (lead.productInterest && lead.productInterest.toLowerCase().includes(search.toLowerCase()));
    return matchesStatus && matchesChannel && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Gestão de Interessados & CRM
          </h2>
          <p className="text-xs text-slate-500">
            Acompanhe o ciclo de atendimento, orçamentos e evolução comercial dos clientes da Mais Papelaria.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateExport}
            className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Exportar CSV</span>
          </button>

          <button
            onClick={() => setIsNewLeadOpen(true)}
            className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all flex items-center gap-2 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Novo Contato</span>
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
              placeholder="Pesquisar por nome, telefone ou interesse..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={channelFilter}
              onChange={(e) => setChannelFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="Todos">Todos os Canais</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Instagram">Instagram</option>
              <option value="Landing Page">Landing Page</option>
              <option value="Loja Física">Loja Física</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {statuses.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Status quick tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
          {statuses.map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {st} {st !== 'Todos' && `(${leads.filter(l => l.status === st).length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Nome & Telefone</th>
                <th className="py-3 px-4">Canal</th>
                <th className="py-3 px-4">Interesse / Categoria</th>
                <th className="py-3 px-4">Data</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Próxima Ação</th>
                <th className="py-3 px-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Name and Phone */}
                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-900">{lead.name}</div>
                    <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-slate-400" />
                      {lead.phone}
                    </div>
                  </td>

                  {/* Channel Tag */}
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold ${
                      lead.channel === 'WhatsApp' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      lead.channel === 'Instagram' ? 'bg-pink-50 text-pink-700 border border-pink-200' :
                      lead.channel === 'Landing Page' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                      'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {lead.channel}
                    </span>
                  </td>

                  {/* Interest */}
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800">
                      {lead.categoryInterest}
                    </div>
                    {lead.productInterest && (
                      <div className="text-[10px] text-slate-500 truncate max-w-xs" title={lead.productInterest}>
                        {lead.productInterest}
                      </div>
                    )}
                  </td>

                  {/* Date */}
                  <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                    {lead.date}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleOpenStatusModal(lead)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border hover:opacity-80 transition-opacity ${getStatusBadgeClass(lead.status)}`}
                      title="Clique para alterar status"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      <span>{lead.status}</span>
                    </button>
                  </td>

                  {/* Next Action */}
                  <td className="py-3 px-4 max-w-xs">
                    <div className="text-[11px] text-slate-600 line-clamp-2" title={lead.nextAction}>
                      {lead.nextAction}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => handleOpenStatusModal(lead)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-brand-600 hover:bg-brand-50"
                        title="Editar status e anotações"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50"
                        title="Remover contato"
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

      {/* Edit Status Modal */}
      {activeLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900">
                Atualizar Status do Contato
              </h3>
              <button
                onClick={() => setActiveLead(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveStatus} className="p-5 space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900 text-sm">{activeLead.name}</div>
                <div className="text-slate-500 font-mono">{activeLead.phone} &bull; {activeLead.channel}</div>
                {activeLead.productInterest && (
                  <div className="text-[11px] text-brand-600 mt-1 font-medium">
                    {activeLead.productInterest}
                  </div>
                )}
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Novo Status
                </label>
                <select
                  value={modalStatus}
                  onChange={(e) => setModalStatus(e.target.value as LeadStatus)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="Novo contato">Novo contato</option>
                  <option value="Em atendimento">Em atendimento</option>
                  <option value="Aguardando resposta">Aguardando resposta</option>
                  <option value="Interesse identificado">Interesse identificado</option>
                  <option value="Concluído">Concluído</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Próxima Ação
                </label>
                <textarea
                  rows={2}
                  value={modalNextAction}
                  onChange={(e) => setModalNextAction(e.target.value)}
                  placeholder="Ex: Enviar orçamento com 5% de desconto à vista"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveLead(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-md shadow-brand-500/25"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Manual New Lead Modal */}
      {isNewLeadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900">
                Cadastrar Novo Contato no CRM
              </h3>
              <button
                onClick={() => setIsNewLeadOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNewLead} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ex: Lucas Henrique"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="(61) 98888-7777"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Canal de Origem
                  </label>
                  <select
                    value={newChannel}
                    onChange={(e) => setNewChannel(e.target.value as LeadChannel)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Loja Física">Loja Física (Balcão)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Categoria de Interesse
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Material Escolar">Material Escolar</option>
                    <option value="Escritório">Escritório</option>
                    <option value="Escrita">Escrita</option>
                    <option value="Organização">Organização</option>
                    <option value="Arte e Criatividade">Arte e Criatividade</option>
                    <option value="Agendas e Cadernos">Agendas e Cadernos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Produto / Lista Específica
                </label>
                <input
                  type="text"
                  value={newProduct}
                  onChange={(e) => setNewProduct(e.target.value)}
                  placeholder="Ex: Mochila reforçada + 2 cadernos inteligentes"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Próxima Ação
                </label>
                <input
                  type="text"
                  value={newNextAction}
                  onChange={(e) => setNewNextAction(e.target.value)}
                  placeholder="Ex: Enviar link de pagamento e foto dos cadernos"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Valor Estimado (R$)
                  </label>
                  <input
                    type="text"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    placeholder="150,00"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Observações Internas
                  </label>
                  <input
                    type="text"
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder="Cliente de Planaltina, prefere retirada"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewLeadOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold shadow-md shadow-brand-500/25"
                >
                  Cadastrar Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
