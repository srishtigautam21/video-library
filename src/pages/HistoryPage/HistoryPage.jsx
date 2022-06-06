import { HistoryIcon } from "../../Assets/allsvg";
import { HistoryCard } from "../../component";
import { useWatchLater } from "../../context";
const HistoryPage = () => {
  const { historyList } = useWatchLater();
  return (
    <>
      <div className='page-title'>
        <HistoryIcon className='video-icon-alignment' />
        History
        <div className='watch-later-container'>
          {historyList?.map((videoCard) => (
            <HistoryCard key={videoCard._id} videoCard={videoCard} />
          ))}
        </div>
      </div>
    </>
  );
};
export { HistoryPage };
