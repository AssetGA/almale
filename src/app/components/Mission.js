import React from "react";
import { getDictionary } from "../[lang]/dictionaries";

const Mission = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div className="w-full bg-[url('/img/mission-mob.png')] sm:bg-[url('/img/mission.png')] bg-cover bg-no-repeat sm:bg-contain my-20 hover:opacity-95">
      <div className="xl:py-40 xl:px-40 lg:py-28 lg:pl-20 py-10 px-10 text-white text-sm lg:text-lg">
        <div className="sm:w-[400px] pb-40 sm:pb-0 sm:mb-12 ">
          <h1
            className="text-xl font-bold hover:text-gray-header"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            {t.mission.head}
          </h1>
          <p className="py-5 text-sm">{t.mission.one}</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
