import ProjectSelector from './components/ProjectSelector';
// import ProjectDisplay from './components/ProjectDisplay';

export default function Home() {
  return (
    <div className="mt-16 px-6 flex flex-col justify-center items-start sm:items-end">
      <h2 className="text-base lg:text-lg 2xl:text-xl font-space mb-4 w-fit px-2 text-center rounded-xl border-1 border-background-secondary">Choose a portfolio to view:</h2>
      <ProjectSelector />
    </div>
  );
}  