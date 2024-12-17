import React from "react";
import styles from "./OfferSection.module.css";
import SectionTitle from "@/app/components/SectionTitle";

export default function OfferSection() {
  return (
    <div className={styles.OfferSection}>
      <SectionTitle
        tag="payment"
        title="You don’t have to break the bank"
        details="See how lorem ipsum dolor sit"
        color="grey"
      />
    </div>
  );
}
