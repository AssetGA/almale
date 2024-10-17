import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Almale",
  description: "Кастрюли, сковородки для профессионалов и домохозяек",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`Montserrat antialiased`}>
        <div className="xl:container xl:mx-auto">
          <Navbar />
        </div>

        <main>{children}</main>
        <div className="xl:container xl:mx-auto">
          {" "}
          <Footer />
        </div>
      </body>
    </html>
  );
}
