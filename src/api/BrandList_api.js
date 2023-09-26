import axios from "axios"

const fetchAllBrands = async ()=>{
    const {data} = await axios.get("http://localhost:8080/brands");
    return data;
}

export default fetchAllBrands;