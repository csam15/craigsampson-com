import Image from "next/image";

export default function Logo() {
  return (
    // <div className="bg-primary rounded-full">
      <Image
        src={"/Logo/CSLogoB.PNG"}
        alt="Craig Sampson Logo"
        width={563}
        height={563}
        className="size-20"
      />
    // </div>
  );
}
