import axios from "axios";
import {apiUrl} from "@config/index";

const instanceSettings = {
    baseURL: apiUrl,
    timeout: 30000,
};



function formatResponseError({ response, ...rest }) {
    let formatedError = {
      message:
        response?.data?.message === "An internal server error occurred"
          ? "Something went wrong, try again"
          : response?.data?.message?.[0]?.messages?.[0]?.message ===
            "An internal server error occurred"
          ? "Something went wrong, try again"
          : response?.data?.message?.[0]?.messages?.[0]?.message ||
            response?.data?.message ||
            "Something went wrong, try again",
      ...rest,
    };
    return Promise.reject(formatedError);
  }

  let publicInstanceAxios = axios.create(instanceSettings);
  
  publicInstanceAxios.interceptors.response.use(null, formatResponseError);
  
  export { publicInstanceAxios };


