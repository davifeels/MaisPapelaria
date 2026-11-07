import { Product, Lead, Conversation, AutomationRule, Campaign } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    sku: 'MP-CAD-001',
    name: 'Caderno Inteligente Disco Colegial Pastel',
    category: 'Agendas e Cadernos',
    price: 89.90,
    oldPrice: 104.90,
    description: 'Sistema inovador reposicionável com 80 folhas pautadas de alta gramatura (90g), capa dura laminada e discos resistentes na cor lilás pastel. Ideal para estudantes e profissionais que valorizam personalização.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Vendido',
    stockStatus: 'Em Estoque',
    tags: ['Caderno', 'Disco', 'Pastel', 'Estudos'],
    featured: true
  },
  {
    id: 'prod-2',
    sku: 'MP-CAN-002',
    name: 'Kit Marca-Texto Tons Pastéis - 6 Cores',
    category: 'Escrita',
    price: 34.50,
    oldPrice: 42.00,
    description: 'Ponta chanfrada macia com traço de 2mm a 5mm. Tinta à base de água que não mancha o verso da folha (anti-bleeding). Cores suaves perfeitas para resumos, planners e bíblias.',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80',
    badge: 'Destaque',
    stockStatus: 'Em Estoque',
    tags: ['Marca-texto', 'Pastel', 'Resumos', 'Estudo'],
    featured: true
  },
  {
    id: 'prod-3',
    sku: 'MP-ESC-003',
    name: 'Kit Canetas Brush Pen Lettering Dual Tip - 12 Cores',
    category: 'Arte e Criatividade',
    price: 68.00,
    oldPrice: 79.90,
    description: 'Ponta pincel flexível japonesa para traços finos e grossos combinada com ponta fineliner 0.4mm no mesmo corpo. Excelente para caligrafia moderna, cartões e ilustrações.',
    image: 'https://images.unsplash.com/photo-1585336261026-778846c2688f?auto=format&fit=crop&w=800&q=80',
    badge: 'Criatividade',
    stockStatus: 'Em Estoque',
    tags: ['Lettering', 'Brush Pen', 'Arte', 'Caligrafia'],
    featured: true
  },
  {
    id: 'prod-4',
    sku: 'MP-ORG-004',
    name: 'Organizador de Mesa Acrílico Cristal 4 Divisórias',
    category: 'Organização',
    price: 49.90,
    description: 'Acrílico espesso de alto brilho com divisões para canetas, clips, blocos de notas adesivas e celular. Mantém sua estação de trabalho ou estudo impecável e funcional.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    badge: 'Home Office',
    stockStatus: 'Em Estoque',
    tags: ['Organizador', 'Acrílico', 'Mesa', 'Home Office'],
    featured: false
  },
  {
    id: 'prod-5',
    sku: 'MP-PLN-005',
    name: 'Planner Semanal Permanente Wire-o Floral',
    category: 'Agendas e Cadernos',
    price: 59.90,
    oldPrice: 69.90,
    description: 'Visão semanal aberta em duas páginas, metas mensais, controle financeiro, rastreador de hábitos (habit tracker) e envelope plástico com cartela de adesivos funcionais.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80',
    badge: 'Tendência',
    stockStatus: 'Últimas Unidades',
    tags: ['Planner', 'Produtividade', 'Agenda', 'Organização'],
    featured: true
  },
  {
    id: 'prod-6',
    sku: 'MP-ART-006',
    name: 'Estojo Aquarela em Pastilha 24 Cores + Waterbrush',
    category: 'Arte e Criatividade',
    price: 84.90,
    description: 'Pigmentos concentrados de secagem uniforme com estojo compacto de viagem que funciona como godê. Acompanha pincel especial com reservatório de água e esponja de limpeza.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    badge: 'Profissional',
    stockStatus: 'Em Estoque',
    tags: ['Aquarela', 'Pintura', 'Arte', 'Ilustração'],
    featured: false
  },
  {
    id: 'prod-7',
    sku: 'MP-MAT-007',
    name: 'Estojo Box Organizador Duplo 100 Pens Pastel',
    category: 'Material Escolar',
    price: 52.00,
    description: 'Compartimento estruturado com 24 elásticos para canetas favoritas e amplo espaço central para tesouras, réguas, borrachas e cola. Tecido impermeável e zíper reforçado.',
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80',
    badge: 'Escolar',
    stockStatus: 'Em Estoque',
    tags: ['Estojo', '100 Pens', 'Escola', 'Acessórios'],
    featured: true
  },
  {
    id: 'prod-8',
    sku: 'MP-OFC-008',
    name: 'Grampeador Metálico de Mesa 24/6 até 30 Folhas',
    category: 'Escritório',
    price: 38.90,
    description: 'Corpo metálico com acabamento fosco e base antideslizante emborrachada. Mecanismo suave com trilho retrátil para grampeamento aberto e fechado. Alta durabilidade.',
    image: 'https://images.unsplash.com/photo-1584679109597-c656b19974c9?auto=format&fit=crop&w=800&q=80',
    badge: 'Corporativo',
    stockStatus: 'Em Estoque',
    tags: ['Grampeador', 'Escritório', 'Corporativo', 'Papéis'],
    featured: false
  },
  {
    id: 'prod-9',
    sku: 'MP-NOT-009',
    name: 'Bloco de Notas Adesivas Transparentes à Prova d\'Água',
    category: 'Organização',
    price: 18.50,
    description: 'Papel translúcido especial em PET que permite anotar observações diretamente sobre livros, bíblias e documentos sem riscar ou ocultar o texto original.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    badge: 'Novidade',
    stockStatus: 'Em Estoque',
    tags: ['Sticky Notes', 'Adesivo', 'Leitura', 'Faculdade'],
    featured: true
  },
  {
    id: 'prod-10',
    sku: 'MP-CAN-010',
    name: 'Kit Canetas Gel Ponta Ultrafina 0.38mm Cores Vintage',
    category: 'Escrita',
    price: 29.90,
    description: 'Conjunto com 5 canetas retráteis em tons vintage exclusivos (verde floresta, azul navy, vinho, caramelo e cinza ardósia). Tinta de secagem ultra-rápida sem borrões.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    badge: 'Exclusivo',
    stockStatus: 'Últimas Unidades',
    tags: ['Canetas Gel', 'Vintage', 'Escrita', 'Design'],
    featured: false
  },
  {
    id: 'prod-11',
    sku: 'MP-MAT-011',
    name: 'Calculadora Científica 240 Funções com Capa Protetora',
    category: 'Material Escolar',
    price: 45.00,
    description: 'Visor de duas linhas que exibe fórmulas e resultados simultaneamente. 240 funções integradas para ensino fundamental, médio e vestibulares. Alimentação dupla com desligamento automático.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    badge: 'Essencial',
    stockStatus: 'Em Estoque',
    tags: ['Calculadora', 'Científica', 'Escola', 'Matemática'],
    featured: false
  },
  {
    id: 'prod-12',
    sku: 'MP-MOC-012',
    name: 'Mochila Escolar & Notebook Reforçada Impermeável',
    category: 'Material Escolar',
    price: 149.90,
    oldPrice: 179.90,
    description: 'Costuras triplamente reforçadas, alças acolchoadas antitranspirantes e compartimento dedicado para notebook de até 15.6 polegadas. Bolsos laterais para garrafa térmica.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    badge: 'Volta às Aulas',
    stockStatus: 'Sob Encomenda',
    tags: ['Mochila', 'Notebook', 'Escola', 'Reforçada'],
    featured: true
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    name: 'Camila Fernandes',
    phone: '(61) 98412-3321',
    channel: 'WhatsApp',
    categoryInterest: 'Material Escolar',
    productInterest: 'Kit Lista Volta às Aulas 6º Ano',
    date: 'Hoje, 09:42',
    status: 'Novo contato',
    nextAction: 'Enviar orçamento detalhado com 5% de desconto à vista',
    notes: 'Procurando materiais para o Colégio Estadual em Planaltina. Pediu marcas Faber-Castell e Tilibra.',
    estimatedValue: 245.00
  },
  {
    id: 'lead-2',
    name: 'Rodrigo Alencar',
    phone: '(61) 99120-7764',
    channel: 'Instagram',
    categoryInterest: 'Escritório',
    productInterest: 'Organizador de Mesa Acrílico e Grampeador',
    date: 'Hoje, 08:15',
    status: 'Em atendimento',
    nextAction: 'Confirmar disponibilidade de cores no estoque físico',
    notes: 'Viu o reel no Instagram da Mais Papelaria sobre organização de Home Office.',
    estimatedValue: 88.80
  },
  {
    id: 'lead-3',
    name: 'Prof. Juliana Vasconcelos',
    phone: '(61) 98255-9012',
    channel: 'Landing Page',
    categoryInterest: 'Agendas e Cadernos',
    productInterest: 'Planner Permanente + Canetas Vintage',
    date: 'Ontem, 17:30',
    status: 'Interesse identificado',
    nextAction: 'Combinar retirada no balcão da loja em Planaltina',
    notes: 'Professora da rede pública. Gostou da pré-visualização do catálogo no Mais Connect.',
    estimatedValue: 89.80
  },
  {
    id: 'lead-4',
    name: 'Lucas Henrique Costa',
    phone: '(61) 99634-1188',
    channel: 'WhatsApp',
    categoryInterest: 'Arte e Criatividade',
    productInterest: 'Kit Aquarela 24 Cores + Bloco 200g',
    date: 'Ontem, 14:10',
    status: 'Aguardando resposta',
    nextAction: 'Verificar se o cliente optou por Pix ou Cartão',
    notes: 'Iniciando curso de ilustração. Solicitou recomendação de papel adequado.',
    estimatedValue: 125.00
  },
  {
    id: 'lead-5',
    name: 'Mariana Duarte (Escritório Contábil)',
    phone: '(61) 98114-5509',
    channel: 'WhatsApp',
    categoryInterest: 'Escritório',
    productInterest: 'Papel A4 Chamex Caixa Fechada + Pastas',
    date: '05/11/2026',
    status: 'Concluído',
    nextAction: 'Pós-venda e agendamento de reposição mensal',
    notes: 'Pedido corporativo com entrega em Planaltina. Pagamento faturado confirmado.',
    estimatedValue: 480.00
  },
  {
    id: 'lead-6',
    name: 'Bárbara Silveira',
    phone: '(61) 99341-2099',
    channel: 'Landing Page',
    categoryInterest: 'Agendas e Cadernos',
    productInterest: 'Caderno Inteligente Disco Lilás',
    date: '04/11/2026',
    status: 'Concluído',
    nextAction: 'Concluído com sucesso na loja',
    notes: 'Retirou o produto diretamente na loja física após consultar pelo catálogo.',
    estimatedValue: 89.90
  }
];

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    contactName: 'Camila Fernandes',
    contactPhone: '(61) 98412-3321',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    channel: 'WhatsApp',
    unreadCount: 1,
    lastMessage: 'Vocês conseguem cotar a lista de material completa do 6º ano?',
    lastMessageTime: '09:42',
    status: 'Aberto',
    productInterest: 'Lista Escolar 6º Ano',
    notes: 'Mãe de aluno em Planaltina. Prefere atendimento rápido por foto da lista.',
    messages: [
      {
        id: 'msg-1',
        conversationId: 'conv-1',
        sender: 'client',
        text: 'Olá! Bom dia, vi o catálogo digital da Mais Papelaria!',
        timestamp: '09:40',
        status: 'read'
      },
      {
        id: 'msg-2',
        conversationId: 'conv-1',
        sender: 'system',
        text: 'Olá, Camila! Bem-vinda à Mais Papelaria no WhatsApp. Nosso assistente MAIS CONNECT está pronto para ajudar. Você gostaria de consultar produtos, solicitar orçamento de lista ou falar com nosso balcão?',
        timestamp: '09:40',
        status: 'read'
      },
      {
        id: 'msg-3',
        conversationId: 'conv-1',
        sender: 'client',
        text: 'Vocês conseguem cotar a lista de material completa do 6º ano?',
        timestamp: '09:42',
        status: 'delivered'
      }
    ]
  },
  {
    id: 'conv-2',
    contactName: 'Rodrigo Alencar (@rodrigo.design)',
    contactPhone: '(61) 99120-7764',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    channel: 'Instagram',
    unreadCount: 0,
    lastMessage: 'Perfeito! Vou passar na loja hoje à tarde para retirar.',
    lastMessageTime: '08:30',
    status: 'Em Andamento',
    productInterest: 'Organizador de Acrílico',
    notes: 'Cliente do Instagram interessado em renovar o home office.',
    messages: [
      {
        id: 'msg-201',
        conversationId: 'conv-2',
        sender: 'client',
        text: 'Opa, vi o post do organizador de mesa em acrílico. Tem a pronta entrega aí em Planaltina?',
        timestamp: '08:15',
        status: 'read'
      },
      {
        id: 'msg-202',
        conversationId: 'conv-2',
        sender: 'agent',
        text: 'Bom dia, Rodrigo! Tudo bem? Temos sim, tanto o modelo com 4 divisórias quanto o porta-canetas individual. Posso deixar um separado no seu nome no balcão?',
        timestamp: '08:22',
        status: 'read'
      },
      {
        id: 'msg-203',
        conversationId: 'conv-2',
        sender: 'client',
        text: 'Perfeito! Vou passar na loja hoje à tarde para retirar.',
        timestamp: '08:30',
        status: 'read'
      }
    ]
  },
  {
    id: 'conv-3',
    contactName: 'Mariana Rocha',
    contactPhone: '(61) 98334-0981',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    channel: 'WhatsApp',
    unreadCount: 0,
    lastMessage: 'Muito obrigada pelo atendimento rápido!',
    lastMessageTime: 'Ontem',
    status: 'Resolvido',
    productInterest: 'Kit Marca-Texto Tons Pastéis',
    notes: 'Comprou 2 kits de marca-texto e elogiou a facilidade do catálogo.',
    messages: [
      {
        id: 'msg-301',
        conversationId: 'conv-3',
        sender: 'client',
        text: 'Boa tarde! Qual é o horário de atendimento hoje?',
        timestamp: 'Ontem 15:10',
        status: 'read'
      },
      {
        id: 'msg-302',
        conversationId: 'conv-3',
        sender: 'agent',
        text: 'Olá Mariana! Estamos atendendo até as 18h30 aqui em Planaltina-DF. No sábado funcionamos das 08h às 13h. Se precisar, podemos adiantar seu pedido pelo WhatsApp!',
        timestamp: 'Ontem 15:12',
        status: 'read'
      },
      {
        id: 'msg-303',
        conversationId: 'conv-3',
        sender: 'client',
        text: 'Muito obrigada pelo atendimento rápido!',
        timestamp: 'Ontem 15:15',
        status: 'read'
      }
    ]
  }
];

