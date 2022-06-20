import { useContext, createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../context";
import {
  playlistToast,
  addVideoToPlaylistoast,
  deletePlaylist,
  errorToast,
  removeFromPlaylistToast,
} from "../customHooks/Toastify";

const PlayListContext = createContext({});

const PlayListProvider = ({ children }) => {
  const [playlist, setPlayList] = useState([]);
  const { encodedToken } = useAuth();
  const [playlistLoading, setPlaylistLoading] = useState(false);
  const [videoToPlaylistLoading, setVideoToPlaylistLoading] = useState(false);
  const [deletePlaylistLoader, setDeletePlaylistLoader] = useState(false);

  const getPlaylist = async () => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.get("/api/user/playlists", config);
      setPlayList([...result.data.playlists]);
    } catch (e) {
      errorToast(e.response.data.message);
    }
  };

  const addToPlaylist = async (title, description) => {
    setPlaylistLoading(true);
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
      setPlaylistLoading(false);
    } catch (e) {
      errorToast(e.response.data.message);
    }
  };
  const removePlaylist = async (playlistId) => {
    setDeletePlaylistLoader(true);
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.delete(
        `/api/user/playlists/${playlistId}`,
        config
      );
      setPlayList([...result.data.playlists]);
      setDeletePlaylistLoader(false);
      deletePlaylist("Playlist deleted");
    } catch (e) {
      errorToast(e.response.data.message);
    }
  };

  const addVideoToPlaylist = async (playlistId, video) => {
    setVideoToPlaylistLoading(true);
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
      setVideoToPlaylistLoading(false);
    } catch (e) {
      errorToast(e.response.data.message);
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
      removeFromPlaylistToast("Removed from playlist");
    } catch (e) {
      errorToast(e.response.data.message);
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
        playlistLoading,
        videoToPlaylistLoading,
        deletePlaylistLoader,
      }}
    >
      {children}
    </PlayListContext.Provider>
  );
};
const usePlayList = () => useContext(PlayListContext);
export { usePlayList, PlayListProvider };
