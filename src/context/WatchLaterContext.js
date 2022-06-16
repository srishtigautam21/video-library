import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";
import {
  addToWatchLaterToast,
  likedVideoToast,
  removeFromWatchLater,
  unlikeVideoToast,
  removeFromHistory,
} from "../customHooks/Toastify";
const WatchLaterContext = createContext({});

const WatchLaterProvider = ({ children }) => {
  const navigate = useNavigate();
  const { encodedToken } = useAuth();
  const [likedVideoList, setLikedVideoList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [historyList, setHistoryList] = useState([]);
  const [videos, setVideos] = useState([]);

  const getVideo = async () => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.get("/api/videos", config);
      setVideos([...result.data.videos]);
    } catch (e) {
      console.log(e);
    }
  };

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
      addToWatchLaterToast("Added to watchlater");
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
      removeFromWatchLater("Removed from watchlater");
    } catch (e) {
      console.error(e);
    }
  };

  const addToLikedVideo = async (video) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.post("/api/user/likes", { video }, config);
      setLikedVideoList(response.data.likes);
      likedVideoToast("Liked Video");
    } catch (e) {
      console.error(e);
    }
  };

  const unlikeVideoHandler = async (videoId) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.delete(`/api/user/likes/${videoId}`, config);
      setLikedVideoList(response.data.likes);
      unlikeVideoToast("Unliked Video");
    } catch (e) {
      console.error(e);
    }
  };

  const addToHistory = async (video) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.post("/api/user/history", { video }, config);
      setHistoryList(response.data.history);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteFromHistory = async (videoId) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const response = await axios.delete(
        `/api/user/history/${videoId}`,
        config
      );
      setHistoryList(response.data.history);
      removeFromHistory("Removed from history");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (encodedToken !== null) {
      getVideo();
    }
  }, [encodedToken]);

  return (
    <WatchLaterContext.Provider
      value={{
        addToWatchLater,
        watchLaterList,
        deleteFromWatchLater,
        addToLikedVideo,
        likedVideoList,
        unlikeVideoHandler,
        addToHistory,
        setHistoryList,
        historyList,
        deleteFromHistory,
        videos,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};
const useWatchLater = () => useContext(WatchLaterContext);
export { useWatchLater, WatchLaterProvider };
