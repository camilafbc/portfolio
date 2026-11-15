import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { Project } from "@/data/projects-data";

type ProjectCardProps = Project;

const actionClass =
  "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition-colors";

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  demo,
  stacks,
}: ProjectCardProps) => {
  return (
    <Card className="group flex h-full max-w-md flex-col transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="flex-1">
        <div className="w-full max-w-[450px]">
          {image ? (
            <img
              src={image}
              alt={"Imagem " + title}
              width={0}
              height={0}
              sizes="100vh"
              className="h-[200px] w-full rounded-md object-cover"
            />
          ) : (
            <div
              className="flex h-[200px] w-full items-center justify-center rounded-md border border-dashed border-border bg-muted/30"
              aria-hidden
            >
              <FolderGit2 className="size-10 text-primary/40" />
            </div>
          )}
        </div>
        <CardHeader className="pb-2 pl-0 text-lg font-bold lg:text-xl">
          {title}
        </CardHeader>
        <CardDescription className="min-h-[100px] text-justify lg:text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex w-full flex-row items-start">
          <AnimatedTooltip
            items={stacks.map((item, index) => ({
              id: index,
              name: item,
              designation: "",
              image: `/icons/${item}.svg`,
            }))}
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClass} bg-primary text-primary-foreground hover:bg-primary/90`}
            >
              <ExternalLink className="size-4" />
              Demo
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClass} border border-border text-foreground hover:border-primary/50 hover:text-primary`}
          >
            <FolderGit2 className="size-4" />
            Código
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
