import axios from "axios";

export const createOrder = async (OrderData) => {
  const { data } = await axios.post("http://localhost:8080/orders/", {
    ...OrderData,
  });
  return data;
};
export const getOrders = async (userId) => {
  const { data } = await axios.get("http://localhost:8080/orders?userId="+userId);
  return data;
};
