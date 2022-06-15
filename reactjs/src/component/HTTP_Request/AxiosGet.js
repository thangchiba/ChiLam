import { useSnackbar } from "notistack";
import { useState } from "react";
import axiosClient from "./axiosClient";
async function AxiosGet(url, params) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // try {
  // const response = await axiosClient.get(url, { params });
  // console.log(response);
  //   setData(response.data);
  // } catch (error) {
  //   setError(error.message);
  //   console.log(error);
  // } finally {
  //   setLoaded(true);
  // }
  // return response.data;
  try {
    return await axiosClient.get(url, { params });
    enqueueSnackbar(":");
  } catch (error) {
    // enqueueSnackbar(error.response.data.message);
    return error.response.data.content;
  }
}
export default AxiosGet;
