import { useState } from "react";
import fashoraLogo from "../assets/Fashora.png";

import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);



  return (

    <nav className="navbar">

      {/* LEFT SIDE */}

      <div className="left-section">

        {/* MOBILE MENU ICON */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>



        {/* LOGO */}

        <div className="logo-container">

          <img
            src={fashoraLogo}
            alt="logo"
            className="logo-img"
          />

        </div>

      </div>



      {/* NAV LINKS */}

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="/">Home</a></li>

        <li><a href="/">About</a></li>

        <li><a href="/">Services</a></li>

        <li><a href="/">Portfolio</a></li>

        <li><a href="/">Contact</a></li>

      </ul>



      {/* BUTTON */}

      <button className="nav-btn">

        Get Started

      </button>

    </nav>

  );

}



export default Navbar;