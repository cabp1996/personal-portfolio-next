import React, { FC } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export const CustomImage: FC<Props> = ({ fill = false, ...props }) => {
  return <Image {...props} fill={fill} />;
};
