import { useParams, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import "./singleVideoPage.css";
import { useWatchLater } from "../../context/WatchLaterContext";
import { LikeIcon, PlaylistIcon, ClockIcon } from "../../Assets/allsvg";

const SingleVideoPage = () => {
  const { id } = useParams();
  const { watchLaterHandler } = useWatchLater();
  const { state } = useLocation();
  const video = state;
  const videoOnReady = (event) => {
    const player = event.target;

    player.seekTo(0);
  };
  const opts = {
    height: "450",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className='videoPage-wrapper'>
        <div className='video-container'>
          <YouTube videoId={id} opts={opts} onReady={videoOnReady} />
          <div className='video-content-container'>
            <div className='videoPage-title'>{video.title}</div>
            <div className='video-operation'>
              <p>{video.views} views</p>
              <div className='youtube-icons'>
                <div className='video-item'>
                  <button className='video-btn'>
                    <span>
                      <LikeIcon className='incr-font' />
                    </span>
                    <p className='incr-font'>Like</p>
                  </button>
                </div>
                <div className='video-item'>
                  <button
                    className='video-btn'
                    onClick={() => watchLaterHandler(video)}
                  >
                    <span>
                      <ClockIcon className='incr-font' />
                    </span>
                    <p className='incr-font'>Watch Later</p>
                  </button>
                </div>
                <div className='video-item'>
                  <button className='video-btn'>
                    <span>
                      <PlaylistIcon className='incr-font' />
                    </span>
                    <p className='incr-font'> Save</p>
                  </button>
                </div>
              </div>
            </div>
            <div className='video-info'>
              <div className='video-creator-name'>
                <img
                  className='video-creator-round-img'
                  src={video.creatorDp}
                  alt={video.creator}
                />
                <div className='incr-font-creator'>{video.creator}</div>
              </div>
              {/* Future TODOs:will add the video description */}
              {/* <div className='video-discription'>{video.description}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleVideoPage };
