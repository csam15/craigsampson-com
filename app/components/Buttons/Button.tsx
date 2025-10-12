import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  link: string;
  img?: string;
  label: string;
}

export function PrimaryButton({ link, img, label }: ButtonProps) {
  return (
    <div className="flex items-center w-fit primary-button group">
      <a href={link} className="flex items-center">
        {img ? (
          <Image
            src={img}
            alt={label}
            width={100}
            height={100}
            className="inline-block size-5 lg:size-8 mr-1.5 "
          />
        ) : null}
        {label}
      </a>
      <ArrowUpRight className="arrow-up-right" />
    </div>
  );
}

export function SecondaryButton({ link, img, label }: ButtonProps) {
  return (
    <div className="flex items-center w-fit secondary-button group">
      <a href={link} className="flex items-center">
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
      <ArrowUpRight className="arrow-up-right" />
    </div>
  );
}
