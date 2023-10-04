import React,{useEffect} from "react";
import { useNavigate, Navigate } from "react-router-dom";
import bg from "../assets/images/bg.jpg";
import shopping from "../assets/images/shopping.jpg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../slices/AuthSlice";


const Login = ({ setProgress }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const error = useSelector((state) => state.auth.error);
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
  const navigate = useNavigate();
  const navigateTosignup = () => {
    navigate("/signup");
  };
  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          dispatch(loginAsync(data));
        })}
        className="h-screen bg-cyan-50 text-gray-900 flex  justify-center overflow-y-hidden "
      >
        <div className="max-w-screen-xl max-sm:items-center m-0 sm:my-10 sm:mx-20 xl:mx-40 bg-white shadow sm:rounded-xl flex justify-center flex-1 h-fi">
          <div className="lg:w-1/2 p-6 sm:p-6">
            <div className="mt-4 flex flex-col  items-center">
              <h1 className="text-xl xl:text-2xl font-bold text-[#51c3e6]">
                Login
              </h1>
              <div className="w-full flex-1 mt-4">
                <div className="flex flex-col items-center">
                  <button
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-cyan-50 text-[#51c3e6] flex items-center justify-center transition-all duration-300 ease-in-out  hover:bg-[#1ab8e8]  focus:shadow-sm focus:shadow-outline"
                    onClick={navigateTosignup}
                  >
                    <span className="ml-4">Create Account</span>
                  </button>
                </div>

                <div className="my-2 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or Login with e-mail
                  </div>
                </div>

                <div className="mx-auto max-w-xs">
                  <div className="relative mt-5 mb-2 ">
                    <label htmlFor="UserEmail" className="sr-only">
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="Email"
                      {...register("email", {
                        required: "Enter email",
                        pattern: {
                          value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                          message: "Enter valid email",
                        },
                      })}
                      className="w-full rounded-md  border-gray-200 pe-10 shadow-sm sm:text-sm "
                    />
                    <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/  "
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
                  <div className="relative mt-5 mb-2 h-fit ">
                    <label htmlFor="password" className="sr-only">
                      {" "}
                      Password{" "}
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
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
                      className="w-full rounded-md  border-gray-200 pe-10 shadow-sm sm:text-sm"
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
                  <button className="mt-4 tracking-wide font-semibold bg-[#51c3e6] text-gray-100 w-full py-2 rounded-lg hover:bg-[#68d1f1] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
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
                    <span className="ml-3">Login</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by Surf's{" "}
                    <a href="#" className="text-[#51c3e6] font-bold">
                      Terms of Service{" "}
                    </a>
                    and its{" "}
                    <a href="#" className="text-[#51c3e6] font-bold">
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
           w-full  object-cover bg-center bg-no-repeat rounded-xl shadow-sm border-purple-300 "
            ></img>
          </div>
        </div>
      </form>
      
    </>
  );
};

export default Login;
