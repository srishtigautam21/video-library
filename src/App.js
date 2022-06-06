import "./App.css";
import {
  HomePage,
  VideoListingPage,
  LoginPage,
  PlaylistPage,
  SingleVideoPage,
  WatchLaterPage,
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
          <Route
            path='/playlist'
            element={
              <RequireAuth>
                <PlaylistPage />
              </RequireAuth>
            }
          />
          <Route
            path='/watchlater'
            element={
              <RequireAuth>
                <WatchLaterPage />
              </RequireAuth>
            }
          />
          <Route path='/video/:id' element={<SingleVideoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
