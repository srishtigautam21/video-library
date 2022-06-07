import "./App.css";
import {
  HomePage,
  VideoListingPage,
  LoginPage,
  PlaylistPage,
  SingleVideoPage,
  WatchLaterPage,
  LikedVideosPage,
  HistoryPage,
} from "./pages/index";
import { Navbar, Sidebar } from "./component";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./customHooks/RequireAuth";

function App() {
  return (
    <>
      <div className='home-page grid-container'>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/explorePage' element={<VideoListingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/video/:id' element={<SingleVideoPage />} />
          <Route element={<RequireAuth />}>
            <Route path='/playlist' element={<PlaylistPage />} />
            <Route path='/watchlater' element={<WatchLaterPage />} />
            <Route path='/liked' element={<LikedVideosPage />} />
            <Route path='/history' element={<HistoryPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
