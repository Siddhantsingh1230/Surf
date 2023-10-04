import React from 'react'

function NotificationSetting() {
    return (
        <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
            <div className="border-b pt-4 pb-8">
                <h1 className="py-2 text-2xl font-semibold">Manage Notification and Promotions</h1>
                <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="grid border-b py-6 sm:grid-cols-2">
                <div className="">
                    <h2 className="text-lg font-semibold leading-4 text-slate-700">Comments</h2>
                    <p className="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div className="mt-4 flex items-center sm:justify-end">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="push" className="peer sr-only" checked />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                        </label>
                        <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="email" className="peer sr-only" checked />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                        </label>
                        <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="sms" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="grid border-b py-6 sm:grid-cols-2">
                <div className="">
                    <h2 className="text-lg font-semibold leading-4 text-slate-700">Reminders</h2>
                    <p className="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div className="mt-4 flex items-center sm:justify-end">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="push" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                        </label>
                        <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="email" className="peer sr-only" checked />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                        </label>
                        <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="sms" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="grid border-b py-6 sm:grid-cols-2">
                <div className="">
                    <h2 className="text-lg font-semibold leading-4 text-slate-700">Updates</h2>
                    <p className="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div className="mt-4 flex items-center sm:justify-end">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="push" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="push" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                        </label>
                        <label htmlFor="email" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="email" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                        </label>
                        <label htmlFor="sms" className="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="sms" className="peer sr-only" />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSetting
