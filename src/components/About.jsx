import "./About.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";

function About() {

  return (

    <section className="about-section">

      <div className="about-title">

        <h2>About Us</h2>

        <p>Who We Are</p>

      </div>

      <div className="about-container">

        <div className="about-images">

          <img
            className="main-img"
            src={about2}
            alt=""
          />

          <img
            className="small-img"
            src={about1}
            alt=""
          />

        </div>

        <div className="about-content">

          <h3>About Fashora</h3>

          <p>
            Fashora is a premium fashion boutique focused on elegant
            collections for men, women, and kids. We blend modern
            trends with timeless traditional designs to create outfits
            that feel stylish and unique.
          </p>

          <p>
            From wedding collections to handcrafted fashion pieces,
            our goal is to make every customer feel confident,
            comfortable, and fashionable.
          </p>

          <button>Read More</button>

        </div>

      </div>

    </section>

  );
}

export default About;