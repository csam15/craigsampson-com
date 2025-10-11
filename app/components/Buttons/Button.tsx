import Image from "next/image";

interface ButtonProps {
  link: string;
  img?: string;
  label: string;
}

export function PrimaryButton({ link, img, label }: ButtonProps) {
  return (
    <a href={link} className="primary-button">
      {img ? (
        <Image
          src={img}
          alt={label}
          width={100}
          height={100}
          className="inline-block size-5 lg:size-8 mr-1.5"
        />
      ) : null}
      {label}
    </a>
  );
}

export function SecondaryButton({ link, img, label }: ButtonProps) {
  return (
    <a href={link} className="secondary-button">
      {img ? (
        <Image
          src={img}
          alt={label}
          width={100}
          height={100}
          className="inline-block size-5 lg:size-8 mr-1.5"
        />
      ) : null}
      {label}
    </a>
  );
}
