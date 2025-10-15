import {Mail, MapPin, Phone } from "lucide-react";

export default function Info() {
  return (
    <div className="w-full p-6 border border-border rounded-3xl">
      <div className="w-fit flex flex-col items-start justify-center gap-9">
        <div className="flex flex-col lg:flex-row gap-9 lg:gap-18">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Mail />
              <h2>Email</h2>
            </div>
            <div>
              <a href="mailto:craigsampson15@gmail.com">
                <p className="font-semibold">craigsampson15@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <Phone />
              <h2>Phone</h2>
            </div>
            <div>
              <p className="font-semibold">+1 (347) 609-5734</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <MapPin />
            <h2>Location</h2>
          </div>
          <div>
            <p className="font-semibold">New York, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
}
