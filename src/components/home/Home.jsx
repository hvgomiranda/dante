import "./Home.css";

const portfolioVideoWebm = "/media/Portfolio/REEL_PORTFOLIO_V06_mos-low.webm";
const portfolioVideoMp4 = "/media/Portfolio/REEL_PORTFOLIO_V06_mos-low.mp4";

const Home = () => {

    return(
        <div className="Home">
            <video
                className="Home__video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={portfolioVideoWebm} type="video/webm" />
                <source src={portfolioVideoMp4} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;
