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
  Page404,
  SignUpPage,
} from "./pages/index";

import { Navbar, Sidebar, Loading } from "./component";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./customHooks/RequireAuth";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className='home-page grid-container '>
        <Navbar />
        <Sidebar />
        <Loading />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/explorePage' element={<VideoListingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/video/:id' element={<SingleVideoPage />} />
          <Route path='*' element={<Page404 />} />
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
          <Route
            path='/liked'
            element={
              <RequireAuth>
                <LikedVideosPage />
              </RequireAuth>
            }
          />
          <Route
            path='/history'
            element={
              <RequireAuth>
                <HistoryPage />
              </RequireAuth>
            }
          />
        </Routes>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
