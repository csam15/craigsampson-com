import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeServicesCard({
  icon,
  title,
  description,
  service,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  service: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 rounded-3xl p-6 w-full bg-bg full-shadow shadow-black/30 dark:shadow-white/20">
      <div className="text-secondary dark:text-white xl:pb-10">{icon}</div>
      <h3 className="">{title}</h3>
      <p className="font-light">{description}</p>
    </div>
  );
}
