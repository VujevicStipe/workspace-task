import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  color: "white" | "yellow" | "blue" | "transparent";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant,
  color,
  children,
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
        </button>
      );
}
