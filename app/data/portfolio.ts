export type Locale = "pt" | "en";
export type Localized = Record<Locale, string>;

export type Project = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  type: Localized;
  role: Localized;
  summary: Localized;
  challenge: Localized;
  approach: Localized;
  result: Localized;
  image?: string;
  video?: string;
  imageAlt: Localized;
  accent: "lime" | "coral" | "yellow" | "blue";
  technologies: string[];
  externalUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "reevo",
    title: "Reevo",
    organization: "Latin Hack · Trilha de Ideias",
    year: "2025",
    type: { pt: "AgriFintech · Inclusão financeira", en: "AgriFintech · Financial inclusion" },
    role: { pt: "Estratégia de produto e modelagem de negócio", en: "Product strategy and business modeling" },
    summary: {
      pt: "Uma AgriFintech concebida para conectar pequenos produtores rurais a investidores por meio de uma infraestrutura financeira acessível, rastreável e orientada a oportunidades.",
      en: "An AgriFintech designed to connect small farmers with investors through accessible, traceable and opportunity-driven financial infrastructure.",
    },
    challenge: {
      pt: "Reduzir barreiras financeiras enfrentadas por pequenos produtores com acesso limitado a sistemas tradicionais de investimento e crédito.",
      en: "Reduce financial barriers faced by small farmers with limited access to traditional investment and credit systems.",
    },
    approach: {
      pt: "Estruturei estratégia de produto, modelo de negócio, validação de mercado, pitch e conceitos de infraestrutura fintech considerando a realidade social e econômica do empreendedorismo rural.",
      en: "I structured product strategy, business modeling, market validation, pitch development and fintech infrastructure concepts around the social and economic realities of rural entrepreneurship.",
    },
    result: {
      pt: "1º lugar na Trilha de Ideias do Latin Hack entre 97 projetos e mais de 223 participantes, seguido por seleção para um processo de incubação e validação de negócio.",
      en: "First place in Latin Hack's Ideas Track among 97 projects and more than 223 participants, followed by selection for an entrepreneurship incubation and business-validation process.",
    },
    image: "/davi-reevo-social-impact.png",
    imageAlt: { pt: "Davi apresentando a proposta da AgriFintech Reevo", en: "Davi presenting the Reevo AgriFintech proposal" },
    accent: "lime",
    technologies: ["Product Strategy", "Business Analytics", "Product Design", "Fintech", "Market Validation"],
    externalUrl: "https://www.youtube.com/watch?v=k6afLf-Ou5E",
  },
  {
    slug: "clima-seguro",
    title: "Clima.Seguro",
    organization: "OpenAI Devs de Impacto",
    year: "2025",
    type: { pt: "IA · Inteligência climática", en: "AI · Climate intelligence" },
    role: { pt: "Produto, dados e front-end", en: "Product, data and front-end" },
    summary: {
      pt: "Plataforma de inteligência climática que transforma dados ambientais, meteorológicos e socioeconômicos em informação acionável para municípios brasileiros vulneráveis.",
      en: "A climate-intelligence platform that turns environmental, meteorological and socioeconomic data into actionable information for vulnerable Brazilian municipalities.",
    },
    challenge: {
      pt: "Ajudar comunidades e instituições públicas a antecipar desastres climáticos sem exigir que tomadores de decisão interpretem dados técnicos fragmentados.",
      en: "Help communities and public institutions anticipate climate disasters without requiring decision-makers to interpret fragmented technical data.",
    },
    approach: {
      pt: "Combinei desenvolvimento de produto, estratégia, estruturação de dados e front-end para converter padrões de risco geoespacial em leituras mais acessíveis e úteis em cenários críticos.",
      en: "I combined product development, strategy, data structuring and front-end work to translate geospatial risk patterns into more accessible insights for critical scenarios.",
    },
    result: {
      pt: "1º lugar no OpenAI Devs de Impacto Hackathon entre 20 projetos e mais de 100 participantes.",
      en: "First place at the OpenAI Devs de Impacto Hackathon among 20 projects and more than 100 participants.",
    },
    image: "/clima-seguro-stage-enhanced.webp",
    imageAlt: { pt: "Apresentação do Clima.Seguro no hackathon Devs de Impacto", en: "Clima.Seguro presentation at the Devs de Impacto hackathon" },
    accent: "yellow",
    technologies: ["Python", "React", "APIs", "Geospatial Data", "AI Models"],
  },
  {
    slug: "librai",
    title: "LibrAI",
    organization: "CONIC-SEMESP",
    year: "2025",
    type: { pt: "Visão computacional · Acessibilidade", en: "Computer vision · Accessibility" },
    role: { pt: "Lógica de interação, pesquisa e testes", en: "Interaction logic, research and testing" },
    summary: {
      pt: "Iniciativa de visão computacional que reconhece gestos de Libras em tempo real para apoiar crianças surdas em atividades de alfabetização acessíveis e interativas.",
      en: "A computer-vision initiative that recognizes Brazilian Sign Language gestures in real time to support deaf children through accessible, interactive literacy activities.",
    },
    challenge: {
      pt: "Projetar uma experiência de alfabetização inclusiva em que precisão técnica e compreensão infantil precisassem funcionar juntas.",
      en: "Design an inclusive literacy experience where technical accuracy and children's understanding needed to work together.",
    },
    approach: {
      pt: "Atuei na lógica de interação, discussões de experiência, pesquisa bibliográfica e sessões de teste com usuários, conectando MediaPipe, OpenCV e TensorFlow a uma interface de aprendizagem.",
      en: "I worked on interaction logic, experience discussions, bibliographic research and user testing, connecting MediaPipe, OpenCV and TensorFlow to a learning interface.",
    },
    result: {
      pt: "Pesquisa publicada e apresentada no CONIC-SEMESP 2025, uma das maiores conferências brasileiras de iniciação científica.",
      en: "Research published and presented at CONIC-SEMESP 2025, one of Brazil's largest undergraduate research conferences.",
    },
    image: "/librai-dashboard-enhanced.webp",
    imageAlt: { pt: "Interface de reconhecimento de sinais do LibrAI", en: "LibrAI sign-recognition interface" },
    accent: "coral",
    technologies: ["Computer Vision", "OpenCV", "MediaPipe", "TensorFlow", "Python"],
  },
  {
    slug: "topline-protection",
    title: "Topline Protection",
    organization: "Ambev · AB InBev",
    year: "2025",
    type: { pt: "Produtividade comercial · Analytics", en: "Sales productivity · Analytics" },
    role: { pt: "Analytics, dashboards e automação", en: "Analytics, dashboards and automation" },
    summary: {
      pt: "Iniciativa estratégica desenvolvida na Ambev para apoiar uma nova estrutura de atendimento comercial, otimizar operações de campo e aumentar a eficiência em regiões-piloto.",
      en: "A strategic initiative developed at AB InBev to support a new commercial service structure, optimize field operations and increase sales efficiency across pilot regions.",
    },
    challenge: {
      pt: "Priorizar pontos de venda com maior potencial de crescimento sem comprometer a estabilidade operacional da base não priorizada.",
      en: "Prioritize points of sale with the strongest growth potential without compromising operational stability across the non-prioritized base.",
    },
    approach: {
      pt: "Apliquei uma metodologia operacional 80/20 com monitoramento de produtividade, dashboards, automações, análises deep dive e alinhamento com equipes de campo.",
      en: "I applied an 80/20 operating methodology through productivity monitoring, dashboards, automation, deep-dive analysis and field-team alignment.",
    },
    result: {
      pt: "4,7 horas semanais otimizadas nos processos de relatório e acompanhamento de produtividade, transformando dados em visibilidade acionável para estratégia e execução de campo.",
      en: "4.7 hours optimized each week across reporting and productivity-tracking processes, turning data into actionable visibility for strategy and field execution.",
    },
    image: "/davi-ambev-portrait.png",
    imageAlt: { pt: "Davi durante o estágio nacional de produtividade comercial na Ambev", en: "Davi during his national sales-productivity internship at AB InBev" },
    accent: "blue",
    technologies: ["Excel", "SQL", "Power Automate", "Power BI", "Python", "Business Analytics"],
  },
];

