import React,{useEffect} from "react";
import bg from "../assets/images/bg.jpg";
import shopping from "../assets/images/shopping.jpg";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserAsync } from "../slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = ({setProgress}) => {
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <>{user && <Navigate to="/" replace={true} />}
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          dispatch(createUserAsync(data));
        })}
        className="h-screen bg-blue-100 text-gray-900 flex justify-center overflow-y-hidden "
      >
        <div className="max-w-screen-xl max-sm:items-center m-0 sm:my-10 sm:mx-40 bg-white shadow sm:rounded-xl flex justify-center flex-1 h-fi">
          <div className="lg:w-1/2 p-6 sm:p-6 justify-center items-center overflow-hidden overflow-y-auto no-scrollbar">
            <div className="mt-4 flex flex-col items-center">
              <h1 className="text-xl xl:text-2xl font-bold text-purple-600">
                Create Account
              </h1>
              <div className="w-full flex-1 mt-2">
                <div className="mx-auto max-w-xs">
                  <div className="relative mt-3 mb-0">
                    <label htmlFor="UserName" className="sr-only">
                      Your name{" "}
                    </label>
                    <input
                      type="text"
                      id="UserName"
                      {...register("username", { required: "Enter Username",pattern: {
                        value: /[\S\s]+[\S]+/
                        ,
                        message: "Enter valid username",
                      },})}
                      placeholder="First and last name"
                      className="w-full rounded-md focus:border-red-600  border-gray-200 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors.username && (
                    <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                      {errors.username.message}
                    </p>
                  )}
                  <div className="relative mt-3 mb-0 ">
                    <label htmlFor="phoneNumber" className="sr-only">
                      {" "}
                      Phone Number{" "}
                    </label>

                    <input
                      type="tel"
                      id="phoneNumber"
                      {...register("phone", {
                        required: "Enter Phone No.",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Enter valid Phone No.",
                        },
                      })}
                      placeholder="Mobile number"
                      className="w-full rounded-md focus:border-red-600 border-gray-200 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors.phone && (
                    <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                      {errors.phone.message}
                    </p>
                  )}
                  <div className="relative mt-3 mb-0 ">
                    <label htmlFor="UserEmail" className="sr-only">
                      {" "}
                      Email{" "}
                    </label>

                    <input
                      type="email"
                      id="UserEmail"
                      {...register("email", {
                        required: "Enter email",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Enter valid email",
                        },
                      })}
                      placeholder="Email"
                      className="w-full rounded-md focus:border-red-600 border-gray-200 pe-10 shadow-sm sm:text-sm"
                    />

                    <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors.email && (
                    <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                      {errors.email.message}
                    </p>
                  )}
                  <div className="relative mt-3 mb-0 h-fit ">
                    <label htmlFor="password" className="sr-only">
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="password"
                      id="password"
                      {...register("password", {
                        required: "Enter password",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                          message: `- at least 8 characters
                    - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                    - Can contain special characters`,
                        },
                      })}
                      placeholder="Password"
                      className="w-full rounded-md focus:border-red-600 border-gray-200 pe-10 shadow-sm sm:text-sm"
                    />
                    <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors.password && (
                    <p className="inline-flex items-center rounded-md  px-2 py-0 text-xs font-medium text-red-700 ">
                      {errors.password.message}
                    </p>
                  )}
                  <button className="mt-4 tracking-wide font-semibold bg-purple-500 text-gray-100 w-full py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account ?{" "}
                    <Link to="/login" className="text-purple-600 font-bold">
                      LogIn
                    </Link>
                  </p>
                  <p className="mt-4 text-xs text-gray-600 text-center">
                    I agree to abide by surf's{" "}
                    <a href="#" className="text-purple-600 font-bold">
                      Terms of Service{" "}
                    </a>
                    and its{" "}
                    <a href="#" className="text-purple-600 font-bold">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-1 p-12 text-center hidden lg:flex shadow-sm rounded-r-xl"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <img
              src={shopping}
              className="
           w-full bg-contain bg-center bg-no-repeat rounded-xl shadow-sm border-purple-300 "
            ></img>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
