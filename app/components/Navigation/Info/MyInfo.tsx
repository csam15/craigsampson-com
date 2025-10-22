import Logo from "../Logo";

export default function MyInfo() {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* <Headshot /> */}
      <Logo />
      <div className="">
        <h2 className="!text-xl font-bold !tracking-normal !font-fira">
          Craig Sampson
        </h2>
        <p className="text-gray-600 !text-lg whitespace-nowrap ">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
