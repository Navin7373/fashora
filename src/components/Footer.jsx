import "./Footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}

        <div className="footer-box">

          <h2>FASHORA</h2>

          <p>
            Premium fashion collections crafted with elegance,
            tradition, and modern style.
          </p>

        </div>

        {/* Column 2 */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>
            <li>Collections</li>
            <li>Products</li>
            <li>About</li>

          </ul>

        </div>

        {/* Column 3 */}

        <div className="footer-box">

          <h3>Collections</h3>

          <ul>

            <li>Wedding Wear</li>
            <li>Traditional</li>
            <li>Modern Fashion</li>
            <li>Kids Collection</li>

          </ul>

        </div>

        {/* Column 4 */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>Email: fashora@gmail.com</p>

          <p>Phone: +91 9876543210</p>

          <p>Location: Chennai, India</p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 Fashora. All Rights Reserved.
        </p>

      </div>

    </footer>

  );
}

export default Footer;