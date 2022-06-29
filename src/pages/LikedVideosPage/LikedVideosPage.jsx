import { LikedVideoCard, Footer } from "../../component";
import { useWatchLater } from "../../context/WatchLaterContext";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import { Link } from "react-router-dom";
import "./likedVideoPage.css";

const LikedVideosPage = () => {
  const { likedVideoList } = useWatchLater();
  useDocumentTitle("Liked Videos Page");
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
          <div className='each-page-header'>Liked videos</div>
          {likedVideoList?.map((videoCard) => (
            <LikedVideoCard key={videoCard._id} videoCard={videoCard} />
          ))}
        </div>
      )}
      <div className='footer footer-mediaquery'>
        <Footer />
      </div>
    </>
  );
};
export { LikedVideosPage };
