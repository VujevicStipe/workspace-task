import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  label?: string;
  value: number;
  rounded: boolean;
  direction?: string;
}

export default function ProgressBar({
  label,
  value,
  rounded,
  direction,
}: ProgressBarProps) {
  return (
    <div
      className={`${styles.ProgressContainer} ${
        rounded ? styles.Rounded : ""
      } ${direction && styles[direction]}`}
    >
      {label && <h4>{label}</h4>}
      <div className={styles.ProgressBar}>
        <div
          className={styles.ProgressFill}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
