export default function Footer() {
  return (
    <footer className="text-gray-800 py-4 border-t font-outfit">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-lg lg:text-xl">
          &copy; {new Date().getFullYear()} Craig Sampson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}