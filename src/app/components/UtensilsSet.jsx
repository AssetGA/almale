"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadProductList } from "../store/productSlice";
import { useEffect } from "react";
import { listSrc } from "../api/listSrc";

const UtensilsSet = ({ lang, t }) => {
  const products = useAppSelector((state) => state.product.entity);
  const isLoading = useAppSelector((state) => state.product.dataLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProductList({ lang: lang }));
  }, [lang]);

  // Проверяем, если продукты загружены
  if (!isLoading) {
    return <p>{t.utensil.one}</p>;
  }

  if (!products || products.length === 0) {
    return <p>{t.utensil.two}</p>;
  }

  const newProducts = products.filter((elem) => {
    return elem.name !== products[0].name && elem;
  });

  return (
    <>
      {isLoading && (
        <div className="flex flex-col px-5">
          <div className="flex flex-col md:flex-row bg-white rounded-lg p-4 max-w-4xl mx-auto my-10 sm:my-20">
            {/* Левая часть: основное изображение и миниатюры */}
            <div className="md:w-1/2 flex flex-col items-center">
              <h2
                className="text-xl font-semibold mb-2 sm:hidden px-5"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {products[0]?.name}
              </h2>
              {/* Описание товара */}
              <p className="mb-6 sm:hidden px-5">{products[0]?.description}</p>
              {/* Основное изображение товара */}
              <div className="w-full">
                <div className="mb-4 hover:shadow-lg">
                  <Image
                    className="w-full h-auto object-cover rounded-lg"
                    src={products[0]?.imageUrl}
                    width={320}
                    height={300}
                    alt={products[0]?.name}
                    priority
                  />
                </div>
                {/* Миниатюры изображений */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {listSrc.map((elem) => (
                    <div key={elem._id} className="aspect-w-1 aspect-h-1">
                      <Image
                        className="object-cover rounded-lg cursor-pointer border"
                        src={elem.src}
                        width={300}
                        height={300}
                        alt="alma le"
                        priority
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Правая часть: описание товара */}
            <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
              <div className="py-5">
                {/* Название товара */}
                <h2
                  className="text-xl font-semibold mb-2 hidden sm:block"
                  style={{ fontFamily: "Montserrat-Bold" }}
                >
                  {products[0]?.name}
                </h2>
                {/* Описание товара */}
                <p className="mb-6 hidden sm:block">
                  {products[0]?.description}
                </p>
                {/* Цена товара */}
                <div className="flex flex-row justify-between">
                  <p className="text-xl font-semibold text-gray-600 mb-4">
                    {products[0]?.price}
                    <span className="px-2">
                      {lang !== "en" ? "тг" : "tg (KZ)"}
                    </span>
                  </p>
                  <Link href={`/${lang}/basket`} className="right-0">
                    <div className="bg-green hover:bg-green-light text-white py-2 px-4 rounded-md hover:bg-blue-600">
                      {t.utensil.buttonBuy}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 md:gap-10 max-w-4xl mx-auto p-5">
            {newProducts.map((product) => (
              <div key={product.name}>
                <ProductCard product={product} lang={lang} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UtensilsSet;
