import "./HomeSection.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from "framer-motion";


const HomeSection = ({ Media, Index }) => {
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
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ amount: 0.05 }}
            className="HomeSection"
            onMouseEnter={() => setShowCarousel(true)}
            onMouseLeave={() => setShowCarousel(false)}
        >
            {showCarousel ? (
                <div className={!(Index===2||Index===5) ? "HomeSection__container" : "HomeSection_containerLarge"}>
                    <Link to={`/${Media.tipo}/${Media.titulo}`}>
                        <Slider {...settings} className="HomeSection__slider">
                            {Media.imagenes.map((photo, index) => (
                                <img
                                    key={index}
                                    className="HomeSection__image"
                                    src={photo}
                                    alt={`${Media.titulo} - ${index+1}`}
                                />
                            ))}
                        </Slider>
                    </Link>
                </div>
            ) : (
                <div className={!(Index===2||Index===5) ? "HomeSection__container" : "HomeSection_containerLarge"}>
                    <Link to={`/${Media.tipo}/${Media.titulo}`}>
                        <div className="HomeSection_slider">
                            <img
                                className="HomeSection__image"
                                src={Media.imagenes[0]}
                                alt={`${Media.titulo}`}
                            />
                        </div>
                    </Link>
                </div>
            )}
        </motion.div>
    );
};

export default HomeSection;