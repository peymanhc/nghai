import axios from "axios";

const instance = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://ngh.ae/",
});

export default instance;
