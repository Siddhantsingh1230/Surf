import React from "react";
import bgimg from"../assets/images/bgim.jpg";


const Profile = () => {
  return (
    <main className="profile-page overflow-hidden">
      <section className="relative block h-500-px">
        <div
          className=" top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:`url(${bgimg})`,
          }}>
        </div>
      </section>
      <section className="relative py-4 bg-blueGray-200 ">
        <div className="container mx-auto px-32 max-sm:px-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-72 max-sm:-mt-48">
            <div className="px-12">
              <div className="flex flex-wrap justify-center">
                <div className="px-12 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="shadow-xl rounded-full h-auto align-middle -mt-32 w-80"
                    />
                  </div>
                </div>
                
              </div>
              <div className="text-center mt-2">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                  Jenna Stones
                </h3>
                <div className="text-sm leading-normal mt-0 mb-4 text-blueGray-400 font-bold uppercase">
                < i class="ri-smartphone-line mr-2"/>
                  99093-29029
                </div>
                <div className="mt-0 mb-4 text-blueGray-500 flex items-center justify-center ">
                < i class="ri-mail-line mr-2"/>
                  jennastones@gmail.com
                </div>
                <div className="text-sm leading-normal mt-0 text-blueGray-400 font-bold uppercase mb-32 ">
                < i class="ri-home-4-fill mr-2"/>
                  Los Angeles, California
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <footer className="relative bg-blueGray-200 pt-5 pb-5 mt-8 max-sm:mt-0">
                <div className="text-sm text-blueGray-500 font-semibold py-1 text-center max-sm:py-0">
                   All rights reserved © 2023 Surf
                </div>
        </footer>
      </section>
    </main>
  );
};

export default Profile;
