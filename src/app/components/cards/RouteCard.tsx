import React from "react";
import styles from "./RouteCard.module.css";
import useDeviceType from "../../hooks/useWindowSize";
import Chevron from "@/public/chevron.svg";
import Image, { StaticImageData } from "next/image";
import ProgressBar from "../ProgressBar";

interface RouteCardProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  party: number;
  adventure: number;
}

export default function RouteCard({
  image,
  title,
  subtitle,
  party,
  adventure,
}: RouteCardProps) {
  const deviceType = useDeviceType();
  return (
    <div className={`${styles.RouteCard}  ${styles[deviceType]}`}>
      <div className={styles.RouteCardContent}>
        <div>
          <h3>{subtitle}</h3>
          <div className={styles.Wrapper}>
            <h2>{title}</h2>
            <Image src={Chevron} alt="chevron-icon" />
          </div>
        </div>
        <div className={styles.ProgressBarWrapper}>
          <ProgressBar label="party" value={party} rounded={false} />
          <ProgressBar label="adventure" value={adventure} rounded={false} />
        </div>
      </div>
      <div className={styles.Shadow}></div>
      <Image className={styles.Image} src={image} alt="routes-card" />
    </div>
  );
}
