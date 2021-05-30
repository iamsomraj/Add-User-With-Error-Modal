import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = (props) => {
  const buttonType = props.type === undefined ? "button" : props.type;
  return (
    <button className={styles.button} type={buttonType} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
