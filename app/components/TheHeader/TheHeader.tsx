import React from 'react'
import MainLogo from '../MainLogo/MainLogo'
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import styles from "./TheHeader.module.css";

function TheHeader() {
  return (
    <div className={styles.main}>
      <MainLogo />
      <Navigation />
      <Button text="Вхід" />
    </div>
  );
}

export default TheHeader