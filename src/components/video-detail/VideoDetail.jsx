import "./VideoDetail.css";
import Video from "../video/Video.jsx";
import { useParams } from "react-router-dom";

const VideoDetail = ({ Datos }) => {

    const { video } = useParams();
    const videoFound = Datos.find((item) => item.ruta === video);

    return(
        <div className="VideoDetail">
            {videoFound && 
            <Video
                key={videoFound.id}
                Video={videoFound}
            />}
            <div>
                <p>{videoFound.creditos}</p>
            </div>
        </div>
    );
};

export default VideoDetail;