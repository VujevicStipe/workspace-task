"use client";
import styles from "./page.module.css";
import ExperienceSection from "./containers/experience-section/ExperienceSection";
import DestinationSection from "./containers/destinations-section/DestinationSection";
import TestimonalsSection from "./containers/testimonals-section/TestimonalsSection";
import HighlightsSection from "./containers/highlights-section/HighlightsSection";
import OfferSection from "./containers/offer-section/OfferSection";
import DiscountSection from "./containers/discount-section/DiscountSection";
import ExploreSection from "./containers/explore-section/ExploreSection";
import HeroSectionHome from "./containers/hero-section-home/HeroSectionHome";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSectionHome />
      <ExperienceSection />
      <DestinationSection />
      <TestimonalsSection />
      <HighlightsSection />
      <OfferSection />
      <DiscountSection />
      <ExploreSection />
    </div>
  );
}
