import "./Menu.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <nav>
            <div className="Menu">
                <button className="Menu-toggle" onClick={toggleMenu}>{menuOpen ? "X" : "Menú"}</button>
                <ul className={`Menu-list ${menuOpen ? 'Menu-list-open' : ''}`}>
                    <li><Link to={"/section/film-tv-series"} className="Menu-item">Film / TV series</Link></li>
                    <li><Link to={"/section/music-videos"} className="Menu-item">Music Videos</Link></li>
                    <li><Link to={"/section/commercials"} className="Menu-item">Commercials</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;