import "./Home.css";
import HomeSection from "../home-section/HomeSection.jsx";

const Home = ({ Media }) => {

    const order = [7, 6, 24, 0, 13, 14, 8, 15, 1, 2, 16, 17];
    const horizontal = [13, 8, 2];
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