import axios from "axios"

const fetchAllProducts = async ()=>{
    const {data} = await axios.get("http://localhost:8080/products");
    return data;
}


export const filterProducts = async (filterObj)=>{
   let queryString = "";
    for(let key in filterObj){
        queryString += `${key}=${filterObj[key]}&`;
    }
    const {data} = await axios.get("http://localhost:8080/products?"+queryString);
    return data;
}


export default fetchAllProducts;