import "./Products.css";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

function Products() {

  const products = [
    {
      id:1,
      image:product1,
      name:"Classic T-Shirt",
      price:"₹799"
    },

    {
      id:2,
      image:product2,
      name:"Modern Outfit",
      price:"₹1499"
    },

    {
      id:3,
      image:product3,
      name:"Stylish Wear",
      price:"₹999"
    },

    {
      id:4,
      image:product4,
      name:"Premium Style",
      price:"₹1999"
    }
  ];

  return (
    <section className="products-section">

      <h2>Featured Products</h2>

      <div className="products">

        {products.map((item) => (
          
          <div className="card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Add To Cart</button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Products;