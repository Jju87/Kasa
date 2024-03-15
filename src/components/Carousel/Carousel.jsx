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
        const timer = setInterval(nextImage, 8000);
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
            <div className="carousel__arrow-left" onClick={prevImage}>
                <svg
                    className="carousel__arrow-left--icon"
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Vector">
                        <path
                            id="Vector_2"
                            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>
            <div className="carousel__arrow-right" onClick={nextImage}>
                <svg
                    className="carousel__arrow-right--icon"
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Vector">
                        <path
                            id="Vector_2"
                            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Carousel;
