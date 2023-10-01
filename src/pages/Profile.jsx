import React , { Fragment, useRef, useState } from "react";
import bgimg from"../assets/images/bgim.jpg";
import { Dialog, Transition } from '@headlessui/react';


const Popup = (props)=>{
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>{setOpen(false); props.pop(false)}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
          <div className="flex min-h-full justify-center text-center items-center  " >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-gray-200 shadow-2xl transition-all  sm:max-w-lg">
                <div className="bg-indigo-200 px-16 sm:p-6 max-sm:p-0" >
                  <div className="sm:flex">
                    <div className=" mt-2 text-center max-sm:mt-0 max-sm:p-6">
                      <div className=" mx-16 relative flex justify-center items-center max-sm:mx-2">
                        <img 
                        alt="..."
                        src={props.newurl}
                        className="shadow-xl rounded-full h-64 w-64 max-sm:h-48 max-sm:w-48"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-100 px-4 py-3 sm:flex justify-between sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#4F46E5] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6d67de] border-none outline-none sm:ml-3 sm:w-auto"
                    onClick={() => 
                    {props.url(props.newurl);
                      setOpen(false);
                      props.pop(false)
                    }}>
                    Change
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-none outline-none ring-indigo-200 hover:bg-indigo-100 hover:ring-indigo-300 sm:mt-0 sm:w-auto"
                    onClick={() => {setOpen(false);
                      props.pop(false)}}
                    ref={cancelButtonRef}>
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const Profile = () => {
  const [url,seturl]=useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
  const [newurl,setnewurl] = useState(url)
  const [pop,setpop] = useState(false);
  const changeImage=()=>{
      let input = document.createElement('input');
      input.type ='file';
      input.accept="image/*"
      input.click();
      input.onchange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          const newUrl = URL.createObjectURL(selectedFile);
          setnewurl(newUrl);
          setpop(true);
        }
      };
  } 

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
                      src={url}
                      className="shadow-xl rounded-full h-72 align-middle -mt-32 w-72"
                      onClick={changeImage}/>
                      
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
      {pop && <Popup newurl={newurl} url={seturl} pop={setpop} />}
    </main>
  );
};

export default Profile;
