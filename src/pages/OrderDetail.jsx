import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import DangerBadge from "../components/DangerBadge";
import WarningBadge from "../components/WarningBadge";
import SuccessBadge from "../components/SuccessBadge";

const OrderDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const [order, setOrder] = useState([]);
  useEffect(() => {
    setOrder(orders.filter((order) => order.id == id));
  }, []);
  return (
    <>
      {!id && <Navigate to="/orders" replace={true} />}
      <div className="h-screen w-screen p-5 bg-white">
        <div className="pt-4">
          <h1 className="py-2 text-3xl font-semibold text-center sm:text-left ">
            Order <span className="text-blue-800">#{id}</span>
          </h1>

          {order.length>0 && (
            <div className="w-full flex flex-col sm:flex-row justify-between px-5">
              <div>
                <p>Checkout Mail : {order[0].checkoutEmail}</p>
                <p>Billing Address : {order[0].billingaddress} </p>
                <p>Billing State : {order[0].billingstate} </p>
                <p>Billing Zip : {order[0].billingzip}</p>
                <p>Payment Method : {order[0].paymentMethod}</p>
              </div>
              <div>
                <p className="flex gap-2">
                  <span className="font-bold text-lg">Status : </span>
                  {order[0].status == "shipped" ? (
                    <SuccessBadge text="Shipped" />
                  ) : order[0].status == "pending" ? (
                    <WarningBadge text="Pending" />
                  ) : order[0].status == "canceled" ? (
                    <DangerBadge text={"Canceled"} />
                  ) : null}
                </p>
                <p className="font-bold text-lg">
                  Total : <span className="text-blue-500">₹ {order[0].totalAmount}</span>
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="mt-4 mb-8" />

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Product
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Quantity
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Quantity
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {orders
                .filter((order) => order.id == id)
                .map((filteredorder) =>
                  filteredorder.cart.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-100 ">
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 rounded-l-xl">
                        {item.title}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        ₹ {item.price}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        x {item.quantity}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 rounded-r-xl">
                        <Link
                          to={`/product/${item.id}`}
                          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
