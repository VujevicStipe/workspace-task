"use client";
import React, { useEffect, useState } from "react";
import styles from "./TestimonialsSection.module.css";
import Image from "next/image";
import TestimonialCard from "@/app/components/cards/TestimonialCard";
import useDeviceType from "../../hooks/useWindowSize";
import bg from "@/public/testimonals_bg.png";
import avatar from "@/public/avatar.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    title: "Exceptional service",
    image: avatar,
    username: "Alex Johnson",
    rating: 5,
    comment:
      "Vivamus cursus orci eget dolor euismod, nec ultricies ligula aliquam. Curabitur a justo sapien. In eget consectetur nisi.",
  },
  {
    title: "Amazing experience",
    image: avatar,
    username: "Alice Henry",
    rating: 4,
    comment:
      "Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem eleifend diam tellus magnis volutpat nulla.",
  },
  {
    title: "Great stuff",
    image: avatar,
    username: "Mate Neeson",
    rating: 3,
    comment:
      "Vivamus cursus orci eget dolor euismod, nec ultricies ligula aliquam.",
  },
  {
    title: "Amazing Destination",
    image: avatar,
    username: "Lisa Alex",
    rating: 4,
    comment: "Vivamus cursus orci eget dolor euismod",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const deviceType = useDeviceType();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.TestimonialsSection} ${styles[deviceType]}`}>
      <div className={styles.TestimonialsSectionContent}>
        <h2 className={styles.Title}>Our guests love it</h2>
        <div className={styles.Wrapper}>
          <motion.div
            className={styles.SliderContainer}
            animate={{ x: `-${index * 33.75}rem` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className={styles.SliderCard}>
                <TestimonialCard
                  title={testimonial.title}
                  image={testimonial.image}
                  username={testimonial.username}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Image src={bg} alt="testimonals-bg" />
    </div>
  );
}
