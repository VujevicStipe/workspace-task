import React from "react";
import styles from "./RouteHighlightsSection.module.css";
import RouteHighlightsCard from "@/app/components/cards/RouteHighlightsCard";
import img1 from "@/public/route_high_1.png";
import img2 from "@/public/route_high_2.png";
import img3 from "@/public/route_high_3.png";
import img4 from "@/public/route_high_4.png";
import img5 from "@/public/route_high_5.png";
import img6 from "@/public/route_high_6.png";

export default function RouteHighlightsSection() {
  return (
    <div className={styles.routeHightlights}>
      <h2 className={styles.heading}>Route Highlights</h2>
      <div className={styles.cardsWrapper}>
        <RouteHighlightsCard
          image={img1}
          title="Fjord Like Bays"
          details="Where the sea meets the mountains. Sail the Bay of Kotor, often called Europe’s most southernmost fjord. Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless."
        />
        <RouteHighlightsCard
          image={img2}
          title="Nostalgic Coastal Towns"
          details="Perast, Kotor, Tivat, Budva, Sveti Stefan…Montenegro is full of traditional Mediterranean coastal towns where locals still live with the nature. Sustainable tourism, local way of life and world famous Montenegrin hospitality."
        />
        <RouteHighlightsCard
          image={img3}
          title="Beach Parties"
          details="Summer Vibes at it’s best. The most amazing Montenegrin beaches, cocktails and live DJs. Dance the night away."
        />
        <RouteHighlightsCard
          image={img4}
          title="Wellness Oasis"
          details="Relax and enjoy swimming pool area, gym, yoga, massages and saunas in the freshly opened, chic, Lazure Marina. This traditional marina has everything you wish for, from fine dining restaurants to burger bars, cocktails and freshly squeezed fruit stands. Celebrate traditional Montenegrin hospitality and freshness of local produce."
        />
        <RouteHighlightsCard
          image={img5}
          title="Charterag Regatta"
          details="Is there anything better than sailing and having fun with your mates? Get behind the helm, pull ropes, switch sides and most important, have fun. On SailWeek there are no losers. Everybody wins!!!"
        />
        <RouteHighlightsCard
          image={img6}
          title="Spectacular Mountain Views"
          details="Hike the peak of Lovcen mountain or catch a taxi to the top, for the most spectacular view of the surrounding mountains, postcard perfect cliffs and romantic bays."
        />
      </div>
    </div>
  );
}
