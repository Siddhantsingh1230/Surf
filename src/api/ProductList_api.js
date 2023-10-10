import axios from "axios";
import { BACKEND_URI } from "../app/constants";


const fetchAllProducts = async () => {
  const response = await axios.get(
    `${BACKEND_URI}/products?_page=1&_limit=10`
    // http://localhost:8080/products?_page=1&_limit=10
  );
  // console.log(response.data.products)
  const totalItems = response.headers["x-total-count"];
  return { data: response.data.products, totalItems };
};

export const filterProducts = async (filterObjArray) => {
  let queryString = "";
  filterObjArray.forEach((element) => {
    for (let key in element) {
      queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
        element[key]
      )}&`;
    }
  });

  const response = await axios.get(
    "http://localhost:8080/products?" + queryString
  );
  const totalItems = response.headers["x-total-count"];
  return { data: response.data, totalItems };
};

export const getProductById = async (id) => {
  const { data } = await axios.get(
    `${BACKEND_URI}/products/${id}`
    //"http://localhost:8080/products/" + id
  );
  // console.log(data.product )
  return data.product;
};

export default fetchAllProducts;
