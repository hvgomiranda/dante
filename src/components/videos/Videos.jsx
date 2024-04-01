import "./Videos.css";
import { useParams } from "react-router-dom";
import datos from "../../data_base/database.json";

const Videos = () => {

    const { tipo } = useParams();

    /*for(let i=0; i<data.length; i++){
        if(data[i].tipo === tipo){
            console.log(data[i].tipo);
        }
    }*/

    return(
        <div>
            {datos.map((dato) => {
                return(
                    <div></div>
                )
            })}
        </div>
    );
}

export default Videos;