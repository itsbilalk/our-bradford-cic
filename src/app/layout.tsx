import type { Metadata } from "next";

import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: "normal",
});

const lato = Lato({
  variable: "--font-lato",
  weight: "300",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Our Bradford",
  description: "Bradford youth community activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <html lang="en">
        <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
          {children}
        </body>
      </html>
      <Footer />
    </>
  );
}
