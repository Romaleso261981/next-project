import React from "react";
import styles from "./PopUp.module.css";

function PopUpAutorisation({ title }: { title: string }) {
  return (
    <div className={styles.beckDrop}>
      <div className={styles.form}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Логін (ID)"
          />
          <input className={styles.input} type="text" placeholder="Пароль" />
        </div>
      </div>
    </div>
  );
}

export default PopUpAutorisation;
