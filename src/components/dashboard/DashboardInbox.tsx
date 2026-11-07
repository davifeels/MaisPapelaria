import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Headphones, 
  Send, 
  Search, 
  MessageCircle, 
  CheckCheck, 
  Sparkles, 
  User, 
  Phone, 
  Tag, 
  Clock, 
  Paperclip, 
  Smile, 
  Check, 
  MoreVertical,
  ShieldCheck,
  Store
} from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';

export const DashboardInbox: React.FC = () => {
  const { 
    conversations, 
    activeConversationId, 
    setActiveConversationId, 
    sendChatMessage 
  } = useApp();

  const [inputText, setInputText] = useState('');
  const [searchContact, setSearchContact] = useState('');

  const activeConv = conversations.find(c => c.id === activeConversationId) || conversations[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeConv) return;
    sendChatMessage(activeConv.id, inputText.trim());
    setInputText('');
  };

  const handleQuickReply = (text: string) => {
    if (!activeConv) return;
    sendChatMessage(activeConv.id, text);
  };

  const suggestedReplies = [
    'Olá! Podemos ajudar você a encontrar o modelo ideal. Qual tipo de caderno está procurando?',
    'Nosso horário em Planaltina é de seg a sex das 08h às 18h30 e sáb das 08h às 13h.',
    'Trabalhamos com marcas como Faber-Castell, Tilibra, Caderno Inteligente e Stabilo.',
    'Posso deixar o seu pedido separado no balcão da loja para você retirar hoje?',
    'Você prefere efetuar o pagamento via Pix ou no cartão no momento da retirada?'
  ];

  const filteredConversations = conversations.filter(c => 
    c.contactName.toLowerCase().includes(searchContact.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(searchContact.toLowerCase()) ||
    c.contactPhone.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div className="space-y-4">
      
      {/* Top Banner */}
      <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
              Central de Atendimento Omnichannel
            </h2>
            <p className="text-xs text-slate-500">
              Caixa de entrada unificada para WhatsApp e Instagram da Mais Papelaria (Planaltina-DF).
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Simulador Ativo &bull; Envie mensagens e receba respostas
        </span>
      </div>

      {/* Main Omnichannel Layout */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[580px] max-h-[680px]">
        
        {/* Left Column: Conversation List (4 cols) */}
        <div className="md:col-span-4 border-r border-slate-200 flex flex-col bg-slate-50/50">
          
          {/* Search Contacts Bar */}
          <div className="p-3 border-b border-slate-200 bg-white">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={searchContact}
                onChange={(e) => setSearchContact(e.target.value)}
                placeholder="Buscar conversa ou cliente..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50"
              />
            </div>
          </div>

          {/* List items */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {filteredConversations.map((conv) => {
              const isActive = conv.id === activeConv?.id;
              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConversationId(conv.id)}
                  className={`p-3.5 cursor-pointer transition-colors flex items-start gap-3 ${
                    isActive ? 'bg-white shadow-xs border-l-4 border-l-brand-500' : 'hover:bg-slate-100/80'
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <img 
                      src={conv.avatar} 
                      alt={conv.contactName} 
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white shadow-xs ${
                      conv.channel === 'WhatsApp' ? 'bg-emerald-500' : 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600'
                    }`}>
                      {conv.channel === 'WhatsApp' ? (
                        <MessageCircle className="w-2.5 h-2.5" />
                      ) : (
                        <InstagramIcon className="w-2.5 h-2.5" />
                      )}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {conv.contactName}
                      </h4>
                      <span className="text-[10px] text-slate-400 whitespace-nowrap">
                        {conv.lastMessageTime}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 truncate">
                      {conv.lastMessage}
                    </p>

                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                        conv.status === 'Aberto' ? 'bg-blue-100 text-blue-800' :
                        conv.status === 'Em Andamento' ? 'bg-amber-100 text-amber-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {conv.status}
                      </span>
                      {conv.productInterest && (
                        <span className="text-[9px] text-slate-500 truncate max-w-[130px]">
                          &bull; {conv.productInterest}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Center & Right: Active Chat Area (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-between bg-white h-full">
          
          {activeConv ? (
            <>
              {/* Chat Header */}
              <div className="p-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
                <div className="flex items-center gap-3">
                  <img 
                    src={activeConv.avatar} 
                    alt={activeConv.contactName} 
                    className="w-9 h-9 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-bold text-slate-900">
                        {activeConv.contactName}
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        activeConv.channel === 'WhatsApp' ? 'bg-emerald-50 text-emerald-700' : 'bg-pink-50 text-pink-700'
                      }`}>
                        {activeConv.channel}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-2">
                      <span>{activeConv.contactPhone}</span>
                      {activeConv.productInterest && (
                        <span>&bull; Item: <strong>{activeConv.productInterest}</strong></span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-slate-200/80 text-slate-700 px-2 py-1 rounded-md font-semibold">
                    Status: {activeConv.status}
                  </span>
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8fafc]/70 text-xs">
                
                {/* Conversation started timestamp badge */}
                <div className="text-center my-1">
                  <span className="bg-slate-200/80 text-slate-600 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    Atendimento iniciado via {activeConv.channel} &bull; Mais Papelaria
                  </span>
                </div>

                {activeConv.messages.map((msg) => {
                  const isAgent = msg.sender === 'agent';
                  const isSystem = msg.sender === 'system';

                  if (isSystem) {
                    return (
                      <div key={msg.id} className="flex justify-center">
                        <div className="bg-amber-50 text-amber-900 border border-amber-200 p-2.5 rounded-xl max-w-md text-center text-[11px] space-y-1">
                          <div className="font-bold flex items-center justify-center gap-1 text-amber-800">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Resposta Automática Inicial (Bot MAIS CONNECT)</span>
                          </div>
                          <p>{msg.text}</p>
                          <span className="text-[9px] text-amber-700/70 block">{msg.timestamp}</span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isAgent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl shadow-xs space-y-1 ${
                          isAgent
                            ? 'bg-slate-900 text-white rounded-tr-none'
                            : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                        }`}
                      >
                        <p className="leading-relaxed">{msg.text}</p>
                        <div className={`flex items-center justify-end gap-1 text-[9px] ${isAgent ? 'text-slate-400' : 'text-slate-400'}`}>
                          <span>{msg.timestamp}</span>
                          {isAgent && (
                            <CheckCheck className="w-3 h-3 text-emerald-400 font-bold" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Quick Replies Bar */}
              <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Sugestões Rápidas:
                </span>
                {suggestedReplies.map((reply, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickReply(reply)}
                    className="px-2.5 py-1 rounded-lg bg-white hover:bg-brand-50 hover:text-brand-600 text-slate-600 border border-slate-200 text-[11px] font-medium whitespace-nowrap transition-colors shadow-xs"
                    title={reply}
                  >
                    {reply.length > 36 ? reply.slice(0, 36) + '...' : reply}
                  </button>
                ))}
              </div>

              {/* Message Input Box */}
              <form onSubmit={handleSend} className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Digite sua resposta para o cliente da Mais Papelaria..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-brand-500/25 transition-all active:scale-95 flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar</span>
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400 text-xs">
              Selecione uma conversa ao lado para visualizar.
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
