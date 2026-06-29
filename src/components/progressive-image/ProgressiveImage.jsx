import { useEffect, useState } from "react";
import "./ProgressiveImage.css";

const ProgressiveImage = ({ className = "", src, alt, progressive = true, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [src]);

    return (
        <img
            {...props}
            className={`${className}${progressive ? ` ProgressiveImage${isLoaded ? " ProgressiveImage--loaded" : ""}` : ""}`}
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
        />
    );
};

export default ProgressiveImage;
