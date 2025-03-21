import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header";

export const metadata = {
  title: "Pizzas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
