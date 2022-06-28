import { useParams, useLocation } from "react-router-dom";
// import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import "./singleVideoPage.css";
import { useWatchLater, useModal } from "../../context";
import { PlayListModal, Footer } from "../../component";
import {
  LikeIcon,
  PlaylistIcon,
  ClockIcon,
  LikeIconFilled,
} from "../../Assets/allsvg";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

const SingleVideoPage = () => {
  const { id } = useParams();
  const { openModal, setOpenModal } = useModal();
  useDocumentTitle("Videos Page");
  const {
    addToWatchLater,
    watchLaterList,
    addToLikedVideo,
    likedVideoList,
    unlikeVideoHandler,
  } = useWatchLater();
  const { state } = useLocation();
  const video = state;
  // const videoOnReady = (event) => {
  //   const player = event.target;
  //   player.seekTo(0);
  // };
  // const opts = {
  // height: "450",
  // width: "700",
  //   height: "100%",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };
  const ResponsivePlayer = ({ id }) => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`https://www.youtube.com/watch?v=${id}`}
          width='100%'
          height='100%'
          controls={true}
        />
      </div>
    );
  };

  const isLiked = likedVideoList.findIndex((like) => like._id === video._id);
  const isInWatchLater = watchLaterList.findIndex(
    (watchlater) => watchlater._id === video._id
  );
  const watchLaterHandler = (video) => {
    addToWatchLater(video);
  };
  return (
    <>
      <div className='videoPage-wrapper'>
        <div className='video-container'>
          {/* <div className='player-wrapper'>
            <YouTube
              videoId={id}
              opts={opts}
              onReady={videoOnReady}
              className='react-player'
            />
          </div> */}
          <div className='single-video-player'>
            <ResponsivePlayer id={id} />
          </div>

          {/* <YouTube videoId={id} opts={opts} onReady={videoOnReady} /> */}
          <div className='video-content-container'>
            <div className='videoPage-title'>{video.title}</div>
            <div className='video-operation'>
              <p>{video.views} views</p>
              <div className='youtube-icons'>
                <div className='video-item'>
                  {isLiked === -1 ? (
                    <button
                      className='video-btn'
                      onClick={() => addToLikedVideo(video)}
                    >
                      <span>
                        <LikeIcon className='incr-font' />
                      </span>
                      <p className='incr-font'>Like</p>
                    </button>
                  ) : (
                    <button
                      className='video-btn'
                      onClick={() => unlikeVideoHandler(video._id)}
                    >
                      <span>
                        <LikeIconFilled className='incr-font' />
                      </span>
                      <p className='incr-font video-icon-color'>Like</p>
                    </button>
                  )}
                </div>
                <div className='video-item'>
                  {isInWatchLater === -1 ? (
                    <button
                      className='video-btn'
                      onClick={() => watchLaterHandler(video)}
                    >
                      <span>
                        <ClockIcon className='incr-font' />
                      </span>
                      <p className='incr-font'>Watch Later</p>
                    </button>
                  ) : (
                    <button className='video-btn btn-disable' disabled>
                      <span>
                        <ClockIcon className='incr-font' />
                      </span>
                      <p className='incr-font'>Watch Later</p>
                    </button>
                  )}
                </div>
                <div className='video-item'>
                  <button
                    className='video-btn'
                    onClick={() => setOpenModal(true)}
                  >
                    <span>
                      <PlaylistIcon className='incr-font' />
                    </span>
                    <p className='incr-font'> Save</p>
                  </button>
                </div>
              </div>
              <PlayListModal
                setOpenModal={setOpenModal}
                openModal={openModal}
                video={video}
              />
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
      <div className='footer footer-mediaquery'>
        <Footer />
      </div>
    </>
  );
};
export { SingleVideoPage };
