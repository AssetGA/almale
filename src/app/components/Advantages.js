import Image from "next/image";
import React from "react";
import { getDictionary } from "../[lang]/dictionaries";

const Advantages = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div id="adventages" className="w-full">
      <div className="flex flex-col py-20 md:px-5">
        <h2
          className="text-center font-bold text-xl"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.advantages.head}
        </h2>
        <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-5 md:gap-20 w-auto xl:px-40 py-20 px-5 sm:px-0">
          <div className="flex flex-col items-center ">
            <Image
              src={"img/object1.svg"}
              className="px-5 sm:px-0 w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">{t.advantages.one}</p>
          </div>
          <div className="flex flex-col items-center ">
            <Image
              src={"img/object2.svg"}
              className="px-5 sm:px-0 w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">{t.advantages.two}</p>
          </div>

          <div className="flex flex-col items-center ">
            <Image
              src={"img/object3.svg"}
              className="px-5 sm:px-0 w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">{t.advantages.three}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
