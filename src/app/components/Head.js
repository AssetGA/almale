import { getDictionary } from "../[lang]/dictionaries";

const Head = async ({ lang }) => {
  const t = await getDictionary(lang);
  return (
    <div className="w-full bg-[url('/img/main2.png')] sm:bg-[url('/img/главная.jpg')] bg-cover sm:bg-contain bg-no-repeat sm:bg-right flex flex-col sm:flex-row relative">
      <div className="bg-[url('/img/Layer6.svg')] bg-contain bg-no-repeat px-12 py-12 sm:hidden -translate-y-16 z-10">
        .
      </div>
      <div className="w-full">
        <div className="w-full h-full bg-no-repeat left-0 sm:top-0 bg-[url('/img/Layer5.svg')] sm:bg-[url('/img/Layer14.svg')] bg-cover sm:bg-contain translate-y-56 sm:translate-y-0">
          <div className="sm:w-[400px] md:w-1/2">
            <div className="flex flex-col text-white px-10 py-[44px] sm:py-[44px] lg:pl-[70px] md:py-[85px] lg:py-[130px] xl:pl-[180px] xl:py-[130px]">
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Montserrat-Bold" }}
              >
                {t.head.headh1}
              </h1>
              <p className="pt-3 text-sm">{t.head.headp}</p>
              <div className="mt-10">
                <a
                  href="#production"
                  className="bg-gray-header rounded-md text-black text-sm font-bold py-2 px-5 hover:bg-green hover:text-white hover:border hover:border-white"
                >
                  {t.head.headbutton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-0 lg:w-[250px] h-full flex flex-row pt-0 md:pt-20 xl:pt-32">
        <div className="w-full h-full right-0 bottom-0 bg-no-repeat bg-[url('/img/Layer15.svg')] bg-contain">
          <div className="py-[100px] md:py-[150px] lg:py-[210px] xl:py-[220px]">
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
