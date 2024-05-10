import "./Videos.css";
import HomeSection from "../home-section/HomeSection";
import { useParams } from "react-router-dom";

const Videos = ({ Datos }) => {

    const {seccion} = useParams();

    const DatosMezclados = Datos.sort(() => Math.random() - Math.random());

    return(
        <div className="Videos">
            {DatosMezclados.filter((dato) => (dato.tipo === seccion)).map((dato, index) => (
                <HomeSection
                    key={index}
                    Media={dato}
                />
            ))}
        </div>
    );
}

export default Videos;