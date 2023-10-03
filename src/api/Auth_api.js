import axios from "axios";

export const createUser = async (userData) => {
  const { data } = await axios.post("http://localhost:8080/users/", {
    id: new Date(),
    ...userData,
  });
  // console.log(data);
  return data;
};

export const login = async (userInput) => {
    const {data} = await axios.get(`http://localhost:8080/users?email=${userInput.email}&password=${userInput.password}`);
    if (
     data.length!=0
    ) {
      return data[0];
    }
    return Promise.reject("Login Failed");
  
};
export const updateUser = async (userId,newData) => {
  const {data} = await axios.patch(`http://localhost:8080/users/${userId}`,{
    ...newData
  });
  return newData;
};
export const changePassword = async (userId,passwordData) => {
  const {data} = await axios.get(`http://localhost:8080/users/${userId}`);
  if(data.password===passwordData.currentPass){
    const resp = await axios.patch(`http://localhost:8080/users/${userId}`,{
      password:passwordData.newPass
    });
    return {...data,password:passwordData.newPass};
  }
  return Promise.reject("Incorrect current password");
};
export const deleteUser = async (userId) => {
  const {data} = await axios.delete(`http://localhost:8080/users/${userId}`);
  const Msg = "Account deleted";
  return Msg;
  
};
