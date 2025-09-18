"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import image1 from "../../../public/Logo-images/3.svg";
import image2 from "../../../public/Logo-images/4.svg";
import image3 from "../../../public/Logo-images/5.svg";
import image4 from "../../../public/Logo-images/6.svg";
import image5 from "../../../public/Logo-images/7.svg";
import image6 from "../../../public/Logo-images/8.svg";
import image7 from "../../../public/Logo-images/9.svg";

export default function Logo() {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const images = [image1, image2, image3, image4, image5, image6, image7];

  // Change image every 3 seconds
  const changeImage = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 1000);
  };

  return (
    <>
      <div className="flex items-center mt-4 ">
        <Link
          href="/"
          className="cursor-pointer relative overflow-hidden"
          onMouseEnter={changeImage}
          onMouseLeave={() => {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
          }}
        >
          <Image
            src={images[currentImage]}
            alt="Logo"
            width={117}
            height={128}
            priority
            className="scale-100 w-auto transition-all duration-300 ease-in-out"
          />
        </Link>
      </div>
    </>
  );
}
