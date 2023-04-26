import { ProjectMain } from "@/components";
import { Project } from "../../../utils/interfaces/project.interface";
import { projectsData } from "../../../utils/constants/projects.data";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";

interface Props {
  project: Project;
}

const IndividualProjectPage: FC<Props> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.name}</title>
        <meta name="description" content={project.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectMain project={project} />
    </>
  );
};

export default IndividualProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: projectsData.map((project) => ({
      params: { name: project.name },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const project: Project = projectsData.find(
    (project) => project.name === name
  )!;

  return {
    props: {
      project,
    },
  };
};
