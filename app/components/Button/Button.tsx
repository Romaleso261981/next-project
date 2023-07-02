import React from 'react'
import styles from "./Button.module.css";

function Button({text}: {text: string}) {
  return <div className={styles.wrapper}>{text}</div>;
}

export default Button