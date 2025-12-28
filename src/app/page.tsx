import { Contact } from "@/components/my-components/contact";
import { Hero } from "@/components/my-components/hero";
import { Projects } from "@/components/my-components/projects";
import { Sobre } from "@/components/my-components/sobre";
import { Tech } from "@/components/my-components/tech";
import { CometCard } from "@/components/ui/comet-card";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <FloatingNav navItems={navItems} className="hidden md:flex" />
      <Hero />
      <Sobre />
      <Tech />
      <Projects />
      <Contact />
      <footer className="w-full p-6 text-sm bg-background-secondary text-foreground-muted text-center border-t-2 border-border">
        — feito com 💜 e código —
      </footer>
    </div>
  );
}
