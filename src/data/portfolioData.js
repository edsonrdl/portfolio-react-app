export const profile = {
  name: "Edson Rodrigo Damasceno Lopes",
  role: "Software Engineer & Architect",
  shortDescription: "Transformando necessidades de negócio em ecossistemas escaláveis e seguros, com forte foco em Cloud, Microserviços e DevOps.",
  aboutText: [
    "Sou um Engenheiro de Software com experiência comprovada na concepção, modernização e operação de sistemas críticos em instituições gigantes como Itaú Unibanco e instâncias governamentais (SEFA-PA). Minha atuação combina uma visão arquitetônica afiada com capacidade de execução pragmática, atuando do backend (Java, .NET, Spring) à infraestrutura como código (AWS, Terraform, Kubernetes).",
    "Vejo a tecnologia como habilitadora de eficiência. Portanto, adoto constantemente a mentalidade de DevOps, integração contínua (CI/CD) e padrões como Clean Architecture e Event-Driven Design para construir soluções que não só resolvam problemas de hoje, mas tolerem a alta demanda de amanhã.",
    "Movido pelo aprendizado contínuo, aprimoro minha produtividade absorvendo as inovações em Inteligência Artificial no fluxo de trabalho. Adoro liderar tecnicamente, possuindo uma didática natural para disseminar conhecimento, realizar mentorias e alinhar times de alto rendimento às entregas sólidas e estratégicas que as corporações exigem."
  ],
  personalInfo: {
    Base: "Sistemas Distribuídos & Cloud",
    Foco: "Arquitetura e Engenharia Backend",
  },
  stats: [
    { value: "SÊNIOR", label: "Software Engineering & Architecture" },
    { value: "CLOUD", label: "Infraestrutura como Código & Serverless" },
    { value: "ESCALA", label: "Microsserviços & Alta Disponibilidade" },
    { value: "LÍDER", label: "Mentoria Técnica & Visão de Produto" }
  ],
  asiCodeDescription: [
    "Minha filosofia técnica orbita em torno do lema de que softwares corporativos escaláveis devem ser silenciosos, resilientes e transparentes para a operação. Acredito firmemente que a Arquitetura Limpa e soluções desacopladas liberam o potencial total das equipes de desenvolvimento.",
    "Seja modelando fluxos complexos, liderando refinamentos técnicos com Domain-Driven Design (DDD) ou projetando topologias complexas de Cloud, meu foco é sempre impulsionar times para uma cultura de eficiência operacional baseada em automação."
  ],
  contacts: {
    email: "edsonrodrigo11111@gmail.com",
    phone: "+55 (91) 99169-3284",
    linkedin: "https://www.linkedin.com/in/edson-rodrigo-lopes/",
    github: "https://github.com/edsonrdl",
    instagram: "https://www.instagram.com/_edsonrd_lopes/",
    instagramAsi: "https://www.instagram.com/_asi_code/",
    whatsapp: "https://wa.me/5591991693284?text=Olá%2C%20Edson%2C%20tudo%20bem%3F"
  }
};

export const history = {
  experience: [
    {
      company: "BRQ Digital Solutions (Alocado no Itaú Unibanco)",
      period: "Ago 2025 - Presente",
      role: "Software Engineer Specialist",
      description: "Atuação estratégica nas plataformas digitais de Catálogo e Ofertas (segmento private), sendo responsável pela sustentação de ecossistemas com alta disponibilidade e baixa latência e migração progressiva com padrão Strangler Fig.",
      bullets: [
        "Arquitetura Serverless & Event-Driven (AWS Lambda, SNS, SQS, MSK Kafka) focando no desacoplamento sistêmico da escala financeira.",
        "Infraestrutura 100% via Código (Terraform) para paridade entre Dev e Produção, com pipelines AWS Glue (ETL).",
        "Observabilidade completa do sistema usando Datadog e implantação de padrões corporativos com ArchUnit (CQRS/Clean Architecture).",
        "Liderança técnica, Code Reviews de segurança (OWASP) e mentoria técnica no Upskilling de desenvolvedores Jr/Pl."
      ]
    },
    {
      company: "FADESP / SEFA-PA",
      period: "Fev 2025 - Presente",
      role: "Engenheiro Backend Pleno",
      description: "Responsável pelo desenvolvimento de soluções digitais para arrecadação de tributos, gestão de obrigações fiscais e fiscalização tributária do Estado.",
      bullets: [
        "Modernização agressiva de sistemas legados de monolíticos para microsserviços via Kubernetes (OpenShift).",
        "Engenharia backend focada em Java 17, Spring Framework e Angular 18 p/ frontends fiscais.",
        "Comunicação assíncrona entre sistemas usando RabbitMQ/Kafka e automação intensa de CI/CD (Rancher, GitLab, Jenkins, ArgoCD).",
        "Monitoramento e centralização de logs contínuos utilizando Grafana e a ELK Stack."
      ]
    },
    {
      company: "Máxima Segurança",
      period: "Abr 2024 - Fev 2025",
      role: "Arquiteto de Software Corporativo",
      description: "Projeto completo desde o levantamento inicial até a modelagem física, concebendo soluções modulares e de alta performance implantadas em grids on-premises usando Proxmox.",
      bullets: [
        "Definição de arquiteturas distribuídas e modulares baseadas em DDD com bancos MongoDB e PostgreSQL.",
        "Desenvolvimento backend de alto padrão transacional com Java 21, Spring Boot e RabbitMQ.",
        "Automação e esteiras de Deploy usando Harbor e Docker integrados a fluxos do GitHub Actions."
      ]
    },
    {
      company: "Mosele Software Consulting",
      period: "Fev 2022 - Jan 2023",
      role: "Desenvolvedor Full Stack (.NET/Angular)",
      description: "Construção de aplicações corporativas com tecnologias Microsoft e Single-Page Applications de altíssima resposta.",
      bullets: [
        "Desenvolvimento MVC corporativo e Clean Architecture utilizando C#, ASP.NET Core e Angular 13.",
        "Manutenção de performance nos bancos SQL Server via Entity Framework e caching local via Redis.",
        "Criação de esteiras assíncronas em RabbitMQ e testes automatizados robustos (xUnit)."
      ]
    },
    {
      company: "Freelancer (Projetos e Consultorias)",
      period: "Contínuo",
      role: "Tech Lead & Full Stack",
      description: "Desenvolvimento de produtos diretos na ponta orientados para usabilidade avançada (UX/UI) e orquestração de negócios.",
      bullets: [
        "Design e implantação de Chatbots pelo WhatsApp interligados via Webhooks diretos da API oficial da Meta.",
        "Aplicativos mobile e portais de gestão (React Native, Angular 18 e Firebase real-time database).",
        "Sistemas de comanda fluídos com microserviços conectando Kafka Connect (CDC)."
      ]
    }
  ],
  education: [
    "Bacharelado em Sistemas de Informação - Universidade Estácio de Sá, Campus IESAM (Belém - PA)"
  ]
};

