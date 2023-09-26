import React from "react";
import Login from "./Login";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Promo from "../components/Promo";
import CarouselHome from "../components/CarouselHome";
import {useState} from 'react'
import Signup from "./Signup";

const Home = () => {
  const [authenticated,setAuthenticated] = useState(false);
  return (
    <>
    { 
      !authenticated ?
      <Login/>:
      <Navbar>
        <Promo />
        <CarouselHome/>
        <Product />
      </Navbar>
      }
    </>
  );
};

export default Home;
