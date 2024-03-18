import React, { useState, useEffect } from "react";
import "../Carousel/Carousel.scss";

function Carousel({ id, pictures }) {
    const [prevIndex, setPrevIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [key, setKey] = useState(Date.now()); // Utiliser Date.now() pour générer une clé unique lors de la première initialisation
    const [direction, setDirection] = useState("next");
    const [counter, setCounter] = useState(0);



    const nextImage = () => {
        const newIndex = (currentIndex + 1) % pictures.length;
        setPrevIndex(currentIndex);
        setCurrentIndex(newIndex);
        setDirection("next");
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        setPrevIndex(currentIndex);
        setCurrentIndex(newIndex);
        setDirection("prev");
    };
    // Utilise le hook useEffect pour changer d'image toutes les 4 secondes
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection("next");
            setTimeout(() => {
                nextImage();
                setPrevIndex(null);
            }, 300); // Utilise setTimeout pour attendre que la transition CSS soit terminée
        }, 6000); // Utilise setInterval pour changer d'image toutes les 6 secondes

        return () => {
            clearInterval(timer);  
        };
    }, [currentIndex, pictures.length]);

    useEffect(() => {
        setKey(Date.now()); // Utiliser Date.now() pour générer une clé unique à chaque changement d'image
        // ce qui permet de procéder aux transitions CSS
    }, [currentIndex]);
    // console.log(currentIndex)
    // console.log(pictures.length)
    
    return (
        <div key={id} className="carousel">
            <img
            // si prevIndex n'est pas null, affiche l'image précédente, sinon affiche l'image courante et la key pour générer une clé unique avec date.now()
                key={pictures[prevIndex !== null ? prevIndex : currentIndex] + key} 
                className={`carousel__picture ${
                    direction === "next" ? "prev" : "next"  
                }`}
                // si prevIndex n'est pas null, affiche l'image précédente, sinon affiche l'image courante
                src={pictures[prevIndex !== null ? prevIndex : currentIndex]}
                alt="previous carousel"
            />
            <img
                key={pictures[currentIndex]}
                className={`carousel__picture active ${direction}`}
                src={pictures[currentIndex]}
                alt="current carousel"
            />
            <div className={`${pictures.length > 1 ? "carousel__arrow-left" : "carousel__hidden"}`} onClick={prevImage}>                <svg
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
            <div className={`${pictures.length > 1 ? "carousel__arrow-right" : "carousel__hidden"}`} onClick={nextImage}>
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
            <span className={`${pictures.length > 1 ? "carousel__counter" : "carousel__hidden"}`}>
                {currentIndex + 1} / {pictures.length}
            </span>

        </div>
    );
}

export default Carousel;
