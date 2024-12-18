'use client'
import React, { useState } from "react";
import styles from "./FeatureCard.module.css";
import Image, { StaticImageData } from "next/image";
import useDeviceType from "@/app/hooks/useWindowSize";
import Button from "../Button";
import icon from "@/public/tertiary_btn_icon.svg";
import leftIcon from "@/public/slider_left.svg";
import rightIcon from "@/public/slider_right.svg";

interface FeatureCardProps {
  mainTitle: string;
  mainP: string;
  subTitle: string;
  subP: string;
  image: StaticImageData[];
  buttonData: string;
  variant: string;
}

export default function FeatureCard({
  mainTitle,
  mainP,
  subTitle,
  subP,
  image,
  buttonData,
  variant,
}: FeatureCardProps) {
  const deviceType = useDeviceType();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length); 
  };
  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + image.length) % image.length)
  };

  return (
    <div className={`${styles.featureCard} ${styles[variant]} ${styles[deviceType]}`}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src={leftIcon} alt="left-arrow" onClick={goToPreviousImage} />
          <Image src={image[currentImageIndex]} alt="image" />
          <Image src={rightIcon} alt="left-arrow" onClick={goToNextImage}/>
        </div>
        <div className={styles.imageText}>
          <h3>{subTitle}</h3>
          <p>{subP}</p>
        </div>
      </div>
      <div className={styles.content}>
        <h2>{mainTitle}</h2>
        <p>{mainP}</p>
        <Button variant="tertiary" color="white">
          {buttonData} <Image src={icon} alt="arrow" />
        </Button>
      </div>
    </div>
  );
}
