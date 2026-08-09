import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Navigation/Header";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./components/ui/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://craigsampson.com"),
  title: "Craig Sampson",
  description: "CS",
  keywords: ["Craig Sampson"],
  authors: [{ name: "Craig Sampson" }],
  creator: "Craig Sampson",
  openGraph: {
    title: "Craig Sampson",
    description: "CS",
    url: "https://craigsampson.com",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Craig Sampson",
    description: "CS",
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://craigsampson.com",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-stack-sans-notch bg-background">
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
