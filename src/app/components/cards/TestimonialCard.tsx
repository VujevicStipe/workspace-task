import React from "react";
import styles from "./TestimonialCard.module.css";
import Image, { StaticImageData } from "next/image";
import useDeviceType from "../../hooks/useWindowSize";
import RatingStars from "../RatingStars";

interface TestimonalCardProps {
  image: StaticImageData;
  username: string;
  rating: number;
  title: string;
  comment: string;
}

export default function TestimonialCard({
  title,
  image,
  username,
  rating,
  comment,
}: TestimonalCardProps) {
  const deviceType = useDeviceType();
  return (
    <div className={`${styles.TestimonalCard} ${styles[deviceType]}`}>
      <div className={styles.TestimonalCardContent}>
        <Image src={image} alt="profile" />
        <h3>{username}</h3>
        <RatingStars rating={rating} />
        <h2>{title}</h2>
        <p>{comment}</p>
      </div>
    </div>
  );
}
