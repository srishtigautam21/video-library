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
        </div>
      </NavLink>
      <NavLink to='/explorePage' className={activeStyle}>
        <div className='sidebar-icon'>
          <ExploreIcon />
        </div>
      </NavLink>
      <NavLink to='/playlist' className={activeStyle}>
        <div className='sidebar-icon'>
          <PlaylistIcon />
        </div>
      </NavLink>
      <NavLink to='/watchlater' className={activeStyle}>
        <div className='sidebar-icon'>
          <ClockIcon />
        </div>
      </NavLink>
      <NavLink to='/liked' className={activeStyle}>
        <div className='sidebar-icon'>
          <LikeIcon />
        </div>
      </NavLink>
      <NavLink to='/history' className={activeStyle}>
        <div className='sidebar-icon'>
          <HistoryIcon />
        </div>
      </NavLink>
    </div>
  );
};
export { Footer };
