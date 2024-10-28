import React from "react";
import Basket from "../../components/Basket";
import { getDictionary } from "../dictionaries";

const Page = async ({ params: { lang } }) => {
  const t = await getDictionary(lang);
  return <Basket lang={lang} t={t} />;
};

export default Page;
