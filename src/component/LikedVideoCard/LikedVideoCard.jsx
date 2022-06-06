import { Link } from "react-router-dom";
import { LikeIconFilled } from "../../Assets/allsvg";
const LikedVideoCard = ({ videoCard }) => {
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
              <div className='watch-later-card'>
                <p>{views} views</p>
                <button
                  className='video-btn'
                  // onClick={() => deleteFromWatchLater(_id)}
                >
                  <LikeIconFilled />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export { LikedVideoCard };
