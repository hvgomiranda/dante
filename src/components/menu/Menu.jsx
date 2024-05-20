import "./Menu.css";
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { slide as MenuBar} from 'react-burger-menu';

const DesktopMenu = () => (
    <nav className="Menu">
        <ul  className="Menu-list">
            <li><Link to={"/section/film-tv-series"} className="Menu-item">Film / TV series</Link></li>
            <li><Link to={"/section/music-videos"} className="Menu-item">Music Videos</Link></li>
            <li><Link to={"/section/commercials"} className="Menu-item">Commercials</Link></li>
        </ul>
    </nav>
  );
  
  const MobileMenu = () => (
    <MenuBar right className="Menu">
        <ul  className="Menu-list">
            <li><Link to={"/section/film-tv-series"} className="Menu-item">Film / TV series</Link></li>
            <li><Link to={"/section/music-videos"} className="Menu-item">Music Videos</Link></li>
            <li><Link to={"/section/commercials"} className="Menu-item">Commercials</Link></li>
        </ul>
    </MenuBar>
  );

const Menu = () => {

    const isDesktop = useMediaQuery({ minWidth: 769 });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return(
        <div>
            {isDesktop && <DesktopMenu />}
            {isMobile && <MobileMenu />}
        </div>
    );
};

export default Menu;