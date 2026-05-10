import { IconCard } from "../IconCard";

type CardStackProps = {
  title: string;
  subtitle?: string;
  data: {
    name: string;
    icon: string;
  }[];
};

export const StacksLine = ({ data, title, subtitle }: CardStackProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto select-none">
      <div className="lg:text-2xl font-semibold mb-2 text-foreground text-xl text-center">
        {title}
      </div>

      {subtitle && (
        <div className="text-sm lg:text-sm text-center text-foreground-muted mb-6">
          {subtitle}
        </div>
      )}
      <hr className="mb-4 border-border" />
      <div className="flex flex-wrap gap-4 justify-center">
        {data.map((item, indice) => (
          <IconCard key={indice} icon={item.icon} title={item.name} />
        ))}
      </div>
    </div>
  );
};
