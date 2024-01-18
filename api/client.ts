import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.10.1:7139/api",
});

export default apiClient;