export const skillsList = [
  "Java (8 ao 21)", "Spring Framework", "C# & .NET Core", "Node.js", "Python",
  "Angular (13, 18)", "React Native", "TypeScript",
  "Clean Architecture", "Hexagonal Architecture", "Microserviços", "DDD", "SOLID",
  "Apache Kafka", "RabbitMQ", "Kafka Connect", "CQRS", "Serverless",
  "AWS (Lambda, Glue, SNS, SQS)", "Terraform (IaC)", "Docker & Kubernetes", "OpenShift", "ArgoCD",
  "CI/CD (GitLab, Jenkins, Actions)", "Datadog", "Grafana", "ELK Stack",
  "PostgreSQL", "DocumentDB", "SQL Server", "MongoDB", "Redis", "Firebase"
];

export const softSkillsList = [
  "Liderança Técnica & Mentoria",
  "Visão Orientada a Negócios",
  "Comunicação Clara e Direta",
  "Didática e Transferência de Conhecimento",
  "Mapeamento de Processos",
  "Aprendizado Contínuo",
  "Estratégia e Decisões de Trade-off (Riscos)",
  "Trabalho em Equipe e Agilidade"
];

export const projects = [
  {
    id: "chatbot",
    type: "Arquitetura e Integração",
    title: "Chatbot WhatsApp Meta API",
    description: "Sistema para atendimento ao cliente conectando integrações corporativas com Webhooks oficiais usando Java/Spring Boot.",
    status: "Operacional",
    images: [],
    techs: ["Java", "Spring Boot", "Webhooks", "API Restful"],
    github: "https://github.com/edsonrdl/envio-de-mensagens-simples-whatsapp-api",
    preview: null
  },
  {
    id: "crud-clean",
    type: "System Design",
    title: "Arquitetura Global de Autenticação",
    description: "Laboratório de engenharia abordando segregação por Clean Architecture e camada de Cache para resiliência massiva.",
    status: "Concluído",
    images: [],
    techs: ["Java", "Redis", "Docker", "DDD"],
    github: "https://github.com/edsonrdl/project-crud-clean-architecture-patterns-dao",
    preview: null
  },
  {
    id: "cdc-kafka",
    type: "Cloud Data Pipelines",
    title: "Change Data Capture (Debezium)",
    description: "Projeto orquestrando Kafka e Debezium (Kafka Connect) visando propagar fluxos de dados transacionais on-premises em tempo sincrono.",
    status: "Back-end Interno",
    images: [],
    techs: ["Apache Kafka", "Docker", "PostgreSQL", "Debezium"],
    github: null,
    preview: null
  },
  {
    id: "order-sys",
    type: "Mensageria e Sagas",
    title: "Microsystem Processador Distribuído",
    description: "Rede de controle de filas distribuídas com RabbitMQ mapeando o pattern Saga para transações cruzadas em microsserviços.",
    status: "Em evolução",
    images: [],
    techs: [".NET Core", "Node.js", "RabbitMQ", "MongoDB"],
    github: "https://github.com/edsonrdl/order-processing-system.git",
    preview: null
  }
];
