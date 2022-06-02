import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { UserIcon } from "../../Assets/allsvg";
import { useAuth } from "../../context";

const Navbar = () => {
  const { isUserLoggedIn, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <div className='navbar'>
      <nav className='nav-component nav-padding'>
        <div className='content-header video-lib-header'>
          <Link className='component-libraryl-link' to='/'>
            nutrismart<span style={{ color: "orange" }}> TV</span>
          </Link>
        </div>
        <li className='icons-alignment'>
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
                      setOpen((visible) => !visible);
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className='dropdown-content login-link' to='/login'>
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </li>
      </nav>
    </div>
  );
};
export { Navbar };
