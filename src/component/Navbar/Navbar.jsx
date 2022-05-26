import { Link } from "react-router-dom";
import "./navbar.css";
// import { useState } from "react";
import { UserIcon } from "../../Assets/allsvg";

const Navbar = () => {
  //   const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <nav className='nav-component nav-padding'>
        <div className='content-header'>
          <Link className='component-libraryl-link' to='/'>
            nutrismart TV
          </Link>
        </div>
        <li className='icons-alignment'>
          {/* <div className='dropdown'>
            <Link
              className='link ecom-link-color'
              to='/homePage'
              onClick={() => setOpen((visible) => !visible)}
            > */}
          <UserIcon className='nav-icons' />
          {/* </Link>
            {open && (
              <div className='dropdown-menu'>
                <Link className='dropdown-content login-link' to='/login'>
                  Login
                </Link>
                <Link className='dropdown-content profile' to='/homePage'>
                  Profile
                </Link>
              </div>
            )}
          </div> */}
        </li>
      </nav>
    </div>
  );
};
export { Navbar };
