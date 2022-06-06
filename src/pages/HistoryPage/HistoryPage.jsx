import { HistoryCard } from "../../component";
import { useWatchLater } from "../../context";
import { Link } from "react-router-dom";

const HistoryPage = () => {
  const { historyList } = useWatchLater();
  return (
    <>
      {historyList.length === 0 ? (
        <div className='empty-page'>
          Nothing here....
          <Link to='/explorePage'>
            <button className='button  button-overlay'>Explore videos</button>
          </Link>
        </div>
      ) : (
        <div className='watch-later-container'>
          {historyList?.map((videoCard) => (
            <HistoryCard key={videoCard._id} videoCard={videoCard} />
          ))}
        </div>
      )}

      {/* </div> */}
    </>
  );
};
export { HistoryPage };
