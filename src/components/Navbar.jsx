import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { getCartAsync } from "../slices/CartSlice";
import RippleBtn from "./RippleBtn";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../assets/images/logo.svg";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import { getAllNotificationsAsync } from "../slices/NotificationSlice";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/setting" },
  { name: "My Orders", href: "/orders" },
  { name: "Sign out", href: "/signout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = ({navigation,children,search,setSearch,startsearch ,setStartSearch}) => {
  
  const dispatch = useDispatch();
  const notiItem = useSelector((state) => state.notificationList.notifications);
  const enableNoti = useSelector((state) => state.auth.enableNotifications);
  const cartItems = useSelector((state) => state.cart.cart);
  const [notify, setNotify] = useState(false);
  const openNoti = () => {
    if (!notify) {
      setNotify(true);
    } else {
      setNotify(false);
    }
  };
  const LoggedUser = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (LoggedUser) {
      dispatch(getAllNotificationsAsync(LoggedUser.id));
      dispatch(getCartAsync(LoggedUser.id));
    }
  }, [dispatch]);
  return (
    <>
      <div className="min-h-full bg-white">
        <Disclosure as="nav" className="bg-gray-800 z-10 relative">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img className="h-8 w-8" src={Logo} alt="Surf" />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation ? (navigation.length>0 && navigation.map((item) => (

                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name } 
                          </Link>
                        ))) :null
                        }
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <SearchBar classProp={"w-72 mr-2 hidden sm:block"} search={search} setSearch={setSearch} startsearch={startsearch} setStartSearch={setStartSearch} />
                      {LoggedUser ? (
                        <>
                          <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white outline-none"
                            onClick={openNoti}
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                          {enableNoti && notiItem.length > 0 ? (
                            <span className="whitespace-nowrap rounded-md bg-purple-100 px-2 py-0.35 text-sm text-purple-500 font-bold text-[0.75rem] dark:bg-blue-700 mb-5 -ml-3 z-10 dark:text-white">
                              {
                                notiItem.filter((obj) => obj.read === false)
                                  .length
                              }
                            </span>
                          ) : null}
                          <Link to="/cart">
                            <button
                              type="button"
                              className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white outline-none"
                            >
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">View Cart</span>
                              <ShoppingCartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </Link>
                          {cartItems.length > 0 && (
                            <span className="whitespace-nowrap rounded-md bg-purple-100 px-2 py-0.35 text-sm text-purple-500 font-bold text-[0.75rem] dark:bg-red-600 mb-5 -ml-3 z-10 dark:text-purple-100">
                              <Link to="/cart">{cartItems.length}</Link>
                            </span>
                          )}
                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        to={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </>
                      ) : (
                        <Link to="/login">
                          <RippleBtn
                            text={"Login"}
                            classes={
                              "bg-[#4F46E5] border-none w-20 sm:rounded-lg"
                            }
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <SearchBar
                      classProp={"w-60  mr-1"}
                      inputProp={"border-[1.5px]"} search={search} setSearch={setSearch} startsearch={startsearch} setStartSearch={setStartSearch}  
                    />
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:text-white outline-none">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>

                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden h-full">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation ? (navigation.length>0 && navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))):null
                }
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  {LoggedUser ? (
                    <>
                      <div className="flex justify-between items-center  px-5">
                        <div className="flex justify-between items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">
                              {user.name}
                            </div>
                            <div className="text-sm font-medium leading-none text-gray-400">
                              {user.email}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <button
                            type="button"
                            className="relative   flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
                            onClick={() => {
                              openNoti();
                              document.body.classList.add(
                                "h-100vh",
                                "w-100vh",
                                "overflow-hidden"
                              );
                            }}
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                          {enableNoti &&  notiItem.length > 0 ? (
                            <span className="whitespace-nowrap rounded-md bg-purple-100 px-2 py-0.2 text-sm text-purple-500 text-[0.65rem] font-bold dark:bg-blue-700 mb-6 -ml-4 z-10 dark:text-white">
                              {
                                notiItem.filter((obj) => obj.read === false)
                                  .length
                              }
                            </span>
                          ) : null}
                          <Link to="/cart">
                            <button
                              type="button"
                              className="relative ml-2 flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
                            >
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">View Cart</span>

                              <ShoppingCartIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </Link>
                          {cartItems.length > 0 && (
                            <span className="whitespace-nowrap rounded-md bg-purple-100 px-2 py-0.2 text-sm text-purple-500 text-[0.65rem] font-bold dark:bg-red-600 mb-6 -ml-4 z-10 dark:text-purple-100">
                              <Link to="/cart">{cartItems.length}</Link>
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to="/login">
                      <RippleBtn
                        text={"Login"}
                        classes={"bg-[#4F46E5] border-none w-[90%] mx-[5%]"}
                      />
                    </Link>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl py-0 sm:px-0 lg:px-0">
            {children}
          </div>
        </main>
      </div>
      {notify && <Notification notify={openNoti} />}
    </>
  );
};

export default Navbar;
