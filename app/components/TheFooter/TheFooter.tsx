import React from "react";
import MainLogo from "../MainLogo/MainLogo";
import Navigation from "../Navigation/Navigation";
import styles from "./TheFooter.module.css";

function TheFooter() {
  return (
    <div className={styles.main}>
      <MainLogo />
      <Navigation />
      <div className={styles.social}>
        <h3 className={styles.socialTitle}>Соціальні мережі:</h3>
        <div className={styles.socialList}>
          <a
            className={styles.socialLinkLinkedin}
            href="https://www.linkedin.com/"
          ></a>
          <a
            className={styles.socialLinkTwitter}
            href="https://www.twitter.com/"
          ></a>
          <a
            className={styles.socialLinkInstagram}
            href="https://www.instagram.com/"
          ></a>
          <a
            className={styles.socialLinkFacebook}
            href="https://www.facebook.com/"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default TheFooter;
