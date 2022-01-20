import axios from "axios";

const LoginController = async (currentUser) => {
  debugger;
  const axiosRes = await axios.get(`${process.env.API_URI}/login`);
  const users = axiosRes.data;
  debugger;
  console.log(users);
  console.log(`showing user input: ${currentUser.email}, ${currentUser.password}`);
  let match;
  users.forEach(user => {
    console.log(`this is user ${user.email}${user.password} and this is input results ${currentUser.email}, ${currentUser.password}`)
    if (currentUser.email === user.email && currentUser.password === user.password) {
      match = true
    }
  });
  return match;
}

export default LoginController;