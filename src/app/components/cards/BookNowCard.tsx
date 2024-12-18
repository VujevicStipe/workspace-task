import React from "react";
import styles from "./BookNowCard.module.css";
import ratingCTA from "@/public/CTA_rating.svg";
import boatIcon from "@/public/boat_icon.svg";
import peopleIcon from "@/public/people_icon.svg";
import ageIcon from "@/public/age_icon.svg";
import wifiIcon from "@/public/wifi_icon.svg";
import calendarIcon from "@/public/calendar_icon.svg";
import Image from "next/image";
import Button from "../Button";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

interface BookNowCardProps {
  title: string;
  pricing: number;
  rating: number;
  review: number;
  vibe?: string;
  capacity?: number;
  age?: string;
  freeWifi?: boolean;
  date?: string;
}

export default function BookNowCard({
  title,
  pricing,
  rating,
  review,
  vibe,
  capacity,
  age,
  freeWifi,
  date,
}: BookNowCardProps) {
  return (
    <div className={styles.bookNow}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.rating}>
          <Image src={ratingCTA} alt="Rating icon" />
          <h3>
            <span className={openSans.className}>{rating}</span> rating of {review} reviews
          </h3>
        </div>
      </div>
      <ul className={styles.icons}>
        <li>
          <Image src={boatIcon} alt="boat-icon" />
          {vibe} vibe
        </li>
        <li>
          <Image src={peopleIcon} alt="people-icon" />
          Up to {capacity} people
        </li>
        <li>
          <Image src={ageIcon} alt="age-icon" />
          {age} age range
        </li>
        <li>
          <Image src={wifiIcon} alt="wifi-icon" />
          {freeWifi ? "Free WiFi" : "Not included"}
        </li>
        <li>
          <Image src={calendarIcon} alt="calendar-icon" />
          {date}
        </li>
      </ul>
      <div className={styles.cta}>
        <Button variant="primary" color="blue">
          book now
        </Button>
        <span>Prices from €{pricing} per person</span>
      </div>
    </div>
  );
}
