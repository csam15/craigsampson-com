import ContactForm from "../components/contact/ContactForm";
import Info from "../components/contact/Info";
import Socials from "../components/ui/homepage/Socials";

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
