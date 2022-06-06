import { useContext, createContext, useState } from "react";
// import { useAuth } from "./AuthContext";
import axios from "axios";
// import { useAxios } from "../customHooks/useAxios";
// import { useNavigate } from "react-router-dom";

const WatchLaterContext = createContext({});

const WatchLaterProvider = ({ children }) => {
  // const { encodedToken } = useAuth();
  // const navigate = useNavigate();
  // const { response, fetchData } = useAxios();
  const [watchLaterList, setWatchLaterList] = useState([]);

  const watchLaterHandler = async (video) => {
    debugger;
    console.log("in watch later context");
    console.log(video);
    const encodedToken = localStorage.getItem("myToken");
    console.log(video._id);
    // if (encodedToken === null) {
    //   navigate("/login");
    // }
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video },
        config
      );
      debugger;
      console.log(response.data.watchlater);
      setWatchLaterList(response.data.watchlater); //(prev) => [...prev, response.data.watchlater]
    } catch (e) {
      console.error(e);
      // errorToast("Some Unwanted error occured");
    }
    // fetchData({
    //   method: "post",
    //   url: "/api/user/watchlater",
    //   headers: { authorization: encodedToken },
    //   data: { video },
    // });
    // console.log(response ?? response.watchlater);
    // setWatchLater(response?.watchlater);
  };
  return (
    <WatchLaterContext.Provider value={{ watchLaterHandler, watchLaterList }}>
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { useWatchLater, WatchLaterProvider };
