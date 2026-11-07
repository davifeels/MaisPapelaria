# Mais Papelaria — MAIS CONNECT
> **Plataforma de Presença Digital, Catálogo Interativo e Relacionamento Comercial**  
> *Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Mais Papelaria.*

---

## 1. Identidade do Agente & Função no Projeto

- **Nome / Identidade:** Antigravity AI — Arquiteto de Software & Engenheiro Chefe de Experiência Digital
- **Função no Projeto:** Responsável por conceber, arquitetar e implementar a solução completa do produto conceitual **MAIS CONNECT** para a Mais Papelaria de Planaltina-DF.

---

## 2. Visão Geral da Solução

O **MAIS CONNECT** é uma plataforma digital desenvolvida para unir a tradição de mais de 6 anos e a proximidade da **Mais Papelaria** (Planaltina-DF, Instagram: `@mais_papelaria`) à agilidade e escala do ambiente digital.

A aplicação conta com dois ambientes integrados e navegáveis:

1. **Landing Page Comercial & Institucional:**
   - **Hero Section:** Apresentação de alto impacto visual com proposta de valor, contadores de prova social (6 anos de atuação, ~9,2k seguidores) e pilares da marca (*Qualidade • Preço • Confiança*).
   - **Catálogo Digital:** Vitrine interativa com busca em tempo real, filtros por categoria (*Material Escolar, Escritório, Escrita, Organização, Arte e Criatividade, Agendas e Cadernos*), ordenação de preços, modal de detalhes e simulação de consulta via WhatsApp.
   - **Atendimento Mais Prático:** Demonstração do fluxo de triagem inteligente, localização em Planaltina-DF, horários e transição para atendimento humano.
   - **Relacionamento com Clientes:** Apresentação de campanhas sazonais conceituais (Volta às Aulas 2026, Escritório e Home Office, Festival de Lettering, Planners).
   - **Benefícios Estratégicos:** 6 pilares de valor comercial.
   - **FAQ Interativo:** Acordeão dinâmico com respostas para as dúvidas mais comuns de clientes e escolas da região.
   - **Captação de Interessados (Lead Magnet):** Formulário interativo com animação de celebração (`canvas-confetti`) e injeção automática no CRM do painel administrativo.
   - **CTA Final & Rodapé:** Chamada para exploração da demo e nota obrigatória de transparência e limites.

2. **Dashboard Administrativo SaaS (MAIS CONNECT):**
   - **Visão Geral:** 6 cards de KPIs, gráficos dinâmicos com Chart.js (evolução semanal de contatos WhatsApp vs. Instagram, origem dos interessados, categorias mais consultadas e leads recentes).
   - **Catálogo no Painel:** Gestão completa de produtos (CRUD) com formulário modal para novo produto, edição de preços/estoque, busca e filtros.
   - **Gestão de Interessados (CRM):** Tabela de leads com filtros de status (*Novo contato, Em atendimento, Aguardando resposta, Interesse identificado, Concluído*), modal para alterar status e próxima ação, cadastro manual de contatos e exportação simulada.
   - **Central de Atendimento Omnichannel:** Caixa de entrada unificada (WhatsApp e Instagram), histórico de mensagens, botões de respostas rápidas com um clique, envio de mensagens interativas e auto-resposta do simulador.
   - **Automações & FAQ Bots:** 6 fluxos automatizados com toggles funcionais liga/desliga salvos em `localStorage` e editor de mensagens dos bots.
   - **Campanhas de Relacionamento:** Gestão de campanhas sazonais com público-alvo, estimativas de alcance e conversão, e total conformidade com a LGPD.
   - **Relatórios:** Métricas analíticas, funil de oportunidades comerciais, tempo médio de resposta e proporção de vendas por categoria.
   - **Configurações:** Informações cadastrais da loja, canais de atendimento e botão de restauração dos dados padrão da demonstração.

---

## 3. Tecnologias Utilizadas

- **Core:** React 19, TypeScript
- **Bundler & Build Tool:** Vite 8 (build ultrarrápido com Code Splitting)
- **Estilização & Design System:** Tailwind CSS v3, PostCSS, Autoprefixer
- **Ícones Modernos:** Lucide React
- **Gráficos & Data Visualization:** Chart.js, React-Chartjs-2
- **Efeitos & Microinterações:** Canvas-Confetti
- **Persistência de Dados Local:** `localStorage` API (todas as ações do protótipo são salvas e mantidas entre navegações)

---

## 4. Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado (v18 ou superior recomendado).

### Passo a Passo

1. **Instalar as dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   O terminal exibirá o endereço local (geralmente `http://localhost:5173` ou `http://localhost:5174`). Abra no seu navegador.

3. **Gerar a versão de produção (Build):**
   ```bash
   npm run build
   ```

4. **Visualizar a versão compilada de produção:**
   ```bash
   npm run preview
   ```

---

## 5. Como Publicar no GitHub Pages

O projeto já está 100% configurado para o **GitHub Pages**:
- A base de assets está definida como relativa (`base: './'`), garantindo que fotos, scripts e estilos carreguem sem erro de tela branca.
- O arquivo `.github/workflows/deploy.yml` já está criado para deploy automático via GitHub Actions.

### Método 1: Deploy Automático via GitHub Actions (Recomendado)
1. Suba o código para o seu repositório no GitHub:
   ```bash
   git add .
   git commit -m "feat: plataforma MAIS CONNECT pronta para GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
2. No seu repositório no GitHub, vá em **Settings &rarr; Pages**.
3. Em **Build and deployment &rarr; Source**, selecione **GitHub Actions**.
4. Pronto! O workflow compilará e publicará seu site em poucos segundos em `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`.

---

## 5. Transparência e Limites

> **Projeto demonstrativo desenvolvido por Davi Anderson. Esta apresentação é conceitual e não representa uma plataforma oficial da Mais Papelaria.**  
> Todos os produtos, valores, disponibilidades de estoque, nomes de contatos e indicadores analíticos apresentados são dados ilustrativos criados exclusivamente para fins de demonstração comercial da arquitetura da plataforma MAIS CONNECT. Nenhuma integração com APIs externas pagas ou dados privados reais foi utilizada nesta demonstração.
