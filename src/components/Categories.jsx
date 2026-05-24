import "./Categories.css";

import menFashion from "../assets/cat1.png";
import womenCollection from "../assets/cat2.png";
import kidsWear from "../assets/cat3.png";

function Categories() {

  const data = [
    {
      id:1,
      title:"Men Fashion",
      image:menFashion
    },

    {
      id:2,
      title:"Women Collection",
      image:womenCollection
    },

    {
      id:3,
      title:"Kids Wear",
      image:kidsWear
    }
  ];

  return (
    <section className="categories">

      <h2>Shop By Category</h2>

      <div className="category-container">

        {data.map((item) => (

          <div className="category-card" key={item.id}>

            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;