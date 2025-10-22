"use client";

import { PrimaryButton, SecondaryButton } from "./components/Buttons/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-container items-center justify-center text-center">
      <div className="flex flex-col items-center gap-8">
        {/* Error Icon/Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-6xl md:text-7xl">⚠️</div>
          <h1 className="text-primary">Something Went Wrong</h1>
          <h2 className="text-secondary">An unexpected error occurred</h2>
        </div>

        {/* Description */}
        <div className="max-w-md space-y-4">
          <p>
            We&apos;re sorry, but something didn&apos;t work as expected. This
            issue has been logged and we&apos;ll look into it.
          </p>
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-left">
              <p className="text-sm font-mono text-red-800 dark:text-red-200 break-words">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={reset}
            className="primary-button"
            aria-label="Try again"
          >
            Try Again
          </button>
          <SecondaryButton link="/" label="Back to Home" />
        </div>

        {/* Helpful Text */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            If this problem persists, please{" "}
            <a
              href="/contact"
              className="text-secondary hover:text-primary transition-colors underline"
            >
              contact me
            </a>{" "}
            and let me know what happened.
          </p>
        </div>
      </div>
    </div>
  );
}
