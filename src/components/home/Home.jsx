import "./Home.css";
import HomeSection from "../home-section/HomeSection.jsx";

const Home = ({ Media }) => {

    const Datos = Media.sort((a, b) => a.id - b.id);

    window.scrollTo(0,0);

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