import React, { FC } from "react";
import Link from "next/link";
import styles from "./CustomLink.module.scss";

interface Props {
  text: string;
  path: string;
  query?: { [key: string]: string };
  fontSize?: string;
  fontColor?: string;
  margin?: string;
}

export const CustomLink: FC<Props> = ({
  text,
  path,
  query,
  fontSize = "14px",
  fontColor = "blue",
  margin = "",
}) => {
  return (
    <Link
      href={{
        pathname: path,
        query: query,
      }}
      className={styles.link}
      style={{ fontSize, color: fontColor, margin }}
    >
      {text}
    </Link>
  );
};
