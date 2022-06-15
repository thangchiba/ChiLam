import axios from "axios";
import { useSnackbar, withSnackbar } from "notistack";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import { customerAction } from "../../store/CustomerSlice";
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      console.log(response.data.message);
      return response.data.content;
    }
    return response;
  },
  (error) => {
    alert(error.response.data.message);
    return error.response.data.content;
  }
);
export default withSnackbar(axiosClient);
