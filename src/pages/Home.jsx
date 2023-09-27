import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Promo from "../components/Promo";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
  return (
    <>
      <Navbar>
        <Promo />
        <CarouselHome />
        <Product />
      </Navbar>
    </>
  );
};

export default Home;
