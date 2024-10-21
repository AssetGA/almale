import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";

const montserrat = localFont({
  src: "../public/fonts/Montserat/Montserrat-Medium.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Almale",
  description: "Кастрюли, сковородки для профессионалов и домохозяек",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="kz">
        <body className={montserrat.className}>
          <div className="xl:container xl:mx-auto">
            <Navbar />

            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
