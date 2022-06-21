import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";
const register = (username, password, email, firstName, lastName) => {
  return axios.post(API_URL + "/signup", {
    username,
    password,
    email,
    firstName,
    lastName,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/signin", {
      usernameOrEmail: username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};
const sendMail = (email) => {
  return axios.post(
    "http://localhost:8080/api/v1/users/forgot_password?email=" + email
  );
};

const setNewPassword = (email, password) => {
  return axios.post(API_URL + "/setNewPassword", {
    email,
    password,
  });
};
const authService = {
  register,
  login,
  logout,
  sendMail,
  setNewPassword,
};

export default authService;
