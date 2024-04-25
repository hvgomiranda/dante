import "./Home.css";
import HomeSection from "../home-section/HomeSection.jsx";
import Media from "../../data_base/database.json";

const Home = () => {    
    return(  
        <div className="Home">
            {Media.filter((item) => item.home).map((item, index) => (
                <HomeSection
                key={index}
                Media={item}
                />
            ))}
        </div>
    );
}

export default Home;