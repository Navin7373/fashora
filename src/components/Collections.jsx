import "./Collections.css";
import wedding1 from "../assets/wedding1.png";
import wedding2 from "../assets/wedding2.png";
import wedding3 from "../assets/wedding3.png";

function Collections() {

  const collections = [

    {
      id:1,
      image:wedding1,
      title:"Bridal Collection",
      desc:"Graceful style for your special day."
    },

    {
      id:2,
      image:wedding2,
      title:"Groom Collection",
      desc:"Sophisticated looks for the modern groom."
    },

    {
      id:3,
      image:wedding3,
      title:"Wedding Collection",
      desc:"Curated Style for your perfect celebration together."
    }

  ];

  return (

    <section className="collections-section">

      <div className="collection-title">

        <h2>Wedding Collections</h2>

        <p>Exclusive Fashion Styles</p>

      </div>

      <div className="collections-container">

        {collections.map((item)=>(

          <div className="collection-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="collection-overlay">

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button>Explore</button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Collections;