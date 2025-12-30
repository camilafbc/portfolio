"use client";

import { stacks } from "@/data/data";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";
import { StackCard } from "./StackCard";

export const Tech = () => {
  const data = stacks;

  return (
    <section
      id="stacks"
      className="py-20 flex flex-col items-center justify-center px-6 bg-background w-full min-h-dvh text-foreground"
    >
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space text-foreground">
            Tecnologias
          </h2>
          <p className="text-center mb-12 text-foreground-muted max-w-2xl mx-auto text-xs lg:text-lg">
            Tecnologias que utilizo e com as quais tenho familiaridade para o
            desenvolvimento de projetos web
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-12">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StackCard title="Front-end" data={data.frontend} />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StackCard title="Back-end e Banco de Dados" data={data.backend} />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <StackCard
              title="Outras"
              subtitle="Linguagens com as quais tive contato acadêmico e em projetos durante minha formação técnica e superior"
              data={data.others}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
