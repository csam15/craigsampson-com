import type { Metadata } from "next";
import { Bricolage_Grotesque, Fira_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Navigation/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./components/ui/ThemeToggle";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const fira_mono = Fira_Mono({
  subsets: ["latin"],
  variable: "--",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craigsampson.com"),
  title:
    "Craig Sampson - Full Stack Developer | Electronics Repair | Calligraphy Artist",
  description:
    "Craig Sampson is a full stack developer specializing in React, Next.js, and TypeScript. Also offering electronics repair and custom calligraphy services.",
  keywords: [
    "full stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "electronics repair",
    "calligraphy",
    "Craig Sampson",
  ],
  authors: [{ name: "Craig Sampson" }],
  creator: "Craig Sampson",
  openGraph: {
    title: "Craig Sampson - Full Stack Developer & Creative Professional",
    description:
      "Full stack developer specializing in React, Next.js, and TypeScript. Also offering electronics repair and custom calligraphy services.",
    url: "https://craigsampson.com",
    siteName: "Craig Sampson",
    images: [
      {
        url: "https://craigsampson.com/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Craig Sampson",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craig Sampson - Full Stack Developer & Creative Professional",
    description:
      "Full stack developer specializing in React, Next.js, and TypeScript.",
    images: ["https://craigsampson.com/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://craigsampson.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${fira_mono.variable} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="xl:grid xl:grid-cols-[280px_1fr]">
            {" "}
            {/* 280px = ml-70 equivalent */}
            <header className="xl:col-start-1 xl:row-span-2">
              <Header />
            </header>
            <main className="py-12 px-6 2xl:px-0 xl:pt-36 xl:col-start-2 max-w-[70rem] mx-auto">
              <div className="hidden xl:block fixed top-5 right-5">
                <ThemeToggle />
              </div>
              {children}
            </main>
            <footer className="xl:col-start-2">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
