"use client";

import { projectsData } from "@/data/data";
import { ProjectCard } from "./components/ProjectCard";
import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";

export const Projects = () => {
  const projects = projectsData;

  return (
    <section
      id="projects"
      className="py-20 flex flex-col items-center px-6 bg-background-tertiary w-full min-h-dvh text-foreground"
    >
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space text-foreground">
            Projetos
          </h2>
          <p className="mb-8 text-foreground-muted max-w-2xl text-center text-sm lg:text-lg mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades
            e experiência em desenvolvimento web
          </p>
        </motion.div>
        <div className="flex  items-center justify-center flex-wrap gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
                stacks={item.stacks}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
