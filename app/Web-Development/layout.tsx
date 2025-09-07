import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Craig Sampson - Full Stack Developer | Electronics Repair | Calligraphy Artist",
  description: "Craig Sampson | Full Stack Developer & Creative Professional",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main>{children}</main>
  );
}