import React from "react";
import { Link } from "react-router-dom";
import RippleBtn from "../components/RippleBtn";
import HomeGif from "../assets/images/home.gif";

const Deals = () => {
  return (
    <>
      <Link to="/">
        <RippleBtn classes={"fixed left-5 top-3 bg-white w-auto px-2 max-sm:px-4 z-20"}>
          <img src={HomeGif} className="max-sm:w-5 max-sm:h-5 w-6 h-6 " alt="" />
        </RippleBtn>
      </Link>
      <section className="overflow-hidden  shadow-2xl md:grid md:grid-cols-3 p-16">
        <img
          alt="Trainer"
          src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-32 w-full object-cover md:h-full rounded-lg"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Run with the pack
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Get 20% off
            </span>

            <span className="mt-2 block text-sm">
              On your next order over $50
            </span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
            href=""
          >
            Get Discount
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Offer valid until 24th March, 2021 *
          </p>
        </div>
      </section>
    </>
  );
};

export default Deals;
