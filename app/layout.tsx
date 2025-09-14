import type { Metadata } from "next";
import { Bangers, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";

import Logo from "./components/Header/Logo";
import Header from "./components/Header/Header";
import Links from "./components/Header/Links";
import Footer from "./components/Footer/Footer";

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: "400",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
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
        className={`${bangers.variable} ${spaceGrotesk.variable} bg-background`}
      >
        <header className="grid grid-cols-3 md:grid-cols-[0.5fr_1fr_2fr_2fr] 2xl:grid-cols[0.3fr_0.75fr_2fr_2fr]">
          <div className="hidden md:flex justify-center items-center">
            <Links />
          </div>
          <div>
            <Logo />
          </div>
          <div className="col-span-2">
            <Header />
          </div>
        </header>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
