import { useContext, createContext, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const WatchLaterContext = createContext({});

const WatchLaterProvider = ({ children }) => {
  const navigate = useNavigate();
  const [likedVideoList, setLikedVideoList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);

  const addToWatchLater = async (video) => {
    const encodedToken = localStorage.getItem("myToken");

    if (encodedToken === null) {
      navigate("/login");
    }
    const config = { headers: { authorization: encodedToken } };
    try {
      const {
        data: { watchlater },
      } = await axios.post("/api/user/watchlater", { video }, config);

      setWatchLaterList(watchlater);
    } catch (e) {
      console.error(e);
    }
  };
  const deleteFromWatchLater = async (videoId) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.delete(
        `/api/user/watchlater/${videoId}`,
        config
      );
      setWatchLaterList(response.data.watchlater);
      navigate("/explorePage");
    } catch (e) {
      console.error(e);
    }
  };

  const addToLikedVideo = async (video) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.post("/api/user/likes", config);
      setLikedVideoList(response.data.likes);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <WatchLaterContext.Provider
      value={{
        addToWatchLater,
        watchLaterList,
        deleteFromWatchLater,
        addToLikedVideo,
        likedVideoList,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { useWatchLater, WatchLaterProvider };
