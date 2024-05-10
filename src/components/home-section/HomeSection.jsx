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
        /*
          <div className="HomeSection__text">
                            {Media.titulo.split(" ").map((el, i) => (
                                <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.25,
                                    delay: i / 10,
                                    }}
                                key={i}
                                >
                                {el}{" "}
                                </motion.span>
                            ))}
                        </div>
                                                 <motion.div 
                        className="HomeSection__text"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}>
                            <p> { Media.titulo } </p>
                        </motion.div>       
        
        */

        <motion.div
            className="HomeSection"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ amount: 0.05 }}
            onMouseEnter={() => setShowCarousel(true)}
            onMouseLeave={() => setShowCarousel(false)}
        >
            {showCarousel ? (
                <div className={!(Index===2||Index===5) ? "HomeSection__container" : "HomeSection_containerLarge"}>
                    <Link to={`/video/${Media.ruta}`}>
                        <Slider {...settings} className="HomeSection__slider">
                            {Media.imagenes.map((photo, index) => (
                                <div key={ index }>
                                    <img
                                        className="HomeSection__image"
                                        src={ photo }
                                        alt={`${Media.titulo} - ${index+1}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                        <div 
                        className="HomeSection__text">
                            <p>{ Media.titulo }</p>
                        </div>
                    </Link>
                </div>
            ) : (
                <div className={!(Index===2||Index===5) ? "HomeSection__container" : "HomeSection_containerLarge"}>
                    <Link to={`/${Media.titulo}`}>
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