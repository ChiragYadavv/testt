
import {  Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
const plus = Plus_Jakarta_Sans({ subsets: ["cyrillic-ext"] });
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Blurdiv from "./components/Blurdiv";
import "./common.css"

export const metadata = { 
  title: "Urban Detailing",
  description: "A Car Detailing website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <head>
          <link rel="shortcut icon" href="./assets/favicon.png" type="image/x-icon" />
        </head>
      <body className={plus.className} id="actualBody">
        <Navbar />
        <Logo/>
        {children}
        <Footer/>
        <Blurdiv></Blurdiv>
        </body>
    </html>
  );
}