export const experiences = [
  {
    organization: "BTG Pactual",
    label: { pt: "Experiência profissional", en: "Professional experience" },
    detail: { pt: "Estágio com atuação em IA, dados e produtividade comercial.", en: "Internship experience across AI, data and commercial productivity." },
  },
  {
    organization: "Ambev",
    label: { pt: "Experiência profissional", en: "Professional experience" },
    detail: { pt: "Estágio com atuação em IA, dados e produtividade comercial.", en: "Internship experience across AI, data and commercial productivity." },
  },
  {
    organization: "Inteli",
    label: { pt: "Formação", en: "Education" },
    detail: { pt: "Engenharia da Computação com bolsa integral.", en: "Computer Engineering on a full scholarship." },
  },
  {
    organization: "Oracle · IPT · Guarujá",
    label: { pt: "Projetos acadêmicos", en: "Academic projects" },
    detail: { pt: "Construção de soluções tecnológicas em desafios propostos por organizações reais.", en: "Technology solutions built around challenges proposed by real organizations." },
  },
  {
    organization: "Inteli Junior · Benedito Caravelas",
    label: { pt: "Comunidade e liderança", en: "Community and leadership" },
    detail: { pt: "Experiências de liderança, identidade, ancestralidade e racialidade.", en: "Leadership experiences connecting identity, ancestry and race." },
  },
] as const;

