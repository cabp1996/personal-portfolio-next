import React from "react";
import { FooterInfo } from "@/components/organisms/footer-info/footer-info";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
    </footer>
  );
};
