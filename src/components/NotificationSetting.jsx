import React from 'react'

function NotificationSetting() {
    return (
        <div class="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
            <div class="border-b pt-4 pb-8">
                <h1 class="py-2 text-2xl font-semibold">Notification settings</h1>
                <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="grid border-b py-6 sm:grid-cols-2">
                <div class="">
                    <h2 class="text-lg font-semibold leading-4 text-slate-700">Comments</h2>
                    <p class="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div class="mt-4 flex items-center sm:justify-end">
                    <div class="flex flex-col gap-3">
                        <label for="push" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="push" class="peer sr-only" checked />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                        </label>
                        <label for="email" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="email" class="peer sr-only" checked />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                        </label>
                        <label for="sms" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="sms" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="grid border-b py-6 sm:grid-cols-2">
                <div class="">
                    <h2 class="text-lg font-semibold leading-4 text-slate-700">Reminders</h2>
                    <p class="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div class="mt-4 flex items-center sm:justify-end">
                    <div class="flex flex-col gap-3">
                        <label for="push" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="push" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                        </label>
                        <label for="email" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="email" class="peer sr-only" checked />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                        </label>
                        <label for="sms" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="sms" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="grid border-b py-6 sm:grid-cols-2">
                <div class="">
                    <h2 class="text-lg font-semibold leading-4 text-slate-700">Updates</h2>
                    <p class="font- text-slate-600">Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis neque.</p>
                </div>
                <div class="mt-4 flex items-center sm:justify-end">
                    <div class="flex flex-col gap-3">
                        <label for="push" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="push" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push</span>
                        </label>
                        <label for="email" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="email" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                        </label>
                        <label for="sms" class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" value="" id="sms" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSetting
