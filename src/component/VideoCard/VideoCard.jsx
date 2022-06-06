import "./videocard.css";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../context";

const VideoCard = ({ video }) => {
  const { addToHistory } = useWatchLater();
  const { title, creator, thumbnail, creatorDp, views, _id } = video;
  return (
    <>
      <Link
        to={`/video/${_id}`}
        state={video}
        onClick={() => addToHistory(video)}
      >
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
export { VideoCard };
