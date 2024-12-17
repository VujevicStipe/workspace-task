import React from "react";
import styles from "./ExperienceSection.module.css";
import ReviewStats from "@/app/components/ReviewStats";
import SectionTitle from "@/app/components/SectionTitle";
import ExperienceCard from "@/app/components/cards/ExperienceCard";
import expImg1 from "@/public/exp_card_1.png";
import expImg2 from "@/public/exp_card_2.png";
import expImg3 from "@/public/exp_card_3.png";
import expImg4 from "@/public/exp_card_4.png";

const ExperienceSection = () => {
  return (
    <div className={styles.ExperienceSection}>
      <div className={styles.Reviews}>
        <ReviewStats
          variant="rating"
          title="4.8/5"
          subTitle="Based on 325 reviews"
        />
        <ReviewStats
          variant="facebook"
          title="4.8/5"
          subTitle="Based on 325 reviews"
        />
        <ReviewStats
          variant="google"
          title="4.8/5"
          subTitle="Based on 325 reviews"
        />
      </div>
      <SectionTitle
        tag="welcome"
        title="What is Charterag experience"
        details="Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories."
        color="white"
      />
      <div className={styles.ExperinceCardsWrapper}>
        <ExperienceCard title="sail" image={expImg1} />
        <ExperienceCard title="party" image={expImg2} />
        <ExperienceCard title="explore" image={expImg3} />
        <ExperienceCard title="relax" image={expImg4} />
      </div>
    </div>
  );
};

export default ExperienceSection;
