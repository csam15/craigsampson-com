import Image from "next/image";
import Link from "next/link";

export default function HomeProjectsCard({
  image,
  title,
  tagline,
  slug,
  link,
  projectType,
}: {
  image: string;
  title: string;
  tagline?: string;
  types: Array<string>;
  slug?: string;
  link?: string;
  projectType: "web" | "calligraphy";
}) {
  const href =
    projectType === "web" ? link || "#" : `/projects/calligraphy/${slug}`;

  const isExternal = projectType === "web" && link;

  const className =
    "bg-background border w-full h-fit border-border gap-4 flex flex-col rounded-3xl px-2 pt-2 pb-6 button-click full-shadow shadow-black/30 dark:shadow-white/20";

  const content = (
    <>
      <Image
        src={image}
        alt={title}
        width={1200}
        height={400}
        className="rounded-2xl h-auto self-center w-full border border-border"
      />
      <div className="ml-2">
        <h2 className="!text-xl font-semibold">{title}</h2>
        {tagline && <p className="text-sm text-muted-foreground mt-1">{tagline}</p>}
      </div>
    </>
  );

  return isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
