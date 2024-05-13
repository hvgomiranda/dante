import "./Videos.css";
import HomeSection from "../home-section/HomeSection";
import { useParams } from "react-router-dom";

const Videos = ({ Datos }) => {

    const {seccion} = useParams();

    window.scrollTo(0,0);

    return(
        <div className="Videos">
            {Datos.filter((dato) => (dato.tipo === seccion)).map((dato, index) => (
                <HomeSection
                    key={index}
                    Index={index}
                    Media={dato}
                />
            ))}
        </div>
    );
}

export default Videos;