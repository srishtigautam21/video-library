import { DeleteIcon } from "../../Assets/allsvg";
import { useWatchLater } from "../../context";

const HistoryCard = ({ videoCard }) => {
  const { title, creator, thumbnail, creatorDp, views, _id } = videoCard;
  const { deleteFromHistory } = useWatchLater();
  return (
    <>
      {/* <Link to={`/video/${_id}`} state={videoCard} className='video-link'> */}
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
                onClick={() => deleteFromHistory(_id)}
              >
                <DeleteIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};
export { HistoryCard };
