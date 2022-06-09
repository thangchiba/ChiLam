import axiosClient from "./axiosClient";
class tradeAPI {
  getTrade = (params) => {
    const url = "/trade";
    return axiosClient.get(url, { params });
  };
  addTrade = (data) => {
    const url = "/trade";
    return axiosClient.post(url, data);
  };
  deleteTrade = (data) => {
    const url = "/trade";
    return axiosClient.delete(url, { data });
  };
}
const TradeAPI = new tradeAPI();
export default TradeAPI;
