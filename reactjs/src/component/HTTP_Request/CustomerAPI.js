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
}
const customerAPI = new CustomerAPI();
export default customerAPI;
