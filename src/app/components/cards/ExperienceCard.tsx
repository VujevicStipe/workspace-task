import React from "react";
import styles from "./ExperienceCard.module.css";
import Image, { StaticImageData } from "next/image";
import chevron from "@/public/chevron.svg";

interface ExperienceCardProps {
  title: string;
  image: StaticImageData;
}

export default function ExperienceCard({ title, image }: ExperienceCardProps) {
  return (
    <div className={styles.ExperienceCard}>
      <div className={styles.Title}>
        <h2>{title}</h2>
        <Image className={styles.Icon} src={chevron} alt="arrow" />
      </div>
      <div className={styles.Shadow}></div>
      <Image className={styles.Image} src={image} alt="experience-card" />
    </div>
  );
}
