import React, { FC } from "react";
import styles from "./Experience.module.scss";

interface Props {
  name: string;
  duration: string;
  description: string;
}

export const Experience: FC<Props> = ({
  description,
  duration,
  name,
}: Props) => {
  return (
    <article className={styles.experience}>
      <h3 className={styles.experience__title}>{name}</h3>
      <span className={styles.experience__duration}>{duration}</span>
      <p className={styles.experience__description}>{description}</p>
    </article>
  );
};
