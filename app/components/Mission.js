import React from "react";

const Mission = () => {
  return (
    <div className="w-full bg-[url('/img/mission-mob.png')] sm:bg-[url('/img/mission.png')] bg-cover bg-no-repeat sm:bg-contain my-20 hover:opacity-95">
      <div className="xl:py-40 xl:px-40 lg:py-20 lg:pl-20 py-10 px-10 text-white text-sm lg:text-lg">
        <div className="sm:w-[400px] pb-40 sm:pb-0">
          <div
            className="text-xl font-bold hover:text-gray-header"
            style={{ fontFamily: "Montserrat-Bold" }}
          >
            Наша миссия <br /> профессиональная <br /> посуда для каждого дома
          </div>
          <p className="py-5 text-sm">
            мы стремимся предоставить посуду премиум-класса, чтобы каждый мог
            готовить с любовью и заботой.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
