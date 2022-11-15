import React from "react";
import Logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />
    </nav>
  );
}
