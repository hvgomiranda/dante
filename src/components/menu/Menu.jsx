import "./Menu.css";
import { Link } from 'react-router-dom';
import { slide as MenuBar} from 'react-burger-menu';

const Menu = () => {
    return(
        <MenuBar right className="Menu">
            <ul  className="Menu-list">
                <li><Link to={"/section/film-tv-series"} className="Menu-item">Film / TV series</Link></li>
                <li><Link to={"/section/music-videos"} className="Menu-item">Music Videos</Link></li>
                <li><Link to={"/section/commercials"} className="Menu-item">Commercials</Link></li>
            </ul>
        </MenuBar>
    );
};

export default Menu;