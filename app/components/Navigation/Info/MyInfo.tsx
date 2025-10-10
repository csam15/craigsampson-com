import Headshot from "./Headshot";

export default function MyInfo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Headshot />
      <div className="space-y-1">
        <h1>Craig Sampson</h1>
        <h2 className="text-gray-600">Full Stack Developer</h2>
      </div>
    </div>
  );
}
