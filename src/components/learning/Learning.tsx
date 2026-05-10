"use client";

import { learning } from "@/data/learning-data";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";
import { ArrowUpRight, ScrollText, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export const Learning = () => {
  const entries = learning;

  return (
    <section
      id="aprendizado"
      className="py-20 flex flex-col items-center justify-center px-6 bg-background-secondary w-full min-h-dvh text-foreground"
    >
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space text-foreground">
            Aprendizado
          </h2>
          <p className="text-center mb-12 text-foreground-muted max-w-2xl mx-auto text-sm lg:text-lg">
            Registro contínuo do que venho estudando e aplicando ao longo do
            tempo
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.35)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-card shadow-lg shadow-primary/5 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3.5 md:px-6">
              <ScrollText
                className="size-4 shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Changelog
              </span>
              <span className="text-xs text-foreground-muted">
                atualizações de estudo e prática
              </span>
            </div>

            <div
              role="region"
              aria-label="Lista de entradas de aprendizado"
              className="max-h-[min(55vh,28rem)] overflow-y-auto overscroll-y-contain px-5 py-5 md:px-6 md:py-6
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted/40
                [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/30
                hover:[&::-webkit-scrollbar-thumb]:bg-primary/45"
            >
              <ul className="space-y-0">
                {entries.map((item, index) => (
                  <li key={`${item.date}-${item.title}-${index}`}>
                    <article className="relative border-l-2 border-primary/25 pb-10 pl-5 last:pb-0 md:pl-6">
                      <div
                        className="absolute top-2 -left-[5px] size-2.5 rounded-full border-2 border-background-secondary bg-primary"
                        aria-hidden
                      />

                      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4">
                        <time className="shrink-0 text-xs font-bold uppercase tracking-wider text-primary tabular-nums">
                          {item.date}
                        </time>
                        <h3 className="text-base md:text-md font-semibold leading-snug text-foreground">
                          {item.title}
                        </h3>
                        {item.link && (
                          <Link
                            href={item.link}
                            target="blank"
                            rel="noopener noreferrer"
                            className="-ml-1.5"
                          >
                            <SquareArrowOutUpRight className="size-3 text-primary" />
                          </Link>
                        )}
                      </div>
                      <p className="pb-2 max-w-none text-sm leading-relaxed text-foreground-muted">
                        {item.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
