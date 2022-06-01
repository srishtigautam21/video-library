import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../component";

const VideoListingPage = () => {
  return (
    <>
      <div className='main-content main-display'>
        <div className='video-container'>
          <div className='vertical-cards'>
            {videos.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export { VideoListingPage };
