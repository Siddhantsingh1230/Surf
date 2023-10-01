import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cart from "../assets/images/cart.gif";
import arrow from "../assets/images/arrow.gif";
import RippleBtn from "../components/RippleBtn";
import HomeGif from "../assets/images/home.gif";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartAsync,
  removeFromCartAsync,
  updateCartProductAsync,
} from "../slices/CartSlice";
import { INC, DEC } from "../app/constants";

const Cart = ({ setProgress }) => {
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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(getCartAsync(user.id));
  }, [dispatch]);
  const totalAmount = products.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = products.reduce((count, item) => item.quantity + count, 0);
  const changeQuantity = (item, type) => {
    if (type === INC) {
      if (item.quantity < 5) {
        dispatch(
          updateCartProductAsync({ ...item, quantity: item.quantity + 1 })
        );
        // console.log({...item,quantity:item.quantity+1});
      }
    }

    if (type === DEC) {
      if (item.quantity !== 1) {
        dispatch(
          updateCartProductAsync({ ...item, quantity: item.quantity - 1 })
        );
        // console.log({...item,quantity:item.quantity-1});
      }
    }
  };
  const removeProduct = (productId) => {
    dispatch(removeFromCartAsync(productId));
  };
  return (
    <>
      <svg
        className="hidden sm:block fixed z-10 rotate-90 blur-[5px]  animate-pulse duration-1000  top-20  w-1/6 h-w-1/6 left-10 "
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0F62FE"
          d="M58.5,-68.6C74.4,-56.4,85,-36.6,87.1,-16.6C89.2,3.5,82.8,23.8,72.3,41.4C61.7,59.1,47.1,74.1,28.8,81.8C10.6,89.5,-11.2,90,-29.4,82.6C-47.6,75.1,-62.3,59.8,-72.6,41.9C-82.8,24.1,-88.7,3.7,-86.3,-16.2C-84,-36.1,-73.5,-55.6,-57.7,-67.8C-42,-80.1,-21,-85.2,0.2,-85.4C21.3,-85.6,42.6,-80.8,58.5,-68.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="h-screen bg-gray-100 pt-5">
        <div className="flex sm:sticky backdrop-blur-sm sm:top-5 items-center justify-between mx-5 sm:mx-32  z-20">
          <h1 className=" text-3xl sm:text-2xl font-bold flex items-center ">
            <span>Cart</span>
            <img className="h-10 w-10" src={cart} alt="" />
          </h1>
          <h1 className=" text-2xl font-bold flex items-center">
            <span className="inline-flex items-center rounded-lg bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
              {products.length}
              {products.length > 1 ? " Items" : " Item"}
            </span>
          </h1>
        </div>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 my-10 xl:px-0">
          {/* Sub total */}
          <div className="mt-6 h-full sm:sticky sm:top-24 rounded-lg border z-10 mb-4 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">₹ {totalAmount}</p>
            </div>
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Total Items</p>
              <p className="text-gray-700">X {totalItems}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">₹ 9.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-right">
                  ₹ {totalAmount > 0 ? totalAmount + 9.99 : 0}
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <Link to="/checkout" className={`${totalAmount==0?"pointer-events-none":""}`}>
              <button  className={`select-none mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600`}>
                Check out
              </button>
            </Link>
          </div>
          {products.length > 0 ? (
            <div className="rounded-lg md:w-2/3">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start "
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full rounded-lg sm:w-40 cursor-pointer"
                    />
                  </Link>
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg sm:text-2xl  font-bold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                          {item.category}
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          onClick={(e) => {
                            changeQuantity(item, DEC);
                          }}
                          className="select-none cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <span className="flex justify-center items-center pointer-events-none font-medium  h-8 w-8 border bg-white text-center text-xs outline-none">
                          <p>{item.quantity}</p>
                        </span>
                        <span
                          onClick={(e) => {
                            changeQuantity(item, INC);
                          }}
                          className="select-none cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 ">
                        <p className="text-sm">
                          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                            ₹ {item.price}
                          </span>
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          onClick={() => removeProduct(item.id)}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer  duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            null
          )}
        </div>
        <Link
          to="/"
          className="hidden   sm:sticky sm:bottom-6 ml-5 sm:ml-32 my-8 font-medium sm:flex items-center "
        >
          <img src={arrow} alt="" className="w-8 h-8 rotate-180" />
          &nbsp; <p>Continue shopping</p>
        </Link>
      </div>
      <Link to="/">
        <RippleBtn
          classes={
            "sm:hidden block fixed left-5 bottom-8 bg-white w-auto max-sm:h-auto  px-2 max-sm:px-[.5rem] max-sm:py-[.5rem] z-20"
          }
        >
          <img
            src={HomeGif}
            className=" max-sm:w-4 max-sm:h-4 w-6 h-6"
            alt=""
          />
        </RippleBtn>
      </Link>
    </>
  );
};

export default Cart;
