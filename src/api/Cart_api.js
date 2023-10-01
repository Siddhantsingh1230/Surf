import axios from "axios";

export const getCart = async (userID) =>{
  const { data } = await axios.get("http://localhost:8080/cart?userId="+userID);
  return data;
}
export const addToCart = async (Data) => {
  const { data } = await axios.post("http://localhost:8080/cart/", {
    ...Data,
  });
  return data;
};

export const removeFromCart = async (data) => {
    //
  
};
