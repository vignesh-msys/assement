import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default apiCall;
