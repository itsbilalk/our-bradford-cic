import type { Metadata } from "next";

import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${montserrat.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
