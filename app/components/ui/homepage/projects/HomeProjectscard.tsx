import Image from "next/image";
import Link from "next/link";

export default function HomeProjectsCard({
  image,
  title,
  types,
  slug,
  projectType,
}: {
  image: string;
  title: string;
  types: Array<string>;
  slug: string;
  projectType: "web" | "calligraphy";
}) {
  const href =
    projectType === "web"
      ? `/projects/Web-development/${slug}`
      : `/projects/calligraphy/${slug}`;

  return (
    <Link
      href={href}
      className="bg-background border w-full h-full border-border gap-4 flex flex-col rounded-3xl px-2 pt-2 pb-6 button-click "
    >
      <Image
        src={image}
        alt={title}
        width={1200}
        height={400}
        className="rounded-2xl h-auto self-center w-full"
      />
      {/* </div> */}
      <div>
        <h2 className="!text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        {types.map((type, index) => (
          <div key={index} className="rounded-xl bg-primary/30 w-fit">
            <span className="whitespace-nowrap text-sm font-semibold text-secondary px-3 py-1">
              {type}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
