import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotificationAsync } from "../slices/AuthSlice";

function NotificationSetting() {
  const dispatch = useDispatch();
  const enableNotifications = useSelector((state) => state.auth.enableNotifications);
  const user = useSelector((state) => state.auth.user);
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    setChecked(enableNotifications);
  }, []);
  return (
    <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
      <div className="border-b pt-4 pb-8">
        <h1 className="py-2 text-2xl font-semibold">
          Manage Notification and Promotions
        </h1>
        <p className="font- text-slate-600">
          Stay up to date by managing your daily notifications and promotions.
          Enable them here to ensure you don't miss out!
        </p>
      </div>
      <div className="grid border-b py-6 sm:grid-cols-2">
        <div className="">
          <h2 className="text-lg font-semibold leading-4 text-slate-700">
            Notifications
          </h2>
          <p className="font- text-slate-600">
            Stay informed about important updates and announcements related to
            your favourite products and goods. Enable notifications to receive
            timely alerts.
          </p>
        </div>
        <div className="mt-4 flex items-center sm:justify-end">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="checked"
              className="relative inline-flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                checked={checked}
                id="checked"
                className="peer sr-only "
                onChange={(e) => {
                  setChecked(!checked);
                  dispatch(updateNotificationAsync({ userId: user.id, value: e.target.checked }));
                }}
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4  dark:border-gray-600 dark:bg-gray-700 "></div>
              <span className="ml-3 text-sm font-medium  text-gray-900 dark:text-gray-300">
                Toggle
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationSetting;
