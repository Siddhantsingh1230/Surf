import React from 'react';
import card from "../assets/images/card.png";

function BillingSetting() {
  return (
        <div className="col-span-8 overflow-hidden rounded-xl bg-gray-50 px-8 shadow">
            <div className="border-b pt-4 pb-8">
                <h1 className="py-2 text-2xl font-semibold">Billing settings</h1>
                <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <hr className="mt-4 mb-8" />
            <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
                <div className="space-y-8">
                <div className="">
                    <div className="flex">
                    <p className="font-medium mb-1">Billing Period</p>
                    <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
                    </div>
                    <div className="flex items-center rounded-md border border-gray-100 bg-white py-3 shadow">
                    <p className="ml-4 w-56">
                        <strong className="block text-lg font-medium">MONTHLY</strong>
                        <span className="text-xs text-gray-400"> Next Renewal: 4 Jan 2022 </span>
                    </p>
                    </div>
                </div>
                <div className="">
                    <div className="flex">
                    <p className="font-medium mb-1">Payment Method</p>
                    <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">Change</button>
                    </div>
                    <div className="flex items-center rounded-md border border-gray-100 bg-white py-3 shadow">
                    <img className="h-10 object-contain pl-4" src={card} alt="" />
                    <p className="ml-4 w-56">
                        <strong className="block text-lg font-medium">**** **** **** 453 </strong>
                        <strong className="block text-lg font-medium">ALBERT K. DANIEL </strong>
                        <span className="text-xs text-gray-400"> Expires on: Dec 2024 </span>
                    </p>
                    </div>
                </div>
                </div>

                <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
                <label className="block" htmlFor="name">
                    <p className="text-sm">Name</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Shakir Ali" />
                </label>
                <label className="block" htmlFor="name">
                    <p className="text-sm">Email Address</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="shakir.ali@corpora.de" />
                </label>
                <label className="block sm:col-span-2" htmlFor="name">
                    <p className="text-sm">Billing Address</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="82844 Boyle Extension Suite 541 - Covington, HI / 28013" />
                </label>
                <label className="block" htmlFor="name">
                    <p className="text-sm">VAT #</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="6346322" />
                </label>
                <label className="block" htmlFor="name">
                    <p className="text-sm">Country</p>
                    <input className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1" type="text" value="Germany" />
                </label>
                </div>
            </div>

            <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
                <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">Billing History</p>
                <table className="w-full">
                <thead>
                    <th className="text-center font-semibold">Date</th>
                    <th className="text-center font-semibold">Invoice #</th>
                    <th className="text-center font-semibold">Amount</th>
                    <th className="text-center font-semibold"></th>
                </thead>
                <tbody>
                    <tr>
                    <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                    <td className="border-b py-2 text-center text-sm">X-543242</td>
                    <td className="border-b py-2 text-center text-sm">$99.00</td>
                    <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">PDF</button></td>
                    </tr>
                    <tr>
                    <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                    <td className="border-b py-2 text-center text-sm">X-543242</td>
                    <td className="border-b py-2 text-center text-sm">$99.00</td>
                    <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">PDF</button></td>
                    </tr>
                    <tr>
                    <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                    <td className="border-b py-2 text-center text-sm">X-543242</td>
                    <td className="border-b py-2 text-center text-sm">$99.00</td>
                    <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">PDF</button></td>
                    </tr>
                    <tr>
                    <td className="border-b py-2 text-center text-sm">23 Nov 2021</td>
                    <td className="border-b py-2 text-center text-sm">X-543242</td>
                    <td className="border-b py-2 text-center text-sm">$99.00</td>
                    <td className="border-b py-2 text-center text-sm"><button className="text-sm text-blue-600 underline">PDF</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
  )
}

export default BillingSetting
