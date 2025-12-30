interface IconCardProps {
  icon: string;
  title: string;
}

export const IconCard = ({ icon, title }: IconCardProps) => {
  return (
    <div className="group p-6 flex flex-col justify-center items-center gap-3 border border-border rounded-lg shadow-md bg-card hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 h-28 w-20 lg:h-32 lg:w-24">
      <div className="transition-transform duration-300 group-hover:scale-110">
        <img
          src={icon}
          alt={title}
          // width={60}
          // height={60}
          className="object-contain size-8 md:size-14"
        />
      </div>
      <p className="text-xs md:text-sm text-foreground font-medium text-center">
        {title}
      </p>
    </div>
  );
};
