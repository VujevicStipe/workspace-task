import React from "react";
import Image from "next/image";
import starIcon from "@/public/full_star.svg";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const stars = Array(rating).fill(starIcon);

  return (
    <div style={{ display: "flex" }}>
      {stars.map((star, index) => (
        <Image
          key={index}
          src={star}
          alt={`star-${index}`}
          width={20}
          height={20}
        />
      ))}
    </div>
  );
}
