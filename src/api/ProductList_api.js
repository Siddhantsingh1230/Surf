import axios from "axios";

const fetchAllProducts = async () => {
  const { data } = await axios.get("http://localhost:8080/products");
  return data;
};

export const filterProducts = async (filterObjArray) => {
  let queryString = "";
  filterObjArray.forEach((element) => {
    for (let key in element) {
      queryString += `${encodeURIComponent(key)}=${encodeURIComponent(element[key])}&`;
    }
  });

  const { data } = await axios.get(
    "http://localhost:8080/products?" + queryString
  );
  return data;
};

export default fetchAllProducts;
