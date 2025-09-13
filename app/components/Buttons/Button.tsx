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
      className=""
    >
      {img ? (
        <Image src={img} alt={label} width={100} height={100} className="inline-block size-5 lg:size-8 mr-1.5" />
      ) : null}
      {label}
    </a>
  );
}
