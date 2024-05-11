import "./Footer.css";

const Footer = () => {
    return(
        <div className="Footer">
            <p className="Footer-item">Based in Buenos Aires</p>
            <p className="Footer-item"><a href="mailto:perinidante@gmail.com">perinidante@gmail.com</a></p>
            <ul className="Footer-item__list">
                <li><a href="https://www.imdb.com/name/nm13629021/" target="_blank" rel="noreferrer">IMDB</a></li>
                <li><a href="https://www.instagram.com/danteperini/" target="_blank" rel="noreferrer">IG</a></li>
                <li><a href="https://www.linkedin.com/in/perinidante/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
        </div>
    );
};

export default Footer;