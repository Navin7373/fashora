import "./HappyFaces.css";
import happy1 from "../assets/happy1.png";
import happy2 from "../assets/happy2.png";
import happy3 from "../assets/happy3.png";
import happy4 from "../assets/happy4.png";
import happy5 from "../assets/happy5.png";

function HappyFaces() {

  const faces = [

    {
      id:1,
      image:happy1
    },

    {
      id:2,
      image:happy2
    },

    {
      id:3,
      image:happy3
    },

    {
      id:4,
      image:happy4
    },

    {
      id:5,
      image:happy5
    }

  ];

  return (

    <section className="happy-section">

      <div className="title">

        <h2>Our Happy Faces</h2>

        <p>Trusted by Fashion Lovers</p>

      </div>

      <div className="faces-container">

        {faces.map((item)=>(

          <div className="face-card" key={item.id}>

            <img src={item.image} alt="" />

          </div>

        ))}

      </div>

    </section>

  );
}

export default HappyFaces;