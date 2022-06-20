import axios from "axios";
import { useState } from "react";
import { errorToast } from "../customHooks/Toastify";
axios.defaults.baseURL = "";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const fetchData = async (configObj) => {
    setAuthLoading(true);
    try {
      const result = await axios.request(configObj);
      setResponse(result.data);
      setAuthLoading(false);
    } catch (e) {
      setError(e.response.data.message);
      errorToast(e.response.data.message);
    } finally {
      setAuthLoading(false);
    }
  };
  return { response, authLoading, error, fetchData };
};
