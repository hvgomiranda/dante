import "./Home.css";
import HomeSection from "../home-section/HomeSection.jsx";

const Home = ({ Media }) => {

    const order = [0, 14, 8, 15, 1, 13, 16, 17, 2];
    const horizontal = [8, 13, 2];
    const Datos = Media.sort((a, b) => order.indexOf(a.id) -  order.indexOf(b.id));

    window.scrollTo(0,0);

    return(  
        <div className="Home">
            {Datos.filter(item => item.home).map((item, index) => (
                <HomeSection
                key={index}
                index={horizontal}
                Media={item}
                />
            ))}
        </div>
    );
}

export default Home;