import React from "react";
import styles from "./DiscountCard.module.css";
import Image from "next/image";
import money1 from "@/public/money_1.svg";
import money2 from "@/public/money_2.svg";
import money3 from "@/public/money_3.svg";
import ProgressBar from "../ProgressBar";

const moneyImages = {
  1: money1,
  2: money2,
  3: money3,
};

interface DiscountCardProps {
  variant: 1 | 2 | 3;
  color: "white" | "blue";
  title: string;
  discount: number;
  details: string;
}

export default function DiscountCard({
  variant,
  color,
  title,
  discount,
  details,
}: DiscountCardProps) {
  return (
    <div className={`${styles.DiscountCard} ${styles[color]}`}>
      <div className={styles.DiscountCardContent}>
        <div className={styles.Image}>
          <Image src={moneyImages[variant]} alt="money-icon" />
        </div>
        <h2>{title}</h2>
        <p>{details}</p>
        <ProgressBar value={discount} rounded={true} />
      </div>
    </div>
  );
}
