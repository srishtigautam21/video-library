import { Navbar, Sidebar } from "../../component";
import "./homePage.css";
import mainPhoto from "../../Assets/mainPhoto.jpg";

const HomePage = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content main-display'>
          <img className='hero-img' src={mainPhoto} alt='hero-img' />
        </div>
      </div>
    </>
  );
};
export { HomePage };
