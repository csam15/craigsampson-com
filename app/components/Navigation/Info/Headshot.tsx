import Image from "next/image";

export default function Headshot() {
  return (
    <div className="flex items-center justify-center rounded-full bg-primary p-3 size-16 overflow-hidden">
      <Image
        src="/headshot.svg"
        alt="My Headshot"
        width={359}
        height={498}
        className=" size-18 object-cover"
      />
    </div>
  );
}
