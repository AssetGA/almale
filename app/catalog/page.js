import UtensilsSet from "../components/UtensilsSet";

export const metadata = {
  title: "Игра GO - о нас",
  description: "Игра GO - общая информация",
  keywords: "Игра, маркетинг, реклама, движение, стратегическая, командная",
  robots: "index, follow",
};

export default function Page() {
  return (
    <div className="xl:container xl:mx-auto">
      <UtensilsSet />
    </div>
  );
}
