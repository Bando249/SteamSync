import { Link } from "react-router";
import "./NavBar.css";
import { PiUserFill } from "react-icons/pi";
const NavBar = () => {
  return (
    <nav className="navbar d-flex">
      <Link className="navbar-brand" to="/">
        SteamSync
      </Link>

      <ul className="nav flex-grow-1">
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/library">
            Library
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/friends">
            Friends
          </Link>
        </li>
        <li className="nav-item ms-auto">
          <Link className="nav-link" to="/account">
            <PiUserFill className="account-logo" size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
