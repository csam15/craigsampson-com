import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  link: string;
  label: string;
}

export function PrimaryButton({ link, label }: ButtonProps) {
  return (
    <Link
      href={link}
      title={label}
      className="flex items-center w-fit h-fit primary-button group"
    >
      {label}
      <ArrowUpRight className="arrow-up-right" />
    </Link>
  );
}

export function SecondaryButton({ link, label }: ButtonProps) {
  return (
    <Link
      href={link}
      title={label}
      className="flex items-center w-fit h-fit secondary-button group"
    >
      {label}
      <ArrowUpRight className="arrow-up-right" />
    </Link>
  );
}
