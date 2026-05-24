import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Carousel.css";

import carousel1 from "../assets/car1.png";
import carousel2 from "../assets/car2.png";
import carousel3 from "../assets/car3.png";

function HeroCarousel() {

  return (

    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={3000}
    >

      <div className="slide">

        <img
          src={carousel1}
          alt="Fashora Banner"
        />

      </div>

      <div className="slide">

        <img
          src={carousel2}
          alt="Fashora Banner"
        />

      </div>
      <div className="slide">

        <img
          src={carousel3}
          alt="Fashora Banner"
        />

      </div>

    </Carousel>

  );
}

export default HeroCarousel;