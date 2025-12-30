import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  stacks: string[];
};

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  stacks,
}: ProjectCardProps) => {
  const teste = ["TypeScript", "React", "Next.js", "TailwindCSS"];

  return (
    <Card className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 max-w-lg">
      <CardHeader>
        <div className="w-full max-w-[500px]">
          <img
            src={image}
            alt={"Imagem " + title}
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-auto rounded-md"
          />
        </div>
        <CardHeader className="pl-0 lg:text-xl font-bold">{title}</CardHeader>
        <CardDescription className="lg:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="flex flex-row items-start w-full">
          <AnimatedTooltip
            items={stacks.map((item, index) => ({
              id: index,
              name: item,
              designation: "",
              image: `/icons/${item}.svg`,
            }))}
          />
        </div>
        <Link
          href={link}
          target="blank"
          className="flex items-center whitespace-nowrap text-primary text-sm"
        >
          Ver mais <ArrowUpRight className="ml-2 size-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
