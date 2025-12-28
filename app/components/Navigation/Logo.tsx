import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src={"/Logo/Logo-black.svg"}
        alt="Craig Sampson Logo"
        priority
        width={0}
        height={0}
        className="size-18 dark:hidden"
      />
      <Image
        src={"/Logo/Logo-white.svg"} 
        alt="Craig Sampson Logo"
        priority
        width={0}
        height={0}
        className="size-18 hidden dark:block"
      />
    </>
  );
}
