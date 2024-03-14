import React, { useState, useEffect } from "react";
import arrow from "../../assets/images/Vector.svg";
import "../Carousel/Carousel.scss";

function Carousel({ id, pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
        );
    };
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
    // Utilise le hook useEffect pour changer d'image toutes les 4 secondes
    useEffect(() => {
        const timer = setInterval(nextImage, 4000);
        // Nettoie le timer
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div key={id} className="carousel">
            <img
                className="carousel__picture"
                src={pictures[currentIndex]}
                alt="carousel"
            />
            <svg className="carousel__arrow-left" onClick={prevImage}>
                <use
                    className="carousel__arrow-left--icon"
                    xlinkHref={arrow + "#Vector_2"}
                ></use>
            </svg>
            <svg className="carousel__arrow-right" onClick={nextImage}>
                <use
                    className="carousel__arrow-right--icon"
                    xlinkHref={arrow + "#Vector_2"}
                ></use>
            </svg>
        </div>
    );
}

export default Carousel;
