export type ProductCategory = 
  | 'Todos'
  | 'Material Escolar'
  | 'Escritório'
  | 'Escrita'
  | 'Organização'
  | 'Arte e Criatividade'
  | 'Agendas e Cadernos'
  | 'Presentes e Brinquedos'
  | 'Informática e Serviços';

export type StockStatus = 'Em Estoque' | 'Últimas Unidades' | 'Sob Encomenda';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  badge?: string;
  stockStatus: StockStatus;
  sku: string;
  tags: string[];
  featured?: boolean;
}

export type LeadChannel = 'WhatsApp' | 'Instagram' | 'Landing Page' | 'Loja Física';

export type LeadStatus = 
  | 'Novo contato'
  | 'Em atendimento'
  | 'Aguardando resposta'
  | 'Interesse identificado'
  | 'Concluído';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  channel: LeadChannel;
  categoryInterest: string;
  productInterest?: string;
  date: string;
  status: LeadStatus;
  nextAction: string;
  notes?: string;
  estimatedValue?: number;
}

export interface ChatMessage {
  id: string;
  conversationId: string;
  sender: 'client' | 'agent' | 'system';
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
}

export interface Conversation {
  id: string;
  contactName: string;
  contactPhone: string;
  avatar: string;
  channel: 'WhatsApp' | 'Instagram';
  unreadCount: number;
  lastMessage: string;
  lastMessageTime: string;
  status: 'Aberto' | 'Em Andamento' | 'Resolvido';
  productInterest?: string;
  notes?: string;
  messages: ChatMessage[];
}

export interface AutomationRule {
  id: string;
  title: string;
  trigger: string;
  action: string;
  description: string;
  enabled: boolean;
  category: 'Atendimento' | 'Triagem' | 'FAQ' | 'Comercial';
  defaultReply?: string;
}

export type CampaignStatus = 'Ativa' | 'Agendada' | 'Concluída' | 'Rascunho' | 'Em andamento';

export interface Campaign {
  id: string;
  name: string;
  targetAudience: string;
  channel: 'WhatsApp' | 'Instagram' | 'Multi-canal';
  status: CampaignStatus;
  scheduledDate: string;
  estimatedReach: number;
  conversionRate: string;
  description: string;
  lgpdCompliant: boolean;
}

export type DashboardTab = 
  | 'overview'
  | 'catalog'
  | 'leads'
  | 'inbox'
  | 'automations'
  | 'campaigns'
  | 'reports'
  | 'settings';
