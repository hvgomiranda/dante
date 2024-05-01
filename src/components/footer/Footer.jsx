import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
    return(
        <motion.div 
            className="Footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ amount: 0.05 }}
        >
            <p className="Footer-item">Based in Buenos Aires</p>
            <p className="Footer-item"><a href="mailto:perinidante@gmail.com">perinidante@gmail.com</a></p>
            <ul className="Footer-item__list">
                <li><a href="https://www.imdb.com/name/nm13629021/" target="_blank" rel="noreferrer">IMDB</a></li>
                <li><a href="https://www.instagram.com/danteperini/" target="_blank" rel="noreferrer">IG</a></li>
                <li><a href="https://www.linkedin.com/in/perinidante/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
        </motion.div>
    );
};

export default Footer;