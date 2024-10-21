import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-green text-white text-sm">
      <div className="grid grid-cols-2 px-5 sm:px-20 lg:px-40 py-16">
        <div className="flex flex-col">
          <div className="w-[190px] h-4 m-1">
            <img src="/img/logo-white.png" alt="Alma-le" />
          </div>
          <div className="w-72 mt-2">
            Безопасная высококачественная посуда, созданная для профессионалов и
            домашних кулинаров
          </div>
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
  );
};

export default Footer;
