import React from "react";
import styles from "./ExploreSection.module.css";
import Button from "@/app/components/Button";
import useDeviceType from "@/app/hooks/useWindowSize";
import Image from "next/image";
import Img1 from "@/public/explore_img_1.png";
import Img2 from "@/public/explore_img_2.png";
import Img3 from "@/public/explore_img_3.png";
import { FaInstagram } from "react-icons/fa";

export default function ExploreSection() {
  const deviceType = useDeviceType();

  return (
    <div className={`${styles.ExploreSection} ${styles[deviceType]}`}>
      <div className={styles.Gallery}>
        <Image src={Img1} alt="image1" />
        <Image src={Img2} alt="image2" />
        <Image src={Img3} alt="image3" />
      </div>
      <div className={styles.ExploreSectionText}>
        <h2>Check Charterag <br /> off your bucket list</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. <br /> Tellus lectus non purus odio
          amet
        </p>
      </div>
      <div className={styles.ButtonsWrapper}>
        <Button variant="secondary" color="yellow">
          Explore
        </Button>
        <Button variant="secondary" color="white">
          Follow us <FaInstagram />
        </Button>
      </div>
    </div>
  );
}
