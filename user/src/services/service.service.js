import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";
const getAllServices = () => {
  return axios.get(API_URL + "/listAllService").then((response) => {
    return response.data;
  });
};
const getServiceById = (serviceId) => {
  return axios.get(API_URL + "/serviceDetail/" + serviceId).then((response) => {
    return response.data;
  });
};
const addService = (service) => {
  return axios.post(API_URL + "/addService", service).then((response) => {
    return response.data;
  });
};

const serviceService = { getAllServices, getServiceById, addService };

export default serviceService;
