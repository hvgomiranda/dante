import "./Menu.css";
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

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
    <nav className="Menu Menu--mobile">
        <ul className="Menu-list">
            <li><Link to={"/section/film-tv-series"} className="Menu-item">Film / TV series</Link></li>
            <li><Link to={"/section/music-videos"} className="Menu-item">Music Videos</Link></li>
            <li><Link to={"/section/commercials"} className="Menu-item">Commercials</Link></li>
            <li><Link to={"/about"} className="Menu-item">About</Link></li>
            <li><Link to={"/contact"} className="Menu-item">Contact</Link></li>
        </ul>
    </nav>
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
