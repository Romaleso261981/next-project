import React from "react";

import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.hero} />
      <div className={styles.about}>
        <div className={styles.description}>
          <h1 className={styles.title}>Що таке НАШChat?</h1>
          <div className={styles.text}>
            <ul className={styles.aboutText_wrapper}>
              <li className={styles.aboutText}>
                Спілкуйся з користувачами приватно або у чат кімнатах
              </li>
              <li className={styles.aboutText}>
                Обирай кола людей за своїми інтересами
              </li>
              <li className={styles.aboutText}>
                Використовуй НАШChat для анонімного спілкування
              </li>
              <li className={styles.aboutText}>
                Вільне спілкування в масштабах всієї планети
              </li>
              <li className={styles.aboutText}>
                Ваші повідомлення видаляються через 48 годин
              </li>
              <li className={styles.aboutText}>
                Відсутність обов’язкової реєстрації та збору персональних даних
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.img}></div>
      </div>
    </main>
  );
}
