import { CustomLink } from "../../atoms/custom-link/custom-link";
import React from "react";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__content}>
        <h1>Portafolio</h1>
        <div>
          <CustomLink
            text="Github"
            path="https://github.com/cabp1996"
            fontColor="white"
            fontSize="15px"
          />
        </div>
      </div>
    </nav>
  );
};
