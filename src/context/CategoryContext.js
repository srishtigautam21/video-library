import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../context";
import axios from "axios";
// import { videos } from "../backend/db/videos";
import { useWatchLater } from "../context";
const CategoryContext = createContext([]);

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { videos } = useWatchLater();
  // eslint-disable-next-line
  const { encodedToken } = useAuth();

  const filterState = () => {
    let filterVideos = [...videos];
    // if (category) {
    if (selectedCategory === "All") return filterVideos;
    return (filterVideos = filterVideos.filter(
      (video) => video.category === selectedCategory
    ));
    // }
    // console.log(filterVideos);
    // return filterVideos;
  };

  const getCategory = async () => {
    const encodedToken = localStorage.getItem("myToken");
    const config = { headers: { authorization: encodedToken } };
    try {
      const result = await axios.get("/api/categories", config);
      setCategory(
        result.data.categories.map((category) => category.categoryName)
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (encodedToken !== null) {
      getCategory();
    }
  }, [encodedToken]);
  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
        filterState,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };
