import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
      <div className='Header'>
          <p><Link to={"/"} className="Header-title">DANTE PERINI</Link></p>
          <p className='Header-subtitle'>FILM EDITOR</p>
      </div>
    );
};

export default Header;