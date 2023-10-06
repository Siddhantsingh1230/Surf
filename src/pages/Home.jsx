import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Promo from "../components/Promo";
import CarouselHome from "../components/CarouselHome";
import {useNavigate} from "react-router-dom";

const Home = ({ setProgress ,search,setSearch,startsearch,setStartSearch}) => {
  const navigate=useNavigate();
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
  useEffect(()=>{
    if(startsearch  && search!="" ){
      setSearch(search);
      setStartSearch(false)
      navigate("/productpagelist")
    }
    else if(startsearch){
      setStartSearch(false)
    }
  },[search,startsearch])
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Products", href: "/productpagelist", current: false },
    { name: "Category", href: "/category", current: false },
    { name: "Deals", href: "/deals", current: false },
  ];
  return (
    <>
      <Navbar navigation={navigation} search={search} setSearch={setSearch} startsearch={startsearch} setStartSearch={setStartSearch}>
        <Promo />
        <CarouselHome />
        <Product />
      </Navbar>
    </>
  );
};

export default Home;
