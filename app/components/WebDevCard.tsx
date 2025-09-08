import Image from "next/image";

interface WebDevCardProps {
  title: string;
  description: string;
  image: readonly [string, number, number];
  link: string;
}

export default function WebDevCard({
  title,
  description,
  image,
  link,
}: WebDevCardProps) {
  return (
    <div className="py-4 transition-transform duration-800 hover:scale-[1.1] hover:rounded-b-xl">
      <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={image[0]}
        alt={title}
        width={image[1]}
        height={image[2]}
        className="h-60 w-80 sm:w-90 cursor-pointer border-t-2 border-x-2 border-black rounded-t-xl bg-background-secondary"
      /></a>
      <div className="flex flex-col justify-between items-center bg-background-secondary border-b-2 border-x-2 border-t-1 border-black rounded-b-xl py-8 w-80 sm:w-90 h-50">
        <h1 className="text-2xl font-space mb-2 text-white">{title}</h1>
        <p className="text-lg text-center px-8 my-auto font-outfit">{description}</p>
      </div>
    </div>
  );
}
