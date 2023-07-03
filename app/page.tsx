import React from "react";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero} />
      <section className={styles.about}>
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
      </section>
      <section className={styles.howItWorks}>
        <h2 className={styles.howItWorksTitle}>Як це працює?</h2>
        <div className={styles.howItWorksCardWrapper}>
          <div className={styles.howItWorksCard}>
            <div className={styles.howItWorksImg}></div>
            <h3 className={styles.howItWorksCardTitle}>Спілкуйся</h3>
            <p className={styles.howItWorksCardText}>
              Анонімне спілкування з користувачами за спільними інтересами.
              Використай цю можливість, щоб дізнатися щось корисне!
            </p>
          </div>
          <div className={styles.howItWorksCard}>
            <div className={styles.howItWorksImg}></div>
            <h3 className={styles.howItWorksCardTitle}>Запрошуй</h3>
            <p className={styles.howItWorksCardText}>
              Запрошуй друзів та знайомих, використовуй анонімне спілкування,
              щоб дізнатися справжню думку оточуючих!
            </p>
          </div>
          <div className={styles.howItWorksCard}>
            <div className={styles.howItWorksImg}></div>
            <h3 className={styles.howItWorksCardTitle}>Створюй</h3>
            <p className={styles.howItWorksCardText}>
              Створюй нові чат кімнати для обговорення важливих та цікавих тем.
              Стань генератором нових супер ідей!
            </p>
          </div>
        </div>
      </section>
      <section className={styles.communication}>
        <h1 className={styles.communicationTitle}>
          Спілкування в чат кімнатах
        </h1>

        <div className={styles.communicationDescription}>
          <ul className={styles.communicationText_wrapper}>
            <li className={styles.communicationText}>
              Анонімне спілкування за спільними інтересами
            </li>
            <li className={styles.communicationText}>
              Тематика кімнат написана в описі чат кімнати
            </li>
            <li className={styles.communicationText}>
              Максимальна кількість повідомлень - 500 шт. Після цього ваші
              повідомлення видаляються до кількості 250 шт
            </li>
            <li className={styles.communicationText}>
              Якщо у вас є пропозиції щодо створення нових чат кімнат - напишіть
              нам у Підтримку
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.policy}>
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
      </section>
    </main>
  );
}
