import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localstore:8080/api/",
});

export default clientAxios;
