import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center mt-2 md:mt-4 ml-4 md:ml-0">
      <Link href="/" className="cursor-pointer">
        <Image src="/Logo.svg" alt="Logo" width={100} height={100} className="h-24 md:h-28 lg:h-36 2xl:h-48 w-auto"/>
      </Link>
    </div>
  );
}