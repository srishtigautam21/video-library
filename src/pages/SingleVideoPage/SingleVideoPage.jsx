import { useParams, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import "./singleVideoPage.css";
import { LikeIcon, PlaylistIcon, ClockIcon } from "../../Assets/allsvg";
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
                  <button className='video-btn'>
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
              {/* Future TODOs:will ad the video description */}
              {/* <div className='video-discription'>{video.description}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleVideoPage };
