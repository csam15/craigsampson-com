import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

import Header from "./components/Navigation/Header";
import Footer from "./components/Footer/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Craig Sampson - Full Stack Developer | Electronics Repair | Calligraphy Artist",
  description: "Craig Sampson | Full Stack Developer & Creative Professional",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} bg-background`}
      >
        <div className="xl:grid xl:grid-cols-[280px_1fr]">
          {" "}
          {/* 280px = ml-70 equivalent */}
          <header className="xl:col-start-1 xl:row-span-2">
            <Header />
          </header>
          <main className="py-12 px-6 xl:pt-36 xl:col-start-2 max-w-[60rem] mx-auto">{children}</main>
          <footer className="xl:col-start-2">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
