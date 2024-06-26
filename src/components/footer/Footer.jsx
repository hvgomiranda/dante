import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="Footer">
            <ul className="Footer-item__list">
                <li><a href="https://www.imdb.com/name/nm13629021/" target="_blank" rel="noreferrer">IMDB</a></li>
                <li><a href="https://www.instagram.com/danteperini/" target="_blank" rel="noreferrer">IG</a></li>
                <li><a href="https://www.linkedin.com/in/perinidante/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
            <p className="Footer-item"><Link to={"/contact"}>perinidante@gmail.com</Link></p>
            <p className="Footer-item">Based in Buenos Aires.</p>
        </div>
    );
};

export default Footer;