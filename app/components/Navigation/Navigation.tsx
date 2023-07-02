import Link from 'next/link'
import styles from "./Navigation.module.css";
import React from 'react'

function Navigation() {
  return (
    <div className={styles.navWrapper}>
      <Link className={styles.link} href="/">Новий чат</Link>
      <Link className={styles.link} href="/">Чат кімнати</Link>
      <Link className={styles.link} href="/">Підтримка</Link>
    </div>
  );
}

export default Navigation