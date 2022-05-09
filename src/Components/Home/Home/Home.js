import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
