export default function HomeServicesCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <a href="/services" className="cursor-pointer">
      <div className="flex flex-col items-start gap-4 border border-gray-300 rounded-3xl p-6 w-full  bg-secondary/10 hover:scale-[1.02] transition duration-300 ease-in-out">
        <div className="text-secondary xl:pb-10">{icon}</div>
        <h1 className="!text-2xl !font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}
