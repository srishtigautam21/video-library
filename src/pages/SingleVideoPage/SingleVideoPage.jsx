import { useParams, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import "./singleVideoPage.css";
// import { videos } from "../../backend/db/videos";

const SingleVideoPage = () => {
  const { id } = useParams();
  // const {title, creator, thumbnail, creatorDp, views, _id}=videos;
  const { state } = useLocation();
  const video = state;
  const videoOnReady = (event) => {
    const player = event.target;

    player.seekTo(0);
  };
  const opts = {
    height: "450", //390
    width: "700", //640
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className='video-conatiner'>
      <YouTube videoId={id} opts={opts} onReady={videoOnReady} />
      <div className='videoPage-title'>
        <h3>{video.title}</h3>
        <div className='video-operation'>
          <p>{video.views}</p>
        </div>
      </div>
    </div>
  );
};
export { SingleVideoPage };
