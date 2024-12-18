import React from "react";
import styles from "./Step2Section.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import FeatureCard from "@/app/components/cards/FeatureCard";
import img1 from "@/public/feature_card_1.png";
import img2 from "@/public/feature_card_2.png";
import img3 from "@/public/feature_card_3.png";

export default function Step2Section() {
  return (
    <div className={styles.step2Section}>
      <SectionTitle
        tag="step 2."
        title="Choose your crew"
        details="Lorem ipsum dolor sit amet"
      />
      <div className={styles.featuresWrapper}>
        <FeatureCard
          variant="left"
          mainTitle="Solo, Cabin or Group of Friends"
          mainP="Solo, with a friend or with the whole crew, we got it all covered! Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
          buttonData="compare cabins"
          image={img1}
          subTitle="Solo"
          subP="Book a single spot and share a bunk bed cabin with a person of the same gender. We have a lot of single travelers just like you. "
        />
        <FeatureCard
          variant="right"
          mainTitle="Catamaran or Monohull"
          mainP="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
          buttonData="compare yachts"
          image={img2}
          subTitle="Catamaran"
          subP="Twin hulled boat - for those who travel in style"
        />
        <FeatureCard
          variant="left"
          mainTitle="Skipper and Host"
          mainP="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
          buttonData="about us"
          image={img3}
          subTitle="Skipper"
          subP="Lorem ipsum dolor sit amet consectetur"
        />
      </div>
    </div>
  );
}
