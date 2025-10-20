import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src={"/Logo/CSLogoB.PNG"}
        alt="Craig Sampson Logo"
        priority
        width={563}
        height={563}
        className="size-20 dark:hidden"
      />
      <Image
        src={"/Logo/CSLogo.PNG"} // Your white/light version
        alt="Craig Sampson Logo"
        priority
        width={563}
        height={563}
        className="size-20 hidden dark:block"
      />
    </>
  );
}
