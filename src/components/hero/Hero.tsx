"use client";

import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { Navigation } from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";
import { handleScroll } from "@/utils/utils";

export const Hero = () => {
  return (
    // fundo principal
    <div
      className="relative flex min-h-dvh w-full items-center justify-center bg-background"
      id="home"
    >
      {/* 2. grid  */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,hsl(var(--grid-color))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--grid-color))_1px,transparent_1px)]"
        )}
      />

      {/* máscara radial e fade inferior */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background-secondary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_90%),linear-gradient(to_bottom,transparent_90%,black)]"></div>

      {/* gradiente inferior de transição */}
      <div className="absolute bottom-0 left-0 h-[20vh] w-full bg-gradient-to-t from-background-secondary to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center gap-4 px-6">
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="visible"
          className="text-center text-sm md:text-lg md:tracking-wider lg:text-2xl text-foreground"
        >
          Oi! Eu sou a Camila,
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="visible"
        >
          <TextGenerateEffect
            words="Desenvolvedora Full Stack"
            className="text-center text-4xl md:text-5xl lg:text-6xl text-foreground font-bold font-space"
          />
        </motion.div>

        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="visible"
          className="mb-4 w-full text-center text-xs tracking-widest text-foreground-muted lg:text-base"
        >
          A excelência está no detalhe - e eu gosto de cuidar de cada linha!
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="visible"
        >
          <HoverBorderGradient>
            <Link
              href={"#projects"}
              onClick={(e) => handleScroll(e, "#projects")}
              className="flex items-center justify-center gap-2 w-52"
            >
              <Navigation className="size-4 mr-2" />
              Ver Projetos
            </Link>
          </HoverBorderGradient>
        </motion.div>
      </div>
    </div>
  );
};
