// import { useEffect } from "react";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import TheFooter from "./components/TheFooter/TheFooter";
import TheHeader from "./components/TheHeader/TheHeader";
import PopUpAutorisation from "./components/popUp/PopUpAutorisation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [isPopUp, setIsPopUp] = React.useState(false);

  // function setIsPopUpFalse() {
  //   setIsPopUp(false);
  // }

  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        {children}
        <TheFooter />
        {false && (
          <PopUpAutorisation title="Щоб продовжити далі, авторизуйтеся!" />
        )}
      </body>
    </html>
  );
}
