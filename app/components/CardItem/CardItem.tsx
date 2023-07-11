import React from "react";

import styles from "./CardItem.module.css";

type CardItemProps = {
  id: number;
  images: string;
  title: string;
  text: string;
};

export default function CardItem({ images, title, text }: CardItemProps) {

  return (
    <div className={styles.howItWorksCard}>
      <div className={styles.howItWorksImg}></div>
      <div>{images}</div>
      <div className={styles.howItWorksCardTitle}>{title}</div>
      <div className={styles.howItWorksCardText}>{text}</div>
    </div>
  );
}
