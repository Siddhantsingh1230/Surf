import React, { useEffect, useState } from "react";
import confetti from "../assets/images/confetti.gif";
import { Link, Navigate, useParams } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import { useSelector, useDispatch } from "react-redux";
import { resetCurrentOrder } from "../slices/OrdersSlice";

const OrderSuccess = ({ setProgress }) => {
  const [isExploding, setIsExploding] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setProgress(100);
    };
    setTimeout(() => {
      setIsExploding(false);
    }, 4000);
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
  const {id} = useParams();
  useEffect(() => {
    dispatch(resetCurrentOrder());
  }, [dispatch, user]);
  return (
    <>
      {!id && <Navigate replace={true} to="/" />}
      {id && isExploding && (
        <ConfettiExplosion
          particleCount={200}
          duration={3000}
          width={2000}
          force={1}
        />
      )}
      {id && (
        <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center shadow-lg bg-white rounded-2xl h-[80%] w-[50%] max-sm:h-screen max-sm:w-screen">
            <img className="h-20 w-20" src={confetti} alt="" />
            <p className=" my-2 text-sm font-medium">
              Hey <span className="text-indigo-600">{user.username}</span>,
            </p>
            <p className=" sm:text-2xl text-lg text-center   mb-3 font-bold">
              Your Order{" "}
              <span className="hover:underline cursor-pointer text-indigo-600">
                #{id}
              </span>{" "}
              is Confirmed !
            </p>
            <p className="mb-5 text-sm sm:w-[60%] w-[80%] text-center">
              You can easily access and review your order details by navigating
              to the 'Orders' section on Surf.
            </p>
            <Link
              className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              to="/orders"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                Orders
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSuccess;
