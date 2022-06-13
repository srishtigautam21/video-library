import { useContext, createContext } from "react";
import axios from "axios";
import { useState } from "react";

const PlayListContext = createContext({});

const PlayListProvider = ({ children }) => {
  const [playlist, setPlayList] = useState([]);

  const addToPlaylist = async (title, description) => {
    console.log("In playlistContext", title, description);
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.post(
        "/api/user/playlists",
        { title: title, description: description },
        config
      );
      setPlayList([...result.data.playlists]);
      console.log(result.data.playlists);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PlayListContext.Provider value={{ addToPlaylist, playlist }}>
      {children}
    </PlayListContext.Provider>
  );
};
const usePlayList = () => useContext(PlayListContext);
export { usePlayList, PlayListProvider };
