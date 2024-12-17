import React from "react";
import styles from "./DestinationSection.module.css";
import useDeviceType from "../../hooks/useWindowSize";
import SectionTitle from "@/app/components/SectionTitle";
import RouteCard from "@/app/components/cards/RouteCard";
import Image from "next/image";
import RouteImg1 from "@/public/route_card_1.png";
import RouteImg2 from "@/public/route_card_2.png";
import RouteImg3 from "@/public/route_card_3.png";
import RouteImg4 from "@/public/route_card_4.png";
import Texture from "@/public/routes_texture.svg";

export default function DestinationSection() {
  const deviceType = useDeviceType();

  return (
    <div className={`${styles.DesinationSeciton} ${styles[deviceType]}`}>
      <SectionTitle
        tag="destinations"
        title="Whether it’s a bash or bliss — the choice is yours"
        details="On our customized sailing adventures, embracing the thrill of our party routes or unwinding on our relaxing voyages — crafting your perfect journey at sea has never been easier"
      />
      {/* routes 6,35px top margin */}
      <div className={styles.DestinationCardsWrapper}>
        <RouteCard
          image={RouteImg1}
          title="Party Route"
          subtitle="From €710/person "
          party={75}
          adventure={35}
        />
        <RouteCard
          image={RouteImg2}
          title="Ultra Route"
          subtitle="From €710/person "
          party={88}
          adventure={27}
        />
        <RouteCard
          image={RouteImg3}
          title="Greece Route"
          subtitle="From €710/person "
          party={42}
          adventure={76}
        />
        <RouteCard
          image={RouteImg4}
          title="Adventure Route"
          subtitle="From €710/person "
          party={10}
          adventure={90}
        />
      </div>
      <Image className={styles.Texture} src={Texture} alt="texture" />
    </div>
  );
}
