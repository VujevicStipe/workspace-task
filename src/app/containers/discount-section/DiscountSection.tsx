import React from "react";
import styles from "./DiscountSection.module.css";
import DiscountCard from "@/app/components/cards/DiscountCard";
import { Open_Sans } from "next/font/google";
import texture from "@/public/discount_texture.svg";
import Image from "next/image";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function DiscountSection() {
  return (
    <div className={styles.DiscountSection}>
      <h2>Flexible payment</h2>
      <div className="DiscountCardsWrapper">
        <DiscountCard
          variant={1}
          color="white"
          title="10%"
          discount={10}
          details="pay when booking"
        />
        <DiscountCard
          variant={2}
          color="white"
          title="40%"
          discount={50}
          details="pay 30 days after booking"
        />
        <DiscountCard
          variant={3}
          color="white"
          title="50%"
          discount={100}
          details="pay 60 days before trip"
        />
      </div>
      <p className={`${styles.Terms} ${openSans.className}`}>
        NOTE: Only applies to bookings made a minimum of 95 days before the
        trip. For bookings made within 95 days before the trip, see our{" "}
        <span>Terms and conditions</span>.
      </p>
      <Image src={texture} alt="texture" />
    </div>
  );
}
