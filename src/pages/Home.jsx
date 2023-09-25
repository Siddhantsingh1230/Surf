import React from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Promo from "../components/Promo";

const Home = () => {
  return (
    <>
      <Navbar>
        <Promo />
        <Product />
      </Navbar>
    </>
  );
};

export default Home;
