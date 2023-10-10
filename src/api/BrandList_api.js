import axios from "axios"
import { BACKEND_URI } from "../app/constants";

const fetchAllBrands = async ()=>{
    const {data} = await axios.get(
        // "http://localhost:8080/brands"
        `${BACKEND_URI}/brands`);
        // console.log(data.brands)
    return data.brands;
}

export default fetchAllBrands;