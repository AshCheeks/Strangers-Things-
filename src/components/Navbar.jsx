// IMPORT STYLE-SHEET
import '../styles/Navbar.scss';
import '../styles/Universal.scss';
// IMPORT ICONS
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaSign,
  FaHome,
} from 'react-icons/fa';
// IMPORT REACT-ROUTERS
import { Link } from 'react-router-dom';

// NAV BAR COMPONENT
const Navbar = ({ loggedIn, setLoggedIn }) => {
  return (
    <nav>
      <Link to='/login'>
        <h2 className='logo'>Strangers Things</h2>
      </Link>
      <ul>
        {loggedIn ? (
          <>
            <Link to='/posts'>
              <FaSign />
              Posts
            </Link>
            <Link to='/profile'>
              <FaUser />
              Profile
            </Link>
            <Link to='/logout'>
              <FaSignOutAlt />
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to='/login'>
              <FaHome /> Home
            </Link>
            <Link to='/posts'>
              <FaSign /> Posts
            </Link>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
