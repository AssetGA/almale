import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { haracter, products } from "../api/api";
import Tooltip from "./Tooltip";

const ProductAbout = ({ product }) => {
  console.log("product", product);
  const filterProducts = products.filter((elem) => {
    return elem.id !== product.id;
  });
  return (
    <div className="flex flex-col px-5">
      <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-20">
        {/* Левая часть: основное изображение и миниатюры */}
        <div className="md:w-1/2 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 sm:hidden">
            {product.name}
          </h2>
          {/* Описание товара */}
          <p className="mb-6 sm:hidden">{product.description}</p>
          {/* Основное изображение товара */}
          <div className="mb-4 hover:shadow-lg">
            <Image
              className="w-full object-cover rounded-lg"
              src={product.imageUrl}
              width={320}
              height={300}
              alt={product.name}
            />
          </div>
          {/* Миниатюры изображений */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <img
              className="object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-gray"
              src="https://via.placeholder.com/80"
              alt="Миниатюра 1"
            />
            <img
              className="object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-gray"
              src="https://via.placeholder.com/80"
              alt="Миниатюра 2"
            />
            <img
              className="object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-gray"
              src="https://via.placeholder.com/80"
              alt="Миниатюра 3"
            />
            <img
              className="object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-gray"
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
              {product.name}
            </h2>
            {/* Описание товара */}
            <p className="mb-6 hidden sm:block">{product.description}</p>

            <div className="hidden sm:grid grid-cols-6 gap-1 pb-10">
              {haracter.map((elem) => (
                <Tooltip key={elem.id} text={elem.name}>
                  <Image
                    src={elem.imageUrl}
                    width={100}
                    height={100}
                    alt="elem.name"
                  />
                </Tooltip>
              ))}
            </div>
            {/* Цена товара */}
            <div className="flex flex-row justify-between">
              <Link href="/catalog" className="right-0">
                <div className="bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  назад
                </div>
              </Link>
              <Link href="/basket" className="right-0">
                <div className="bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Купить набор
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 max-w-4xl mx-auto">
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductAbout;
