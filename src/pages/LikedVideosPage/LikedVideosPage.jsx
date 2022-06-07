import { LikedVideoCard } from "../../component";
import { useWatchLater } from "../../context/WatchLaterContext";

import { Link } from "react-router-dom";
import "./likedVideoPage.css";

const LikedVideosPage = () => {
  const { likedVideoList } = useWatchLater();
  // console.log(likedVideoList);
  return (
    <>
      {likedVideoList.length === 0 ? (
        <div className='empty-page'>
          Nothing here....
          <Link to='/explorePage'>
            <button className='button  button-overlay'>Explore videos</button>
          </Link>
        </div>
      ) : (
        <div className='watch-later-container'>
          {likedVideoList?.map((videoCard) => (
            <LikedVideoCard key={videoCard._id} videoCard={videoCard} />
          ))}
        </div>
      )}
    </>
  );
};
export { LikedVideosPage };
