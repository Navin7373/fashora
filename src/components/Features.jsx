import "./Features.css";

function Features() {

  const features = [

    {
      id:1,
      title:"Premium Quality",
      desc:"Crafted with high-quality fabrics and elegant finishing."
    },

    {
      id:2,
      title:"Wedding Collections",
      desc:"Exclusive outfits designed for memorable celebrations."
    },

    {
      id:3,
      title:"Fast Delivery",
      desc:"Quick and secure shipping for every order."
    },

    {
      id:4,
      title:"24/7 Support",
      desc:"Friendly customer support whenever you need help."
    }

  ];

  return (

    <section className="features-section">

      <div className="features-title">

        <h2>Why Choose Fashora</h2>

        <p>Fashion Crafted With Passion</p>

      </div>

      <div className="features-container">

        {features.map((item)=>(

          <div className="feature-card" key={item.id}>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Features;