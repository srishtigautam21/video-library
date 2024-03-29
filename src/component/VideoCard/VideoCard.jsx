import "./videocard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useWatchLater } from "../../context";
import { PlaylistIcon } from "../../Assets/allsvg";
import { PlayListModal } from "../../component";
import { useState } from "react";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { addToHistory } = useWatchLater();
  const { isUserLoggedIn } = useAuth();
  const { title, creator, thumbnail, creatorDp, views, _id } = video;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className=' videocard-container parent-positioning '>
        <Link
          to={`/video/${_id}`}
          state={video}
          onClick={() => {
            isUserLoggedIn && addToHistory(video);
          }}
        >
          <img src={thumbnail} alt={title} />
        </Link>
        <div className='inside-container '>
          <div className='video-title'>
            <img className='creator' src={creatorDp} alt={creator} />
            <h4>{title}</h4>
          </div>
          <div className='video-creator'>
            <span className='card-content'>{creator}</span>
            <p>{views} views</p>
          </div>
          <PlaylistIcon
            className='video-margin'
            onClick={() => {
              isUserLoggedIn
                ? setOpenModal(true)
                : navigate(
                    "/login",
                    { state: { from: { pathname: pathname } } },
                    { replace: true }
                  );
            }}
          />
        </div>
      </div>
      <PlayListModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        video={video}
      />
    </>
  );
};
export { VideoCard };
