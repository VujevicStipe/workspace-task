import React from "react";
import styles from "./Step1Section.module.css";
import SectionTitle from "@/app/components/SectionTitle";
import Accordion from "@/app/components/Accordion";
import { AccordionItem } from '../../types/accordionItem';
import ultraRoute from '@/public/accordion1.png'
import partyRoute from '@/public/route_card_1.png'
import greeceRoute from '@/public/route_card_3.png'
import adventureRoute from '@/public/route_card_4.png'

export default function Step1Section() {
    const accordionItems: AccordionItem[] = [
        {
          title: "Ultra Route",
          image: ultraRoute,
          perk1: 100,
          perk2: 100,
          perk3: 60,
          perk4: 30,
          perk5: 0,
          perk6: 0,
          perk7: 15,
          perk8: 15,
          perk9: 67,
        },
        {
          title: "Party Route",
          image: partyRoute,
          perk1: 90,
          perk2: 30,
          perk3: 90,
          perk4: 10,
          perk5: 25,
          perk6: 60,
          perk7: 35,
          perk8: 0,
          perk9: 45,
        },
        {
          title: "Greece Route",
          image: greeceRoute,
          perk1: 60,
          perk2: 70,
          perk3: 80,
          perk4: 100,
          perk5: 60,
          perk6: 10,
          perk7: 20,
          perk8: 65,
          perk9: 5,
        },
        {
          title: "Adventure Route",
          image: adventureRoute,
          perk1: 30,
          perk2: 60,
          perk3: 35,
          perk4: 75,
          perk5: 0,
          perk6: 20,
          perk7: 10,
          perk8: 0,
          perk9: 45,
        },
      ];

  return (
    <div className={styles.step1Section}>
      <SectionTitle
        tag="step 1."
        title="Choose your route"
        details="Explore what you can get for in each route"
      />
      <div className={styles.accordion}>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}
