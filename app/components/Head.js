import React from "react";
import Image from "next/image";
import header1 from "../../public/img/Layer15.svg";
import header2 from "../../public/img/Layer14.svg";

const Head = () => {
  return (
    <>
      <div className="w-full bg-[url('/img/main2.png')] sm:bg-[url('/img/главная.jpg')] bg-cover sm:bg-contain bg-no-repeat sm:bg-right flex flex-col sm:flex-row relative">
        <div className="bg-[url('/img/Layer6.svg')] bg-contain bg-no-repeat px-12 py-12 sm:hidden -translate-y-16">
          .
        </div>
        <div className="w-full">
          <div className="w-full h-full bg-no-repeat left-0 sm:top-0 bg-[url('/img/Layer5.svg')] sm:bg-[url('/img/Layer14.svg')] bg-cover sm:bg-contain translate-y-60 sm:translate-y-0">
            <div className="flex flex-col text-white px-10 py-[44px] sm:py-[44px] lg:pl-[70px] md:py-[85px] lg:py-[130px] xl:pl-[180px] xl:py-[130px]">
              <h1 className="font-bold text-lg">
                Alma-Le - Семейные ценности <br /> и профессиональная посуда
                <br /> на вашей кухне
              </h1>
              <p className="pt-3 text-sm">
                Безопасная и высококачественная посуда, <br /> созданная для
                профессионалов <br /> и домашних кулинаров
              </p>
              <button className="w-[270px] md:w-72 bg-gray-header rounded-md text-black text-sm font-bold mt-10 py-2 px-2">
                Ознакомиться с ассортиментом
              </button>
            </div>
          </div>
        </div>
        <div className="w-0 lg:w-[250px] h-full flex flex-row pt-0 md:pt-20 xl:pt-32">
          <div className="w-full h-full right-0 bottom-0 bg-no-repeat bg-[url('/img/Layer15.svg')] bg-contain">
            <div className="py-[100px] md:py-[150px] lg:py-[210px] xl:py-[220px]">
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