export const metrics = [
  { value: "25", label: { pt: "reconhecimentos e premiações", en: "recognitions and awards" }, tone: "lime" },
  { value: "13", label: { pt: "hackathons premiados", en: "awarded hackathons" }, tone: "cream" },
  { value: "18", label: { pt: "aprovações internacionais", en: "international acceptances" }, tone: "yellow" },
  { value: "Top 20", label: { pt: "jovens empreendedores do Brasil · Sebrae", en: "young entrepreneurs in Brazil · Sebrae" }, tone: "coral" },
] as const;

export const services = [
  {
    number: "01",
    title: { pt: "Produtos, apps e MVPs", en: "Products, apps and MVPs" },
    body: { pt: "Da descoberta e prototipação a um produto funcional com escopo claro.", en: "From discovery and prototyping to a functional product with a clear scope." },
  },
  {
    number: "02",
    title: { pt: "IA, automação e dados", en: "AI, automation and data" },
    body: { pt: "Protótipos e fluxos inteligentes desenhados em torno de um problema real.", en: "Intelligent prototypes and workflows designed around a real problem." },
  },
  {
    number: "03",
    title: { pt: "Sites e experiências web", en: "Websites and web experiences" },
    body: { pt: "Narrativa, design responsivo, desenvolvimento e apoio à publicação.", en: "Narrative, responsive design, development and publishing support." },
  },
  {
    number: "04",
    title: { pt: "Pitches e comunicação", en: "Pitches and communication" },
    body: { pt: "Estrutura, narrativa e direção visual para ideias que precisam ser defendidas.", en: "Structure, narrative and art direction for ideas that need to be championed." },
  },
] as const;

export const recognitions = [
  "Itaú AI & Multi-Cloud",
  "Brasilcap 2025",
  "Latin Hack",
  "Devs de Impacto · Curitiba",
  "Devs de Impacto · Rio de Janeiro",
  "Afrocapital Hack",
  "MIT Hacking Medicine",
  "Movimento Black Money",
  "Qualcomm",
  "Experimenta Guarulhos",
  "OftalmoHack",
  "HackLab · Instituto Joule",
] as const;

export const contact = {
  email: "davinasc.dejesus@gmail.com",
  linkedin: "https://www.linkedin.com/in/davi-nascimento-de-jesus/",
};

