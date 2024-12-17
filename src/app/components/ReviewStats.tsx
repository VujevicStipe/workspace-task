import React from "react";
import Styles from "./ReviewStats.module.css";
import Image from "next/image";
import { Inter } from "@next/font/google";
import star from "@/public/star.svg";
import facebook from "@/public/facebook.svg";
import google from "@/public/google.svg";

interface ReviewStatsProps {
  variant: string;
  title: string;
  subTitle: string;
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ReviewStats({
  variant,
  title,
  subTitle,
}: ReviewStatsProps) {
  const getIcon = () => {
    switch (variant) {
      case "rating":
        return star;
      case "facebook":
        return facebook;
      case "google":
        return google;
    }
  };

  return (
    <div className={Styles.ReviewStasts}>
      <Image src={getIcon()} alt={`${variant} icon`} />
      <div className={Styles.ReviewStastsContent}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
