import "./footer.css";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  ExploreIcon,
  PlaylistIcon,
  ClockIcon,
  LikeIcon,
  HistoryIcon,
} from "../../Assets/allsvg";

const Footer = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "footer-active-link footer-md-pd aside-heading  "
      : "footer-inactive-link footer-md-pd aside-heading  ";
  };
  return (
    <div className='footer-icons md-margin'>
      <NavLink to='/' className={activeStyle}>
        <div className='sidebar-icon'>
          <HomeIcon />
          {/* <small>Home</small> */}
        </div>
      </NavLink>
      <NavLink to='/explorePage' className={activeStyle}>
        <div className='sidebar-icon'>
          {" "}
          <ExploreIcon />
          {/* <small>Explore</small> */}
        </div>
      </NavLink>
      <NavLink to='/playlist' className={activeStyle}>
        <div className='sidebar-icon'>
          {" "}
          <PlaylistIcon />
          {/* <small>Playlist</small> */}
        </div>
      </NavLink>
      <NavLink to='/watchlater' className={activeStyle}>
        <div className='sidebar-icon'>
          {" "}
          <ClockIcon />
          {/* <small>Watch Later</small> */}
        </div>
      </NavLink>
      <NavLink to='/liked' className={activeStyle}>
        <div className='sidebar-icon'>
          <LikeIcon />
          {/* <small>Liked Videos</small> */}
        </div>
      </NavLink>
      <NavLink to='/history' className={activeStyle}>
        <div className='sidebar-icon'>
          {" "}
          <HistoryIcon />
          {/* <small>History</small> */}
        </div>
      </NavLink>
    </div>
  );
};
export { Footer };
