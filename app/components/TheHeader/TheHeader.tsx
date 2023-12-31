import React from 'react'
import MainLogo from '../MainLogo/MainLogo'
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import styles from "./TheHeader.module.css";

const navItems = [
  { label: "Новий чат", href: "/" },
  { label: "Чат кімнати", href: "/" },
  { label: "Підтримка", href: "/" },
];

function TheHeader({ setIsPopUpFalse }: { setIsPopUpFalse: () => void }) {
  return (
    <div className={styles.main}>
      <MainLogo />
      <Navigation />
      <Button setIsPopUpFalse={setIsPopUpFalse} text="Вхід" />
    </div>
  );
}

export default TheHeader