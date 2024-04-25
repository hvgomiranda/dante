import "./Videos.css";
import { useParams } from "react-router-dom";
import Datos from "../../data_base/database.json";
import HomeSection from "../home-section/HomeSection";

const Videos = () => {

    const {seccion} = useParams();
    console.log(seccion)

    return(
        <div>
            {Datos.filter((dato) => (dato.tipo === seccion)).map((dato, index) => (
                <HomeSection
                key={index}
                Media={dato}
                />
            ))}
        </div>
    );
}

export default Videos;