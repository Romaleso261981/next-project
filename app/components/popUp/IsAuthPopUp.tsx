import React from "react";
import styles from "./PopUp.module.css";

function PopUpAutorisation({
  title, text
}: {
  title: string, text?: string
}) {
  return (
    <div className={styles.beckDrop}>
      <div className={styles.form}>
              <h1 className={styles.title}>{title}</h1>
              <p>{ text}</p>
      </div>
    </div>
  );
}

export default PopUpAutorisation;
