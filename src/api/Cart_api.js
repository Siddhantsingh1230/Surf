import axios from "axios";

export const getCart = async (userID) =>{

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
