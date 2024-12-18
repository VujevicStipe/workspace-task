import React from 'react'
import styles from '../page.module.css'
import HeroSectionDestination from '../containers/hero-section-destination/HeroSectionDestination'
import RouteHighlightsSection from '../containers/route-highlights-section/RouteHighlightsSection'
import Step1Section from '../containers/step1-section/Step1Section'
import Step2Section from '../containers/step2-section/Step2Section'
import Step3Section from '../containers/step3-section/Step3Section'
import ClosingCtaSection from '../containers/closing-cta-section/ClosingCtaSection'

export default function Destination() {
  return (
    <div className={styles.page}>
      <HeroSectionDestination />
      <RouteHighlightsSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
      <ClosingCtaSection />
    </div>
  )
}