export const INITIAL_AUTOMATIONS: AutomationRule[] = [
  {
    id: 'auto-1',
    title: 'Boas-vindas Imediata Omnichannel',
    trigger: 'Primeira mensagem recebida via WhatsApp ou Direct do Instagram',
    action: 'Envia saudação amigável e identifica o motivo do contato',
    description: 'Apresenta a Mais Papelaria, agradece o contato e oferece menu rápido (Catálogo, Lista Escolar, Dúvidas de Produtos ou Atendente).',
    enabled: true,
    category: 'Atendimento',
    defaultReply: 'Olá! Seja muito bem-vindo(a) à Mais Papelaria de Planaltina-DF! Como podemos tornar o seu dia a dia mais prático e criativo hoje?'
  },
  {
    id: 'auto-2',
    title: 'Triagem e Consulta de Lista Escolar',
    trigger: 'Palavras-chave: "lista", "orçamento", "escola", "colégio"',
    action: 'Solicita foto ou arquivo da lista e ano escolar do aluno',
    description: 'Organiza a fila de orçamentos para que a equipe monte a cotação com as opções de marcas disponíveis.',
    enabled: true,
    category: 'Triagem',
    defaultReply: 'Que ótimo! Para agilizar seu orçamento de volta às aulas, envie uma foto nítida ou PDF da sua lista com o nome do colégio. Nossa equipe cotará os melhores preços!'
  },
  {
    id: 'auto-3',
    title: 'FAQ de Localização e Horário de Funcionamento',
    trigger: 'Palavras-chave: "horário", "onde fica", "endereço", "localização", "abre sábado"',
    action: 'Dispara dados de localização em Planaltina-DF e mapa',
    description: 'Informa os horários semanais e de fim de semana, além de pontos de referência e facilidades de estacionamento.',
    enabled: true,
    category: 'FAQ',
    defaultReply: 'A Mais Papelaria fica no coração de Planaltina-DF! Horário: Segunda a Sexta das 08h às 18h30 | Sábados das 08h às 13h. Venha nos visitar!'
  },
  {
    id: 'auto-4',
    title: 'Direcionamento Inteligente para Atendente Humano',
    trigger: 'Cliente solicita "atendente", "falar com pessoa" ou fluxo complexo',
    action: 'Transfere para a fila prioritária do atendente responsável',
    description: 'Notifica a equipe no painel MAIS CONNECT com o histórico prévio para evitar que o cliente precise repetir dados.',
    enabled: true,
    category: 'Atendimento',
    defaultReply: 'Entendido! Estou transferindo agora para um de nossos especialistas da Mais Papelaria. Só um instante que já vamos te responder!'
  },
  {
    id: 'auto-5',
    title: 'Acompanhamento Pós-Orçamento (Follow-up Autorizado)',
    trigger: 'Orçamento enviado sem resposta após 24 horas',
    action: 'Mensagem cordial com verificação de dúvidas',
    description: 'Verifica com delicadeza se o cliente conseguiu avaliar o orçamento ou se deseja alterar itens ou formas de pagamento.',
    enabled: true,
    category: 'Comercial',
    defaultReply: 'Olá! Passando para saber se deu tudo certo com o orçamento que enviamos ontem. Ficou alguma dúvida sobre produtos ou condições de pagamento?'
  },
  {
    id: 'auto-6',
    title: 'Alerta de Novidades e Períodos Sazonais',
    trigger: 'Cadastro voluntário no Clube de Vantagens da Landing Page',
    action: 'Disparo de aviso exclusivo respeitando a LGPD',
    description: 'Envia avisos sobre chegada de reposição de cadernos inteligentes, coleções de marca-textos e campanhas de volta às aulas.',
    enabled: false,
    category: 'Comercial',
    defaultReply: 'Novidade fresquinha na Mais Papelaria! Acabamos de receber novos modelos de cadernos inteligentes e planners. Confira antes que esgote!'
  }
];

