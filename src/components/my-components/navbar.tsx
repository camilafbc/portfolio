"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" />
        <MenuItem setActive={setActive} active={active} item="Sobre" />
        <MenuItem setActive={setActive} active={active} item="Formação" />
        <MenuItem setActive={setActive} active={active} item="Stacks" />
        <MenuItem setActive={setActive} active={active} item="Projetos" />
      </Menu>
    </div>
  );
}
