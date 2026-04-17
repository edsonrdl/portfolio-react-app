export const profile = {
  name: "Edson Rodrigo Damasceno Lopes",
  role: "Software Engineer & Architect",
  shortDescription: "Desenvolvimento Full Stack ponta a ponta fundamentado no pragmatismo. Transformo desafios de negócio em soluções de software completas — desde a criação de aplicações web e mobile dinâmicas até a construção de integrações e arquiteturas robustas no backend e na nuvem.",
  aboutText: [
    "Sou um desenvolvedor e analista de sistemas forjado na realidade de que a tecnologia deve servir ao negócio, e não o contrário. Com atuação que transita entre a altíssima disponibilidade de gigantes financeiros (Itaú Unibanco), a complexidade regulatória governamental (SEFA-PA) e o dinamismo de empresas de médio e pequeno porte, minha abordagem foge da adoção cega de \"tecnologias da moda\".",
    "Entendo que o ciclo de vida do desenvolvimento de software exige pragmatismo. Uma arquitetura eficiente não é necessariamente aquela que utiliza dezenas de microsserviços, mas sim aquela que se encaixa perfeitamente no orçamento, no momento operacional e na maturidade da equipe do cliente. Do backend profundo (Java, Spring, .NET) ao provisionamento de infraestrutura (AWS, Terraform, Proxmox), meu foco é ler o ecossistema existente, diagnosticar gargalos e projetar soluções — sejam elas a construção de um novo produto do zero ou a reestruturação cirúrgica de um sistema com mais de 10 anos de operação.",
    "Acredito que liderar tecnicamente é, acima de tudo, transferir conhecimento. Utilizo minha didática para nivelar times, garantindo que as decisões de design sejam compreendidas e sustentadas pela equipe no longo prazo."
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
    "A filosofia por trás da Advanced System Intelligence fundamenta-se na premissa de que sistemas inteligentes resolvem problemas reais sem criar novos passivos operacionais. Não acredito na \"reescrita total\" como primeira opção. A verdadeira inteligência de sistemas está em encontrar o ponto ótimo de eficiência dentro das restrições do cliente.",
    "A decisão de arquitetura sempre carrega perdas e ganhos que precisam ser medidos contra a realidade da empresa. Por exemplo, adotar uma arquitetura de microsserviços tem a clara vantagem de permitir deploys independentes e escalabilidade horizontal sob demanda. No entanto, a desvantagem imposta por essa escolha é a drástica elevação da complexidade de infraestrutura: passa-se a lidar com latência de rede, transações distribuídas (Sagas) e a necessidade de observabilidade avançada. Se o cenário da empresa não suporta essa carga cognitiva e financeira, um Monólito Modular governado por Domain-Driven Design (DDD) frequentemente entrega a mesma organização de código e governança, mas operando na memória local, sem o custo da rede.",
    "O objetivo da ASI é construir pontes seguras entre o legado estabilizado e o futuro escalável, alinhando automação, resiliência e, acima de tudo, retorno sobre o investimento."
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
      company: "Máxima Segurança (Consultoria & Arquitetura)",
      period: "Mar 2025 - Jun 2025",
      role: "Arquiteto de Software Corporativo",
      description: "Atuação como Arquiteto prestando serviços de desenvolvimento e arquitetura voltados à construção de aplicações corporativas de alta performance implantadas em ambientes on-premises (Proxmox).",
      bullets: [
        "Levantamento detalhado de requisitos, mapeamento de processos, e modelagem conceitual/física de bancos de dados.",
        "Definição de arquiteturas distribuídas e modulares baseadas em microsserviços com DDD.",
        "Desenvolvimento backend construído do zero utilizando Java 21, Spring Boot, PostgreSQL e MongoDB."
      ]
    },
    {
      company: "Máxima Segurança",
      period: "Abr 2024 - Fev 2025",
      role: "Desenvolvedor Full Stack",
      description: "Concepção, desenvolvimento e entrega de uma nova aplicação corporativa construída do zero, além de modernização de sistemas legados focada em eficiência operacional e segurança.",
      bullets: [
        "Desenvolvimento backend seguro (Java EE, Spring Boot, JBoss/Tomcat) e interfaces de usuário modernas (Angular 18 e Delphi).",
        "Implementação de Change Data Capture (CDC) via Kafka Connect para sincronização de sistemas e mensageria com RabbitMQ.",
        "Modelagem e persistência de dados no SQL Server e Firebird, garantindo consistência com o Padrão DAO.",
        "Liderança na implantação de infraestrutura on-premises (Proxmox, Harbor, Docker) e automação de CI/CD via GitHub Actions."
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
    preview: null,
    video: "/assets/projects/Videos/chatbotWhatsapAPI.mp4"
  },
  {
    id: "crud-clean",
    type: "System Design",
    title: "Clean Architecture",
    description: "Laboratório de engenharia abordando segregação por Clean Architecture e camada de Cache para resiliência massiva.",
    status: "Concluído",
    images: ["/assets/projects/crud-clean-architecture-patterns-dao/img-clean-architecture.png"],
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
    images: ["/assets/projects/change-data-capture-kafka/kafka connect.png"],
    techs: ["Apache Kafka", "Docker", "PostgreSQL", "Debezium"],
    github: null,
    preview: null,
    video: "/assets/projects/Videos/projeto-cdc-kafka.mp4"
  },
  {
    id: "order-sys",
    type: "Mensageria e Sagas",
    title: "Microsystem Processador Distribuído",
    description: "Rede de controle de filas distribuídas com RabbitMQ mapeando o pattern Saga para transações cruzadas em microsserviços.",
    status: "Em evolução",
    images: ["/assets/projects/order-processing-system/order-processing-system.png"],
    techs: [".NET Core", "Node.js", "RabbitMQ", "MongoDB"],
    github: "https://github.com/edsonrdl/order-processing-system.git",
    preview: null
  },
  {
    id: "system-management",
    type: "Dashboard UI",
    title: "System Management Dashboard",
    description: "Dashboard com análise de vendas e pesquisa de pedidos, utilizando controle de tema Dark e Claro.",
    status: "Concluído",
    images: [
      "/assets/projects/system management dashboard tema ligth dark/img-1-system-management.png",
      "/assets/projects/system management dashboard tema ligth dark/img-2-system-management.png"
    ],
    techs: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/edsonrdl/sistema-gerenciador-dashboard-tema-escuro-claro",
    preview: "https://edsonrdl.github.io/system-management-admin-dashboard-theme-dark-ligth/#"
  },
  {
    id: "flash-serve",
    type: "Web App & Mobile",
    title: "Flash Serve",
    description: "Serviço de entregas rápido com gestão de pedidos.",
    status: "Concluído",
    images: [
      "/assets/projects/flash-serve/img-1-flash-serve.png",
      "/assets/projects/flash-serve/img-2-flash-serve.png"
    ],
    techs: ["React Native", "UI/UX", "Gestão"],
    github: null,
    preview: null,
    video: "/assets/projects/Videos/flash-serve.mp4"
  }
];

export const consultingServices = [
  {
    id: "migracao",
    title: "Migração e Modernização de Sistemas Legados",
    description: "O cenário mais comum no mundo corporativo é o sistema antigo que \"paga as contas\", mas que trava a inovação (ex: monolitos em Delphi ou versões antigas de Java).",
    execution: "A Execução: Em vez de desligar o sistema antigo e tentar construir um novo (abordagem de altíssimo risco), aplicamos o padrão Strangler Fig. O sistema novo é construído em volta do legado, interceptando chamadas na borda (via API Gateways).",
    outcome: "Análise de Escolha: A vantagem imediata é a mitigação de risco, permitindo entregas contínuas e validação antecipada em produção. A desvantagem é o esforço inicial de manter ambos os sistemas rodando em paralelo e a necessidade de criar estratégias de sincronização bidirecional até o desligamento total do legado."
  },
  {
    id: "integracao",
    title: "Integração, Sincronização de Dados e Mensageria",
    description: "Empresas crescem e adquirem diferentes softwares (ERPs, CRMs, sistemas de faturamento) que não se comunicam.",
    execution: "A Execução: Arquitetura orientada a eventos para garantir que a informação flua em tempo real. Implementação de padrões de captura de dados (Change Data Capture - CDC) direto do log do banco de dados (usando ferramentas como Kafka Connect e Debezium), propagando as mudanças sem onerar a performance da aplicação de origem.",
    outcome: "Cenário Cotidiano: Um e-commerce precisa atualizar o estoque no ERP on-premises e disparar o faturamento simultaneamente. Uma fila RabbitMQ ou um tópico Kafka garante que, mesmo se o ERP estiver fora do ar por 10 minutos, a mensagem seja retida e processada logo que o serviço retornar, evitando a perda financeira."
  },
  {
    id: "auditoria",
    title: "Auditoria Arquitetural e \"Right-Sizing\"",
    description: "Muitas empresas médias sofrem com contas de nuvem (AWS/Azure) astronômicas por usarem serviços mal dimensionados ou arquiteturas over-engineered.",
    execution: "A Execução: Mapeamento profundo de como os dados são lidos e gravados. Se um serviço recebe milhares de leituras para poucas gravações, a implementação de uma camada de cache (Redis) ou a segregação de bancos (CQRS) pode reduzir drasticamente o consumo de CPU do banco de dados principal.",
    outcome: "Análise de Escolha: A vantagem é a redução imediata de custos de infraestrutura e tempo de resposta; a perda associada é a necessidade de lidar com a invalidação de cache e a consistência eventual dos dados apresentados ao usuário."
  },
  {
    id: "sustentacao",
    title: "Sustentação Evolutiva e Mentoria de Times",
    description: "Para empresas que possuem desenvolvedores internos, mas carecem de direcionamento arquitetural sênior.",
    execution: "A Execução: Atuação como Staff/Principal Engineer sob demanda. Revisão de código estrutural, implementação de esteiras de automação de testes/deploy (CI/CD) para barrar quebras em produção, e treinamento prático da equipe local em padrões como Clean Architecture e SOLID, elevando o nível técnico do time residente.",
    outcome: null
  }
];
