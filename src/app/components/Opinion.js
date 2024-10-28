"use client";

import React, { useEffect, useState } from "react";
import { opinions } from "../api/api";
import OpinionCard from "./OpinionCard";

const Opinion = ({ t }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    // Проверяем, что мы находимся на клиенте
    const updateItemsPerPage = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;

        if (width > 1024) {
          setItemsPerPage(3); // Для больших экранов
        } else if (width >= 768 && width <= 1024) {
          setItemsPerPage(2); // Для средних экранов
        } else {
          setItemsPerPage(1); // Для маленьких экранов
        }
      }
    };

    // Устанавливаем количество элементов при первом рендеринге
    updateItemsPerPage();

    // Добавляем обработчик изменения размера окна
    window.addEventListener("resize", updateItemsPerPage);

    // Убираем слушатель при размонтировании компонента
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Вычисление текущих товаров
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOpinions = opinions.slice(indexOfFirstItem, indexOfLastItem);

  // Обработчики кнопок "Следующее" и "Назад"
  const nextPage = () => {
    if (currentPage < Math.ceil(opinions.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div id="opinion" className="w-full">
      <div className="xl:px-20 py-20 flex flex-col items-center">
        <h2
          className="text-xl text-center font-bold"
          style={{ fontFamily: "Montserrat-Bold" }}
        >
          {t.opinion.head}
        </h2>
        <p className="text-center py-5"> {t.opinion.one}</p>
        <div className="flex flex-row items-center">
          <button
            onClick={prevPage}
            className={`w-10 h-full mx-5 hover:bg-gray-header ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentPage === 1}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {currentOpinions.map((opinion) => (
              <OpinionCard key={opinion.id} opinion={opinion} />
            ))}
          </div>
          <button
            onClick={nextPage}
            className={`w-10 h-full mx-5 hover:bg-gray-header ${
              currentPage === Math.ceil(opinions.length / itemsPerPage)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentPage === Math.ceil(opinions.length / itemsPerPage)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
