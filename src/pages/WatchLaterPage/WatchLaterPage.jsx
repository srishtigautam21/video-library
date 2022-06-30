import { useWatchLater } from "../../context";
import { WatchLaterCard, Footer } from "../../component";
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
          <div className='each-page-header'>Watchlater</div>
          <div className='all-video-wrapper'>
            {watchLaterList?.map((videoCard) => (
              <WatchLaterCard key={videoCard._id} videoCard={videoCard} />
            ))}
          </div>
        </div>
      )}
      <div className='footer footer-mediaquery'>
        <Footer />
      </div>
    </>
  );
};
export { WatchLaterPage };
