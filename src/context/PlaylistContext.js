import { useContext, createContext } from "react";
import axios from "axios";
import { useState } from "react";
// import { useModal } from "../context/ModalContext";

const PlayListContext = createContext({});

const PlayListProvider = ({ children }) => {
  const [playlist, setPlayList] = useState([]);
  // const { setModal } = useModal();
  const addToPlaylist = async (title, description) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.post(
        "/api/user/playlists",
        {
          playlist: { title: title, description: description },
        },
        config
      );
      setPlayList([...result.data.playlists]);
    } catch (e) {
      console.log(e);
    }
  };
  const removePlaylist = async (playlistId) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        config
      );
      setPlayList([...result.data.playlists]);
    } catch (e) {
      console.log(e);
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        config
      );
      setPlayList((s) => [
        ...s.map((playlist) =>
          playlist._id === result.data.playlist._id
            ? result.data.playlist
            : playlist
        ),
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromPlaylist = async (playlistId, video) => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.delete(
        `/api/user/playlists/${playlistId}/${video._id}`,
        config
      );
      setPlayList((s) => [
        ...s.map((playlist) =>
          playlist._id === result.data.playlist._id
            ? result.data.playlist
            : playlist
        ),
      ]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PlayListContext.Provider
      value={{
        addToPlaylist,
        playlist,
        removePlaylist,
        addVideoToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};
const usePlayList = () => useContext(PlayListContext);
export { usePlayList, PlayListProvider };
