import React from "react";
import { ProjectCard } from "../../molecules/ProjectCard/ProjectCard";
import { projectsData } from "../../../utils/consts/projects.data";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Portafolio</h2>

      <div className={styles.projects__list}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            image={project.image}
            description={project.description}
            name={project.name}
          />
        ))}
      </div>
    </section>
  );
};
