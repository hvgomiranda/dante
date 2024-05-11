import "./HomeSection.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HomeSection = ({ Media, Index }) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {

        setData(Media);

    }, []);

    const renderTitulo = (titulo) => {
        const lineas = titulo.split('\n');
        return (
          <div>
            {lineas.map((linea, index) => (
              <p key={index}>{linea.toUpperCase()}</p>
            ))}
          </div>
        );
      };

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        swipe: false,
        initialSlide: 0,
        speed: 0,
        autoplaySpeed: 250,
        pauseOnHover: false
    };

    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = Media.imagenes.map((photo) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = photo;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(imagePromises)
                .then(() => setImagesLoaded(true))
                .catch((error) => console.error('Error preloading images:', error));
        };

        preloadImages();
    }, [Media.imagenes]);

    return (
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
                    {imagesLoaded && (
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
                        )}
                        <div 
                        className="HomeSection__text">
                            <p>{renderTitulo(Media.titulo)}</p>
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