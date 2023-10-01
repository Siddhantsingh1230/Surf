import axios from "axios";

export const getOrderState = async () => {
  const { data } = await axios.get("http://localhost:8080/orderState");
  return data;
};
