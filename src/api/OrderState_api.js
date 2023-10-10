import axios from "axios";
import { BACKEND_URI } from "../app/constants";

export const getOrderState = async () => {
  const { data } = await axios.get(
    // "http://localhost:8080/orderState"
    `${BACKEND_URI }/orderState`
    );
    // console.log(data.orderState)
  return data.orderState;
};
