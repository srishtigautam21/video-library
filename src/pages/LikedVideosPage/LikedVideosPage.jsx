import { LikedVideoCard } from "../../component";
import { useWatchLater } from "../../context/WatchLaterContext";

const LikedVideosPage = () => {
  const { likedVideoList } = useWatchLater();
  return (
    <>
      <div className='watch-later-container'>
        {likedVideoList.map((videoCard) => (
          <LikedVideoCard key={videoCard._id} videoCard={videoCard} />
        ))}
      </div>
    </>
  );
};
export { LikedVideosPage };
