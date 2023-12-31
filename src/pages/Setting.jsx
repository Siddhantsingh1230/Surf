import React, { useState,useEffect } from "react";
import Accounts from "../components/AccountSetting";
import BillingSetting from "../components/BillingSetting";
import NotificationSetting from "../components/NotificationSetting";

const Setting = ({setProgress}) => {
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
  //border-l-blue-700 text-blue-700
  const [active, setActive] = useState("Accounts");
  const [checked, setChecked] = useState(false);
  const activePage = (e) => {
    e.target.classList.add("border-l-blue-700", "text-blue-700");
    let children = e.target.parentNode.children;
    Array.from(children).forEach((child) => {
      if (child !== e.target) {
        child.classList.remove("border-l-blue-700", "text-blue-700");
      }
    });
    setActive(e.target.innerText);
  };
  const activeMobilePage = (e) => {
    setActive(e.target.innerText);
    e.target.parentNode.parentNode.querySelector('label').click();
  };
  return (
    <div>
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-10 ">
        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-8 pt-3 pb-8 sm:grid-cols-10">
          <div className="relative my-4 col-span-8 sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
              onChange={(e)=>setChecked(e.target.checked)}
              checked={checked}
            />
            <label
              htmlFor="select-1"
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
            >
              {active}{" "}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <li
                onClick={activeMobilePage}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Accounts
              </li>
              <li
                onClick={activeMobilePage}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Billing
              </li>
              <li
                onClick={activeMobilePage}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Notifications
              </li>
            </ul>
          </div>

          <div className="col-span-2 hidden sm:block">
            <ul>
              <li
                className="mt-5 cursor-pointer border-l-2 border-transparent border-l-blue-700 text-blue-700 px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                onClick={activePage}
              >
                Accounts
              </li>
              <li
                className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                onClick={activePage}
              >
                Billing
              </li>
              <li
                className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                onClick={activePage}
              >
                Notifications
              </li>
            </ul>
          </div>
          {active === "Accounts" ? (
            <Accounts />
          ) : active === "Billing" ? (
            <BillingSetting />
          ) : active === "Notifications" ? (
            <NotificationSetting />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Setting;
