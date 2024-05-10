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
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ amount: 0.05 }}
                style={{width:"100%", padding:"10px 10px 10px 0px"}}
            >
                <Contact />
            </motion.div>
        </div>
    );
}

export default Home;