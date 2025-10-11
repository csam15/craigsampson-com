import { PrimaryButton, SecondaryButton } from "./components/Buttons/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <PrimaryButton link="https://google.com" label="About Us"/>
        <SecondaryButton link="https://google.com" label="Our Services"/>
      </div>
    </div>
  );
}
