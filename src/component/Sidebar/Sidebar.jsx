import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { HomeIcon } from "../../Assets/allsvg";

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
        {/* <NavLink to='/labels' className={activeStyle}>
         
        </NavLink>
        <NavLink to='/archive' className={activeStyle}>
          Archive
        </NavLink>
        <NavLink to='/trash' className={activeStyle}>
          Trash
        </NavLink> */}
      </div>
    </>
  );
};
export { Sidebar };
