import { PrimaryButton } from "../../Buttons/Button";
import Image from "next/image";

export default function HomeContact() {
  return (
    <div className="w-full h-fit border border-border bg bg-secondary/10 dark:bg-primary/20 p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-4">
          <h3>Want to discuss an opportunity?</h3>
          <h1 className="font-bold max-w-lg">
            I&apos;m open to new projects and roles.
          </h1>
          <PrimaryButton label="Let&apos;s Talk" link="/contact" />
        </div>
        <Image
          src={"/question.svg"}
          alt="question mark"
          width={100}
          height={100}
          className="size-90 md:self-end"
        />
      </div>
    </div>
  );
}
