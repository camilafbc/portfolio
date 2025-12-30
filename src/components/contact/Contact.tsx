"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/lib/animation";
import Link from "next/link";
import { IconCard } from "../IconCard";
import { contactLinks } from "@/data/data";

export const Contact = () => {
  const contactList = contactLinks;

  return (
    <section
      id="contact"
      className="py-20 w-full min-h-dvh flex items-center px-6 bg-background-secondary"
    >
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-space text-foreground">
            Contato
          </h2>
          <p className="text-center mb-12 text-foreground-muted max-w-2xl mx-auto text-xs lg:text-lg">
            Vamos conversar! Entre em contato através das redes sociais ou
            e-mail
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6 max-w-4xl mx-auto">
          {contactList.map((link, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <IconCard key={index} icon={link.icon} title={link.name} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
