"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, FolderGit2, Home, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { handleScroll } from "@/utils/utils";

const icons: Record<string, React.ReactNode> = {
  "#home": <Home className="size-5" />,
  "#sobre": <User className="size-5" />,
  "#aprendizado": <BookOpen className="size-5" />,
  "#projects": <FolderGit2 className="size-5" />,
  "#contact": <Mail className="size-5" />,
};

export const MobileNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  return (
    <nav
      aria-label="Navegação principal"
      className={cn(
        "fixed inset-x-4 bottom-4 z-[5000] flex items-center justify-around rounded-full border border-border bg-card/80 px-2 py-2 shadow-lg shadow-primary/10 backdrop-blur-md",
        className
      )}
    >
      {navItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          onClick={(e) => handleScroll(e, item.link)}
          aria-label={item.name}
          className="flex min-w-14 flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-foreground transition-colors hover:text-primary"
        >
          {icons[item.link]}
          <span className="text-[10px] leading-none">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};
