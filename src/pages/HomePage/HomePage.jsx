import { Navbar, Sidebar } from "../../component";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <div className='main-content main-display'>Main-Content</div>
      </div>
    </>
  );
};
export { HomePage };
