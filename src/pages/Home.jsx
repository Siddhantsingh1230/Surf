import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Promo from "../components/Promo";
import CarouselHome from "../components/CarouselHome";

const Home = ({ setProgress }) => {
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setProgress(100);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => {
        window.removeEventListener("load", onPageLoad);
        setProgress(0);
      };
    }
  }, []);
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
