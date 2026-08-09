import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src={"/Logo/Logo-black.svg"}
        alt="Craig Sampson Logo"
        priority
        width={270}
        height={443}
        className="size-24 dark:hidden"
      />
      <Image
        src={"/Logo/Logo-white.svg"}
        alt="Craig Sampson Logo"
        priority
        width={270}
        height={443}
        className="size-24 hidden dark:block"
      />
    </Link>
  );
}
