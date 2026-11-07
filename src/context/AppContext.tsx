import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  Product, 
  Lead, 
  Conversation, 
  AutomationRule, 
  Campaign, 
  DashboardTab, 
  LeadStatus,
  ChatMessage
} from '../types';
import { 
  INITIAL_PRODUCTS, 
  INITIAL_LEADS, 
  INITIAL_CONVERSATIONS, 
  INITIAL_AUTOMATIONS, 
  INITIAL_CAMPAIGNS 
} from '../data/initialData';

interface AppContextType {
  activeView: 'landing' | 'dashboard';
  setActiveView: (view: 'landing' | 'dashboard') => void;
  dashboardTab: DashboardTab;
  setDashboardTab: (tab: DashboardTab) => void;
  
  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  
  // Leads
  leads: Lead[];
  addLead: (lead: Omit<Lead, 'id' | 'date'>) => void;
  updateLeadStatus: (id: string, status: LeadStatus, nextAction?: string) => void;
  deleteLead: (id: string) => void;
  
  // Chat & Support
  conversations: Conversation[];
  activeConversationId: string;
  setActiveConversationId: (id: string) => void;
  sendChatMessage: (conversationId: string, text: string) => void;
  
  // Automations
  automations: AutomationRule[];
  toggleAutomation: (id: string) => void;
  updateAutomation: (rule: AutomationRule) => void;
  
  // Campaigns
  campaigns: Campaign[];
  addCampaign: (campaign: Omit<Campaign, 'id'>) => void;
  
  // UI helpers
  whatsappModalProduct: Product | null;
  setWhatsappModalProduct: (product: Product | null) => void;
  selectedCatalogCategory: string;
  setSelectedCatalogCategory: (cat: string) => void;
  searchCatalogQuery: string;
  setSearchCatalogQuery: (q: string) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  resetAllToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Navigation
  const [activeView, setActiveView] = useState<'landing' | 'dashboard'>(() => {
    return (localStorage.getItem('mp_active_view') as 'landing' | 'dashboard') || 'landing';
  });
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>(() => {
    return (localStorage.getItem('mp_dashboard_tab') as DashboardTab) || 'overview';
  });

