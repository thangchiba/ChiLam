import axiosClient from "./axiosClient";
class CustomerAPI {
  getCustomer = (params) => {
    const url = "/customer";
    return axiosClient.get(url, { params });
  };
}
const customerAPI = new CustomerAPI();
export default customerAPI;