export const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp-1',
    name: 'Campanha Volta às Aulas 2026 — Antecipada',
    targetAudience: 'Pais e estudantes cadastrados (Lista escolar)',
    channel: 'Multi-canal',
    status: 'Ativa',
    scheduledDate: '15/12/2026',
    estimatedReach: 3200,
    conversionRate: '18.4%',
    description: 'Divulgação do serviço de montagem rápida de lista com 5% de desconto para compras antecipadas e pagamento via Pix.',
    lgpdCompliant: true
  },
  {
    id: 'camp-2',
    name: 'Festival de Canetas & Lettering Criativo',
    targetAudience: 'Seguidores do Instagram e amantes de papelaria fofa',
    channel: 'Instagram',
    status: 'Agendada',
    scheduledDate: '28/11/2026',
    estimatedReach: 4800,
    conversionRate: '12.1%',
    description: 'Apresentação em carrossel e reels da nova coleção de brush pens, marca-textos pastéis e canetas vintage.',
    lgpdCompliant: true
  },
  {
    id: 'camp-3',
    name: 'Renovação de Home Office & Escritório Eficiente',
    targetAudience: 'Contatos corporativos, contabilidades e profissionais liberais',
    channel: 'WhatsApp',
    status: 'Em andamento',
    scheduledDate: '01/11/2026',
    estimatedReach: 850,
    conversionRate: '24.6%',
    description: 'Kits especiais de organizadores de mesa, papéis A4 e suprimentos para escritórios de Planaltina-DF.',
    lgpdCompliant: true
  },
  {
    id: 'camp-4',
    name: 'Especial Agendas & Planners 2026',
    targetAudience: 'Clientes cadastrados no Clube Mais Vantagens',
    channel: 'Multi-canal',
    status: 'Rascunho',
    scheduledDate: '10/12/2026',
    estimatedReach: 2100,
    conversionRate: 'Estimada ~15%',
    description: 'Lançamento oficial da linha de planners permanentes, blocos de produtividade e cadernos inteligentes para o ano letivo.',
    lgpdCompliant: true
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Onde a Mais Papelaria está localizada e qual é o horário?',
    answer: 'Nossa loja física está localizada em Planaltina-DF. Funcionamos de segunda a sexta-feira das 08h às 18h30 e aos sábados das 08h às 13h. Venha tomar um café conosco!'
  },
  {
    question: 'Vocês realizam orçamentos completos de lista escolar?',
    answer: 'Sim! Com o MAIS CONNECT, você pode simplesmente enviar uma foto ou arquivo da sua lista escolar pelo WhatsApp. Nossa equipe confere as disponibilidades, sugere as melhores opções de custo-benefício e prepara tudo para retirada ou entrega.'
  },
  {
    question: 'Como funciona a consulta de produtos pelo WhatsApp?',
    answer: 'Navegando em nosso Catálogo Digital, basta clicar no botão "Consultar via WhatsApp" em qualquer produto. Você receberá uma mensagem pré-formatada com o item selecionado e nossa equipe informará cores disponíveis, estoque e formas de pagamento.'
  },
  {
    question: 'A Mais Papelaria atende empresas e escritórios corporativos?',
    answer: 'Com certeza! Atendemos escritórios, clínicas, escolas e órgãos locais de Planaltina e região com condições especiais para faturamento corporativo, suprimentos contínuos e entrega agendada.'
  },
  {
    question: 'Os dados cadastrados no site são seguros?',
    answer: 'Totalmente. Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Suas informações são utilizadas exclusivamente para o contato comercial solicitado e você pode solicitar a remoção a qualquer momento.'
  }
];
