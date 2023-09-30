import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="w-full flex justify-center h-full items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className="goog-te-spinner w-7 sm:w-[3%]"  height="auto" viewBox="0 0 66 66"><circle className="goog-te-spinner-path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle></svg>
      </div>
    </>
  );
};

export default Spinner;
