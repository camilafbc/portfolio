import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/projects";
import { Sobre } from "@/components/sobre/Sobre";
import { Tech } from "@/components/tech/Tech";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/data";

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
