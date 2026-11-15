import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camilafbc.vercel.app"),
  title: "Camila Coelho - Portfólio",
  description:
    "Portfólio de Camila Coelho, desenvolvedora Full Stack: projetos, trajetória e aprendizados em desenvolvimento web com TypeScript, React, Next.js e Node.js.",
  openGraph: {
    title: "Camila Coelho - Desenvolvedora Full Stack",
    description:
      "Conheça meus projetos, trajetória e aprendizados em desenvolvimento web.",
    url: "/",
    siteName: "Camila Coelho - Portfólio",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/profile2.png", alt: "Camila Coelho" }],
  },
  twitter: {
    card: "summary",
    title: "Camila Coelho - Desenvolvedora Full Stack",
    description:
      "Conheça meus projetos, trajetória e aprendizados em desenvolvimento web.",
    images: ["/profile2.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
