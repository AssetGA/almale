import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("KZ");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    // Логика смены языка может быть добавлена здесь, например через i18n
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className={`inline-flex justify-center w-full px-2 sm:px-4 py-2 text-sm font-medium text-white bg-green rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        {selectedLanguage}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-14 mt-2 origin-top-right bg-white border divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-60">
          <div className="py-1">
            <button
              onClick={() => changeLanguage("KZ")}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-light hover:text-white"
            >
              KZ
            </button>
            <button
              onClick={() => changeLanguage("RU")}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-light hover:text-white"
            >
              RU
            </button>
            <button
              onClick={() => changeLanguage("EN")}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-light hover:text-white"
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
