"use client";

import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [language, setLanguage] = useState("KZ");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  return (
    <nav className="w-full bg-gray-header text-black mx-auto relative z-10">
      <div className="px-3 xl:px-10 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Логотип */}
          <button className="flex-shrink-0 w-50 h-4">
            <a href="/">
              <img src="/img/logo1.png" alt="Logo" className="w-full h-full" />
            </a>
          </button>

          {/* Меню по центру */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-6">
              <a
                href="/#brand"
                className="rounded-md text-sm font-medium hover:underline"
              >
                О бренде
              </a>
              <a
                href="/#production"
                className="rounded-md text-sm font-medium hover:underline"
              >
                Продукция
              </a>
              <a
                href="/#adventages"
                className="rounded-md text-sm font-medium hover:underline"
              >
                Преймущества
              </a>
              <a
                href="/#opinion"
                className="rounded-md text-sm font-medium hover:underline"
              >
                Отзывы
              </a>
              <a
                href="/#contact"
                className="rounded-md text-sm font-medium hover:underline"
              >
                Контакты
              </a>
            </div>
          </div>

          {/* Переключение языка */}
          <div className="flex items-center space-x-2 text-green">
            <div className="flex-shrink-0 sm:mr-3">
              <Link href={"/basket"}>
                <Image
                  src="/basket.png"
                  width={8}
                  height={8}
                  alt="basket"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </Link>
            </div>

            <LanguageSwitcher />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute pb-60 md:hidden bg-white z-50">
          <div className="flex flex-row">
            <div className="px-10 py-12 space-y-1 sm:px-3 font-bold text-2xl leading-loose">
              <a
                href="#brand"
                className="block px-3 py-2 font-medium focus:underline"
                onClick={() => setIsOpen(false)}
              >
                О бренде
              </a>
              <a
                href="#production"
                className="block px-3 py-2 font-medium focus:underline"
                onClick={() => setIsOpen(false)}
              >
                Продукция
              </a>
              <a
                href="#adventages"
                className="block px-3 py-2 font-medium focus:underline"
                onClick={() => setIsOpen(false)}
              >
                Преймущества
              </a>
              <a
                href="#opinion"
                className="block px-3 py-2 font-medium focus:underline"
                onClick={() => setIsOpen(false)}
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 font-medium focus:underline"
                onClick={() => setIsOpen(false)}
              >
                Контакты
              </a>
            </div>
            <div className="mt-8 px-20 py-10">
              <button
                className="p-3 bg-[url('/img/close.svg')] bg-cover"
                onClick={() => setIsOpen(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
