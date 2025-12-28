import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  link: string
) => {
  e.preventDefault();
  document
    .getElementById(link.startsWith("#") ? link.substring(1) : link)
    ?.scrollIntoView({ behavior: "smooth" });
};
