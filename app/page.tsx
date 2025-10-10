import Sidebar from "./components/Navigation/Sidebar";
import MyInfo from "./components/Navigation/Info/MyInfo";
import Header from "./components/Navigation/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <Header />
      </div>
    </div>
  );
}
