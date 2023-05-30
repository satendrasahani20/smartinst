import axios from "axios";

const baseUrl = () => {
  let base_url = "https://localhost:3000"
    if(window?.location?.href?.includes("https://green-gosling-boot.cyclic.app")) {
      base_url = "https://green-gosling-boot.cyclic.app"
    } 
  // else if(window?.location?.href?.includes("https://test")) {
  //     base_url = "https://test.olibr.com/api/v1"
  //   } else if(window?.location?.href?.includes("https://olibr")) {
  //     base_url = "https://olibr.com/api/v1"
  //   }
  return base_url;
}

const api = axios.create({
  baseURL: baseUrl(),
  // withCredentials: true,
});
api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("token")
  return config;
})

export default api;
