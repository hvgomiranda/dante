import "./VideoDetail.css";
import Video from "../video/Video.jsx";
import { useParams } from "react-router-dom";

const VideoDetail = ({ Datos }) => {

    const { video } = useParams();
    const videoFound = Datos.find((item) => item.ruta === video);

    const playlist = (videoFound) => {
        let text;
        if(videoFound.tipo === "commercials") text = "watch the full campaign ";
        else if(videoFound.tipo === "film-tv-series") text = "Watch the whole serie "
        return text;
    };

    //le agregar un espacio al título en cada /n del json
    const renderTitle = (titulo) => {
        const lineas = titulo.split('\n');
        return (
            <div>
            {lineas.map((linea, index) => (
                <p key={index}>{linea}</p>
            ))}
            </div>
        );
    };

    const linkPlaylist = (videoFound) => {
        return(
            <a 
            href={`https://www.youtube.com/playlist?list=${videoFound.playlist}`}
            target="_blank"
            rel="noreferrer">
            here
            </a>
        );
    };

    return(
        <div className="VideoDetail">
            {videoFound.enlace ?
            <Video
                key={videoFound.id}
                Video={videoFound}
            /> : 
            <img
                className="VideoDetail__image"
                src={videoFound.imagenes[0]}
                alt={`${videoFound.titulo} - ${videoFound.id+1}`}
                loading="lazy"
            />}
            <div className="VideoDetail__credits">
                <p>{ renderTitle(videoFound.creditos) }</p>
                <p>{ videoFound.playlist && 
                <>{playlist(videoFound)} {linkPlaylist(videoFound)}</>}</p>
            </div>
        </div>
    );
};

export default VideoDetail;