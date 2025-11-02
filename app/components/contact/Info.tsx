import { Mail, MapPin, Phone } from "lucide-react";

export default function Info() {
  return (
    <div className="w-full p-6 border border-border rounded-3xl info-page">
      <div className="w-fit flex flex-col items-start justify-center gap-9">
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-18">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Mail />
              <h3>Email</h3>
            </div>
            <div>
              <a href="mailto:craigsampson15@gmail.com">
                <p className="font-light hover:text-secondary">
                  craigsampson15@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Phone />
              <h3>Phone</h3>
            </div>
            <div>
              <p className="font-light">+1 (347) 609-5734</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <MapPin />
            <h3>Location</h3>
          </div>
          <div>
            <p className="font-light">New York, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
}
