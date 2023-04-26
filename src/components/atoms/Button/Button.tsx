import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button: FC<Props> = ({ text, className, ...buttonAttrs }) => {
  return (
    <button className={`${styles.button} ${className}`} {...buttonAttrs}>
      {text}
    </button>
  );
};
