import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { UserIcon } from "../../Assets/allsvg";
import { useAuth } from "../../context";

const Navbar = () => {
  const { isUserLoggedIn, logOut } = useAuth();

  const [open, setOpen] = useState(false);
  return (
    <nav className='nav-component nav-padding'>
      <div className='content-header video-lib-header'>
        <Link className='component-libraryl-link' to='/'>
          nutrismart<span style={{ color: "orange" }}> TV</span>
        </Link>
      </div>
      <li className='icons-alignment'>
        <div className='navbar-icons'>
          <div className='dropdown'>
            <UserIcon
              className='nav-icons'
              onClick={() => setOpen((visible) => !visible)}
            />
            {open && (
              <div className='dropdown-menu'>
                {isUserLoggedIn ? (
                  <Link
                    className='link content-color'
                    to='/'
                    onClick={() => {
                      logOut();
                      setOpen(false);
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    className='dropdown-content login-link'
                    to='/login'
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </li>
    </nav>
  );
};
export { Navbar };
