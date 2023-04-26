import React, { FC } from "react";
import styles from "./skill.module.scss";

interface Props {
  name: string;
  percentage: number;
}

export const Skill: FC<Props> = ({ name, percentage }) => {
  return (
    <div className={styles.skill_container}>
      <span>{name}</span>
      <progress id={"percentage" + name} value={percentage} max="100">
        {" "}
      </progress>
    </div>
  );
};
