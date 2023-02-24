import { CustomLink } from "@/components";
import React from "react";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <h1>Portafolio</h1>
        <div>
          <CustomLink
            text="Blog"
            path="/"
            fontColor="white"
            fontSize="15px"
            margin="0 1rem 0 0"
          />
          <CustomLink
            text="Github"
            path="/"
            fontColor="white"
            fontSize="15px"
          />
        </div>
      </div>
    </nav>
  );
};
