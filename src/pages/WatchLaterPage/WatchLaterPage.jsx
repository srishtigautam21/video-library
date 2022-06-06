import { useWatchLater } from "../../context";
import { WatchLaterCard } from "../../component";
import "./watchLaterPage.css";

const WatchLaterPage = () => {
  const { watchLaterList } = useWatchLater();
  return (
    <>
      <div className='watch-later-container'>
        {watchLaterList?.map((videoCard) => (
          <WatchLaterCard key={videoCard._id} videoCard={videoCard} />
        ))}
      </div>
    </>
  );
};
export { WatchLaterPage };
