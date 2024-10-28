import Image from "next/image";
import React from "react";

const OpinionCard = ({ opinion }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden flex flex-col items-center">
      {/* Изображение товара */}
      <Image
        src={opinion.imageUrl}
        alt={opinion.name}
        width={300}
        height={300}
        className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] object-cover hover:opacity-90 rounded-full p-10"
      />

      <div className="text-center p-4 ">
        {/* Название товара */}
        <h2
          className="text-xl font-semibold text-gray-800"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {opinion.name}
        </h2>
        <p className="text-gray-600 font-bold mt-2">{opinion.profession}</p>
        {/* Описание товара */}
        <p className="text-gray-600 mt-2">{opinion.message}</p>
      </div>
    </div>
  );
};

export default OpinionCard;
