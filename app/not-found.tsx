import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./components/Buttons/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Craig Sampson",
  description: "The page you're looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="page-container items-center justify-center text-center">
      <div className="flex flex-col items-center gap-8">
        {/* 404 Large Display */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-8xl md:text-9xl font-bold text-primary">404</h1>
          <h2 className="text-secondary">Page Not Found</h2>
        </div>

        {/* Description */}
        <div className="max-w-md space-y-4">
          <p>
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <p className="text-sm">
            It might have been removed, had its name changed, or is temporarily
            unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <PrimaryButton link="/" label="Back to Home" />
          <SecondaryButton link="/projects" label="View Projects" />
        </div>

        {/* Helpful Links */}
        <div className="mt-8">
          <p className="text-sm mb-3 font-semibold">Try these pages instead:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/about"
              className="text-secondary hover:text-primary transition-colors"
            >
              About
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/services"
              className="text-secondary hover:text-primary transition-colors"
            >
              Services
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/projects"
              className="text-secondary hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
