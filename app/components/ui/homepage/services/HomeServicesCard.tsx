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
      <div className="flex flex-col items-start gap-4 border border-border rounded-3xl p-6 w-full bg-secondary/10 dark:bg-primary/20 hover:scale-[1.005]">
        <div className="text-secondary xl:pb-10">{icon}</div>
        <h1 className="!text-2xl !font-bold">{title}</h1>
        <p className="font-light">{description}</p>
      </div>
    </a>
  );
}
