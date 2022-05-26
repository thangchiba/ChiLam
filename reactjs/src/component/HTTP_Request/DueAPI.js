import axiosClient from "./axiosClient";
class DueAPI {
  getDue = (params) => {
    const url = "/due";
    return axiosClient.get(url, { params });
  };
}
const dueAPI = new DueAPI();
export default dueAPI;
