import React from "react";
import { FooterInfo } from "@/components/organisms/FooterInfo/FooterInfo";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
    </footer>
  );
};
