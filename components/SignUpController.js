import axios from "axios";

const SignUpController = async (currentUser) => {
  debugger;
  try {
    const axiosRes = await axios.post(`${process.env.API_URI}/login`, currentUser);
    const users = axiosRes.data;
    
    let match = false;
    users.forEach(user => {
      if (currentUser.email === user.email && currentUser.password === user.password) {
        match = true;
      }
    });
    return match
  }
  catch (e) {
    alert(e.message || e);
  }
}

export default SignUpController;