"use client";
import React, { useState, ReactNode, useEffect, useRef } from "react";
import styles from "./Accordion.module.css";
import chevronDown from "@/public/chevron-down.svg";
import chevronUp from "@/public/chevron-up.svg";
import useDeviceType from "../hooks/useWindowSize";
import Image, { StaticImageData } from "next/image";
import ProgressBar from "./ProgressBar";

interface AccordionItem {
  title: string;
  image: StaticImageData;
  perk1: number;
  perk2: number;
  perk3: number;
  perk4: number;
  perk5: number;
  perk6: number;
  perk7: number;
  perk8: number;
  perk9: number;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const deviceType = useDeviceType();

  useEffect(() => {
    const handleResize = () => {
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.style.maxHeight =
            openIndex === index ? `${ref.scrollHeight}px` : "0px";
        }
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [openIndex]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <Image
              src={openIndex === index ? chevronUp : chevronDown}
              alt={openIndex === index ? "Collapse" : "Expand"}
              className={styles.accordionIcon}
            />
          </div>
          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className={`${styles.accordionContent} ${
              openIndex === index ? styles.open : ""
            } ${styles[deviceType]}`}
          >
            <Image
              className={styles.accordionImage}
              src={item.image}
              alt="image"
            />
            <div className={styles.progressBarWrapper}>
              <div className={styles.col1}>
                <ProgressBar
                  label="Organised parties"
                  value={item.perk1}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Sailweek Regatta"
                  value={item.perk2}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Swim Stops"
                  value={item.perk3}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Sightseeing"
                  value={item.perk4}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Local cuisine"
                  value={item.perk5}
                  rounded={true}
                  direction="col"
                />
              </div>
              <div className={styles.col2}>
                <ProgressBar
                  label="Wine tasting"
                  value={item.perk6}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Island hopping"
                  value={item.perk7}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Exploring cities"
                  value={item.perk8}
                  rounded={true}
                  direction="col"
                />
                <ProgressBar
                  label="Cliff jumping"
                  value={item.perk9}
                  rounded={true}
                  direction="col"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
