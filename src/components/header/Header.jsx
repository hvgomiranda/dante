import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return(
    <div className='Header'>
        <p>
          <Link
            to={"/"}
            className="Header-title"
            onClick={(event) => {
              if (location.pathname === "/") event.preventDefault();
            }}
          >
            DANTE PERINI
          </Link>
        </p>
        <p className='Header-subtitle'>EDITOR</p>
    </div>
  );
};

export default Header;
