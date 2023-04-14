import { Experience } from "@/components/atoms/Experience/Experience";
import { Skill } from "@/components/atoms/Skill/Skill";
import { experienceData } from "@/utils/consts/experience.data";
import { skillsData } from "@/utils/consts/skill.data";
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
