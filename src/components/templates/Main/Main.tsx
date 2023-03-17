import React from "react";
import { Profile } from "@/components/molecules/Profile/Profile";
import { TechnicalInfo } from "@/components/organisms/TechnicalInfo/TechnicalInfo";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Profile />
      <TechnicalInfo />
    </main>
  );
};
