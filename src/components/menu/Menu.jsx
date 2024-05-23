import "./Menu.css";
import { Link } from 'react-router-dom';
import { useState } from "react";
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
  
const MobileMenu = () => {
    
    const [menuOpen, setMenuOpen] = useState(false); 
    
    const handleStateChange = (state) => {
        setMenuOpen(state.isOpen);
    };
    
    const closeMenu = () => {
        setMenuOpen(false);
    };
    
    return(
        <MenuBar 
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        right
        noTransition
        className={`Menu ${menuOpen ? 'Menu__open' : 'Menu__closed'}`}>
            <ul  className="Menu-list">
                <li><Link to={"/section/film-tv-series"} className="Menu-item" onClick={closeMenu}>Film / TV series</Link></li>
                <li><Link to={"/section/music-videos"} className="Menu-item" onClick={closeMenu}>Music Videos</Link></li>
                <li><Link to={"/section/commercials"} className="Menu-item" onClick={closeMenu}>Commercials</Link></li>
            </ul>
            <div className="Menu__footer">
                <ul className="Menu__footer-item-list">
                    <li><a href="https://www.imdb.com/name/nm13629021/" target="_blank" rel="noreferrer" onClick={closeMenu}>IMDB</a></li>
                    <li><a href="https://www.instagram.com/danteperini/" target="_blank" rel="noreferrer" onClick={closeMenu}>IG</a></li>
                    <li><a href="https://www.linkedin.com/in/perinidante/" target="_blank" rel="noreferrer" onClick={closeMenu}>LinkedIn</a></li>
                </ul>
                <p className="Menu__footer-item"><Link to={"/contact"} onClick={closeMenu}>perinidante@gmail.com</Link></p>
                <p className="Menu__footer-item">Based in Buenos Aires.</p>
            </div>
        </MenuBar>
    )
};

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