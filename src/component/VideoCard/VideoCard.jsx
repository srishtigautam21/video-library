import "./videocard.css";

const VideoCard = ({ video }) => {
  const { title, creator, thumbnail, creatorDp, views } = video;
  return (
    <>
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
    </>
  );
};
export { VideoCard };
