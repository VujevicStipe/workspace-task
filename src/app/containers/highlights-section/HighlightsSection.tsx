import React from "react";
import styles from "./HighlightsSection.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import Image from "next/image";
import HighlightImg1 from "@/public/hl_img_1.png";
import HighlightImg2 from "@/public/hl_img_2.png";
import HighlightImg3 from "@/public/hl_img_3.png";
import HighlightImg4 from "@/public/hl_img_4.png";
import HighlightImg5 from "@/public/hl_img_5.png";
import HighlightImg6 from "@/public/hl_img_6.png";
import HighlightImg7 from "@/public/hl_img_7.png";
import HighlightImg8 from "@/public/hl_img_8.png";
import TripBenefits from "@/app/components/TripBenefits";
import boatIcon from "@/public/boat_icon.svg";
import surferIcon from "@/public/surfer_icon.svg";
import drinkIcon from "@/public/drink_icon.svg";

export default function HighlightsSection() {
  return (
    <div className={styles.HightlightsSection}>
      <SectionTitle
        title="Come live your best life"
        details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
      />
      <div className={styles.ImagesWrapper}>
        <Image src={HighlightImg1} alt="hightlight-image" />
        <Image src={HighlightImg2} alt="hightlight-image" />
        <Image src={HighlightImg3} alt="hightlight-image" />
        <Image src={HighlightImg4} alt="hightlight-image" />
        <Image src={HighlightImg5} alt="hightlight-image" />
        <Image src={HighlightImg6} alt="hightlight-image" />
        <Image src={HighlightImg7} alt="hightlight-image" />
        <Image src={HighlightImg8} alt="hightlight-image" />
      </div>
      <div className={styles.TripBenefitsWrapper}>
        <TripBenefits
          title="A trip like no other"
          icon={boatIcon}
          details="Spend unforgettable 7 days at sea with your crew at your own pace"
        />
        <TripBenefits
          title="Active vacation"
          icon={surferIcon}
          details="Indulge yourself in dozen of parties and activities on your trip"
        />
        <TripBenefits
          title="Bonding"
          icon={drinkIcon}
          details="Meet people from all over the world, discover new friends"
        />
      </div>
    </div>
  );
}
