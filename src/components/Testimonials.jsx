import "./Testimonials.css";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

function Testimonials() {

  const reviews = [

    {
      id:1,
      image:client1,
      name:"Sophia",
      review:"Absolutely loved the collection. Premium quality and elegant designs."
    },

    {
      id:2,
      image:client2,
      name:"Daniel",
      review:"Fashora made my wedding outfit look classy and stylish."
    },

    {
      id:3,
      image:client3,
      name:"Emily",
      review:"Beautiful craftsmanship and modern fashion collections."
    }

  ];

  return (

    <section className="testimonial-section">

      <div className="testimonial-title">

        <h2>What Our Clients Say</h2>

        <p>Customer Experiences</p>

      </div>

      <div className="testimonial-container">

        {reviews.map((item)=>(

          <div className="testimonial-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <p className="review">
              "{item.review}"
            </p>

            <h3>{item.name}</h3>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Testimonials;