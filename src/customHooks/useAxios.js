import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const fetchData = async (configObj) => {
    // console.log(configObj);
    try {
      const result = await axios.request(configObj);
      setResponse(result.data);
      // console.log(result.data);
    } catch (e) {
      setError(e.response.data.message);
    } finally {
      setLoading(false);
    }

    // console.log(response);
  };
  return { response, loading, error, fetchData };
};
