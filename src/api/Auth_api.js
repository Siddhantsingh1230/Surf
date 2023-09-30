export const createUser = async (username, email, password, phone) => {
  const { data } = await axios.post("http://localhost:8080/users/", {
    id:new Date(),
    username,
    email,
    password,
    phone,
  });
  return data;
};
