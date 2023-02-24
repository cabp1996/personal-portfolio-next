import { Avatar } from "@/components";
import React from "react";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <Avatar src="/images/devsu.jpg" alt="avatar" height={200} width={200} />
      <div>
        <h2>Andrés Balcázar</h2>
        <p>Desarrollador frontend</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam ab
          excepturi corporis, cumque animi praesentium ullam natus eaque non,
          odio aperiam officiis vel consectetur voluptate at modi. Quos, enim
          voluptate.
        </p>
      </div>
    </div>
  );
};
