'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
