import React, { use } from "react";
import styles from "./OfferCard.module.css";
import useDeviceType from "@/app/hooks/useWindowSize";
import Image from "next/image";
import checkBadgeTrue from '@/public/check_badge_available.svg'
import checkBadgeFalse from '@/public/check_badge_unavailable.svg'

interface OfferCardProps {
  title: string;
  tag?: string;
  variant: string;
  perk1?: boolean;
  perk2?: boolean;
  perk3?: boolean;
  perk4?: boolean;
  perk5?: boolean;
  perk6?: boolean;
}

export default function OfferCard({
  title,
  tag,
  variant,
  perk1,
  perk2,
  perk3,
  perk4,
  perk5,
  perk6,
}: OfferCardProps) {
  const deviceType = useDeviceType()
  return (
    <div className={`${styles.OfferCard} ${styles[variant]} ${styles[deviceType]}`}>
      <div className={styles.Title}>
        <h2>{title}</h2>
        {tag && (
          <div className={styles.Tag}>
            <span>{tag}</span>
          </div>
        )}
      </div>
      <ul className={styles.OfferPerks}>
        <li> <span><Image src={perk1 ? checkBadgeTrue : checkBadgeFalse} alt="check-badge" /></span>experience</li>
        <li> <span><Image src={perk2 ? checkBadgeTrue : checkBadgeFalse} alt="check-badge" /></span>lorem ipsum dolor</li>
        <li> <span><Image src={perk3 ? checkBadgeTrue : checkBadgeFalse} alt="check-badge" /></span>dolor sit et</li>
        <li> <span><Image src={perk4 ? checkBadgeTrue : checkBadgeFalse} alt="check-badge" /></span>lorem ipsum dolor</li>
        <li> <span><Image src={perk5 ? checkBadgeTrue : checkBadgeFalse} alt="check-badge" /></span>et santi dolor sum</li>
        <li> <span><Image src={perk6 ? checkBadgeTrue : checkBadgeFalse} alt="check-badge" /></span>ipsum lorem dolor sit et</li>
        </ul>
    </div>
  );
}
