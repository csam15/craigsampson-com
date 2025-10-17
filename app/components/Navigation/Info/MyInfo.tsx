import Logo from "../Logo";
import Headshot from "./Headshot";

export default function MyInfo() {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* <Headshot /> */}
      <Logo />
      <div className="space-y-1">
        <h2 className="!text-xl font-bold !tracking-normal">Craig Sampson</h2>
        <p className="text-gray-600 !text-lg whitespace-nowrap ">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
