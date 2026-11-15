export type Project = {
  title: string;
  description: string;
  /** Caminho em /public ou URL. Opcional: sem imagem, o card mostra um placeholder. */
  image?: string;
  /** Repositório no GitHub */
  link: string;
  /** Link da aplicação no ar (opcional) */
  demo?: string;
  /** Nomes que correspondem a /public/icons/<nome>.svg */
  stacks: string[];
};

export const projectsData: Project[] = [
  {
    title: "Líber - Gerenciador de Leituras",
    description:
      "Aplicação full stack para organizar estantes de leitura, buscar livros no Google Books e acompanhar o progresso de páginas lidas. Conta com autenticação (JWT e Google OAuth), testes de integração, Docker e CI/CD.",
    image: "/projects/liber.png",
    link: "https://github.com/camilafbc/full-liber-gerenciador-de-leituras",
    demo: "https://my-liber.vercel.app/",
    stacks: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Jest",
    ],
  },
  {
    title: "PlanejAI",
    description:
      "Aplicação para planejamento de metas financeiras que usa IA (Gemini) para gerar diagnóstico e sugestões personalizadas a partir de renda, despesas e dívidas, com histórico de simulações.",
    image: "/projects/planejai.jpeg",
    link: "https://github.com/camilafbc/react-planejai",
    demo: "https://react-planejai.vercel.app/",
    stacks: ["TypeScript", "React", "Vite", "TailwindCSS", "Gemini"],
  },
  {
    title: "Controle de Estoque",
    description:
      "Sistema de controle de estoque para os cursos do SENAC, com movimentações por turma, relatórios analíticos e controle de acesso por perfil e curso. Projeto integrador do curso técnico, em uso real.",
    image: "/projects/controle-estoque.png",
    link: "https://github.com/camilafbc/controle-estoque",
    demo: "https://estoque-senac.vercel.app/",
    stacks: ["TypeScript", "Next.js", "React", "Prisma", "PostgreSQL", "TailwindCSS"],
  },
];
