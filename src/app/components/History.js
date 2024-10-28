import React from "react";
import { getDictionary } from "../[lang]/dictionaries";

const History = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div className="w-full bg-black pt-10">
      <div className="w-full bg-[url('/img/history-mob.png')] sm:bg-[url('/img/history.png')] bg-contain sm:bg-cover">
        <div className="pt-56 sm:pt-0 xl:py-40 xl:px-40 lg:py-20 lg:pl-20 py-10 px-10 text-white lg:text-lg">
          <div className="sm:w-[400px] -translate-y-56 sm:translate-y-0">
            <h1
              className="text-xl font-bold hover:text-gray-header"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              {t.history.head}
            </h1>
            <p className="sm:py-5 text-sm">{t.history.one}</p>
            <p className="sm:pb-5 text-sm">{t.history.two}</p>
            <p className="text-sm">{t.history.three}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
