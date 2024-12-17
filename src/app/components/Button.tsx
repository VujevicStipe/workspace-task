import Image from "next/image";
import styles from "./Button.module.css";
import Link from "next/link";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  color: "white" | "yellow" | "blue" | "transparent";
  children: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant,
  color,
  children,
  endIcon,
  onClick,
}: ButtonProps) {

    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[color],
    ].join(' ');

    return (
        <button className={buttonClasses} onClick={onClick}>
          {children}
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </button>
      );
}
