import "./HomeSection.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomeSection = ({ Media }) => {
    const [showCarousel, setShowCarousel] = useState(false);

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        swipe: false,
        initialSlide: 1,
        speed: 0,
        autoplaySpeed: 250,
        pauseOnHover: false
    };

    return (
        <div
            className="HomeSection"
            onMouseEnter={() => setShowCarousel(true)}
            onMouseLeave={() => setShowCarousel(false)}
        >
            {showCarousel ? (
                <div className="HomeSection__container">
                    <Link to={`/${Media.tipo}/${Media.titulo}`}>
                        <Slider {...settings} className="HomeSection__slider">
                            {Media.imagenes.map((photo, index) => (
                                <img
                                    key={index}
                                    className="HomeSection__image"
                                    src={photo}
                                    alt={`Image ${index}`}
                                />
                            ))}
                        </Slider>
                    </Link>
                </div>
            ) : (
                <div className="HomeSection__container">
                    <Link to={`/${Media.tipo}/${Media.titulo}`}>
                        <div className="HomeSection_slider">
                            <img
                                className="HomeSection__image"
                                src={Media.imagenes[0]}
                                alt="First Image"
                            />
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default HomeSection;