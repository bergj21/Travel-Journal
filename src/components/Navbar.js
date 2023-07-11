import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar">
        <FontAwesomeIcon icon={faEarthEurope} className="nav-logo" />
        <span>my travel journal.</span>
    </nav>
  );
}

export default Navbar;
