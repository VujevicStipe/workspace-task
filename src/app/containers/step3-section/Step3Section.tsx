import React from "react";
import styles from "./Step3Section.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import DiscountCard from "@/app/components/cards/DiscountCard";

export default function Step3Section() {
  return (
    <div className={styles.step3Section}>
      <SectionTitle
        tag="step 3."
        title="Pay and sail"
        details="We make it easy to split the cost between your crew and pay in instalments."
      />
      <div className={`DiscountCardsWrapper ${styles.margin0}`}>
        <DiscountCard
          variant={1}
          color="blue"
          title="10%"
          discount={10}
          details="pay when booking"
        />
        <DiscountCard
          variant={2}
          color="blue"
          title="40%"
          discount={50}
          details="pay 30 days after booking"
        />
        <DiscountCard
          variant={3}
          color="blue"
          title="50%"
          discount={100}
          details="pay 60 days before trip"
        />
      </div>
    </div>
  );
}
