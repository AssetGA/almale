import UtensilsSet from "../../components/UtensilsSet";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Игра GO - о нас",
  description: "Игра GO - общая информация",
  keywords: "Игра, маркетинг, реклама, движение, стратегическая, командная",
  robots: "index, follow",
};

export default async function Page({ params: { lang } }) {
  const t = await getDictionary(lang);
  return <UtensilsSet lang={lang} t={t} />;
}
