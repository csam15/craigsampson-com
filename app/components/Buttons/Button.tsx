import Image from "next/image";

interface PrimaryButtonProps {
  link: string;
  img?: string;
  label: string;
}

export default function PrimaryButton({
  link,
  img,
  label,
}: PrimaryButtonProps) {
  return (
    <a
      href={link}
      className={`font-space bg-secondary text-white hover:bg-secondary-blur px-3 py-2 lg:px-4 lg:py-3 rounded-xl  active:scale-95 active:transition-none focus:ring-1 focus:ring-accent tracking-wide cursor-pointer text-md md:text-xl lg:text-2xl`}
    >
      {img ? (
        <Image src={img} alt={label} width={100} height={100} className="inline-block size-5 lg:size-8 mr-1.5" />
      ) : null}
      {label}
    </a>
  );
}
