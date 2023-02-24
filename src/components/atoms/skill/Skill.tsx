import React, { FC } from "react";
import styles from "./Skill.module.scss";

interface Props {
  text: string;
  percentage: number;
}

export const Skill: FC<Props> = ({ text, percentage }) => {
  return (
    <div className={styles.skill_container}>
      <span>{text}</span>
      <progress id={"percentage" + text} value={percentage} max="100">
        {" "}
      </progress>
    </div>
  );
};
