import axios from "axios";

export const getAllProducts = async() =>{
    const {data}=await axios.get("http://localhost:8080/products");
    return data;
    
}

export const getFilteredProducts = async (value)=>{
    const {data}=await axios.get("http://localhost:8080/products");
    const filteredList = data.filter((item)=>{
        if (item.title.toLowerCase().includes(value.toLowerCase()))
        return item
        else if (item.description.toLowerCase().includes(value.toLowerCase()))
        return item
        else if (item.brand.toLowerCase().includes(value.toLowerCase()))
        return item;
        else if(item.category.toLowerCase().includes(value.toLowerCase()))
        return item;
    })
    return filteredList;
}