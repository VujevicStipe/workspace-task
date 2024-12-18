import React from "react";
import styles from "./ClosingCtaSection.module.css";
import Image from "next/image";
import Button from "@/app/components/Button";
import bgImg from "@/public/testimonals_bg.png";
import icon from "@/public/tertiary_btn_icon.svg";

export default function ClosingCtaSection() {
  return (
    <div className={styles.closingCtaSection}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Ready to go?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio
            amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc.
          </p>
          <Button variant="tertiary" color="white">
            Explore our desinations <Image src={icon} alt="arrow" />
          </Button>
        </div>
      </div>
      <Image className={styles.background} src={bgImg} alt="bg-img" />
    </div>
  );
}
