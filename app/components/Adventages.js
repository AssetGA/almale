import Image from "next/image";
import React from "react";
import object1 from "../../public/img/object1.svg";
import object2 from "../../public/img/object2.svg";
import object3 from "../../public/img/object3.svg";

const Adventages = () => {
  return (
    <div id="adventages" className="w-full">
      <div className="flex flex-col py-20">
        <p
          className="text-center font-bold text-xl"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          Преймущества
        </p>
        <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-5 md:gap-20 w-auto xl:px-40 py-20 px-5 sm:px-0">
          <div className="flex flex-col items-center ">
            <Image
              src={object1}
              className="px-5 sm:px-0 w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">
              Ручки не нагреваются, а равномерное распределение тепла помогает
              готовить быстрее
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <Image
              src={object2}
              className="px-5 sm:px-0 w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">
              Наша посуда не соджержит вредных веществ
            </p>
          </div>

          <div className="flex flex-col items-center ">
            <Image
              src={object3}
              className="px-5 sm:px-0 w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">
              Медь, алюминий и нержавеющая сталь лудшие материалы для
              приготовления
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventages;
