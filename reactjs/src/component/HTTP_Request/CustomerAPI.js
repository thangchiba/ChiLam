import axiosClient from "./axiosClient";
class CustomerAPI {
  getCustomer = (params) => {
    const url = "/customer";
    return axiosClient.get(url, { params });
  };
  addCustomer = (data) => {
    const url = "/customer";
    return axiosClient.post(url, data);
  };
  updateCustomer = (data) => {
    const url = "/customer";
    return axiosClient.put(url, data);
  };
  deleteCustomer = (data) => {
    const url = "/customer";
    return axiosClient.delete(url, { data });
  };
}
const customerAPI = new CustomerAPI();
export default customerAPI;
