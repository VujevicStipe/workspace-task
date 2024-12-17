import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  label: string;
  value: number;
}

export default function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className={styles.ProgressContainer}>
      <h4>{label}</h4>
      <div className={styles.ProgressBar}>
        <div
          className={styles.ProgressFill}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
