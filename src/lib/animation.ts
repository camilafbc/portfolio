import { Variants } from "motion/react";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0
): Variants => {
  const offset = 40;

  const axis = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: -offset },
    right: { x: offset },
  };

  return {
    hidden: {
      opacity: 0,
      ...axis[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};
