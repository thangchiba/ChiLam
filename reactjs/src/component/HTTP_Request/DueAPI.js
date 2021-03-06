import axiosClient from "./axiosClient";
class DueAPI {
  getDue = (params) => {
    const url = "/due";
    return axiosClient.get(url, { params });
  };
  addDue = (data) => {
    const url = "/due";
    return axiosClient.post(url, data);
  };
  deleteDue = (data) => {
    const url = "/due";
    return axiosClient.delete(url, { data });
  };
}
const dueAPI = new DueAPI();
export default dueAPI;
