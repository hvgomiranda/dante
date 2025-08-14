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

const renderTitle = (titulo) => {
  const lineas = titulo.split('\n');

  return (
    <div>
      {lineas.map((linea, index) => (
        <p key={index}>{linea.trim() === '' ? '\u00A0' : linea}</p>
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

    const isVertical = (src) => {
    const img = new Image();
    img.src = src;
    return img.naturalHeight > img.naturalWidth;
    };

    return(
        <div className="VideoDetail">
            {videoFound.enlace ? (
                <Video key={videoFound.id} Video={videoFound}/>
            ) : videoFound["enlace-img"] ? (
                <a href={videoFound["enlace-img"]} target="_blank" rel="noreferrer">
                    <img
                        className={`VideoDetail__image ${isVertical(videoFound.imagenes[0]) ? "vertical" : ""}`}
                        src={videoFound.imagenes[0]}
                        alt={`${videoFound.titulo} - ${videoFound.id+1}`}
                        loading="lazy"
                    />
                </a>
            ) : (
                
                <img
                    className={`VideoDetail__image ${isVertical(videoFound.imagenes[0]) ? "vertical" : ""}`}
                    src={videoFound.imagenes[0]}
                    alt={`${videoFound.titulo} - ${videoFound.id+1}`}
                    loading="lazy"
                />
            )}

            <div className="VideoDetail__credits">
                <div>{ renderTitle(videoFound.creditos) }</div>
                <p>{ videoFound.playlist && 
                <>{playlist(videoFound)} {linkPlaylist(videoFound)}</>}</p>
            </div>
        </div>
    );
};

export default VideoDetail;