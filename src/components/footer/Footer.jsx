import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="Footer">
            <p className="Footer-item"><Link to={"/about"}>About</Link></p>
            <p className="Footer-item"><Link to={"/contact"}>Contact</Link></p>
            <p className="Footer-item">Based in Buenos Aires.</p>
        </div>
    );
};

export default Footer;
