import "./Videos.css";
import HomeSection from "../home-section/HomeSection";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

const order = {
    "film-tv-series": [27, 26, 25, 6, 7, 8, 9, 11, 1, 10, 12],
    "music-videos": [24, 0, 3, 4, 5, 2],
    "commercials": [28, 23, 22, 14, 13, 15, 16, 17, 21, 18, 19, 20, 21]
};

const horizontal = {
    "film-tv-series": [7, 8, 1],
    "music-videos": [24, 4],
    "commercials": [13, 15, 21]
};

const Videos = ({ Datos }) => {

    const {seccion} = useParams();

    const Media = useMemo(() => {
        return [...Datos]
            .filter((dato) => dato.tipo === seccion)
            .sort((a, b) => order[seccion].indexOf(a.id) - order[seccion].indexOf(b.id));
    }, [Datos, seccion]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [seccion]);

    return(
        <div className="Videos">
            {Media.map((dato) => (
                <HomeSection
                    key={`${seccion}-${dato.id}`}
                    index={horizontal[`${seccion}`]}
                    Media={dato}
                />
            ))}
        </div>
    );
}

export default Videos;
