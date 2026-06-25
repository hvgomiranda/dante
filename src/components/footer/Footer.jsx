import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="Footer">
            <p className="Footer-item"><Link to={"/about"}>About</Link></p>
        </div>
    );
};

export default Footer;
