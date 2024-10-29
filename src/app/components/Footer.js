import Image from "next/image";
import React from "react";

const Footer = ({ t }) => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="w-full bg-green text-white text-sm">
        <div className="grid grid-cols-2 px-5 sm:px-20 lg:px-40 py-16">
          <div className="flex flex-col">
            <div className="w-[190px] h-[30px] m-1">
              <Image
                src={"/img/logo-white.png"}
                width={100}
                height={100}
                alt="Logo Alma le"
                className="px-5 sm:px-0 w-full h-auto object-cover"
              />
            </div>
            <p className="w-72">{t.footer.head}</p>
          </div>
          <div className="w-full">
            <div className="flex flex-col items-end pt-6">
              <a
                href="https://www.instagram.com/almale_com?igsh=MWU2b2h0dWoxdnhrcQ=="
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                Instagram
              </a>
              <a
                href="/"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                Facebook
              </a>
              <a
                href="https://youtube.com/@alma_le?si=3T04RCUBdC5RdP0P"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                Youtube
              </a>
              <a
                href="/"
                className="hover:bg-white hover:text-green-light py-2 sm:py-0"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
