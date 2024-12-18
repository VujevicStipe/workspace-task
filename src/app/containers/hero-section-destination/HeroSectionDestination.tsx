import React from "react";
import styles from "./HeroSectionDesinations.module.css";
import Image from "next/image";
import texture from "@/public/routes_texture.svg";
import heroImage from "@/public/hero_image_destination.png";
import BookNowCard from "@/app/components/cards/BookNowCard";

const HeroSectionDestination = () => {
  return (
    <div className={styles.heroSectionDesination}>
      <div className={styles.heroContent}>
        <div className={styles.heroWrapper1}>
          <div className={styles.heroImageText}>
            <h2>party route</h2>
            <h1>The best stories are yet to be told</h1>
          </div>
          <div className="hero-shadow"></div>
          <Image src={heroImage} alt="hero-image" />
        </div>
        <div className={styles.heroWrapper2}>
          <p>
            From mountains and canyons to fjord-like bays, nostalgic old towns
            to most stunning beaches. Get to now Croatia’s twin sister –
            Montenegro
          </p>
          <p>
            Walk the medieval streets of Kotor, dine the most amazing seafood in
            the Fishermans village. Feel like a millionaire in Porto Montenegro,
            the most luxurious marina in this part of the World. Visit nostalgic
            old towns Perast, Risan and Herceg Novi. Hike mountains in Kotor.
            Get wild in Budva and Tivat. Relax in freshly opened, chic Lazure
            marina.
          </p>
          <div className={styles.bookNowWrapper}>
            <BookNowCard
              title="Dubrovnik party route"
              pricing={1136}
              rating={4.9}
              review={461}
              vibe="party"
              capacity={40}
              age="20 - 40"
              freeWifi={true}
              date="July | August"
            />
          </div>
        </div>
      </div>
      <Image src={texture} alt="hero-texture" />
    </div>
  );
};

export default HeroSectionDestination;
