import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./singleVideoPage.css";
import { useWatchLater, useModal, useAuth } from "../../context";
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
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();
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

  const isLiked = likedVideoList.findIndex((like) => like._id === video._id);
  const isInWatchLater = watchLaterList.findIndex(
    (watchlater) => watchlater._id === video._id
  );
  const watchLaterHandler = (video) => {
    addToWatchLater(video);
  };
  return (
    <>
      <div className='video-container'>
        <div className='iframe-container'>
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3`}
            className='player'
            title={video.title}
            frameBorder='0'
            allowFullScreen
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope'
          ></iframe>
        </div>
        <div className='video-content-container'>
          <div className='videoPage-title'>{video.title}</div>
          <div className='video-operation'>
            <p>{video.views} views</p>
            <div className='youtube-icons'>
              <div className='video-item'>
                {isLiked === -1 ? (
                  <button
                    className='video-btn'
                    onClick={() => {
                      isUserLoggedIn
                        ? addToLikedVideo(video)
                        : navigate("/login");
                    }}
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
                    onClick={() => {
                      isUserLoggedIn
                        ? watchLaterHandler(video)
                        : navigate("/login");
                    }}
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
                    <p className='incr-font icon-hide'>Watch Later</p>
                  </button>
                )}
              </div>
              <div className='video-item'>
                <button
                  className='video-btn'
                  onClick={() => {
                    isUserLoggedIn ? setOpenModal(true) : navigate("/login");
                  }}
                >
                  <span>
                    <PlaylistIcon className='incr-font' />
                  </span>
                  <p className='incr-font icon-hide'> Save</p>
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
            <div className='video-discription'>{video.description}</div>
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
