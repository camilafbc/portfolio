import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full p-6 text-sm bg-background-secondary text-foreground-muted text-center border-t-2 border-border">
      — feito com 💜 e{" "}
      <Link
        href={"https://github.com/camilafbc/portfolio"}
        rel="noreferrer noopener"
        target="_blank"
        className="font-semibold text-primary/70 cursor-pointer hover:text-primary"
      >
        código
      </Link>{" "}
      —
    </footer>
  );
};
