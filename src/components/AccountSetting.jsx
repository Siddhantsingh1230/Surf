import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "./DeleteModal";
import { changePasswordAsync, deleteUserAsync } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const AccountSetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const changePassword = () => {
    if (currentPass.trim().length !== 0 && newPass.trim().length !== 0) {
      dispatch(changePasswordAsync({ userId: user.id, currentPass, newPass }));
      setCurrentPass("");
      setNewPass("");
    }
  };
  const deleteUser = () => {
    dispatch(deleteUserAsync(user.id));
    navigate("/");
  };
  return (
    <>
      <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
        <div className="pt-4">
          <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
          <p className="font- text-slate-600">
            You can access and modify your account information here. Please be
            mindful that this information is sensitive, and it's crucial to
            handle it with utmost care, avoiding any errors or mistakes.
          </p>
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Email Address</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            Your email address is <strong>{user.email}</strong>
          </p>
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Public
          </span>
        </div>
        <hr className="mt-4 mb-8" />
        <p className="py-2 text-xl font-semibold">Password</p>
        <div className="flex items-center">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
            <label htmlFor="login-password">
              <span className="text-sm text-gray-500">Current Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  value={currentPass}
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                  onChange={(e) => setCurrentPass(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="login-password">
              <span className="text-sm text-gray-500">New Password</span>
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="password"
                  value={newPass}
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="***********"
                  onChange={(e) => setNewPass(e.target.value)}
                />
              </div>
            </label>
          </div>
        </div>
        <p className="mt-2">
          Can't remember your current password.{" "}
          <a
            className="text-sm font-semibold text-blue-600 underline decoration-2"
            href="#"
          >
            Recover Account
          </a>
        </p>
        <button
          onClick={changePassword}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Save Password
        </button>
        <hr className="mt-4 mb-8" />

        <div className="mb-10">
          <p className="py-2 text-xl font-semibold">Delete Account</p>
          <p className="inline-flex items-center rounded-full bg-rose-100 px-4 py-1 text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Proceed with caution
          </p>
          <p className="mt-2">
            Make sure you have taken backup of your account in case you ever
            need to get access to your data. We will completely wipe your data.
            There is no way to access your account after this action.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="ml-auto text-sm font-semibold text-rose-600 underline decoration-2"
          >
            Continue with deletion
          </button>
        </div>
      </div>
      <DeleteModal open={open} deleteUser={deleteUser} setOpen={setOpen} />
    </>
  );
};

export default AccountSetting;
