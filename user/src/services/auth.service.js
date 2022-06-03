import axios from "axios";

const API_URL = "http://localhost:8080/api/";
const register = (username, password) => {
  return axios.post(API_URL + "user/save/", {
    username,
    password,
  });
};
const authService = {
  register,
};

export default authService;
