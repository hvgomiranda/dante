import "./HomeSection.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const HomeSection = ({ Media, index }) => {
    const [showCarousel, setShowCarousel] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 769 });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    //le agregar un espacio al título en cada /n del json
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

    //se fija si la imagen debe renderizarse apaisada (className HomeSection__containerLarge)
    const check = (medio, indice) => {
        return indice.includes(medio.id);
    };

    console.log(check(Media, index));

    //setteo del carousel -> slick-carousel
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

    //precarga de imágenes
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
                .catch((error) => console.error("Error preloading images:", error));
        };

        preloadImages();
    }, [Media.imagenes]);

    return (
        <div>
            {isDesktop && <motion.div
                className="HomeSection"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ amount: 0.05 }}
                onMouseEnter={() => setShowCarousel(true)}
                onMouseLeave={() => setShowCarousel(false)}
            >
                {showCarousel ? (
                    <div className={check(Media, index) ? "HomeSection__containerLarge" : "HomeSection__container"}>
                        <Link to={`/video/${Media.ruta}`}>
                        {imagesLoaded && (
                                <Slider {...settings} className="HomeSection__slider">
                                    {Media.imagenes.map((photo, index) => (
                                        <div key={ index }>
                                            <img
                                                className="HomeSection__image"
                                                src={ photo }
                                                alt={`${Media.titulo} - ${index+1}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            )}
                            {isDesktop && 
                            <div className="HomeSection__text">
                                <p>{renderTitulo(Media.titulo)}</p>
                            </div>
                            }
                        </Link>
                    </div>
                ) : (
                    <div className={check(Media, index) ? "HomeSection__containerLarge" : "HomeSection__container"}>
                        <Link to={`/video/${Media.ruta}`}>
                            <div className="HomeSection__slider">
                                <img
                                    className="HomeSection__image"
                                    src={Media.imagenes[0]}
                                    alt={`${Media.titulo}`}
                                />
                            </div>
                            {isMobile && 
                            <div className="HomeSection__text">
                                <p>{renderTitulo(Media.titulo)}</p>
                            </div>
                            }
                        </Link>
                    </div>
                )}
            </motion.div>}
            {isMobile && <motion.div
                className="HomeSection"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                viewport={{ amount: 0.01 }}
                onMouseEnter={() => setShowCarousel(true)}
                onMouseLeave={() => setShowCarousel(false)}>
                {showCarousel ? (
                    <div className={check(Media, index) ? "HomeSection__containerLarge" : "HomeSection__container"}>
                        <Link to={`/video/${Media.ruta}`}>
                        {imagesLoaded && (
                                <Slider {...settings} className="HomeSection__slider">
                                    {Media.imagenes.map((photo, index) => (
                                        <div key={ index }>
                                            <img
                                                className="HomeSection__image"
                                                src={ photo }
                                                alt={`${Media.titulo} - ${index+1}`}
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            )}
                            {isDesktop && 
                            <div className="HomeSection__text">
                                <p>{renderTitulo(Media.titulo)}</p>
                            </div>
                            }
                        </Link>
                    </div>
                ) : (
                    <div className={check(Media, index) ? "HomeSection__containerLarge" : "HomeSection__container"}>
                        <Link to={`/video/${Media.ruta}`}>
                            <div className="HomeSection__slider">
                                <img
                                    className="HomeSection__image"
                                    src={Media.imagenes[0]}
                                    alt={`${Media.titulo}`}
                                />
                            </div>
                            {isMobile && 
                            <div className="HomeSection__text">
                                <p>{renderTitulo(Media.titulo)}</p>
                            </div>
                            }
                        </Link>
                    </div>
                )}
            </motion.div>}
        </div>
    );
};

export default HomeSection;