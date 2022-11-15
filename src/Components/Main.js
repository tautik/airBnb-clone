import React from "react";
import MainImg from "../main_img.svg";

export default function Main() {
  return (
    <main>
      {/* <img src={MainImg} className="main--img" alt="main--image" /> */}
      <div className="main-content">
        <h2>Online Experiences</h2>
        <p className="main-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </main>
  );
}
