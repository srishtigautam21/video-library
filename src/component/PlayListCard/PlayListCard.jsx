import { Link } from "react-router-dom";
import { useWatchLater, usePlayList } from "../../context";
import { DeleteIcon } from "../../Assets/allsvg";
import { PlayListModal } from "../../component";
import { useState } from "react";

const PlayListCard = ({ video, playlistId }) => {
  const { addToHistory } = useWatchLater();
  const { title, creator, thumbnail, creatorDp, views, _id } = video;
  const [openModal, setOpenModal] = useState(false);
  const { removeFromPlaylist } = usePlayList();
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
          <DeleteIcon
            className='video-margin'
            onClick={() => removeFromPlaylist(playlistId, video)}
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
export { PlayListCard };
