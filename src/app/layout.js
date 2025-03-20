import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header";

export const metadata = {
  title: "Pizzas",
  icons: "/pizza-logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
