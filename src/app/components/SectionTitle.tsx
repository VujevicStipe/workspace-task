import React from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  tag?: string;
  title: string;
  details: string;
  color?: string;
}

export default function SectionTitle({
  tag,
  title,
  details,
  color = "blue",
}: SectionTitleProps) {
  return (
    <div className={`${styles.SectionTitle} ${styles[color]}`}>
      {tag && <div className={styles.Tag}>
        <span>{tag}</span>
      </div>}
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
}
