import React from "react";
import styles from "./FooterInfo.module.scss";

export const FooterInfo = () => {
  return (
    <section className={styles.footer}>
      <h3>© Andrés Balcázar</h3>
      <span>2023</span>
      <p>Viva el sw libre</p>
    </section>
  );
};
