import React ,{useState}from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/images/bg.jpg";
import shopping from "../assets/images/shopping.jpg"

const Login = () => {
  const [email,setEmail] = useState("");
  const [pwd,setPassword] = useState("");
  const navigate = useNavigate();
  const navigateTosignup = () => {
    navigate('/signup');
  };

  
  return (
    <div className="h-screen bg-blue-100 text-gray-900 flex  justify-center overflow-y-hidden ">
      <div
        className="max-w-screen-xl max-sm:items-center m-0 sm:my-10 sm:mx-20 xl:mx-40 bg-white shadow sm:rounded-xl flex justify-center flex-1 h-fi">
        <div className="lg:w-1/2 p-6 sm:p-6">
          
          <div className="mt-4 flex flex-col  items-center">
            <h1 className="text-xl xl:text-2xl font-bold text-purple-600">
              Login
            </h1>
            <div className="w-full flex-1 mt-4">
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-purple-100 text-purple-600 flex items-center justify-center transition-all duration-300 ease-in-out  hover:bg-purple-300  focus:shadow-sm focus:shadow-outline"
                  onClick={navigateTosignup}>
                  <span className="ml-4">
                    Create Account
                  </span>
                </button>

              </div>

              <div className="my-2 border-b text-center">
                <div
                  className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                  Or Login with e-mail
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <div className="relative my-5 ">
                  <label htmlFor="UserEmail" className="sr-only"> Email </label>

                  <input
                    type="email"
                    id="UserEmail"
                    value= {email}
                    placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="w-full rounded-md focus:border-red-600 border-gray-200 pe-10 shadow-sm sm:text-sm "
                  />

                  <span
                    className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
                  >
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
                <div className="relative my-5 h-fit ">
                  <label htmlFor="password" className="sr-only"> Password </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="w-full rounded-md focus:border-red-600 border-gray-200 pe-10 shadow-sm sm:text-sm" />
                  <span
                    className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"
                  >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512" 
                    fill="currentColor"
                    className="h-4 w-4" >
                      <path
                      fillRule="evenodd"
                      d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" 
                      clipRule="evenodd"/>
                      </svg>
                  </span>
                  
                </div>

                <button
                  className="mt-4 tracking-wide font-semibold bg-purple-500 text-gray-100 w-full py-2 rounded-lg hover:bg-purple-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Login
                  </span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Surf's <a href="#" className="text-purple-600 font-bold">
                    Terms of Service </a>
                  and its <a href="#" className="text-purple-600 font-bold">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-12 text-center hidden lg:flex shadow-sm rounded-r-xl" style={{ backgroundImage: `url(${bg})` }}>
          <img src={shopping}
            className="
           w-full bg-contain bg-center bg-no-repeat rounded-xl shadow-sm border-purple-300 "

          ></img>

        </div>
      </div>
    </div>
  )
}

export default Login

