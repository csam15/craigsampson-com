import Image from "next/image";
import Link from "next/link";

export default function HomeProjectsCard({
  image,
  title,
  types,
  id,
}: {
  image: string;
  title: string;
  types: Array<string>;
  id: number;
}) {
  return (
    <Link
      href={"/projects/" + id}
      className="bg-background border w-full h-full border-border gap-4 flex flex-col rounded-3xl px-2 pt-2 pb-6 hover:scale-[1.005] "
    >
      <div className="bg-secondary/10 dark:bg-primary/20 flex justify-center rounded-2xl px-8 pt-12 overflow-hidden w-full h-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="object-cover -mb-4 self-center"
        />
      </div>
      <div>
        <h2 className="!text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center gap-2">
        {types.map((type, index) => (
          <div key={index} className="rounded-xl bg-primary/30 w-fit">
            <span className="text-sm font-semibold text-secondary px-3 py-1">
              {type}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
