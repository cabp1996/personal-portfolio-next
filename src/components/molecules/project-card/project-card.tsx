import React, { FC } from "react";
import { CustomImage } from "../../atoms/custom-image/custom-image";
import { CustomLink } from "../../atoms/custom-link/custom-link";
import styles from "./ProjectCard.module.scss";

interface Props {
  image: string;
  name: string;
  description: string;
}

export const ProjectCard: FC<Props> = ({ image, name, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__image}>
        <CustomImage src={image} alt={name} fill={true} />
      </div>
      <div className={styles.card__content}>
        <p>{description}</p>
        <CustomLink
          path={`/projects/[name]`}
          query={{ name }}
          text="Saber más"
          fontColor="blue"
        />
      </div>
    </article>
  );
};
