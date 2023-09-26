import axios from "axios"

const fetchAllCategories = async ()=>{
    const {data} = await axios.get("http://localhost:8080/category");
    return data;
}

export default fetchAllCategories;