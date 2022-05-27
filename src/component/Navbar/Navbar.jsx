import { Link } from "react-router-dom";
import "./navbar.css";
// import { useState } from "react";
import { UserIcon } from "../../Assets/allsvg";

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav-component nav-padding'>
        <div className='content-header video-lib-header'>
          <Link className='component-libraryl-link' to='/'>
            nutrismart<span style={{ color: "orange" }}> TV</span>
          </Link>
        </div>
        <li className='icons-alignment'>
          <UserIcon className='nav-icons' />
        </li>
      </nav>
    </div>
  );
};
export { Navbar };
