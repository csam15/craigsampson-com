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
    <div className="flex flex-col items-start gap-4 border border-border rounded-3xl p-6 w-full bg-gradient-to-t from-secondary/30 via-secondary/25 to-secondary/20 dark:from-violet-800 dark:via-violet-900 dark:to-violet-950">
      <div className="text-black dark:text-white xl:pb-10">{icon}</div>
      <h1 className="!text-2xl !font-bold">{title}</h1>
      <p className="font-light">{description}</p>
    </div>
  );
}
