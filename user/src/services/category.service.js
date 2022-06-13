import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";
const getAllCategories = () => {
  return axios.get(API_URL + "categories");
};
const categoryService = { getAllCategories };

export default categoryService;
