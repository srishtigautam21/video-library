import { useWatchLater } from "../../context";
import { WatchLaterCard } from "../../component";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import "./watchLaterPage.css";
import { Link } from "react-router-dom";

const WatchLaterPage = () => {
  const { watchLaterList } = useWatchLater();
  useDocumentTitle("Watchlater Page");
  return (
    <>
      {watchLaterList.length === 0 ? (
        <div className='empty-page'>
          Nothing here....
          <Link to='/explorePage'>
            <button className='button  button-overlay'>Explore videos</button>
          </Link>
        </div>
      ) : (
        <div className='watch-later-container'>
          {watchLaterList?.map((videoCard) => (
            <WatchLaterCard key={videoCard._id} videoCard={videoCard} />
          ))}
        </div>
      )}
    </>
  );
};
export { WatchLaterPage };
