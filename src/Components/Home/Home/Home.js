import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import Spinner from "../../Spinner/Spinner";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Contact></Contact>
    </div>
  );
};

export default Home;
