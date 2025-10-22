import ContactForm from "../components/contact/ContactForm";
import Info from "../components/contact/Info";
import Socials from "../components/ui/homepage/Socials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Craig Sampson - Let's Work Together",
  description: "Get in touch with Craig Sampson for web development projects, electronics repair, or custom calligraphy work. Send a message to discuss your project needs.",
  openGraph: {
    title: "Contact Craig Sampson - Let's Work Together",
    description: "Get in touch with Craig Sampson for web development projects, electronics repair, or custom calligraphy work.",
    url: "https://craigsampson.com/contact",
    siteName: "Craig Sampson",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Craig Sampson - Let's Work Together",
    description: "Get in touch with Craig Sampson for web development projects, electronics repair, or custom calligraphy work.",
  },
  alternates: {
    canonical: "https://craigsampson.com/contact",
  },
};

export default function Contact() {
  return (
    <div className="page-container">
      <div className="">
        <h1>Let&apos;s Work Together!</h1>
        <p>Send me a quick message with your inquiry</p>
      </div>
      <div className="w-full flex flex-col gap-9">
        <ContactForm />
        <div className="w-full flex flex-col lg:flex-row gap-9">
          <Info />
          <div className="flex flex-col gap-3">
            <h2>Follow me</h2>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
