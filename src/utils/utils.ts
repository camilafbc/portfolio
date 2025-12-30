export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  link: string
) => {
  e.preventDefault();
  document
    .getElementById(link.startsWith("#") ? link.substring(1) : link)
    ?.scrollIntoView({ behavior: "smooth" });
};
