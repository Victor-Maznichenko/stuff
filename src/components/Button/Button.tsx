import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  className,
  onClick,
  children,
  variant,
  disabled,
}) => {
  return (
    <button
      className={`${styles.button} ${className ? className : ""} ${
        variant == "gray" ? styles.gray : ""
      }`}
      onClick={onClick}
      disabled={disabled === undefined ? false : disabled}
    >
      {children}
    </button>
  );
};

export default Button;
