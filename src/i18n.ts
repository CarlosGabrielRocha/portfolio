import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations

/* const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  }
}; */

const en = {
  navbar: {
    experience: "Experience",
    experienceTag: "<Experience />",
    stack: "Stack",
    stackTag: "<Stack />",
    education: "Education",
    educationTag: "<Education />",
    en: "English",
    ptBR: "Portuguese",
    language: "Language",
  },
  presentation: {
    title: "Turning ideas into <br /> real world apps",
  },
  about: {
    title: "About Me",
    p1: "Hello! I’m Carlos Gabriel, a Full Stack Developer from Brazil who loves bringing ideas to life and solving problems through technology. I work with robust and intuitive web applications for the user, combining beauty, fluidity, performance, and security.",
    p2: "For me, each project is a challenge and an opportunity to build something that truly makes a difference, whether by improving the user experience or helping my client achieve their goals.",
    p3: "Let's connect and create something amazing together!",
    contact: "Contact Me By:",
  },
  experience: {
    portfolioTitle: "Portfolio",
    portfolioDesc:
      "The interface combines subtle animations, dark tones, and luminous details inspired by the universe and the stars to create an engaging visual experience. The website showcases my journey as a developer, completed projects, and contact options, all within a responsive and optimized layout, built with typed and scalable code.",
    supermarketTitle: "Supermarket API",
    supermarketDesc:
      "Simulates a REST API for a supermarket application, built using the MVC architecture pattern. It includes token-based authentication and authorization with protected routes.",
    progressTitle: "Regina Caeli Real Estate Agency (Test deploy, may take a few seconds to load)",
    progressDesc1:
      "An application developed for a real estate promotion company, designed to streamline property management and client interactions. The application follows a clean architecture with separation between frontend, bff and backend.",
    progressDesc2:
      "The platform features user authentication, contact options for team members, an administration panel, guides, and a document digitization area. All built in compliance with the LGPD (Brazilian General Data Protection Law).",
  },
  education: {
    degreeTitle: "Degree in Software Analysis and Development",
    degreeDesc:
      "The degree covered core areas such as software modeling, software architecture, cloud computing, databases, business-oriented AI, project management, object-oriented programming, software engineering, quality assurance, and software testing, providing a solid foundation for developing robust and scalable systems.",
    fullstackTitle: "FullStack JavaScript From OneBitCode",
    fullstackDesc:
      "Covers web fundamentals, including HTML5, CSS3, JavaScript, and TypeScript, as well as project versioning with Git and GitHub and software design principles such as cohesion and coupling. In frontend development, React.js, Next.js, Bootstrap, and Sass. In backend development, Node.js, Express.js, Prisma ORM, PostgreSQL, and relational databases.",
  },
  certificates: {
    title: "Certificates",
    ts: "TypeScript course from OnebitCode",
    node: "NodeJs course from OnebitCode",
    db: "PostgreSQL and Relational Databases course from OnebitCode",
    react: "React js course from OnebitCode",
  },
  footer: {
    role: "Carlos Gabriel Developer",
    email: "Email:",
  },
};

const ptBR = {
  navbar: {
    experience: "Experiência",
    experienceTag: "<Experiência />",
    stack: "Stack",
    stackTag: "<Stack />",
    education: "Educação",
    educationTag: "<Educação />",
    en: "Inglês",
    ptBR: "Português",
    language: "Idioma",
  },
  presentation: {
    title: "Transformando ideias em <br /> soluções reais",
  },
  about: {
    title: "Sobre Mim",
    p1: "Olá! Sou Carlos Gabriel, um Desenvolvedor Full Stack do Brasil que trabalha dando vida a ideias e resolvendo problemas através da tecnologia. Eu trabalho com aplicações web robustas e intuitivas para o usuário, combinando beleza, fluidez, performance e segurança.",
    p2: "Para mim, cada projeto é um desafio e uma oportunidade de construir algo que realmente faça a diferença, seja melhorando a experiência do usuário ou ajudando meu cliente a atingir seus objetivos.",
    p3: "Vamos conversar e criar algo incrível juntos!",
    contact: "Fale Comigo Por:",
  },
  experience: {
    portfolioTitle: "Portfólio",
    portfolioDesc:
      "A interface combina animações sutis, tons escuros e detalhes luminosos inspirados no universo e nas estrelas para criar uma experiência visual envolvente. O site mostra minha jornada como desenvolvedor, projetos concluídos e opções de contato, tudo dentro de um layout responsivo e otimizado, construído com código tipado e escalável.",
    supermarketTitle: "API de Supermercado",
    supermarketDesc:
      "Simula uma API REST para um aplicativo de supermercado, construída com o padrão de arquitetura MVC. Inclui autenticação baseada em token e autorização com rotas protegidas.",
    progressTitle: "Promotora de Imóveis Regina Caeli (Deploy de teste, pode levar alguns segundos para carregar)",
    progressDesc1:
      "Uma aplicação desenvolvida para uma agência promotora de imóveis, projetada para otimizar a gestão de propriedades e as interações com clientes. A aplicação segue uma arquitetura limpa, com separação entre frontend, bff e backend.",
    progressDesc2:
      "A plataforma conta com autenticação de usuário baseada em token, opções de contato para membros da equipe, um painel de administração, guias e uma área de digitalização de documentos. Tudo construído em total conformidade com a LGPD (Lei Geral de Proteção de Dados).",
  },
  education: {
    degreeTitle: "Graduação em Análise e Desenvolvimento de Sistemas",
    degreeDesc:
      "A graduação abordou áreas como modelagem de software, arquitetura de software, computação em nuvem, banco de dados, IA voltada a negócios, gestão de projetos, POO, engenharia de software, garantia de qualidade e testes, fornecendo uma base sólida para desenvolvimento de sistemas robustos e escaláveis.",
    fullstackTitle: "FullStack JavaScript pela OneBitCode",
    fullstackDesc:
      "Cobre fundamentos web, incluindo HTML5, CSS3, JavaScript e TypeScript, bem como versionamento com Git/GitHub e princípios de design de software como coesão e acoplamento. No front-end: React.js, Next.js, Bootstrap e Sass. No back-end: Node.js, Express.js, Prisma ORM, PostgreSQL e bancos de dados relacionais.",
  },
  certificates: {
    title: "Certificados",
    ts: "Curso de TypeScript pela OnebitCode",
    node: "Curso de NodeJs pela OnebitCode",
    db: "Curso de PostgreSQL e Bancos de Dados Relacionais pela OnebitCode",
    react: "Curso de React js pela OnebitCode",
  },
  footer: {
    role: "Carlos Gabriel Desenvolvedor",
    email: "E-mail:",
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ptBR: {
        translation: ptBR,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
