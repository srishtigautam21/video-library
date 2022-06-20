import ReactLoading from "react-loading";
import { useAuth, usePlayList, useWatchLater } from "../../context";
import "./loading.css";

const Loading = () => {
  const { playlistLoading, videoToPlaylistLoading, deletePlaylistLoader } =
    usePlayList();
  const { authLoading } = useAuth();
  const { videoLoader } = useWatchLater();
  if (
    !playlistLoading &&
    !videoToPlaylistLoading &&
    !deletePlaylistLoader &&
    !authLoading &&
    !videoLoader
  )
    return null;
  return (
    <div className='loading-container'>
      {playlistLoading && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
      {videoToPlaylistLoading && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
      {deletePlaylistLoader && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
      {authLoading && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
      {videoLoader && (
        <ReactLoading
          className='react-loading'
          type={"spin"}
          color={"#04c76f"}
        />
      )}
    </div>
  );
};
export { Loading };
