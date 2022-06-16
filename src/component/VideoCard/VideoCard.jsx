import "./videocard.css";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../context";
import { PlaylistIcon } from "../../Assets/allsvg";
import { PlayListModal } from "../../component";
import { useState } from "react";

const VideoCard = ({ video }) => {
  const { addToHistory } = useWatchLater();
  const { title, creator, thumbnail, creatorDp, views, _id } = video;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className=' videocard-container parent-positioning '>
        <Link
          to={`/video/${_id}`}
          state={video}
          onClick={() => addToHistory(video)}
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
            onClick={() => setOpenModal(true)}
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
