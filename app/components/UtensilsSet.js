import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { products, utensil } from "../api/api";

const UtensilsSet = () => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-10 sm:my-20">
        {/* Левая часть: основное изображение и миниатюры */}
        <div className="md:w-1/2 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 sm:hidden px-5">
            {utensil[0].name}
          </h2>
          {/* Описание товара */}
          <p className="mb-6 sm:hidden px-5">{utensil[0].description}</p>
          {/* Основное изображение товара */}
          <div className="mb-4 hover:shadow-lg">
            <Image
              className="w-full h-auto object-cover rounded-lg"
              src={utensil[0].imageUrl}
              width={320}
              height={300}
              alt={utensil[0].name}
            />
          </div>
          {/* Миниатюры изображений */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <img
              className="object-contain rounded-lg cursor-pointer border "
              src="https://via.placeholder.com/80"
              alt="Миниатюра 1"
            />
            <img
              className="object-contain rounded-lg cursor-pointer border "
              src="https://via.placeholder.com/80"
              alt="Миниатюра 2"
            />
            <img
              className="object-contain rounded-lg cursor-pointer border "
              src="https://via.placeholder.com/80"
              alt="Миниатюра 3"
            />
            <img
              className="object-contain rounded-lg cursor-pointer border "
              src="https://via.placeholder.com/80"
              alt="Миниатюра 4"
            />
          </div>
        </div>

        {/* Правая часть: описание товара */}
        <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
          <div className="py-5">
            {/* Название товара */}
            <h2 className="text-xl font-semibold mb-2 hidden sm:block">
              {utensil[0].name}
            </h2>
            {/* Описание товара */}
            <p className="mb-6 hidden sm:block">{utensil[0].description}</p>
            {/* Цена товара */}
            <div className="flex flex-row justify-between">
              <p className="text-xl font-semibold text-gray-600 mb-4">
                {utensil[0].price}
              </p>
              <Link href="/basket" className="right-0">
                <div className="bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Купить
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 md:gap-10 max-w-4xl mx-auto p-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default UtensilsSet;
