import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/projects";
import { Sobre } from "@/components/sobre/Sobre";
import { Learning } from "@/components/learning/Learning";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { MobileNav } from "@/components/ui/mobile-nav";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <FloatingNav navItems={navItems} className="hidden md:flex" />
      <MobileNav navItems={navItems} className="md:hidden" />
      <Hero />
      <Sobre />
      <Learning />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
