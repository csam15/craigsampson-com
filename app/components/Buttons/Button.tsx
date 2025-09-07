import Image from "next/image";
import Link from "next/link";

interface PrimaryButtonProps {
  link: string;
  img?: string;
  label: string;
}

interface CardButtonProps {
  label: string;
  link: string;
}

export function PrimaryButton({
  link,
  img,
  label,
}: PrimaryButtonProps) {
  return (
    <a
      href={link}
      className={`font-space bg-secondary text-white hover:bg-secondary-blur px-4 py-2 lg:px-5 lg:py-3 rounded-xl active:scale-95 active:transition-none focus:ring-1 focus:ring-accent tracking-wide cursor-pointer text-md md:text-xl lg:text-2xl`}
    >
      {img ? (
        <Image src={img} alt={label} width={100} height={100} className="inline-block size-5 lg:size-8 mr-1.5" />
      ) : null}
      {label}
    </a>
  );
}

export function CardButton({ label, link }: CardButtonProps) {
  return (
    <Link href={link} className="whitespace-nowrap border rounded-xl text-md md:text-lg lg:text-xl text-center p-1 md:px-2 text-accent max-w-40 hover:bg-gradient-to-b hover:from-background hover:to-background-secondary">
      <span>{label}</span>
    </Link>
  );
}
