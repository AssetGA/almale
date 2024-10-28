import "../globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import localFont from "next/font/local";
import StoreProvider from "../StoreProvider";
import { getDictionary } from "./dictionaries";

const montserrat = localFont({
  src: "../../../public/fonts/Montserat/Montserrat-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Almale",
  description: "Кастрюли, сковородки для профессионалов и домохозяек",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "kz" }, { lang: "ru" }];
}

export default async function LocaleLayout({ children, params: { lang } }) {
  const t = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body className={montserrat.className}>
        <StoreProvider lang={lang}>
          <Navbar lang={lang} t={t} />
          <main className="xl:container xl:mx-auto">{children}</main>
          <Footer lang={lang} t={t} />
        </StoreProvider>
      </body>
    </html>
  );
}
