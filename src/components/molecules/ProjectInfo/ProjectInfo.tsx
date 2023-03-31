import React, { FC } from "react";
import styles from "./ProjectInfo.module.scss";

interface Props {
  name: string;
  description: string;
  duration: string;
  skills: string[];
}

export const ProjectInfo: FC<Props> = ({
  name,
  description,
  duration,
  skills,
}) => {
  return (
    <section className={styles.projectinfo}>
      <h1>{name}</h1>
      <hr />
      <p>{description}</p>
      <span>Duración en el proyecto: {duration}</span>

      <h2>Stack tecnológico:</h2>

      <ol>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ol>
    </section>
  );
};