export const copy = {
  pt: {
    nav: ["Projetos", "Experiência", "Serviços", "Reconhecimentos", "Sobre"],
    direction: "Tecnologia com direção humana",
    heroA: "Construindo o que",
    heroB: "move as pessoas para frente.",
    heroDescription: "Trabalhando entre IA, software, dados e produto para transformar problemas complexos em experiências digitais úteis.",
    viewWork: "Ver projetos",
    workWithMe: "Trabalhar comigo",
    availability: "Disponível para projetos selecionados · São Paulo, BR",
    highlights: ["Engenharia da Computação · Inteli", "IA, software, dados e produto", "Top 20 jovens empreendedores · Sebrae"],
    principles: ["Estratégia", "Engenharia", "Impacto", "Direção humana"],
    workEyebrow: "Projetos selecionados",
    workTitleA: "Evidências acima de",
    workTitleB: "adjetivos.",
    workIntro: "Projetos, decisões e resultados apresentados com o contexto necessário para entender o trabalho.",
    openCase: "Abrir case",
    experienceEyebrow: "Experiência",
    experienceTitleA: "Aprender rápido.",
    experienceTitleB: "Construir com contexto.",
    experienceIntro: "Experiências profissionais, acadêmicas e comunitárias que ampliaram minha forma de pensar produto e tecnologia.",
    metricsEyebrow: "Consistência em números",
    metricsTitleA: "Marcos que ajudam a",
    metricsTitleB: "dimensionar a caminhada.",
    servicesEyebrow: "Como posso ajudar",
    servicesTitleA: "Da hipótese ao que",
    servicesTitleB: "pode ser usado.",
    serviceCta: "Conversar sobre este serviço",
    recognitionEyebrow: "Arquivo de reconhecimentos",
    recognitionTitleA: "Construir também é",
    recognitionTitleB: "testar sob pressão.",
    recognitionIntro: "Uma seleção dos ambientes em que ideias precisaram ganhar forma, evidência e clareza em pouco tempo.",
    aboutEyebrow: "Sobre",
    aboutTitleA: "Uma perspectiva da Bahia",
    aboutTitleB: "para o mundo.",
    aboutBody: "Sou estudante de Engenharia da Computação no Inteli, bolsista integral e construtor de produtos digitais. Minha trajetória passa por pesquisa científica, projetos com organizações, IA, dados, liderança e experiências internacionais — sempre com a mesma pergunta: para quem isso faz diferença?",
    skills: ["Software & IA", "Produto & Estratégia", "Dados", "Design & Comunicação", "Liderança"],
    contactEyebrow: "Próximo movimento",
    contactTitleA: "Temos algo útil para",
    contactTitleB: "construir juntos?",
    contactBody: "Escolha o contexto e conte um pouco sobre a oportunidade. Eu retorno por e-mail.",
    projectOption: "Quero iniciar um projeto",
    opportunityOption: "Tenho uma oportunidade profissional",
    formName: "Nome",
    formCompany: "Empresa ou organização",
    formEmail: "E-mail",
    formMessage: "Sobre o que vamos conversar?",
    formSubmit: "Preparar e-mail",
    directContact: "Ou fale diretamente",
    footer: "Construindo o que move as pessoas para frente.",
  },
  en: {
    nav: ["Work", "Experience", "Services", "Recognition", "About"],
    direction: "Technology with human direction",
    heroA: "Building what",
    heroB: "moves people forward.",
    heroDescription: "Working across AI, software, data and product to turn complex problems into useful digital experiences.",
    viewWork: "View selected work",
    workWithMe: "Work with me",
    availability: "Available for selected projects · São Paulo, BR",
    highlights: ["Computer Engineering · Inteli", "AI, software, data & product", "Top 20 young entrepreneurs · Sebrae"],
    principles: ["Strategy", "Engineering", "Impact", "Human direction"],
    workEyebrow: "Selected work",
    workTitleA: "Evidence over",
    workTitleB: "adjectives.",
    workIntro: "Projects, decisions and outcomes — presented with the context needed to understand the work.",
    openCase: "Open case study",
    experienceEyebrow: "Experience",
    experienceTitleA: "Learn fast.",
    experienceTitleB: "Build with context.",
    experienceIntro: "Professional, academic and community experiences that expanded how I think about product and technology.",
    metricsEyebrow: "Consistency in numbers",
    metricsTitleA: "Milestones that help",
    metricsTitleB: "size the journey.",
    servicesEyebrow: "How I can help",
    servicesTitleA: "From a hypothesis to",
    servicesTitleB: "something people can use.",
    serviceCta: "Discuss this service",
    recognitionEyebrow: "Recognition archive",
    recognitionTitleA: "Building also means",
    recognitionTitleB: "testing under pressure.",
    recognitionIntro: "A selection of environments where ideas had to gain form, evidence and clarity in a short amount of time.",
    aboutEyebrow: "About",
    aboutTitleA: "A perspective from Bahia",
    aboutTitleB: "to the world.",
    aboutBody: "I am a Computer Engineering student at Inteli, a full-scholarship recipient and a builder of digital products. My path crosses scientific research, projects with organizations, AI, data, leadership and international experiences — always guided by the same question: who does this move forward?",
    skills: ["Software & AI", "Product & Strategy", "Data", "Design & Communication", "Leadership"],
    contactEyebrow: "Next move",
    contactTitleA: "Is there something useful",
    contactTitleB: "we can build together?",
    contactBody: "Choose the context and share a little about the opportunity. I will follow up by email.",
    projectOption: "I want to start a project",
    opportunityOption: "I have a professional opportunity",
    formName: "Name",
    formCompany: "Company or organization",
    formEmail: "Email",
    formMessage: "What should we discuss?",
    formSubmit: "Prepare email",
    directContact: "Or get in touch directly",
    footer: "Building what moves people forward.",
  },
} as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
