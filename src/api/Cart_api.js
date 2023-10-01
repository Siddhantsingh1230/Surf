import axios from "axios";
import { getProductById } from "./ProductList_api";

export const getCart = async (userID) => {
  try {
    const { data } = await axios.get(
      "http://localhost:8080/cart?userId=" + userID
    );

    if (data) {
      const products = await Promise.all(data.map(async (item) => {
      const product = await getProductById(item.id);
      // console.log(product);
      return product;
      }));
      const detailedData = data.map((item,index)=>({
        ...item,product:products[index]
      }));
      console.log(detailedData);
    } else {
      console.log("error");
    }

    return data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

export const addToCart = async (Data) => {
  const { data } = await axios.post("http://localhost:8080/cart/", {
    ...Data,
  });
  return data;
};

export const removeFromCart = async (cartProductId) => {
  const { data } = axios.delete("http://localhost:8080/cart/" + cartProductId);
  return cartProductId;
};

export const updateCartProduct = async (cartProduct) => {
  const { data } = axios.patch("http://localhost:8080/cart/" + cartProduct.id, {
    ...cartProduct,
  });
  return { ...cartProduct };
};
