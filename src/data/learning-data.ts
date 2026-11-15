export type LearningEntry = {
  date: string;
  title: string;
  description: string;
  link?: string;
};

export const learning: LearningEntry[] = [
  {
    date: "novembro/26",
    title: "docker",
    description:
      "conceitos, Dockerfile, comandos e boas práticas; criação de imagens e containers, aplicados no ambiente do Líber com Docker Compose",
    link: "https://github.com/camilafbc/full-liber-gerenciador-de-leituras",
  },
  {
    date: "setembro/26",
    title: "vibe coding",
    description:
      "bootcamp de desenvolvimento com o Lovable, que resultou em 2 projetos",
  },
  {
    date: "agosto/26",
    title: "ci/cd",
    description:
      "o que é CI/CD, Git Flow, GitHub Actions e pipelines com testes, lint e deploy automatizado",
    link: "https://github.com/camilafbc/full-liber-gerenciador-de-leituras",
  },
  {
    date: "julho/26",
    title: "llm em aplicações",
    description:
      "integração com a API do Gemini através de uma Serverless Function, mantendo a chave protegida, no PlanejAI",
    link: "https://github.com/camilafbc/react-planejai",
  },
  {
    date: "junho/26",
    title: "fundamentos de arquitetura de sistemas",
    description:
      "visão geral, casos de uso, idempotência, estrutura de pastas, inversão de dependências, máquina de estados e validação, aplicados em uma arquitetura modular por features",
    link: "https://github.com/camilafbc/full-liber-gerenciador-de-leituras",
  },
  {
    date: "maio/26",
    title: "web socket",
    description:
      "aprendi sobre o protocolo WebSocket através da construção de um projeto de chat com Socket.io em um servidor Node.js",
    link: "https://github.com/camilafbc/estudos/tree/main/chat-com-socket",
  },
  {
    date: "maio/26",
    title: "autenticação otp",
    description: "construí um projeto com autenticação otp + token jwt",
    link: "https://github.com/camilafbc/estudos/tree/main/autenticacao_otp_jwt",
  },
  {
    date: "abril/26",
    title: "testes",
    description: "tipos de testes e criação de testes com Jest",
  },
  {
    date: "abril/26",
    title: "desenvolvimento agêntico",
    description:
      "minicurso de desenvolvimento com agentes, aprendendo princípios e conceitos como o spec",
  },
  {
    date: "janeiro/26",
    title: "firebase",
    description:
      "aprendi a usar e configurar o firebase para armazenamento de dados em um projeto de clone do whatsapp",
    link: "https://github.com/camilafbc/react-whatsapp-web-clone",
  },
];
