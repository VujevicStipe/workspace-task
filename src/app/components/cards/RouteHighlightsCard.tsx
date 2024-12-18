import React from "react";
import styles from "./RouteHighlightsCard.module.css";
import Image, { StaticImageData } from "next/image";

interface RouteHighlightsCardProps {
  title: string;
  details: string;
  image: StaticImageData;
}

export default function RouteHighlightsCard({
  title,
  details,
  image,
}: RouteHighlightsCardProps) {
  return (
    <div className={styles.routeHighlightsCard}>
      <Image src={image} alt="route-image" />
      <div className={styles.Text}>
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}
