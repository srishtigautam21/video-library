import { Link } from "react-router-dom";
import { LikeIconFilled } from "../../Assets/allsvg";
import { useWatchLater } from "../../context";
const LikedVideoCard = ({ videoCard }) => {
  const { title, creator, thumbnail, creatorDp, views, _id } = videoCard;
  const { unlikeVideoHandler } = useWatchLater();
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
                onClick={() => unlikeVideoHandler(_id)}
              >
                <LikeIconFilled />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { LikedVideoCard };
