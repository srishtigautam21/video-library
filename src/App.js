import "./App.css";
import { HomePage, VideoListingPage } from "./pages/index";
import { Navbar, Sidebar } from "./component";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/explorePage' element={<VideoListingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
