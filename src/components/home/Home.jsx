import "./Home.css";
import { useEffect, useRef } from "react";

const portfolioVideoWebm = "/media/Portfolio/REEL_PORTFOLIO_V06_mos-low.webm";
const portfolioVideoMp4 = "/media/Portfolio/REEL_PORTFOLIO_V06_mos-low.mp4";
const portfolioVideoMobileWebm = "/media/Portfolio/REEL_PORTFOLIO_V06_4-5_mos_low.webm";
const portfolioVideoMobileMp4 = "/media/Portfolio/REEL_PORTFOLIO_V06_4-5_mos_low.mp4";

const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const tryToPlay = () => {
            video.muted = true;
            const playPromise = video.play();
            if (playPromise) playPromise.catch(() => {});
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") tryToPlay();
        };

        tryToPlay();
        document.addEventListener("pointerdown", tryToPlay, { once: true });
        document.addEventListener("touchstart", tryToPlay, { once: true, passive: true });
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("pointerdown", tryToPlay);
            document.removeEventListener("touchstart", tryToPlay);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return(
        <div className="Home">
            <video
                ref={videoRef}
                className="Home__video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
                onContextMenu={(event) => event.preventDefault()}
            >
                <source src={portfolioVideoMobileWebm} type="video/webm" media="(max-width: 768px)" />
                <source src={portfolioVideoMobileMp4} type="video/mp4" media="(max-width: 768px)" />
                <source src={portfolioVideoWebm} type="video/webm" />
                <source src={portfolioVideoMp4} type="video/mp4" />
            </video>
        </div>
    )
}

export default Home;
