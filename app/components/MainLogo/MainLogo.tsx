import React from 'react'
import Image from "next/image";
import styles from "./MainLogo.module.css";

export default function MainLogo() {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.logo}
        src="/Logo.png"
        alt="Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
