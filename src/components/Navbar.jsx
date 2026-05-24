import "./Navbar.css";
import logo from "../assets/Fashora.png";

function Navbar() {
  return (

    <nav className="navbar">

      {/* Logo Section */}

      <div className="logo-container">

        <img src={logo} alt="Fashora Logo" className="logo-img" />

      </div>

      {/* Navigation Links */}

      <ul className="nav-links">

        <li><a href="#">Home</a></li>

        <li><a href="#">Collections</a></li>

        <li><a href="#">Products</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">Contact</a></li>

      </ul>

      {/* Button */}

      <button className="nav-btn">
        Shop Now
      </button>

    </nav>

  );
}

export default Navbar;