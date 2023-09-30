import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteteNotificationAsync, getAllNotificationsAsync } from "../slices/NotificationSlice";
import Spinner from "./Spinner";

const Notification = ({notify}) => {
  const dispatch = useDispatch();
  let notiItem = useSelector((state) => state.notificationList.notifications);
  let notiStatus = useSelector((state) => state.notificationList.status);
  const deleteItem =(id)=>{
    dispatch(deleteteNotificationAsync(id));
    dispatch(getAllNotificationsAsync()); 
    
  }
  const close=(e)=>{
    notify(false);
    document.body.classList.remove("h-100vh", "w-100vh", "overflow-hidden")
  }
  //fetching all notifications
  useEffect(()=>{
    dispatch(getAllNotificationsAsync());
  },[dispatch]);
  return (
    <div className="notidiv absolute bg-white border-1 rounded-md shadow-2xl  w-80 h-72 max-sm:w-screen max-sm:h-screen top-[3.5rem] max-sm:top-0 right-28 max-sm:right-0 max-sm:z-30">
      <div className="header flex justify-between px-3 py-1 items-center text-gray-600 font-semibold max-sm:text-xl">
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <hr className="my-0 h-[1px] m-1 border-t-0 bg-gray-600 opacity-40 " />
      <div className="notification content p-1 m-1 rounded-b-lg h-[80%] overflow-y-auto overflow-x-hidden ">
        {notiStatus==="loading"?<Spinner/>:notiItem.length>0?notiItem.map((item) => (
          <div key={item.id} className="content-item m-1 p-1 flex items-center justify-between">
            {item.read === !true ? (  
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
            </button>
          </div>
        )):<p>No notifications</p>}
      </div>
    </div>
  );
};

export default Notification;
