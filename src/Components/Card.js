import React from "react";
import Star from "../star.png";

export default function Card(props) {
  let badge;
  if (props.slots === 0) badge = "SOLD OUT";
  else if (props.location === "Online") badge = "ONLINE";
  return (
    <div className="card">
      {badge && <div className="badge-display">{badge}</div>}
      <img src={props.src} className="card-img" />
      <div className="card-stats">
        <img src={Star} className="card-star" />
        <span className="light">{props.rating}</span>
        <span className="gray light"> ({props.reviewCount}) • </span>
        <span className="gray light">USA</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
