"use client";

// import { useEffect } from "react";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import TheFooter from "./components/TheFooter/TheFooter";
import TheHeader from "./components/TheHeader/TheHeader";
import PopUpAutorisation from "./components/popUp/PopUpAutorisation";
import IsAuthPopUp from "./components/popUp/IsAuthPopUp";
// import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

//  const metadata: Metadata = {
//   title: "Our Chat",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPopUp, setIsPopUp] = React.useState(false);
  const [isAuthPopUp, setisAuthPopUp] = React.useState(false);

  function setIsPopUpOpen() {
    setIsPopUp(true);
  }
  function setIsPopUpCloset() {
    setIsPopUp(false);
    setisAuthPopUp(true);
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader setIsPopUpFalse={setIsPopUpOpen} />
        {children}
        <TheFooter />
        {isPopUp && (
          <PopUpAutorisation
            setIsPopUpFalse={setIsPopUpCloset}
            title="Щоб продовжити далі, авторизуйтеся!"
          />
        )}
        {isAuthPopUp && (
          <IsAuthPopUp
            text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odit
          ipsam aliquam. Omnis sed voluptatem fuga eos quam eum natus.
          Voluptatem laborum pariatur debitis eveniet voluptates quasi sequi
          odio? Minus adipisci incidunt perspiciatis sunt nesciunt labore est,
          at, consectetur expedita ducimus autem voluptates earum neque sequi ea
          nostrum maiores porro?"
            title="Дякуємо що авторизувались"
            setisAuthPopUp={setisAuthPopUp}
          />
        )}
      </body>
    </html>
  );
}
