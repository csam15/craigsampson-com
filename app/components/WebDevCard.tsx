import { PrimaryButton } from "./Buttons/Button";

interface WebDevCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function WebDevCard({ title, description, tech, link }: WebDevCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-background-secondary border border-secondary rounded-xl p-4">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base lg:text-lg border-1 border-secondary rounded-xl p-3 text-white text-center">{description}</p>
      <div className="flex justify-center items-center gap-4">
        <ul className="list-none border-1 border-secondary rounded-xl p-3 text-center text-white">
            <h3 className="text-2xl font-bold text-primary">Tech</h3>
          {tech.map((t, index) => (
              <li key={index} >
                  <p>{t}</p>
              </li>
          ))} 
        </ul>
        <PrimaryButton link={link} label="View Project" />
      </div>
    </div>
  );
}
