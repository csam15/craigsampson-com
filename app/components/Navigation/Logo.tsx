import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src={"/Logo/CSLogoB.png"}
        alt="Craig Sampson Logo"
        priority
        width={563}
        height={563}
        className="size-20 dark:hidden"
      />
      <Image
        src={"/Logo/CSLogo.png"} 
        alt="Craig Sampson Logo"
        priority
        width={563}
        height={563}
        className="size-20 hidden dark:block"
      />
    </>
  );
}
