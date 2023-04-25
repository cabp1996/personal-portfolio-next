import { Experience } from "../../atoms/experience/experience";
import { Skill } from "../../atoms/skill/skill";
import { experienceData } from "../../../utils/constants/experience.data";
import { skillsData } from "../../../utils/constants/skill.data";
import React from "react";
import styles from "./TechnicalInfo.module.scss";

export const TechnicalInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2>Skills</h2>

        <ul className={styles.section__container__skillslist}>
          {skillsData.map((skill) => {
            return (
              <li key={skill.name}>
                <Skill {...skill} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.section__container}>
        <h2>Experiencia</h2>
        <ul>
          {experienceData.map((experience) => {
            return (
              <li key={experience.name}>
                <Experience {...experience} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
