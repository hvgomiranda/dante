import "./Home.css";
import datos from "../../data_base/database.json";
import Video from "../video/Video.jsx";

const Home = () => {
    return(
        <div className="Home">
            <Video videoId={datos[0].enlace} />
            <Video videoId={datos[1].enlace} />
        </div>
    );
}

export default Home;