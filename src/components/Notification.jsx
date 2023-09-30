import React from "react";
import { useState } from "react";

const Notification = (prop) => {
  const notiItem = [
    { id:1, msg: "hello", date: "01-02-03", read: true },
    { id:2, msg: "hello", date: "01-02-03", read: true },
    { id:3, msg: "hello", date: "01-02-03", read: true },
    { id:4, msg: "hello", date: "01-02-03", read: false },
    { id:5, msg: "hello", date: "01-02-03", read: false },
    { id:6, msg: "hello", date: "01-02-03", read: false },
    { id:7, msg: "hello", date: "01-02-03", read: false },
    { id:8, msg: "hello", date: "01-02-03", read: false },
    { id:9, msg: "hello", date: "01-02-03", read: false },
    { id:10, msg: "hello", date: "01-02-03", read: false },
  ];
  const [notilist,setList] = useState(notiItem);
  const deleteItem =(id)=>{
    let list = notilist.filter((item)=>item.id!=id)
    setList(list);
  }
  const close=(e)=>{
    prop.notify(false);
  }
  return (
    <div className="notidiv absolute bg-white border-1 rounded-md shadow-sm shadow-gray-300 w-80 h-72 top-[3.5rem] right-28">
      <div className="header flex justify-between px-3 py-1 items-center text-gray-600 font-semibold">
        <p>Notifications</p>
        <button
          type="button"
          className="bg-white rounded-md p-1  inline-flex items-center justify-center text-gray-600 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-100"
          onClick={close}>
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <hr className="my-0 h-0.5 m-1 border-t-0 bg-gray-600 opacity-100 dark:opacity-50" />
      <div className="notification content p-1 m-1 rounded-b-lg h-[80%] overflow-y-auto overflow-x-hidden ">
        {notilist.map((item) => (
          <div className="content-item m-1 p-1 flex items-center justify-between">
            {item.read === true ? (
              <div className="p-0.5">
                <button className="w-2 h-2 rounded-full bg-red-600"></button>
              </div>
            ):<div className="p-0.5">
            <button className="w-2 h-2 rounded-full bg-white-600"></button>
          </div>}
            <div className="w-full mx-4">
              <p className=" text-sm font-medium">{item.msg}</p>
              <p className=" text-xs text-gray-500">{item.date}</p>
            </div>
            <button 
              className="text-gray-800 hover:text-gray-500 text-sm bg-white hover:bg-slate-100 font-medium px-2 py-2 rounded-md inline-flex space-x-1 items-center"
              onClick={()=>deleteItem(item.id)}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
