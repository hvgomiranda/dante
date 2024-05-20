import "./Video.css";

const Video = ({ Video }) => {

  return(
      <iframe className="Video" src={`https://www.youtube.com/embed/${Video.enlace}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  )
};

export default Video;