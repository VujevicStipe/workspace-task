import React from "react";
import styles from "./TestimonalsSection.module.css";
import Image from "next/image";
import TestimonalCard from "@/app/components/cards/TestimonalCard";
import useDeviceType from "../../hooks/useWindowSize";
import bg from "@/public/testimonals_bg.png";
import avatar from "@/public/avatar.png";

export default function TestimonalsSection() {
  const deviceType = useDeviceType();
  return (
    <div className={`${styles.TestimonalsSection} ${styles[deviceType]}`}>
      <div className={styles.TestimonalsSectionContent}>
        <h2 className={styles.Title}>Our guests love it</h2>
        {/* card */}
        <div className={styles.Wrapper}>
          <TestimonalCard
            title="Amazing experience"
            image={avatar}
            username="Courtney Henry"
            rating={5}
            comment="Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla."
          />
          <TestimonalCard
            title="Amazing experience"
            image={avatar}
            username="Courtney Henry"
            rating={5}
            comment="Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla."
          />
        </div>
      </div>
      <Image src={bg} alt="testimonals-bg" />
    </div>
  );
}
