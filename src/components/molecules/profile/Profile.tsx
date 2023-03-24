import { CustomImage } from "@/components";
import React from "react";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <CustomImage src="/images/devsu.jpg" alt="avatar" height={200} width={200} />
      <div className={styles.profile_container__info}>
        <h1>Andrés Balcázar</h1>
        <h2>Desarrollador frontend</h2>
        <p>
          Soy un desarrollador frontend y me gusta programar. Trabajo
          actualmente desarrollando aplicaciones web usando tecnologías de
          Javascript.
        </p>
      </div>
    </div>
  );
};
