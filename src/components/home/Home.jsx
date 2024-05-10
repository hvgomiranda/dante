import "./Home.css";
import HomeSection from "../home-section/HomeSection.jsx";

const Home = ({ Media }) => {
    return(  
        <div className="Home">
            {Media.filter((item) => item.home).map((item, index) => (
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