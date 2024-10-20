import Image from "next/image";
import React from "react";
import object1 from "../../public/img/object1.svg";
import object2 from "../../public/img/object2.svg";
import object3 from "../../public/img/object3.svg";

const Values = () => {
  return (
    <div className="w-full" id="brand">
      <div className="flex flex-col py-20">
        <p className="text-center font-bold text-xl">Ценности бренда</p>
        <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-5 lg:gap-20 w-auto xl:px-40 sm:py-20">
          <div className="flex flex-col items-center p-2">
            <Image
              src={object1}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">
              Мы создали Alma Le вдохновившись теплыми семейными моментами на
              кухне
            </p>
          </div>
          <div className="flex flex-col items-center p-2">
            <Image
              src={object2}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">
              Наша посуда не содержит вредных веществ и помогает готовить
              здоровую еду
            </p>
          </div>

          <div className="flex flex-col items-center p-2">
            <Image
              src={object3}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">
              Мы создали Alma Le вдохновившись теплыми семейными моментами на
              кухне
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
