import "./Videos.css";
import HomeSection from "../home-section/HomeSection";
import { useParams } from "react-router-dom";

const Videos = ({ Datos }) => {

    const {seccion} = useParams();

    //film and tv series
    const order = {
        "film-tv-series": [6, 7, 8, 9, 11, 1, 10, 12],
        "music-videos": [0, 3, 4, 5, 2],
        "commercials": [23, 22, 14, 13, 15, 16, 17, 21, 18, 19, 20, 21]
    };
    const horizontal = {
        "film-tv-series": [8, 1],
        "music-videos": [4],
        "commercials": [15, 21, 20]
    };

    const Media = Datos.sort((a, b) => order[seccion].indexOf(a.id) -  order[seccion].indexOf(b.id));

    window.scrollTo(0,0);

    return(
        <div className="Videos">
            {Media.filter((dato) => (dato.tipo === seccion)).map((dato, index) => (
                <HomeSection
                    key={index}
                    index={horizontal[`${seccion}`]}
                    Media={dato}
                />
            ))}
        </div>
    );
}

export default Videos;