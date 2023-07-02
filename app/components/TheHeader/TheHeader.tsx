import React from 'react'
import MainLogo from '../MainLogo/MainLogo'
import Navigation from "../Navigation/Navigation";
import styles from "./TheHeader.module.css";

function TheHeader() {
  return (
    <div className={styles.main}>
      <MainLogo />
      <Navigation />
    </div>
  );
}

export default TheHeader