import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import HeroCarousel from "./components/Carousel";
import HappyFaces from "./components/HappyFaces";
import Collections from "./components/Collections";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Categories />
      <Collections /> 
      <HappyFaces />
      <Products />
      <About />
      <Testimonials />
      <Features />
      <Footer />
    </>
  );
}

export default App;