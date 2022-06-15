import "./videoFilter.css";
import { useCategory } from "../../context";

const VideoFilter = ({ categor }) => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className='video-filters'>
      <button
        onClick={() => setSelectedCategory(categor)}
        className={`filter-buttons ${
          categor === selectedCategory ? "filter-active" : ""
        }`}
      >
        {categor}
      </button>
    </div>
  );
};
export { VideoFilter };
