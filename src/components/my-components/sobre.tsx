"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Briefcase } from "lucide-react";
import { aboutData } from "@/data/data";
import Link from "next/link";
import { ButtonDownload } from "./button-download";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";
import { handleScroll } from "@/lib/utils";

export const Sobre = () => {
  const data = aboutData;

  return (
    <section
      id="sobre"
      className="py-20 w-full min-h-dvh flex items-center justify-center px-6 bg-background-secondary"
    >
      <div className="container mx-auto ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 font-space text-foreground">
            Sobre mim
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center justify-center">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex-1 space-y-6 text-foreground ">
              <p className="text-justify text-sm lg:text-lg leading-relaxed font-light max-w-xl mx-auto">
                Minha jornada na tecnologia começou durante uma transição de
                carreira, quando encontrei no desenvolvimento um espaço onde
                curiosidade, lógica e criatividade caminham juntas. Comecei pelo
                Front-end, mas logo percebi que entender apenas a superfície não
                era suficiente.
                <br />
                <br />
                Hoje, busco uma visão mais completa do desenvolvimento, cuidando
                tanto da experiência no Front quanto da estrutura no Back-end.
                No dia a dia, priorizo código claro, organizado e fácil de
                manter, sempre aberta a aprender e evoluir.
                <br />
                <br />
                Fora do código, gosto de música, shows, filmes e de planejar
                viagens. Se quiser trocar ideias sobre tecnologia ou projetos,
                fico feliz em me{" "}
                <Link
                  href={"#contact"}
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="text-primary font-bold hover:text-primary/90"
                >
                  conectar
                </Link>
                .
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex flex-col justify-center lg:justify-end flex-1">
              <div className="w-full max-w-[250px] lg:max-w-[300px] mx-auto mb-10">
                <Image
                  src="/profile2.png"
                  alt="Camila"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="object-cover rounded-full w-full h-auto hover:animate-shake shadow-[0_0_25px_rgba(139,92,246,0.35)]"
                />
              </div>
              <Card className="bg-card text-foreground shadow-lg border-border max-w-xl mx-auto">
                <CardTitle className="flex items-center gap-2 p-4 text-foreground border-b border-border">
                  <Briefcase className="text-primary" />
                  Educação e Trabalho
                </CardTitle>
                <CardContent className="flex flex-col p-6">
                  <ul className="space-y-4 border-l-2 border-primary/30 mb-4 pl-4">
                    {data.map((item, index) => (
                      <li key={index} className="relative">
                        <div className="absolute -left-[18px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-background-secondary"></div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <div className="font-semibold text-sm text-foreground">
                              {item.title}
                            </div>
                            <span className="text-xs font-semibold text-primary">
                              {item.date}
                            </span>
                          </div>
                          <div className="text-xs text-foreground-muted">
                            {item.subtitle}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ButtonDownload />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
