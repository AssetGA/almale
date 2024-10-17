import Link from "next/link";
import React from "react";

const Production = () => {
  return (
    <div id="production" className="w-full text-lg font-bold">
      <div className="flex flex-col items-center p-10 xl:mx-40 lg:mx-20 md:mx-10">
        <p className="text-center py-10">Продукция</p>
        <div className="w-full bg-[url('/img/production.png')] sm:bg-[url('/img/production-desc.png')] bg-cover  bg-no-repeat rounded-lg">
          <div className="p-8 pb-72 sm:pb-8">
            <p className="sm:ml-4 sm:pb-24 md:pb-40 lg:pb-56 xl:pb-60 py-2">
              Медный набор посуды <br /> Alma Le 1.0
            </p>
            <Link
              href="/catalog"
              className="sm:m-4 bg-green text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
