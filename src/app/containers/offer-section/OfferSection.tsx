import React from "react";
import styles from "./OfferSection.module.css";
import useDeviceType from "@/app/hooks/useWindowSize";
import SectionTitle from "@/app/components/SectionTitle";
import OfferCard from "@/app/components/cards/OfferCard";

export default function OfferSection() {
  const deviceType = useDeviceType();
  return (
    <div className={`${styles.OfferSection} ${styles[deviceType]}`}>
      <SectionTitle
        tag="payment"
        title="You don’t have to break the bank"
        details="See how lorem ipsum dolor sit"
        color="grey"
      />
      <div className={styles.CardsWrapper}>
        <OfferCard
          title="Sailweek experience"
          tag="from 787€"
          variant="blue"
          perk1={true}
          perk2={true}
          perk3={true}
          perk4={true}
          perk5={true}
          perk6={true}
        />
        <OfferCard
          title="Individual experience"
          variant="white"
          perk1={true}
          perk2={true}
        />
      </div>
    </div>
  );
}
