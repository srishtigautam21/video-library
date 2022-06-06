import { Link } from "react-router-dom";
import "./watchLaterCard.css";
import { DeleteIcon } from "../../Assets/allsvg";
import { useWatchLater } from "../../context/WatchLaterContext";

const WatchLaterCard = ({ videoCard }) => {
  const { deleteFromWatchLater } = useWatchLater();
  const { title, creator, thumbnail, creatorDp, views, _id } = videoCard;
  const deleteWatchLaterHandler = (_id) => {
    deleteFromWatchLater(_id);
  };
  return (
    <>
      <div className=' videocard-container parent-positioning videocard-dimension'>
        <Link to={`/video/${_id}`} state={videoCard} className='video-link'>
          <img src={thumbnail} alt={title} />
        </Link>
        <div className='inside-container '>
          <div className='video-title'>
            <img className='creator' src={creatorDp} alt={creator} />
            <h4>{title}</h4>
          </div>
          <div className='video-creator'>
            <span className='card-content'>{creator}</span>
            <div className='watch-later-card'>
              <p>{views} views</p>
              <button
                className='video-btn'
                onClick={() => deleteWatchLaterHandler(_id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { WatchLaterCard };
