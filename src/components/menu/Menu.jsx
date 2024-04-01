import "./Menu.css";
import data from "../../data_base/database.json";
import { Link } from 'react-router-dom';

const Menu = () => {

    return(
        <nav>
            <ul className="Menu">
                <li><Link to={"/film-tv-series"} className="Menu-item">Film / TV series</Link></li>
                <li><Link to={"/music-videos"} className="Menu-item">Music Videos</Link></li>
                <li><Link to={"/commercials"} className="Menu-item">Commercials</Link></li>
            </ul>
        </nav>
    )

};

export default Menu;