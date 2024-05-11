import "./Home.css";
import HomeSection from "../home-section/HomeSection.jsx";
import Contact from "../contact/Contact.jsx";
import { motion } from "framer-motion";

const Home = ({ Media }) => {

    const Datos = Media.sort((a, b) => a.id - b.id);

    return(  
        <div className="Home">
            {Datos.filter((item) => item.home).map((item, index) => (
                <HomeSection
                key={index}
                Index={index}
                Media={item}
                />
            ))}
        </div>
    );
}

export default Home;