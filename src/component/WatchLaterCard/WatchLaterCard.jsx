import { Link } from "react-router-dom";
import "./watchLaterCard.css";

const WatchLaterCard = ({ videoCard }) => {
  const { title, creator, thumbnail, creatorDp, views, _id } = videoCard;
  return (
    <>
      <Link to={`/video/${_id}`} state={videoCard} className='video-link'>
        <div className=' videocard-container parent-positioning '>
          <img src={thumbnail} alt={title} />
          <div className='inside-container '>
            <div className='video-title'>
              <img className='creator' src={creatorDp} alt={creator} />
              <h4>{title}</h4>
            </div>
            <div className='video-creator'>
              <span className='card-content'>{creator}</span>
              <p>{views} views</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export { WatchLaterCard };
