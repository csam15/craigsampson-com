export default function OpenToWork() {
  return (
    <div className="relative flex items-center font-bricolage gap-2 w-fit border border-gray-400/90 rounded-3xl py-2 px-3">
      <span className="absolute top-4 left-3 z-49 rounded-full p-1 bg-secondary/90"></span>
      <span className="absolute top-4 left-3 z-48 rounded-full p-1 bg-secondary animate-ping"></span>
      <h3 className="ml-5 text-primary font-semibold whitespace-nowrap">Open to new opportunities</h3>
    </div>
  );
}
