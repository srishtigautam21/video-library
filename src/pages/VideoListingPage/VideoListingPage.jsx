import { VideoCard } from "../../component";
import { VideoFilter } from "../../component";
import { useCategory } from "../../context";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";

const VideoListingPage = () => {
  const { category, filterState, setSelectedCategory } = useCategory();
  useDocumentTitle("Explore Page");
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
