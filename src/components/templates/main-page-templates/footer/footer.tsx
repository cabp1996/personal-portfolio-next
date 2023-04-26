import React from "react";
import { FooterInfo } from "@/components/organisms/footer-info/footer-info";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
    </footer>
  );
};
