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
    return Promise.reject("Error");
  
};
