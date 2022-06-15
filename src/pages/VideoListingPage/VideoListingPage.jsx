// import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../component";
import { VideoFilter } from "../../component";
import { useCategory } from "../../context";

const VideoListingPage = () => {
  const { category, filterState, setSelectedCategory } = useCategory();

  const tempCategory = ["All", ...category];
  return (
    <>
      <div className='main-content main-display'>
        <div className='video-container'>
          <div className='video-filters'>
            {tempCategory.map((categor) => (
              <VideoFilter
                key={categor}
                categor={categor}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </div>
          <div className='vertical-cards'>
            {/* {videos.map((video) => { */}
            {filterState().map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export { VideoListingPage };
