import { useContext, createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context";
import {
  playlistToast,
  addVideoToPlaylistoast,
  deletePlaylist,
  // eslint-disable-next-line
  removeFromPlaylist,
} from "../customHooks/Toastify";

const PlayListContext = createContext({});

const PlayListProvider = ({ children }) => {
  const [playlist, setPlayList] = useState([]);
  const { encodedToken } = useAuth();

  const getPlaylist = async () => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.get("/api/user/playlists", config);
      setPlayList([...result.data.playlists]);
    } catch (e) {
      console.log(e);
    }
  };

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
      playlistToast("Playlist added successfully");
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
      deletePlaylist("Playlist deleted");
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
      //Future TODO
      // const updatedPlaylists = playlist.some((play) => play._id === playlistId)
      //   ? playlist.map((play) =>
      //       play._id === playlistId ? result.data.playlist : play
      //     )
      //   : playlist.concat(result.data.playlist);
      // setPlayList(updatedPlaylists);
      setPlayList((s) => [
        ...s.map((playlist) =>
          playlist._id === result.data.playlist._id
            ? result.data.playlist
            : playlist
        ),
      ]);
      addVideoToPlaylistoast("Added to playlist");
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
      removeFromPlaylist("Removed from playlist");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (encodedToken !== null) {
      getPlaylist();
    }
  }, [encodedToken]);

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