  // Data states with localStorage fallback
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('mp_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('mp_leads');
    return saved ? JSON.parse(saved) : INITIAL_LEADS;
  });

  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const saved = localStorage.getItem('mp_conversations');
    return saved ? JSON.parse(saved) : INITIAL_CONVERSATIONS;
  });

  const [activeConversationId, setActiveConversationId] = useState<string>(() => {
    return conversations[0]?.id || 'conv-1';
  });

  const [automations, setAutomations] = useState<AutomationRule[]>(() => {
    const saved = localStorage.getItem('mp_automations');
    return saved ? JSON.parse(saved) : INITIAL_AUTOMATIONS;
  });

  const [campaigns, setCampaigns] = useState<Campaign[]>(() => {
    const saved = localStorage.getItem('mp_campaigns');
    return saved ? JSON.parse(saved) : INITIAL_CAMPAIGNS;
  });

  // UI state
  const [whatsappModalProduct, setWhatsappModalProduct] = useState<Product | null>(null);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState<string>('Todos');
  const [searchCatalogQuery, setSearchCatalogQuery] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('mp_active_view', activeView);
  }, [activeView]);

  useEffect(() => {
    localStorage.setItem('mp_dashboard_tab', dashboardTab);
  }, [dashboardTab]);

  useEffect(() => {
    localStorage.setItem('mp_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('mp_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('mp_conversations', JSON.stringify(conversations));
  }, [conversations]);

  useEffect(() => {
    localStorage.setItem('mp_automations', JSON.stringify(automations));
  }, [automations]);

  useEffect(() => {
    localStorage.setItem('mp_campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  // Toast trigger
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3800);
  };

  // Product actions
  const addProduct = (prodData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...prodData,
      id: `prod-${Date.now()}`
    };
    setProducts(prev => [newProduct, ...prev]);
    showToast(`Produto "${newProduct.name}" cadastrado com sucesso!`);
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
    showToast(`Produto "${updated.name}" atualizado.`);
  };

  const deleteProduct = (id: string) => {
    const prod = products.find(p => p.id === id);
    setProducts(prev => prev.filter(p => p.id !== id));
    showToast(`Produto "${prod?.name || id}" removido.`);
  };

  // Lead actions
  const addLead = (leadData: Omit<Lead, 'id' | 'date'>) => {
    const now = new Date();
    const timeStr = `Hoje, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newLead: Lead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      date: timeStr
    };
    setLeads(prev => [newLead, ...prev]);
    showToast(`Novo interessado registrado: ${newLead.name}`);
  };

  const updateLeadStatus = (id: string, status: LeadStatus, nextAction?: string) => {
    setLeads(prev => prev.map(lead => {
      if (lead.id === id) {
        return {
          ...lead,
          status,
          nextAction: nextAction !== undefined ? nextAction : lead.nextAction
        };
      }
      return lead;
    }));
    showToast(`Status atualizado para: ${status}`);
  };

  const deleteLead = (id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id));
    showToast('Contato removido da gestão.');
  };

  // Chat actions
  const sendChatMessage = (conversationId: string, text: string) => {
    if (!text.trim()) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      conversationId,
      sender: 'agent',
      text: text.trim(),
      timestamp: timeStr,
      status: 'delivered'
    };

    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          lastMessage: text.trim(),
          lastMessageTime: timeStr,
          messages: [...conv.messages, newMsg]
        };
      }
      return conv;
    }));

    // Simulated customer/bot auto-reaction if the attendant asked a question or sent info
    setTimeout(() => {
      const autoResponses = [
        'Excelente! Muito obrigado pela atenção e pelo esclarecimento.',
        'Combinado então! Vou dar uma passada na Mais Papelaria aí em Planaltina.',
        'Perfeito, você aceita Pix ou cartão de crédito na retirada?',
        'Ótimo atendimento! Vocês têm papel celofane e fitas para presente também?',
        'Muito prático! Adorei a agilidade desse canal.'
      ];
      const randomReply = autoResponses[Math.floor(Math.random() * autoResponses.length)];
      const replyTime = new Date();
      const replyTimeStr = `${String(replyTime.getHours()).padStart(2, '0')}:${String(replyTime.getMinutes()).padStart(2, '0')}`;

      const clientMsg: ChatMessage = {
        id: `msg-rep-${Date.now()}`,
        conversationId,
        sender: 'client',
        text: randomReply,
        timestamp: replyTimeStr,
        status: 'read'
      };

      setConversations(prev => prev.map(conv => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            lastMessage: randomReply,
            lastMessageTime: replyTimeStr,
            messages: [...conv.messages, clientMsg]
          };
        }
        return conv;
      }));
    }, 1800);
  };

  // Automation actions
  const toggleAutomation = (id: string) => {
    setAutomations(prev => prev.map(a => {
      if (a.id === id) {
        const nextState = !a.enabled;
        showToast(`Fluxo "${a.title}" ${nextState ? 'ativado' : 'desativado'}.`);
        return { ...a, enabled: nextState };
      }
      return a;
    }));
  };

  const updateAutomation = (rule: AutomationRule) => {
    setAutomations(prev => prev.map(a => a.id === rule.id ? rule : a));
    showToast(`Automação "${rule.title}" configurada.`);
  };

  // Campaign actions
  const addCampaign = (campData: Omit<Campaign, 'id'>) => {
    const newCampaign: Campaign = {
      ...campData,
      id: `camp-${Date.now()}`
    };
    setCampaigns(prev => [newCampaign, ...prev]);
    showToast(`Campanha "${newCampaign.name}" criada com sucesso!`);
  };

  // Reset demo
  const resetAllToDefaults = () => {
    localStorage.removeItem('mp_products');
    localStorage.removeItem('mp_leads');
    localStorage.removeItem('mp_conversations');
    localStorage.removeItem('mp_automations');
    localStorage.removeItem('mp_campaigns');
    setProducts(INITIAL_PRODUCTS);
    setLeads(INITIAL_LEADS);
    setConversations(INITIAL_CONVERSATIONS);
    setAutomations(INITIAL_AUTOMATIONS);
    setCampaigns(INITIAL_CAMPAIGNS);
    showToast('Dados demonstrativos restaurados para o padrão.');
  };

  return (
    <AppContext.Provider value={{
      activeView,
      setActiveView,
      dashboardTab,
      setDashboardTab,
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      leads,
      addLead,
      updateLeadStatus,
      deleteLead,
      conversations,
      activeConversationId,
      setActiveConversationId,
      sendChatMessage,
      automations,
      toggleAutomation,
      updateAutomation,
      campaigns,
      addCampaign,
      whatsappModalProduct,
      setWhatsappModalProduct,
      selectedCatalogCategory,
      setSelectedCatalogCategory,
      searchCatalogQuery,
      setSearchCatalogQuery,
      toastMessage,
      showToast,
      resetAllToDefaults
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
