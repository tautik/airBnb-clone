import React from "react";
import Card from "../Components/Card";
import data from "../Components/data.js";

export default function CardSection() {
  const cards = data.map((item) => {
    return (
      <Card
        slots={item.openSpots}
        src={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  console.log(cards);
  return <div className="card-section">{cards}</div>;
}
