import Image from "next/image";
import { getDictionary } from "../[lang]/dictionaries";

const Values = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div className="w-full" id="brand">
      <div className="flex flex-col py-20">
        <p
          className="text-center font-bold text-xl"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.brand.head}
        </p>
        <div className="grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-5 lg:gap-20 w-auto xl:px-40 sm:py-20 px-5 sm:px-0">
          <div className="flex flex-col items-center p-2">
            <Image
              src={"img/object1.svg"}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">{t.brand.one}</p>
          </div>
          <div className="flex flex-col items-center p-2">
            <Image
              src={"img/object2.svg"}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">{t.brand.two}</p>
          </div>

          <div className="flex flex-col items-center p-2">
            <Image
              src={"img/object3.svg"}
              className="w-[100px] h-[100px] lg:w-[175px] lg:h-[175px]"
              width={100}
              height={100}
              alt="моменты жизни на кухне"
            />
            <p className="text-center pt-5">{t.brand.three}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
