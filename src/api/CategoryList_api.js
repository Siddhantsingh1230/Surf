import axios from "axios";
import { BACKEND_URI } from "../app/constants";

const fetchAllCategories = async ()=>{
    const {data} = await axios.get(
        // "http://localhost:8080/category"
        `${BACKEND_URI}/category`
        );
        // console.log(data.categories)
    return data.categories;
}

export default fetchAllCategories;