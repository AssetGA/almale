import ProductAbout from "../../../components/ProductAbout";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <ProductAbout lang={lang} t={t} />;
}
