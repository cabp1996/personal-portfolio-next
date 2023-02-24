import React, { FC } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Avatar: FC<Props> = ({ ...props }) => {
  return <Image {...props} />;
};
