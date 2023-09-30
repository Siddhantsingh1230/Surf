import axios from "axios";

const fetchAllProducts = async () => {
  const response = await axios.get(
    "http://localhost:8080/products?_page=1&_limit=10"
  );
  const totalItems = response.headers["x-total-count"];
  return { data: response.data, totalItems };
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

export default fetchAllProducts;
