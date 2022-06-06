import { NavLink } from "react-router-dom";
import "./sidebar.css";
import {
  HomeIcon,
  ExploreIcon,
  PlaylistIcon,
  ClockIcon,
} from "../../Assets/allsvg";

const Sidebar = () => {
  const activeStyle = ({ isActive }) => {
    return isActive
      ? "active-link md-pd aside-heading  "
      : "inactive-link md-pd aside-heading  ";
  };

  return (
    <>
      <div className='sidebar md-margin'>
        <NavLink to='/' className={activeStyle}>
          <HomeIcon />
          <small>Home</small>
        </NavLink>
        <NavLink to='/explorePage' className={activeStyle}>
          <ExploreIcon />
          <small>Explore</small>
        </NavLink>
        <NavLink to='/playlist' className={activeStyle}>
          <PlaylistIcon />
          <small>Playlist</small>
        </NavLink>
        <NavLink to='/watchlater' className={activeStyle}>
          <ClockIcon />
          <small>Watch Later</small>
        </NavLink>
      </div>
    </>
  );
};
export { Sidebar };
