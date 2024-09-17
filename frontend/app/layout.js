import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import Footer from "./components/section/Footer";
import Menubar from "./components/section/Menubar/Menubar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Menubar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
