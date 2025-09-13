import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center mt-4 ml-4">
      <Image src="/Logo.svg" alt="Logo" width={100} height={100} className="h-24 w-auto"/>
    </div>
  );
}