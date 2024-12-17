"use client";
import styles from "./page.module.css";
import useDeviceType from "./hooks/useWindowSize";
import HeroSection from "./containers/hero-section/HeroSection";
import ExperienceSection from "./containers/experience-section/ExperienceSection";
import DestinationSection from "./containers/destinations-section/DestinationSection";
import TestimonalsSection from "./containers/testimonals-section/TestimonalsSection";
import HighlightsSection from "./containers/highlights-section/HighlightsSection";
import OfferSection from "./containers/offer-section/OfferSection";

export default function Home() {
  const deviceType = useDeviceType();
  return (
    <div className={`${styles.page} ${styles[deviceType]}`}>
      <HeroSection />
      <ExperienceSection />
      <DestinationSection />
      <TestimonalsSection />
      <HighlightsSection />
      <OfferSection />
    </div>
  );
}
