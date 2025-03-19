import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg-xml" href="/pizza-logo.svg" />
      </head>
      <body>
      <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
