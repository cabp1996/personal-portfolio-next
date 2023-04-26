import { FC } from "react";
import { Project } from "../../../../utils/interfaces/project.interface";
import styles from "./Main.module.scss";
import { Button, CustomImage, ProjectInfo } from "@/components";
import { useRouter } from "next/router";

interface Props {
  project: Project;
}

export const ProjectMain: FC<Props> = ({ project }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main className={styles.main}>
      <Button text="Volver" onClick={goBack} />

      <div className={styles.main__container}>
        <div className={styles.main__container__image}>
          <CustomImage src={project.image} alt={project.name} fill={true} />
        </div>

        <ProjectInfo
          name={project.name}
          description={project.description}
          duration={project.duration}
          skills={project.skills}
        />
      </div>
    </main>
  );
};
