import React from "react";

const History = () => {
  return (
    <div className="w-full bg-black pt-10">
      <div className="w-full bg-[url('/img/history-mob.png')] sm:bg-[url('/img/history.png')] bg-contain sm:bg-cover">
        <div className="pt-56 sm:pt-0 xl:py-40 xl:px-40 lg:py-20 lg:pl-20 py-10 px-10 text-white lg:text-lg">
          <div className="sm:w-[400px] -translate-y-56 sm:translate-y-0">
            <div className="text-lg font-bold hover:text-gray-header">
              Alma Le - рожденный из семейных традиций
            </div>
            <p className="sm:py-5 text-sm">
              Alma Le - это бренд созданный в честь всех мам, которые посвещают
              бесценное время приготовлению пищи для своих близких. <br />
              <br />
              Мы глубоко ценим семейные традиции и высокие моральные ценности,
              которые обьединяют семьи.
            </p>
            <p>Покупая нашу посуду вы заботитесь о здоровье своих близких.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
