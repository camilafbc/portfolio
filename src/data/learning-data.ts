export type LearningEntry = {
  date: string;
  title: string;
  description: string;
};

export const learning: LearningEntry[] = [
  {
    date: "maio/26",
    title: "web socket",
    description:
      "aprendi sobre o protocolo WebSocket através da construção de um projeto de chat com Socket.io em um servidor Node.js",
  },
  {
    date: "maio/26",
    title: "autenticação otp",
    description: "construí um projeto com autenticação otp + token jwt",
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
  },
];
