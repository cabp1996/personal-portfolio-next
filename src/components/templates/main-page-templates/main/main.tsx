import React from "react";
import { Profile } from "@/components/molecules/profile/profile";
import { TechnicalInfo } from "@/components/organisms/technical-info/technical-info";
import { Projects } from "@/components/organisms/projects/projects";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <main className={styles.main}>
      <Profile />
      <TechnicalInfo />
      <Projects />
    </main>
  );
};
