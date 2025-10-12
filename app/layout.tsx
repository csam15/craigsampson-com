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
        <header>
          <Header />
        </header>
        <main className="pt-12 xl:pl-70 px-6 xl:px-0 xl:">{children}</main>
        <footer className="xl:ml-70">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
