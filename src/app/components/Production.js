import Link from "next/link";
import React from "react";
import { getDictionary } from "../[lang]/dictionaries";

const Production = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div id="production" className="w-full text-lg font-bold">
      <div className="flex flex-col items-center p-10 xl:mx-40 lg:mx-20 md:mx-10">
        <h3
          className="text-center py-10"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.product.head}
        </h3>
        <div className="w-full bg-[url('/img/production.png')] sm:bg-[url('/img/production-desc.png')] bg-cover  bg-no-repeat rounded-lg">
          <div className="p-8 pb-72 sm:pb-8">
            <p
              className="sm:ml-4 sm:pb-24 md:pb-40 lg:pb-56 xl:pb-60 py-2"
              style={{ fontFamily: "Montserrat-Bold" }}
            >
              {t.product.one}
              <br />
              <span> {t.product.two}</span>
            </p>

            <Link
              href={`/${lang}/product`}
              className="sm:m-4 bg-green text-white py-2 px-4 rounded-md hover:bg-green-light"
            >
              {t.product.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
