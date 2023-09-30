import axios from "axios"

const getAllNotifications = async ()=>{
    const {data} = await axios.get("http://localhost:8080/notifications");
    return data;
}
export const deleteteNotification = async(id) =>{
    const {data} = await axios.delete("http://localhost:8080/notifications/"+id);
    return data;
}

export default getAllNotifications;