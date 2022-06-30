import "./homePage.css";
import { Link, useNavigate } from "react-router-dom";
import { useCategory } from "../../context";
import heroImg4 from "../../Assets/Images/heroImg4.jpg";
import breakfast from "../../Assets/Images/breakfast.jpeg";
import lunch from "../../Assets/Images/lunch.jpg";
import snacks from "../../Assets/Images/snacks.jpg";
import dinner from "../../Assets/Images/dinner.jpg";
import { useDocumentTitle } from "../../customHooks/useDocumentTitle";
import { Footer } from "../../component";

const HomePage = () => {
  useDocumentTitle("Home Page");
  const navigate = useNavigate();
  const { setSelectedCategory } = useCategory();

  const selectCategory = (category) => {
    setSelectedCategory(category);

    navigate("/explorePage");
  };
  return (
    <>
      <div className='main-content main-display'>
        <div className='img-container'>
          <img className='hero-img' src={heroImg4} alt='hero-img' />
          <div className='img-overlay'>
            <div className='video-header'>
              Let's start your healthy journey!!
            </div>
            <Link to='/explorePage'>
              <button className='button  button-overlay'>SHOW VIDEOS</button>
            </Link>
          </div>
        </div>
        <h1 className='category-header'>Categories</h1>
        <div className='categories-container'>
          <div
            className='square-image '
            onClick={() => selectCategory("Breakfast")}
          >
            <img src={breakfast} alt='breakfast' className='category-img' />
            <div className='category-img-overlay'>Breakfast</div>
          </div>
          <div className='square-image' onClick={() => selectCategory("Lunch")}>
            <img src={lunch} alt='lunch' className='category-img' />
            <div className='category-img-overlay'>Lunch</div>
          </div>
          <div
            className='square-image '
            onClick={() => selectCategory("Snacks")}
          >
            <img src={snacks} alt='snacks' className='category-img' />
            <div className='category-img-overlay'>Snacks</div>
          </div>
          <div
            className='square-image '
            onClick={() => selectCategory("Dinner")}
          >
            <img src={dinner} alt='dinner' className='category-img' />
            <div className='category-img-overlay'>Dinner</div>
          </div>
        </div>
      </div>
      <div className='footer footer-mediaquery'>
        <Footer />
      </div>
    </>
  );
};
export { HomePage };
