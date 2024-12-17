import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from './TripBenefits.module.css'

interface TripBenefitsProps {
  icon: StaticImageData;
  title: string;
  details: string;
}

export default function TripBenefits({
  icon,
  title,
  details,
}: TripBenefitsProps) {
  return <div className={styles.TripBenefits}>
    <div className={styles.Title}>
        <Image src={icon} alt="icon" />
        <h2>{title}</h2>
    </div>
    <p>{details}</p>
  </div>;
}
