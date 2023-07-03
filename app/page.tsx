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
      <div className={styles.policy}>
        <div className={styles.policyDescription}>
          <h1 className={styles.policyTitle}>Політика конфіденційності</h1>
          <p className={styles.policyText}>
            Ми не запитуємо ваші персональні дані, вони належать тільки вам. Під
            час входу у чат ви берете на себе відповідальність за подальше
            спілкування. Якщо хтось спілкується некорестно, будь ласка,
            сповістіть нас про це. Ми не збираємо та не зберігааємо інформацію
            про вашу IP адресу. Вона видаляється автоматично. Ми не
            використовуємо сервіси аналітики та не пропонуємо вам додаткову
            рекламу.
          </p>
        </div>
        <div className={styles.policyImg}></div>
      </div>
    </main>
  );
}
