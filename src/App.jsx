import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </>
  );
};

export default App;