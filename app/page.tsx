import Hero from "./components/Hero";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-secondary to-indigo-300 py-6">
      <Hero />
      <Services />
    </div>
  );
}  