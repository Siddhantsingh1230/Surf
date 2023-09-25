import React from "react";

const Deals = () => {
  return (
    <>
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 p-11">
        <img
          alt="Trainer"
          src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
          className="h-32 w-full object-cover md:h-full"
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
