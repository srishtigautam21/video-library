import { Navbar, Sidebar } from "../../component";
import "./homePage.css";
import heroImg4 from "../../Assets/heroImg4.jpg";
import breakfast from "../../Assets/breakfast.jpeg";
import lunch from "../../Assets/lunch.jpg";
import snacks from "../../Assets/snacks.jpg";
import dinner from "../../Assets/dinner.jpg";

const HomePage = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content main-display'>
          <div className='img-container'>
            <img className='hero-img' src={heroImg4} alt='hero-img' />
            <div className='img-overlay'>
              <div className='video-header'>
                Let's start your healthy journey!!
              </div>
              <button className='button  button-overlay'>SHOW VIDEOS</button>
            </div>
          </div>
          <h1 className='category-header'>Categories</h1>
          <div className='categories-container'>
            <div className='square-image parent-positioning'>
              <img src={breakfast} alt='breakfast' className='category-img' />
              <div className='category-img-overlay'>Breakfast</div>
            </div>
            <div className='square-image parent-positioning'>
              <img src={lunch} alt='lunch' className='category-img' />
              <div className='category-img-overlay'>Lunch</div>
            </div>
            <div className='square-image parent-positioning'>
              <img src={snacks} alt='snacks' className='category-img' />
              <div className='category-img-overlay'>Snacks</div>
            </div>
            <div className='square-image parent-positioning'>
              <img src={dinner} alt='dinner' className='category-img' />
              <div className='category-img-overlay'>Dinner</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { HomePage };
