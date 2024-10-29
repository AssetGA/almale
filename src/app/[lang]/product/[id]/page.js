import ProductAbout from "../../../components/ProductAbout";
import { getDictionary } from "../../dictionaries";

export async function generateStaticParams() {
  // Укажите возможные значения для [lang] и [id]
  const langs = ["en", "ru", "kz"]; // Например, поддерживаемые языки
  const products = ["1", "2", "3"]; // Например, ID товаров

  const params = [];
  langs.forEach((lang) => {
    products.forEach((id) => {
      params.push({ lang, id });
    });
  });

  return params;
}

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <ProductAbout lang={lang} t={t} />;
}
