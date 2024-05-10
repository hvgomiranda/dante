import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
      <div className='Header'>
          <p><Link to={"/"} className="Header-title">D A N T E P E R I N I</Link></p>
          <p className='Header-subtitle'>F I L M E D I T O R</p>
      </div>
    );
};

export default Header;