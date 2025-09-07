import ServiceCard from "./ServiceCard";
import dev from "../../../public/services/dev.png";
import electronics from "../../../public/services/electronics.png";
import calligraphy from "../../../public/services/calligraphy.png";

const services = {
  webdev: {
    icon: dev,
    title: "Web Development",
    description: "Building responsive and functional websites.",
    link: "/Web-Development",
    button: "Projects",
  },
  electronics: {
    icon: electronics,
    title: "Electronics Repair",
    description: "Fixing and troubleshooting all types of devices.",
    link: "/electronics",
    button: "Learn More",
  },
  calligraphy: {
    icon: calligraphy,
    title: "Calligraphy",
    description: "Creating beautiful handwritten designs.",
    link: "/calligraphy",
    button: "See My Work",
  },
};

export default function Services() {
  return (
    <div
      id="services"
      className="scroll-mt-18 lg:scroll-mt-23 font-space text-primary h-auto section-effect"
    >
      <h1 className="uppercase text-4xl md:text-5xl text-center pb-4 lg:pb-8">
        services & solutions
      </h1>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
        <ServiceCard
          icon={services.webdev.icon}
          title={services.webdev.title}
          description={services.webdev.description}
          link={services.webdev.link}
          button={services.webdev.button}
        />
        <ServiceCard
          icon={services.electronics.icon}
          title={services.electronics.title}
          description={services.electronics.description}
          link={services.electronics.link}
          button={services.electronics.button}
        />
        <ServiceCard
          icon={services.calligraphy.icon}
          title={services.calligraphy.title}
          description={services.calligraphy.description}
          link={services.calligraphy.link}
          button={services.calligraphy.button}
        />
      </div>
    </div>
  );
}